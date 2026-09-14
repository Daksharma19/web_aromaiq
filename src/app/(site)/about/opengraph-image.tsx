import { siteConfig } from "@/config/site"
import { ogSize, renderOgImage } from "@/lib/og-image"

export const alt = `About ${siteConfig.name}`
export const size = ogSize
export const contentType = "image/png"

export default function OpengraphImage() {
  return renderOgImage({ title: "Built from a bedroom. Aimed at every room.", subtitle: `About ${siteConfig.name}` })
}
