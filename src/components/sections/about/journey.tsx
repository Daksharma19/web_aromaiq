"use client"

import * as React from "react"
import { motion, useScroll, useSpring } from "motion/react"
import { journey } from "@/content/about"
import { Container } from "@/components/shared/container"
import { Reveal } from "@/components/shared/reveal"
import { SectionHeading } from "@/components/shared/section-heading"

/** Vertical timeline whose line draws itself as you scroll. */
export function Journey() {
  const ref = React.useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.7", "end 0.6"] })
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 30 })

  return (
    <Container as="section" className="grid gap-12 py-20 md:py-32 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
      <div className="lg:sticky lg:top-32 lg:self-start">
        <SectionHeading eyebrow={journey.eyebrow} title={journey.title} align="left" />
      </div>
      <div ref={ref} className="relative pl-10 md:pl-14">
        <div aria-hidden className="absolute bottom-2 left-[7px] top-2 w-px bg-border md:left-[11px]" />
        <motion.div
          aria-hidden
          style={{ scaleY }}
          className="absolute bottom-2 left-[7px] top-2 w-px origin-top bg-foreground md:left-[11px]"
        />
        <ol className="space-y-14 md:space-y-24">
          {journey.items.map((item, i) => (
            <li key={item.title} className="relative">
            <motion.span
              aria-hidden
              className="absolute -left-10 top-1.5 size-[15px] rounded-full bg-foreground ring-4 ring-background md:-left-14 md:size-[23px]"
              initial={{ scale: 0.4, opacity: 0.3 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, margin: "-45% 0px -45% 0px" }}
              transition={{ duration: 0.5 }}
            />
            <Reveal delay={i === 0 ? 0.1 : 0}>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{item.tag}</p>
              <h3 className="mt-2 text-2xl font-medium tracking-tight md:text-4xl">{item.title}</h3>
              <p className="mt-3 max-w-xl text-muted-foreground md:text-lg">{item.body}</p>
            </Reveal>
          </li>
        ))}
        </ol>
      </div>
    </Container>
  )
}
