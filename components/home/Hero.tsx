"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  companies,
  getCompanyHref,
  GROUP_LOGO,
  isExternalCompany,
  type Company,
} from "@/lib/companies";

type BoxPos = {
  left: string;
  top: string;
  width: string;
  height: string;
};

// Inspirado en el wireframe del PDF, pero con simetría espejo en ambos ejes:
// 4 empresas en grid 2×2 y la caja central (Grupo) superpuesta al cruce,
// como hub que integra a las 4. Sin rotación.
const COMPANY_BOXES: { company: Company; pos: BoxPos }[] = [
  { company: companies[0], pos: { left: "0%", top: "0%", width: "47%", height: "42%" } }, // Ayco
  { company: companies[1], pos: { left: "53%", top: "0%", width: "47%", height: "42%" } }, // Alco
  { company: companies[2], pos: { left: "0%", top: "58%", width: "47%", height: "42%" } }, // Alva
  { company: companies[3], pos: { left: "53%", top: "58%", width: "47%", height: "42%" } }, // Alian
];

const GRUPO_POS: BoxPos = { left: "33%", top: "35%", width: "34%", height: "30%" };

function CompanyBox({ company, pos }: { company: Company; pos: BoxPos }) {
  const href = getCompanyHref(company);
  const external = isExternalCompany(company);

  const inner = (
    <div className="flex h-full w-full items-center justify-center border border-border bg-background/85 p-3 backdrop-blur-sm transition-all duration-300 ease-out hover:-translate-y-2 hover:border-gold hover:bg-background/95 hover:shadow-[0_16px_34px_rgba(0,0,0,0.55)] sm:p-4">
      <Image
        src={company.logo}
        alt={`Isotipo y logotipo de ${company.name}`}
        width={160}
        height={160}
        className="h-[68px] w-auto max-w-[88%] object-contain transition-transform duration-300 ease-out group-hover:scale-105 sm:h-[88px]"
      />
    </div>
  );

  return (
    <div className="group absolute z-0 hover:z-20" style={pos}>
      {external ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="block h-full w-full"
          aria-label={`Ir a ${company.name}`}
        >
          {inner}
        </a>
      ) : (
        <Link
          href={href}
          className="block h-full w-full"
          aria-label={`Ir a ${company.name}`}
        >
          {inner}
        </Link>
      )}
    </div>
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
        <div className="absolute inset-0 bg-background/94" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/75 via-background/55 to-background/85" />
      </div>

      {/* Diagrama de integración sobre el video */}
      <div className="relative z-10 flex min-h-[calc(100vh-73px)] flex-col items-center justify-center px-4 py-10 sm:px-6">
        <h1 className="sr-only">Grupo Ayco — Soluciones integrales de movilidad</h1>

        {/* Rectángulos entrelazados según el wireframe del PDF */}
        <div
          className="relative w-full max-w-[620px]"
          style={{ aspectRatio: "6 / 5" }}
        >
          {COMPANY_BOXES.map(({ company, pos }) => (
            <CompanyBox key={company.slug} company={company} pos={pos} />
          ))}

          {/* Grupo Ayco — caja central (hub) */}
          <div className="absolute z-10" style={GRUPO_POS}>
            <div className="flex h-full w-full items-center justify-center border border-gold bg-background/90 p-3 shadow-[0_0_45px_rgba(201,162,39,0.25)] backdrop-blur-sm sm:p-4">
              <Image
                src={GROUP_LOGO}
                alt="Isotipo y logotipo de Grupo Ayco"
                width={180}
                height={125}
                className="h-[56px] w-auto max-w-[90%] object-contain sm:h-[72px]"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Línea separadora inferior como en el PDF */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-border" aria-hidden />
    </section>
  );
}
