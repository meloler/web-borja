import type { Metadata } from "next";
import { Landing } from "@/components/landing";
import { SITE } from "@/lib/site";

const TITLE = "Nutrición para futbolistas | Rendimiento, recuperación y temporada";
const DESCRIPTION =
  "Nutrición para futbolistas profesionales y amateur. Plan para mejorar rendimiento, recuperación, composición corporal y hábitos durante la temporada.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/nutricion-para-futbolistas/" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE.url}/nutricion-para-futbolistas/`,
  },
};

export default function Page() {
  return (
    <Landing
      eyebrow="Nutrición para futbolistas"
      h1="Nutrición para futbolistas que quieren rendir todo el año"
      lead="Estrategia nutricional adaptada a la temporada futbolística: pretemporada, competición, partidos, viajes, descansos y momentos clave."
      bullets={[
        "Trabajo con futbolistas profesionales y amateur",
        "Energía, recuperación y composición corporal",
        "Plan adaptado a viajes y calendario",
        "Hábitos que se sostienen toda la temporada",
      ]}
      forWho={{
        title: "Para futbolistas que se toman en serio su rendimiento",
        items: [
          "Profesionales de fútbol nacional.",
          "Futbolistas amateur y semiprofesionales.",
          "Canteras y categorías formativas.",
          "Jugadores que quieren mejorar composición corporal.",
        ],
      }}
      approach={{
        title: "Más allá del partido del fin de semana",
        text: "La nutrición de un futbolista no es solo lo que come antes del partido. Es lo que sostiene los entrenamientos, los viajes, la recuperación y la temporada.",
        items: [
          "Plan por fases (pretemporada, competición, descanso).",
          "Estrategia pre, intra y post partido.",
          "Recuperación entre partidos y dobles sesiones.",
          "Composición corporal sin perder rendimiento.",
        ],
      }}
      schema={{
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Nutrición para futbolistas",
        serviceType: "Nutrición deportiva para fútbol",
        provider: { "@type": "Organization", name: SITE.name, url: SITE.url },
        url: `${SITE.url}/nutricion-para-futbolistas/`,
      }}
    />
  );
}
