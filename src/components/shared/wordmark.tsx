import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"

/** Logo mark (public/logo.png) plus the text wordmark. The mark scales with the text size. */
export function Wordmark({ className, href = "/" }: { className?: string; href?: string }) {
  return (
    <Link href={href} aria-label="AromaIQ home" className={cn("inline-flex items-center gap-2 text-xl font-semibold tracking-tight", className)}>
      <Image src="/logo.png" alt="" width={102} height={80} preload className="h-[1.15em] w-auto" />
      <span>
        aroma<span className="font-light">iq</span>
      </span>
    </Link>
  )
}
