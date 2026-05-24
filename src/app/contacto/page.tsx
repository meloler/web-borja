import type { Metadata } from "next";
import Link from "next/link";
import { Instagram, Mail, MapPin, MessageCircle } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { SITE, WHATSAPP_URL } from "@/lib/site";

const TITLE = "Contacto · Borja Galván Nutrición";
const DESCRIPTION =
  "Escribe a Borja Galván por WhatsApp, correo o desde el formulario. Consulta online y presencial en Las Palmas de Gran Canaria.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/contacto/" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE.url}/contacto/`,
  },
};

export default function ContactoPage() {
  return (
    <section className="relative isolate overflow-hidden pt-28 sm:pt-32 lg:pt-36">
      <div aria-hidden className="absolute inset-0 -z-10 bg-radial-fade" />
      <div className="container-tight pb-24">
        <nav aria-label="Migas" className="mb-6 text-xs text-warmwhite/55">
          <Link href="/" className="hover:text-teal-300">
            Inicio
          </Link>{" "}
          / <span className="text-warmwhite/80">Contacto</span>
        </nav>

        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <span className="eyebrow">Contacto</span>
            <h1 className="h-display mt-5">
              Cuéntale a Borja cómo te puede ayudar
            </h1>
            <p className="lead mt-6">
              La forma más rápida es WhatsApp. Si prefieres correo o
              formulario, también están disponibles. Borja te responderá lo
              antes posible.
            </p>

            <ul className="mt-8 space-y-3 text-sm">
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-xl border border-warmwhite/10 bg-white/[.03] px-4 py-3 text-warmwhite/90 hover:border-teal-400/30"
                >
                  <MessageCircle className="h-4 w-4 text-teal-300" />
                  WhatsApp · {SITE.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="flex items-center gap-3 rounded-xl border border-warmwhite/10 bg-white/[.03] px-4 py-3 text-warmwhite/90 hover:border-teal-400/30"
                >
                  <Mail className="h-4 w-4 text-teal-300" />
                  {SITE.email}
                </a>
              </li>
              <li>
                <a
                  href={SITE.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-xl border border-warmwhite/10 bg-white/[.03] px-4 py-3 text-warmwhite/90 hover:border-teal-400/30"
                >
                  <Instagram className="h-4 w-4 text-teal-300" />
                  {SITE.instagramHandle}
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 rounded-xl border border-warmwhite/10 bg-white/[.03] px-4 py-3 text-warmwhite/80">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-teal-300" />
                  <span>
                    Consulta presencial en {SITE.presencialVenue},{" "}
                    {SITE.presencialCity}. Colaboración con {SITE.signa}.
                  </span>
                </div>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-7">
            <ContactForm />
            <p className="mt-4 text-xs text-warmwhite/55">
              Si vienes derivado por Signa Center, puedes cerrar tu cita
              directamente desde su sistema.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
