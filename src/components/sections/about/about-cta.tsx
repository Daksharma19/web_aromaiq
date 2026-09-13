import { aboutCta } from "@/content/about"
import { Container } from "@/components/shared/container"
import { PillLink } from "@/components/shared/pill-link"
import { Reveal } from "@/components/shared/reveal"

export function AboutCta() {
  return (
    <Container as="section" className="pb-20 md:pb-32">
      <Reveal className="rounded-3xl bg-muted px-6 py-16 text-center md:py-24">
        <h2 className="text-4xl font-light tracking-tight md:text-6xl">{aboutCta.title}</h2>
        <p className="mx-auto mt-4 max-w-lg text-muted-foreground md:text-lg">{aboutCta.body}</p>
        <PillLink href={aboutCta.cta.href} variant="dark" className="mt-8">{aboutCta.cta.label}</PillLink>
      </Reveal>
    </Container>
  )
}
