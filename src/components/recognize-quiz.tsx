"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, RotateCcw } from "lucide-react";
import { whatsappWith } from "@/lib/site";

type ProfileKey = "deportista" | "composicion" | "salud";

type Option = {
  label: string;
  hint: string;
  // Si lleva a un perfil directamente, o a la siguiente pregunta.
  next: ProfileKey | "q2";
};

type Question = {
  id: "q1" | "q2";
  eyebrow: string;
  title: string;
  options: Option[];
};

const QUESTIONS: Record<"q1" | "q2", Question> = {
  q1: {
    id: "q1",
    eyebrow: "Paso 1 de 2",
    title: "¿Cómo describirías tu relación con el deporte ahora mismo?",
    options: [
      {
        label: "Entreno de forma regular",
        hint: "Quiero rendir más, mejorar mis marcas o preparar una competición.",
        next: "deportista",
      },
      {
        label: "Hago algo de ejercicio o nada",
        hint: "El deporte no es mi prioridad ahora mismo; busco otra cosa.",
        next: "q2",
      },
    ],
  },
  q2: {
    id: "q2",
    eyebrow: "Paso 2 de 2",
    title: "¿Qué es lo que más te gustaría cambiar?",
    options: [
      {
        label: "Siento que me sobran unos kilos",
        hint: "No estoy del todo contento con mi cuerpo y quiero mejorar mi composición.",
        next: "composicion",
      },
      {
        label: "Estoy bien con mi cuerpo",
        hint: "Solo quiero comer mejor, aprender a calcular la comida y cuidar mis hábitos.",
        next: "salud",
      },
    ],
  },
};

const PROFILES: Record<
  ProfileKey,
  { tag: string; title: string; description: string; msg: string }
> = {
  deportista: {
    tag: "Deportista",
    title: "Entrenas y quieres rendir más",
    description:
      "Nutrición adaptada a tus cargas, recuperación y objetivos. Sin improvisar.",
    msg: "Hola Borja, entreno y quiero mejorar mi rendimiento con nutrición",
  },
  composicion: {
    tag: "Composición corporal",
    title: "Quieres perder grasa sin pasar hambre",
    description:
      "Un enfoque sostenible, sin restricciones absurdas y con comida que te gusta.",
    msg: "Hola Borja, quiero perder grasa de forma sostenible",
  },
  salud: {
    tag: "Salud y hábitos",
    title: "Quieres comer mejor de verdad",
    description:
      "Estructura y criterio para dejar de improvisar y construir hábitos que duran.",
    msg: "Hola Borja, quiero mejorar mis hábitos alimentarios",
  },
};

const variants = {
  enter: { opacity: 0, x: 40 },
  center: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -40 },
};

export function RecognizeQuiz() {
  // Pila de pasos visitados: "q1" siempre es el primero.
  const [history, setHistory] = useState<("q1" | "q2")[]>(["q1"]);
  const [result, setResult] = useState<ProfileKey | null>(null);

  const current = history[history.length - 1];
  const progress = result ? 100 : current === "q1" ? 50 : 100;

  function choose(option: Option) {
    if (option.next === "q2") {
      setHistory((h) => [...h, "q2"]);
    } else {
      setResult(option.next);
    }
  }

  function back() {
    if (result) {
      setResult(null);
      return;
    }
    if (history.length > 1) {
      setHistory((h) => h.slice(0, -1));
    }
  }

  function restart() {
    setResult(null);
    setHistory(["q1"]);
  }

  const canGoBack = result !== null || history.length > 1;

  return (
    <div className="mx-auto w-full max-w-2xl">
      {/* Barra de progreso */}
      <div className="mb-8">
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
          <motion.div
            className="h-full rounded-full bg-teal-400"
            initial={false}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
        </div>
      </div>

      <div className="relative">
        <AnimatePresence mode="wait">
          {result ? (
            <motion.div
              key="result"
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <ResultCard profile={PROFILES[result]} />
            </motion.div>
          ) : (
            <motion.div
              key={current}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <p className="eyebrow">{QUESTIONS[current].eyebrow}</p>
              <h2 className="h-section mt-3">{QUESTIONS[current].title}</h2>

              <div className="mt-8 grid gap-4">
                {QUESTIONS[current].options.map((option) => (
                  <button
                    key={option.label}
                    type="button"
                    onClick={() => choose(option)}
                    className="card group flex flex-col items-start gap-1.5 text-left transition-transform hover:-translate-y-0.5 hover:border-teal-400/40"
                  >
                    <span className="text-lg font-semibold text-warmwhite">
                      {option.label}
                    </span>
                    <span className="text-sm leading-relaxed text-warmwhite/60">
                      {option.hint}
                    </span>
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Controles */}
      <div className="mt-8 flex items-center justify-between">
        <button
          type="button"
          onClick={back}
          disabled={!canGoBack}
          className="inline-flex items-center gap-2 text-sm text-warmwhite/60 transition-colors hover:text-warmwhite disabled:cursor-not-allowed disabled:opacity-0"
        >
          <ArrowLeft className="h-4 w-4" />
          Atrás
        </button>

        {result && (
          <button
            type="button"
            onClick={restart}
            className="inline-flex items-center gap-2 text-sm text-warmwhite/60 transition-colors hover:text-warmwhite"
          >
            <RotateCcw className="h-4 w-4" />
            Empezar de nuevo
          </button>
        )}
      </div>
    </div>
  );
}

function ResultCard({
  profile,
}: {
  profile: { tag: string; title: string; description: string; msg: string };
}) {
  return (
    <div className="card-hi flex flex-col items-center gap-4 text-center !p-8">
      <p className="eyebrow">Tu perfil</p>
      <span className="animate-text-shimmer text-3xl font-bold sm:text-4xl">
        {profile.tag}
      </span>
      <h3 className="text-xl font-semibold leading-snug text-warmwhite">
        {profile.title}
      </h3>
      <p className="max-w-md text-base leading-relaxed text-warmwhite/70">
        {profile.description}
      </p>
      <a
        href={whatsappWith(profile.msg)}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-primary mt-2"
      >
        Este es mi caso →
      </a>
    </div>
  );
}
