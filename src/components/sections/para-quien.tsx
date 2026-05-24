"use client";

import { motion } from "framer-motion";
import { whatsappWith } from "@/lib/site";

const PROFILES = [
  {
    tag: "Deportista",
    title: "Entrenas y quieres rendir más",
    description:
      "Nutrición adaptada a tus cargas, recuperación y objetivos. Sin improvisar.",
    msg: "Hola Borja, entreno y quiero mejorar mi rendimiento con nutrición",
  },
  {
    tag: "Composición corporal",
    title: "Quieres perder grasa sin pasar hambre",
    description:
      "Un enfoque sostenible, sin restricciones absurdas y con comida que te gusta.",
    msg: "Hola Borja, quiero perder grasa de forma sostenible",
  },
  {
    tag: "Salud y hábitos",
    title: "Quieres comer mejor de verdad",
    description:
      "Estructura y criterio para dejar de improvisar y construir hábitos que duran.",
    msg: "Hola Borja, quiero mejorar mis hábitos alimentarios",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const card = {
  hidden: { opacity: 0, y: 22 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

export function ParaQuien() {
  return (
    <section id="para-quien" className="relative py-12 sm:py-14">
      <div className="container-tight">
        <div className="mb-6">
          <span className="eyebrow">¿Esto es para ti?</span>
          <h2 className="h-section mt-3">Reconócete</h2>
        </div>

        <motion.div
          className="grid gap-5 sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          {PROFILES.map(({ tag, title, description, msg }) => (
            <motion.a
              key={tag}
              href={whatsappWith(msg)}
              target="_blank"
              rel="noopener noreferrer"
              className="card group flex flex-col gap-3 !p-4 transition-transform hover:-translate-y-0.5"
              variants={card}
            >
              {/* Llamamiento — una línea, shimmer animado */}
              <div className="flex items-center justify-center py-1">
                <span className="animate-text-shimmer whitespace-nowrap text-2xl font-bold sm:text-3xl">
                  {tag}
                </span>
              </div>

              <div className="flex-1 border-t border-warmwhite/10 pt-3">
                <h3 className="text-base font-semibold leading-snug text-warmwhite">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-warmwhite/60">
                  {description}
                </p>
              </div>

              <span className="text-sm font-medium text-teal-300 group-hover:underline">
                Este es mi caso →
              </span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
