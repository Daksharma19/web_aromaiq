import type { StaticImageData } from "next/image"

/** A media slot. While `src` and `video` are null, a tinted placeholder is rendered. */
export type Asset = {
  /** Public path, or a static import (hashed, immutable cache, blur placeholder). */
  src: string | StaticImageData | null
  video?: string | null
  alt: string
  /** Tailwind gradient classes for the placeholder, e.g. "from-[#eee] to-[#999]" */
  tone: string
}

export type LinkItem = {
  label: string
  href: string
}
