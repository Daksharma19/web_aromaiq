import type { Metadata } from "next"
import { GrainGradient } from "@/components/shared/grain-gradient"
import { AboutCta, AboutHero, Stats, Story, Team, Values } from "@/components/sections/about"

export const metadata: Metadata = {
  title: "About Us",
  description: "The story, values and people behind AromaIQ.",
}

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <Story />
      <Stats />
      <GrainGradient>
        <Values />
      </GrainGradient>
      <Team />
      <AboutCta />
    </>
  )
}
