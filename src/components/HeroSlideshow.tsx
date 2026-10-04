"use client";

import { useEffect, useState } from "react";

export type HeroSlide = {
  headline: string;
  subhead: string;
};

export function HeroSlideshow({ slides, interval = 6000 }: { slides: HeroSlide[]; interval?: number }) {
  const [active, setActive] = useState(0);
  const [auto, setAuto] = useState(true);

  // Each slide gets a full interval, including after a manual jump.
  useEffect(() => {
    if (!auto || slides.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setTimeout(() => setActive((a) => (a + 1) % slides.length), interval);
    return () => clearTimeout(id);
  }, [active, auto, slides.length, interval]);

  const slide = slides[active];

  return (
    <div>
      <div className="min-h-[300px] sm:min-h-[300px] xl:min-h-[340px]">
        <div key={active} className="animate-hero-slide">
          <h1 className="text-balance font-heading text-[2.6rem] font-black leading-[1.04] text-white sm:text-6xl xl:text-7xl">
            {slide.headline}
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/75 sm:text-xl">{slide.subhead}</p>
        </div>
      </div>

      {slides.length > 1 ? (
        <div className="mt-8 flex items-center gap-5">
          {slides.map((s, i) => {
            const on = i === active;
            return (
              <button
                key={s.headline}
                type="button"
                onClick={() => {
                  setActive(i);
                  setAuto(false);
                }}
                aria-label={`Show headline ${i + 1} of ${slides.length}`}
                aria-current={on}
                className="group flex items-center gap-2.5 py-2"
              >
                <span
                  className={`font-mono text-xs transition-colors ${
                    on ? "text-orange" : "text-white/40 group-hover:text-white/80"
                  }`}
                >
                  0{i + 1}
                </span>
                <span
                  className={`block h-0.5 overflow-hidden bg-white/20 transition-[width] duration-500 ${
                    on ? "w-16" : "w-6"
                  }`}
                >
                  {on ? (
                    <span
                      key={`${active}-${auto}`}
                      className={`block h-full origin-left bg-orange ${auto ? "animate-hero-progress" : ""}`}
                      style={auto ? { animationDuration: `${interval}ms` } : undefined}
                    />
                  ) : null}
                </span>
              </button>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
