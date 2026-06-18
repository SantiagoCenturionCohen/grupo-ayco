import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/ui/JsonLd";
import { organizationJsonLd, localBusinessJsonLd } from "@/lib/json-ld";
import { createMetadata } from "@/lib/metadata";
import "./globals.css";

export const metadata: Metadata = {
  ...createMetadata({
    title: "Inicio",
    description:
      "Grupo Ayco — Soluciones integrales de movilidad en el Gran Rosario. Cuatro empresas integradas: venta, financiación, postventa y repuestos.",
    path: "/",
  }),
  title: {
    default: "Grupo Ayco",
    template: "%s | Grupo Ayco",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es-AR">
      <body className="min-h-screen">
        <JsonLd data={[organizationJsonLd(), localBusinessJsonLd()]} />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
