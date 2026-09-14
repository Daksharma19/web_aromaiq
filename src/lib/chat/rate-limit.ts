// Fixed-window rate limiter kept in server memory.
// On serverless hosts each instance has its own memory, so limits are per instance — good enough to stop
// casual abuse. Swap for a shared store (e.g. Upstash Redis) if the bot starts getting heavy traffic.

type Window = { count: number; resetAt: number }

export type RateLimitRule = { limit: number; windowMs: number }

export type RateLimitResult = { ok: true } | { ok: false; retryAfter: number }

const buckets = new Map<string, Window>()
const MAX_KEYS = 10_000

function sweep(now: number) {
  for (const [key, w] of buckets) if (w.resetAt <= now) buckets.delete(key)
}

/** Counts one hit for `id` against every rule; rejects if any rule is exceeded. */
export function rateLimit(id: string, rules: Record<string, RateLimitRule>): RateLimitResult {
  const now = Date.now()
  if (buckets.size > MAX_KEYS) sweep(now)

  const windows = Object.entries(rules).map(([name, rule]) => {
    const key = `${name}:${id}`
    let w = buckets.get(key)
    if (!w || w.resetAt <= now) {
      w = { count: 0, resetAt: now + rule.windowMs }
      buckets.set(key, w)
    }
    return { w, rule }
  })

  const blocked = windows.filter(({ w, rule }) => w.count >= rule.limit)
  if (blocked.length) {
    const retryAfter = Math.max(...blocked.map(({ w }) => Math.ceil((w.resetAt - now) / 1000)))
    return { ok: false, retryAfter }
  }

  for (const { w } of windows) w.count++
  return { ok: true }
}

/** Best-effort client IP from proxy headers (Vercel sets x-forwarded-for / x-real-ip). */
export function clientIp(headers: Headers) {
  return headers.get("x-forwarded-for")?.split(",")[0]?.trim() || headers.get("x-real-ip") || "unknown"
}
