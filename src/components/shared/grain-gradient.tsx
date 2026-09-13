import { cn } from "@/lib/utils"

type Blob = {
  /** CSS color */
  color: string
  /** position in % of the wrapper */
  x: number
  y: number
  /** size in % of wrapper width */
  size: number
}

/** Blob positions are relative to the arc area at the top of the section. */
const defaultBlobs: Blob[] = [
  { color: "#f7a8d8", x: 28, y: 18, size: 38 },
  { color: "#ffab8a", x: 52, y: 26, size: 42 },
  { color: "#ffd2c2", x: 74, y: 16, size: 32 },
  { color: "#ffc0cf", x: 40, y: 8, size: 30 },
]

/** Semicircle hanging from the top edge; everything outside it fades to the background. */
const arcMask = "radial-gradient(ellipse 55% 100% at 50% 0%, #000 45%, transparent 100%)"

export const grainNoise =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='220' height='220'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.1' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1.4 -0.2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")"

/**
 * Wraps content with a grainy, soft-colored semicircular arc at the top of the section.
 */
export function GrainGradient({
  children,
  blobs = defaultBlobs,
  className,
}: {
  children: React.ReactNode
  blobs?: Blob[]
  className?: string
}) {
  return (
    <div className={cn("relative isolate overflow-hidden bg-background", className)}>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[min(900px,75vw)] min-h-[420px] overflow-hidden"
        style={{ maskImage: arcMask, WebkitMaskImage: arcMask }}
      >
        {blobs.map((b, i) => (
          <div
            key={i}
            className="absolute aspect-square rounded-full opacity-80 blur-[90px] md:blur-[140px]"
            style={{
              left: `${b.x}%`,
              top: `${b.y}%`,
              width: `${b.size}%`,
              minWidth: 240,
              background: `radial-gradient(circle, ${b.color} 0%, ${b.color}00 70%)`,
              transform: "translate(-50%, -50%)",
            }}
          />
        ))}
        {/* grain: overlay blend keeps white areas clean and speckles the colored ones */}
        <div
          className="absolute inset-0 opacity-70 mix-blend-overlay"
          style={{ backgroundImage: grainNoise, backgroundSize: "220px 220px" }}
        />
        <div
          className="absolute inset-0 opacity-[0.12] mix-blend-multiply"
          style={{ backgroundImage: grainNoise, backgroundSize: "220px 220px" }}
        />
      </div>
      {children}
    </div>
  )
}
