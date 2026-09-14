"use client"

import Link from "next/link"
import { MenuIcon, XIcon } from "lucide-react"
import { mainNav } from "@/config/site"
import { Wordmark } from "@/components/shared/wordmark"
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

export function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger className="-ml-1 rounded-full p-2 sm:-ml-2 sm:p-2.5 hover:bg-foreground/5 lg:hidden" aria-label="Open menu">
        <MenuIcon className="size-6" />
      </SheetTrigger>
      <SheetContent side="left" showCloseButton={false} className="w-full max-w-sm p-6">
        <div className="flex items-center justify-between">
          <SheetTitle><Wordmark className="text-2xl" /></SheetTitle>
          <SheetClose className="rounded-full p-2 hover:bg-muted" aria-label="Close menu">
            <XIcon className="size-5" />
          </SheetClose>
        </div>
        <nav className="mt-8 flex flex-col">
          {mainNav.map((item) => (
            <SheetClose
              key={item.href}
              render={<Link href={item.href} />}
              className="border-b py-5 text-left text-xl font-medium"
            >
              {item.label}
            </SheetClose>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  )
}
