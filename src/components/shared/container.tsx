import { cn } from "@/lib/utils"

/** Centered max-width wrapper with consistent side gutters. */
export function Container({
  children,
  className,
  as: Tag = "div",
  ...props
}: React.HTMLAttributes<HTMLElement> & { as?: "div" | "section" }) {
  return (
    <Tag className={cn("mx-auto w-full max-w-[1440px] px-4 md:px-8", className)} {...props}>
      {children}
    </Tag>
  )
}
