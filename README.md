# Grupo Ayco — Sitio web institucional

Sitio web institucional de **Grupo Ayco**, grupo empresarial automotor del Gran Rosario (Argentina).

## Requisitos

- Node.js 18+
- npm

## Desarrollo local

```bash
npm install
npm run dev
```

Abrí [http://localhost:3000](http://localhost:3000).

## Build de producción

```bash
npm run build
npm start
```

El proyecto está listo para deploy en **Vercel** sin configuración adicional.

## Estructura del proyecto

```
app/
  layout.tsx              # Layout global, metadata base, JSON-LD
  page.tsx                # Inicio
  nosotros/page.tsx
  empresas/page.tsx
  empresas/[slug]/page.tsx
  contacto/page.tsx
  api/contact/route.ts
  sitemap.ts
  robots.ts
  manifest.ts
  opengraph-image.tsx
components/
  layout/                 # Navbar, Footer
  ui/                     # Button, Section, Container, FadeIn
  home/                   # Hero, IntegrationDiagram, Model3S
  companies/              # CompanyCard, CompanyGrid
  contact/                # ContactForm
lib/
  companies.ts            # Fuente de verdad de empresas y datos de contacto
  metadata.ts
  json-ld.ts
public/
  logos/                  # Logos del grupo y empresas
  videos/                 # Video y poster del hero
```

## Personalización

### Video del hero

Reemplazá el archivo en `public/videos/hero-video.mp4` con el video definitivo si es necesario. El poster de respaldo está en `public/videos/hero-poster.svg`.

### Open Graph image

La imagen OG se genera dinámicamente en `app/opengraph-image.tsx`. Para usar una imagen estática, agregá `public/og.jpg` y configurá `openGraph.images` en `lib/metadata.ts`.

### Coordenadas del mapa (JSON-LD)

Editá las coordenadas en `lib/json-ld.ts` → `localBusinessJsonLd()` → `geo.latitude` / `geo.longitude` con los valores exactos de Google Maps.

### URLs externas de empresas

En `lib/companies.ts`, descomentá y completá `externalUrl` para cada empresa que tenga web propia:

```ts
externalUrl: "https://ejemplo.com",
```

Si `externalUrl` está definido, los enlaces abren esa URL en nueva pestaña. Si no, enlazan a `/empresas/[slug]`.

### Formulario de contacto

El endpoint `app/api/contact/route.ts` soporta [Resend](https://resend.com). Variables de entorno **opcionales**:

| Variable | Descripción |
|----------|-------------|
| `RESEND_API_KEY` | API key de Resend |
| `CONTACT_EMAIL` | Email destino (default: `info@grupoayco.com`) |

Sin `RESEND_API_KEY`, el formulario responde con éxito y registra el mensaje en consola (útil para desarrollo). El build **no falla** sin estas variables.

### Favicon

Los iconos están en `app/icon.png` y `app/apple-icon.png` (copiados del logo principal). Reemplazalos por versiones optimizadas si es necesario.

### Dominio

Actualizá `SITE_URL` en `lib/companies.ts` con el dominio de producción.

## Logos disponibles

| Archivo | Uso |
|---------|-----|
| `GRUPO AYCO LOGO.png` | Logo principal del grupo |
| `LOGO AYCO.png` | Ayco Automotores |
| `LOGO ALCO.png` | Alco Servicios Financieros |
| `LOGO ALVA.png` | Alva Service |
| `LOGO ALIAN.png` | Alian Repuestos |

## Licencia

© Grupo Ayco. Todos los derechos reservados.
