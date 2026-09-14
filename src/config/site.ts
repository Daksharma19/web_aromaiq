import type { LinkItem } from "@/types/content"

// Site-wide settings: brand, navigation and footer links.

export const siteConfig = {
  name: "AromaIQ",
  tagline: "Smart Home Fragrance",
  description:
    "AromaIQ smart diffusers and clean home fragrances. Schedule scents, control intensity from your phone and scent every room — flameless, app-controlled and made for home.",
  /** Production origin. Set NEXT_PUBLIC_SITE_URL in your hosting environment. */
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://aromaiq.in").replace(/\/$/, ""),
  locale: "en_US",
  keywords: [
    "smart diffuser",
    "home fragrance",
    "scent diffuser",
    "app controlled diffuser",
    "car diffuser",
    "room fragrance",
    "flameless home scent",
    "AromaIQ",
  ],
  /** Brand color used for browser UI and the web app manifest. */
  themeColor: "#ffffff",
  /** e.g. "@aromaiq" — leave undefined until the account exists. */
  twitterHandle: undefined as string | undefined,
}

/** Absolute URL for a site path, e.g. absoluteUrl("/about"). */
export function absoluteUrl(path = "/") {
  return `${siteConfig.url}${path.startsWith("/") ? path : `/${path}`}`
}

export const mainNav: LinkItem[] = [
  { label: "Smart Diffusers", href: "/#diffusers" },
  { label: "Collections", href: "/#collections" },
  { label: "About Us", href: "/about" },
]

export const footerNav: { title: string; links: LinkItem[] }[] = [
  {
    title: "About",
    links: [
      { label: "About us", href: "/about" },
      { label: "Careers", href: "#" },
      { label: "Press", href: "#" },
      { label: "Sustainability", href: "#" },
    ],
  },
  {
    title: "Learn",
    links: [
      { label: "How it works", href: "/#diffusers" },
      { label: "Fragrance guide", href: "#" },
      { label: "Journal", href: "#" },
      { label: "App", href: "#" },
    ],
  },
  {
    title: "Help",
    links: [
      { label: "Contact us", href: "#" },
      { label: "Shipping", href: "#" },
      { label: "Returns", href: "#" },
      { label: "FAQ", href: "#" },
    ],
  },
]

export const legalNav: LinkItem[] = [
  { label: "Privacy policy", href: "#" },
  { label: "Terms of service", href: "#" },
  { label: "Accessibility", href: "#" },
  { label: "Cookie settings", href: "#" },
]

export const socialLinks = [
  { label: "Instagram", href: "#" },
  { label: "TikTok", href: "#" },
  { label: "Facebook", href: "#" },
] as const
