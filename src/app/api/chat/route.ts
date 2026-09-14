import { chatbot } from "@/content/chatbot"
import { GroqError, streamGroqChat } from "@/lib/chat/groq"
import { systemPrompt } from "@/lib/chat/prompt"
import { clientIp, rateLimit } from "@/lib/chat/rate-limit"
import { chatRequestSchema, type ChatError } from "@/lib/chat/schema"

const MINUTE = 60_000
const DAY = 24 * 60 * MINUTE

/** Per visitor (by IP). */
const VISITOR_RULES = {
  burst: { limit: 6, windowMs: MINUTE },
  daily: { limit: 60, windowMs: DAY },
}
/** Across all visitors on this server instance — a budget guard against floods. */
const GLOBAL_RULES = { global: { limit: 3000, windowMs: DAY } }

/** Hard stop for a whole response, streaming included. */
const TIMEOUT_MS = 30_000

function error(status: number, message: string, headers?: HeadersInit) {
  return Response.json({ error: message } satisfies ChatError, { status, headers })
}

/** Rejects cross-site browser requests; same-origin requests and non-browser clients without Origin pass. */
function isSameOrigin(request: Request) {
  const origin = request.headers.get("origin")
  if (!origin) return true
  const host = request.headers.get("x-forwarded-host") ?? request.headers.get("host")
  try {
    return new URL(origin).host === host
  } catch {
    return false
  }
}

export async function POST(request: Request) {
  if (!isSameOrigin(request)) return error(403, "Forbidden")

  if (!process.env.GROQ_API_KEY) {
    console.error("[chat] GROQ_API_KEY is not set")
    return error(503, "The assistant is not available right now.")
  }

  let body: unknown
  try {
    body = await request.json()
  } catch {
    return error(400, "Invalid request.")
  }
  const parsed = chatRequestSchema.safeParse(body)
  if (!parsed.success) return error(400, parsed.error.issues[0]?.message ?? "Invalid request.")

  const visitor = rateLimit(clientIp(request.headers), VISITOR_RULES)
  if (!visitor.ok) {
    return error(429, "You're sending messages a little fast. Please wait a moment and try again.", {
      "Retry-After": String(visitor.retryAfter),
    })
  }
  const global = rateLimit("all", GLOBAL_RULES)
  if (!global.ok) {
    return error(429, `The assistant is very busy right now. You can reach us at ${chatbot.contactEmail}.`, {
      "Retry-After": String(global.retryAfter),
    })
  }

  try {
    const stream = await streamGroqChat({
      system: systemPrompt,
      messages: parsed.data.messages,
      signal: AbortSignal.any([request.signal, AbortSignal.timeout(TIMEOUT_MS)]),
    })
    return new Response(stream, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-store",
        "X-Accel-Buffering": "no",
      },
    })
  } catch (err) {
    if (err instanceof GroqError) {
      console.error("[chat]", err.message)
      if (err.status === 429) return error(503, "The assistant is very busy right now. Please try again in a minute.")
      return error(502, "The assistant couldn't answer just now. Please try again.")
    }
    if (err instanceof DOMException && err.name === "TimeoutError") {
      return error(504, "The assistant took too long to respond. Please try again.")
    }
    if (request.signal.aborted) return new Response(null, { status: 499 })
    console.error("[chat]", err)
    return error(500, "Something went wrong. Please try again.")
  }
}
