type Props = {
  from: string;
  to: string;
  flip?: boolean;
};

export function SectionDivider({ from, to, flip }: Props) {
  return (
    <div
      aria-hidden="true"
      className="relative h-10 w-full sm:h-16"
      style={{ backgroundColor: from }}
    >
      <svg
        viewBox="0 0 1440 90"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
        style={{ transform: flip ? "scaleX(-1)" : undefined }}
      >
        <path
          d="M0,32 C240,80 480,0 720,24 C960,48 1200,88 1440,40 L1440,90 L0,90 Z"
          fill={to}
        />
      </svg>
    </div>
  );
}
