import type { Metadata } from "next";
import Image from "next/image";
import { Kicker } from "@/components/Kicker";
import { Rings, DotGrid, Stripes, QuarterCircle, Triangle } from "@/components/Shapes";
import { CheckIcon } from "@/components/icons";
import { BuyButton } from "@/components/BuyButton";
import { TrialButton } from "@/components/TrialButton";
import { Accordion } from "@/components/Accordion";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Pricing",
  description: "One lifetime license, $348.99. No subscriptions, no per-seat fees.",
  alternates: { canonical: "/pricing" },
};

const licenseIncludes = [
  "One-time payment, lifetime license for one server",
  "Updates included for 3 years",
  "The software keeps working after year 3 — no forced upgrade",
  "Support by ticket",
  "Archive and restore on LTO-5 through LTO-9",
];

const faqs = [
  {
    q: "What happens after the 3 years of included updates?",
    a: "BloomLTO keeps working. You just won't receive new feature updates unless you renew a support plan or purchase an update extension.",
  },
  {
    q: "Does the license cover more than one server?",
    a: "One license covers one server. Contact us if you're archiving from multiple libraries or sites.",
  },
  {
    q: "What does the yearly support plan add?",
    a: "The $1,200 yearly plan is for teams that want a faster response commitment beyond standard ticket support. Ask us for current response-time targets.",
  },
  {
    q: "How does the trial work?",
    a: "Download a full-featured, 30-day copy. Nothing is disabled. When the trial ends, BloomLTO asks for a license key to keep running.",
  },
];

// What the header copy says other archive software bills by.
const otherModels = ["Per seat", "Per terabyte", "Per year"];

export default function PricingPage() {
  return (
    <>
      {/* Page header */}
      <section className="relative isolate overflow-hidden bg-grey-deep">
        <Image
          src="/images/home/warehouse-aisle.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="-z-10 object-cover grayscale"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-grey-deep via-grey-deep/90 to-grey-deep/55" />
        <Rings className="-right-40 -top-40 -z-10 h-[520px] w-[520px] text-white/10" />
        <DotGrid className="bottom-10 left-8 -z-10 hidden w-36 text-white/20 lg:block" />

        <div className="mx-auto grid max-w-[1760px] gap-12 px-5 pb-40 pt-20 sm:px-8 sm:pb-48 sm:pt-28 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:px-12 xl:px-16">
          <Reveal>
            <Kicker dark>Simple, flat pricing</Kicker>
            <h1 className="max-w-3xl text-balance font-heading text-4xl font-extrabold text-white sm:text-6xl">
              One price. No subscriptions.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/75">
              Enterprise archive software charges per seat, per terabyte, or per year.
              BloomLTO doesn&apos;t.
            </p>
          </Reveal>

          <Reveal delay={140}>
            <ul className="border-b border-white/20 lg:ml-auto lg:max-w-sm">
              {otherModels.map((model) => (
                <li
                  key={model}
                  className="flex items-center justify-between gap-4 border-t border-white/20 py-3.5"
                >
                  <span className="font-heading text-xl font-bold text-white/40 line-through decoration-orange decoration-2">
                    {model}
                  </span>
                  <svg viewBox="0 0 12 12" className="h-3.5 w-3.5 text-white/35" fill="none" aria-hidden="true">
                    <path d="M1.5 1.5l9 9M10.5 1.5l-9 9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                </li>
              ))}
              <li className="flex items-center justify-between gap-4 border-t border-orange py-3.5">
                <span className="font-heading text-xl font-bold text-white">One time</span>
                <CheckIcon className="h-5 w-5 text-orange" />
              </li>
            </ul>
          </Reveal>
        </div>
      </section>

      {/* License and add-on, pulled up over the header */}
      <section className="relative isolate bg-[#efefed]">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <Stripes className="-bottom-10 -left-10 h-48 w-48 text-grey/10" />
          <QuarterCircle className="right-0 top-0 h-28 w-28 -scale-x-100 text-grey/10 sm:h-40 sm:w-40" />
        </div>

        <div className="mx-auto max-w-[1760px] px-5 pb-20 sm:px-8 sm:pb-28 lg:px-12 xl:px-16">
          <Reveal className="relative -mt-24 sm:-mt-28">
            <div aria-hidden="true" className="absolute -bottom-4 -right-4 h-2/3 w-1/2 bg-orange" />
            <div className="relative grid shadow-[0_40px_80px_-40px_rgba(0,0,0,0.55)] lg:grid-cols-[0.9fr_1.1fr]">
              <div className="relative isolate overflow-hidden bg-grey p-8 sm:p-12">
                <Rings className="-bottom-40 -left-40 -z-10 h-[420px] w-[420px] text-white/[0.07]" />
                <Triangle className="right-0 top-0 -z-10 h-20 w-20 -scale-y-100 text-orange" />
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-orange-soft">
                  BloomLTO license
                </p>
                <p className="mt-6 font-heading text-6xl font-black leading-none text-white sm:text-8xl">
                  $348<span className="text-4xl sm:text-5xl">.99</span>
                </p>
                <p className="mt-4 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-white/60">
                  <span className="h-px w-8 bg-orange" />
                  One time
                </p>
                <div className="mt-10 grid grid-cols-3 border-t border-white/15 pt-6">
                  {[
                    ["1", "Server"],
                    ["3 yrs", "Updates"],
                    ["LTO-5–9", "Supported"],
                  ].map(([value, label], i) => (
                    <div key={label} className={i > 0 ? "border-l border-white/15 pl-4" : "pr-4"}>
                      <p className="whitespace-nowrap font-heading text-xl font-black text-white sm:text-2xl">
                        {value}
                      </p>
                      <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.14em] text-white/50">
                        {label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white p-8 sm:p-12">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-grey/50">
                  What you get
                </p>
                <ul className="mt-5 border-b border-grey/15">
                  {licenseIncludes.map((line) => (
                    <li key={line} className="flex items-start gap-4 border-t border-grey/15 py-4">
                      <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-orange-deep" />
                      <span className="text-ink/85">{line}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <BuyButton />
                  <TrialButton
                    variant="outline"
                    className="border-grey! text-grey! hover:bg-grey! hover:text-white!"
                  />
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="mt-14 grid gap-6 border-l-4 border-orange bg-white/70 p-7 sm:p-9 lg:grid-cols-[auto_1fr_auto] lg:items-center lg:gap-12">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-grey/50">
                  Optional add-on
                </p>
                <p className="mt-2 font-heading text-4xl font-black text-grey">
                  $1,200
                  <span className="ml-2 font-mono text-xs font-normal uppercase tracking-[0.14em] text-grey/55">
                    / year
                  </span>
                </p>
              </div>
              <div>
                <h2 className="font-heading text-xl font-bold text-grey">Yearly support plan</h2>
                <p className="mt-1.5 max-w-xl text-[0.98rem] text-ink/75">
                  For teams that want faster response commitments beyond the ticket
                  support included with every license.
                </p>
              </div>
              <p className="max-w-[16rem] text-sm text-ink/60">
                Ask us about current plan details when you book a demo.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative isolate overflow-hidden bg-[#efefed]">
        <Image
          src="/images/home/patch-panel.jpg"
          alt=""
          fill
          sizes="100vw"
          className="-z-10 object-cover opacity-25 grayscale"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#efefed] via-[#efefed]/70 to-[#efefed]/70" />

        <div className="mx-auto grid max-w-[1760px] gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20 lg:px-12 xl:px-16">
          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <Kicker>Questions</Kicker>
            <h2 className="font-heading text-3xl font-extrabold text-grey sm:text-5xl">
              Pricing FAQ
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <Accordion items={faqs} />
          </Reveal>
        </div>
      </section>
    </>
  );
}
