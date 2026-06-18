"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  companies,
  getCompanyHref,
  GROUP_LOGO,
  isExternalCompany,
} from "@/lib/companies";

function CompanyLogoBox({
  company,
  label,
}: {
  company: (typeof companies)[0];
  label: string;
}) {
  const href = getCompanyHref(company);
  const external = isExternalCompany(company);

  const box = (
    <div className="flex flex-col items-center">
      <span className="mb-2 text-sm font-semibold text-foreground drop-shadow-sm">{label}</span>
      <div className="flex h-[100px] w-[130px] items-center justify-center border border-border bg-background/95 p-3 shadow-lg backdrop-blur-sm transition-colors hover:border-gold/60 sm:h-[120px] sm:w-[160px] sm:p-4">
        <Image
          src={company.logo}
          alt={`Isotipo y logotipo de ${company.name}`}
          width={120}
          height={60}
          className="h-auto max-h-[70px] w-full object-contain sm:max-h-[85px]"
        />
      </div>
    </div>
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="group block"
        aria-label={`Ir a ${company.name}`}
      >
        {box}
      </a>
    );
  }

  return (
    <Link href={href} className="group block" aria-label={`Ir a ${company.name}`}>
      {box}
    </Link>
  );
}

function ConnectorLines() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full"
      viewBox="0 0 600 500"
      fill="none"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden
    >
      {/* Ayco (top-left) → Grupo: horizontal + vertical en L */}
      <path
        d="M 195 95 H 300 V 225"
        stroke="currentColor"
        strokeWidth="2"
        className="text-foreground/80"
      />
      {/* Alco (top-right) → Grupo */}
      <path
        d="M 405 95 H 300 V 225"
        stroke="currentColor"
        strokeWidth="2"
        className="text-foreground/80"
      />
      {/* Alva (bottom-left) → Grupo */}
      <path
        d="M 195 405 H 300 V 275"
        stroke="currentColor"
        strokeWidth="2"
        className="text-foreground/80"
      />
      {/* Alian (bottom-right) → Grupo */}
      <path
        d="M 405 405 H 300 V 275"
        stroke="currentColor"
        strokeWidth="2"
        className="text-foreground/80"
      />
    </svg>
  );
}

export function Hero() {
  const [videoFailed, setVideoFailed] = useState(false);

  return (
    <section className="relative min-h-screen overflow-hidden pt-[73px]">
      {/* Video de fondo — ampliado y difuminado para ocultar marca y destacar el diseño */}
      <div className="absolute inset-0 overflow-hidden">
        {!videoFailed ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/videos/hero-poster.svg"
            className="absolute left-1/2 top-1/2 h-full w-full min-h-[120%] min-w-[120%] -translate-x-1/2 -translate-y-1/2 scale-[1.45] object-cover sm:scale-[1.55]"
            style={{ objectPosition: "center 45%" }}
            aria-hidden
            onError={() => setVideoFailed(true)}
          >
            <source src="/videos/hero-video.mp4" type="video/mp4" />
          </video>
        ) : (
          <div
            className="h-full w-full bg-cover bg-center"
            style={{ backgroundImage: "url(/videos/hero-poster.svg)" }}
            role="img"
            aria-label="Video de fondo Grupo Ayco"
          />
        )}
        <div className="absolute inset-0 bg-background/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/20 to-background/60" />
      </div>

      {/* Diagrama de integración sobre el video */}
      <div className="relative z-10 flex min-h-[calc(100vh-73px)] flex-col items-center justify-center px-4 py-10 sm:px-6">
        <h1 className="sr-only">Grupo Ayco — Soluciones integrales de movilidad</h1>

        {/* Diagrama de integración en rombo */}
        <div className="relative w-full max-w-[600px]" style={{ aspectRatio: "6/5" }}>
          <ConnectorLines />

          {/* Ayco — arriba izquierda */}
          <div className="absolute left-0 top-0">
            <CompanyLogoBox company={companies[0]} label="Ayco" />
          </div>

          {/* Alco — arriba derecha */}
          <div className="absolute right-0 top-0">
            <CompanyLogoBox company={companies[1]} label="Alco" />
          </div>

          {/* Grupo Ayco — centro */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="flex flex-col items-center">
              <span className="mb-2 text-sm font-semibold text-foreground drop-shadow-sm">Grupo</span>
              <div className="flex h-[110px] w-[140px] items-center justify-center border border-gold/50 bg-background/95 p-3 shadow-lg backdrop-blur-sm sm:h-[130px] sm:w-[170px] sm:p-4">
                <Image
                  src={GROUP_LOGO}
                  alt="Isotipo y logotipo de Grupo Ayco"
                  width={140}
                  height={80}
                  className="h-auto max-h-[80px] w-full object-contain sm:max-h-[95px]"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Alva — abajo izquierda */}
          <div className="absolute bottom-0 left-0">
            <CompanyLogoBox company={companies[2]} label="Alva" />
          </div>

          {/* Alian — abajo derecha */}
          <div className="absolute bottom-0 right-0">
            <CompanyLogoBox company={companies[3]} label="Alian" />
          </div>
        </div>
      </div>

      {/* Línea separadora inferior como en el PDF */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-border" aria-hidden />
    </section>
  );
}
