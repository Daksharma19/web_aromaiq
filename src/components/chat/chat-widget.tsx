"use client"

import * as React from "react"
import Image from "next/image"
import { AnimatePresence, motion, useReducedMotion } from "motion/react"
import { ArrowUpIcon, RotateCcwIcon, SquareIcon, XIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { chatbot } from "@/content/chatbot"
import { CHAT_LIMITS } from "@/lib/chat/schema"
import { MessageContent } from "@/components/chat/message-content"
import { useChat, type Message } from "@/components/chat/use-chat"

const ease = [0.22, 1, 0.36, 1] as const

/** Floating AromaIQ assistant: launcher button plus a chat panel (full screen on phones). */
export function ChatWidget() {
  const [open, setOpen] = React.useState(false)
  // Idle waves invite the first click; once the visitor has opened the chat they stay gone.
  const [hasOpened, setHasOpened] = React.useState(false)
  // Lives here, not in the panel, so a reply keeps streaming while the panel is closed.
  const chat = useChat()
  const launcherRef = React.useRef<HTMLButtonElement>(null)
  const reduce = useReducedMotion()

  const close = React.useCallback(() => {
    setOpen(false)
    launcherRef.current?.focus()
  }, [])

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            key="panel"
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.3, ease }}
            className="fixed z-[60] origin-bottom-right max-sm:inset-0 sm:bottom-24 sm:right-6 sm:h-[min(640px,calc(100svh-8rem))] sm:w-[400px]"
          >
            <ChatPanel chat={chat} onClose={close} />
          </motion.div>
        )}
      </AnimatePresence>

      <div className={cn("fixed bottom-4 right-4 z-[60] sm:bottom-6 sm:right-6", open && "max-sm:hidden")}>
        <AnimatePresence>{!hasOpened && !reduce && <LauncherWaves key="waves" />}</AnimatePresence>
        <motion.button
          ref={launcherRef}
          type="button"
          onClick={() => {
            if (open) return close()
            setOpen(true)
            setHasOpened(true)
          }}
          aria-label={open ? "Close chat" : `Chat with ${chatbot.name}`}
          aria-expanded={open}
          whileHover={reduce ? undefined : { scale: 1.05 }}
          whileTap={reduce ? undefined : { scale: 0.95 }}
          className="relative grid size-14 place-items-center rounded-full border bg-white text-foreground shadow-[0_12px_32px_-8px_rgba(0,0,0,0.35)] outline-none focus-visible:ring-4 focus-visible:ring-ring/50"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={open ? "close" : "open"}
              initial={{ rotate: -45, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 45, opacity: 0 }}
              transition={{ duration: 0.18 }}
              className="grid place-items-center"
            >
              {open ? <XIcon className="size-6" /> : <Image src="/robot.svg" alt="" width={36} height={36} className="size-9" />}
            </motion.span>
          </AnimatePresence>
        </motion.button>
      </div>
    </>
  )
}

function ChatPanel({ chat, onClose }: { chat: ReturnType<typeof useChat>; onClose: () => void }) {
  const { messages, status, error, coolingDown, canRetry, send, retry, stop, reset } = chat
  const [input, setInput] = React.useState("")
  const inputRef = React.useRef<HTMLTextAreaElement>(null)
  const scrollRef = React.useRef<HTMLDivElement>(null)
  const busy = status !== "idle"

  // On open: jump to the latest message and focus the input.
  React.useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight })
    inputRef.current?.focus({ preventScroll: true })
  }, [])

  // Follow new content while the visitor is near the bottom; don't yank them back if they scrolled up to read.
  const lastContent = messages.at(-1)?.content
  React.useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    const nearBottom = el.scrollHeight - el.scrollTop - el.clientHeight < 120
    if (nearBottom || messages.at(-1)?.role === "user") el.scrollTo({ top: el.scrollHeight })
  }, [messages, lastContent, status, error])

  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose()
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [onClose])

  function submit(text = input) {
    if (!text.trim() || busy || coolingDown) return
    send(text)
    setInput("")
    inputRef.current?.focus()
  }

  const remaining = CHAT_LIMITS.maxInput - input.length

  return (
    <div
      role="dialog"
      aria-label={`Chat with ${chatbot.name}`}
      data-lenis-prevent
      className="flex h-full flex-col overflow-hidden bg-background/95 backdrop-blur-xl sm:rounded-3xl sm:border sm:shadow-[0_24px_64px_-16px_rgba(0,0,0,0.3)]"
    >
      <header className="flex items-center gap-3 border-b px-4 py-3 max-sm:pt-[max(0.75rem,env(safe-area-inset-top))]">
        <div className="grid size-10 shrink-0 place-items-center rounded-full border bg-white">
          <Image src="/logo.png" alt="" width={26} height={20} className="h-auto w-6" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate font-medium leading-tight">{chatbot.name}</p>
          <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <span className={cn("size-1.5 rounded-full", busy ? "animate-pulse bg-amber-500" : "bg-emerald-500")} />
            {status === "waiting" ? "Thinking…" : status === "streaming" ? "Typing…" : "Online"}
          </p>
        </div>
        {messages.length > 0 && (
          <IconButton label="Start a new chat" onClick={reset}>
            <RotateCcwIcon className="size-4" />
          </IconButton>
        )}
        <IconButton label="Close chat" onClick={onClose}>
          <XIcon className="size-5" />
        </IconButton>
      </header>

      <div ref={scrollRef} className="flex-1 overflow-y-auto overscroll-contain px-4 py-5">
        <div aria-live="polite" aria-relevant="additions" className="space-y-4">
          <Bubble role="assistant">{chatbot.greeting}</Bubble>

          {messages.length === 0 && (
            <div className="flex flex-wrap gap-2 pl-1">
              {chatbot.suggestions.map((q) => (
                <button
                  key={q}
                  type="button"
                  onClick={() => submit(q)}
                  disabled={coolingDown}
                  className="rounded-full border px-3.5 py-1.5 text-left text-sm transition-colors hover:border-foreground hover:bg-foreground hover:text-background disabled:opacity-50"
                >
                  {q}
                </button>
              ))}
            </div>
          )}

          {messages.map((m) => (
            <ChatMessage key={m.id} message={m} />
          ))}

          {status === "waiting" && <TypingIndicator />}

          {error && (
            <div role="alert" className="flex flex-wrap items-center gap-x-3 gap-y-2 rounded-2xl border border-destructive/20 bg-destructive/5 px-4 py-3 text-sm text-destructive">
              <span className="flex-1">{error}</span>
              {canRetry && !coolingDown && (
                <button type="button" onClick={retry} className="font-medium underline underline-offset-2">
                  Try again
                </button>
              )}
            </div>
          )}
        </div>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault()
          submit()
        }}
        className="border-t px-3 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]"
      >
        <div className="flex items-end gap-2 rounded-3xl border bg-background px-2 py-1.5 transition-colors focus-within:border-foreground/40">
          <textarea
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value.slice(0, CHAT_LIMITS.maxInput))}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey && !e.nativeEvent.isComposing) {
                e.preventDefault()
                submit()
              }
            }}
            rows={1}
            maxLength={CHAT_LIMITS.maxInput}
            placeholder={coolingDown ? "Please wait a moment…" : "Ask about AromaIQ…"}
            aria-label="Your message"
            className="field-sizing-content max-h-32 min-h-9 flex-1 resize-none bg-transparent px-2 py-2 text-base outline-none placeholder:text-muted-foreground sm:text-sm"
          />
          {busy ? (
            <SendButton label="Stop generating" onClick={stop}>
              <SquareIcon className="size-3.5 fill-current" />
            </SendButton>
          ) : (
            <SendButton label="Send message" type="submit" disabled={!input.trim() || coolingDown}>
              <ArrowUpIcon className="size-4" />
            </SendButton>
          )}
        </div>
        <p className="mt-2 flex justify-between gap-2 px-2 text-[11px] text-muted-foreground">
          <span>AI can make mistakes. For anything important, email {chatbot.contactEmail}.</span>
          {remaining <= 100 && <span className="shrink-0 tabular-nums">{remaining}</span>}
        </p>
      </form>
    </div>
  )
}

function ChatMessage({ message }: { message: Message }) {
  return (
    <Bubble role={message.role}>
      {message.role === "assistant" ? <MessageContent text={message.content} /> : message.content}
    </Bubble>
  )
}

function Bubble({ role, children }: { role: Message["role"]; children: React.ReactNode }) {
  const user = role === "user"
  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, ease }}
      className={cn("flex", user && "justify-end")}
    >
      <div
        className={cn(
          "max-w-[85%] rounded-3xl px-4 py-2.5 text-sm leading-relaxed break-words",
          user ? "whitespace-pre-wrap rounded-br-lg bg-foreground text-background" : "rounded-bl-lg bg-muted"
        )}
      >
        <span className="sr-only">{user ? "You: " : `${chatbot.name}: `}</span>
        {children}
      </div>
    </motion.div>
  )
}

/** Soft brand-blue ripples radiating from the launcher. */
function LauncherWaves() {
  return (
    <motion.div
      aria-hidden
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
      className="pointer-events-none absolute inset-0"
    >
      {[0, 0.8, 1.6].map((delay) => (
        <motion.span
          key={delay}
          className="absolute inset-0 rounded-full bg-[#35BBFE]"
          initial={{ scale: 1, opacity: 0 }}
          animate={{ scale: [1, 1.9], opacity: [0.35, 0] }}
          transition={{ duration: 2.4, ease: "easeOut", repeat: Infinity, delay }}
        />
      ))}
    </motion.div>
  )
}

function TypingIndicator() {
  return (
    <div className="flex" aria-label="Assistant is typing">
      <div className="flex gap-1 rounded-3xl rounded-bl-lg bg-muted px-4 py-3.5">
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="size-1.5 rounded-full bg-foreground/40"
            animate={{ opacity: [0.3, 1, 0.3], y: [0, -3, 0] }}
            transition={{ duration: 1, repeat: Infinity, delay: i * 0.15 }}
          />
        ))}
      </div>
    </div>
  )
}

function IconButton({ label, onClick, children }: { label: string; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      title={label}
      className="grid size-9 shrink-0 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
    >
      {children}
    </button>
  )
}

function SendButton({ label, ...props }: React.ComponentProps<"button"> & { label: string }) {
  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      className="mb-0.5 grid size-9 shrink-0 place-items-center rounded-full bg-foreground text-background transition-opacity disabled:opacity-30"
      {...props}
    />
  )
}
