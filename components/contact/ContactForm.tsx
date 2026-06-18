"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";

type FormStatus = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error ?? "Error al enviar el mensaje.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Error al enviar el mensaje."
      );
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6"
      noValidate
      aria-label="Formulario de contacto"
    >
      <div>
        <label htmlFor="name" className="mb-2 block text-sm font-medium text-foreground">
          Nombre
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          autoComplete="name"
          className="w-full border border-border bg-surface px-4 py-3 text-foreground transition-colors focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
          aria-required="true"
        />
      </div>

      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          autoComplete="email"
          className="w-full border border-border bg-surface px-4 py-3 text-foreground transition-colors focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
          aria-required="true"
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground">
          Mensaje
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full resize-y border border-border bg-surface px-4 py-3 text-foreground transition-colors focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
          aria-required="true"
        />
      </div>

      <Button
        type="submit"
        variant="solid"
        disabled={status === "loading"}
        aria-busy={status === "loading"}
      >
        {status === "loading" ? "Enviando..." : "Enviar mensaje"}
      </Button>

      {status === "success" && (
        <p role="status" className="text-sm text-gold">
          ¡Mensaje enviado! Nos pondremos en contacto a la brevedad.
        </p>
      )}

      {status === "error" && (
        <p role="alert" className="text-sm text-red-400">
          {errorMessage}
        </p>
      )}
    </form>
  );
}
