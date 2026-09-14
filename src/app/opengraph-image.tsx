import { siteConfig } from "@/config/site"
import { ogSize, renderOgImage } from "@/lib/og-image"

// Default social share card (Open Graph + Twitter).

export const alt = `${siteConfig.name} — ${siteConfig.tagline}`
export const size = ogSize
export const contentType = "image/png"

export default function OpengraphImage() {
  return renderOgImage({ title: "Scent that sets the mood", subtitle: "Smart diffusers & clean home fragrances" })
}
