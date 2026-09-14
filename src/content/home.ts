import { assets } from "@/assets"
import type { ImageSrc } from "@/types/content"

// Homepage copy. Media lives in src/assets/index.ts.

export const hero = {
  eyebrow: "New season",
  title: "Scent that sets the mood",
  body: "Discover warm, layered fragrances made for slower evenings at home.",
  cta: { label: "Explore the collection", href: "#collections" },
  asset: assets.home.hero,
}

export const splitHero = {
  title: "Your home, perfectly scented",
  body: "Try a smart diffuser at home for 30 days. Love it or send it back.",
  cta: { label: "Get started", href: "#diffusers" },
  asset: assets.home.splitHero,
}

export const promoBlocks = [
  {
    title: "Seasonal essentials",
    body: "Cozy notes of amber, cedar and spice for every room.",
    cta: { label: "Shop now", href: "#collections" },
    align: "left" as const,
    asset: assets.home.promoSeasonal,
  },
  {
    title: "Scent the whole home",
    body: "Pair diffusers across rooms and control them from one app.",
    cta: { label: "Shop now", href: "#diffusers" },
    align: "right" as const,
    asset: assets.home.promoWholeHome,
  },
  {
    title: "The harvest collection",
    body: "A limited run of spiced, gourmand fragrances.",
    cta: { label: "Discover", href: "#collections" },
    align: "left" as const,
    asset: assets.home.promoHarvest,
  },
]

export const benefits = {
  title: "Why people love AromaIQ",
  items: [
    {
      title: "Clean ingredients",
      body: "Thoughtfully formulated fragrances without the stuff you don't want.",
      asset: assets.home.benefitIngredients,
    },
    {
      title: "Smart control",
      body: "Schedule, adjust intensity and switch scents right from your phone.",
      asset: assets.home.benefitSmartControl,
    },
    {
      title: "Endless variety",
      body: "Hundreds of scents from independent and well-known houses.",
      asset: assets.home.benefitVariety,
    },
  ],
}

export const diffusers = {
  title: "Find the right diffuser",
  body: "Every space is different. Pick the one that fits.",
  illustration: assets.home.diffusersIllustration,
  spaces: [
    { name: "For Office", tagline: "Workspaces & meeting rooms", asset: assets.home.spaceOffice },
    { name: "For Cafés & Restaurants", tagline: "Dining & hospitality", asset: assets.home.spaceCafe },
  ],
}

export type Space = (typeof diffusers)["spaces"][number]

export const steps = {
  title: "What you'll need",
  items: [
    { n: 1, title: "Choose a diffuser", body: "Pick the size that suits your room.", asset: assets.home.step1 },
    { n: 2, title: "Pick your fragrances", body: "Mix and match up to two scents at once.", asset: assets.home.step2 },
    { n: 3, title: "Download the app", body: "Set schedules and control intensity anywhere.", asset: assets.home.step3 },
  ],
}

export const brands = {
  title: "Fragrances from houses you love",
  body: "A curated library of scents from independent perfumers and lifestyle brands.",
  cta: { label: "Browse all brands", href: "#brands" },
  logos: Array.from({ length: 12 }, (_, i) => ({ name: `Brand ${i + 1}`, src: null as ImageSrc | null })),
}
