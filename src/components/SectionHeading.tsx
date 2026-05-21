type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  light?: boolean;
};

export function SectionHeading({ eyebrow, title, subtitle, align = "center", light = false }: Props) {
  const alignCls = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`max-w-2xl ${alignCls}`}>
      {eyebrow && <p className="eyebrow mb-5">{eyebrow}</p>}
      <h2
        className={`font-serif text-4xl md:text-5xl leading-[1.05] ${
          light ? "text-[color:var(--cream)]" : "text-[color:var(--navy)]"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-6 text-base md:text-lg leading-relaxed font-light ${
            light ? "text-[color:var(--champagne)]" : "text-muted-foreground"
          }`}
        >
          {subtitle}
        </p>
      )}
      <div className={`mt-7 gold-divider ${align === "center" ? "" : ""}`} />
    </div>
  );
}
