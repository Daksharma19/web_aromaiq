import type { StaticImageData } from "next/image"

/** A static import (`import x from "./photo.jpg"`) or a public path / remote URL. */
export type ImageSrc = StaticImageData | string

/** A media slot. While `src` and `video` are null, a tinted placeholder is rendered. */
export type Asset = {
  src: ImageSrc | null
  /** Path of a file in /public/videos. `src` is used as its poster. */
  video?: string | null
  alt: string
  /** Tailwind gradient classes for the placeholder, e.g. "from-[#eee] to-[#999]" */
  tone: string
}

export type LinkItem = {
  label: string
  href: string
}
