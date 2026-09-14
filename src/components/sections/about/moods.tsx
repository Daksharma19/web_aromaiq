"use client"

import * as React from "react"
import { AnimatePresence, motion, useMotionValueEvent, useReducedMotion, useScroll } from "motion/react"
import { moods } from "@/content/about"
import { Container } from "@/components/shared/container"
import dynamic from "next/dynamic"
import { cn } from "@/lib/utils"

// WebGL (ogl) is client-only and heavy: keep it out of the initial bundle.
const GradientWaves = dynamic(() => import("@/components/shared/gradient-waves"), { ssr: false })

const ease = [0.22, 1, 0.36, 1] as const

/** Sticky "day in the life" section: scrolling steps through moods and re-blends the four chambers. */
export function Moods() {
  const ref = React.useRef<HTMLElement>(null)
  const [active, setActive] = React.useState(0)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] })

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setActive(Math.min(moods.items.length - 1, Math.floor(v * moods.items.length)))
  })

  const current = moods.items[active]
  const reduce = useReducedMotion()

  return (
    <section ref={ref} style={{ height: `${moods.items.length * 90}svh` }} className="relative">
      <div className="sticky top-0 isolate flex h-svh items-center overflow-hidden">
        <div aria-hidden className="absolute inset-0 -z-10">
          <GradientWaves
            horizonColor={current.waves.horizon}
            waveColor={current.waves.wave}
            crestColor={current.waves.crest}
            speed={reduce ? 0 : 0.4}
            amplitude={2.5}
            waveScale={0.6}
            waveRatio={0.9}
            swell={35}
            turbulence={20}
            tilt={1.11}
            zoom={1}
            height={5.5}
            fogDepth={15}
            detail="medium"
            brightness={1}
            opacity={1}
            mouseInteraction={!reduce}
            parallaxStrength={0.5}
            grain={!reduce}
            grainIntensity={0.05}
          />
        </div>
        <Container className="grid items-center gap-10 pt-16 md:grid-cols-2 md:gap-16">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">{moods.eyebrow}</p>
            <h2 className="text-4xl font-light tracking-tight md:text-6xl">{moods.title}</h2>
            <p className="mt-4 max-w-md text-muted-foreground md:text-lg">{moods.body}</p>

            <ul className="mt-8 flex flex-wrap gap-2 md:mt-10">
              {moods.items.map((m, i) => (
                <li
                  key={m.mood}
                  className={cn(
                    "rounded-full border px-4 py-2 text-sm transition-colors duration-500",
                    i === active ? "border-foreground bg-foreground text-background" : "border-border text-muted-foreground"
                  )}
                >
                  <span className="tabular-nums">{m.time}</span> · {m.mood}
                </li>
              ))}
            </ul>

            <div className="relative mt-8 h-16" aria-live="polite">
              <AnimatePresence mode="wait">
                <motion.p
                  key={current.mood}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.4, ease }}
                  className="text-xl font-medium tracking-tight md:text-2xl"
                >
                  {current.body}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>

          <div className="rounded-3xl bg-white/45 p-6 shadow-[0_1px_0_rgba(255,255,255,0.6)_inset] backdrop-blur-sm dark:bg-white/5 md:p-10">
            <div className="flex items-baseline justify-between">
              <p className="text-sm text-muted-foreground">Live blend</p>
              <p className="text-sm font-medium tabular-nums">{current.time}</p>
            </div>
            <div className="mt-6 grid h-56 grid-cols-4 gap-3 md:h-72 md:gap-4">
              {moods.chambers.map((name, i) => (
                <div key={name} className="flex flex-col">
                  <div className="relative flex-1 overflow-hidden rounded-2xl bg-foreground/5">
                    <motion.div
                      className="absolute inset-x-0 bottom-0 rounded-2xl"
                      animate={{ height: `${current.mix[i]}%`, backgroundColor: current.color }}
                      transition={{ duration: 0.8, ease }}
                    />
                  </div>
                  <p className="mt-3 text-center text-xs font-medium md:text-sm">{name}</p>
                  <p className="text-center text-xs tabular-nums text-muted-foreground">{current.mix[i]}%</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </section>
  )
}
