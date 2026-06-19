"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import { companies, getCompanySectionHref, GROUP_LOGO } from "@/lib/companies";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Inicio" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/empresas", label: "Empresas", hasDropdown: true },
  { href: "/contacto", label: "Contacto" },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [empresasOpen, setEmpresasOpen] = useState(false);
  const [mobileEmpresasOpen, setMobileEmpresasOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dropdownId = useId();

  const isEmpresasActive =
    pathname === "/empresas" || pathname.startsWith("/empresas/");

  const closeDropdown = useCallback(() => setEmpresasOpen(false), []);

  const closeMobileMenu = useCallback(() => {
    setMobileOpen(false);
    setMobileEmpresasOpen(false);
    setEmpresasOpen(false);
  }, []);

  useEffect(() => {
    closeMobileMenu();
  }, [pathname, closeMobileMenu]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        closeDropdown();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [closeDropdown]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href === "/empresas") return isEmpresasActive;
    return pathname.startsWith(href);
  };

  const linkClass = (active: boolean) =>
    cn(
      "transition-colors",
      active ? "text-gold" : "text-foreground hover:text-gold"
    );

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-background">
      <nav
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-[72px] sm:px-6 lg:px-8"
        aria-label="Navegación principal"
      >
        {/* Logo izquierda — ISOTIPO LOGOTIPO Grupo Ayco */}
        <Link href="/" className="relative flex shrink-0 items-center gap-3">
          <Image
            src={GROUP_LOGO}
            alt="Isotipo y logotipo de Grupo Ayco"
            width={160}
            height={52}
            className="h-9 w-auto sm:h-11"
            priority
          />
        </Link>

        {/* Desktop: Inicio - Nosotros - Empresas - Contacto */}
        <div className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <div key={item.href}>
              {item.hasDropdown ? (
                <div
                  ref={dropdownRef}
                  className="relative"
                  onMouseEnter={() => setEmpresasOpen(true)}
                  onMouseLeave={() => setEmpresasOpen(false)}
                  onKeyDown={(e) => {
                    if (e.key === "Escape") setEmpresasOpen(false);
                  }}
                >
                  <button
                    type="button"
                    className={cn(linkClass(isEmpresasActive), "text-sm")}
                    aria-expanded={empresasOpen}
                    aria-haspopup="menu"
                    aria-controls={dropdownId}
                    onClick={() => setEmpresasOpen((v) => !v)}
                    onFocus={() => setEmpresasOpen(true)}
                  >
                    {item.label}
                  </button>

                  <div
                    id={dropdownId}
                    role="menu"
                    className={cn(
                      "absolute right-0 top-full mt-3 min-w-[280px] border border-border bg-surface py-2 shadow-xl transition-all",
                      empresasOpen
                        ? "visible translate-y-0 opacity-100"
                        : "invisible -translate-y-1 opacity-0"
                    )}
                  >
                    {companies.map((company) => (
                      <Link
                        key={company.slug}
                        href={getCompanySectionHref(company)}
                        role="menuitem"
                        className="flex items-center gap-3 px-4 py-3 text-sm text-foreground transition-colors hover:bg-gold/10 hover:text-gold focus:bg-gold/10 focus:text-gold focus:outline-none"
                        onClick={closeDropdown}
                      >
                        <Image
                          src={company.logo}
                          alt={`Isotipo de ${company.name}`}
                          width={32}
                          height={32}
                          className="h-8 w-8 object-contain"
                        />
                        <span>{company.name}</span>
                      </Link>
                    ))}
                    <div className="mx-4 my-2 h-px bg-border" />
                    <Link
                      href="/empresas"
                      role="menuitem"
                      className="block px-4 py-2 text-sm font-semibold text-gold hover:text-gold-light"
                    >
                      Ver todas
                    </Link>
                  </div>
                </div>
              ) : (
                <Link
                  href={item.href}
                  className={cn(linkClass(isActive(item.href)), "text-sm")}
                  aria-current={isActive(item.href) ? "page" : undefined}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center text-foreground md:hidden"
          aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? (
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          ) : (
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Línea separadora como en el PDF */}
      <div className="h-px w-full bg-border" aria-hidden />

      {/* Mobile drawer */}
      <div
        className={cn(
          "fixed inset-0 top-[65px] z-40 overflow-y-auto bg-background transition-transform duration-300 md:hidden",
          mobileOpen ? "translate-x-0" : "pointer-events-none translate-x-full"
        )}
        aria-hidden={!mobileOpen}
      >
        <div className="flex flex-col px-6 py-8">
          {navItems.map((item) =>
            item.hasDropdown ? (
              <div key={item.href} className="border-b border-border">
                <button
                  type="button"
                  className={cn(
                    "flex w-full items-center justify-between py-4 text-base",
                    isEmpresasActive ? "text-gold" : "text-foreground"
                  )}
                  aria-expanded={mobileEmpresasOpen}
                  onClick={() => setMobileEmpresasOpen((v) => !v)}
                >
                  {item.label}
                  <svg
                    className={cn("h-4 w-4 transition-transform", mobileEmpresasOpen && "rotate-180")}
                    viewBox="0 0 12 12"
                    fill="currentColor"
                    aria-hidden
                  >
                    <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" />
                  </svg>
                </button>
                {mobileEmpresasOpen && (
                  <div className="pb-4 pl-4">
                    {companies.map((company) => (
                      <Link
                        key={company.slug}
                        href={getCompanySectionHref(company)}
                        className="flex items-center gap-3 py-3 text-muted hover:text-gold"
                        onClick={closeMobileMenu}
                      >
                        <Image
                          src={company.logo}
                          alt={`Isotipo de ${company.name}`}
                          width={28}
                          height={28}
                          className="h-7 w-7 object-contain"
                        />
                        <span>{company.name}</span>
                      </Link>
                    ))}
                    <Link
                      href="/empresas"
                      className="mt-2 block py-2 text-sm text-gold"
                      onClick={closeMobileMenu}
                    >
                      Ver todas
                    </Link>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "border-b border-border py-4 text-base",
                  isActive(item.href) ? "text-gold" : "text-foreground"
                )}
                onClick={closeMobileMenu}
              >
                {item.label}
              </Link>
            )
          )}
        </div>
      </div>
    </header>
  );
}
