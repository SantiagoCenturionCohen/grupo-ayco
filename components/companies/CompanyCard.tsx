import Image from "next/image";
import Link from "next/link";
import {
  getCompanyHref,
  isExternalCompany,
  PILLAR_LABELS,
  type Company,
} from "@/lib/companies";
import { FadeIn } from "@/components/ui/FadeIn";

type CompanyCardProps = {
  company: Company;
  index?: number;
};

export function CompanyCard({ company, index = 0 }: CompanyCardProps) {
  const href = getCompanyHref(company);
  const external = isExternalCompany(company);

  const content = (
    <article className="group flex h-full flex-col border border-border bg-surface p-6 transition-all duration-300 hover:border-gold/50 hover:shadow-[0_0_30px_rgba(201,162,39,0.08)] md:p-8">
      <div className="mb-6 flex h-16 items-center">
        <Image
          src={company.logo}
          alt={`Logo de ${company.name}`}
          width={120}
          height={48}
          className="h-12 w-auto object-contain"
        />
      </div>
      <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-gold">
        {PILLAR_LABELS[company.pillar]}
      </p>
      <h3 className="mb-3 text-lg font-semibold normal-case tracking-normal text-foreground">
        {company.name}
      </h3>
      <p className="mb-6 flex-1 text-sm leading-relaxed text-muted">
        {company.tagline}
      </p>
      <span className="text-sm font-semibold uppercase tracking-widest text-gold transition-colors group-hover:text-gold-light">
        Conocer más →
      </span>
    </article>
  );

  return (
    <FadeIn delay={index * 100}>
      {external ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="block h-full"
        >
          {content}
        </a>
      ) : (
        <Link href={href} className="block h-full">
          {content}
        </Link>
      )}
    </FadeIn>
  );
}
