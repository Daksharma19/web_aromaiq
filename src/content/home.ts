import type { Asset } from "@/types/content"

// Homepage copy and media. Put files in /public/assets and set `src` / `video`.

export const hero = {
  eyebrow: "New season",
  title: "Scent that sets the mood",
  body: "Discover warm, layered fragrances made for slower evenings at home.",
  cta: { label: "Explore the collection", href: "#collections" },
  asset: { src: null, video: "/assets/hero.mp4", alt: "Hero", tone: "from-[#d9c4a8] to-[#8a6a4c]" } as Asset,
}

export const splitHero = {
  title: "Your home, perfectly scented",
  body: "Try a smart diffuser at home for 30 days. Love it or send it back.",
  cta: { label: "Get started", href: "#diffusers" },
  asset: { src: null, video: null, alt: "Relaxing at home", tone: "from-[#c9d3cc] to-[#5d7266]" } as Asset,
}

export const promoBlocks = [
  {
    title: "Seasonal essentials",
    body: "Cozy notes of amber, cedar and spice for every room.",
    cta: { label: "Shop now", href: "#collections" },
    align: "left" as const,
    asset: { src: null, video: null, alt: "Seasonal essentials", tone: "from-[#e8d2b8] to-[#a0643c]" } as Asset,
  },
  {
    title: "Scent the whole home",
    body: "Pair diffusers across rooms and control them from one app.",
    cta: { label: "Shop now", href: "#diffusers" },
    align: "right" as const,
    asset: { src: null, video: null, alt: "Whole home scenting", tone: "from-[#dcd6ec] to-[#6b5f8f]" } as Asset,
  },
  {
    title: "The harvest collection",
    body: "A limited run of spiced, gourmand fragrances.",
    cta: { label: "Discover", href: "#collections" },
    align: "left" as const,
    asset: { src: null, video: null, alt: "Harvest collection", tone: "from-[#f0c99a] to-[#b5652a]" } as Asset,
  },
]

export const benefits = {
  title: "Why people love AromaIQ",
  items: [
    {
      title: "Clean ingredients",
      body: "Thoughtfully formulated fragrances without the stuff you don't want.",
      asset: { src: null, alt: "Clean ingredients", tone: "from-[#eee6da] to-[#c2ab8c]" } as Asset,
    },
    {
      title: "Smart control",
      body: "Schedule, adjust intensity and switch scents right from your phone.",
      asset: { src: null, alt: "Smart control", tone: "from-[#e1e7ea] to-[#8a9ba5]" } as Asset,
    },
    {
      title: "Endless variety",
      body: "Hundreds of scents from independent and well-known houses.",
      asset: { src: null, alt: "Variety", tone: "from-[#ecdfe4] to-[#b08494]" } as Asset,
    },
  ],
}

export const diffusers = {
  title: "Find the right diffuser",
  body: "Every space is different. Pick the one that fits.",
  illustration: { src: null, alt: "Home illustration", tone: "from-[#f3efe8] to-[#d6cbb8]" } as Asset,
  products: [
    { name: "Home", size: "Up to 500 sq ft", asset: { src: null, alt: "Home diffuser", tone: "from-[#f4f1ec] to-[#cfc6b6]" } as Asset },
    { name: "Home Mini", size: "Up to 250 sq ft", asset: { src: null, alt: "Home Mini diffuser", tone: "from-[#f1f1f1] to-[#bdbdbd]" } as Asset },
    { name: "Home Plus", size: "Up to 1,000 sq ft", asset: { src: null, alt: "Home Plus diffuser", tone: "from-[#eef0ea] to-[#aeb6a1]" } as Asset },
  ],
  car: { name: "Car", size: "For every drive", asset: { src: null, alt: "Car diffuser", tone: "from-[#e9ecef] to-[#6c757d]" } as Asset },
}

export type Product = (typeof diffusers)["car"]

export const steps = {
  title: "What you'll need",
  items: [
    { n: 1, title: "Choose a diffuser", body: "Pick the size that suits your room.", asset: { src: null, alt: "Step 1", tone: "from-[#f2ece3] to-[#cdbba0]" } as Asset },
    { n: 2, title: "Pick your fragrances", body: "Mix and match up to two scents at once.", asset: { src: null, alt: "Step 2", tone: "from-[#efe6ea] to-[#c49aa9]" } as Asset },
    { n: 3, title: "Download the app", body: "Set schedules and control intensity anywhere.", asset: { src: null, alt: "Step 3", tone: "from-[#e5ebef] to-[#91a6b3]" } as Asset },
  ],
}

export const brands = {
  title: "Fragrances from houses you love",
  body: "A curated library of scents from independent perfumers and lifestyle brands.",
  cta: { label: "Browse all brands", href: "#brands" },
  logos: Array.from({ length: 12 }, (_, i) => ({ name: `Brand ${i + 1}`, src: null as string | null })),
}
