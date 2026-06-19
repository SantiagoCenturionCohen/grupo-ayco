import Link from "next/link";
import Image from "next/image";
import { FadeIn } from "@/components/ui/FadeIn";
import {
  companies,
  getCompanyHref,
  isExternalCompany,
  PILLAR_LABELS,
} from "@/lib/companies";

type CompanyListProps = {
  showLogo?: boolean;
  showPillar?: boolean;
};

export function CompanyList({
  showLogo = true,
  showPillar = true,
}: CompanyListProps = {}) {
  return (
    <div className="mx-auto max-w-3xl space-y-16">
      {companies.map((company, index) => {
        const href = getCompanyHref(company);
        const external = isExternalCompany(company);

        return (
          <FadeIn key={company.slug} delay={index * 80}>
            <article
              id={company.slug}
              className="scroll-mt-28 border-b border-border pb-12 last:border-b-0 last:pb-0"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
                {showLogo && (
                  <Image
                    src={company.logo}
                    alt={`Logo de ${company.name}`}
                    width={140}
                    height={56}
                    className="h-12 w-auto object-contain"
                  />
                )}
                <div>
                  {showPillar && (
                    <p className="text-xs font-semibold uppercase tracking-widest text-gold">
                      {PILLAR_LABELS[company.pillar]}
                    </p>
                  )}
                  <h3 className="text-2xl font-bold normal-case tracking-normal md:text-3xl [p+&]:mt-1">
                    {company.name}
                  </h3>
                </div>
              </div>

              <ul className="mt-6 space-y-4">
                {company.description.map((paragraph, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                    <p className="text-muted leading-relaxed normal-case tracking-normal">
                      {paragraph}
                    </p>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold uppercase tracking-widest">
                <Link
                  href={`/empresas/${company.slug}`}
                  className="text-gold transition-colors hover:text-gold-light"
                >
                  Ver más →
                </Link>
                {external && (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted transition-colors hover:text-gold"
                  >
                    Visitar sitio ↗
                  </a>
                )}
              </div>
            </article>
          </FadeIn>
        );
      })}
    </div>
  );
}
