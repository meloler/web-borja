"use client";

import { useState } from "react";
import { Check, Loader2, MessageCircle, Send } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/site";

type Status = "idle" | "loading" | "ok" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setError(null);

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const j = await res.json().catch(() => ({}));
        throw new Error(j.error ?? "No se pudo enviar. Inténtalo de nuevo.");
      }
      setStatus("ok");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Error desconocido");
    }
  }

  if (status === "ok") {
    return (
      <div className="card flex flex-col items-start gap-4 p-8">
        <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-teal-500/15 text-teal-300 ring-1 ring-teal-400/30">
          <Check className="h-5 w-5" />
        </span>
        <h2 className="text-2xl font-semibold text-warmwhite">
          ¡Mensaje enviado!
        </h2>
        <p className="text-sm text-warmwhite/70">
          Borja te responderá lo antes posible. Si necesitas algo urgente,
          puedes escribir directamente por WhatsApp.
        </p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          <MessageCircle className="h-4 w-4" /> Abrir WhatsApp
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="card flex flex-col gap-4 p-7">
      {/* Honeypot anti-spam */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Nombre" name="nombre" autoComplete="given-name" required />
        <Field
          label="Apellidos"
          name="apellidos"
          autoComplete="family-name"
          required
        />
      </div>

      <Field
        label="Correo electrónico"
        name="email"
        type="email"
        autoComplete="email"
        required
      />
      <Field
        label="Teléfono"
        name="telefono"
        type="tel"
        autoComplete="tel"
        required
      />

      <label className="flex flex-col gap-1.5">
        <span className="text-sm font-medium text-warmwhite/85">
          Cuéntame brevemente tu objetivo (opcional)
        </span>
        <textarea
          name="mensaje"
          rows={4}
          className="rounded-xl border border-warmwhite/10 bg-white/[.03] px-4 py-3 text-sm text-warmwhite outline-none ring-teal-400/40 placeholder:text-warmwhite/40 focus:ring-2"
          placeholder="Ej.: quiero mejorar mi composición corporal y prepararme para mi primer maratón."
        />
      </label>

      <label className="flex items-start gap-3 text-xs text-warmwhite/65">
        <input
          type="checkbox"
          name="acepto"
          required
          className="mt-0.5 h-4 w-4 rounded border-warmwhite/30 bg-transparent text-teal-500 focus:ring-teal-400"
        />
        <span>
          Acepto que los datos enviados se traten únicamente para responder a
          esta consulta.
        </span>
      </label>

      <button
        type="submit"
        disabled={status === "loading"}
        className="btn-primary mt-2 disabled:opacity-70"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" /> Enviando…
          </>
        ) : (
          <>
            <Send className="h-4 w-4" /> Enviar mensaje
          </>
        )}
      </button>

      {error && (
        <p className="text-sm text-red-300/90" role="alert">
          {error} ·{" "}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Escríbeme por WhatsApp
          </a>
        </p>
      )}
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-sm font-medium text-warmwhite/85">
        {label}
        {required && <span className="ml-1 text-teal-300">*</span>}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        autoComplete={autoComplete}
        className="rounded-xl border border-warmwhite/10 bg-white/[.03] px-4 py-3 text-sm text-warmwhite outline-none ring-teal-400/40 placeholder:text-warmwhite/40 focus:ring-2"
      />
    </label>
  );
}
