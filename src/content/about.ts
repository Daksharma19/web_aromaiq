import type { Asset } from "@/types/content"

// About Us page copy and media.

export const aboutHero = {
  eyebrow: "About us",
  title: "We make home feel like yours",
  body: "AromaIQ blends thoughtful fragrance with smart technology, so every room smells just right, exactly when you want it to.",
  asset: { src: null, video: null, alt: "About hero", tone: "from-[#ead9c6] to-[#9b7456]" } as Asset,
}

export const story = {
  eyebrow: "Our story",
  title: "It started with a single room",
  paragraphs: [
    "We wanted a simpler way to fill a space with scent — no flames, no guesswork and no fragrance left burning in an empty house.",
    "So we built a diffuser that listens to your schedule, and paired it with a library of fragrances we'd genuinely want in our own homes.",
  ],
  asset: { src: null, alt: "Founders' first prototype", tone: "from-[#e6e0d6] to-[#a89a84]" } as Asset,
}

export const stats = [
  { value: "1M+", label: "Homes scented" },
  { value: "300+", label: "Fragrances" },
  { value: "40+", label: "Partner brands" },
  { value: "4.8★", label: "Average rating" },
]

export const values = {
  title: "What we believe in",
  items: [
    {
      title: "Clean by default",
      body: "Every formula is reviewed for ingredients we're proud to put in your home.",
      asset: { src: null, alt: "Clean", tone: "from-[#eee6da] to-[#c2ab8c]" } as Asset,
    },
    {
      title: "Less waste",
      body: "Scent only when you need it, with recyclable vials and packaging.",
      asset: { src: null, alt: "Less waste", tone: "from-[#e3ebe2] to-[#8fa58b]" } as Asset,
    },
    {
      title: "Made for people",
      body: "Technology should feel invisible. We design for calm, not complexity.",
      asset: { src: null, alt: "People first", tone: "from-[#ecdfe4] to-[#b08494]" } as Asset,
    },
  ],
}

export const team = {
  title: "The people behind the scent",
  members: [
    { name: "Team member", role: "Co-founder & CEO", asset: { src: null, alt: "Portrait", tone: "from-[#efe6dc] to-[#bfa68a]" } as Asset },
    { name: "Team member", role: "Co-founder & CTO", asset: { src: null, alt: "Portrait", tone: "from-[#e4e8ec] to-[#93a3b1]" } as Asset },
    { name: "Team member", role: "Head of Fragrance", asset: { src: null, alt: "Portrait", tone: "from-[#f0e2e6] to-[#c095a4]" } as Asset },
    { name: "Team member", role: "Head of Design", asset: { src: null, alt: "Portrait", tone: "from-[#e7ebe3] to-[#9aab8f]" } as Asset },
  ],
}

export const aboutCta = {
  title: "Ready to find your scent?",
  body: "Start with a diffuser and explore fragrances made for every mood.",
  cta: { label: "Shop diffusers", href: "/#diffusers" },
}
