import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ArcadeEater } from "@/components/arcade-eater";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { CATEGORIES } from "@/lib/content";
import { SITE, WHATSAPP_URL } from "@/lib/site";

const TITLE = "Blog de nutrición, rendimiento y comida real";
const DESCRIPTION =
  "Próximamente: artículos prácticos sobre nutrición deportiva, pérdida de grasa, recomposición corporal, recetas adaptadas y hábitos sostenibles.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/blog/" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE.url}/blog/`,
  },
};

export default function BlogPage() {
  return (
    <section className="relative isolate overflow-hidden pt-28 sm:pt-32 lg:pt-36">
      <div aria-hidden className="absolute inset-0 -z-10 bg-radial-fade" />
      <div className="container-tight pb-24">
        <nav aria-label="Migas" className="mb-6 text-xs text-warmwhite/55">
          <Link href="/" className="hover:text-teal-300">
            Inicio
          </Link>{" "}
          / <span className="text-warmwhite/80">Blog</span>
        </nav>

        <div className="max-w-2xl">
          <span className="chip">Próximamente</span>
          <h1 className="h-display mt-5">{TITLE}</h1>
          <p className="lead mt-6">
            Muy pronto encontrarás aquí artículos prácticos sobre nutrición
            deportiva, pérdida de grasa, recomposición corporal, recetas
            adaptadas y hábitos sostenibles.
          </p>
          <p className="mt-4 text-sm text-warmwhite/55">
            Estamos cocinando los primeros artículos. Próximamente.
          </p>
        </div>

        <div className="mt-10 max-w-lg">
          <ArcadeEater />
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <WhatsAppIcon />
            Hablar por WhatsApp
          </a>
          <Link href="/" className="btn-ghost">
            Volver a la home <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-20">
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-warmwhite/60">
            Categorías que llegarán pronto
          </h2>
          <ul className="mt-5 flex flex-wrap gap-2">
            {CATEGORIES.map((c) => (
              <li
                key={c}
                className="rounded-full border border-warmwhite/10 bg-white/[.03] px-4 py-2 text-sm text-warmwhite/80"
              >
                {c}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
