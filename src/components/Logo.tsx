import logoSrc from "@/assets/viagem-real-logo.png";

type Props = { className?: string; size?: number };

export function Logo({ className = "", size = 120 }: Props) {
  return (
    <img
      src={logoSrc}
      alt="Viagem Real — Curadoria de experiências na França"
      width={size}
      height={size}
      className={className}
      style={{ width: size, height: "auto" }}
    />
  );
}
