import { benefits } from "@/content/home"
import { Container } from "@/components/shared/container"
import { GlassCard } from "@/components/shared/glass-card"
import { Reveal } from "@/components/shared/reveal"
import { SectionHeading } from "@/components/shared/section-heading"

export function Benefits() {
  return (
    <Container as="section" className="pb-8 pt-20 md:pt-32">
      <SectionHeading title={benefits.title} />
      <div className="mx-auto mt-12 grid max-w-6xl gap-4 md:mt-16 md:grid-cols-3">
        {benefits.items.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.1} className="h-full">
            <GlassCard {...item} />
          </Reveal>
        ))}
      </div>
    </Container>
  )
}
