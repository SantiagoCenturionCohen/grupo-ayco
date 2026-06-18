import type { Metadata } from "next";
import { SITE_URL } from "./companies";

export const siteConfig = {
  name: "Grupo Ayco",
  description:
    "Grupo empresarial automotor del Gran Rosario con más de 10 años de trayectoria. Soluciones integrales de movilidad a través de cuatro empresas integradas.",
  url: SITE_URL,
  locale: "es_AR",
};

export function createMetadata({
  title,
  description,
  path = "/",
  noIndex = false,
}: {
  title?: string;
  description?: string;
  path?: string;
  noIndex?: boolean;
}): Metadata {
  const pageTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.name;
  const pageDescription = description ?? siteConfig.description;
  const canonical = `${siteConfig.url}${path}`;

  return {
    title: title ?? siteConfig.name,
    description: pageDescription,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical,
    },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      url: canonical,
      siteName: siteConfig.name,
      title: pageTitle,
      description: pageDescription,
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}
