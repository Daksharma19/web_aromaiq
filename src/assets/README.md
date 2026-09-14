# Assets

All site media is registered in **`src/assets/index.ts`**. Content files (`src/content/*.ts`) and components never reference image files directly. They only use `assets.<page>.<slot>`.

```
src/assets/
  index.ts             ← the manifest: one line per slot, pointing at a file name with img("page/name")
  files.generated.ts   ← auto-generated list of every image in the folders below (don't edit)
  home/                ← images for the home page
  about/               ← images for the About page
public/videos/         ← videos (served as-is, streamed by the browser)
```

## Add, replace or remove an image

**Just drop the file in with the name from `ASSETS_PROMPTS.md`**, e.g. `src/assets/home/step-app.jpg`. No code change needed.

- The extension doesn't matter: `step-app.jpg`, `.png` or `.webp` all fill `img("home/step-app")`.
- While `npm run dev` is running, the file list regenerates on its own and the page updates. It's also regenerated on every `next dev` / `next build` start, or manually with `npm run assets`.
- Delete the file and the gradient placeholder (`tone`) comes back.
- Replacing a file under the same name also works: imports are content-hashed, so caches pick up the new version.

After the image is in, update the slot's `alt` in `index.ts` to describe it. It's used by screen readers and search engines.

To add a brand-new slot, add a line in `index.ts` with `src: img("page/new-name")` and use `assets.page.newSlot` in the content file.

## Videos

Videos live in `public/videos/` and are served by Vercel. The slot uses `video: video("hero.mp4")`.

To add or replace a video:

1. Compress it (see the command below).
2. Save it in `public/videos/` and update the slot in `index.ts` if the name changed.
3. Update the poster (`src`), which shows until the video starts. It is also the image that loads first, so keep it in sync with the video.

### Optional: move videos to Cloudflare R2 later

Not set up. This is only worth doing if video bandwidth becomes a cost issue on Vercel; it doesn't improve speed or SEO.
When `NEXT_PUBLIC_MEDIA_URL` is set, `video()` loads files from that host instead of `/videos`, so no code change is needed.
When replacing a video on R2, use a new file name (e.g. `hero-v2.mp4`), because Cloudflare caches aggressively.

1. Cloudflare dashboard → R2 → create bucket `aromaiq-media`.
2. Bucket → Settings → **Custom domain** → `media.aromaiq.in`. The domain's DNS must be on Cloudflare (free plan). Don't use the `r2.dev` URL in production, because it's rate-limited.
3. Upload `videos/hero.mp4` from the dashboard, or run `npx wrangler r2 object put aromaiq-media/videos/hero.mp4 --file public/videos/hero.mp4 --remote`.
4. Vercel → Project → Settings → Environment Variables → `NEXT_PUBLIC_MEDIA_URL=https://media.aromaiq.in`, then redeploy.
5. Optional: Cloudflare → Caching → Cache Rules → `media.aromaiq.in/*`, edge TTL 1 month.

## File guidelines

| Use | Format | Longest edge | Target size |
| --- | --- | --- | --- |
| Full-bleed hero / promo | JPG | 2400px | < 600 KB |
| Cards, gallery, products | JPG (PNG only if transparency) | 1600px | < 300 KB |
| Portraits | JPG | 1000px | < 200 KB |
| Hero video | MP4 (H.264), no audio, `-movflags +faststart` | 1920px | < 4 MB |

Next.js converts images to AVIF/WebP and resizes them per device, so you don't need to prepare multiple sizes. Very large source files still slow down builds.

Compress a video:

```sh
ffmpeg -i input.mp4 -an -vf scale=1920:-2 -c:v libx264 -crf 26 -preset slow -movflags +faststart public/videos/hero.mp4
```

Prompts for generating every asset are in [`ASSETS_PROMPTS.md`](../../ASSETS_PROMPTS.md) at the repo root.
