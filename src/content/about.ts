import type { Asset } from "@/types/content"

// About Us page copy and media. Sourced from aromaiq.in/our-story.

export const aboutHero = {
  eyebrow: "Our story",
  title: "Built from a bedroom. Aimed at every room.",
  body: "AromaIQ is scent intelligence for modern living — a smart diffuser that reads the room, learns how you feel and blends the right aroma on its own.",
  asset: { src: "/assets/hero.jpg", video: null, alt: "Golden fragrance particles drifting through warm light", tone: "from-[#ead9c6] to-[#9b7456]" } as Asset,
}

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
  chambers: ["Citrus", "Peppermint", "Bergamot", "Deep woods"],
  items: [
    { time: "07:00", mood: "Morning", body: "Bright citrus to wake the room up.", mix: [80, 15, 5, 0], color: "#ffc27a" },
    { time: "14:00", mood: "Focus", body: "Cool peppermint for long stretches of deep work.", mix: [15, 70, 15, 0], color: "#9fd8c4" },
    { time: "18:00", mood: "Unwind", body: "Bergamot and peppermint when stress runs high.", mix: [5, 30, 65, 0], color: "#f7a8d8" },
    { time: "23:00", mood: "Sleep", body: "Deep woods to slow everything down.", mix: [0, 0, 20, 80], color: "#b99b7e" },
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
      asset: { src: null, alt: "At home", tone: "from-[#eee6da] to-[#c2ab8c]" } as Asset,
    },
    {
      title: "Commercial spaces",
      body: "Units for cafés and restaurants, so every guest walks into a room that feels intentional.",
      asset: { src: null, alt: "Cafés & restaurants", tone: "from-[#e3ebe2] to-[#8fa58b]" } as Asset,
    },
    {
      title: "Scent subscriptions",
      body: "Fresh essential oils delivered on a schedule, matched to how you actually use your diffuser.",
      asset: { src: null, alt: "Subscriptions", tone: "from-[#ecdfe4] to-[#b08494]" } as Asset,
    },
  ],
}

export const team = {
  eyebrow: "The team",
  title: "Two builders. One obsession.",
  members: [
    {
      name: "Ayush Raj",
      role: "Co-founder & CEO",
      bio: "Visionary leader driving innovation in smart wellness technology.",
      asset: { src: null, alt: "Ayush Raj", tone: "from-[#efe6dc] to-[#bfa68a]" } as Asset,
    },
    {
      name: "Daksh Sharma",
      role: "Co-founder & CTO",
      bio: "Technical mastermind crafting intelligent aroma experiences.",
      asset: { src: null, alt: "Daksh Sharma", tone: "from-[#e4e8ec] to-[#93a3b1]" } as Asset,
    },
  ],
  supporters: {
    title: "Mentored & supported by",
    items: [
      { name: "Janam Mehta", detail: "Mentor, JSW Ventures" },
      { name: "Our college", detail: "Early backing" },
    ],
  },
}

export const aboutCta = {
  title: "Breathe differently.",
  body: "Designed and made in India. Say hello — we'd love to hear what your room should smell like.",
  cta: { label: "Get in touch", href: "mailto:hello@aromaiq.com" },
}
