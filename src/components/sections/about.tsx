import Image from "next/image";
import { Award, GraduationCap, Heart, Trophy } from "lucide-react";

const CREDENTIALS = [
  { icon: GraduationCap, label: "Dietista-nutricionista" },
  { icon: Trophy, label: "Nutrición deportiva" },
  { icon: Heart, label: "Nutrición clínica" },
  { icon: Award, label: "Consulta online y presencial" },
];

export function About() {
  return (
    <section id="sobre-borja" className="relative py-12 sm:py-14">
      <div className="container-tight">
        {/* Cabecera con foto pequeña inline */}
        <div className="flex items-center gap-5">
          <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl border border-warmwhite/10 sm:h-24 sm:w-24">
            <Image
              src="/borja-galvan.png"
              alt="Borja Galván, dietista-nutricionista en Gran Canaria"
              fill
              sizes="96px"
              className="object-cover object-top"
              priority
            />
          </div>
          <div>
            <span className="eyebrow">Sobre Borja</span>
            <h2 className="h-section mt-1">
              Dietista-nutricionista, deportista y defensor de la comida real
            </h2>
          </div>
        </div>

        <div className="mt-6">
          <p className="text-base leading-relaxed text-warmwhite/80">
            Dietista-nutricionista en Gran Canaria, especializado en nutrición
            deportiva y composición corporal. El mejor plan no es el más
            perfecto sobre papel, sino el que puedes mantener en tu vida real.
          </p>

          <ul className="mt-8 grid grid-cols-2 gap-3">
            {CREDENTIALS.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex items-center gap-3 rounded-xl border border-warmwhite/10 bg-white/[.03] px-4 py-3"
              >
                <Icon className="h-4 w-4 text-teal-300" />
                <span className="text-sm text-warmwhite/85">{label}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-warmwhite/55">
            Consulta presencial principal en CrossFit 928 (Las Palmas de Gran
            Canaria). Colaboración con Signa Center.
          </p>
        </div>
      </div>

    </section>
  );
}
