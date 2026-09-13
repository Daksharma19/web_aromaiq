import { stats } from "@/content/about"
import { Container } from "@/components/shared/container"
import { Reveal } from "@/components/shared/reveal"

export function Stats() {
  return (
    <Container as="section" className="pb-8">
      <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border bg-border md:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08} className="bg-background p-8 md:p-10">
            <dt className="text-sm text-muted-foreground">{s.label}</dt>
            <dd className="mt-2 text-4xl font-light tracking-tight md:text-5xl">{s.value}</dd>
          </Reveal>
        ))}
      </dl>
    </Container>
  )
}
