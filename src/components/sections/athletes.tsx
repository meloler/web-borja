import { ATHLETES } from "@/lib/content";

export function Athletes() {
  return (
    <section id="deportistas" className="relative py-24 sm:py-28">
      <div className="container-tight">
        <div className="max-w-3xl">
          <span className="eyebrow">Confianza profesional</span>
          <h2 className="h-section mt-4">
            Deportistas que han confiado en Borja
          </h2>
          <p className="lead mt-5">
            La nutrición también forma parte del rendimiento. Borja ha
            acompañado a deportistas que buscan cuidar su energía, composición
            corporal, recuperación y hábitos dentro y fuera del entrenamiento.
          </p>
          <p className="mt-3 text-sm text-warmwhite/55">
            Entre los perfiles deportivos que han confiado en su trabajo se
            encuentran futbolistas profesionales y deportistas vinculados al
            fútbol nacional y al entorno deportivo de Gran Canaria.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ATHLETES.map((a) => (
            <article key={a.name} className="card">
              <div className="flex items-center gap-4">
                <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full bg-gradient-to-br from-teal-500/30 to-ink-700 ring-1 ring-teal-400/30">
                  {/* Inicial mientras no haya foto autorizada */}
                  <span className="absolute inset-0 flex items-center justify-center text-lg font-semibold text-teal-100">
                    {a.name
                      .split(" ")
                      .map((p) => p[0])
                      .slice(0, 2)
                      .join("")}
                  </span>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-warmwhite">
                    {a.name}
                  </h3>
                  <p className="text-xs uppercase tracking-[0.15em] text-teal-300/80">
                    {a.role}
                  </p>
                </div>
              </div>
              <p className="mt-5 text-sm leading-relaxed text-warmwhite/70">
                {a.note}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
