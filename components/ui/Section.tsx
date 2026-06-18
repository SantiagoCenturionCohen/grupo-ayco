import type { ReactNode } from "react";
import { Container } from "./Container";

type SectionProps = {
  children: ReactNode;
  id?: string;
  className?: string;
  containerClassName?: string;
  ariaLabel?: string;
};

export function Section({
  children,
  id,
  className = "",
  containerClassName = "",
  ariaLabel,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-label={ariaLabel}
      className={`py-16 md:py-24 lg:py-28 ${className}`}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
