import { FadeIn } from "@/components/ui/FadeIn";
import { MODEL_3S } from "@/lib/companies";

export function Model3S() {
  return (
    <div className="grid gap-6 md:grid-cols-3 md:gap-8">
      {MODEL_3S.map((item, index) => (
        <FadeIn key={item.key} delay={index * 100}>
          <article className="flex h-full flex-col border border-border bg-surface p-6 text-center md:p-8">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-gold/50 text-gold">
              <span className="text-lg font-bold">{item.label.charAt(0)}</span>
            </div>
            <h3 className="text-lg font-semibold text-gold">{item.label}</h3>
            <p className="mt-1 text-sm uppercase tracking-widest text-muted">
              {item.subtitle}
            </p>
            <p className="mt-4 flex-1 text-sm leading-relaxed text-muted normal-case tracking-normal">
              {item.description}
            </p>
          </article>
        </FadeIn>
      ))}
    </div>
  );
}
