# Anee & James — Wedding Invitation

A production-oriented Next.js wedding invitation starter built with:

- Next.js App Router
- TypeScript
- Tailwind CSS v4
- Framer Motion
- Lenis smooth scrolling
- Lucide icons
- Responsive, component-level architecture
- Local metadata/favicon setup
- Remote Unsplash placeholder imagery that can be replaced with real wedding photos

## Run locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Project structure

```text
app/
  globals.css
  layout.tsx
  page.tsx
components/
  layout/
    SmoothScroll.tsx
  ui/
    Reveal.tsx
    SectionHeading.tsx
  wedding/
    Couple.tsx
    Countdown.tsx
    Footer.tsx
    Gallery.tsx
    Hero.tsx
    Marquee.tsx
    Nav.tsx
    RSVP.tsx
    SaveTheDate.tsx
    Story.tsx
    Upload.tsx
    Venue.tsx
    WeddingExperience.tsx
```

## Replace dummy images

Search for `images.unsplash.com` and replace the URLs with your final wedding images.

For local assets, place files in `public/images/` and use:

```tsx
<Image
  src="/images/bride.jpg"
  alt="Bride"
  fill
  className="object-cover"
/>
```

## Invitation flow

1. Visitor lands on the Save the Date card.
2. `Open invitation` triggers an animated exit transition.
3. The complete invitation fades/slides into view.
4. Lenis provides smooth scrolling.
5. Sections reveal progressively with Framer Motion.

## Production integration points

### RSVP
The current form is intentionally frontend-only. Connect it to your preferred API/database:

- Next.js Route Handler
- Supabase
- Prisma + PostgreSQL
- Resend/email workflow

### Guest image upload
The current upload control only previews the selected filenames. For production, connect it to:

- Amazon S3
- Cloudflare R2
- Supabase Storage
- Cloudinary

For a wedding guest-upload flow, use presigned uploads and never expose cloud storage credentials in the browser.

### Personalization

The primary wedding content is intentionally centralized inside the wedding components so the demo can quickly be adapted to another couple.

## Design system

Palette based on the supplied reference:

- Dusty pink: `#C9AAA7`
- Light pink: `#EAD3D0`
- Off white: `#F7F3ED`
- Sage green: `#A9B0A0`
- Light terracotta: `#D9A070`
- Ink: `#35312E`

The UI intentionally avoids generic SaaS styling, excessive rounded cards, purple gradients, fake metrics, and overdone animation. The visual language is editorial, romantic, restrained, and image-led.
