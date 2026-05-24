# Borja Galván Nutrición — Web

Web premium, mobile-first y optimizada para SEO de Borja Galván, dietista-nutricionista en Gran Canaria.

- **Dominio:** `borjagalvannutricion.com`
- **Hosting:** GitHub + Vercel
- **CTA principal:** WhatsApp `+34 676 407 670`
- **Conversión secundaria:** formulario en `/contacto/`

---

## Stack

- Next.js 15 (App Router) + TypeScript
- Tailwind CSS 3 + componentes propios
- Framer Motion (microinteracciones)
- `next/og` para Open Graph e icon dinámicos
- API route propia para el formulario (compatible con Resend; cae a `console.log` si no hay clave)

## Estructura

```
src/
├── app/
│   ├── layout.tsx              · Metadata global, nav, footer, JSON-LD
│   ├── page.tsx                · Home (todas las secciones)
│   ├── globals.css             · Tokens y utilidades de marca
│   ├── robots.ts               · robots.txt dinámico
│   ├── sitemap.ts              · sitemap.xml dinámico
│   ├── opengraph-image.tsx     · OG image global
│   ├── icon.tsx · apple-icon.tsx
│   ├── nutricionista-deportivo-gran-canaria/
│   ├── nutricionista-online/
│   ├── perdida-de-grasa/
│   ├── recomposicion-corporal/
│   ├── nutricion-para-futbolistas/
│   ├── nutricion-crossfit/
│   ├── blog/                   · "Próximamente" + animación arcade propia
│   ├── contacto/               · Formulario breve
│   └── api/contact/route.ts    · Endpoint del formulario (Resend opcional)
├── components/
│   ├── nav.tsx · footer.tsx · whatsapp-float.tsx · jsonld.tsx
│   ├── logo.tsx · arcade-eater.tsx · landing.tsx · contact-form.tsx
│   └── sections/               · Hero, Empathy, Method, Services, Pricing,
│                                 About, Athletes, Cases, Recipes, Locations,
│                                 Testimonials, Faq, CtaFinal
└── lib/
    ├── site.ts                 · Constantes (URL WhatsApp, datos, marca)
    └── content.ts              · Servicios, planes, FAQ, deportistas
```

## Puesta en marcha

```bash
npm install
cp .env.example .env.local       # ajustar valores
npm run dev
```

Build de producción:

```bash
npm run build && npm start
```

## Variables de entorno

Ver `.env.example`:

- `NEXT_PUBLIC_SITE_URL` — URL pública (afecta canonical, sitemap, JSON-LD).
- `CONTACT_TO_EMAIL` — Email donde llega el formulario.
- `RESEND_API_KEY` — Clave de [Resend](https://resend.com). Si está vacía, el endpoint registra la consulta en logs (útil en desarrollo).

> Alternativas al endpoint: se puede sustituir por Formspree, Supabase o un endpoint propio editando `src/app/api/contact/route.ts`.

## Despliegue en Vercel

1. Subir el repo a GitHub.
2. Importar el proyecto en Vercel.
3. Añadir las variables de entorno (`NEXT_PUBLIC_SITE_URL`, `CONTACT_TO_EMAIL`, `RESEND_API_KEY`).
4. Conectar el dominio `borjagalvannutricion.com`.

## SEO técnico — checklist incluida

- [x] `title` y `meta description` por página.
- [x] H1 único en cada página.
- [x] Open Graph y Twitter Card.
- [x] `robots.txt` dinámico (permite `Googlebot`, `OAI-SearchBot`, `GPTBot`).
- [x] `sitemap.xml` dinámico con todas las páginas.
- [x] Schema JSON-LD: `Organization`, `LocalBusiness`, `Person`, `WebSite`, `FAQPage` y `Service` por landing.
- [x] Imágenes con `alt`.
- [x] URLs limpias, estructura semántica HTML5.
- [x] OG image generada (1200x630).
- [x] Sin bloqueo a crawlers de búsqueda ni de IA.

## Personalización rápida

- **Bonos y precios:** `src/lib/content.ts → PLANS`. Cuando lleguen los precios reales, sustituir `"Consultar"` por el importe.
- **Deportistas:** `src/lib/content.ts → ATHLETES`. Añadir foto autorizada cambiando el avatar en `src/components/sections/athletes.tsx`.
- **FAQ y testimonios:** `src/lib/content.ts → FAQS`, `TESTIMONIALS`.
- **Servicios:** `src/lib/content.ts → SERVICES`.
- **Foto de Borja:** sustituir el placeholder en `src/components/sections/about.tsx` por una `next/image` con la foto real (formato 4:5 recomendado).
- **Imágenes de casos / recetas:** sustituir los gradientes en `src/components/sections/cases.tsx` y `recipes.tsx` por imágenes reales con `next/image`.

## Notas legales / comerciales

- Frase de marca: **"Lo importante es el después del después."**
- Todos los CTA principales apuntan a WhatsApp con texto prerelleno: `Hola Borja, quiero información sobre la consulta de nutrición`.
- Disclaimer ya incluido en el footer y en la sección de casos.
