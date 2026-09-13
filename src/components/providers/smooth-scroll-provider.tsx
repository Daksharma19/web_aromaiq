"use client"

import * as React from "react"
import { ReactLenis } from "lenis/react"

export function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ReactLenis
      root
      options={{
        autoRaf: true,
        smoothWheel: true,
      }}
    >
      {children}
    </ReactLenis>
  )
}
