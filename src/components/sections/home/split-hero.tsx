import { splitHero } from "@/content/home"
import { Container } from "@/components/shared/container"
import { Media } from "@/components/shared/media"
import { PillLink } from "@/components/shared/pill-link"
import { Reveal } from "@/components/shared/reveal"

export function SplitHero() {
  return (
    <Container as="section" className="py-4 md:py-6">
      <div className="relative isolate grid overflow-hidden rounded-3xl md:grid-cols-2">
        <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[560px]">
          <Media asset={splitHero.asset} sizes="(min-width: 768px) 50vw, 100vw" />
        </div>
        <div className="flex flex-col justify-center bg-muted p-8 md:p-16">
          <Reveal>
            <h2 className="text-4xl font-medium leading-tight tracking-tight md:text-5xl">{splitHero.title}</h2>
            <p className="mt-4 max-w-md text-muted-foreground md:text-lg">{splitHero.body}</p>
            <PillLink href={splitHero.cta.href} variant="dark" className="mt-8">{splitHero.cta.label}</PillLink>
          </Reveal>
        </div>
      </div>
    </Container>
  )
}
