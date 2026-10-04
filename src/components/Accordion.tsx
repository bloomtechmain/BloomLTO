"use client";

import { useState } from "react";

export function Accordion({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="border-b border-grey/15">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q} className="relative border-t border-grey/15">
            <span
              aria-hidden="true"
              className={`absolute inset-y-0 left-0 w-0.5 origin-top bg-orange transition-transform duration-300 ${
                isOpen ? "scale-y-100" : "scale-y-0"
              }`}
            />
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className={`flex w-full items-center gap-5 px-5 py-6 text-left transition-colors sm:px-6 ${
                isOpen ? "bg-white" : "hover:bg-white/60"
              }`}
            >
              <span
                className={`font-mono text-xs transition-colors ${
                  isOpen ? "text-orange-deep" : "text-grey/40"
                }`}
              >
                0{i + 1}
              </span>
              <span className="flex-1 font-heading text-lg font-bold text-grey">{item.q}</span>
              <span
                className={`flex h-8 w-8 shrink-0 items-center justify-center text-white transition-all duration-300 ${
                  isOpen ? "rotate-45 bg-orange" : "bg-grey"
                }`}
              >
                <svg viewBox="0 0 12 12" className="h-3.5 w-3.5" fill="none">
                  <path d="M6 1V11M1 6H11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
              </span>
            </button>
            <div
              className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                isOpen ? "bg-white" : ""
              }`}
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <p className="max-w-2xl px-5 pb-6 pl-[3.6rem] text-[0.98rem] leading-relaxed text-ink/75 sm:pl-[3.9rem]">
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
