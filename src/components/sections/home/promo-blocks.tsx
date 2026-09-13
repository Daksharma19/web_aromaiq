"use client"

import * as React from "react"
import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from "motion/react"
import { promoBlocks } from "@/content/home"
import { Container } from "@/components/shared/container"
import { Media } from "@/components/shared/media"
import { PillLink } from "@/components/shared/pill-link"
import { cn } from "@/lib/utils"

/** Distance from the viewport top where the first card sticks (clears the floating header). */
const STICKY_TOP = 104
/** How much of each previous card stays visible above the next one. */
const PEEK = 28
/** Scale lost per card stacked on top. */
const SCALE_STEP = 0.05

type Block = (typeof promoBlocks)[number]

function StackCard({
  block,
  index,
  total,
  progress,
}: {
  block: Block
  index: number
  total: number
  progress: MotionValue<number>
}) {
  const reduceMotion = useReducedMotion()
  const isLast = index === total - 1
  const covered = total - 1 - index

  // Starts shrinking once the card is pinned, reaching its final scale when the stack completes.
  const range = [index / total, 1]
  const scale = useTransform(progress, range, [1, reduceMotion ? 1 : 1 - covered * SCALE_STEP])
  const dim = useTransform(progress, range, [0, reduceMotion || isLast ? 0 : 0.12 + covered * 0.08])

  return (
    <div
      className={cn("sticky", !isLast && "pb-[18svh]")}
      style={{ top: STICKY_TOP + index * PEEK }}
    >
      <motion.div
        style={{ scale }}
        className="group relative isolate flex h-[72svh] min-h-[460px] origin-top items-end overflow-hidden rounded-3xl text-white shadow-[0_-12px_40px_-12px_rgba(0,0,0,0.25)] will-change-transform"
      >
        <Media
          asset={block.asset}
          className="-z-10 transition-transform duration-[1.2s] ease-out group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/45 to-transparent" />
        <div className={cn("w-full max-w-lg p-8 md:p-14", block.align === "right" && "md:ml-auto md:text-right")}>
          <h2 className="text-4xl font-medium tracking-tight md:text-6xl">{block.title}</h2>
          <p className="mt-3 text-white/85 md:text-lg">{block.body}</p>
          <PillLink href={block.cta.href} className="mt-7">{block.cta.label}</PillLink>
        </div>
        {/* darkens the card as newer cards pile on top */}
        <motion.div aria-hidden style={{ opacity: dim }} className="pointer-events-none absolute inset-0 bg-black" />
      </motion.div>
    </div>
  )
}

export function PromoBlocks() {
  const ref = React.useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] })

  return (
    <Container as="section" id="collections" className="scroll-mt-24 py-4 md:py-6">
      <div ref={ref} className="relative">
        {promoBlocks.map((block, i) => (
          <StackCard key={block.title} block={block} index={i} total={promoBlocks.length} progress={scrollYProgress} />
        ))}
      </div>
    </Container>
  )
}
