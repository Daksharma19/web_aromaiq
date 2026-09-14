import { z } from "zod"

// Shared by the chat widget (to trim what it sends) and the API route (to validate it).

export const CHAT_LIMITS = {
  /** Characters per visitor message. */
  maxInput: 500,
  /** Past messages sent with each request, for context. */
  maxHistory: 12,
  /** Characters per message in history (assistant replies included). */
  maxMessage: 4000,
}

export const chatMessageSchema = z.object({
  role: z.enum(["user", "assistant"]),
  content: z.string().trim().min(1).max(CHAT_LIMITS.maxMessage),
})

export const chatRequestSchema = z.object({
  messages: z
    .array(chatMessageSchema)
    .min(1)
    .max(CHAT_LIMITS.maxHistory)
    .refine((m) => m.at(-1)?.role === "user", "The last message must be from the user")
    .refine((m) => m.at(-1)!.content.length <= CHAT_LIMITS.maxInput, "Message is too long"),
})

export type ChatMessage = z.infer<typeof chatMessageSchema>

/** Error body returned by /api/chat for non-streaming failures. */
export type ChatError = { error: string }
