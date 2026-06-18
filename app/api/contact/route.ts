import { NextResponse } from "next/server";

type ContactBody = {
  name?: string;
  email?: string;
  message?: string;
};

function validateBody(body: ContactBody) {
  const errors: string[] = [];

  if (!body.name?.trim()) errors.push("El nombre es obligatorio.");
  if (!body.email?.trim()) errors.push("El email es obligatorio.");
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
    errors.push("El email no es válido.");
  }
  if (!body.message?.trim()) errors.push("El mensaje es obligatorio.");

  return errors;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactBody;
    const errors = validateBody(body);

    if (errors.length > 0) {
      return NextResponse.json({ error: errors.join(" ") }, { status: 400 });
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    const contactEmail = process.env.CONTACT_EMAIL ?? "info@grupoayco.com";

    if (resendApiKey) {
      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Grupo Ayco <onboarding@resend.dev>",
          to: [contactEmail],
          subject: `Contacto web — ${body.name}`,
          text: `Nombre: ${body.name}\nEmail: ${body.email}\n\nMensaje:\n${body.message}`,
        }),
      });

      if (!response.ok) {
        console.error("Resend error:", await response.text());
        return NextResponse.json(
          { error: "No se pudo enviar el mensaje. Intentá nuevamente." },
          { status: 500 }
        );
      }
    } else {
      // Sin API key: simular éxito para desarrollo / build sin configuración
      console.log("[Contact form] Mensaje recibido (sin RESEND_API_KEY):", {
        name: body.name,
        email: body.email,
        message: body.message,
      });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Error interno del servidor." },
      { status: 500 }
    );
  }
}
