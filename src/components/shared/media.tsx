import Image from "next/image"
import { cn } from "@/lib/utils"
import type { Asset } from "@/types/content"

/**
 * Renders a video, an image, or a gradient placeholder (until real assets are attached).
 * The parent must be positioned (relative) and sized.
 */
export function Media({
  asset,
  className,
  sizes = "100vw",
  preload = false,
  label = true,
}: {
  asset: Asset
  className?: string
  sizes?: string
  preload?: boolean
  label?: boolean
}) {
  if (asset.video) {
    return (
      <video
        className={cn("absolute inset-0 size-full object-cover", className)}
        src={asset.video}
        poster={asset.src ?? undefined}
        aria-label={asset.alt}
        autoPlay
        muted
        loop
        playsInline
      />
    )
  }

  if (asset.src) {
    return (
      <Image
        src={asset.src}
        alt={asset.alt}
        fill
        sizes={sizes}
        preload={preload}
        className={cn("object-cover", className)}
      />
    )
  }

  return (
    <div
      role="img"
      aria-label={`${asset.alt} (placeholder)`}
      className={cn("absolute inset-0 bg-gradient-to-br", asset.tone, className)}
    >
      {label && (
        <span className="absolute bottom-3 right-3 rounded-full bg-white/60 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-black/60 backdrop-blur">
          {asset.alt}
        </span>
      )}
    </div>
  )
}
