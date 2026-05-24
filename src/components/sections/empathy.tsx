import { Check } from "lucide-react";

const POINTS = [
  "Sin pasar hambre.",
  "Sin comida rara.",
  "Sin prohibiciones absurdas.",
  "Sin empezar perfecto.",
  "Con un plan adaptado a ti.",
];

export function Empathy() {
  return (
    <section id="empatia" className="relative py-24 sm:py-28">
      <div className="container-tight grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <span className="eyebrow">Para quien intenta comer mejor</span>
          <h2 className="h-section mt-4">
            Comer mejor no debería sentirse como un castigo
          </h2>
          <p className="mt-6 text-base leading-relaxed text-warmwhite/75 sm:text-lg">
            Si has probado dietas que duran dos semanas o entrenas sin ver
            resultados, el problema no eres tú — es el plan. Aquí construimos
            uno que encaja con tu vida real.
          </p>
        </div>

        <div className="lg:col-span-5">
          <ul className="card flex flex-col gap-3 p-7">
            {POINTS.map((p) => (
              <li
                key={p}
                className="flex items-start gap-3 border-b border-warmwhite/5 pb-3 last:border-0 last:pb-0"
              >
                <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-500/15 text-teal-300">
                  <Check className="h-3.5 w-3.5" />
                </span>
                <span className="text-base text-warmwhite/90">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
