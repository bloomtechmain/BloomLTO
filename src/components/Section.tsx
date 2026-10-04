import type { ReactNode } from "react";

const tones: Record<string, string> = {
  grey: "bg-grey",
  white: "bg-white",
  cream: "bg-cream",
  sky: "bg-sky",
  navy: "bg-navy",
};

export function Section({
  tone = "grey",
  className,
  children,
  id,
}: {
  tone?: "grey" | "white" | "cream" | "sky" | "navy";
  className?: string;
  children: ReactNode;
  id?: string;
}) {
  return (
    <section id={id} className={`relative ${tones[tone]} ${className ?? ""}`}>
      <div className="mx-auto max-w-[1760px] px-5 py-16 sm:px-8 sm:py-24 lg:px-12 xl:px-16">{children}</div>
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-peach px-4 py-1.5 font-heading text-sm font-bold text-orange-deep">
      {children}
    </p>
  );
}

export function Blob({
  className,
  color = "var(--color-peach)",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg
      viewBox="0 0 200 200"
      aria-hidden="true"
      className={`pointer-events-none absolute ${className ?? ""}`}
    >
      <path
        d="M53.6,-62.5C68.8,-52.3,80.1,-35.9,83.7,-18.1C87.3,-0.4,83.2,18.7,73.3,33.9C63.5,49.1,47.9,60.3,30.5,67.8C13.1,75.3,-6.2,79,-24.6,74.6C-43.1,70.2,-60.7,57.6,-70.6,40.8C-80.5,24,-82.7,3,-77.9,-15.6C-73.1,-34.2,-61.3,-50.3,-46.1,-60.4C-30.9,-70.5,-15.5,-74.5,1.9,-77C19.2,-79.5,38.4,-72.7,53.6,-62.5Z"
        transform="translate(100 100)"
        fill={color}
      />
    </svg>
  );
}
