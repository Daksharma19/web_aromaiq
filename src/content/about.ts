import { assets } from "@/assets"

// About Us page copy, sourced from aromaiq.in/our-story. Media lives in src/assets/index.ts.

export const manifesto = {
  eyebrow: "The question",
  text: "What if your room knew how you felt? Generic diffusers can't read a room. We think scent should respond to your mood, your routine and the time of day — without you lifting a finger.",
}

export const journey = {
  eyebrow: "The journey",
  title: "From a question to a prototype",
  items: [
    {
      tag: "2024",
      title: "The idea",
      body: "Two college students, surrounded by the stress of modern life, asked a simple question: why doesn't any device adjust the aroma of a room to what you actually need?",
    },
    {
      tag: "The vision",
      title: "Four chambers, one app",
      body: "A diffuser with four independent scent chambers, controlled by an app that learns your behavioural patterns and blends accordingly.",
    },
    {
      tag: "The engine",
      title: "AI that learns your nose",
      body: "A mood-aware AI engine picks from 15 essential oils based on your mood profile and the time of day — then gets better the longer you use it.",
    },
    {
      tag: "Today",
      title: "Prototype on the workbench",
      body: "The hardware prototype is in development, the mobile app is being built and the AI mood engine is under construction.",
    },
  ],
}

export const moods = {
  eyebrow: "How it thinks",
  title: "One diffuser. Every mood.",
  body: "Scroll through a day with AromaIQ. Each chamber holds a different oil, and the engine blends them in real time.",
  // Soft hyphens (\u00AD) give narrow chamber columns clean break points; they're invisible otherwise.
  chambers: ["Citrus", "Pepper\u00ADmint", "Berga\u00ADmot", "Deep woods"],
  items: [
    { time: "07:00", mood: "Morning", body: "Bright citrus to wake the room up.", mix: [80, 15, 5, 0], color: "#ffc27a", waves: { horizon: "#ff7a2f", wave: "#ffc27a", crest: "#fff4e0" } },
    { time: "14:00", mood: "Focus", body: "Cool peppermint for long stretches of deep work.", mix: [15, 70, 15, 0], color: "#9fd8c4", waves: { horizon: "#1f8a7a", wave: "#9fd8c4", crest: "#f0fff9" } },
    { time: "18:00", mood: "Unwind", body: "Bergamot and peppermint when stress runs high.", mix: [5, 30, 65, 0], color: "#f7a8d8", waves: { horizon: "#5227ff", wave: "#ff9ffc", crest: "#ffffff" } },
    { time: "23:00", mood: "Sleep", body: "Deep woods to slow everything down.", mix: [0, 0, 20, 80], color: "#b99b7e", waves: { horizon: "#3a2a1f", wave: "#b99b7e", crest: "#f3e6d8" } },
  ],
}

export const stats = [
  { value: 4, suffix: "", label: "Independent scent chambers" },
  { value: 15, suffix: "", label: "Essential oils to blend from" },
  { value: 30, prefix: "<", suffix: "dB", label: "Whisper-quiet operation" },
  { value: 2024, suffix: "", label: "The year it all started", plain: true },
]

export const values = {
  title: "Every room. Every mood. Every person.",
  items: [
    {
      title: "Personal diffusers",
      body: "For bedrooms, studios and homes — a diffuser that learns the people who live with it.",
      asset: assets.about.valuePersonal,
    },
    {
      title: "Commercial spaces",
      body: "Units for cafés and restaurants, so every guest walks into a room that feels intentional.",
      asset: assets.about.valueCommercial,
    },
    {
      title: "Scent subscriptions",
      body: "Fresh essential oils delivered on a schedule, matched to how you actually use your diffuser.",
      asset: assets.about.valueSubscription,
    },
  ],
}

export const team = {
  eyebrow: "The team",
  title: "Two builders. One obsession.",
  founders: [
    {
      name: "Ayush Raj",
      role: "Co-founder & CEO",
      bio: "Visionary leader driving innovation in smart wellness technology.",
      frame: "bg-gradient-to-br from-[#e6cfa4] to-[#b99467]",
      asset: assets.about.founderAyush,
    },
    {
      name: "Daksh Sharma",
      role: "Co-founder & CTO",
      bio: "Technical mastermind crafting intelligent aroma experiences.",
      frame: "bg-gradient-to-br from-[#dce4ec] to-[#a6b6c6]",
      asset: assets.about.founderDaksh,
    },
  ],
  galleryEyebrow: "Obsessed in action",
  gallery: [
    { label: "Planning on board", asset: assets.about.galleryPlanning },
    { label: "Talking to customers", asset: assets.about.galleryCustomers },
    { label: "Expo showcase", asset: assets.about.galleryExpo },
    { label: "Late-night strategy", asset: assets.about.galleryStrategy },
    { label: "Writing the engine", asset: assets.about.galleryEngine },
    { label: "Mentor sessions", asset: assets.about.galleryMentor },
    { label: "Building the team", asset: assets.about.galleryTeam },
  ],
}

export const aboutCta = {
  title: "Breathe differently.",
  body: "Designed and made in India. Say hello — we'd love to hear what your room should smell like.",
  cta: { label: "Get in touch", href: "mailto:hello@aromaiq.com" },
}
