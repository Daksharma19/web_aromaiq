import type { LinkItem } from "@/types/content"

// Site-wide settings: brand, navigation and footer links.

export const siteConfig = {
  name: "AromaIQ",
  description: "Smart diffusers and fragrances for every room.",
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
