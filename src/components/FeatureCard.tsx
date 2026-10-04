import type { ReactNode } from "react";
import { CountUp } from "./CountUp";

export function FeatureCard({
  icon,
  title,
  children,
}: {
  icon: ReactNode;
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-line bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-orange-soft hover:shadow-[0_24px_48px_-28px_rgba(11,42,82,0.35)]">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-peach text-orange-deep transition-all duration-300 group-hover:-rotate-6 group-hover:scale-110 group-hover:bg-orange group-hover:text-white">
        {icon}
      </div>
      <h3 className="mt-5 font-heading text-lg font-bold text-navy">{title}</h3>
      <p className="mt-2 text-[0.98rem] leading-relaxed text-ink/70">{children}</p>
      <span className="pointer-events-none absolute -right-8 -top-8 h-20 w-20 rounded-full bg-peach/0 transition-colors duration-300 group-hover:bg-peach/40" />
    </div>
  );
}

export function StatTile({ value, label }: { value: string; label: string }) {
  return (
    <div className="group rounded-3xl border border-white/15 bg-white/10 p-7 text-center backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-orange/40 hover:bg-white/[0.14]">
      <p className="font-heading text-4xl font-extrabold text-white sm:text-5xl">
        <CountUp value={value} />
      </p>
      <p className="mt-2 text-sm text-white/70">{label}</p>
    </div>
  );
}

export function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-line bg-white px-4 py-1.5 text-sm font-semibold text-navy">
      {children}
    </span>
  );
}
