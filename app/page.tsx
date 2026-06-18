import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { Section } from "@/components/ui/Section";
import { Hero } from "@/components/home/Hero";
import { ContactForm } from "@/components/contact/ContactForm";
import { CONTACT, NOSOTROS_PARAGRAPHS } from "@/lib/companies";

export default function HomePage() {
  return (
    <>
      <Hero />

      <Section id="nosotros" ariaLabel="Sobre nosotros">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <FadeIn>
            <div className="gold-line mb-6" />
            <h2 className="text-2xl font-bold md:text-3xl">Nosotros</h2>
            <p className="mt-6 text-muted leading-relaxed">
              {NOSOTROS_PARAGRAPHS[0]}
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              {NOSOTROS_PARAGRAPHS[1]}
            </p>
            <div className="mt-8">
              <Button href="/nosotros" variant="outline">
                Conocer más
              </Button>
            </div>
          </FadeIn>
          <FadeIn delay={150}>
            <div className="border border-border bg-surface p-8 md:p-10">
              <h3 className="text-lg font-semibold text-gold">Modelo 3S</h3>
              <ul className="mt-6 space-y-4">
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-gold" />
                  <div>
                    <strong className="text-foreground">Sales</strong>
                    <span className="text-muted"> — Venta</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-gold" />
                  <div>
                    <strong className="text-foreground">Service</strong>
                    <span className="text-muted"> — Postventa</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-gold" />
                  <div>
                    <strong className="text-foreground">Spare Parts</strong>
                    <span className="text-muted"> — Repuestos</span>
                  </div>
                </li>
              </ul>
            </div>
          </FadeIn>
        </div>
      </Section>

      <Section id="contacto" className="bg-surface/50" ariaLabel="Contacto">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <FadeIn>
            <div className="gold-line mb-6" />
            <h2 className="text-2xl font-bold md:text-3xl">Contacto</h2>
            <ul className="mt-8 space-y-4 text-muted">
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="transition-colors hover:text-gold"
                >
                  {CONTACT.email}
                </a>
              </li>
              <li>
                <a
                  href={CONTACT.phoneHref}
                  className="transition-colors hover:text-gold"
                >
                  {CONTACT.phone}
                </a>
              </li>
              <li>
                <a
                  href={CONTACT.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-gold"
                >
                  {CONTACT.address}
                </a>
              </li>
              <li>{CONTACT.hours}</li>
            </ul>
            <div className="mt-8">
              <Button href="/contacto" variant="outline">
                Ir a contacto
              </Button>
            </div>
          </FadeIn>
          <FadeIn delay={150}>
            <ContactForm />
          </FadeIn>
        </div>
      </Section>
    </>
  );
}
