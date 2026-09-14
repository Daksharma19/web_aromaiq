import Link from "next/link"
import { ArrowRightIcon } from "lucide-react"
import { diffusers, type Space } from "@/content/home"
import { Container } from "@/components/shared/container"
import { Media } from "@/components/shared/media"
import { SectionHeading } from "@/components/shared/section-heading"

function SpaceTile({ space }: { space: Space }) {
  return (
    <Link href="/#diffusers" className="group flex flex-col rounded-3xl bg-white/45 p-4 backdrop-blur-sm">
      <div className="relative aspect-[4/5] overflow-hidden rounded-2xl lg:aspect-auto lg:flex-1">
        <Media
          asset={space.asset}
          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw"
          label={false}
          className="transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="mt-4 flex items-end justify-between gap-2 px-1">
        <div>
          <p className="text-xs uppercase tracking-wider text-muted-foreground">{space.tagline}</p>
          <h3 className="mt-1 text-lg font-medium md:text-xl">{space.name}</h3>
        </div>
        <span className="grid size-9 place-items-center rounded-full bg-background transition-colors group-hover:bg-foreground group-hover:text-background">
          <ArrowRightIcon className="size-4" />
        </span>
      </div>
    </Link>
  )
}

export function Diffusers() {
  return (
    <Container as="section" id="diffusers" className="scroll-mt-24 py-20 md:py-32">
      <SectionHeading title={diffusers.title} body={diffusers.body} align="left" className="mb-12" />
      <div className="grid gap-4 lg:grid-cols-[1fr_1.4fr] lg:gap-6">
        <div className="relative min-h-[360px] overflow-hidden rounded-3xl lg:min-h-[560px]">
          <Media asset={diffusers.illustration} sizes="(min-width: 1024px) 40vw, 100vw" />
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:gap-6">
          {diffusers.spaces.map((space) => (
            <SpaceTile key={space.name} space={space} />
          ))}
        </div>
      </div>
    </Container>
  )
}
