export function Cases() {
  return (
    <section id="casos" className="relative py-24 sm:py-28">
      <div className="container-tight">
        <div className="max-w-3xl">
          <span className="eyebrow">Procesos reales</span>
          <h2 className="h-section mt-4">Cambios reales, procesos reales</h2>
          <p className="lead mt-5">
            Cada evolución cuenta una historia distinta: salud, rendimiento,
            composición corporal, constancia y confianza.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { label: "Pérdida de grasa", text: "Cambio sostenido con alimentación flexible." },
            { label: "Recomposición corporal", text: "Más músculo, mejor composición y energía." },
            { label: "Rendimiento", text: "Mejor recuperación y energía en entrenamiento." },
          ].map((c, i) => (
            <article
              key={c.label}
              className="card relative aspect-[4/5] overflow-hidden p-0"
            >
              <div
                aria-hidden
                className={`absolute inset-0 bg-gradient-to-br ${
                  i === 0
                    ? "from-teal-500/20 via-ink-700 to-ink-900"
                    : i === 1
                      ? "from-mint-400/20 via-ink-700 to-ink-900"
                      : "from-sand-300/15 via-ink-700 to-ink-900"
                }`}
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-noise opacity-25 mix-blend-overlay"
              />
              <div className="relative flex h-full flex-col justify-end p-6">
                <span className="chip">{c.label}</span>
                <p className="mt-3 text-lg font-semibold text-warmwhite">
                  {c.text}
                </p>
                <p className="mt-2 text-xs text-warmwhite/55">
                  Foto reservada para imagen real con autorización.
                </p>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-8 max-w-3xl text-xs text-warmwhite/50">
          Los resultados son individuales y dependen del punto de partida,
          contexto, adherencia, entrenamiento y objetivos de cada persona.
        </p>
      </div>
    </section>
  );
}
