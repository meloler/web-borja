import { Soup, Salad, CakeSlice, Sandwich } from "lucide-react";

const PLATES = [
  { icon: Salad, label: "Bowl colorido" },
  { icon: Soup, label: "Crema templada" },
  { icon: Sandwich, label: "Wrap saciante" },
  { icon: CakeSlice, label: "Postre proteico" },
];

export function Recipes() {
  return (
    <section id="recetas" className="relative py-24 sm:py-28">
      <div className="container-tight grid gap-12 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-6">
          <span className="eyebrow">Comida real, comida que apetece</span>
          <h2 className="h-section mt-4">
            Comer bien también puede ser sabroso
          </h2>
          <p className="lead mt-5">
            Una alimentación efectiva no tiene por qué ser aburrida. Borja
            adapta recetas, ideas virales y platos cotidianos para que encajen
            con tus objetivos sin perder sabor, color ni disfrute. Porque cuanto
            más realista y apetecible sea tu alimentación, más fácil será
            mantenerla.
          </p>
          <p className="mt-6 inline-flex rounded-full border border-teal-400/30 bg-teal-500/10 px-4 py-2 text-sm font-medium text-teal-200">
            Más adherencia, menos drama.
          </p>
        </div>

        <div className="lg:col-span-6">
          <div className="grid grid-cols-2 gap-4">
            {PLATES.map(({ icon: Icon, label }, i) => (
              <div
                key={label}
                className={`card aspect-square overflow-hidden p-0 ${
                  i === 1 || i === 2 ? "translate-y-6" : ""
                }`}
              >
                <div
                  aria-hidden
                  className={`absolute inset-0 bg-gradient-to-br ${
                    [
                      "from-teal-500/25 via-ink-700 to-ink-900",
                      "from-lime-accent/20 via-ink-700 to-ink-900",
                      "from-sand-300/20 via-ink-700 to-ink-900",
                      "from-mint-400/25 via-ink-700 to-ink-900",
                    ][i]
                  }`}
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-noise opacity-30 mix-blend-overlay"
                />
                <div className="relative flex h-full flex-col items-start justify-between p-5">
                  <Icon className="h-7 w-7 text-warmwhite/85" />
                  <p className="text-sm font-medium text-warmwhite/90">{label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
