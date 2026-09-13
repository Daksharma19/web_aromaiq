import { steps } from "@/content/home"
import { Container } from "@/components/shared/container"
import { Media } from "@/components/shared/media"
import { Reveal } from "@/components/shared/reveal"
import { SectionHeading } from "@/components/shared/section-heading"

export function Steps() {
  return (
    <Container as="section" className="pb-20 md:pb-32">
      <SectionHeading title={steps.title} />
      <ol className="mt-12 grid gap-8 md:grid-cols-3 md:gap-6">
        {steps.items.map((s, i) => (
          <li key={s.n}>
            <Reveal delay={i * 0.1}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
                <Media asset={s.asset} sizes="(min-width: 768px) 33vw, 100vw" />
                <span className="absolute left-4 top-4 grid size-10 place-items-center rounded-full bg-background text-sm font-medium">{s.n}</span>
              </div>
              <h3 className="mt-5 text-xl font-medium">{s.title}</h3>
              <p className="mt-1 text-muted-foreground">{s.body}</p>
            </Reveal>
          </li>
        ))}
      </ol>
    </Container>
  )
}
