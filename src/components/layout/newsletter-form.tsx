"use client"

import * as React from "react"
import { toast } from "sonner"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"

export function NewsletterForm() {
  const [email, setEmail] = React.useState("")
  const [agreed, setAgreed] = React.useState(false)

  function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!agreed) return toast.error("Please accept the terms to subscribe.")
    toast.success("You're on the list!")
    setEmail("")
  }

  return (
    <form onSubmit={onSubmit} className="mt-6 max-w-md">
      <div className="flex overflow-hidden rounded-full border border-background/30 focus-within:border-background">
        <Input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email address"
          aria-label="Email address"
          className="h-12 flex-1 rounded-none border-0 bg-transparent px-5 text-background placeholder:text-background/50 focus-visible:ring-0 dark:bg-transparent"
        />
        <button type="submit" className="m-1 rounded-full bg-background px-6 text-sm font-medium text-foreground">
          Subscribe
        </button>
      </div>
      <label className="mt-4 flex items-start gap-3 text-xs text-background/70">
        <Checkbox checked={agreed} onCheckedChange={(v) => setAgreed(!!v)} className="mt-0.5 border-background/40" />
        I agree to receive marketing emails and accept the terms and privacy policy.
      </label>
    </form>
  )
}
