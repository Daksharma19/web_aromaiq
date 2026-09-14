"use client"

import { motion } from "motion/react"

export function Reveal({
  children,
  delay = 0,
  fade = true,
  className,
}: {
  children: React.ReactNode
  delay?: number
  /** Set false for above-the-fold content: it stays visible (only slides), so it doesn't delay LCP. */
  fade?: boolean
  className?: string
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: fade ? 0 : 1, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
