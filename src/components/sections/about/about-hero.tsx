import { aboutHero } from "@/content/about"
import { Container } from "@/components/shared/container"
import { Media } from "@/components/shared/media"
import { Reveal } from "@/components/shared/reveal"

export function AboutHero() {
  return (
    <section className="relative isolate flex min-h-[80svh] items-end overflow-hidden text-white">
      <Media asset={aboutHero.asset} preload className="-z-10" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/55 via-black/15 to-transparent" />
      <Container className="pb-14 md:pb-20">
        <Reveal className="max-w-3xl">
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-white/80">{aboutHero.eyebrow}</p>
          <h1 className="text-5xl font-light leading-[1.02] tracking-tight md:text-8xl">{aboutHero.title}</h1>
          <p className="mt-6 max-w-xl text-base text-white/85 md:text-lg">{aboutHero.body}</p>
        </Reveal>
      </Container>
    </section>
  )
}
