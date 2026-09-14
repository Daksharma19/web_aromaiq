"use client"

import * as React from "react"
import { usePathname } from "next/navigation"
import { ReactLenis, useLenis } from "lenis/react"

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
      <LinkScroll />
      {children}
    </ReactLenis>
  )
}

/** Time for an open menu sheet to close and release its scroll lock before scrolling. */
const MENU_CLOSE_DELAY = 350

/**
 * Makes every internal link land somewhere predictable:
 * - same page: smooth-scroll to the #section, or to the top when there's no hash
 * - other page: start at the top (or at the #section) once it renders
 * Sections should set `scroll-mt-*` so they clear the fixed header.
 */
function LinkScroll() {
  const lenis = useLenis()
  const pathname = usePathname()

  React.useEffect(() => {
    if (!lenis) return

    const scrollToHash = (hash: string, immediate: boolean) => {
      const target = hash ? document.getElementById(decodeURIComponent(hash.slice(1))) : null
      lenis.scrollTo(target ?? 0, { immediate, force: true })
    }

    const onClick = (event: MouseEvent) => {
      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
      const link = (event.target as Element | null)?.closest("a")
      if (!link || !link.href || link.hasAttribute("download") || (link.target && link.target !== "_self")) return

      const url = new URL(link.href)
      if (url.origin !== location.origin || url.pathname !== location.pathname || url.search !== location.search) return

      // Same page: take over from Next's router so the scroll is smooth and always happens.
      event.preventDefault()
      if (url.hash !== location.hash) history.pushState(history.state, "", url.hash || url.pathname)

      const menuOpen = document.querySelector("[role='dialog']")
      if (menuOpen) setTimeout(() => scrollToHash(url.hash, false), MENU_CLOSE_DELAY)
      else scrollToHash(url.hash, false)
    }

    // Capture phase runs before Next's <Link> handler, which skips prevented events.
    document.addEventListener("click", onClick, true)
    return () => document.removeEventListener("click", onClick, true)
  }, [lenis])

  // Back/forward should restore the previous position, not jump to the top.
  const fromHistory = React.useRef(false)
  React.useEffect(() => {
    const onPopState = () => (fromHistory.current = true)
    window.addEventListener("popstate", onPopState)
    return () => window.removeEventListener("popstate", onPopState)
  }, [])

  // New page: reset Lenis to the top, or to the #section in the URL.
  const lastPathname = React.useRef(pathname)
  React.useEffect(() => {
    if (!lenis || lastPathname.current === pathname) return // first load keeps the browser's position
    lastPathname.current = pathname
    if (fromHistory.current) {
      fromHistory.current = false
      return
    }
    const frame = requestAnimationFrame(() => {
      const target = location.hash ? document.getElementById(decodeURIComponent(location.hash.slice(1))) : null
      lenis.scrollTo(target ?? 0, { immediate: true, force: true })
    })
    return () => cancelAnimationFrame(frame)
  }, [lenis, pathname])

  return null
}
