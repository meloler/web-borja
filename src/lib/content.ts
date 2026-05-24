import type { ComponentType, SVGProps } from "react";
import {
  Activity,
  Apple,
  BicepsFlexed,
  Dumbbell,
  GraduationCap,
  Laptop,
  Medal,
  Mountain,
  Trophy,
} from "lucide-react";

type Icon = ComponentType<SVGProps<SVGSVGElement>>;

export type Service = {
  slug: string;
  title: string;
  description: string;
  icon: Icon;
  /** Página SEO interna asociada (si existe) */
  href?: string;
};

export const SERVICES: Service[] = [
  {
    slug: "nutricion-online",
    title: "Nutrición online",
    description:
      "Seguimiento personalizado estés donde estés, con contacto directo y ajustes según tu evolución.",
    icon: Laptop,
    href: "/nutricionista-online/",
  },
  {
    slug: "nutricion-deportiva",
    title: "Nutrición deportiva",
    description:
      "Estrategias para entrenar mejor, recuperar mejor y llegar con más energía a tus objetivos.",
    icon: Activity,
    href: "/nutricionista-deportivo-gran-canaria/",
  },
  {
    slug: "perdida-de-grasa",
    title: "Pérdida de grasa",
    description:
      "Un enfoque realista para perder grasa sin vivir con hambre ni renunciar a comer bien.",
    icon: Apple,
    href: "/perdida-de-grasa/",
  },
  {
    slug: "recomposicion-corporal",
    title: "Recomposición corporal",
    description:
      "Mejora tu físico combinando entrenamiento, nutrición, adherencia y ajustes progresivos.",
    icon: BicepsFlexed,
    href: "/recomposicion-corporal/",
  },
  {
    slug: "nutricion-futbolistas",
    title: "Nutrición para futbolistas",
    description:
      "Planificación para mejorar rendimiento, recuperación, composición corporal y hábitos durante la temporada.",
    icon: Trophy,
    href: "/nutricion-para-futbolistas/",
  },
  {
    slug: "crossfit",
    title: "CrossFit y entrenamiento funcional",
    description:
      "Nutrición para rendir en entrenamientos exigentes sin descuidar composición corporal ni recuperación.",
    icon: Dumbbell,
    href: "/nutricion-crossfit/",
  },
  {
    slug: "retos-deportivos",
    title: "Retos deportivos",
    description:
      "Preparación nutricional para maratones, triatlones, carreras de montaña, Transgrancanaria y objetivos exigentes.",
    icon: Mountain,
  },
  {
    slug: "educacion-nutricional",
    title: "Educación nutricional",
    description:
      "Aprende a tomar mejores decisiones sin depender siempre de una dieta cerrada.",
    icon: GraduationCap,
  },
];

export type Athlete = {
  name: string;
  role: string;
  note: string;
};

export const ATHLETES: Athlete[] = [
  {
    name: "Alberto Moleiro",
    role: "Fútbol profesional",
    note: "Trabajo nutricional vinculado a rendimiento, recuperación y hábitos durante la temporada.",
  },
  {
    name: "Jefte Betancor",
    role: "Fútbol profesional",
    note: "Acompañamiento para sostener composición corporal y energía a lo largo de la competición.",
  },
  {
    name: "Enrique Clemente",
    role: "Fútbol profesional",
    note: "Estrategias nutricionales adaptadas a calendario de competición y recuperación.",
  },
  {
    name: "Kirian Rodríguez",
    role: "Fútbol profesional",
    note: "Trabajo en hábitos, composición corporal y rendimiento dentro y fuera del terreno de juego.",
  },
  {
    name: "Álex Suárez",
    role: "Fútbol profesional",
    note: "Planificación nutricional alineada con cargas, recuperación y temporada larga.",
  },
  {
    name: "Dani Ojeda",
    role: "Fútbol profesional",
    note: "Acompañamiento centrado en adherencia, hábitos y soporte deportivo.",
  },
];

export type Plan = {
  slug: string;
  name: string;
  forWho: string;
  duration: string;
  includes: string[];
  price?: string;
  featured?: boolean;
};

export const PLANS: Plan[] = [
  {
    slug: "bono-mensual",
    name: "Bono mensual",
    forWho: "Para quien ya entrena y quiere acompañamiento constante.",
    duration: "1 mes",
    includes: [
      "Primera consulta con valoración completa y bioimpedancia",
      "1 revisión con seguimiento y ajustes",
      "Plan nutricional personalizado con comida real",
      "Contacto directo vía email o WhatsApp",
      "Asesoramiento en suplementación",
    ],
    price: "90€",
  },
  {
    slug: "bono-bimensual",
    name: "Bono bimensual",
    forWho: "Para objetivos claros con seguimiento constante.",
    duration: "2 meses",
    includes: [
      "Primera consulta con valoración completa y bioimpedancia",
      "3 revisiones con ajustes según resultados",
      "Plan evolutivo adaptado a tu progreso",
      "Seguimiento por fotos y bioimpedancia",
      "Contacto directo vía email o WhatsApp",
    ],
    price: "160€",
    featured: true,
  },
  {
    slug: "bono-trimestral",
    name: "Bono trimestral",
    forWho: "Para objetivos serios: recomposición, rendimiento o reto deportivo.",
    duration: "3 meses",
    includes: [
      "Primera consulta con valoración completa y bioimpedancia",
      "5 revisiones con ajustes progresivos según resultados",
      "Plan evolutivo completo para sostener el cambio",
      "Estrategia integral de adherencia y motivación",
      "Contacto directo continuo vía email o WhatsApp",
    ],
    price: "220€",
  },
];

export type FaqItem = { q: string; a: string };

export const FAQS: FaqItem[] = [
  {
    q: "¿La consulta es online?",
    a: "Sí. La mayoría de pacientes trabaja con Borja de forma online, con seguimiento continuo, ajustes y contacto directo. Solo necesitas una buena conexión y compromiso con el proceso.",
  },
  {
    q: "¿También atiendes presencialmente en Gran Canaria?",
    a: "Sí. La consulta presencial principal se vincula a CrossFit 928 en Las Palmas de Gran Canaria. También existe colaboración con Signa Center para determinados servicios.",
  },
  {
    q: "¿Dónde es la consulta presencial?",
    a: "En CrossFit 928 (Las Palmas de Gran Canaria) y, para servicios concretos, en Signa Center. Te indicamos la ubicación según el tipo de consulta al reservar.",
  },
  {
    q: "¿Trabajas con futbolistas?",
    a: "Sí. Borja ha acompañado a futbolistas profesionales y deportistas vinculados al fútbol nacional, con un enfoque centrado en rendimiento, composición corporal, recuperación y hábitos durante la temporada.",
  },
  {
    q: "¿Puedo empezar si no soy deportista?",
    a: "Sí. La consulta está abierta a personas activas que quieren mejorar su salud, composición corporal y relación con la comida, aunque no compitan ni entrenen a nivel alto.",
  },
  {
    q: "¿Tengo que pasar hambre para perder grasa?",
    a: "No. La idea es la contraria: construir un plan con comida real, sabrosa y suficiente que puedas mantener en el tiempo. La adherencia es lo que sostiene los resultados.",
  },
  {
    q: "¿El plan incluye recetas?",
    a: "Sí. Borja adapta recetas, ideas virales y platos cotidianos para que encajen con tus objetivos sin perder sabor, color ni disfrute.",
  },
  {
    q: "¿Puedo comer fuera o tener vida social?",
    a: "Sí. La alimentación flexible es parte del enfoque: comer fuera, viajar o disfrutar de una comida social no rompe el proceso, forma parte de él.",
  },
  {
    q: "¿Trabajas con personas que entrenan CrossFit?",
    a: "Sí. Hay un trabajo específico para CrossFit y entrenamiento funcional: nutrición para rendir en sesiones exigentes sin descuidar composición corporal ni recuperación.",
  },
  {
    q: "¿Puedo preparar una carrera, maratón, triatlón o reto deportivo contigo?",
    a: "Sí. Borja prepara nutricionalmente retos como maratones, triatlones, carreras de montaña y Transgrancanaria, ajustando la estrategia a tu calendario.",
  },
  {
    q: "¿Cuánto tarda en verse un cambio?",
    a: "Depende del punto de partida, objetivo y adherencia. Suelen verse cambios en sensaciones y rendimiento en pocas semanas; los cambios visibles requieren más tiempo y constancia.",
  },
  {
    q: "¿Cómo funciona el seguimiento?",
    a: "Tras la consulta inicial se acuerdan revisiones periódicas para ajustar el plan según evolución, sensaciones, rendimiento y adherencia. Mantenemos contacto directo entre sesiones.",
  },
  {
    q: "¿Hay bonos de consulta?",
    a: "Sí. Existen bonos mensuales y trimestrales pensados para acompañar procesos reales. Borja te orientará sobre qué opción encaja mejor según tu objetivo.",
  },
  {
    q: "¿Qué incluye la primera consulta?",
    a: "Una valoración completa del punto de partida: objetivos, horarios, entrenamiento, gustos, contexto, historial y dificultades reales, además de un plan inicial personalizado.",
  },
  {
    q: "¿Cómo puedo contactar?",
    a: "Por WhatsApp (la forma más rápida), correo electrónico o desde el formulario de la web. Si vienes a través de Signa Center, también puedes reservar desde su sistema.",
  },
];

export type Step = {
  n: string;
  title: string;
  text: string;
};

export const METHOD: Step[] = [
  {
    n: "01",
    title: "Entender tu punto de partida",
    text: "Objetivos, horarios, entrenamiento, gustos, contexto, historial y dificultades reales.",
  },
  {
    n: "02",
    title: "Crear un plan que puedas seguir",
    text: "Una estrategia personalizada con comida real, recetas adaptadas y flexibilidad.",
  },
  {
    n: "03",
    title: "Acompañar, medir y ajustar",
    text: "Seguimiento para adaptar el plan según evolución, sensaciones, rendimiento y adherencia.",
  },
  {
    n: "04",
    title: "Mantener el cambio",
    text: "Porque el objetivo no es solo conseguir resultados. Es sostenerlos cuando la motivación inicial ya no está.",
  },
];

export const TRUST_SIGNALS = [
  "Consulta online",
  "Nutricionista deportivo en Gran Canaria",
  "Composición corporal y rendimiento",
  "Alimentación flexible basada en evidencia",
  "Deportistas profesionales han confiado en Borja",
];

export type Testimonial = {
  name: string;
  goal: string;
  text: string;
  process: string;
};

// Placeholder de testimonios — se completará con testimonios reales autorizados.
export const TESTIMONIALS: Testimonial[] = [
  {
    name: "—",
    goal: "Pérdida de grasa sostenible",
    text: "Espacio reservado para testimonios reales y autorizados.",
    process: "Seguimiento online · 4 meses",
  },
  {
    name: "—",
    goal: "Recomposición corporal",
    text: "Espacio reservado para testimonios reales y autorizados.",
    process: "Seguimiento online · 6 meses",
  },
  {
    name: "—",
    goal: "Preparación de reto deportivo",
    text: "Espacio reservado para testimonios reales y autorizados.",
    process: "Seguimiento presencial · 3 meses",
  },
];

export const CATEGORIES = [
  "Nutrición deportiva",
  "Pérdida de grasa",
  "Recomposición corporal",
  "Fútbol",
  "CrossFit",
  "Retos deportivos",
  "Recetas",
  "Adherencia",
];
