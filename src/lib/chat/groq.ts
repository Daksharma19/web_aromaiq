import type { ChatMessage } from "@/lib/chat/schema"

// Groq exposes an OpenAI-compatible Chat Completions API; plain fetch keeps us free of an SDK dependency.

const GROQ_URL = "https://api.groq.com/openai/v1/chat/completions"
const DEFAULT_MODEL = "openai/gpt-oss-120b"

export class GroqError extends Error {
  readonly status: number

  constructor(status: number, message: string) {
    super(message)
    this.status = status
  }
}

/**
 * Starts a streaming completion and returns a stream of plain UTF-8 text deltas.
 * Throws GroqError before streaming starts if Groq rejects the request.
 */
export async function streamGroqChat({
  system,
  messages,
  signal,
}: {
  system: string
  messages: ChatMessage[]
  signal: AbortSignal
}): Promise<ReadableStream<Uint8Array>> {
  const model = process.env.GROQ_MODEL || DEFAULT_MODEL
  const res = await fetch(GROQ_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model,
      messages: [{ role: "system", content: system }, ...messages],
      stream: true,
      temperature: 0.4,
      // Includes hidden reasoning tokens on reasoning models, so leave headroom beyond the visible reply.
      max_completion_tokens: 1024,
      // gpt-oss models think before answering; a short think keeps replies fast for simple FAQ questions.
      ...(model.startsWith("openai/gpt-oss") && { reasoning_effort: "low" }),
    }),
    signal,
  })

  if (!res.ok || !res.body) {
    const detail = await res.text().catch(() => "")
    throw new GroqError(res.status, `Groq request failed (${res.status}): ${detail.slice(0, 300)}`)
  }

  const encoder = new TextEncoder()
  const reader = res.body.pipeThrough(new TextDecoderStream()).getReader()
  let buffer = ""

  return new ReadableStream<Uint8Array>({
    async pull(controller) {
      try {
        // Keep reading until at least one SSE event produced text (or the stream ends).
        while (true) {
          const { value, done } = await reader.read()
          if (done) return controller.close()

          buffer += value
          const lines = buffer.split("\n")
          buffer = lines.pop() ?? ""

          let text = ""
          for (const line of lines) {
            const data = line.trim()
            if (!data.startsWith("data:")) continue
            const payload = data.slice(5).trim()
            if (payload === "[DONE]") {
              if (text) controller.enqueue(encoder.encode(text))
              return controller.close()
            }
            try {
              text += JSON.parse(payload).choices?.[0]?.delta?.content ?? ""
            } catch {
              // Ignore malformed keep-alive fragments.
            }
          }
          if (text) return controller.enqueue(encoder.encode(text))
        }
      } catch (err) {
        controller.error(err)
      }
    },
    cancel(reason) {
      return reader.cancel(reason)
    },
  })
}
