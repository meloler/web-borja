import { Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/content";

export function Testimonials() {
  return (
    <section id="testimonios" className="relative py-24 sm:py-28">
      <div className="container-tight">
        <div className="max-w-3xl">
          <span className="eyebrow">Testimonios</span>
          <h2 className="h-section mt-4">Personas reales, procesos reales</h2>
          <p className="lead mt-5">
            Espacio reservado para testimonios reales y autorizados. Se irán
            sumando a medida que cada persona quiera compartir su proceso.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <figure key={i} className="card flex h-full flex-col">
              <Quote className="h-5 w-5 text-teal-300" />
              <blockquote className="mt-4 text-base leading-relaxed text-warmwhite/85">
                {t.text}
              </blockquote>
              <figcaption className="mt-6 border-t border-warmwhite/10 pt-4 text-sm">
                <p className="font-semibold text-warmwhite">{t.name}</p>
                <p className="text-warmwhite/60">{t.goal}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-teal-300/80">
                  {t.process}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
