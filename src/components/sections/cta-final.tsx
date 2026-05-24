import Link from "next/link";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { WHATSAPP_URL } from "@/lib/site";

export function CtaFinal() {
  return (
    <section className="relative py-12 sm:py-14">
      <div className="container-tight">
        <div className="relative overflow-hidden rounded-3xl border border-teal-400/30 bg-gradient-to-br from-teal-500/15 via-ink-700 to-ink-900 p-10 sm:p-14">
          <div
            aria-hidden
            className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-teal-500/20 blur-3xl"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-noise opacity-30 mix-blend-overlay"
          />

          <div className="relative max-w-2xl">
            <p className="eyebrow">Empezamos cuando quieras</p>
            <h2 className="h-section mt-4">
              Un mensaje es suficiente para empezar
            </h2>
            <p className="lead mt-4">
              Sin presión. Sin compromiso. Solo cuéntame tu objetivo.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <WhatsAppIcon />
                Hablar por WhatsApp
              </a>
              <Link href="/contacto/" className="btn-ghost">
                Escribir desde el formulario
              </Link>
            </div>
            <p className="mt-6 text-xs uppercase tracking-[0.22em] text-teal-200/80">
              Lo importante es el después del después.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
