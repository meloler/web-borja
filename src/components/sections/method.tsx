import { METHOD } from "@/lib/content";

export function Method() {
  return (
    <section id="metodo" className="relative py-24 sm:py-28">
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-warmwhite/15 to-transparent"
      />
      <div className="container-tight">
        <div className="max-w-3xl">
          <span className="eyebrow">Método</span>
          <h2 className="h-section mt-4">Un método pensado para tu vida real</h2>
          <p className="lead mt-5">
            Un proceso sencillo que prioriza adherencia, criterio y
            sostenibilidad. Sin atajos imposibles ni promesas vacías.
          </p>
        </div>

        <ol className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {METHOD.map((s, i) => (
            <li key={s.n} className="card group">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-teal-300">
                  Paso {s.n}
                </span>
                <span
                  aria-hidden
                  className="text-5xl font-semibold leading-none text-teal-400/15"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-warmwhite">
                {s.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-warmwhite/70">
                {s.text}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-12 flex items-center justify-center">
          <p className="relative rounded-full border border-teal-400/30 bg-teal-500/5 px-6 py-3 text-center text-sm uppercase tracking-[0.22em] text-teal-200 sm:text-base">
            <span className="text-teal-300/70">Lo importante es</span>{" "}
            <span className="font-semibold text-teal-100">
              el después del después.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
