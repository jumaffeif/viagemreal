type Props = { className?: string; tone?: "dark" | "light" };

export function Logo({ className = "", tone = "dark" }: Props) {
  const color = tone === "light" ? "var(--cream)" : "var(--navy)";
  return (
    <div className={`inline-flex flex-col items-center leading-none ${className}`} aria-label="Viagem Real">
      <svg width="44" height="44" viewBox="0 0 64 64" fill="none" className="mb-2">
        <circle cx="32" cy="32" r="30" stroke="var(--gold)" strokeWidth="1" />
        <path
          d="M32 14 L36 28 L50 28 L39 36 L43 50 L32 42 L21 50 L25 36 L14 28 L28 28 Z"
          fill="var(--gold)"
          opacity="0.95"
        />
        <circle cx="32" cy="32" r="22" stroke="var(--gold)" strokeWidth="0.5" opacity="0.5" />
      </svg>
      <span
        className="font-serif text-[1.05rem] tracking-[0.32em] uppercase"
        style={{ color }}
      >
        Viagem&nbsp;Real
      </span>
      <span
        className="mt-1 text-[0.55rem] tracking-[0.45em] uppercase"
        style={{ color: tone === "light" ? "var(--gold-soft)" : "var(--gold)" }}
      >
        Paris · France
      </span>
    </div>
  );
}
