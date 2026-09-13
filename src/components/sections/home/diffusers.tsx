import Link from "next/link"
import { ArrowRightIcon } from "lucide-react"
import { diffusers, type Product } from "@/content/home"
import { Container } from "@/components/shared/container"
import { Media } from "@/components/shared/media"
import { SectionHeading } from "@/components/shared/section-heading"
import { cn } from "@/lib/utils"

function ProductTile({ product, className }: { product: Product; className?: string }) {
  return (
    <Link href="/#diffusers" className={cn("group flex flex-col rounded-3xl bg-white/45 p-4 backdrop-blur-sm", className)}>
      <div className="relative aspect-square overflow-hidden rounded-2xl">
        <Media
          asset={product.asset}
          sizes="(min-width: 1024px) 20vw, 50vw"
          label={false}
          className="transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="mt-4 flex items-end justify-between gap-2 px-1">
        <div>
          <p className="text-xs uppercase tracking-wider text-muted-foreground">{product.size}</p>
          <h3 className="mt-1 text-lg font-medium">{product.name}</h3>
        </div>
        <span className="grid size-9 place-items-center rounded-full bg-background transition-colors group-hover:bg-foreground group-hover:text-background">
          <ArrowRightIcon className="size-4" />
        </span>
      </div>
    </Link>
  )
}

export function Diffusers() {
  return (
    <Container as="section" id="diffusers" className="scroll-mt-24 py-20 md:py-32">
      <SectionHeading title={diffusers.title} body={diffusers.body} align="left" className="mb-12" />
      <div className="grid gap-4 lg:grid-cols-[1fr_1.4fr] lg:gap-6">
        <div className="relative min-h-[360px] overflow-hidden rounded-3xl lg:min-h-full">
          <Media asset={diffusers.illustration} sizes="(min-width: 1024px) 40vw, 100vw" />
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {diffusers.products.map((p) => (
            <ProductTile key={p.name} product={p} />
          ))}
          <ProductTile
            product={diffusers.car}
            className="col-span-2 md:col-span-3 md:flex-row md:items-center md:gap-6 [&>div:first-child]:md:w-48"
          />
        </div>
      </div>
    </Container>
  )
}
