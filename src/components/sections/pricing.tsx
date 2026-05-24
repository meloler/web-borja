import { Check, Star } from "lucide-react";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { PLANS } from "@/lib/content";
import { whatsappWith, WHATSAPP_URL } from "@/lib/site";

const COMMON = [
  "Primera consulta con valoración y bioimpedancia",
  "Plan nutricional entregado en 48-72h",
  "Asesoramiento en suplementación",
  "Contacto directo vía WhatsApp o email",
];

export function Pricing() {
  return (
    <section id="bonos" className="relative py-12 sm:py-14">
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-warmwhite/10 to-transparent"
      />
      <div className="container-tight">
        <div className="mb-6">
          <span className="eyebrow">Bonos y precios</span>
          <h2 className="h-section mt-3">
            Elige tu seguimiento
          </h2>
        </div>

        {/* Features comunes — solo se listan una vez */}
        <div className="mb-8 flex flex-wrap gap-x-6 gap-y-2">
          {COMMON.map((item) => (
            <span
              key={item}
              className="inline-flex items-center gap-2 text-sm text-warmwhite/65"
            >
              <Check className="h-3.5 w-3.5 shrink-0 text-teal-400" />
              {item}
            </span>
          ))}
        </div>

        {/* Tarjetas compactas — solo muestran la diferencia */}
        <div className="grid gap-4 md:grid-cols-3">
          {PLANS.map((p) => {
            const cta = whatsappWith(
              `Hola Borja, quiero información sobre el ${p.name}`,
            );
            return (
              <article
                key={p.slug}
                className={
                  p.featured
                    ? "card-hi relative mt-3 flex flex-col !overflow-visible"
                    : "card flex flex-col"
                }
              >
                {p.featured && (
                  <span className="absolute -top-3 left-5 inline-flex items-center gap-1 rounded-full bg-teal-500 px-3 py-1 text-xs font-semibold text-ink-900">
                    <Star className="h-3 w-3" /> Más popular
                  </span>
                )}

                <h3 className="text-base font-semibold text-warmwhite">
                  {p.name}
                </h3>
                <p className="mt-1 text-xs text-warmwhite/50">{p.forWho}</p>

                <div className="my-5 flex items-baseline justify-center gap-2 border-y border-warmwhite/8 py-5">
                  <span className="text-4xl font-bold text-warmwhite">
                    {p.price}
                  </span>
                  <span className="text-sm text-warmwhite/45">{p.duration}</span>
                </div>

                {/* Solo el diferenciador: nº de revisiones */}
                <p className="flex-1 flex items-start gap-2 text-sm text-warmwhite/80">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-teal-300" />
                  {p.includes[1]}
                </p>

                <a
                  href={cta}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={p.featured ? "btn-primary mt-6" : "btn-ghost mt-6"}
                >
                  <WhatsAppIcon />
                  Reservar este bono
                </a>
              </article>
            );
          })}
        </div>

        <p className="mt-6 text-center text-sm text-warmwhite/45">
          ¿No sabes cuál elegir?{" "}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-300 underline-offset-4 hover:underline"
          >
            Pregunta sin compromiso
          </a>
          .
        </p>
      </div>
    </section>
  );
}
