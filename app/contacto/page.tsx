import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { FadeIn } from "@/components/ui/FadeIn";
import { Section } from "@/components/ui/Section";
import { CONTACT } from "@/lib/companies";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Contacto",
  description:
    "Contactá a Grupo Ayco. Av. Eva Perón 8901, Rosario. Teléfono, email y formulario de contacto.",
  path: "/contacto",
});

export default function ContactoPage() {
  return (
    <>
      <div className="bg-surface/30 pt-24 pb-12 md:pt-32">
        <Section containerClassName="!py-0" ariaLabel="Encabezado">
          <FadeIn>
            <div className="gold-line mb-6" />
            <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">
              Contacto
            </h1>
            <p className="mt-4 max-w-3xl text-lg text-muted">
              Estamos para acompañarte en cada etapa del ciclo de vida de tu
              vehículo.
            </p>
          </FadeIn>
        </Section>
      </div>

      <Section ariaLabel="Información de contacto y formulario">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <FadeIn>
            <h2 className="text-xl font-semibold text-gold">Datos de contacto</h2>
            <ul className="mt-8 space-y-6">
              <li>
                <p className="text-sm font-semibold uppercase tracking-widest text-muted">
                  Email
                </p>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="mt-1 block text-lg transition-colors hover:text-gold"
                >
                  {CONTACT.email}
                </a>
              </li>
              <li>
                <p className="text-sm font-semibold uppercase tracking-widest text-muted">
                  Teléfono
                </p>
                <a
                  href={CONTACT.phoneHref}
                  className="mt-1 block text-lg transition-colors hover:text-gold"
                >
                  {CONTACT.phone}
                </a>
              </li>
              <li>
                <p className="text-sm font-semibold uppercase tracking-widest text-muted">
                  Dirección
                </p>
                <a
                  href={CONTACT.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 block text-lg transition-colors hover:text-gold"
                >
                  {CONTACT.address}
                </a>
              </li>
              <li>
                <p className="text-sm font-semibold uppercase tracking-widest text-muted">
                  Horario
                </p>
                <p className="mt-1 text-lg">{CONTACT.hours}</p>
              </li>
            </ul>
          </FadeIn>

          <FadeIn delay={150}>
            <h2 className="mb-6 text-xl font-semibold text-gold">
              Envianos un mensaje
            </h2>
            <ContactForm />
          </FadeIn>
        </div>
      </Section>
    </>
  );
}
