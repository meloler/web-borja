import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SERVICES } from "@/lib/content";
import { WHATSAPP_URL } from "@/lib/site";

export function Services() {
  return (
    <section id="servicios" className="relative py-24 sm:py-28">
      <div className="container-tight">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <span className="eyebrow">Servicios</span>
            <h2 className="h-section mt-4">Nutrición para objetivos reales</h2>
            <p className="lead mt-5">
              El enfoque se adapta a tu contexto, no al revés.
            </p>
          </div>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost btn-sm self-start sm:self-auto"
          >
            Cuéntame tu objetivo
          </a>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map(({ slug, title, description, icon: Icon, href }) => {
            const inner = (
              <>
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-teal-500/10 text-teal-300 ring-1 ring-teal-400/20">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-warmwhite">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-warmwhite/70">
                  {description}
                </p>
                {href && (
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-teal-300">
                    Más info <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                )}
              </>
            );
            return href ? (
              <Link
                key={slug}
                href={href}
                className="card flex h-full flex-col transition-transform hover:-translate-y-0.5"
              >
                {inner}
              </Link>
            ) : (
              <div key={slug} className="card flex h-full flex-col">
                {inner}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
