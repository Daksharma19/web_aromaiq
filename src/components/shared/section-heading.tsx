import { Reveal } from "@/components/shared/reveal"
import { cn } from "@/lib/utils"

export function SectionHeading({
  title,
  body,
  eyebrow,
  align = "center",
  className,
}: {
  title: string
  body?: string
  eyebrow?: string
  align?: "center" | "left"
  className?: string
}) {
  return (
    <Reveal className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && <p className="mb-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">{eyebrow}</p>}
      <h2 className="text-4xl font-light tracking-tight md:text-6xl">{title}</h2>
      {body && <p className="mt-4 text-muted-foreground md:text-lg">{body}</p>}
    </Reveal>
  )
}
