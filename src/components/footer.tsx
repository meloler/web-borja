import Link from "next/link";
import { Instagram, MessageCircle, Mail, MapPin } from "lucide-react";
import { Logo } from "./logo";
import { SITE, WHATSAPP_URL } from "@/lib/site";

const COL_SERVICES = [
  { href: "/nutricionista-online/", label: "Nutricionista online" },
  { href: "/nutricionista-deportivo-gran-canaria/", label: "Nutricionista deportivo Gran Canaria" },
  { href: "/perdida-de-grasa/", label: "Pérdida de grasa" },
  { href: "/recomposicion-corporal/", label: "Recomposición corporal" },
  { href: "/nutricion-para-futbolistas/", label: "Nutrición para futbolistas" },
  { href: "/nutricion-crossfit/", label: "Nutrición para CrossFit" },
];

const COL_SITIO = [
  { href: "/#metodo", label: "Método" },
  { href: "/#bonos", label: "Bonos y precios" },
  { href: "/#faq", label: "Preguntas frecuentes" },
  { href: "/blog/", label: "Blog" },
  { href: "/contacto/", label: "Contacto" },
];

export function Footer() {
  return (
    <footer className="relative mt-24 border-t border-warmwhite/10 bg-ink-900">
      <div className="container-tight py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Logo />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-warmwhite/70">
              Dietista-nutricionista en Gran Canaria especializado en nutrición
              deportiva, composición corporal y alimentación flexible. Comida
              real, criterio y seguimiento para mantener el cambio.
            </p>
            <p className="mt-6 text-xs uppercase tracking-[0.22em] text-teal-300/80">
              Lo importante es el después del después
            </p>
          </div>

          <div className="grid gap-10 sm:grid-cols-3 lg:col-span-7">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-warmwhite/60">
                Servicios
              </h3>
              <ul className="mt-4 space-y-2.5 text-sm">
                {COL_SERVICES.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-warmwhite/80 hover:text-teal-300"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-warmwhite/60">
                Sitio
              </h3>
              <ul className="mt-4 space-y-2.5 text-sm">
                {COL_SITIO.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-warmwhite/80 hover:text-teal-300"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-warmwhite/60">
                Contacto
              </h3>
              <ul className="mt-4 space-y-3 text-sm">
                <li>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-warmwhite/85 hover:text-teal-300"
                  >
                    <MessageCircle className="h-4 w-4" /> WhatsApp · {SITE.phoneDisplay}
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${SITE.email}`}
                    className="inline-flex items-center gap-2 text-warmwhite/85 hover:text-teal-300"
                  >
                    <Mail className="h-4 w-4" /> {SITE.email}
                  </a>
                </li>
                <li>
                  <a
                    href={SITE.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-warmwhite/85 hover:text-teal-300"
                  >
                    <Instagram className="h-4 w-4" /> {SITE.instagramHandle}
                  </a>
                </li>
                <li className="flex items-start gap-2 text-warmwhite/70">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                  <span>
                    Consulta presencial principal en {SITE.presencialVenue},{" "}
                    {SITE.presencialCity}. Colaboración con {SITE.signa}.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="hairline mt-14" />
        <div className="mt-6 flex flex-col items-start justify-between gap-3 text-xs text-warmwhite/55 sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} {SITE.name}. Todos los derechos
            reservados.
          </p>
          <p className="text-warmwhite/45">
            Los resultados son individuales y dependen del punto de partida,
            contexto, adherencia, entrenamiento y objetivos.
          </p>
        </div>
      </div>
    </footer>
  );
}
