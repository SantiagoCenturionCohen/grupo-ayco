import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Grupo Ayco",
    short_name: "Grupo Ayco",
    description:
      "Soluciones integrales de movilidad en el Gran Rosario y la región.",
    start_url: "/",
    display: "standalone",
    background_color: "#0A0A0A",
    theme_color: "#0A0A0A",
    lang: "es-AR",
    // TODO: agregar icons adicionales si se requiere PWA completa
  };
}
