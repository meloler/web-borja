import { Globe2, MapPin } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/site";
import { WhatsAppIcon } from "@/components/whatsapp-icon";

export function Locations() {
  return (
    <section id="consulta" className="relative pb-8 pt-10 sm:pb-10 sm:pt-12">
      <div className="container-tight">
        <div className="mb-5">
          <span className="eyebrow">Online + presencial</span>
          <h2 className="h-section mt-2">¿Dónde trabajamos?</h2>
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          <article className="card relative flex flex-col items-center gap-3 p-5 text-center">
            <div className="flex items-center justify-center gap-2">
              <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-teal-500/15 text-teal-300 ring-1 ring-teal-400/30">
                <Globe2 className="h-3.5 w-3.5" />
              </span>
              <h3 className="text-base font-semibold text-warmwhite">
                Consulta online
              </h3>
            </div>
            <p className="text-sm leading-relaxed text-warmwhite/70">
              Seguimiento personalizado a cualquier punto de España o desde el
              extranjero. Contacto directo y ajustes según evolución.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto inline-flex items-center gap-1.5 rounded-full bg-teal-500 px-3 py-1.5 text-xs font-semibold text-ink-900 transition-opacity hover:opacity-90"
            >
              <WhatsAppIcon className="h-3.5 w-3.5" /> Hablar por WhatsApp
            </a>
          </article>

          <article className="card relative flex flex-col items-center gap-3 p-5 text-center">
            <div className="flex items-center justify-center gap-2">
              <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-teal-500/15 text-teal-300 ring-1 ring-teal-400/30">
                <MapPin className="h-3.5 w-3.5" />
              </span>
              <h3 className="text-base font-semibold text-warmwhite">
                Presencial · Gran Canaria
              </h3>
            </div>
            <p className="text-sm leading-relaxed text-warmwhite/70">
              <span className="text-warmwhite">CrossFit 928</span> (Las Palmas
              de Gran Canaria) y colaboración con{" "}
              <span className="text-warmwhite">Signa Center</span>.
            </p>
            <div className="mt-auto flex justify-center gap-2">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-teal-500 px-3 py-1.5 text-xs font-semibold text-ink-900 transition-opacity hover:opacity-90"
              >
                <WhatsAppIcon className="h-3.5 w-3.5" /> WhatsApp
              </a>
              <a
                href="https://signacenter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-warmwhite/20 px-3 py-1.5 text-xs font-semibold text-warmwhite/80 transition-colors hover:border-warmwhite/40"
              >
                Reservar vía Signa
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
