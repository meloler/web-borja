# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server on http://localhost:3000
npm run build    # Production build
npm run lint     # ESLint via next lint
npm start        # Start production server
```

Environment setup: copy `.env.example` to `.env.local` and fill in values. The contact form works without `RESEND_API_KEY` (falls back to `console.log`).

## Architecture

**Next.js 15 App Router** website for Borja Galván, sports nutritionist based in Gran Canaria.

### Content & Data

All editable content lives in two files:
- `src/lib/content.ts` — `SERVICES`, `ATHLETES`, `PLANS`, `FAQS`, `TESTIMONIALS`, and other data arrays used throughout the site
- `src/lib/site.ts` — Brand constants: site URL, contact email, phone number, WhatsApp URL helpers, location data

This separation means visual/layout changes go in components, while copy/data changes go in `src/lib/`.

### Page Structure

- `src/app/page.tsx` — Home page composed of ~14 section components from `src/components/sections/`
- `src/app/[service-slug]/page.tsx` — Six dedicated landing pages targeting specific SEO keywords (online nutrition, sports nutrition Gran Canaria, fat loss, body recomposition, football, crossfit)
- `src/app/api/contact/route.ts` — Contact form POST handler using Resend (optional)

### Sections architecture

Each section in `src/components/sections/` is a self-contained Server Component that imports data from `src/lib/content.ts`. The `landing.tsx` wrapper orchestrates section ordering on the home page.

### Styling

Custom Tailwind palette defined in `tailwind.config.ts`:
- `teal-*` — primary brand color (turquoise, `teal-500 = #1ea98a`)
- `ink-*` — dark backgrounds (petroleum/near-black)
- `sand-*`, `mint-*`, `lime-*` — accent/secondary colors
- `bone-*`, `warmwhite`, `graphite-*` — neutrals

Global component classes (`.btn-primary`, `.btn-ghost`, `.section-title`, etc.) are defined in `src/app/globals.css` under `@layer components`.

### SEO

Every page has unique metadata exported from `generateMetadata()`. Schema.org JSON-LD is rendered via `src/components/jsonld.tsx`. Dynamic `sitemap.ts` and `robots.ts` live at the app root. AI crawlers (GPTBot, OAI-SearchBot) are explicitly allowed.

### Client Components

Only interactive components are marked `"use client"`: `nav.tsx`, `contact-form.tsx`, `whatsapp-float.tsx`, `arcade-eater.tsx`. Everything else is Server Components.
