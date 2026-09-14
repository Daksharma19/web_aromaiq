"use client"

import * as React from "react"
import { animate, useInView, useReducedMotion } from "motion/react"
import { stats } from "@/content/about"
import { Container } from "@/components/shared/container"
import { Reveal } from "@/components/shared/reveal"

export function Stats() {
  return (
    <Container as="section" className="pb-8">
      <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border bg-border md:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08} className="flex flex-col-reverse justify-end bg-background p-8 md:p-10">
            <dt className="mt-2 text-sm text-muted-foreground">{s.label}</dt>
            <dd className="text-4xl font-light tracking-tight tabular-nums md:text-5xl">
              {s.prefix}
              <CountUp to={s.value} from={s.plain ? s.value - 24 : 0} />
              {s.suffix}
            </dd>
          </Reveal>
        ))}
      </dl>
    </Container>
  )
}

function CountUp({ to, from }: { to: number; from: number }) {
  const ref = React.useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })
  const reduce = useReducedMotion()

  React.useEffect(() => {
    const node = ref.current
    if (!inView || !node || reduce) return
    const controls = animate(from, to, {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => (node.textContent = String(Math.round(v))),
    })
    return () => controls.stop()
  }, [inView, reduce, from, to])

  return <span ref={ref}>{to}</span>
}
