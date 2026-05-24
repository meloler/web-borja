/**
 * Personaje circular come-puntos propio (guiño arcade, sin marcas registradas).
 * Animaciones 100% CSS para evitar problemas de interpolación con framer-motion.
 */
export function ArcadeEater() {
  const dots = Array.from({ length: 9 });

  return (
    <div
      aria-hidden
      className="relative isolate w-full max-w-2xl select-none overflow-hidden rounded-3xl border border-warmwhite/10 bg-gradient-to-b from-ink-700 to-ink-900 px-6 py-12 sm:py-16"
    >
      <div
        aria-hidden
        className="absolute inset-0 bg-grid-faint bg-[size:24px_24px] opacity-[0.08]"
      />
      <div className="relative h-20 sm:h-24">
        {/* línea con puntos */}
        <div className="absolute inset-x-4 top-1/2 flex -translate-y-1/2 items-center justify-between">
          {dots.map((_, i) => (
            <span
              key={i}
              className="animate-dot-pulse block h-2 w-2 rounded-full bg-lime-accent shadow-[0_0_8px_rgba(199,232,107,.7)]"
              style={{ animationDelay: `${i * 0.18}s` }}
            />
          ))}
        </div>

        {/* fantasmas (al final del recorrido) */}
        <Ghost
          color="#5ed3b3"
          className="absolute right-12 top-1/2 -translate-y-1/2"
          delay="0.4s"
        />
        <Ghost
          color="#c7e86b"
          className="absolute right-2 top-1/2 -translate-y-1/2"
          delay="0.8s"
        />

        {/* come-puntos: animación con CSS keyframe sobre `left` */}
        <div className="animate-pacster-run absolute top-1/2 -translate-y-1/2">
          <Pacster />
        </div>
      </div>

      <p className="relative mt-6 text-center text-xs uppercase tracking-[0.22em] text-warmwhite/55">
        High score · próximamente
      </p>
    </div>
  );
}

function Pacster() {
  return (
    <svg
      width="44"
      height="44"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      style={{ filter: "drop-shadow(0 0 12px rgba(94,211,179,.45))" }}
    >
      {/* cuerpo circular */}
      <circle cx="50" cy="50" r="42" fill="#5ed3b3" />
      {/* ojo */}
      <circle cx="58" cy="30" r="5" fill="#06231f" />
      {/* boca animada */}
      <path
        className="animate-pacster-chomp"
        fill="#06231f"
        d="M50 50 L92 30 A42 42 0 0 1 92 70 Z"
      />
    </svg>
  );
}

function Ghost({
  color,
  className = "",
  delay = "0s",
}: {
  color: string;
  className?: string;
  delay?: string;
}) {
  return (
    <div className={className}>
      <svg
        width="34"
        height="34"
        viewBox="0 0 100 100"
        className="animate-ghost-bob"
        style={{ animationDelay: delay }}
      >
        <path
          d="M10 60 C10 32 32 14 50 14 C68 14 90 32 90 60 L90 90 L78 82 L66 90 L54 82 L42 90 L30 82 L18 90 L10 82 Z"
          fill={color}
        />
        <circle cx="38" cy="50" r="6" fill="#f3f7f5" />
        <circle cx="62" cy="50" r="6" fill="#f3f7f5" />
        <circle cx="39" cy="51" r="3" fill="#06231f" />
        <circle cx="63" cy="51" r="3" fill="#06231f" />
      </svg>
    </div>
  );
}
