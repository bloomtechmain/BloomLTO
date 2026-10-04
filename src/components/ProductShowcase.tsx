"use client";

import { useEffect, useState } from "react";
import { AppWindow } from "./AppWindow";

const views = [
  {
    id: "inventory",
    label: "Inventory",
    body: "Barcode, slot, LTO generation, status, purpose and used capacity for every tape.",
  },
  {
    id: "search",
    label: "Search",
    body: "Search by filename, path, size or tape barcode, then select results to recover.",
  },
  {
    id: "schedules",
    label: "Schedules",
    body: "Pick days, a time, a library and sources. Runs start on their own, or run now.",
  },
  {
    id: "reports",
    label: "Reports",
    body: "Fleet utilization, 30-day archive throughput, and job outcomes.",
  },
] as const;

type ViewId = (typeof views)[number]["id"];

// Keep in sync with the showcase-progress animation in globals.css.
const ROTATE_MS = 6000;

export function ProductShowcase() {
  const [active, setActive] = useState<ViewId>("inventory");
  // Views rotate on their own until the visitor picks one.
  const [auto, setAuto] = useState(true);

  useEffect(() => {
    if (!auto) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => {
      setActive((current) => {
        const i = views.findIndex((v) => v.id === current);
        return views[(i + 1) % views.length].id;
      });
    }, ROTATE_MS);
    return () => clearInterval(id);
  }, [auto]);

  return (
    <div className="grid gap-12 lg:grid-cols-[0.72fr_1.6fr] lg:items-center lg:gap-16">
      <div>
        <p className="mb-5 flex items-center gap-3 font-heading text-sm font-bold uppercase tracking-[0.16em] text-orange-soft">
          <span aria-hidden="true" className="h-0.5 w-10 bg-orange" />
          See it in action
        </p>
        <h2 className="font-heading text-3xl font-extrabold text-white sm:text-5xl">
          One tool, every part of the archive.
        </h2>

        <div className="mt-10 border-b border-white/15">
          {views.map((v, i) => {
            const on = v.id === active;
            return (
              <button
                key={v.id}
                type="button"
                onClick={() => {
                  setActive(v.id);
                  setAuto(false);
                }}
                aria-pressed={on}
                className="group relative block w-full border-t border-white/15 py-4 pl-5 text-left"
              >
                <span
                  aria-hidden="true"
                  className={`absolute inset-y-0 left-0 w-0.5 ${on ? "bg-white/20" : "bg-transparent"}`}
                >
                  {on ? (
                    <span
                      key={`${v.id}-${auto}`}
                      className={`block h-full w-full origin-top bg-orange ${
                        auto ? "animate-showcase-progress" : ""
                      }`}
                    />
                  ) : null}
                </span>
                <span className="flex items-baseline gap-4">
                  <span
                    className={`font-mono text-xs transition-colors ${on ? "text-orange" : "text-white/35"}`}
                  >
                    0{i + 1}
                  </span>
                  <span
                    className={`font-heading text-xl font-bold transition-colors ${
                      on ? "text-white" : "text-white/55 group-hover:text-white"
                    }`}
                  >
                    {v.label}
                  </span>
                </span>
                {on ? (
                  <span className="animate-fade-in-up mt-2 block pl-9 text-[0.95rem] leading-relaxed text-white/65">
                    {v.body}
                  </span>
                ) : null}
              </button>
            );
          })}
        </div>
      </div>

      {/* App window */}
      <div className="relative">
        <div aria-hidden="true" className="absolute -bottom-4 -right-4 h-2/3 w-2/3 bg-orange" />
        <AppWindow view={active} />
        <p className="mt-7 font-mono text-[10px] uppercase tracking-[0.14em] text-white/35">
          Illustration with sample data
        </p>
      </div>
    </div>
  );
}
