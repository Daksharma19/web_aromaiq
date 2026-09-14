/**
 * Asset manifest — every image and video on the site is registered here, grouped by page and section.
 * See src/assets/README.md for how to swap, add or remove media.
 *
 * Each slot is { src, video?, alt, tone }:
 * - src:   img("page/file-name") — the image in this folder with that name, or null (gradient placeholder) while it's missing
 * - video: video("name.mp4") for a file in /public/videos and the R2 bucket (src becomes its poster)
 * - alt:   describes the image for screen readers and search engines
 * - tone:  Tailwind gradient used while src is null, and as the frame colour behind loading images
 */
import type { Asset } from "@/types/content"
import { files } from "./files.generated"

/**
 * Image for a slot, found by its path inside src/assets without the extension, e.g. img("home/split-hero").
 * Drop a file with that name (.jpg, .png, .webp…) into the folder and it shows up; until then the placeholder renders.
 * The file list is regenerated automatically while `next dev` runs.
 */
const img = (name: string) => files[name] ?? null

/**
 * Videos come from Cloudflare R2 in production (NEXT_PUBLIC_MEDIA_URL, e.g. https://media.aromaiq.in)
 * and from /public/videos locally. Images stay in this folder and are served by Vercel's CDN.
 */
export const MEDIA_URL = process.env.NEXT_PUBLIC_MEDIA_URL?.replace(/\/$/, "") ?? ""
const video = (file: string) => `${MEDIA_URL}/videos/${file}`

export const assets = {
  home: {
    hero: { src: img("home/hero-poster"), video: video("hero.mp4"), alt: "Flowing orange silk in soft motion", tone: "from-[#f97316] to-[#991b1b]" },
    splitHero: { src: img("home/split-hero"), alt: "Woman reading on a boucle sofa beside an AromaIQ diffuser in golden afternoon light", tone: "from-[#c9d3cc] to-[#5d7266]" },

    promoSeasonal: { src: img("home/promo-seasonal"), alt: "Marble AromaIQ diffuser releasing mist on a walnut console beside a succulent and books", tone: "from-[#e8d2b8] to-[#a0643c]" },
    promoWholeHome: { src: img("home/promo-whole-home"), alt: "Open-plan living, dining and kitchen at dusk with AromaIQ diffusers in each zone", tone: "from-[#dcd6ec] to-[#6b5f8f]" },
    promoHarvest: { src: img("home/promo-harvest"), alt: "AromaIQ diffuser on an autumn table with dried oranges, vanilla pods and spices", tone: "from-[#f0c99a] to-[#b5652a]" },

    benefitIngredients: { src: img("home/benefit-ingredients"), alt: "Drop of essential oil falling into a glass vial surrounded by lavender, eucalyptus and citrus", tone: "from-[#eee6da] to-[#c2ab8c]" },
    benefitSmartControl: { src: img("home/benefit-smart-control"), alt: "Smart control", tone: "from-[#e1e7ea] to-[#8a9ba5]" },
    benefitVariety: { src: img("home/benefit-variety"), alt: "Variety", tone: "from-[#ecdfe4] to-[#b08494]" },

    diffusersIllustration: { src: img("home/diffusers-room"), alt: "Home illustration", tone: "from-[#f3efe8] to-[#d6cbb8]" },
    spaceOffice: { src: img("home/space-office"), alt: "AromaIQ diffuser in a modern office", tone: "from-[#e4e8ec] to-[#93a3b1]" },
    spaceCafe: { src: img("home/space-cafe"), alt: "AromaIQ diffuser in a café", tone: "from-[#efe6dc] to-[#bfa68a]" },

    step1: { src: img("home/step-choose"), alt: "Choosing a diffuser", tone: "from-[#f2ece3] to-[#cdbba0]" },
    step2: { src: img("home/step-fragrances"), alt: "Picking fragrances", tone: "from-[#efe6ea] to-[#c49aa9]" },
    step3: { src: img("home/step-app"), alt: "Using the AromaIQ app", tone: "from-[#e5ebef] to-[#91a6b3]" },
  },

  about: {
    valuePersonal: { src: img("about/value-personal"), alt: "Personal diffuser at home", tone: "from-[#eee6da] to-[#c2ab8c]" },
    valueCommercial: { src: img("about/value-commercial"), alt: "Diffuser in a café", tone: "from-[#e3ebe2] to-[#8fa58b]" },
    valueSubscription: { src: img("about/value-subscription"), alt: "Essential oil subscription box", tone: "from-[#ecdfe4] to-[#b08494]" },

    founderAyush: { src: img("about/founder-ayush"), alt: "Portrait of Ayush Raj", tone: "from-[#efe6dc] to-[#bfa68a]" },
    founderDaksh: { src: img("about/founder-daksh"), alt: "Portrait of Daksh Sharma", tone: "from-[#e4e8ec] to-[#93a3b1]" },

    galleryPlanning: { src: img("about/gallery-planning"), alt: "Planning on the whiteboard", tone: "from-[#f1e4d6] to-[#c9a27e]" },
    galleryCustomers: { src: img("about/gallery-customers"), alt: "Talking to customers", tone: "from-[#e3ebe2] to-[#8fa58b]" },
    galleryExpo: { src: img("about/gallery-expo"), alt: "Showcasing at an expo", tone: "from-[#e4e8ec] to-[#93a3b1]" },
    galleryStrategy: { src: img("about/gallery-strategy"), alt: "Founders in discussion", tone: "from-[#ecdfe4] to-[#b08494]" },
    galleryEngine: { src: img("about/gallery-engine"), alt: "Code for the mood engine", tone: "from-[#e6e3ec] to-[#9b93b3]" },
    galleryMentor: { src: img("about/gallery-mentor"), alt: "Meeting with a mentor", tone: "from-[#efe6dc] to-[#bfa68a]" },
    galleryTeam: { src: img("about/gallery-team"), alt: "Team huddle", tone: "from-[#e3ebe2] to-[#8fa58b]" },
  },
} satisfies Record<string, Record<string, Asset>>
