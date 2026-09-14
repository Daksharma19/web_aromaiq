// Content for the AromaIQ assistant: its persona, starter questions and the knowledge it answers from.
// The bot only knows what is written in `knowledge` — edit it to change what it can talk about.

export const chatbot = {
  name: "Aroma Assistant",
  greeting:
    "Hi! I'm the AromaIQ assistant. Ask me anything about AromaIQ — the smart diffuser, AI scent engine, how it works, or the team behind it.",
  suggestions: [
    "What is AromaIQ?",
    "How does the AI scent engine work?",
    "When can I buy one?",
    "Who founded AromaIQ?",
  ],
  contactEmail: "aromaiqscents@gmail.com",
}

export const knowledge = `
# AromaIQ — company brief

## In one line
AromaIQ is an Indian scent-intelligence startup building an AI-powered smart aroma diffuser that blends scents around your mood, routine and time of day.

## The problem
Traditional diffusers usually release a single scent at a fixed intensity. AromaIQ aims to make scent adaptive — helping a space respond to how you feel and what you're doing.

## The product
- A smart diffuser with exactly 4 independent scent chambers.
- Each chamber holds a different essential oil and can be controlled independently.
- The AI scent engine can select from a library of 15 essential oils and create personalized combinations.
- The system considers factors such as mood profile, time of day and usage patterns.
- The mobile app lets users control the diffuser, schedule scents, adjust intensity and switch blends.
- Wi-Fi and Bluetooth connectivity.
- Flameless and designed to operate below 30 dB.
- Designed and made in India.

## Example experience
- Morning: bright citrus blends to energize the space.
- Focus: peppermint-forward blends for concentration.
- Unwind: calming combinations such as bergamot and peppermint.
- Sleep: deeper woody fragrances for a relaxing atmosphere.

These are illustrative experiences, not fixed presets.

## Who it's for
- Homes, bedrooms, studios and personal spaces.
- Cafés, restaurants, boardrooms and other commercial environments.
- Future scent subscriptions are planned for recurring essential-oil delivery.

## Current status
- AromaIQ is an early-stage startup with a functioning prototype that has been demonstrated and tested.
- The company is moving toward commercialization.
- A confirmed public launch date and final retail pricing have not been established.
- Users can follow AromaIQ or contact the team for updates.

## Company
- Conceptualized in 2024 by two college students.
- Aroma IQ Private Limited was incorporated on 21 February 2025.
- CIN: U46491UP2025PTC217256.
- DPIIT Startup India recognition: DIPP206255.
- Registered in Uttar Pradesh, India.

## Story
AromaIQ began with the idea that a room should be able to adapt its scent to the person inside it. The vision combines four scent chambers, an intelligent control system and an app into one personalized aroma experience.

## Team
- Ayush Raj, Co-founder & CEO. Leads the company's vision and smart-wellness innovation.
- Daksh Sharma, Co-founder & CTO. Leads the technology behind the intelligent aroma experience.

## Contact & links
- Email: aromaiqscents@gmail.com
- Website: https://aromaiq.in
- About: https://aromaiq.in/about
- Instagram: https://www.instagram.com/aromaiqscents/
- LinkedIn: https://www.linkedin.com/in/aromaiq-scents-6488bb35b/
`.trim()