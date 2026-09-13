import { team } from "@/content/about"
import { Container } from "@/components/shared/container"
import { Media } from "@/components/shared/media"
import { Reveal } from "@/components/shared/reveal"
import { SectionHeading } from "@/components/shared/section-heading"

export function Team() {
  return (
    <Container as="section" className="py-20 md:py-32">
      <SectionHeading title={team.title} />
      <ul className="mt-12 grid grid-cols-2 gap-4 md:mt-16 lg:grid-cols-4 lg:gap-6">
        {team.members.map((m, i) => (
          <li key={m.role}>
            <Reveal delay={i * 0.08}>
              <div className="relative aspect-[3/4] overflow-hidden rounded-3xl">
                <Media asset={m.asset} sizes="(min-width: 1024px) 25vw, 50vw" label={false} />
              </div>
              <p className="mt-4 font-medium">{m.name}</p>
              <p className="text-sm text-muted-foreground">{m.role}</p>
            </Reveal>
          </li>
        ))}
      </ul>
    </Container>
  )
}
