import Link from "next/link";
import { ArrowRight, Check, MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/site";
import { Faq } from "@/components/sections/faq";
import { CtaFinal } from "@/components/sections/cta-final";

export type LandingProps = {
  eyebrow: string;
  h1: string;
  lead: string;
  bullets: string[];
  forWho: { title: string; items: string[] };
  approach: { title: string; text: string; items: string[] };
  /** Schema JSON-LD adicional (e.g. Service / BreadcrumbList) */
  schema?: object;
};

export function Landing({
  eyebrow,
  h1,
  lead,
  bullets,
  forWho,
  approach,
  schema,
}: LandingProps) {
  return (
    <>
      {schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      )}

      <section className="relative isolate overflow-hidden pt-28 sm:pt-32 lg:pt-36">
        <div aria-hidden className="absolute inset-0 -z-10 bg-radial-fade" />
        <div
          aria-hidden
          className="absolute -top-32 left-1/2 -z-10 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-teal-500/10 blur-3xl"
        />
        <div className="container-tight pb-16">
          <nav aria-label="Migas" className="mb-6 text-xs text-warmwhite/55">
            <Link href="/" className="hover:text-teal-300">
              Inicio
            </Link>{" "}
            / <span className="text-warmwhite/80">{eyebrow}</span>
          </nav>
          <span className="chip">{eyebrow}</span>
          <h1 className="h-display mt-5 max-w-4xl">{h1}</h1>
          <p className="lead mt-6">{lead}</p>

          <ul className="mt-8 grid max-w-3xl gap-2 sm:grid-cols-2">
            {bullets.map((b) => (
              <li
                key={b}
                className="flex items-start gap-2.5 text-sm text-warmwhite/85"
              >
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-teal-300" />
                {b}
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <MessageCircle className="h-4 w-4" /> Hablar por WhatsApp
            </a>
            <Link href="/#metodo" className="btn-ghost">
              Ver el método <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="relative py-20 sm:py-24">
        <div className="container-tight grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <span className="eyebrow">Para quién</span>
            <h2 className="h-section mt-4">{forWho.title}</h2>
          </div>
          <ul className="space-y-3 lg:col-span-7">
            {forWho.items.map((it) => (
              <li
                key={it}
                className="flex items-start gap-3 rounded-xl border border-warmwhite/10 bg-white/[.03] px-4 py-3 text-sm text-warmwhite/85"
              >
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-teal-300" />
                {it}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="relative py-20 sm:py-24">
        <div className="container-tight grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <span className="eyebrow">Enfoque</span>
            <h2 className="h-section mt-4">{approach.title}</h2>
            <p className="mt-5 text-base leading-relaxed text-warmwhite/75">
              {approach.text}
            </p>
          </div>
          <ul className="grid gap-4 lg:col-span-7 sm:grid-cols-2">
            {approach.items.map((it) => (
              <li key={it} className="card text-sm text-warmwhite/85">
                {it}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Faq />
      <CtaFinal />
    </>
  );
}
