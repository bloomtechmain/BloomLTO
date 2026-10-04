import type { ReactNode } from "react";

// Section label: a short orange rule followed by uppercase text.
export function Kicker({
  children,
  dark = false,
  center = false,
}: {
  children: ReactNode;
  dark?: boolean;
  center?: boolean;
}) {
  return (
    <p
      className={`mb-5 flex items-center gap-3 font-heading text-sm font-bold uppercase tracking-[0.16em] ${
        dark ? "text-orange-soft" : "text-orange-deep"
      } ${center ? "justify-center" : ""}`}
    >
      <span aria-hidden="true" className="h-0.5 w-10 bg-orange" />
      {children}
    </p>
  );
}
