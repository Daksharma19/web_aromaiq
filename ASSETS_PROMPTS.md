# Asset prompts

Every image, video and logo slot on the site, grouped by page and section, with a ready-to-copy prompt for each one.

- **Images:** Midjourney v7, Flux 1.1 Pro, Google Imagen, GPT-Image. The `--ar` / `--style raw` flags at the end are Midjourney-only; on other tools, delete them and set the aspect ratio in the UI.
- **Video:** Runway Gen-4, Kling, Google Veo, Luma.
- Every code block is standalone: house style and product description are already included. Click copy and paste.

All media is registered in `src/assets/index.ts`. Save a file under the name listed for its slot and it appears on the site automatically. See `src/assets/README.md`.

---

## Inventory

| Page | Section (component) | Slot | Type | Status | Ratio | Save as |
| --- | --- | --- | --- | --- | --- | --- |
| Home | Hero (`home/hero.tsx`) | `home.hero` | Video + poster | Filled (poster is only 1280×720) | 16:9 | `public/videos/hero.mp4`, `src/assets/home/hero-poster.jpg` |
| Home | Split hero (`home/split-hero.tsx`) | `home.splitHero` | Image | Placeholder | 4:5 | `home/split-hero.jpg` |
| Home | Promo blocks (`home/promo-blocks.tsx`) | `home.promoSeasonal` | Image | Placeholder | 16:9 | `home/promo-seasonal.jpg` |
| Home | Promo blocks | `home.promoWholeHome` | Image | Placeholder | 16:9 | `home/promo-whole-home.jpg` |
| Home | Promo blocks | `home.promoHarvest` | Image | Placeholder | 16:9 | `home/promo-harvest.jpg` |
| Home | Benefits (`home/benefits.tsx`) | `home.benefitIngredients` | Image | Placeholder | 4:3 | `home/benefit-ingredients.jpg` |
| Home | Benefits | `home.benefitSmartControl` | Image | Placeholder | 4:3 | `home/benefit-smart-control.jpg` |
| Home | Benefits | `home.benefitVariety` | Image | Placeholder | 4:3 | `home/benefit-variety.jpg` |
| Home | Diffusers (`home/diffusers.tsx`) | `home.diffusersIllustration` | Image | Placeholder | 3:4 | `home/diffusers-room.jpg` |
| Home | Diffusers | `home.spaceOffice` | Image | Placeholder | 4:5 | `home/space-office.jpg` |
| Home | Diffusers | `home.spaceCafe` | Image | Placeholder | 4:5 | `home/space-cafe.jpg` |
| Home | Steps (`home/steps.tsx`) | `home.step1` | Image | Placeholder | 4:3 | `home/step-choose.jpg` |
| Home | Steps | `home.step2` | Image | Placeholder | 4:3 | `home/step-fragrances.jpg` |
| Home | Steps | `home.step3` | Image | Placeholder | 4:3 | `home/step-app.jpg` |
| Home | Brands (`home/brands.tsx`) | `brands.logos` ×12 (`src/content/home.ts`) | Logo | Placeholder (text) | 3:2 tile, logo max 40px tall | `home/brand-<name>.svg` |
| About | Values (`about/values.tsx`) | `about.valuePersonal` | Image | Placeholder | 4:3 | `about/value-personal.jpg` |
| About | Values | `about.valueCommercial` | Image | Placeholder | 4:3 | `about/value-commercial.jpg` |
| About | Values | `about.valueSubscription` | Image | Placeholder | 4:3 | `about/value-subscription.jpg` |
| About | Team (`about/team.tsx`) | `about.founderAyush` | Portrait | Filled (only 670×680) | 4:5 | `about/founder-ayush.png` |
| About | Team | `about.founderDaksh` | Portrait | Filled | 4:5 | `about/founder-daksh.png` |
| About | Team gallery | `about.galleryPlanning` | Image | Placeholder | 3:2 | `about/gallery-planning.jpg` |
| About | Team gallery | `about.galleryCustomers` | Image | Placeholder | 3:2 | `about/gallery-customers.jpg` |
| About | Team gallery | `about.galleryExpo` | Image | Placeholder | 3:2 | `about/gallery-expo.jpg` |
| About | Team gallery | `about.galleryStrategy` | Image | Placeholder | 3:2 | `about/gallery-strategy.jpg` |
| About | Team gallery | `about.galleryEngine` | Image | Placeholder | 3:2 | `about/gallery-engine.jpg` |
| About | Team gallery | `about.galleryMentor` | Image | Placeholder | 3:2 | `about/gallery-mentor.jpg` |
| About | Team gallery | `about.galleryTeam` | Image | Placeholder | 3:2 | `about/gallery-team.jpg` |

The Manifesto, Journey, Moods, Stats and CTA sections on About are typographic or animated (`gradient-waves`, `grain-gradient`) and have no media slots. Share images (`opengraph-image.tsx`) and icons are generated in code.

---

## Global blocks

These are already included in every prompt below. They're here for reference, or for writing new prompts.

### 1. Product lock: the AromaIQ diffuser

Use this exact wording every time the product appears. **Generate the For Office shot first**, pick the best render, then attach it as an image/style reference (Midjourney `--sref` / `--oref`, Flux Redux, GPT-Image reference) for every other prompt so the product looks identical everywhere.

```text
the AromaIQ smart aroma diffuser: a minimalist rounded-cylinder device in matte warm-white ceramic, with four slim clear-glass scent chambers set into the top in a neat 2x2 arrangement, each filled with a differently tinted essential oil (pale citrus gold, mint green, soft bergamot rose, deep woody amber), a thin brushed-brass ring around the upper edge, a soft diffused LED light ring glowing at the base, and a fine, delicate wisp of mist rising from the centre
```

### 2. House style

```text
premium lifestyle editorial photography, shot on a medium-format camera with an 80mm lens, soft natural light, warm neutral palette of oat, sand, warm white, smoked oak and brushed brass, gentle film grain, shallow depth of field, calm uncluttered Japandi interiors, high-end design-magazine quality, photorealistic, no text, no logos, no watermarks
```

### 3. Negative prompt (Flux / SD / Imagen, where supported)

```text
text, letters, logo, watermark, cartoon, 3D render look, CGI, oversaturated, harsh flash, clutter, distorted hands, extra fingers, plastic skin, deformed product, more than four chambers, cords and cables in frame
```

---

## Home page

### Hero: `home.hero`

Full-screen background (`min-h-svh`). Text sits at the **bottom-left** over a dark gradient, so keep that area calm and darker. The copy reads *"Scent that sets the mood"*.

#### Video → `public/videos/hero.mp4` · 16:9 · 8–10 s seamless loop · no audio

```text
Cinematic slow-motion macro video: golden, luminous fragrance particles and fine aroma mist drift and swirl gently through warm, low evening light in a softly blurred minimalist living room. Tiny specks catch the light like dust in a sunbeam, with gentle volumetric haze and a shallow depth of field. The camera moves very slowly forward in a smooth dolly. Warm amber, honey and sand tones with soft bokeh highlights. The lower-left third stays darker and calm. Seamless loop: the first and last frames match, with no cuts, no people, no text and no logos. Premium, meditative, luxury brand film, 24fps.
```

Tip: generate 10 s, then trim to a loop point and crossfade the ends. Compress with the ffmpeg command at the bottom of this file.

#### Poster → `src/assets/home/hero-poster.jpg` · 16:9 · 2400px wide

Use a frame from the final video if possible (`ffmpeg -ss 00:00:01 -i hero.mp4 -frames:v 1 -q:v 2 hero-poster.jpg`). Otherwise:

```text
Cinematic still: golden luminous fragrance particles and fine aroma mist drifting through warm low evening light in a softly blurred minimalist living room, dust-in-sunbeam sparkle, gentle volumetric haze, amber, honey and sand tones, soft bokeh, lower-left third darker and calm for headline text. Premium lifestyle editorial photography, medium-format camera, gentle film grain, photorealistic, no text, no logos, no watermarks --ar 16:9 --style raw
```

---

### Split hero: `home.splitHero`

→ `home/split-hero.jpg` · 4:5 portrait (4:3 crop on mobile, tall half-width on desktop) · text is beside the image, not over it. Copy: *"Your home, perfectly scented"*.

```text
A woman in her late twenties in an oversized oat linen shirt curls up on a cream boucle sofa reading a book in late-afternoon golden light. Beside her on a travertine side table stands the AromaIQ smart aroma diffuser: a minimalist rounded-cylinder device in matte warm-white ceramic, with four slim clear-glass scent chambers set into the top in a neat 2x2 arrangement, each filled with a differently tinted essential oil (pale citrus gold, mint green, soft bergamot rose, deep woody amber), a thin brushed-brass ring around the upper edge, a soft diffused LED light ring glowing at the base, and a fine, delicate wisp of mist rising from the centre. A soft throw blanket, a ceramic mug and sheer curtains glow behind her. Serene, lived-in luxury, with the subject in the right third and calm negative space on the left, framed to survive a 4:3 centre crop. Premium lifestyle editorial photography, shot on a medium-format camera with an 80mm lens, soft natural light, warm neutral palette of oat, sand, warm white, smoked oak and brushed brass, gentle film grain, shallow depth of field, calm uncluttered Japandi interior, high-end design-magazine quality, photorealistic, no text, no logos, no watermarks --ar 4:5 --style raw
```

---

### Promo blocks (stacked sticky cards)

Tall rounded cards (`72svh`) with white text over a bottom gradient. Shoot 16:9 with generous margins, because the card crops the sides on mobile.

#### Seasonal essentials: `home.promoSeasonal`

→ `home/promo-seasonal.jpg` · 16:9 · text at **bottom-left**

```text
Moody still life on a dark walnut console: the AromaIQ smart aroma diffuser, a minimalist rounded-cylinder device in matte warm-white ceramic with four slim clear-glass scent chambers set into the top in a 2x2 arrangement, each filled with a differently tinted essential oil (pale citrus gold, mint green, soft bergamot rose, deep woody amber), a thin brushed-brass ring around the upper edge, a soft LED light ring glowing at the base and a fine wisp of mist rising from the centre. Around it sit amber glass essential-oil bottles, cedar shavings, cinnamon sticks and star anise. Warm, low sunlight rakes across the scene with long shadows, and the mist catches the light. Deep amber, cedar and chocolate tones. The product sits in the right half, and the lower-left third stays dark and simple for headline text. Premium editorial still-life photography, medium-format camera, gentle film grain, shallow depth of field, photorealistic, no text, no logos, no watermarks --ar 16:9 --style raw
```

#### Scent the whole home: `home.promoWholeHome`

→ `home/promo-whole-home.jpg` · 16:9 · text at **bottom-right**

```text
Wide architectural interior photograph of an open-plan modern home at dusk: living room, dining area and kitchen flowing together in warm oak, plaster and linen, with warm lamps glowing. Three identical AromaIQ smart aroma diffusers are placed subtly in different zones (the sideboard, the dining table and the kitchen island). Each is a minimalist rounded-cylinder device in matte warm-white ceramic with four slim clear-glass scent chambers on top, a thin brushed-brass ring and a soft glowing LED light ring at the base, releasing a faint wisp of mist. Soft lavender-blue twilight shows through floor-to-ceiling windows. Calm, spacious and aspirational, with the lower-right area uncluttered for headline text. Premium architectural-lifestyle photography, medium-format camera, gentle film grain, photorealistic, no text, no logos, no watermarks --ar 16:9 --style raw
```

#### The harvest collection: `home.promoHarvest`

→ `home/promo-harvest.jpg` · 16:9 · text at **bottom-left**

```text
Autumn harvest tabletop styled like a luxury food editorial: dried orange slices, vanilla pods, cloves, burnt-orange ceramic bowls and rumpled linen napkins arranged around the AromaIQ smart aroma diffuser. It is a minimalist rounded-cylinder device in matte warm-white ceramic with four slim clear-glass scent chambers set into the top in a 2x2 arrangement, filled with warm-toned oils, a thin brushed-brass ring, a soft glowing LED light ring at the base and a wisp of mist. Glowing backlight turns the mist golden. Rich terracotta, saffron and caramel tones. The product sits right of centre, and the lower-left third stays darker and clean for text. Premium editorial photography, medium-format camera, gentle film grain, shallow depth of field, photorealistic, no text, no logos, no watermarks --ar 16:9 --style raw
```

---

### Benefits: "Why people love AromaIQ"

Image at the top of glass cards, 4:3, no text overlay.

#### Clean ingredients: `home.benefitIngredients`

→ `home/benefit-ingredients.jpg` · 4:3

```text
Macro still life of pure essential oils: a single golden drop falling from a glass dropper into a small clear glass vial, with fresh eucalyptus, lavender sprigs, a bergamot slice and citrus peel on pale limestone. Bright, clean, airy daylight against a soft sand-coloured background. Botanical, pure and honest. Premium editorial macro photography, 100mm macro lens, gentle film grain, shallow depth of field, warm neutral palette, photorealistic, no text, no logos, no watermarks --ar 4:3 --style raw
```

#### Smart control: `home.benefitSmartControl`

→ `home/benefit-smart-control.jpg` · 4:3

```text
Close-up of a relaxed hand holding a modern smartphone whose screen shows a minimal, softly blurred wellness app with four pastel slider bars and a soft gradient (UI unreadable, no text). Softly out of focus on a bedside table behind it stands the AromaIQ smart aroma diffuser: a minimalist rounded-cylinder device in matte warm-white ceramic with four slim clear-glass scent chambers on top, a thin brushed-brass ring and an LED light ring glowing the same soft colour as the app, with a fine wisp of mist. Cool morning light and a grey-blue and oat linen palette. Effortless technology. Premium lifestyle editorial photography, medium-format camera, gentle film grain, shallow depth of field, photorealistic, no readable text, no logos, no watermarks --ar 4:3 --style raw
```

#### Endless variety: `home.benefitVariety`

→ `home/benefit-variety.jpg` · 4:3

```text
Overhead flat lay of about fifteen small unlabeled glass essential-oil vials in blush, amber, sage, pale gold and smoky-grey glass, arranged in a loose grid on dusty-rose textured paper with dried flowers, citrus slices, cedar chips, peppermint leaves and herbs tucked between them. Soft, even studio daylight. Curated apothecary-luxury feel. Premium editorial flat-lay photography, gentle film grain, photorealistic, no text, no labels, no logos, no watermarks --ar 4:3 --style raw
```

---

### Diffusers: "Find the right diffuser"

#### Room illustration: `home.diffusersIllustration`

→ `home/diffusers-room.jpg` · 3:4 tall, fills the left column (min 360px tall) · no text overlay

```text
Serene minimalist living room in warm off-white tones: a low linen sofa, a round oak coffee table, a large arched window and a potted olive tree. Centred on a plaster plinth stands the AromaIQ smart aroma diffuser, a minimalist rounded-cylinder device in matte warm-white ceramic with four slim clear-glass scent chambers set into the top in a 2x2 arrangement, each filled with a differently tinted essential oil, a thin brushed-brass ring, a soft glowing LED light ring at the base and a soft plume of mist. Soft architectural daylight, lots of negative space and a gentle warm gradient on the wall. So clean and soft it feels almost like a stylised illustration. Premium architectural-interior photography, medium-format camera, warm neutral palette, photorealistic, no text, no logos, no watermarks --ar 3:4 --style raw
```

#### For Office: `home.spaceOffice`

→ `home/space-office.jpg` · 4:5 portrait · rounded tile, no overlay

```text
Premium modern office interior in soft daylight: a light-oak meeting table with minimal chairs, a glass partition, a potted fiddle-leaf fig and a calm grey-blue and warm-white palette. On a slim oak credenza stands the AromaIQ smart aroma diffuser, a minimalist rounded-cylinder device in matte warm-white ceramic with four slim clear-glass scent chambers set into the top in a 2x2 arrangement, each filled with a differently tinted essential oil (pale citrus gold, mint green, soft bergamot rose, deep woody amber), a thin brushed-brass ring around the upper edge, a soft LED light ring glowing at the base and a fine wisp of mist rising from the centre. Two professionals softly blurred in the background, focused and calm. The product is sharp in the lower third. Premium architectural-interior editorial photography, medium-format camera, shallow depth of field, gentle film grain, photorealistic, no text, no logos, no watermarks --ar 4:5 --style raw
```

#### For Cafés & Restaurants: `home.spaceCafe`

→ `home/space-cafe.jpg` · 4:5 portrait · rounded tile, no overlay

```text
Upscale specialty café and restaurant interior in warm golden-hour light: sage-green tiles, a honed marble counter, brass pendant lights, ceramic cups and a few guests softly blurred at wooden tables. On the counter stands the AromaIQ smart aroma diffuser, a minimalist rounded-cylinder device in matte warm-white ceramic with four slim clear-glass scent chambers set into the top in a 2x2 arrangement, each filled with a differently tinted essential oil, a thin brushed-brass ring, a soft LED light ring glowing at the base and a fine wisp of mist catching the light. Inviting, intentional boutique-hospitality mood. The product is sharp in the lower third. Premium hospitality editorial photography, medium-format camera, shallow depth of field, gentle film grain, warm palette of sage, marble, oak and brass, photorealistic, no text, no logos, no watermarks --ar 4:5 --style raw
```

---

### Steps: "What you'll need"

4:3 images on rounded cards, no overlay.

#### Step 1: Choose a diffuser: `home.step1`

→ `home/step-choose.jpg` · 4:3

```text
Three AromaIQ smart aroma diffusers in small, medium and tall sizes lined up on a long oak shelf against a warm limewash plaster wall. Each is a minimalist rounded-cylinder device in matte warm-white ceramic with four slim clear-glass scent chambers on top, a thin brushed-brass ring and a soft glowing LED light ring at the base. A hand with a simple gold ring reaches toward the middle one. Soft side light, calm and considered, like a boutique design showroom. Premium lifestyle editorial photography, medium-format camera, gentle film grain, shallow depth of field, warm neutral palette, photorealistic, no text, no logos, no watermarks --ar 4:3 --style raw
```

#### Step 2: Pick your fragrances: `home.step2`

→ `home/step-fragrances.jpg` · 4:3

```text
Close-up of hands sliding a slim clear-glass scent chamber filled with rose-tinted essential oil into one of the four slots on top of the AromaIQ smart aroma diffuser, a minimalist rounded-cylinder device in matte warm-white ceramic with a thin brushed-brass ring and a soft LED light ring, on a white marble counter. The other chambers already hold pale citrus gold, mint green and deep woody amber oils. More spare chambers in blush and amber tones lie nearby. Soft rose-toned natural light and tactile detail. Ritual, personal, luxurious. Premium lifestyle editorial photography, macro-leaning 80mm lens, gentle film grain, shallow depth of field, photorealistic, no text, no labels, no logos, no watermarks --ar 4:3 --style raw
```

#### Step 3: Download the app: `home.step3`

→ `home/step-app.jpg` · 4:3

```text
A person in a cream knit sweater sits relaxed by a large window, tapping a smartphone whose screen shows a soft pastel gradient app with no readable text. On the windowsill beside them glows the AromaIQ smart aroma diffuser: a minimalist rounded-cylinder device in matte warm-white ceramic with four slim clear-glass scent chambers on top, a thin brushed-brass ring and a soft LED light ring, with a fine wisp of mist. Cool blue-grey morning light with warm skin tones. Quiet, modern and effortless. Premium lifestyle editorial photography, medium-format camera, gentle film grain, shallow depth of field, photorealistic, no readable text, no logos, no watermarks --ar 4:3 --style raw
```

---

### Brands: "Fragrances from houses you love"

→ 12 tiles, 3:2, logo rendered at max 40px tall · `brands.logos` in `src/content/home.ts`

**Use real partner logos**, not generated ones. Get SVG (preferred) or transparent PNG files from each brand's press kit, set them to a single dark-grey colour for a calm grid, save them to `src/assets/home/brand-<name>.svg`, and set `{ name, src }` for each entry. Never generate logos of real brands.

If you need neutral placeholders until partners are confirmed:

```text
A set of minimal, fictional luxury fragrance-house monogram wordmarks in a single dark charcoal colour on a pure white background: elegant serif and refined sans-serif letterforms, simple, balanced and embossed-looking with no gradients, in the style of a high-end perfumery brand identity. Flat vector style, centred, generous padding, no real brand names --ar 3:2
```

---

## About page

### Values: "Every room. Every mood. Every person."

Glass cards, 4:3, no overlay.

#### Personal diffusers: `about.valuePersonal`

→ `about/value-personal.jpg` · 4:3

```text
Cosy bedroom at dusk: a neatly made bed in oat linen, a glowing reading lamp, and the AromaIQ smart aroma diffuser on the nightstand. It is a minimalist rounded-cylinder device in matte warm-white ceramic with four slim clear-glass scent chambers set into the top, each filled with a differently tinted essential oil, a thin brushed-brass ring and a soft LED light ring glowing a gentle amber, releasing mist that catches the lamplight. A person's feet in wool socks at the edge of the frame. Warm, intimate, restful. Premium lifestyle editorial photography, medium-format camera, gentle film grain, shallow depth of field, warm neutral palette, photorealistic, no text, no logos, no watermarks --ar 4:3 --style raw
```

#### Commercial spaces: `about.valueCommercial`

→ `about/value-commercial.jpg` · 4:3

```text
Upscale specialty café interior in India with sage-green tiles, a solid oak counter, brass pendant lights and a few softly blurred guests. On the counter, beside a stack of handmade ceramic cups, stands a larger commercial AromaIQ smart aroma diffuser: a tall minimalist rounded-cylinder device in matte warm-white ceramic with four clear-glass scent chambers on top, a thin brushed-brass ring and a soft glowing LED light ring, with soft mist rising. Natural daylight and a boutique-hospitality mood. Premium interior-lifestyle editorial photography, medium-format camera, gentle film grain, shallow depth of field, photorealistic, no text, no logos, no signage, no watermarks --ar 4:3 --style raw
```

#### Scent subscriptions: `about.valueSubscription`

→ `about/value-subscription.jpg` · 4:3

```text
An unboxing moment, shot overhead: a premium matte blush-pink box opened to reveal four slim clear-glass essential-oil scent chambers in pale citrus gold, mint green, bergamot rose and deep woody amber, nested in natural recycled-paper inserts. Around the box lie a folded handwritten card with no readable text, dried rose petals and soft tissue paper. Soft daylight. Luxury direct-to-consumer brand photography, gentle film grain, warm neutral palette, photorealistic, no readable text, no logos, no watermarks --ar 4:3 --style raw
```

---

### Team: "Two builders. One obsession."

#### Founder portraits: `about.founderAyush`, `about.founderDaksh`

→ `about/founder-ayush.png`, `about/founder-daksh.png` · 4:5 portrait, cropped to the **top** (keep the head in the upper third) · shown at about 240px, source at least 1000px on the long edge

**A real photo shoot is strongly preferred.** Both portraits should share the same lighting, background and framing. The current Ayush file is only 670×680. If you re-shoot, use this brief for both founders. If you're only enhancing, run the existing photo through an upscaler (Magnific, Topaz, Krea Enhance) with the second prompt.

Shoot brief / generation prompt (use the founder's real photo as a face/character reference):

```text
Editorial founder portrait of a young Indian man in his mid-twenties, waist-up, facing the camera with a relaxed, confident half-smile. He wears a well-fitted plain knit or crisp shirt in a neutral tone and stands against a seamless warm sand-beige studio backdrop with a soft gradient. Soft large key light from the front-left, a gentle fill and a subtle hair light. Head and shoulders in the upper part of the frame with space below. Modern startup-founder portrait in the style of a premium tech magazine profile, 85mm lens, shallow depth of field, natural skin texture, photorealistic, no text, no logos --ar 4:5 --style raw
```

Upscale / enhance prompt:

```text
Enhance this portrait to high resolution: preserve the person's identity and facial features exactly, keep the natural skin texture, sharpen the eyes and hair, clean up compression artifacts, and extend the background into a smooth warm sand-beige studio gradient to fill a 4:5 portrait frame with the head in the upper third. Photorealistic, no stylisation
```

#### Gallery: "Obsessed in action"

→ 7 tiles · shoot 3:2 with room to crop (tiles are 4:3 on mobile and wide-but-short at 208px on desktop) · a label overlays the **bottom** over a dark gradient

**Use real photos wherever you can.** Photos of the actual founders read as authentic; AI images of "your team" don't. Treat these as a shot list for a photographer. If you generate them, attach both founder portraits as character references (Midjourney `--cref`, or your tool's equivalent) and keep them consistent.

##### Planning on board: `about.galleryPlanning` → `about/gallery-planning.jpg`

```text
Two young Indian co-founders in their mid-twenties at a large whiteboard covered in a hand-drawn product flowchart and colourful sticky notes (writing not legible). One in a navy polo points at the board while the other, in a dark blazer, holds a notepad. Bright modern office with daylight. Candid documentary photography, focused energy, 35mm lens, natural colours, gentle film grain, photorealistic, lower quarter of the frame kept simple, no readable text, no logos --ar 3:2 --style raw
```

##### Talking to customers: `about.galleryCustomers` → `about/gallery-customers.jpg`

```text
A young Indian founder wearing an event lanyard animatedly explains a minimalist warm-white four-chamber aroma diffuser, which he holds in his hands, to a small, diverse group of attentive people at a startup event in India. Soft white exhibition backdrop, candid gestures and natural expressions. Documentary event photography, 35mm lens, natural light, gentle film grain, photorealistic, no readable text, no logos --ar 3:2 --style raw
```

##### Expo showcase: `about.galleryExpo` → `about/gallery-expo.jpg`

```text
Two young Indian co-founders at a sleek, minimal light-oak expo booth demonstrating the AromaIQ smart aroma diffuser, a minimalist rounded-cylinder device in matte warm-white ceramic with four clear-glass scent chambers on top and a soft glowing LED light ring, to an interested visitor. A busy technology exhibition hall is softly blurred behind them, with warm overhead lights. Wide candid shot with an energetic, proud atmosphere. Documentary event photography, gentle film grain, photorealistic, no readable text, no logos --ar 3:2 --style raw
```

##### Late-night strategy: `about.galleryStrategy` → `about/gallery-strategy.jpg`

```text
Two young Indian co-founders deep in conversation across a wooden café table with coffee cups, an open notebook and a laptop. Warm evening light through a large window with city lights blurred outside, relaxed but focused body language. Intimate candid lifestyle photography, 50mm lens, shallow depth of field, warm tones, gentle film grain, photorealistic, no readable text, no logos --ar 3:2 --style raw
```

##### Writing the engine: `about.galleryEngine` → `about/gallery-engine.jpg`

```text
Over-the-shoulder close-up of a laptop screen full of softly blurred code in a dark editor theme (not legible), with the developer's silhouette at the edge of the frame. A cool blue screen glow mixes with a warm desk-lamp pool of light. Beside the laptop, slightly out of focus, a minimalist warm-white four-chamber aroma diffuser prototype sits with its LED ring glowing softly. Cinematic, focused late-night build mood, 50mm lens, shallow depth of field, gentle film grain, photorealistic, no readable text, no logos --ar 3:2 --style raw
```

##### Mentor sessions: `about.galleryMentor` → `about/gallery-mentor.jpg`

```text
Two young Indian co-founders listen intently to an experienced Indian mentor in his forties in a glass-walled meeting room, notebooks open on the table. Soft daylight, respectful and engaged body language. Candid corporate-documentary photography, 35mm lens, natural colours, gentle film grain, photorealistic, no readable text, no logos --ar 3:2 --style raw
```

##### Building the team: `about.galleryTeam` → `about/gallery-team.jpg`

```text
A diverse group of young Indian team members stacking hands in the centre of a huddle and cheering in a bright co-working space, lanyards visible. Slight motion blur on the hands, genuine smiles and celebratory energy. Candid documentary photography, 24mm wide lens, natural daylight, gentle film grain, photorealistic, no readable text, no logos --ar 3:2 --style raw
```

---

## After generating

1. **Upscale and export** to the sizes below. Use JPG at about 80% quality, and PNG only if you need transparency.

   | Use | Format | Longest edge | Target size |
   | --- | --- | --- | --- |
   | Full-bleed hero / promo | JPG | 2400px | < 600 KB |
   | Cards, gallery, products | JPG | 1600px | < 300 KB |
   | Portraits | JPG | 1000px | < 200 KB |
   | Hero video | MP4 (H.264), no audio | 1920px | < 4 MB |

2. **Compress the video:**

   ```sh
   ffmpeg -i input.mp4 -an -vf scale=1920:-2 -c:v libx264 -crf 26 -preset slow -movflags +faststart public/videos/hero.mp4
   ```

3. **Save** images to `src/assets/<page>/` using the file name listed for each slot.
4. **That's it:** the image shows up automatically. Then rewrite the slot's `alt` in `src/assets/index.ts` to describe the final image.
