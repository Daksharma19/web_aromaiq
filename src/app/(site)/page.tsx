import { GrainGradient } from "@/components/shared/grain-gradient"
import {
  Benefits,
  Brands,
  Diffusers,
  Hero,
  PromoBlocks,
  SplitHero,
  Steps,
} from "@/components/sections/home"

export default function HomePage() {
  return (
    <>
      <Hero />
      <SplitHero />
      <PromoBlocks />
      <GrainGradient>
        <Benefits />
        <Diffusers />
        <Steps />
      </GrainGradient>
      <Brands />
    </>
  )
}
