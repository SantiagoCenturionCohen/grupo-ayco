import type { Metadata } from "next";
import { Model3S } from "@/components/home/Model3S";
import { FadeIn } from "@/components/ui/FadeIn";
import { Section } from "@/components/ui/Section";
import { NOSOTROS_PARAGRAPHS } from "@/lib/companies";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Nosotros",
  description:
    "Conocé Grupo Ayco: más de 10 años de trayectoria en soluciones integrales de movilidad en el Gran Rosario bajo el Modelo 3S.",
  path: "/nosotros",
});

export default function NosotrosPage() {
  return (
    <>
      <div className="bg-surface/30 pt-24 pb-12 md:pt-32">
        <Section containerClassName="!py-0" ariaLabel="Encabezado">
          <FadeIn>
            <div className="gold-line mb-6" />
            <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">
              Nosotros
            </h1>
            <p className="mt-4 max-w-3xl text-lg text-muted">
              Grupo empresarial consolidado del mercado automotor del Gran
              Rosario y la región.
            </p>
          </FadeIn>
        </Section>
      </div>

      <Section ariaLabel="Historia y modelo de negocio">
        <div className="mx-auto max-w-3xl space-y-6">
          {NOSOTROS_PARAGRAPHS.map((paragraph, index) => (
            <FadeIn key={index} delay={index * 80}>
              <p className="text-muted leading-relaxed normal-case tracking-normal">
                {paragraph}
              </p>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section className="bg-surface/50" ariaLabel="Modelo 3S">
        <FadeIn>
          <div className="mb-12 text-center">
            <div className="gold-line mx-auto mb-6" />
            <h2 className="text-2xl font-bold md:text-3xl">Modelo 3S</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted">
              Acompañamos al cliente durante todo el ciclo de vida del vehículo.
            </p>
          </div>
        </FadeIn>
        <Model3S />
      </Section>
    </>
  );
}
