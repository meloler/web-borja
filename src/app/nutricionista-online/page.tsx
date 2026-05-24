import type { Metadata } from "next";
import { Landing } from "@/components/landing";
import { SITE } from "@/lib/site";

const TITLE = "Nutricionista online | Plan personalizado con comida real";
const DESCRIPTION =
  "Nutricionista online especializado en deporte, composición corporal y alimentación flexible. Seguimiento continuo y contacto directo estés donde estés.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/nutricionista-online/" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE.url}/nutricionista-online/`,
  },
};

export default function Page() {
  return (
    <Landing
      eyebrow="Nutricionista online"
      h1="Nutricionista online para personas activas, deportistas y vida real"
      lead="Trabajamos desde cualquier punto: una primera valoración completa, un plan que sí puedas mantener y seguimiento continuo con ajustes según tu evolución."
      bullets={[
        "Consulta 100% online · seguimiento continuo",
        "Plan adaptado a tu día a día y entrenamiento",
        "Recetas reales y alimentación flexible",
        "Contacto directo entre sesiones",
      ]}
      forWho={{
        title: "Para quien quiere criterio y acompañamiento",
        items: [
          "Personas activas que quieren perder grasa sin pasar hambre.",
          "Deportistas amateur y semiprofesionales.",
          "Quien busca recomposición corporal sostenible.",
          "Quien necesita estructura para dejar de improvisar.",
          "Quien ya ha probado dietas que no pudo mantener.",
        ],
      }}
      approach={{
        title: "Online no significa genérico",
        text: "Cada plan se construye sobre tu contexto, gustos, horarios y objetivos. Online es solo el formato, el trabajo es personal.",
        items: [
          "Valoración inicial completa y conversación abierta.",
          "Plan personalizado con comida real y recetas.",
          "Revisiones periódicas y ajustes según evolución.",
          "Contacto directo entre sesiones para dudas reales.",
        ],
      }}
      schema={{
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Nutricionista online",
        serviceType: "Nutrición online",
        provider: { "@type": "Organization", name: SITE.name, url: SITE.url },
        areaServed: ["España", "Online"],
        url: `${SITE.url}/nutricionista-online/`,
      }}
    />
  );
}
