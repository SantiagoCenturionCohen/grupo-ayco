import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "solid" | "outline";

type ButtonBaseProps = {
  variant?: ButtonVariant;
  children: ReactNode;
  className?: string;
};

type ButtonAsButton = ButtonBaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = ButtonBaseProps & {
  href: string;
  external?: boolean;
};

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variants: Record<ButtonVariant, string> = {
  solid:
    "bg-gold text-background hover:bg-gold-light border border-gold hover:border-gold-light",
  outline:
    "border border-gold text-gold hover:bg-gold/10 hover:text-gold-light hover:border-gold-light",
};

const baseStyles =
  "inline-flex items-center justify-center px-6 py-3 text-sm font-semibold uppercase tracking-widest transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold";

export function Button(props: ButtonProps) {
  const { variant = "solid", children, className = "" } = props;
  const styles = cn(baseStyles, variants[variant], className);

  if ("href" in props && props.href) {
    const { href, external } = props;
    if (external) {
      return (
        <a
          href={href}
          className={styles}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );
  }

  const { type = "button", ...rest } = props as ButtonAsButton;
  return (
    <button type={type} className={styles} {...rest}>
      {children}
    </button>
  );
}
