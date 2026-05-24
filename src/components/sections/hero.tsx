"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/site";
import { WhatsAppIcon } from "@/components/whatsapp-icon";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-28 sm:pt-32 lg:pt-36">
      <div aria-hidden className="absolute inset-0 -z-10 bg-radial-fade" />
      <div aria-hidden className="absolute inset-0 -z-10 opacity-[0.06] bg-grid-faint bg-[size:48px_48px]" />
      <div aria-hidden className="absolute -top-32 left-1/2 -z-10 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-teal-500/10 blur-3xl" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-noise opacity-[0.5] mix-blend-overlay" />

      <div className="container-tight pb-12 sm:pb-14 lg:pb-16">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex max-w-3xl flex-col items-center text-center"
        >
          <span className="chip">
            <Sparkles className="h-3.5 w-3.5 text-teal-300" />
            Dietista-nutricionista · Gran Canaria
          </span>

          <h1 className="h-display mt-6">
            Come mejor,{" "}
            <span className="bg-gradient-to-r from-teal-200 via-mint-400 to-teal-400 bg-clip-text text-transparent">
              rinde más
            </span>{" "}
            y mantén el cambio
          </h1>

          <p className="lead mt-5 max-w-xl">
            Plan personalizado, seguimiento real y sin pasar hambre.
            Online para toda España — y presencial en Gran Canaria.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <WhatsAppIcon />
              Pedir cita por WhatsApp
            </a>
            <a href="#bonos" className="btn-ghost">
              Ver bonos y precios
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
