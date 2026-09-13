import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"

// Shared chrome for all marketing pages. Pages render full-bleed under the fixed header.
export default function SiteLayout({ children }: LayoutProps<"/">) {
  return (
    <>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  )
}
