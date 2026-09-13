import Image from "next/image"
import { brands } from "@/content/home"
import { Container } from "@/components/shared/container"
import { PillLink } from "@/components/shared/pill-link"
import { SectionHeading } from "@/components/shared/section-heading"

export function Brands() {
  return (
    <section id="brands" className="scroll-mt-24 bg-muted py-20 md:py-32">
      <Container>
        <SectionHeading title={brands.title} body={brands.body} />
        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {brands.logos.map((b) => (
            <div
              key={b.name}
              className="grid aspect-[3/2] place-items-center rounded-2xl bg-background text-sm font-medium tracking-wide text-muted-foreground transition-transform hover:-translate-y-1"
            >
              {b.src ? <Image src={b.src} alt={b.name} width={120} height={40} className="h-auto max-h-10 w-auto" /> : b.name}
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <PillLink href={brands.cta.href} variant="outline">{brands.cta.label}</PillLink>
        </div>
      </Container>
    </section>
  )
}
