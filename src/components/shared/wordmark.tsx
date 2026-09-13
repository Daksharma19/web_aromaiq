import Link from "next/link"
import { cn } from "@/lib/utils"

/** Text logo. Swap the inner markup for an <Image> once a logo file exists. */
export function Wordmark({ className, href = "/" }: { className?: string; href?: string }) {
  return (
    <Link href={href} aria-label="AromaIQ home" className={cn("text-xl font-semibold tracking-tight", className)}>
      aroma<span className="font-light">iq</span>
    </Link>
  )
}
