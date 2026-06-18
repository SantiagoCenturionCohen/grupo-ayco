export type CompanyPillar = "Sales" | "Service" | "Spare Parts" | "Financiación";

export type Company = {
  slug: string;
  shortName: string;
  name: string;
  tagline: string;
  description: string[];
  pillar: CompanyPillar;
  logo: string;
  externalUrl?: string;
};

export const GROUP_LOGO = "/logos/GRUPO AYCO LOGO.png";

export const SITE_URL = "https://www.grupoayco.com";

export const CONTACT = {
  email: "info@grupoayco.com",
  phone: "+54 9 3413 43-5298",
  phoneHref: "tel:+5493413435298",
  address: "Av. Eva Perón 8901, Rosario, Santa Fe, Argentina",
  addressShort: "Av. Eva Perón 8901 - Rosario",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Av.+Eva+Per%C3%B3n+8901,+Rosario,+Santa+Fe,+Argentina",
  hours: "Lunes a Sábados de 9 a 19 hs",
};

export const companies: Company[] = [
  {
    slug: "ayco-automotores",
    shortName: "Ayco",
    name: "Ayco Automotores",
    tagline: "Comercialización de unidades 0km y trade-in de vehículos seleccionados.",
    pillar: "Sales",
    logo: "/logos/LOGO AYCO.png",
    externalUrl: "https://aycoautomotores.com/",
    description: [
      "Nos especializamos en la Comercialización de Unidades 0km de marcas globales líderes y en la gestión de Trade-in de vehículos seleccionados, operando bajo un modelo de gestión independiente, con presencia regional a través de multisucursales.",
      "Contamos con un equipo de colaboradores especializados, distribuidos en una estructura departamental integral que asegura la excelencia en cada etapa del negocio.",
      "Nos basamos en un modelo de negocios omnicanal, con el cual generamos un ecosistema operativo consolidado. Respaldados por una sólida ingeniería comercial, financiera y de soporte técnico, nos convertimos en socios estratégicos de nuestros clientes a largo plazo.",
    ],
  },
  {
    slug: "alco-servicios-financieros",
    shortName: "Alco",
    name: "Alco Servicios Financieros",
    tagline: "Sistema integral de soluciones financieras para la adquisición de vehículos.",
    pillar: "Financiación",
    logo: "/logos/LOGO ALCO.png",
    externalUrl: "https://alco.com.ar",
    description: [
      "Nos dedicamos a facilitar la adquisición de vehículos a través de un Sistema Integral de Soluciones Financieras diseñado para cubrir los diversos perfiles de nuestros clientes.",
      "Entendemos que cada sector requiere una estructura de capital acorde a su modelo de negocio, por lo que ofrecemos una Arquitectura de Financiación Multitarget, que asegura el máximo aprovechamiento de cada oportunidad de negocio.",
    ],
  },
  {
    slug: "alva-service",
    shortName: "Alva",
    name: "Alva Service",
    tagline: "Mantenimiento preventivo y correctivo para mantener el negocio en movimiento.",
    pillar: "Service",
    logo: "/logos/LOGO ALVA.png",
    externalUrl: "https://www.alvaneumaticos.com/",
    description: [
      "Brindamos Servicios de Mantenimiento Preventivo y Correctivo, optimizando procesos funcionales para garantizar la continuidad operativa de cada vehículo de nuestros socios estratégicos.",
      "Nuestro enfoque es mantener el Negocio en Movimiento y reducir el Costo Total de la Propiedad, transformando el servicio técnico en la herramienta principal de solución integral.",
    ],
  },
  {
    slug: "alian-repuestos",
    shortName: "Alian",
    name: "Alian Repuestos",
    tagline: "Repuestos con disponibilidad inmediata y asesoramiento técnico especializado.",
    pillar: "Spare Parts",
    logo: "/logos/LOGO ALIAN.png",
    externalUrl: "https://alian.com.ar",
    description: [
      "Aseguramos la continuidad de la movilidad de nuestros clientes a través de una unidad de repuestos basada en la inteligencia operativa.",
      "Este modelo empresarial prevé una solución integral garantizando disponibilidad inmediata, soporte logístico y asesoramiento técnico especializado, eliminando las incertidumbres inherentes a la transición funcional de los vehículos.",
    ],
  },
];

export function getCompanyBySlug(slug: string): Company | undefined {
  return companies.find((c) => c.slug === slug);
}

export function getCompanyHref(company: Company): string {
  return company.externalUrl ?? `/empresas/${company.slug}`;
}

export function isExternalCompany(company: Company): boolean {
  return Boolean(company.externalUrl);
}

export const PILLAR_LABELS: Record<CompanyPillar, string> = {
  Sales: "Venta",
  Service: "Postventa",
  "Spare Parts": "Repuestos",
  Financiación: "Financiación",
};

export const MODEL_3S = [
  {
    key: "Sales" as const,
    label: "Sales",
    subtitle: "Venta",
    description:
      "Comercialización de unidades 0km y gestión de trade-in a través de Ayco Automotores.",
  },
  {
    key: "Service" as const,
    label: "Service",
    subtitle: "Postventa",
    description:
      "Mantenimiento preventivo y correctivo con Alva Service para máxima continuidad operativa.",
  },
  {
    key: "Spare Parts" as const,
    label: "Spare Parts",
    subtitle: "Repuestos",
    description:
      "Disponibilidad inmediata y soporte logístico con Alian Repuestos.",
  },
] as const;

export const NOSOTROS_PARAGRAPHS = [
  "Somos un grupo empresarial consolidado con más de 10 años de trayectoria ofreciendo soluciones integrales de movilidad en el mercado automotor del Gran Rosario y la región.",
  'Aportamos valor a la industria a través de la integración de nuestras Cuatro Empresas, acompañando al cliente durante todo el ciclo de vida del vehículo bajo el Modelo «3S»: Sales (Venta), Service (Postventa) y Spare Parts (Repuestos).',
  "Nuestro Modelo de Negocio está diseñado para consolidar y posicionar marcas globales de vanguardia. Ofrecemos una estructura comercial, administrativa y operativa sólida que garantiza eficiencia, estándares de calidad internacionales y una trazabilidad total en la experiencia del cliente.",
  "Nos proyectamos como el Socio Estratégico Ideal para distribuidores, terminales e importadores que buscan expandir marcas globales, impulsar nuevas tecnologías y apostar al crecimiento de la industria automotriz con una visión de largo plazo.",
];
