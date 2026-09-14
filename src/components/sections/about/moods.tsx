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
        <Container className="grid items-center gap-6 pt-16 sm:gap-10 md:grid-cols-2 md:gap-16 short:gap-5 tiny:grid-cols-2 tiny:gap-6 tiny:pt-14">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">{moods.eyebrow}</p>
            <h2 className="text-3xl font-light tracking-tight sm:text-4xl md:text-6xl short:md:text-5xl tiny:text-2xl tiny:md:text-3xl">{moods.title}</h2>
            <p className="mt-4 max-w-md text-muted-foreground md:text-lg max-md:short:hidden tiny:hidden">{moods.body}</p>

            <ul className="mt-5 flex flex-wrap gap-2 sm:mt-8 md:mt-10 short:mt-5 tiny:mt-3">
              {moods.items.map((m, i) => (
                <li
                  key={m.mood}
                  className={cn(
                    "rounded-full border px-3 py-1.5 text-xs transition-colors duration-500 sm:px-4 sm:py-2 sm:text-sm tiny:px-2.5 tiny:py-1 tiny:text-[11px]",
                    i === active ? "border-foreground bg-foreground text-background" : "border-border text-muted-foreground"
                  )}
                >
                  <span className="tabular-nums">{m.time}</span> · {m.mood}
                </li>
              ))}
            </ul>

            <div className="relative mt-5 min-h-16 sm:mt-8 short:mt-4 short:min-h-14 tiny:mt-3 tiny:min-h-10" aria-live="polite">
              <AnimatePresence mode="wait">
                <motion.p
                  key={current.mood}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.4, ease }}
                  className="text-lg font-medium tracking-tight sm:text-xl md:text-2xl tiny:text-base"
                >
                  {current.body}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>

          <div className="rounded-3xl bg-white/45 p-5 shadow-[0_1px_0_rgba(255,255,255,0.6)_inset] backdrop-blur-sm dark:bg-white/5 md:p-10 short:md:p-7 tiny:p-4 tiny:md:p-4">
            <div className="flex items-baseline justify-between">
              <p className="text-sm text-muted-foreground">Live blend</p>
              <p className="text-sm font-medium tabular-nums">{current.time}</p>
            </div>
            <div className="mt-5 grid h-44 grid-cols-4 gap-2 sm:h-56 sm:gap-3 md:mt-6 md:h-72 md:gap-4 short:h-36 short:md:h-52 tiny:mt-3 tiny:h-24 tiny:md:h-24">
              {moods.chambers.map((name, i) => (
                <div key={name} className="flex flex-col">
                  <div className="relative flex-1 overflow-hidden rounded-2xl bg-foreground/5">
                    <motion.div
                      className="absolute inset-x-0 bottom-0 rounded-2xl"
                      animate={{ height: `${current.mix[i]}%`, backgroundColor: current.color }}
                      transition={{ duration: 0.8, ease }}
                    />
                  </div>
                  <p className="mt-2 hyphens-manual break-words text-center text-[11px] font-medium leading-tight max-[359px]:text-[10px] sm:mt-3 sm:text-xs md:text-sm tiny:mt-1.5 tiny:text-[11px] tiny:md:text-[11px]">{name}</p>
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
