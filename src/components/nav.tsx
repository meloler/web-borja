"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { Logo } from "./logo";
import { WHATSAPP_URL } from "@/lib/site";

const LINKS = [
  { href: "/#metodo", label: "Método" },
  { href: "/#servicios", label: "Servicios" },
  { href: "/#bonos", label: "Bonos" },
  { href: "/#sobre-borja", label: "Sobre Borja" },
  { href: "/#deportistas", label: "Deportistas" },
  { href: "/blog/", label: "Blog" },
  { href: "/contacto/", label: "Contacto" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "border-b border-warmwhite/10 bg-ink-900/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="container-tight flex h-16 items-center justify-between">
        <Link
          href="/"
          aria-label="Inicio – Borja Galván Nutrición"
          className="-ml-1 rounded-lg"
        >
          <Logo />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Principal">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-warmwhite/75 transition-colors hover:text-warmwhite"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary btn-sm"
          >
            <MessageCircle className="h-4 w-4" />
            Hablar por WhatsApp
          </a>
        </div>

        <button
          type="button"
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-warmwhite/10 bg-white/[.04] text-warmwhite"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div
          id="mobile-menu"
          className="lg:hidden border-t border-warmwhite/10 bg-ink-900/95 backdrop-blur-xl"
        >
          <nav className="container-tight flex flex-col py-5" aria-label="Móvil">
            {LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-warmwhite/5 py-4 text-base text-warmwhite/85"
              >
                {l.label}
              </Link>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-5"
              onClick={() => setOpen(false)}
            >
              <MessageCircle className="h-4 w-4" />
              Hablar por WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
