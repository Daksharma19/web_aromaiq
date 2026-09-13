import type { Asset } from "@/types/content"
import { Media } from "@/components/shared/media"

/** Translucent image-over-text card, designed to sit on a GrainGradient. */
export function GlassCard({ title, body, asset }: { title: string; body: string; asset: Asset }) {
  return (
    <article className="h-full overflow-hidden rounded-2xl bg-white/45 shadow-[0_1px_0_rgba(255,255,255,0.6)_inset] backdrop-blur-sm">
      <div className="relative aspect-[4/3]">
        <Media asset={asset} sizes="(min-width: 768px) 33vw, 100vw" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-medium tracking-tight">{title}</h3>
        <p className="mt-2 text-sm text-foreground/75">{body}</p>
      </div>
    </article>
  )
}
