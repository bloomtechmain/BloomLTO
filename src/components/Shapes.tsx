// Decorative, non-interactive figures used behind home page sections.
// Position them with `className` (they are absolutely positioned).

type ShapeProps = { className?: string };

const base = "pointer-events-none absolute";

export function Rings({ className }: ShapeProps) {
  return (
    <svg viewBox="0 0 400 400" fill="none" aria-hidden="true" className={`${base} ${className ?? ""}`}>
      {[60, 105, 150, 195].map((r) => (
        <circle key={r} cx="200" cy="200" r={r} stroke="currentColor" strokeWidth="1.5" />
      ))}
    </svg>
  );
}

export function DotGrid({
  className,
  cols = 8,
  rows = 6,
}: ShapeProps & { cols?: number; rows?: number }) {
  const gap = 18;
  return (
    <svg
      viewBox={`0 0 ${cols * gap} ${rows * gap}`}
      aria-hidden="true"
      className={`${base} ${className ?? ""}`}
    >
      {Array.from({ length: rows }).flatMap((_, y) =>
        Array.from({ length: cols }).map((_, x) => (
          <circle key={`${x}-${y}`} cx={x * gap + 9} cy={y * gap + 9} r="2" fill="currentColor" />
        ))
      )}
    </svg>
  );
}

export function Stripes({ className }: ShapeProps) {
  return (
    <svg viewBox="0 0 160 160" fill="none" aria-hidden="true" className={`${base} ${className ?? ""}`}>
      {Array.from({ length: 9 }).map((_, i) => (
        <path
          key={i}
          d={`M${-20 + i * 22} 180 L${60 + i * 22} -20`}
          stroke="currentColor"
          strokeWidth="6"
        />
      ))}
    </svg>
  );
}

export function QuarterCircle({ className }: ShapeProps) {
  return (
    <svg viewBox="0 0 100 100" aria-hidden="true" className={`${base} ${className ?? ""}`}>
      <path d="M0 0 H100 A100 100 0 0 1 0 100 Z" fill="currentColor" />
    </svg>
  );
}

export function Triangle({ className }: ShapeProps) {
  return (
    <svg viewBox="0 0 100 100" aria-hidden="true" className={`${base} ${className ?? ""}`}>
      <path d="M0 100 L100 0 V100 Z" fill="currentColor" />
    </svg>
  );
}

export function Cross({ className }: ShapeProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={`${base} ${className ?? ""}`}>
      <path d="M12 2 V22 M2 12 H22" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}
