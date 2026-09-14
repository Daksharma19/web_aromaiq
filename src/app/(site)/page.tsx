import type { Metadata } from "next"
import { GrainGradient } from "@/components/shared/grain-gradient"
import { JsonLd } from "@/components/shared/json-ld"
import { absoluteUrl, siteConfig } from "@/config/site"
import { graph, organizationId, organizationSchema, websiteId, websiteSchema } from "@/lib/structured-data"
import {
  Benefits,
  // Brands,
  Diffusers,
  Hero,
  PromoBlocks,
  SplitHero,
  Steps,
} from "@/components/sections/home"

export const metadata: Metadata = {
  alternates: { canonical: "/" },
}

const jsonLd = graph(
  organizationSchema,
  websiteSchema,
  {
    "@type": "WebPage",
    "@id": absoluteUrl("/#webpage"),
    url: absoluteUrl("/"),
    name: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.description,
    isPartOf: { "@id": websiteId },
    about: { "@id": organizationId },
    inLanguage: "en",
  }
)

export default function HomePage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <Hero />
      <SplitHero />
      <PromoBlocks />
      <GrainGradient>
        <Benefits />
        <Diffusers />
        <Steps />
      </GrainGradient>
      {/* Temporarily hidden until partner brands are confirmed. Restore by uncommenting. */}
      {/* <Brands /> */}
    </>
  )
}
