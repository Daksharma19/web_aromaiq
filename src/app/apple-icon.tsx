import { renderLogoIcon } from "@/lib/logo-icon"

// Home-screen icon for iOS, generated from public/logo.png.

export const size = { width: 180, height: 180 }
export const contentType = "image/png"

export default function AppleIcon() {
  return renderLogoIcon(size.width, 24)
}
