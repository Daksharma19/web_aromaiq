"use client"

import * as React from "react"
import { motion, useScroll, useTransform, type MotionValue } from "motion/react"
import { manifesto } from "@/content/about"
import { Container } from "@/components/shared/container"

/** Words light up one by one as the section scrolls past. */
export function Manifesto() {
  const ref = React.useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.4"] })
  const words = manifesto.text.split(" ")

  return (
    <Container as="section" className="pb-24 pt-32 md:pb-40 md:pt-48">
      <div ref={ref} className="mx-auto max-w-5xl">
        <p className="mb-6 text-xs uppercase tracking-[0.2em] text-muted-foreground">{manifesto.eyebrow}</p>
        <p className="text-3xl font-light leading-[1.2] tracking-tight md:text-6xl">
          {words.map((word, i) => (
            <Word key={i} progress={scrollYProgress} range={[i / words.length, (i + 1) / words.length]}>
              {word}
            </Word>
          ))}
        </p>
      </div>
    </Container>
  )
}

function Word({ children, progress, range }: { children: string; progress: MotionValue<number>; range: [number, number] }) {
  const opacity = useTransform(progress, range, [0.15, 1])
  return (
    <>
      <motion.span style={{ opacity }}>{children}</motion.span>{" "}
    </>
  )
}
