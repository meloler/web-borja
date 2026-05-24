import Image from "next/image";

const PLAYERS = [
  { name: "Alberto Moleiro",  file: "moleiro.jpg" },
  { name: "Jefte Betancor",   file: "jefte.png" },
  { name: "Enrique Clemente", file: "enrique-clemente.png" },
  { name: "Kirian Rodríguez", file: "kirian.webp" },
  { name: "Álex Suárez",      file: "alex-suarez.png" },
  { name: "Dani Ojeda",       file: "dani-ojeda.png" },
];

export function SocialProof() {
  // Duplicamos la lista para el loop infinito sin salto
  const track = [...PLAYERS, ...PLAYERS];

  return (
    <div className="border-y border-warmwhite/8 bg-white/[.02] py-6 overflow-hidden">
      <p className="text-center text-xs uppercase tracking-[0.22em] text-warmwhite/35 mb-5">
        Han confiado en Borja
      </p>

      {/* Carrusel */}
      <div className="relative">
        {/* Degradados de fade a los lados */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-ink-900 to-transparent"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-ink-900 to-transparent"
        />

        <div className="flex animate-marquee gap-8 hover:[animation-play-state:paused]">
          {track.map((p, i) => (
            <div
              key={`${p.name}-${i}`}
              className="flex shrink-0 flex-col items-center gap-2.5"
            >
              <div className="relative h-16 w-16 overflow-hidden rounded-full ring-2 ring-teal-400/25 ring-offset-2 ring-offset-ink-900">
                <Image
                  src={`/players/${p.file}`}
                  alt={p.name}
                  fill
                  sizes="64px"
                  className="object-cover object-top"
                />
              </div>
              <span className="text-xs text-warmwhite/65 whitespace-nowrap">
                {p.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
