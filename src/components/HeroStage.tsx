"use client";

import { useEffect, useState } from "react";
import { SearchIcon, CheckIcon } from "./icons";
import { Rings, DotGrid } from "./Shapes";

const SLOT_COUNT = 16;
const slots = Array.from({ length: SLOT_COUNT }, (_, i) => ({
  slot: String(i + 1).padStart(2, "0"),
  tape: `BLM-0${111 + i}`,
}));

// Sample searches. `slotIndex` is the magazine slot holding the matching tape.
const searches = [
  {
    query: "S3E04_master",
    file: "S3E04_ProResHQ_master.mov",
    path: "/projects/S3/E04/masters",
    size: "212 GB",
    slotIndex: 7,
  },
  {
    query: "archive_2024",
    file: "archive_2024_Q3.tar",
    path: "/finance/2024/Q3",
    size: "640 GB",
    slotIndex: 2,
  },
  {
    query: "camera_A_roll12",
    file: "S3E04_camera_A_roll12.mxf",
    path: "/projects/S3/E04/camera_A",
    size: "64 GB",
    slotIndex: 13,
  },
];

type Phase = "typing" | "searching" | "found" | "queued";

export function HeroStage() {
  const [index, setIndex] = useState(0);
  const [typed, setTyped] = useState(0);
  const [phase, setPhase] = useState<Phase>("typing");
  const search = searches[index];
  const hit = slots[search.slotIndex];

  // Type the query, search, find the tape, queue the restore, then move on.
  useEffect(() => {
    let id: ReturnType<typeof setTimeout>;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      // No loop: settle on the first result.
      if (phase === "found") return;
      id = setTimeout(() => {
        setTyped(search.query.length);
        setPhase("found");
      }, 0);
      return () => clearTimeout(id);
    }

    if (phase === "typing") {
      id =
        typed < search.query.length
          ? setTimeout(() => setTyped(typed + 1), 85)
          : setTimeout(() => setPhase("searching"), 260);
    } else if (phase === "searching") {
      id = setTimeout(() => setPhase("found"), 900);
    } else if (phase === "found") {
      id = setTimeout(() => setPhase("queued"), 2000);
    } else {
      id = setTimeout(() => {
        setIndex((index + 1) % searches.length);
        setTyped(0);
        setPhase("typing");
      }, 2200);
    }
    return () => clearTimeout(id);
  }, [phase, typed, index, search.query.length]);

  const matched = phase === "found" || phase === "queued";

  return (
    <div className="relative mx-auto w-full max-w-[640px] lg:mx-0 lg:ml-auto">
      <Rings className="-right-40 -top-32 hidden h-[560px] w-[560px] text-white/10 lg:block" />
      <div aria-hidden="true" className="absolute -bottom-5 -right-5 h-2/3 w-2/3 bg-orange" />
      <DotGrid className="-left-10 -top-10 hidden w-36 text-white/30 lg:block" />

      <div className="relative border border-white/15 bg-[#1b1b1b] shadow-[0_40px_80px_-30px_rgba(0,0,0,0.95)]">
        <div className="flex items-center justify-between gap-4 border-b border-white/10 bg-[#111] px-4 py-2.5 font-mono text-[11px] text-white/45">
          <span className="truncate">app.bloomlto.local/search</span>
          <span className="shrink-0 uppercase tracking-[0.14em]">Demo · sample data</span>
        </div>

        {/* Search */}
        <div className="p-4 sm:p-6">
          <div
            className={`flex items-center gap-3 border bg-black/40 px-4 py-3.5 transition-colors duration-300 ${
              matched ? "border-orange" : "border-white/20"
            }`}
          >
            <SearchIcon className="h-5 w-5 shrink-0 text-white/50" />
            <span className="font-mono text-base text-white sm:text-lg">
              {search.query.slice(0, typed)}
            </span>
            {phase === "typing" ? <span className="-ml-2 h-5 w-0.5 animate-pulse bg-orange" /> : null}
            <span className="ml-auto hidden border border-white/20 px-1.5 py-0.5 font-mono text-[10px] text-white/45 sm:block">
              ENTER
            </span>
          </div>

          <p className="mt-3 h-4 font-mono text-[11px] uppercase tracking-[0.14em] text-white/50">
            {phase === "typing" ? "Filename, path, size or tape barcode" : null}
            {phase === "searching" ? <span className="text-orange-soft">Searching catalog…</span> : null}
            {matched ? (
              <span>
                1 match · <span className="text-orange-soft">{hit.tape}</span> · slot {hit.slot}
              </span>
            ) : null}
          </p>

          <div className="mt-3 h-[68px] border-t border-white/10 pt-4">
            {matched ? (
              <div key={index} className="animate-fade-in-up flex items-center gap-4">
                <div className="min-w-0 flex-1">
                  <p className="truncate font-mono text-sm font-semibold text-white">{search.file}</p>
                  <p className="mt-1 truncate font-mono text-[11px] text-white/45">
                    {search.path} · {search.size}
                  </p>
                </div>
                <span
                  className={`flex shrink-0 items-center gap-2 px-3.5 py-2 font-heading text-xs font-bold transition-colors duration-300 ${
                    phase === "queued" ? "bg-white text-grey-deep" : "bg-orange text-white"
                  }`}
                >
                  {phase === "queued" ? (
                    <>
                      <CheckIcon className="h-4 w-4 text-orange-deep" />
                      Restore queued
                    </>
                  ) : (
                    "Restore"
                  )}
                </span>
              </div>
            ) : (
              <div aria-hidden="true" className="space-y-2.5 pt-1">
                <span
                  className={`block h-2.5 w-3/5 bg-white/10 ${phase === "searching" ? "animate-pulse" : ""}`}
                />
                <span
                  className={`block h-2 w-2/5 bg-white/[0.06] ${phase === "searching" ? "animate-pulse" : ""}`}
                />
              </div>
            )}
          </div>
        </div>

        {/* Tape magazine: the matching slot lights up */}
        <div className="border-t border-white/10 bg-[#141414] p-4 sm:p-6">
          <div className="mb-3 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.16em] text-white/45">
            <span>Library A · magazine 1</span>
            <span className={matched ? "text-orange-soft" : ""}>
              {matched ? `Slot ${hit.slot} located` : `${SLOT_COUNT} slots`}
            </span>
          </div>
          <div className="grid grid-cols-8 gap-1.5 sm:gap-2">
            {slots.map((s, i) => {
              const isHit = matched && i === search.slotIndex;
              return (
                <div
                  key={s.slot}
                  className={`relative flex aspect-[3/4] flex-col justify-between border p-1 transition-all duration-500 sm:p-1.5 ${
                    isHit
                      ? "animate-pulse-ring border-orange bg-orange"
                      : matched
                        ? "border-white/[0.06] bg-white/[0.03] opacity-50"
                        : "border-white/10 bg-white/[0.06]"
                  } ${phase === "searching" ? "animate-pulse" : ""}`}
                  style={phase === "searching" ? { animationDelay: `${i * 55}ms` } : undefined}
                >
                  <span
                    className={`block h-[3px] w-full ${isHit ? "bg-white/70" : "bg-white/15"}`}
                  />
                  <span
                    className={`block font-mono text-[8px] leading-none sm:text-[9px] ${
                      isHit ? "font-bold text-white" : "text-white/40"
                    }`}
                  >
                    {s.slot}
                  </span>
                </div>
              );
            })}
          </div>
          <p className="mt-3 h-4 font-mono text-[11px] text-white/50">
            {matched ? (
              <span key={index} className="animate-fade-in-up block">
                <span className="font-bold text-white">{hit.tape}</span> · LTO-9 · verified
              </span>
            ) : null}
          </p>
        </div>
      </div>
    </div>
  );
}
