import Link from "next/link"
import { footerNav, legalNav, siteConfig, socialLinks } from "@/config/site"
import { NewsletterForm } from "@/components/layout/newsletter-form"
import { Wordmark } from "@/components/shared/wordmark"
import { grainNoise } from "@/components/shared/grain-gradient"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const socialIcons: Record<(typeof socialLinks)[number]["label"], string> = {
  Instagram:
    "M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 8.2a3.2 3.2 0 1 1 0-6.4 3.2 3.2 0 0 1 0 6.4ZM17.3 5.5a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4ZM12 2c-2.7 0-3 0-4.1.1C4.3 2.3 2.3 4.3 2.1 7.9 2 9 2 9.3 2 12s0 3 .1 4.1c.2 3.6 2.2 5.6 5.8 5.8 1.1.1 1.4.1 4.1.1s3 0 4.1-.1c3.6-.2 5.6-2.2 5.8-5.8.1-1.1.1-1.4.1-4.1s0-3-.1-4.1c-.2-3.6-2.2-5.6-5.8-5.8C15 2 14.7 2 12 2Z",
  LinkedIn:
    "M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45Z",
}

export function Footer() {
  return (
    <footer className="relative isolate overflow-hidden bg-foreground text-background">
      <div className="mx-auto max-w-[1440px] px-4 pt-16 md:px-8 md:pt-24">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <Wordmark className="text-3xl" />
            <h2 className="mt-8 text-2xl font-medium">Stay in the know</h2>
            <p className="mt-2 text-background/70">New scents, offers and home fragrance tips, straight to your inbox.</p>
            <NewsletterForm />
          </div>

          <div className="hidden grid-cols-3 gap-8 md:grid">
            {footerNav.map((col) => (
              <div key={col.title}>
                <h3 className="text-sm uppercase tracking-wider text-background/60">{col.title}</h3>
                <ul className="mt-5 space-y-3">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <Link href={l.href} className="underline-offset-4 hover:underline">{l.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <Accordion className="md:hidden">
            {footerNav.map((col) => (
              <AccordionItem key={col.title} value={col.title} className="border-background/20">
                <AccordionTrigger className="py-4 text-base">{col.title}</AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-3 pb-2">
                    {col.links.map((l) => (
                      <li key={l.label}><Link href={l.href} className="text-background/80">{l.label}</Link></li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-16 flex flex-col gap-6 border-t border-background/20 pt-8 md:flex-row md:items-center md:justify-between">
          {/* <div className="flex items-center gap-3">
            {["App Store", "Google Play"].map((s) => (
              <a key={s} href="#" className="rounded-lg border border-background/30 px-4 py-2 text-xs hover:bg-background/10">{s}</a>
            ))}
          </div> */}
          <div className="flex gap-2">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${s.label} (opens in a new tab)`}
                className="grid size-9 place-items-center rounded-full border border-background/20 transition-colors hover:bg-background hover:text-foreground"
              >
                <svg viewBox="0 0 24 24" className="size-4" fill="currentColor" aria-hidden><path d={socialIcons[s.label]} /></svg>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-4 text-xs text-background/60 md:flex-row md:justify-between">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {legalNav.map((l) => (
              <li key={l.label}><Link href={l.href} className="hover:text-background">{l.label}</Link></li>
            ))}
          </ul>
        </div>
      </div>

      {/* Oversized brand wordmark, clipped by the footer's bottom edge */}
      <div aria-hidden className="relative mt-12 h-[13vw] select-none md:mt-16">
        <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-[140%] bg-[radial-gradient(60%_100%_at_50%_100%,#ff9f8a55_0%,#f7a8d833_45%,transparent_75%)]" />
        <div
          className="pointer-events-none absolute inset-0 -z-10 opacity-40 mix-blend-overlay"
          style={{ backgroundImage: grainNoise, backgroundSize: "220px 220px" }}
        />
        <p className="absolute inset-x-0 top-0 whitespace-nowrap bg-gradient-to-r from-[#f7a8d8] via-[#ffab8a] to-[#ffd9b8] bg-clip-text text-center text-[20.5vw] font-semibold leading-[0.8] tracking-[-0.06em] text-transparent">
          AromaIQ
        </p>
      </div>
    </footer>
  )
}
