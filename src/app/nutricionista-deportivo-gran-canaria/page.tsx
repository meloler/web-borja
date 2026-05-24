import type { Metadata } from "next";
import { Landing } from "@/components/landing";
import { SITE } from "@/lib/site";

const TITLE =
  "Nutricionista deportivo en Gran Canaria | Rendimiento y composición corporal";
const DESCRIPTION =
  "Nutricionista deportivo en Las Palmas de Gran Canaria. Planes para mejorar rendimiento, recuperación y composición corporal sin pasar hambre.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/nutricionista-deportivo-gran-canaria/" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE.url}/nutricionista-deportivo-gran-canaria/`,
  },
};

export default function Page() {
  return (
    <Landing
      eyebrow="Nutricionista deportivo · Gran Canaria"
      h1="Nutricionista deportivo en Gran Canaria para rendir mejor y mantenerlo"
      lead="Trabajo nutricional para deportistas amateur, semiprofesionales y profesionales en Las Palmas de Gran Canaria. Online y presencial en CrossFit 928, con colaboración con Signa Center."
      bullets={[
        "Consulta online + presencial en Las Palmas",
        "Enfoque alineado con cargas de entrenamiento",
        "Composición corporal sin enfoques extremos",
        "Acompañamiento durante toda la temporada",
      ]}
      forWho={{
        title: "Pensado para deportistas con objetivos reales",
        items: [
          "Futbolistas y deportistas de fútbol nacional.",
          "Crossfitters, runners, triatletas y deportistas de montaña.",
          "Deportistas amateur que quieren rendir más y recuperar mejor.",
          "Preparación de retos: maratón, triatlón, Transgrancanaria.",
          "Personas activas que ya entrenan pero no ven resultados.",
        ],
      }}
      approach={{
        title: "Nutrición deportiva con criterio, no con extremos",
        text: "Trabajamos sobre rendimiento, recuperación y composición corporal con un plan que respeta tus horarios, gustos y vida fuera del entrenamiento.",
        items: [
          "Estrategia nutricional por bloques (entreno, competición, descanso).",
          "Energía, recuperación y disponibilidad de carbohidratos.",
          "Hidratación, suplementación y timing si tiene sentido.",
          "Composición corporal sin obsesionarse con la báscula.",
        ],
      }}
      schema={{
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Nutricionista deportivo en Gran Canaria",
        serviceType: "Nutrición deportiva",
        provider: { "@type": "Organization", name: SITE.name, url: SITE.url },
        areaServed: "Gran Canaria",
        url: `${SITE.url}/nutricionista-deportivo-gran-canaria/`,
      }}
    />
  );
}
