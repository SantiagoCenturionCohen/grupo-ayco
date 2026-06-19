import type { Metadata } from "next";
import { CompanyList } from "@/components/companies/CompanyList";
import { FadeIn } from "@/components/ui/FadeIn";
import { Section } from "@/components/ui/Section";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Empresas",
  description:
    "Las cuatro empresas de Grupo Ayco: Ayco Automotores, Alco Servicios Financieros, Alva Service y Alian Repuestos.",
  path: "/empresas",
});

export default function EmpresasPage() {
  return (
    <>
      <div className="bg-surface/30 pt-24 pb-12 md:pt-32">
        <Section containerClassName="!py-0" ariaLabel="Encabezado">
          <FadeIn>
            <div className="gold-line mb-6" />
            <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">
              Empresas
            </h1>
          </FadeIn>
        </Section>
      </div>

      <Section ariaLabel="Listado de empresas">
        <CompanyList showLogo={false} showPillar={false} />
      </Section>
    </>
  );
}
