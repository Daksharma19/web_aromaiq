"use client"

import * as React from "react"
import { CHAT_LIMITS, type ChatError, type ChatMessage } from "@/lib/chat/schema"

export type Message = ChatMessage & { id: string }
export type ChatStatus = "idle" | "waiting" | "streaming"

const STORAGE_KEY = "aromaiq-chat"
/** Client-side cooldown after a 429 when the server doesn't say how long to wait. */
const DEFAULT_RETRY_SECONDS = 20

const newId = () => Math.random().toString(36).slice(2, 10)

function load(): Message[] {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY)
    const parsed = raw ? (JSON.parse(raw) as Message[]) : []
    return Array.isArray(parsed) ? parsed.filter((m) => m?.id && m.content && (m.role === "user" || m.role === "assistant")) : []
  } catch {
    return []
  }
}

function save(messages: Message[]) {
  try {
    if (messages.length) sessionStorage.setItem(STORAGE_KEY, JSON.stringify(messages))
    else sessionStorage.removeItem(STORAGE_KEY)
  } catch {
    // Storage can be unavailable (private mode, blocked site data) — the chat still works in memory.
  }
}

/** Chat state for the assistant: sends history to /api/chat and streams the reply into the last message. */
export function useChat() {
  // Restored lazily: the widget renders closed on the server and the client alike, so messages
  // never affect the hydrated markup. (On the server `sessionStorage` throws and load() returns [].)
  const [messages, setMessages] = React.useState<Message[]>(load)
  const [status, setStatus] = React.useState<ChatStatus>("idle")
  const [error, setError] = React.useState<string | null>(null)
  const [cooldownUntil, setCooldownUntil] = React.useState(0)
  const abortRef = React.useRef<AbortController | null>(null)

  React.useEffect(() => () => abortRef.current?.abort(), [])

  // Persist the conversation for this tab once a reply has finished.
  React.useEffect(() => {
    if (status === "idle") save(messages)
  }, [messages, status])

  // Clear the cooldown once it has passed so the input re-enables.
  React.useEffect(() => {
    if (!cooldownUntil) return
    const t = setTimeout(() => setCooldownUntil(0), Math.max(0, cooldownUntil - Date.now()))
    return () => clearTimeout(t)
  }, [cooldownUntil])

  const request = React.useCallback(async (history: Message[]) => {
    const controller = new AbortController()
    abortRef.current = controller
    setError(null)
    setStatus("waiting")

    const assistantId = newId()
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: history.slice(-CHAT_LIMITS.maxHistory).map(({ role, content }) => ({
            role,
            content: content.slice(0, CHAT_LIMITS.maxMessage),
          })),
        }),
        signal: controller.signal,
      })

      if (!res.ok || !res.body) {
        const body = (await res.json().catch(() => null)) as ChatError | null
        if (res.status === 429) {
          const seconds = Number(res.headers.get("Retry-After")) || DEFAULT_RETRY_SECONDS
          setCooldownUntil(Date.now() + Math.min(seconds, 120) * 1000)
        }
        throw new Error(body?.error ?? "Something went wrong. Please try again.")
      }

      const reader = res.body.pipeThrough(new TextDecoderStream()).getReader()
      let text = ""
      while (true) {
        const { value, done } = await reader.read()
        if (done) break
        if (!value) continue
        if (!text) setStatus("streaming")
        text += value
        const content = text
        setMessages((prev) =>
          prev.at(-1)?.id === assistantId
            ? [...prev.slice(0, -1), { ...prev.at(-1)!, content }]
            : [...prev, { id: assistantId, role: "assistant", content }]
        )
      }
      if (!text) throw new Error("The assistant didn't reply. Please try again.")
    } catch (err) {
      if (controller.signal.aborted) return
      setError(err instanceof Error && err.message !== "Failed to fetch" ? err.message : "You seem to be offline. Check your connection and try again.")
    } finally {
      if (abortRef.current === controller) abortRef.current = null
      setStatus("idle")
    }
  }, [])

  const send = React.useCallback(
    (input: string) => {
      const content = input.trim().slice(0, CHAT_LIMITS.maxInput)
      if (!content || status !== "idle") return
      const next = [...messages, { id: newId(), role: "user" as const, content }]
      setMessages(next)
      void request(next)
    },
    [messages, request, status]
  )

  /** Re-asks the last question after an error. */
  const retry = React.useCallback(() => {
    if (status !== "idle" || messages.at(-1)?.role !== "user") return
    void request(messages)
  }, [messages, request, status])

  const stop = React.useCallback(() => abortRef.current?.abort(), [])

  const reset = React.useCallback(() => {
    abortRef.current?.abort()
    setMessages([])
    setError(null)
  }, [])

  return {
    messages,
    status,
    error,
    coolingDown: cooldownUntil > 0,
    canRetry: !!error && messages.at(-1)?.role === "user",
    send,
    retry,
    stop,
    reset,
  }
}
