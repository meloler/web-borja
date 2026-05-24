import { WHATSAPP_URL } from "@/lib/site";
import { WhatsAppIcon } from "@/components/whatsapp-icon";

const STEPS = [
  {
    n: "01",
    title: "Escríbeme",
    text: "Un WhatsApp es suficiente. Cuéntame tu objetivo y hablamos sin compromiso.",
    detail: "Respuesta en menos de 24h",
  },
  {
    n: "02",
    title: "Primera consulta",
    text: "Valoración completa: bioimpedancia, hábitos y objetivos. Plan entregado en 48-72h.",
    detail: "Online o presencial en Gran Canaria",
  },
  {
    n: "03",
    title: "Seguimiento",
    text: "Revisiones periódicas para ajustar el plan según tus resultados. Evoluciona contigo.",
    detail: "Contacto directo entre sesiones",
  },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="relative pb-12 pt-6 sm:pb-14 sm:pt-8">
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-warmwhite/10 to-transparent"
      />
      <div className="container-tight">
        <div className="mb-6">
          <span className="eyebrow">El proceso</span>
          <h2 className="h-section mt-3">Cómo funciona</h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-3 sm:gap-6">
          {STEPS.map((s) => (
            <div key={s.n} className="flex gap-5 sm:flex-col sm:gap-4">
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-teal-400/30 bg-teal-500/10 text-sm font-semibold text-teal-200">
                {s.n}
              </span>
              <div>
                <h3 className="text-lg font-semibold text-warmwhite">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-warmwhite/65">
                  {s.text}
                </p>
                <p className="mt-3 text-xs uppercase tracking-[0.18em] text-teal-300/60">
                  {s.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <WhatsAppIcon />
            Dar el primer paso
          </a>
        </div>
      </div>
    </section>
  );
}
