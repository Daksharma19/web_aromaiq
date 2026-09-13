"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { SearchIcon, ShoppingBagIcon, UserIcon } from "lucide-react"
import { mainNav } from "@/config/site"
import { MobileNav } from "@/components/layout/mobile-nav"
import { Wordmark } from "@/components/shared/wordmark"
import { cn } from "@/lib/utils"

const SCROLL_THRESHOLD = 40

export function Header() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = React.useState(false)

  React.useEffect(() => {
    const update = () => setScrolled(window.scrollY > SCROLL_THRESHOLD)
    const frame = requestAnimationFrame(update) // sync state on mount / route change
    window.addEventListener("scroll", update, { passive: true })
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener("scroll", update)
    }
  }, [pathname])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[padding] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
        scrolled ? "px-3 pt-3 md:px-4 md:pt-4" : "px-0 pt-0"
      )}
    >
      <div
        className={cn(
          "mx-auto flex items-center justify-between border transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
          scrolled
            ? "h-16 max-w-6xl rounded-full border-white/50 bg-background/65 px-5 shadow-lg shadow-black/5 backdrop-blur-md md:h-[4.5rem] md:px-8"
            : "h-[4.5rem] max-w-full rounded-none border-transparent bg-background/40 px-5 backdrop-blur-sm md:h-20 md:px-10"
        )}
      >
        <div className="flex items-center gap-12">
          <MobileNav />
          <Wordmark className="text-2xl md:text-[1.75rem]" />
          <nav className="hidden items-center gap-9 lg:flex">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={pathname === item.href ? "page" : undefined}
                className="relative text-base font-medium tracking-[-0.01em] after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-current after:transition-transform hover:after:scale-x-100 aria-[current=page]:after:scale-x-100"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-1.5">
          <button className="rounded-full p-2.5 hover:bg-foreground/5" aria-label="Search"><SearchIcon className="size-[22px]" /></button>
          <button className="rounded-full p-2.5 hover:bg-foreground/5" aria-label="Account"><UserIcon className="size-[22px]" /></button>
          <button className="relative rounded-full p-2.5 hover:bg-foreground/5" aria-label="Cart">
            <ShoppingBagIcon className="size-[22px]" />
            <span className="absolute right-1 top-1 grid size-[18px] place-items-center rounded-full bg-foreground text-[11px] font-medium text-background">0</span>
          </button>
        </div>
      </div>
    </header>
  )
}
