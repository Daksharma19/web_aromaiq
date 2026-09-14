import { ImageResponse } from "next/og"

// Shared template for the per-page social share cards (opengraph-image.tsx files).

export const ogSize = { width: 1200, height: 630 }

export function renderOgImage({ title, subtitle }: { title: string; subtitle: string }) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#ffffff",
          backgroundImage:
            "radial-gradient(circle at 20% 0%, #f7a8d8 0%, #f7a8d800 45%), radial-gradient(circle at 60% 10%, #ffab8a 0%, #ffab8a00 50%), radial-gradient(circle at 90% 0%, #ffd2c2 0%, #ffd2c200 40%)",
          color: "#0a0a0a",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 56, fontWeight: 700, letterSpacing: -2 }}>
          aroma<span style={{ fontWeight: 300 }}>iq</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 84, fontWeight: 500, letterSpacing: -3, lineHeight: 1.05 }}>{title}</div>
          <div style={{ marginTop: 24, fontSize: 34, color: "#525252" }}>{subtitle}</div>
        </div>
      </div>
    ),
    ogSize
  )
}
