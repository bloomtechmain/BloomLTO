"use client";

import { useEffect, useRef, useState } from "react";
import { FolderIcon, TapeReelIcon, SearchIcon, CheckIcon } from "./icons";

export type FlowStep = {
  n: string;
  title: string;
  body: string;
};

const STEP_MS = 3200;

// One figure per step, and the action that carries data out of it.
const nodeIcons = [FolderIcon, TapeReelIcon, SearchIcon];
const links = ["Archive", "Index", "Restore"];

function Link({ label, on }: { label: string; on: boolean }) {
  return (
    <div
      aria-hidden="true"
      className={`ml-[39px] flex shrink-0 flex-col items-start transition-colors duration-500 xl:ml-0 xl:mt-[30px] xl:w-28 xl:items-center 2xl:w-36 ${
        on ? "text-orange" : "text-white/25"
      }`}
    >
      <span className="hidden font-mono text-[10px] font-bold uppercase tracking-[0.18em] xl:block">
        {label}
      </span>
      <span className={`flow-dash-y h-10 w-0.5 xl:hidden ${on ? "flow-run" : ""}`} />
      <span className="relative mt-1.5 hidden w-full items-center xl:flex">
        <span className={`flow-dash-x h-0.5 flex-1 ${on ? "flow-run" : ""}`} />
        <svg viewBox="0 0 12 12" className="h-3 w-3 shrink-0" fill="currentColor">
          <path d="M2 1 L11 6 L2 11 Z" />
        </svg>
        {on ? (
          <span className="animate-packet absolute top-1/2 h-2.5 w-2.5 -translate-y-1/2 bg-white" />
        ) : null}
      </span>
    </div>
  );
}

export function HowItWorksFlow({ steps }: { steps: FlowStep[] }) {
  const [active, setActive] = useState(0);
  const pausedRef = useRef(false);
  const last = steps.length - 1;

  // Walk the pipeline on its own until the visitor takes over by hovering.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => {
      if (pausedRef.current) return;
      setActive((a) => (a + 1) % steps.length);
    }, STEP_MS);
    return () => clearInterval(id);
  }, [steps.length]);

  return (
    <ol
      className="flex flex-col gap-2 xl:flex-row xl:items-start xl:gap-3"
      onMouseEnter={() => (pausedRef.current = true)}
      onMouseLeave={() => (pausedRef.current = false)}
    >
      {steps.map((step, i) => {
        const Icon = nodeIcons[i] ?? FolderIcon;
        const on = active === i;
        const passed = i < active;
        return (
          <li key={step.n} className="contents">
            <button
              type="button"
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              onClick={() => setActive(i)}
              aria-pressed={on}
              className="group flex flex-1 basis-0 items-start gap-5 text-left xl:block"
            >
              <span
                className={`flex h-20 w-20 shrink-0 items-center justify-center rounded-full border-2 transition-all duration-500 ${
                  on
                    ? "animate-pulse-ring border-orange bg-orange text-white"
                    : passed
                      ? "border-orange bg-grey-deep/60 text-orange"
                      : "border-white/30 bg-grey-deep/60 text-white/60 group-hover:border-white/60"
                }`}
              >
                <Icon className="h-9 w-9" />
              </span>
              <span className="block xl:mt-7">
                <span
                  className={`block font-heading text-5xl font-black leading-none transition-colors duration-500 sm:text-6xl ${
                    on
                      ? "text-orange"
                      : "text-transparent [-webkit-text-stroke:1.5px_var(--color-orange)]"
                  }`}
                >
                  {step.n}
                </span>
                <span
                  className={`mt-4 block font-heading text-xl font-bold transition-colors duration-500 sm:text-2xl ${
                    on ? "text-white" : "text-white/80"
                  }`}
                >
                  {step.title}
                </span>
                <span className="mt-3 block max-w-sm text-white/70">{step.body}</span>
                <span
                  aria-hidden="true"
                  className={`mt-5 block h-0.5 origin-left bg-orange transition-transform duration-500 ${
                    on ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </span>
            </button>
            <Link label={links[i] ?? ""} on={i < active || (i === last && active === last)} />
          </li>
        );
      })}

      <li className="flex shrink-0 items-center gap-5 xl:block xl:text-center">
        <span
          className={`flex h-20 w-20 items-center justify-center border-2 transition-all duration-500 xl:mx-auto ${
            active === last
              ? "border-white bg-white text-orange-deep"
              : "border-white/30 bg-grey-deep/60 text-white/50"
          }`}
        >
          <CheckIcon className="h-9 w-9" />
        </span>
        <span className="block xl:mt-7">
          <span className="block font-heading text-lg font-bold text-white">File restored</span>
          <span className="block font-mono text-[10px] uppercase tracking-[0.18em] text-white/55">
            Any destination
          </span>
        </span>
      </li>
    </ol>
  );
}
