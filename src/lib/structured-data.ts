import { absoluteUrl, siteConfig, socialLinks } from "@/config/site"

// schema.org graphs shared across pages.

const organizationId = absoluteUrl("/#organization")
const websiteId = absoluteUrl("/#website")

/** Real profile URLs only — placeholder "#" links are skipped. */
const sameAs = socialLinks.map((s) => s.href as string).filter((href) => href.startsWith("http"))

export const organizationSchema = {
  "@type": "Organization",
  "@id": organizationId,
  name: siteConfig.name,
  url: absoluteUrl("/"),
  logo: absoluteUrl("/icon.svg"),
  description: siteConfig.description,
  ...(sameAs.length > 0 && { sameAs }),
}

export const websiteSchema = {
  "@type": "WebSite",
  "@id": websiteId,
  name: siteConfig.name,
  url: absoluteUrl("/"),
  inLanguage: "en",
  publisher: { "@id": organizationId },
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  }
}

export function graph(...nodes: Record<string, unknown>[]) {
  return { "@context": "https://schema.org", "@graph": nodes }
}

export { organizationId, websiteId }
