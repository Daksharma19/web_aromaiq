import type { Metadata } from "next"
import { GrainGradient } from "@/components/shared/grain-gradient"
import { JsonLd } from "@/components/shared/json-ld"
import { absoluteUrl, siteConfig } from "@/config/site"
import { breadcrumbSchema, graph, organizationId, organizationSchema, websiteId } from "@/lib/structured-data"
import { AboutCta, AboutHero, Journey, Manifesto, Moods, Stats, Team, Values } from "@/components/sections/about"

const title = "About Us"
const description = `Meet ${siteConfig.name}: two college builders making scent intelligence for modern living — a mood-aware, 4-chamber smart diffuser made in India.`

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/about" },
  openGraph: { type: "website", siteName: siteConfig.name, locale: siteConfig.locale, url: "/about", title: `${title} | ${siteConfig.name}`, description },
  twitter: { card: "summary_large_image", title: `${title} | ${siteConfig.name}`, description },
}

const jsonLd = graph(
  organizationSchema,
  {
    "@type": "AboutPage",
    "@id": absoluteUrl("/about#webpage"),
    url: absoluteUrl("/about"),
    name: `${title} | ${siteConfig.name}`,
    description,
    isPartOf: { "@id": websiteId },
    about: { "@id": organizationId },
    inLanguage: "en",
  },
  breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: title, path: "/about" },
  ])
)

export default function AboutPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <AboutHero />
      <Manifesto />
      <Journey />
      <Moods />
      <Stats />
      <GrainGradient>
        <Values />
      </GrainGradient>
      <Team />
      <AboutCta />
    </>
  )
}
