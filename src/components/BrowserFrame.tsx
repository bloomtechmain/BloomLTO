import type { ReactNode } from "react";

export function BrowserFrame({
  children,
  label = "app.bloomlto.local",
  className,
}: {
  children: ReactNode;
  label?: string;
  className?: string;
}) {
  return (
    <div
      className={`overflow-hidden rounded-[22px] border border-line bg-white shadow-[0_30px_60px_-24px_rgba(11,42,82,0.35)] ${className ?? ""}`}
    >
      <div className="flex items-center gap-2 border-b border-line bg-cream px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-orange-soft" />
        <span className="h-2.5 w-2.5 rounded-full bg-peach" />
        <span className="h-2.5 w-2.5 rounded-full bg-line" />
        <span className="ml-3 truncate rounded-full bg-white px-3 py-1 text-xs text-ink/50">
          {label}
        </span>
      </div>
      <div className="bg-navy-deep">{children}</div>
    </div>
  );
}
