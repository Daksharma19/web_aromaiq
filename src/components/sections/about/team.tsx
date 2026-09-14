"use client"

import * as React from "react"
import { motion, useScroll, useTransform } from "motion/react"
import { team } from "@/content/about"
import { Container } from "@/components/shared/container"
import { Media } from "@/components/shared/media"
import { Reveal } from "@/components/shared/reveal"
import { SectionHeading } from "@/components/shared/section-heading"

export function Team() {
  const ref = React.useRef<HTMLUListElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  // The two portraits drift in opposite directions for a subtle parallax.
  const offsets = [useTransform(scrollYProgress, [0, 1], [40, -40]), useTransform(scrollYProgress, [0, 1], [-40, 40])]

  return (
    <Container as="section" className="py-20 md:py-32">
      <SectionHeading eyebrow={team.eyebrow} title={team.title} />
      <ul ref={ref} className="mx-auto mt-12 grid max-w-4xl gap-8 sm:grid-cols-2 md:mt-20 md:gap-10">
        {team.members.map((m, i) => (
          <li key={m.name}>
            <motion.div style={{ y: offsets[i % 2] }}>
              <Reveal delay={i * 0.1} className="group">
                <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
                  <div className="absolute inset-0 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105">
                    <Media asset={m.asset} sizes="(min-width: 640px) 50vw, 100vw" label={false} />
                  </div>
                </div>
                <p className="mt-4 text-xl font-medium tracking-tight">{m.name}</p>
                <p className="text-sm text-muted-foreground">{m.role}</p>
                <p className="mt-3 max-w-sm text-muted-foreground">{m.bio}</p>
              </Reveal>
            </motion.div>
          </li>
        ))}
      </ul>

      <Reveal className="mx-auto mt-20 max-w-4xl border-t pt-10 md:mt-28">
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{team.supporters.title}</p>
        <ul className="mt-6 grid gap-6 sm:grid-cols-2">
          {team.supporters.items.map((s) => (
            <li key={s.name}>
              <p className="text-2xl font-light tracking-tight md:text-3xl">{s.name}</p>
              <p className="mt-1 text-sm text-muted-foreground">{s.detail}</p>
            </li>
          ))}
        </ul>
      </Reveal>
    </Container>
  )
}
