import Link from "next/link"
import { ArrowRightIcon } from "lucide-react"
import { cn } from "@/lib/utils"

/** Rounded call-to-action link with an arrow. */
export function PillLink({
  href,
  children,
  variant = "light",
  className,
}: {
  href: string
  children: React.ReactNode
  variant?: "light" | "dark" | "outline"
  className?: string
}) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex h-12 items-center gap-2 rounded-full px-7 text-sm font-medium transition-all duration-300 hover:gap-3",
        variant === "light" && "bg-white text-black hover:bg-white/90",
        variant === "dark" && "bg-foreground text-background hover:bg-foreground/85",
        variant === "outline" && "border border-foreground hover:bg-foreground hover:text-background",
        className
      )}
    >
      {children}
      <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-0.5" />
    </Link>
  )
}
