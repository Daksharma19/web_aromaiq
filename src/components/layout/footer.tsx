import Link from "next/link"
import { footerNav, legalNav, siteConfig, socialLinks } from "@/config/site"
import { NewsletterForm } from "@/components/layout/newsletter-form"
import { Wordmark } from "@/components/shared/wordmark"
import { grainNoise } from "@/components/shared/grain-gradient"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

// Brand glyphs from Simple Icons (simpleicons.org, CC0).
const socialIcons: Record<(typeof socialLinks)[number]["label"], string> = {
  Instagram:
    "M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077",
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
