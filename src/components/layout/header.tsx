"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { mainNav } from "@/config/site"
import { MobileNav } from "@/components/layout/mobile-nav"
import { Wordmark } from "@/components/shared/wordmark"
import { cn } from "@/lib/utils"

const SCROLL_THRESHOLD = 40
/** Space between the wordmark and the nav links while the bar is expanded (lg:gap-12). */
const NAV_GAP = 48

export function Header() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = React.useState(false)
  const brandRef = React.useRef<HTMLDivElement>(null)
  const [navStart, setNavStart] = React.useState(0)

  React.useEffect(() => {
    const update = () => setScrolled(window.scrollY > SCROLL_THRESHOLD)
    const frame = requestAnimationFrame(update) // sync state on mount / route change
    window.addEventListener("scroll", update, { passive: true })
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener("scroll", update)
    }
  }, [pathname])

  // Where the nav sits in the expanded bar: just after the wordmark.
  // Measured in the expanded state only, so the value doesn't shift while the bar animates.
  React.useEffect(() => {
    const brand = brandRef.current
    if (!brand || scrolled) return
    const measure = () => setNavStart(brand.offsetLeft + brand.offsetWidth + NAV_GAP)
    const observer = new ResizeObserver(measure)
    observer.observe(brand)
    return () => observer.disconnect()
  }, [scrolled])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[padding] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
        scrolled ? "px-3 pt-3 md:px-4 md:pt-4" : "px-0 pt-0"
      )}
    >
      {/* Radius is half the pill height (not rounded-full) so it eases to square in step with the width. */}
      <div
        className={cn(
          "relative mx-auto flex items-center border backdrop-blur-md transition-[max-width,height,padding,border-radius,background-color,border-color,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
          scrolled
            ? "h-16 max-w-6xl rounded-[32px] border-white/50 bg-background/65 px-3 sm:px-5 shadow-lg shadow-black/5 md:h-[4.5rem] md:rounded-[36px] md:px-8"
            : "h-[4.5rem] max-w-full rounded-none border-transparent bg-background/40 px-3 sm:px-5 md:h-20 md:px-10"
        )}
      >
        <div ref={brandRef} className="flex min-w-0 items-center gap-1 sm:gap-4">
          <MobileNav />
          <Wordmark className="text-[1.375rem] sm:text-2xl md:text-[1.75rem]" />
        </div>
        {/* Beside the wordmark at the top of the page; glides to the centre when the bar compresses. */}
        <nav
          style={{ left: scrolled ? "50%" : navStart }}
          className={cn(
            "absolute hidden items-center gap-9 transition-[left,translate] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] lg:flex",
            scrolled && "-translate-x-1/2"
          )}
        >
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
              className="relative whitespace-nowrap text-base font-medium tracking-[-0.01em] after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-current after:transition-transform hover:after:scale-x-100 aria-[current=page]:after:scale-x-100"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
