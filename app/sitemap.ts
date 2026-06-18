import type { MetadataRoute } from "next";
import { companies, SITE_URL } from "@/lib/companies";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/nosotros", "/empresas", "/contacto"].map(
    (path) => ({
      url: `${SITE_URL}${path}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.8,
    })
  );

  const companyRoutes = companies.map((company) => ({
    url: `${SITE_URL}/empresas/${company.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...companyRoutes];
}
