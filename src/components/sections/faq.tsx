"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { FAQS } from "@/lib/content";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative pb-12 pt-6 sm:pb-14 sm:pt-8">
      <div className="container-tight grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <span className="eyebrow">Preguntas frecuentes</span>
          <h2 className="h-section mt-3">Lo que sueles preguntar</h2>
          <p className="mt-4 text-sm text-warmwhite/55">
            ¿Otra duda?{" "}
            <a
              href="https://wa.me/34676407670"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-300 underline-offset-4 hover:underline"
            >
              Escríbeme por WhatsApp
            </a>
            .
          </p>
        </div>

        <div className="lg:col-span-8">
          <ul className="divide-y divide-warmwhite/10 overflow-hidden rounded-2xl border border-warmwhite/10 bg-white/[.02]">
            {FAQS.slice(0, 7).map((f, i) => {
              const isOpen = open === i;
              return (
                <li key={f.q}>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-6 px-5 py-5 text-left transition-colors hover:bg-white/[.025] sm:px-6"
                  >
                    <span className="text-base font-medium text-warmwhite sm:text-lg">
                      {f.q}
                    </span>
                    <Plus
                      className={`h-5 w-5 shrink-0 text-teal-300 transition-transform ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`grid transition-all duration-300 ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-6 text-sm leading-relaxed text-warmwhite/75 sm:px-6 sm:text-base">
                        {f.a}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
