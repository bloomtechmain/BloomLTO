export function LogoMark({
  className,
  light = false,
}: {
  className?: string;
  light?: boolean;
}) {
  const ink = light ? "#FFFFFF" : "#0B2A52";
  return (
    <svg
      viewBox="0 0 40 40"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <circle cx="18" cy="18" r="14.5" stroke={ink} strokeWidth="2.6" />
      <circle cx="18" cy="18" r="5" stroke={ink} strokeWidth="2.6" />
      <circle cx="12" cy="12.2" r="1.6" fill={ink} />
      <circle cx="24" cy="12.2" r="1.6" fill={ink} />
      <circle cx="18" cy="25.5" r="1.6" fill={ink} />
      <path
        d="M27 27L35.5 35.5"
        stroke="#EA5A0C"
        strokeWidth="3.4"
        strokeLinecap="round"
      />
      <circle
        cx="27"
        cy="27"
        r="7.5"
        fill={light ? "#525252" : "#FFF6EE"}
        stroke="#EA5A0C"
        strokeWidth="3"
      />
    </svg>
  );
}

export function Logo({ className, light = false }: { className?: string; light?: boolean }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className ?? ""}`}>
      <LogoMark className="h-9 w-9 shrink-0" light={light} />
      <span className="font-heading text-[1.4rem] font-extrabold tracking-tight">
        <span className={light ? "text-white" : "text-navy"}>Bloom</span>
        <span className="text-orange">LTO</span>
      </span>
    </span>
  );
}
