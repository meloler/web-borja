import { NextResponse } from "next/server";

export const runtime = "nodejs";

type Body = {
  nombre?: string;
  apellidos?: string;
  email?: string;
  telefono?: string;
  mensaje?: string;
  acepto?: string | boolean;
  company?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  let body: Body;
  try {
    body = (await req.json()) as Body;
  } catch {
    return NextResponse.json({ error: "Petición no válida" }, { status: 400 });
  }

  // Honeypot
  if (body.company) {
    return NextResponse.json({ ok: true });
  }

  const nombre = body.nombre?.trim();
  const apellidos = body.apellidos?.trim();
  const email = body.email?.trim();
  const telefono = body.telefono?.trim();

  if (!nombre || !apellidos || !email || !telefono || !body.acepto) {
    return NextResponse.json(
      { error: "Faltan campos obligatorios" },
      { status: 400 },
    );
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Email no válido" }, { status: 400 });
  }

  const to = process.env.CONTACT_TO_EMAIL ?? "hola@borjagalvannutricion.com";
  const apiKey = process.env.RESEND_API_KEY;

  const subject = `Nueva consulta web · ${nombre} ${apellidos}`;
  const text = [
    `Nombre: ${nombre} ${apellidos}`,
    `Email: ${email}`,
    `Teléfono: ${telefono}`,
    "",
    `Mensaje:`,
    body.mensaje?.trim() || "(sin mensaje adicional)",
  ].join("\n");

  // Si no hay clave de Resend, registramos en logs (la web no rompe en desarrollo).
  if (!apiKey) {
    console.info("[contact] Nueva consulta (sin RESEND_API_KEY configurada):\n", text);
    return NextResponse.json({ ok: true });
  }

  try {
    const r = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: "Web Borja Galván <web@borjagalvannutricion.com>",
        to: [to],
        reply_to: email,
        subject,
        text,
      }),
    });
    if (!r.ok) {
      const e = await r.text();
      console.error("[contact] Resend error", r.status, e);
      return NextResponse.json(
        { error: "No se pudo enviar el mensaje" },
        { status: 502 },
      );
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] error", err);
    return NextResponse.json(
      { error: "No se pudo enviar el mensaje" },
      { status: 500 },
    );
  }
}
