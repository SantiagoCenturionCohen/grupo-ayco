import {
  companies,
  CONTACT,
  GROUP_LOGO,
  SITE_URL,
  type Company,
} from "./companies";

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Grupo Ayco",
    url: SITE_URL,
    logo: `${SITE_URL}${GROUP_LOGO}`,
    sameAs: [],
    // TODO: agregar redes sociales cuando estén disponibles
    contactPoint: {
      "@type": "ContactPoint",
      telephone: CONTACT.phone,
      email: CONTACT.email,
      contactType: "customer service",
      areaServed: "AR",
      availableLanguage: "Spanish",
    },
    subOrganization: companies.map((company) => companyJsonLd(company)),
  };
}

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["AutoDealer", "LocalBusiness"],
    name: "Grupo Ayco",
    url: SITE_URL,
    image: `${SITE_URL}${GROUP_LOGO}`,
    telephone: CONTACT.phone,
    email: CONTACT.email,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Av. Eva Perón 8901",
      addressLocality: "Rosario",
      addressRegion: "Santa Fe",
      addressCountry: "AR",
    },
    geo: {
      "@type": "GeoCoordinates",
      // TODO: completar coordenadas exactas
      latitude: -32.9442,
      longitude: -60.6505,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "09:00",
        closes: "19:00",
      },
    ],
    parentOrganization: {
      "@type": "Organization",
      name: "Grupo Ayco",
      url: SITE_URL,
    },
  };
}

function companyJsonLd(company: Company) {
  return {
    "@type": "Organization",
    name: company.name,
    url: company.externalUrl ?? `${SITE_URL}/empresas/${company.slug}`,
    logo: `${SITE_URL}${company.logo}`,
    parentOrganization: {
      "@type": "Organization",
      name: "Grupo Ayco",
      url: SITE_URL,
    },
  };
}

export function breadcrumbJsonLd(
  items: { name: string; path: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export function companyPageJsonLd(company: Company) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      companyJsonLd(company),
      breadcrumbJsonLd([
        { name: "Inicio", path: "/" },
        { name: "Empresas", path: "/empresas" },
        { name: company.name, path: `/empresas/${company.slug}` },
      ]),
    ],
  };
}
