import { hero } from "@/content/home"
import { Container } from "@/components/shared/container"
import { Media } from "@/components/shared/media"
import { PillLink } from "@/components/shared/pill-link"
import { Reveal } from "@/components/shared/reveal"

export function Hero() {
  return (
    <section className="relative isolate flex min-h-svh items-end overflow-hidden text-white">
      <Media asset={hero.asset} preload className="-z-10" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
      <Container className="pb-14 md:pb-20">
        <Reveal className="max-w-xl">
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-white/80">{hero.eyebrow}</p>
          <h1 className="text-5xl font-medium leading-[1.02] tracking-tight md:text-7xl">{hero.title}</h1>
          <p className="mt-5 max-w-md text-base text-white/85 md:text-lg">{hero.body}</p>
          <PillLink href={hero.cta.href} className="mt-8">{hero.cta.label}</PillLink>
        </Reveal>
      </Container>
    </section>
  )
}
