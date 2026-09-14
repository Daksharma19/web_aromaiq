import { readFile } from "node:fs/promises"
import path from "node:path"
import { ImageResponse } from "next/og"

// Shared renderer for the favicon (icon.tsx) and iOS home-screen icon (apple-icon.tsx):
// public/logo.png centred on a white square. Swap the logo file and both update.

const LOGO = { width: 102, height: 80 } // intrinsic size of public/logo.png

export async function renderLogoIcon(size: number, padding: number) {
  const data = await readFile(path.join(process.cwd(), "public", "logo.png"))
  const src = `data:image/png;base64,${data.toString("base64")}`
  const width = size - padding * 2
  const height = Math.round((width * LOGO.height) / LOGO.width)

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#ffffff" }}>
        {/* eslint-disable-next-line @next/next/no-img-element -- ImageResponse only renders plain <img> */}
        <img src={src} width={width} height={height} alt="" />
      </div>
    ),
    { width: size, height: size }
  )
}
