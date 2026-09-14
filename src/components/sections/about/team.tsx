import { team } from "@/content/about"
import { Container } from "@/components/shared/container"
import { Media } from "@/components/shared/media"
import { Reveal } from "@/components/shared/reveal"
import { SectionHeading } from "@/components/shared/section-heading"
import { cn } from "@/lib/utils"

// Row 1: three equal tiles (the middle one slightly taller). Row 2: four tiles, varied widths.
const gallerySpans = [
  "lg:col-span-4 lg:h-48",
  "lg:col-span-4 lg:h-52",
  "lg:col-span-4 lg:h-48",
  "lg:col-span-3 lg:h-60",
  "lg:col-span-3 lg:h-60",
  "lg:col-span-2 lg:h-60",
  "lg:col-span-4 lg:h-60",
]

export function Team() {
  const [left, right] = team.founders

  return (
    <Container as="section" className="py-20 md:py-32">
      <SectionHeading eyebrow={team.eyebrow} title={team.title} className="max-w-xl" />

      <Reveal className="mt-12 grid items-center gap-10 sm:grid-cols-2 md:mt-16 lg:grid-cols-[1fr_auto_auto_1fr] lg:gap-8">
        <FounderText founder={left} align="right" className="order-2 sm:order-1 lg:order-none" />
        <Portrait founder={left} className="order-1 sm:order-2 lg:order-none" />
        <Portrait founder={right} className="order-3 lg:order-none" />
        <FounderText founder={right} className="order-4 lg:order-none" />
      </Reveal>

      <p className="mt-20 text-center text-xs uppercase tracking-[0.2em] text-muted-foreground md:mt-28">
        {team.galleryEyebrow}
      </p>
      <ul className="mt-6 grid grid-cols-2 gap-3 lg:grid-cols-12 lg:items-start">
        {team.gallery.map((item, i) => (
          <li
            key={item.label}
            className={cn(
              "relative aspect-[4/3] overflow-hidden rounded-2xl lg:aspect-auto lg:h-52",
              i === 0 && "col-span-2",
              gallerySpans[i]
            )}
          >
            <Media
              asset={item.asset}
              label={false}
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            />
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/55 to-transparent" />
            <p className="absolute bottom-3 left-4 text-xs font-semibold uppercase tracking-wide text-white md:text-sm">
              {item.label}
            </p>
          </li>
        ))}
      </ul>
    </Container>
  )
}

type Founder = (typeof team.founders)[number]

function Portrait({ founder, className }: { founder: Founder; className?: string }) {
  return (
    <div className={cn("mx-auto w-full max-w-64 rounded-3xl p-2.5 shadow-[0_16px_40px_-20px_rgba(0,0,0,0.25)] lg:w-60", founder.frame, className)}>
      <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
        <Media asset={founder.asset} label={false} className="object-top" sizes="(min-width: 1024px) 240px, 256px" />
      </div>
    </div>
  )
}

function FounderText({ founder, align = "left", className }: { founder: Founder; align?: "left" | "right"; className?: string }) {
  return (
    <div className={cn("text-center sm:text-left", align === "right" && "lg:text-right", className)}>
      <p className="text-xl font-medium tracking-tight">{founder.name}</p>
      <p className="text-sm text-muted-foreground">{founder.role}</p>
      <p className={cn("mx-auto mt-3 max-w-60 text-sm text-muted-foreground sm:mx-0", align === "right" && "lg:ml-auto")}>{founder.bio}</p>
    </div>
  )
}
