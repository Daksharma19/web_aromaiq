import { values } from "@/content/about"
import { Container } from "@/components/shared/container"
import { GlassCard } from "@/components/shared/glass-card"
import { Reveal } from "@/components/shared/reveal"
import { SectionHeading } from "@/components/shared/section-heading"

export function Values() {
  return (
    <Container as="section" className="py-20 md:py-32">
      <SectionHeading title={values.title} />
      <div className="mx-auto mt-12 grid max-w-6xl gap-4 md:mt-16 md:grid-cols-3">
        {values.items.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.1} className="h-full">
            <GlassCard {...item} />
          </Reveal>
        ))}
      </div>
    </Container>
  )
}
