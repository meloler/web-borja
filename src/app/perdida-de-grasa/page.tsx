import type { Metadata } from "next";
import { Landing } from "@/components/landing";
import { SITE } from "@/lib/site";

const TITLE = "Pérdida de grasa sin pasar hambre | Nutricionista Borja Galván";
const DESCRIPTION =
  "Pierde grasa con un plan flexible basado en comida real. Sin dietas extremas, sin prohibiciones absurdas. Pensado para mantener el cambio.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/perdida-de-grasa/" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE.url}/perdida-de-grasa/`,
  },
};

export default function Page() {
  return (
    <Landing
      eyebrow="Pérdida de grasa"
      h1="Pierde grasa sin vivir con hambre ni renunciar a comer bien"
      lead="Un enfoque realista para mejorar tu composición corporal sin dietas imposibles. Comida real, criterio y un plan que puedas sostener cuando la motivación baje."
      bullets={[
        "Sin pasar hambre ni comida rara",
        "Adherencia como base del cambio",
        "Plan adaptado a entrenamiento y vida social",
        "Recetas que sí puedes mantener",
      ]}
      forWho={{
        title: "Para quien ya lo ha intentado y quiere cerrar el proceso",
        items: [
          "Has perdido y recuperado peso varias veces.",
          "Entrenas pero no terminas de ver cambios.",
          "Necesitas estructura sin dejar de tener vida.",
          "Buscas perder grasa cuidando músculo y rendimiento.",
        ],
      }}
      approach={{
        title: "Perder grasa con cabeza",
        text: "No se trata de comer menos por sufrir más. Se trata de comer mejor, entender qué estás haciendo y sostenerlo cuando la novedad se acaba.",
        items: [
          "Déficit razonable adaptado a tu actividad.",
          "Suficiente proteína y comida que sacia.",
          "Comer fuera sin culpa y sin romper el proceso.",
          "Ajustes progresivos según evolución.",
        ],
      }}
      schema={{
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Pérdida de grasa",
        serviceType: "Nutrición para pérdida de grasa",
        provider: { "@type": "Organization", name: SITE.name, url: SITE.url },
        url: `${SITE.url}/perdida-de-grasa/`,
      }}
    />
  );
}
