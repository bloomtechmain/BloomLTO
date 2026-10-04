"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "./icons";
import { DotGrid } from "./Shapes";

export type Highlight = {
  icon: ReactNode;
  title: string;
  body: string;
};

const STEP_MS = 3200;

export function FeatureHighlights({ items }: { items: Highlight[] }) {
  const [active, setActive] = useState(0);
  const pausedRef = useRef(false);

  // Walk the features on their own until the visitor takes over by hovering.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => {
      if (pausedRef.current) return;
      setActive((a) => (a + 1) % items.length);
    }, STEP_MS);
    return () => clearInterval(id);
  }, [items.length]);

  const current = items[active];

  return (
    <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-20">
      {/* Photo composition, tagged with whichever feature is active */}
      <div className="relative mx-auto w-full max-w-xl lg:mx-0">
        <div aria-hidden="true" className="absolute -bottom-5 -left-5 h-2/3 w-2/3 bg-orange" />
        <DotGrid className="-right-6 -top-8 w-40 text-grey/35" />
        <div className="relative aspect-[4/5] overflow-hidden">
          <Image
            src="/images/home/archive-shelves.jpg"
            alt="Curved library shelves filled with catalogued books"
            fill
            sizes="(min-width: 1024px) 38vw, 90vw"
            className="object-cover grayscale"
          />
          <div className="absolute inset-0 bg-grey-deep/25" />
        </div>
        <div className="absolute -bottom-10 -right-4 w-[55%] border-[6px] border-[#efefed] shadow-[0_24px_48px_-24px_rgba(0,0,0,0.6)] sm:-right-10">
          <div className="relative aspect-[4/3]">
            <Image
              src="/images/home/editing-timeline.jpg"
              alt="Video editing timeline on a monitor"
              fill
              sizes="(min-width: 1024px) 22vw, 50vw"
              className="object-cover grayscale"
            />
          </div>
        </div>
        <div className="absolute left-6 top-6 bg-grey-deep px-4 py-3 text-white">
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/50">
            0{active + 1} / 0{items.length}
          </p>
          <p
            key={active}
            className="animate-fade-in-up mt-1 flex items-center gap-2.5 font-heading text-sm font-bold [&_svg]:h-5 [&_svg]:w-5 [&_svg]:text-orange"
          >
            {current.icon}
            {current.title}
          </p>
        </div>
      </div>

      <div>
        <p className="mb-5 flex items-center gap-3 font-heading text-sm font-bold uppercase tracking-[0.16em] text-orange-deep">
          <span aria-hidden="true" className="h-0.5 w-10 bg-orange" />
          What you get
        </p>
        <h2 className="max-w-2xl font-heading text-3xl font-extrabold text-grey sm:text-5xl">
          Everything a tape library needs to earn its keep.
        </h2>

        <div
          className="mt-12 grid border-l border-t border-grey/15 sm:grid-cols-2"
          onMouseEnter={() => (pausedRef.current = true)}
          onMouseLeave={() => (pausedRef.current = false)}
        >
          {items.map((h, i) => {
            const on = active === i;
            return (
              <button
                key={h.title}
                type="button"
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
                aria-pressed={on}
                className={`relative flex gap-5 border-b border-r border-grey/15 p-6 text-left transition-colors duration-500 ${
                  on ? "bg-white" : "bg-white/40"
                }`}
              >
                <span
                  aria-hidden="true"
                  className={`absolute inset-x-0 top-0 h-0.5 origin-left bg-orange transition-transform duration-500 ${
                    on ? "scale-x-100" : "scale-x-0"
                  }`}
                />
                <span
                  className={`flex h-12 w-12 shrink-0 items-center justify-center text-white transition-colors duration-500 ${
                    on ? "bg-orange" : "bg-grey"
                  }`}
                >
                  {h.icon}
                </span>
                <span>
                  <span
                    className={`block font-mono text-[11px] transition-colors duration-500 ${
                      on ? "text-orange-deep" : "text-grey/40"
                    }`}
                  >
                    0{i + 1}
                  </span>
                  <span className="mt-0.5 block font-heading text-lg font-bold text-grey">
                    {h.title}
                  </span>
                  <span className="mt-1.5 block text-[0.98rem] leading-relaxed text-ink/75">
                    {h.body}
                  </span>
                </span>
              </button>
            );
          })}
        </div>

        <Link
          href="/features"
          className="mt-8 inline-flex items-center gap-2 rounded-full border-2 border-grey px-6 py-3 font-heading text-[0.98rem] font-bold text-grey transition-all duration-200 hover:-translate-y-0.5 hover:bg-grey hover:text-white"
        >
          All features
          <ArrowRightIcon className="h-5 w-5" />
        </Link>
      </div>
    </div>
  );
}
