/**
 * Asset manifest — every image and video on the site is registered here, grouped by page and section.
 * See src/assets/README.md for how to swap, add or remove media.
 *
 * Each slot is { src, video?, alt, tone }:
 * - src:   a static image import (preferred), or null to show a gradient placeholder
 * - video: video("name.mp4") for a file in /public/videos and the R2 bucket (src becomes its poster)
 * - alt:   describes the image for screen readers and search engines
 * - tone:  Tailwind gradient used while src is null, and as the frame colour behind loading images
 */
import type { Asset } from "@/types/content"

// ─── Home ─────────────────────────────────────────────────────────────────────
import homeHeroPoster from "./home/hero-poster.jpg"
import splitHero from "./home/split-hero.jpg"
import promoSeasonal from "./home/promo-seasonal.jpg"
import promoWholeHome from "./home/promo-whole-home.jpg"
import promoHarvest from "./home/promo-harvest.jpg"
import benefitIngredients from "./home/benefit-ingredients.jpg"

// ─── About ────────────────────────────────────────────────────────────────────
import founderAyush from "./about/founder-ayush.png"
import founderDaksh from "./about/founder-daksh.png"

/**
 * Videos come from Cloudflare R2 in production (NEXT_PUBLIC_MEDIA_URL, e.g. https://media.aromaiq.in)
 * and from /public/videos locally. Images stay in this folder and are served by Vercel's CDN.
 */
export const MEDIA_URL = process.env.NEXT_PUBLIC_MEDIA_URL?.replace(/\/$/, "") ?? ""
const video = (file: string) => `${MEDIA_URL}/videos/${file}`

export const assets = {
  home: {
    hero: { src: homeHeroPoster, video: video("hero.mp4"), alt: "Flowing orange silk in soft motion", tone: "from-[#f97316] to-[#991b1b]" },
    splitHero: { src: splitHero, alt: "Woman reading on a boucle sofa beside an AromaIQ diffuser in golden afternoon light", tone: "from-[#c9d3cc] to-[#5d7266]" },

    promoSeasonal: { src: promoSeasonal, alt: "Marble AromaIQ diffuser releasing mist on a walnut console beside a succulent and books", tone: "from-[#e8d2b8] to-[#a0643c]" },
    promoWholeHome: { src: promoWholeHome, alt: "Open-plan living, dining and kitchen at dusk with AromaIQ diffusers in each zone", tone: "from-[#dcd6ec] to-[#6b5f8f]" },
    promoHarvest: { src: promoHarvest, alt: "AromaIQ diffuser on an autumn table with dried oranges, vanilla pods and spices", tone: "from-[#f0c99a] to-[#b5652a]" },

    benefitIngredients: { src: benefitIngredients, alt: "Drop of essential oil falling into a glass vial surrounded by lavender, eucalyptus and citrus", tone: "from-[#eee6da] to-[#c2ab8c]" },
    benefitSmartControl: { src: null, alt: "Smart control", tone: "from-[#e1e7ea] to-[#8a9ba5]" },
    benefitVariety: { src: null, alt: "Variety", tone: "from-[#ecdfe4] to-[#b08494]" },

    diffusersIllustration: { src: null, alt: "Home illustration", tone: "from-[#f3efe8] to-[#d6cbb8]" },
    spaceOffice: { src: null, alt: "AromaIQ diffuser in a modern office", tone: "from-[#e4e8ec] to-[#93a3b1]" },
    spaceCafe: { src: null, alt: "AromaIQ diffuser in a café", tone: "from-[#efe6dc] to-[#bfa68a]" },

    step1: { src: null, alt: "Choosing a diffuser", tone: "from-[#f2ece3] to-[#cdbba0]" },
    step2: { src: null, alt: "Picking fragrances", tone: "from-[#efe6ea] to-[#c49aa9]" },
    step3: { src: null, alt: "Using the AromaIQ app", tone: "from-[#e5ebef] to-[#91a6b3]" },
  },

  about: {
    valuePersonal: { src: null, alt: "Personal diffuser at home", tone: "from-[#eee6da] to-[#c2ab8c]" },
    valueCommercial: { src: null, alt: "Diffuser in a café", tone: "from-[#e3ebe2] to-[#8fa58b]" },
    valueSubscription: { src: null, alt: "Essential oil subscription box", tone: "from-[#ecdfe4] to-[#b08494]" },

    founderAyush: { src: founderAyush, alt: "Portrait of Ayush Raj", tone: "from-[#efe6dc] to-[#bfa68a]" },
    founderDaksh: { src: founderDaksh, alt: "Portrait of Daksh Sharma", tone: "from-[#e4e8ec] to-[#93a3b1]" },

    galleryPlanning: { src: null, alt: "Planning on the whiteboard", tone: "from-[#f1e4d6] to-[#c9a27e]" },
    galleryCustomers: { src: null, alt: "Talking to customers", tone: "from-[#e3ebe2] to-[#8fa58b]" },
    galleryExpo: { src: null, alt: "Showcasing at an expo", tone: "from-[#e4e8ec] to-[#93a3b1]" },
    galleryStrategy: { src: null, alt: "Founders in discussion", tone: "from-[#ecdfe4] to-[#b08494]" },
    galleryEngine: { src: null, alt: "Code for the mood engine", tone: "from-[#e6e3ec] to-[#9b93b3]" },
    galleryMentor: { src: null, alt: "Meeting with a mentor", tone: "from-[#efe6dc] to-[#bfa68a]" },
    galleryTeam: { src: null, alt: "Team huddle", tone: "from-[#e3ebe2] to-[#8fa58b]" },
  },
} satisfies Record<string, Record<string, Asset>>
