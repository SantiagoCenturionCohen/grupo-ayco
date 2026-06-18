import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { JsonLd } from "@/components/ui/JsonLd";
import { Section } from "@/components/ui/Section";
import {
  companies,
  getCompanyBySlug,
  PILLAR_LABELS,
} from "@/lib/companies";
import { companyPageJsonLd } from "@/lib/json-ld";
import { createMetadata } from "@/lib/metadata";

type PageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return companies.map((company) => ({ slug: company.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const company = getCompanyBySlug(params.slug);
  if (!company) return {};

  return createMetadata({
    title: company.name,
    description: company.tagline,
    path: `/empresas/${company.slug}`,
  });
}

export default function CompanyPage({ params }: PageProps) {
  const company = getCompanyBySlug(params.slug);
  if (!company) notFound();

  return (
    <>
      <JsonLd data={companyPageJsonLd(company)} />

      <div className="bg-surface/30 pt-24 pb-12 md:pt-32">
        <Section containerClassName="!py-0" ariaLabel="Encabezado">
          <FadeIn>
            <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted">
              <ol className="flex flex-wrap items-center gap-2">
                <li>
                  <Link href="/" className="hover:text-gold">
                    Inicio
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li>
                  <Link href="/empresas" className="hover:text-gold">
                    Empresas
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li className="text-gold">{company.name}</li>
              </ol>
            </nav>
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:gap-10">
              <Image
                src={company.logo}
                alt={`Logo de ${company.name}`}
                width={200}
                height={80}
                className="h-16 w-auto object-contain md:h-20"
                priority
              />
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-gold">
                  {PILLAR_LABELS[company.pillar]}
                </p>
                <h1 className="mt-2 text-3xl font-bold md:text-4xl lg:text-5xl normal-case">
                  {company.name}
                </h1>
                <p className="mt-3 max-w-2xl text-lg text-muted normal-case tracking-normal">
                  {company.tagline}
                </p>
              </div>
            </div>
          </FadeIn>
        </Section>
      </div>

      <Section ariaLabel="Descripción de la empresa">
        <div className="mx-auto max-w-3xl space-y-6">
          {company.description.map((paragraph, index) => (
            <FadeIn key={index} delay={index * 80}>
              <p className="text-muted leading-relaxed normal-case tracking-normal">
                {paragraph}
              </p>
            </FadeIn>
          ))}
        </div>
        <FadeIn delay={200}>
          <div className="mt-12 flex flex-wrap gap-4">
            <Button href="/empresas" variant="outline">
              Ver todas las empresas
            </Button>
            <Button href="/contacto" variant="solid">
              Contactar
            </Button>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}
