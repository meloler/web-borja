import type { Metadata } from "next";
import Link from "next/link";
import { RecognizeQuiz } from "@/components/recognize-quiz";

const TITLE = "Reconócete · Borja Galván Nutrición";
const DESCRIPTION =
  "Responde dos preguntas sencillas y descubre cuál es tu punto de partida con la nutrición de Borja Galván.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  // Preview para validación: no indexar todavía.
  robots: { index: false, follow: false },
};

export default function ReconocetePage() {
  return (
    <section className="relative isolate overflow-hidden pt-28 sm:pt-32 lg:pt-36">
      <div aria-hidden className="absolute inset-0 -z-10 bg-radial-fade" />
      <div className="container-tight pb-24">
        <nav aria-label="Migas" className="mb-6 text-xs text-warmwhite/55">
          <Link href="/" className="hover:text-teal-300">
            Inicio
          </Link>{" "}
          / <span className="text-warmwhite/80">Reconócete</span>
        </nav>

        <div className="mx-auto mb-10 max-w-2xl text-center">
          <span className="eyebrow">¿Esto es para ti?</span>
          <h1 className="h-display mt-5">Reconócete</h1>
          <p className="lead mx-auto mt-6">
            No todos partimos del mismo sitio. Responde dos preguntas y te
            digo por dónde empezaría yo contigo.
          </p>
        </div>

        <RecognizeQuiz />
      </div>
    </section>
  );
}
