import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { Kicker } from "./Kicker";
import { Rings, DotGrid, Triangle, QuarterCircle, Stripes } from "./Shapes";
import { ArrowRightIcon, MailIcon } from "./icons";
import { legalNav, site } from "@/lib/site";

export type LegalSection = {
  id: string;
  title: string;
  body: ReactNode;
};

// Shared layout for the terms and privacy pages.
export function LegalPage({
  title,
  updated,
  current,
  intro,
  sections,
}: {
  title: string;
  updated: string;
  current: string;
  intro?: ReactNode;
  sections: LegalSection[];
}) {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-grey-deep">
        <Image
          src="/images/home/archive-shelves.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="-z-10 object-cover grayscale"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-grey-deep via-grey-deep/90 to-grey-deep/60" />
        <Rings className="-right-40 -top-40 -z-10 h-[520px] w-[520px] text-white/10" />
        <Triangle className="bottom-0 right-0 -z-10 h-28 w-28 text-orange sm:h-40 sm:w-40" />
        <DotGrid className="bottom-10 right-36 -z-10 hidden w-36 text-white/30 lg:block" />

        <div className="mx-auto max-w-[1760px] px-5 py-16 sm:px-8 sm:py-24 lg:px-12 xl:px-16">
          <Kicker dark>Legal</Kicker>
          <h1 className="max-w-3xl text-balance font-heading text-4xl font-extrabold text-white sm:text-6xl">
            {title}
          </h1>
          <p className="mt-6 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.16em] text-white/60">
            <span aria-hidden="true" className="h-1.5 w-1.5 bg-orange" />
            {updated}
          </p>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-[#efefed]">
        <QuarterCircle className="left-0 top-0 -z-10 h-28 w-28 text-grey/10 sm:h-40 sm:w-40" />
        <Stripes className="-bottom-10 -right-10 -z-10 h-48 w-48 text-grey/10" />

        <div className="mx-auto grid max-w-[1760px] gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[0.6fr_1.4fr] lg:gap-20 lg:px-12 xl:px-16">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-grey/50">
              On this page
            </p>
            <nav aria-label="On this page" className="mt-4 border-b border-grey/15">
              {sections.map((s, i) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="group flex items-baseline gap-4 border-t border-grey/15 py-3 font-heading font-bold text-grey/75 transition-colors hover:text-grey"
                >
                  <span className="font-mono text-xs font-normal text-orange-deep">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {s.title}
                </a>
              ))}
            </nav>

            <p className="mt-10 font-mono text-[11px] uppercase tracking-[0.18em] text-grey/50">
              Documents
            </p>
            <div className="mt-4 flex flex-col gap-2">
              {legalNav.map((item) => {
                const on = item.href === current;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={on ? "page" : undefined}
                    className={`group flex items-center justify-between border-l-4 px-4 py-3 font-heading font-bold transition-colors ${
                      on
                        ? "border-orange bg-white text-grey"
                        : "border-grey/20 bg-white/50 text-grey/70 hover:border-orange hover:text-grey"
                    }`}
                  >
                    {item.label}
                    <ArrowRightIcon
                      className={`h-4 w-4 text-orange-deep transition-opacity ${
                        on ? "opacity-0" : "opacity-60 group-hover:opacity-100"
                      }`}
                    />
                  </Link>
                );
              })}
            </div>
          </aside>

          <div>
            {intro ? (
              <p className="mb-10 max-w-3xl border-l-4 border-orange bg-white px-6 py-5 text-lg leading-relaxed text-ink/85">
                {intro}
              </p>
            ) : null}

            <div className="border-b border-grey/15">
              {sections.map((s, i) => (
                <section
                  key={s.id}
                  id={s.id}
                  className="grid scroll-mt-28 gap-x-10 gap-y-3 border-t border-grey/15 py-9 sm:grid-cols-[5.5rem_1fr]"
                >
                  <p
                    aria-hidden="true"
                    className="font-heading text-5xl font-black leading-none text-transparent [-webkit-text-stroke:1.5px_var(--color-orange)] sm:text-6xl"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <div>
                    <h2 className="font-heading text-2xl font-bold text-grey">{s.title}</h2>
                    <div className="mt-3 max-w-2xl text-[1.02rem] leading-relaxed text-ink/80">
                      {s.body}
                    </div>
                  </div>
                </section>
              ))}
            </div>

            <a
              href={`mailto:${site.email}`}
              className="group mt-10 inline-flex items-center gap-4 border-l-4 border-orange bg-grey py-4 pl-5 pr-7 transition-colors hover:bg-grey-deep"
            >
              <span className="flex h-11 w-11 items-center justify-center bg-orange text-white">
                <MailIcon className="h-5 w-5" />
              </span>
              <span>
                <span className="block font-mono text-[10px] uppercase tracking-[0.16em] text-white/55">
                  Questions?
                </span>
                <span className="block font-heading text-lg font-bold text-white group-hover:text-orange-soft">
                  {site.email}
                </span>
              </span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
