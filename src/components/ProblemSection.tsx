"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { TapeLibraryViz } from "./TapeLibraryViz";
import { DotGrid, QuarterCircle, Stripes, Cross } from "./Shapes";

const problems = [
  {
    n: "01",
    title: "No labels",
    body: "Tapes are unlabeled black boxes once they leave the drive.",
  },
  {
    n: "02",
    title: "No shortcuts",
    body: "Restores mean guessing which barcode holds the file you need.",
  },
  {
    n: "03",
    title: "Silent failures",
    body: "Home-grown scripts break silently, and nobody notices until a restore fails.",
  },
];

const STEP_MS = 3200;

function Connector({ on }: { on: boolean }) {
  return (
    <div
      aria-hidden="true"
      className={`flex shrink-0 flex-col items-center self-center transition-colors duration-500 xl:w-14 xl:flex-row 2xl:w-20 ${
        on ? "text-orange" : "text-grey/25"
      }`}
    >
      <span className={`flow-dash-y h-10 w-0.5 xl:hidden ${on ? "flow-run" : ""}`} />
      <span className={`flow-dash-x hidden h-0.5 flex-1 xl:block ${on ? "flow-run" : ""}`} />
      <svg viewBox="0 0 12 12" className="h-3 w-3 shrink-0 rotate-90 xl:rotate-0" fill="currentColor">
        <path d="M2 1 L11 6 L2 11 Z" />
      </svg>
    </div>
  );
}

function Terminal({
  label,
  caption,
  on,
  tone,
  children,
}: {
  label: string;
  caption: string;
  on: boolean;
  tone: "start" | "fail";
  children: React.ReactNode;
}) {
  const lit = tone === "start" ? "border-grey bg-grey text-white" : "border-orange bg-orange text-white";
  return (
    <div className="flex shrink-0 flex-col items-center gap-3 self-center text-center">
      <span
        className={`flex h-16 w-16 items-center justify-center rounded-full border-2 transition-colors duration-500 ${
          on ? lit : "border-grey/25 bg-white text-grey/40"
        } ${on && tone === "fail" ? "animate-pulse-ring" : ""}`}
      >
        {children}
      </span>
      <span>
        <span className="block font-heading text-sm font-bold text-grey">{label}</span>
        <span className="block font-mono text-[10px] uppercase tracking-wider text-ink/55">
          {caption}
        </span>
      </span>
    </div>
  );
}

export function ProblemSection() {
  const [active, setActive] = useState(0);
  const pausedRef = useRef(false);

  // Walk the flow on its own until the visitor takes over by hovering a node.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => {
      if (pausedRef.current) return;
      setActive((a) => (a + 1) % problems.length);
    }, STEP_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative isolate overflow-hidden bg-white">
      {/* Desaturated photo texture, washed out so the content stays readable */}
      <Image
        src="/images/home/patch-panel.jpg"
        alt=""
        fill
        sizes="100vw"
        className="-z-10 object-cover opacity-55 grayscale"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-white/85 via-white/55 to-white/30" />
      <QuarterCircle className="right-0 top-0 h-28 w-28 -scale-x-100 text-peach sm:h-44 sm:w-44" />
      <Stripes className="-bottom-12 -left-12 h-48 w-48 text-sky" />
      <Cross className="left-[46%] top-16 hidden h-6 w-6 text-orange lg:block" />

      <div className="relative mx-auto max-w-[1760px] px-5 py-20 sm:px-8 sm:py-28 lg:px-12 xl:px-16">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:gap-20">
          <div>
            <p className="mb-5 flex items-center gap-3 font-heading text-sm font-bold uppercase tracking-[0.16em] text-orange-deep">
              <span aria-hidden="true" className="h-0.5 w-10 bg-orange" />
              The problem
            </p>
            <h2 className="max-w-xl font-heading text-3xl font-extrabold text-grey sm:text-5xl">
              Tape is cheap and safe. But{" "}
              <span className="text-orange-deep">which tape</span> has that file?
            </h2>
            <p className="mt-6 max-w-lg text-[1.05rem] leading-relaxed text-ink/75">
              LTO is reliable, offline storage. What it isn&apos;t is searchable —
              without a catalog, every restore starts the same way: guessing.
            </p>
          </div>

          {/* Photo backdrop with the live library panel on top */}
          <div className="relative mx-auto w-full max-w-2xl lg:mx-0">
            <div aria-hidden="true" className="absolute -right-5 -top-5 h-1/2 w-1/2 bg-orange" />
            <DotGrid className="-bottom-9 -left-8 w-40 text-grey/35" />
            <div className="relative isolate overflow-hidden px-5 py-10 sm:px-12 sm:py-14">
              <Image
                src="/images/home/warehouse-aisle.jpg"
                alt="Long warehouse aisle lined with rows of identical boxed pallets"
                fill
                sizes="(min-width: 1024px) 48vw, 95vw"
                className="-z-10 object-cover grayscale"
              />
              <div className="absolute inset-0 -z-10 bg-grey-deep/55" />
              <TapeLibraryViz active={active} />
            </div>
          </div>
        </div>

        {/* Flow chart: a restore request without a catalog */}
        <div
          className="mx-auto mt-20 flex max-w-2xl flex-col items-stretch gap-3 lg:mt-24 xl:max-w-none xl:flex-row xl:gap-2"
          onMouseEnter={() => (pausedRef.current = true)}
          onMouseLeave={() => (pausedRef.current = false)}
        >
          <Terminal label="Restore request" caption="Start" on tone="start">
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
              <path d="M14 3v5h5" />
            </svg>
          </Terminal>

          {problems.map((p, i) => {
            const on = active === i;
            const passed = i < active;
            return (
              <div key={p.n} className="contents">
                <Connector on={i <= active} />
                <button
                  type="button"
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  aria-pressed={on}
                  className={`relative mt-5 flex-1 basis-0 border-2 px-6 pb-6 pt-10 text-left transition-all duration-500 xl:mt-0 ${
                    on
                      ? "border-orange bg-cream shadow-[8px_8px_0_0_var(--color-orange)]"
                      : passed
                        ? "border-grey bg-white"
                        : "border-grey/20 bg-white"
                  }`}
                >
                  <span
                    key={on ? "on" : "off"}
                    className={`absolute -top-5 left-6 flex h-10 w-10 rotate-45 items-center justify-center transition-colors duration-500 ${
                      on ? "animate-node-pop bg-orange" : passed ? "bg-grey" : "bg-grey/30"
                    }`}
                  >
                    <span className="-rotate-45 font-heading text-sm font-black text-white">
                      {p.n}
                    </span>
                  </span>
                  <span className="block font-heading text-xl font-bold text-grey">{p.title}</span>
                  <span className="mt-2 block text-[0.98rem] leading-relaxed text-ink/75">
                    {p.body}
                  </span>
                </button>
              </div>
            );
          })}

          <Connector on={active === problems.length - 1} />
          <Terminal
            label="Restore fails"
            caption="End"
            on={active === problems.length - 1}
            tone="fail"
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </Terminal>
        </div>
      </div>
    </section>
  );
}
