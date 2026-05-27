"use client";

import { useMemo, useState } from "react";
import { AlertTriangle, BookOpen, CheckCircle2, Compass, Lock, Search, ShieldCheck } from "lucide-react";

type Example = {
  ingredient: string;
  intent: string;
  model: string;
  useCase: string;
  title: string;
  returned: string[];
  claim: string;
  source: string;
};

const FACTS = [
  ["4,14M", "recetas agregadas de 11 fuentes multilingues", "Methods / Corpus"],
  ["1.790", "ingredientes canonicos tras normalizar strings crudos", "Methods / Canonical Vocabulary"],
  ["203.508", "aristas ingrediente-ingrediente NPMI positivas", "Methods / Graph Construction"],
  ["80.019", "aristas ingrediente-compuesto tipadas con FlavorDB", "Methods / Graph Construction"],
  ["300-D", "embedding comun para Cooc, Core y Chem", "Training hyperparameters"],
  ["27 + 8", "probes continuos y macro-regiones culinarias evaluadas", "Evaluation / Direction quality"],
] as const;

const EXAMPLES: Example[] = [
  {
    ingredient: "rice",
    intent: "South Asian",
    model: "SLERP",
    useCase: "Adaptacion cultural",
    title: "Arroz orientado al sur de Asia",
    returned: ["curry leaf", "urad dal", "chana dal", "fenugreek seed"],
    claim:
      "El paper muestra una rotacion de rice hacia una direccion South-Asian que recupera ingredientes caracteristicos de ese territorio.",
    source: "Abstract; Transformations / SLERP toward supervised directions",
  },
  {
    ingredient: "chicken",
    intent: "Mexican / Tex-Mex",
    model: "Core",
    useCase: "Adherencia",
    title: "Pollo hacia territorio Tex-Mex",
    returned: ["corn tortilla", "salsa", "monterey jack cheese", "flour tortilla", "tortilla"],
    claim:
      "A 60 grados, Core lleva chicken y beef hacia un vecindario Tex-Mex casi identico.",
    source: "Transformations / The angle is a continuous knob",
  },
  {
    ingredient: "beef",
    intent: "Mexican / Tex-Mex",
    model: "Chem",
    useCase: "Adherencia",
    title: "Ternera hacia especialidades mexicanas",
    returned: ["poblano pepper", "salsa", "cotija cheese", "corn tortilla", "monterey jack cheese"],
    claim:
      "El paper describe que a 60 grados aparecen ingredientes mexicanos especializados que el seed no recupera directamente.",
    source: "Transformations / The angle is a continuous knob",
  },
  {
    ingredient: "tomato",
    intent: "Mediterranean savory pantry",
    model: "Chem",
    useCase: "Sustitucion",
    title: "Tomate hacia despensa caucasico-mediterranea",
    returned: ["sulguni cheese", "sun dried tomato", "adjika"],
    claim:
      "El destino cambia segun modelo: Chem enmarca el concepto en una despensa caucasico-mediterranea.",
    source: "Transformations / SLERP toward emergent mode poles",
  },
  {
    ingredient: "salmon",
    intent: "nearest neighbours",
    model: "Cooc",
    useCase: "Sustitucion",
    title: "Vecinos de salmon por co-ocurrencia",
    returned: ["wasabi", "avocado", "ponzu", "balsamic vinegar", "scallop"],
    claim:
      "Los vecinos Cooc reflejan acompanantes de receta observados en el corpus.",
    source: "Table: Top-5 nearest neighbours",
  },
  {
    ingredient: "soy sauce",
    intent: "nearest neighbours",
    model: "Core",
    useCase: "Sustitucion",
    title: "Vecinos de salsa de soja en Core",
    returned: ["sesame oil", "light soy sauce", "oyster sauce", "shaoxing wine", "doubanjiang"],
    claim:
      "Core mezcla contexto de receta y quimica, recuperando un vecindario coherente de cocina asiatica.",
    source: "Table: Top-5 nearest neighbours",
  },
];

function unique(key: keyof Example) {
  return [...new Set(EXAMPLES.map((item) => String(item[key])))];
}

export function EpicureConsole() {
  const [ingredient, setIngredient] = useState(EXAMPLES[0].ingredient);
  const [intent, setIntent] = useState(EXAMPLES[0].intent);
  const [model, setModel] = useState(EXAMPLES[0].model);
  const [useCase, setUseCase] = useState(EXAMPLES[0].useCase);

  const match = useMemo(
    () =>
      EXAMPLES.find(
        (item) =>
          item.ingredient === ingredient &&
          item.intent === intent &&
          item.model === model &&
          item.useCase === useCase,
      ),
    [ingredient, intent, model, useCase],
  );

  return (
    <section className="min-h-screen bg-bone pt-24 text-graphite-900">
      <div className="container-tight pb-16">
        <div className="mb-8 flex flex-col gap-5 border-b border-graphite-900/20 pb-7 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-4xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-teal-700/25 bg-teal-700/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-teal-800">
              <Lock className="h-4 w-4" />
              Ruta privada no indexada
            </div>
            <h1 className="text-4xl font-semibold leading-[1.02] tracking-[-0.03em] text-graphite-900 sm:text-6xl">
              Epicure aplicado a consulta nutricional
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-graphite-500">
              Prototipo basado en el paper arXiv:2605.22391 para explorar sustituciones,
              adherencia y adaptacion cultural sin inventar recomendaciones fuera de la fuente.
            </p>
          </div>
          <a
            href="https://arxiv.org/abs/2605.22391"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-graphite-900/20 px-5 py-3 text-sm font-semibold text-graphite-900 transition hover:border-teal-700 hover:text-teal-800"
          >
            <BookOpen className="h-4 w-4" />
            Paper original
          </a>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1.05fr_.95fr]">
          <article className="rounded-3xl border border-graphite-900/15 bg-white p-5 shadow-soft sm:p-7">
            <div className="mb-5 flex items-center justify-between gap-4">
              <h2 className="text-2xl font-semibold text-graphite-900">Explorador cerrado</h2>
              <span className="inline-flex items-center gap-2 rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-teal-800">
                <Search className="h-3.5 w-3.5" />
                Paper only
              </span>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <Picker label="Ingrediente" value={ingredient} values={unique("ingredient")} onChange={setIngredient} />
              <Picker label="Intencion" value={intent} values={unique("intent")} onChange={setIntent} />
              <Picker label="Modelo" value={model} values={unique("model")} onChange={setModel} />
              <Picker label="Uso en consulta" value={useCase} values={unique("useCase")} onChange={setUseCase} />
            </div>

            <div className="mt-6 rounded-2xl border border-graphite-900/10 bg-sand-200/45 p-5">
              {match ? (
                <>
                  <h3 className="text-2xl font-semibold text-graphite-900">{match.title}</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {match.returned.map((item) => (
                      <span key={item} className="rounded-full border border-graphite-900/10 bg-white px-3 py-1.5 text-sm text-graphite-700">
                        {item}
                      </span>
                    ))}
                  </div>
                  <Claim icon={<CheckCircle2 className="h-5 w-5" />} tone="ok" title="Claim recuperado" text={match.claim} source={match.source} />
                  <Claim
                    icon={<AlertTriangle className="h-5 w-5" />}
                    tone="warn"
                    title="Lectura nutricional"
                    text="Esto aun no es una recomendacion clinica. Epicure aporta compatibilidad culinaria; macros, patologias, alergias y objetivos deben validarse en una capa nutricional separada."
                    source="Arquitectura propuesta sobre el paper, no claim clinico del paper."
                  />
                </>
              ) : (
                <Claim
                  icon={<ShieldCheck className="h-5 w-5" />}
                  tone="block"
                  title="No cubierto por el paper"
                  text="Esta combinacion no existe en la base cerrada de ejemplos. El sistema no deberia improvisar una recomendacion."
                  source="Politica anti-alucinacion: sin evidencia recuperada, no hay claim."
                />
              )}
            </div>
          </article>

          <aside className="space-y-5">
            <div className="rounded-3xl border border-graphite-900/15 bg-ink-800 p-5 text-warmwhite shadow-soft sm:p-7">
              <h2 className="text-2xl font-semibold">Fuente de verdad</h2>
              <div className="mt-5 grid gap-3">
                {[
                  "Ingerir PDF, LaTeX y CSVs auxiliares del arXiv.",
                  "Guardar cada afirmacion con seccion, tabla o fichero fuente.",
                  "Responder solo con resultados recuperados de esa base.",
                  "Separar motor culinario de reglas nutricionales profesionales.",
                  "Si no hay fuente concreta, mostrar no cubierto.",
                ].map((item) => (
                  <div key={item} className="flex gap-3 rounded-2xl border border-white/10 bg-white/[.04] p-3 text-sm leading-relaxed text-warmwhite/82">
                    <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-teal-300" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-graphite-900/15 bg-white p-5 shadow-soft sm:p-7">
              <h2 className="text-2xl font-semibold text-graphite-900">Datos base del paper</h2>
              <div className="mt-5 divide-y divide-graphite-900/10">
                {FACTS.map(([number, text, source]) => (
                  <div key={number} className="grid grid-cols-[6rem_1fr] gap-4 py-3">
                    <strong className="font-mono text-lg text-teal-800">{number}</strong>
                    <p className="text-sm leading-relaxed text-graphite-500">
                      {text}
                      <span className="mt-1 block font-mono text-[11px] uppercase tracking-wider text-graphite-500/70">{source}</span>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>

        <div className="mt-5 grid gap-5 lg:grid-cols-4">
          {[
            ["Sustituir ingrediente", "Buscar candidatos culinariamente plausibles antes de filtrar por criterios de salud."],
            ["Adaptar receta", "Cambiar una receta real hacia perdida de grasa, diabetes o hipertension con trazabilidad."],
            ["Mover cocina", "Usar la logica SLERP para orientar un ingrediente hacia una cocina concreta."],
            ["Explicar al paciente", "Generar una explicacion corta con fuentes y sin prometer milagros."],
          ].map(([title, text]) => (
            <div key={title} className="rounded-3xl border border-graphite-900/15 bg-white p-5 shadow-soft">
              <Compass className="mb-4 h-5 w-5 text-teal-700" />
              <h3 className="text-lg font-semibold text-graphite-900">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-graphite-500">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Picker({
  label,
  value,
  values,
  onChange,
}: {
  label: string;
  value: string;
  values: string[];
  onChange: (value: string) => void;
}) {
  return (
    <label className="grid gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-graphite-500">
      {label}
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="h-12 rounded-2xl border border-graphite-900/15 bg-white px-4 text-sm normal-case tracking-normal text-graphite-900 outline-none transition focus:border-teal-700"
      >
        {values.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </label>
  );
}

function Claim({
  icon,
  tone,
  title,
  text,
  source,
}: {
  icon: React.ReactNode;
  tone: "ok" | "warn" | "block";
  title: string;
  text: string;
  source: string;
}) {
  const tones = {
    ok: "border-teal-700/20 bg-teal-50 text-teal-900",
    warn: "border-sand-400/50 bg-sand-200/60 text-graphite-900",
    block: "border-red-900/20 bg-red-50 text-red-950",
  };

  return (
    <div className={`mt-4 rounded-2xl border p-4 ${tones[tone]}`}>
      <div className="flex gap-3">
        <div className="mt-0.5 shrink-0">{icon}</div>
        <div>
          <h4 className="font-semibold">{title}</h4>
          <p className="mt-1 text-sm leading-relaxed opacity-85">{text}</p>
          <span className="mt-2 block font-mono text-[11px] uppercase tracking-wider opacity-60">{source}</span>
        </div>
      </div>
    </div>
  );
}
