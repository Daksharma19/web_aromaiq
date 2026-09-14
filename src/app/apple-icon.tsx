import { ImageResponse } from "next/og"

// Home-screen icon for iOS. Replace with a designed PNG (src/app/apple-icon.png) when available.

export const size = { width: 180, height: 180 }
export const contentType = "image/png"

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #f7a8d8 0%, #ffab8a 55%, #ffd2c2 100%)",
          color: "#0a0a0a",
          fontSize: 80,
          fontWeight: 700,
          letterSpacing: -4,
        }}
      >
        a<span style={{ fontWeight: 300 }}>iq</span>
      </div>
    ),
    size
  )
}
