import { story } from "@/content/about"
import { Container } from "@/components/shared/container"
import { Media } from "@/components/shared/media"
import { Reveal } from "@/components/shared/reveal"
import { SectionHeading } from "@/components/shared/section-heading"

export function Story() {
  return (
    <Container as="section" className="grid items-center gap-10 py-20 md:grid-cols-2 md:gap-16 md:py-32">
      <div>
        <SectionHeading eyebrow={story.eyebrow} title={story.title} align="left" />
        <Reveal delay={0.1} className="mt-6 max-w-xl space-y-4 text-muted-foreground md:text-lg">
          {story.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </Reveal>
      </div>
      <Reveal delay={0.15}>
        <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
          <Media asset={story.asset} sizes="(min-width: 768px) 50vw, 100vw" />
        </div>
      </Reveal>
    </Container>
  )
}
