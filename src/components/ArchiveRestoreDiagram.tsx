"use client";

import { Fragment, useEffect, useRef, useState } from "react";
import { LayersIcon } from "./icons";

const archive = ["Storage sources", "Scan and index", "Archive to tape", "LTO tape (LTFS)"];
const restore = ["Request a file", "Search catalog", "Queue recovery", "Restored file"];

// Signal order: the archive lane (0-3), the catalog (4), then the restore lane (5-8).
const CATALOG = archive.length;
const TOTAL = archive.length + 1 + restore.length;
const STEP_MS = 1300;

function Arrow({ on, vertical = false }: { on: boolean; vertical?: boolean }) {
  return (
    <div
      aria-hidden="true"
      className={`flex shrink-0 items-center self-center transition-colors duration-500 ${
        vertical ? "flex-col" : "flex-col lg:w-10 lg:flex-row xl:w-16"
      } ${on ? "text-orange" : "text-white/25"}`}
    >
      <span
        className={`flow-dash-y h-8 w-0.5 ${vertical ? "" : "lg:hidden"} ${on ? "flow-run" : ""}`}
      />
      {vertical ? null : (
        <span className={`flow-dash-x hidden h-0.5 flex-1 lg:block ${on ? "flow-run" : ""}`} />
      )}
      <svg
        viewBox="0 0 12 12"
        className={`h-3 w-3 shrink-0 rotate-90 ${vertical ? "" : "lg:rotate-0"}`}
        fill="currentColor"
      >
        <path d="M2 1 L11 6 L2 11 Z" />
      </svg>
    </div>
  );
}

function Lane({
  title,
  code,
  labels,
  offset,
  step,
  onPick,
}: {
  title: string;
  code: string;
  labels: string[];
  offset: number;
  step: number;
  onPick: (i: number) => void;
}) {
  return (
    <div>
      <p className="mb-4 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-white/55">
        <span className="h-px w-8 bg-orange" />
        {title}
      </p>
      <div className="flex flex-col gap-2 lg:flex-row lg:items-stretch">
        {labels.map((label, i) => {
          const idx = offset + i;
          const on = step === idx;
          const passed = step > idx;
          return (
            <Fragment key={label}>
              {i > 0 ? <Arrow on={step >= idx} /> : null}
              <button
                type="button"
                onMouseEnter={() => onPick(idx)}
                onFocus={() => onPick(idx)}
                onClick={() => onPick(idx)}
                className={`relative flex-1 basis-0 border-2 px-5 py-5 text-left transition-all duration-500 ${
                  on
                    ? "border-orange bg-orange/15 shadow-[6px_6px_0_0_var(--color-orange)]"
                    : passed
                      ? "border-white/60 bg-white/[0.04]"
                      : "border-white/15 bg-white/[0.02]"
                }`}
              >
                <span
                  className={`block font-mono text-[11px] transition-colors duration-500 ${
                    on ? "text-orange-soft" : "text-white/40"
                  }`}
                >
                  {code}
                  {i + 1}
                </span>
                <span
                  className={`mt-1 block font-heading text-lg font-bold transition-colors duration-500 ${
                    on || passed ? "text-white" : "text-white/60"
                  }`}
                >
                  {label}
                </span>
              </button>
            </Fragment>
          );
        })}
      </div>
    </div>
  );
}

export function ArchiveRestoreDiagram() {
  const [step, setStep] = useState(0);
  const pausedRef = useRef(false);

  // Send a signal through both lanes on a loop until the visitor hovers a node.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => {
      if (pausedRef.current) return;
      setStep((s) => (s + 1) % TOTAL);
    }, STEP_MS);
    return () => clearInterval(id);
  }, []);

  const catalogOn = step === CATALOG;
  const catalogPassed = step > CATALOG;

  return (
    <div
      onMouseEnter={() => (pausedRef.current = true)}
      onMouseLeave={() => (pausedRef.current = false)}
    >
      <Lane title="Archive" code="A" labels={archive} offset={0} step={step} onPick={setStep} />

      <div className="flex flex-col items-center py-2">
        <Arrow vertical on={step >= CATALOG} />
        <button
          type="button"
          onMouseEnter={() => setStep(CATALOG)}
          onFocus={() => setStep(CATALOG)}
          onClick={() => setStep(CATALOG)}
          className={`my-2 flex items-center gap-4 border-2 px-7 py-5 text-left transition-all duration-500 ${
            catalogOn
              ? "animate-pulse-ring border-orange bg-orange text-white"
              : catalogPassed
                ? "border-orange bg-orange/20 text-white"
                : "border-orange/50 bg-transparent text-white/70"
          }`}
        >
          <LayersIcon className="h-8 w-8 shrink-0" />
          <span>
            <span className="block font-mono text-[11px] uppercase tracking-[0.16em] opacity-70">
              Database
            </span>
            <span className="block font-heading text-xl font-bold">Searchable catalog</span>
          </span>
        </button>
        <Arrow vertical on={step > CATALOG} />
      </div>

      <Lane
        title="Restore"
        code="R"
        labels={restore}
        offset={CATALOG + 1}
        step={step}
        onPick={setStep}
      />
    </div>
  );
}
