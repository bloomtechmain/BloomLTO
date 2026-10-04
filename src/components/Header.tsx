"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./Logo";
import { Button } from "./Button";
import { ArrowRightIcon } from "./icons";
import { primaryNav, site } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-white/10 bg-grey-deep/95 shadow-[0_8px_24px_-16px_rgba(0,0,0,0.7)] backdrop-blur-md"
          : "border-white/10 bg-grey-deep"
      }`}
    >
      {/* Utility strip, folds away once the page scrolls */}
      <div
        className={`hidden overflow-hidden border-b border-white/10 transition-[max-height,opacity] duration-300 lg:block ${
          scrolled ? "max-h-0 border-transparent opacity-0" : "max-h-10 opacity-100"
        }`}
      >
        <div className="mx-auto flex max-w-[1760px] items-center justify-between px-12 py-2 font-mono text-[11px] uppercase tracking-[0.16em] text-white/50 xl:px-16">
          <p className="flex items-center gap-3">
            <span aria-hidden="true" className="h-1.5 w-1.5 bg-orange" />
            Searchable LTO tape archive software
          </p>
          <div className="flex items-center gap-6">
            <a href={`mailto:${site.email}`} className="normal-case tracking-normal transition-colors hover:text-white">
              {site.email}
            </a>
            <Link
              href="/pricing"
              className="group flex items-center gap-1.5 text-orange-soft transition-colors hover:text-white"
            >
              30-day trial
              <ArrowRightIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-[1760px] items-stretch justify-between px-5 sm:px-8 lg:px-12 xl:px-16">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          aria-label="BloomLTO home"
          className={`flex items-center transition-[padding] duration-300 ${scrolled ? "py-3" : "py-4"}`}
        >
          <Logo light />
        </Link>

        <nav className="hidden items-stretch lg:flex">
          {primaryNav.map((item, i) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`group relative flex items-center gap-2.5 px-6 font-heading text-[0.95rem] font-bold transition-colors ${
                  active ? "text-white" : "text-white/65 hover:text-white"
                }`}
              >
                <span
                  className={`font-mono text-[10px] font-normal transition-colors ${
                    active ? "text-orange" : "text-white/35 group-hover:text-orange"
                  }`}
                >
                  0{i + 1}
                </span>
                {item.label}
                <span
                  aria-hidden="true"
                  className={`absolute inset-x-0 -bottom-px h-0.5 origin-left bg-orange transition-transform duration-300 ${
                    active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center lg:flex">
          <Button href="/contact" size="md">
            Book a demo
            <ArrowRightIcon className="h-4 w-4" />
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle menu"
          className={`my-3 flex h-11 w-11 items-center justify-center self-center border transition-colors lg:hidden ${
            open ? "border-orange bg-orange" : "border-white/25"
          }`}
        >
          <span className="relative block h-3.5 w-[18px]">
            <span
              className={`absolute left-0 top-0 h-0.5 w-[18px] bg-white transition-transform ${open ? "translate-y-[7px] rotate-45" : ""}`}
            />
            <span
              className={`absolute left-0 top-[7px] h-0.5 w-[18px] bg-white transition-opacity ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`absolute left-0 top-[14px] h-0.5 w-[18px] bg-white transition-transform ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
            />
          </span>
        </button>
      </div>

      {open ? (
        <div className="animate-fade-in-up border-t border-white/10 bg-grey-deep px-5 pb-7 pt-2 sm:px-8 lg:hidden">
          <nav className="border-b border-white/10">
            {primaryNav.map((item, i) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  aria-current={active ? "page" : undefined}
                  className={`flex items-baseline gap-4 border-t border-white/10 py-4 font-heading text-xl font-bold ${
                    active ? "text-white" : "text-white/75"
                  }`}
                >
                  <span className={`font-mono text-xs font-normal ${active ? "text-orange" : "text-white/35"}`}>
                    0{i + 1}
                  </span>
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <Button href="/contact" size="lg" className="mt-6 w-full" onClick={() => setOpen(false)}>
            Book a demo
          </Button>
          <a
            href={`mailto:${site.email}`}
            className="mt-5 block text-center font-mono text-xs text-white/55"
          >
            {site.email}
          </a>
        </div>
      ) : null}
    </header>
  );
}
