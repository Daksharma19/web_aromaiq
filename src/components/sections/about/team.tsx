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

      {/* Stacked cards on phones, two columns on tablets, one row with portraits meeting in the middle on desktop. */}
      <Reveal className="mx-auto mt-12 grid max-w-3xl gap-12 sm:grid-cols-2 sm:gap-8 md:mt-16 lg:flex lg:max-w-none lg:items-center lg:gap-6">
        <FounderCard founder={left} side="left" />
        <FounderCard founder={right} side="right" />
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

function FounderCard({ founder, side }: { founder: Founder; side: "left" | "right" }) {
  return (
    <div
      className={cn(
        "flex flex-col items-center gap-5 text-center lg:flex-1 lg:gap-6",
        side === "left" ? "lg:flex-row-reverse lg:text-right" : "lg:flex-row lg:text-left"
      )}
    >
      <div className={cn("w-full max-w-64 shrink-0 rounded-3xl p-2.5 shadow-[0_16px_40px_-20px_rgba(0,0,0,0.25)] lg:w-60", founder.frame)}>
        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
          <Media asset={founder.asset} label={false} className="object-top" sizes="(min-width: 1024px) 240px, 256px" />
        </div>
      </div>
      <div className="min-w-0 lg:flex-1">
        <p className="text-xl font-medium tracking-tight">{founder.name}</p>
        <p className="text-sm text-muted-foreground">{founder.role}</p>
        <p className={cn("mx-auto mt-3 max-w-64 text-sm text-muted-foreground lg:mx-0", side === "left" && "lg:ml-auto")}>
          {founder.bio}
        </p>
      </div>
    </div>
  )
}
