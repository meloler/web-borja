import type { Metadata } from "next";
import { Landing } from "@/components/landing";
import { SITE } from "@/lib/site";

const TITLE = "Recomposición corporal | Mejora músculo, grasa y rendimiento";
const DESCRIPTION =
  "Recomposición corporal con criterio: ganar músculo, perder grasa y mejorar rendimiento combinando entrenamiento, nutrición y adherencia.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/recomposicion-corporal/" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE.url}/recomposicion-corporal/`,
  },
};

export default function Page() {
  return (
    <Landing
      eyebrow="Recomposición corporal"
      h1="Recomposición corporal: mejor físico, mejor rendimiento, hábitos sostenibles"
      lead="Mejora tu físico combinando entrenamiento, nutrición, adherencia y ajustes progresivos. Sin extremos, sin ciclos de pérdida y recuperación."
      bullets={[
        "Más músculo, mejor composición corporal",
        "Plan alineado con tu entrenamiento",
        "Ajustes según rendimiento, sensaciones y datos",
        "Sostenible cuando la motivación baja",
      ]}
      forWho={{
        title: "Para quien quiere mejorar físico y rendimiento a la vez",
        items: [
          "Entrenas con constancia pero el espejo no acompaña.",
          "Quieres mejorar fuerza y composición corporal.",
          "Buscas un plan que no te aleje de tu vida.",
          "Has hecho dieta cerrada y necesitas otro enfoque.",
        ],
      }}
      approach={{
        title: "Recomponer con cabeza, no con prisa",
        text: "La recomposición es un proceso. Necesita un buen estímulo de entrenamiento, suficiente proteína, calorías ajustadas y tiempo. No promesas exprés.",
        items: [
          "Proteína suficiente repartida durante el día.",
          "Calorías ajustadas a fase y objetivo.",
          "Alineación con el entrenamiento que ya haces.",
          "Indicadores más allá del peso en la báscula.",
        ],
      }}
      schema={{
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Recomposición corporal",
        serviceType: "Nutrición para recomposición corporal",
        provider: { "@type": "Organization", name: SITE.name, url: SITE.url },
        url: `${SITE.url}/recomposicion-corporal/`,
      }}
    />
  );
}
