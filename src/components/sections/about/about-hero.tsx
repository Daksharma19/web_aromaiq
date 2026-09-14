"use client"

import * as React from "react"
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react"
import { aboutHero } from "@/content/about"
import { Container } from "@/components/shared/container"
import { Media } from "@/components/shared/media"
import { Reveal } from "@/components/shared/reveal"

export function AboutHero() {
  const ref = React.useRef<HTMLElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] })
  const scale = useTransform(scrollYProgress, [0, 1], [1, reduce ? 1 : 1.15])
  const y = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 120])
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <section ref={ref} className="relative isolate flex min-h-[90svh] items-end overflow-hidden text-white">
      <motion.div className="absolute inset-0 -z-10" style={{ scale }}>
        <Media asset={aboutHero.asset} preload />
      </motion.div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      <Container className="pb-14 md:pb-20">
        <motion.div style={{ y, opacity }}>
          <Reveal className="max-w-4xl">
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-white/80">{aboutHero.eyebrow}</p>
            <h1 className="text-5xl font-light leading-[1.02] tracking-tight md:text-8xl">{aboutHero.title}</h1>
            <p className="mt-6 max-w-xl text-base text-white/85 md:text-lg">{aboutHero.body}</p>
          </Reveal>
        </motion.div>
      </Container>
    </section>
  )
}
