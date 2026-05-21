import type { ReactNode } from "react";

const WHATSAPP_URL =
  "https://wa.me/?text=" +
  encodeURIComponent("Olá, gostaria de planejar minha experiência em Paris com a Viagem Real.");

type Props = {
  children: ReactNode;
  variant?: "primary" | "outline" | "ghost";
  size?: "md" | "lg";
  href?: string;
};

export function CTAButton({ children, variant = "primary", size = "md", href = WHATSAPP_URL }: Props) {
  const base =
    "inline-flex items-center justify-center gap-3 font-sans tracking-[0.18em] uppercase text-[0.72rem] font-medium transition-all duration-500 group";
  const sizes = {
    md: "px-7 py-3.5",
    lg: "px-10 py-4.5",
  };
  const variants = {
    primary:
      "bg-navy text-cream hover:bg-[color:var(--gold)] hover:text-navy rounded-2xl shadow-soft",
    outline:
      "border border-gold text-navy hover:bg-navy hover:text-cream hover:border-navy rounded-2xl",
    ghost: "text-navy hover:text-[color:var(--gold)]",
  };
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${sizes[size]} ${variants[variant]}`}
    >
      <span>{children}</span>
      <span className="inline-block transition-transform duration-500 group-hover:translate-x-1">→</span>
    </a>
  );
}
