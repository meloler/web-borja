import type { Metadata } from "next";
import { Landing } from "@/components/landing";
import { SITE } from "@/lib/site";

const TITLE = "Nutrición para CrossFit | Rendimiento, recuperación y composición corporal";
const DESCRIPTION =
  "Nutrición para CrossFit y entrenamiento funcional. Plan para rendir en sesiones exigentes sin descuidar composición corporal ni recuperación.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/nutricion-crossfit/" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE.url}/nutricion-crossfit/`,
  },
};

export default function Page() {
  return (
    <Landing
      eyebrow="Nutrición para CrossFit"
      h1="Nutrición para CrossFit y entrenamiento funcional"
      lead="Estrategia nutricional pensada para entrenamientos exigentes: rendir en cada WOD, recuperar mejor entre sesiones y mejorar composición corporal sin extremos."
      bullets={[
        "Plan para rendir en sesiones de alta intensidad",
        "Recuperación entre WODs y semanas duras",
        "Composición corporal sin perder fuerza",
        "Sin comida rara ni restricciones absurdas",
      ]}
      forWho={{
        title: "Para crossfitters con objetivos reales",
        items: [
          "Llevas tiempo entrenando y no avanzas en composición corporal.",
          "Quieres rendir mejor en sesiones largas o dobles.",
          "Te preparas para competiciones locales o open.",
          "Buscas mejorar fuerza, energía y recuperación.",
        ],
      }}
      approach={{
        title: "Rendir en el box y mantener el resto del día",
        text: "El CrossFit pide mucho. La nutrición debe sostener entrenamiento, recuperación y vida diaria. Sin perder de vista la composición corporal.",
        items: [
          "Carbohidratos suficientes para WODs exigentes.",
          "Proteína suficiente y bien repartida.",
          "Estrategia pre y post entrenamiento.",
          "Semanas de descarga, competiciones y picos.",
        ],
      }}
      schema={{
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Nutrición para CrossFit",
        serviceType: "Nutrición deportiva para CrossFit",
        provider: { "@type": "Organization", name: SITE.name, url: SITE.url },
        url: `${SITE.url}/nutricion-crossfit/`,
      }}
    />
  );
}
