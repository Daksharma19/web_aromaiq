import { renderLogoIcon } from "@/lib/logo-icon"

// Browser-tab favicon, generated from public/logo.png.

export const size = { width: 64, height: 64 }
export const contentType = "image/png"

export default function Icon() {
  return renderLogoIcon(size.width, 4)
}
