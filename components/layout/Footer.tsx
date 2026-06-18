import Link from "next/link";
import Image from "next/image";
import { companies, CONTACT, GROUP_LOGO, getCompanyHref, isExternalCompany } from "@/lib/companies";
import { Container } from "@/components/ui/Container";

const footerNav = [
  { href: "/", label: "Inicio" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/empresas", label: "Empresas" },
  { href: "/contacto", label: "Contacto" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background">
      <Container className="py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link href="/">
              <Image
                src={GROUP_LOGO}
                alt="Logo de Grupo Ayco"
                width={160}
                height={56}
                className="h-12 w-auto"
              />
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Soluciones integrales de movilidad en el Gran Rosario y la región.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-sm font-semibold text-gold">Navegación</h2>
            <ul className="space-y-2">
              {footerNav.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-sm font-semibold text-gold">Empresas</h2>
            <ul className="space-y-2">
              {companies.map((company) => {
                const href = getCompanyHref(company);
                const external = isExternalCompany(company);
                return (
                  <li key={company.slug}>
                    {external ? (
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-muted transition-colors hover:text-gold"
                      >
                        {company.name}
                      </a>
                    ) : (
                      <Link
                        href={href}
                        className="text-sm text-muted transition-colors hover:text-gold"
                      >
                        {company.name}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-sm font-semibold text-gold">Contacto</h2>
            <ul className="space-y-2 text-sm text-muted">
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="transition-colors hover:text-gold"
                >
                  {CONTACT.email}
                </a>
              </li>
              <li>
                <a
                  href={CONTACT.phoneHref}
                  className="transition-colors hover:text-gold"
                >
                  {CONTACT.phone}
                </a>
              </li>
              <li>
                <a
                  href={CONTACT.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-gold"
                >
                  {CONTACT.addressShort}
                </a>
              </li>
              <li>{CONTACT.hours}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center text-xs text-muted">
          <p>© {year} Grupo Ayco. Todos los derechos reservados.</p>
        </div>
      </Container>
    </footer>
  );
}
