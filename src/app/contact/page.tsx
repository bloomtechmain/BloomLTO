import type { Metadata } from "next";
import Image from "next/image";
import { Kicker } from "@/components/Kicker";
import { DemoForm } from "@/components/DemoForm";
import { Reveal } from "@/components/Reveal";
import { Rings, DotGrid, Triangle } from "@/components/Shapes";
import { MailIcon } from "@/components/icons";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact / Demo",
  description:
    "Request a BloomLTO demo, or reach the team for support and general questions.",
  alternates: { canonical: "/contact" },
};

const nextSteps = [
  "Tell us about your setup.",
  "We reply within one business day.",
  "We walk through archiving and restores with your tapes.",
];

export default function ContactPage() {
  return (
    <section className="relative isolate overflow-hidden bg-grey-deep">
      <Image
        src="/images/home/datacenter-aisle.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-10 object-cover grayscale"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-grey-deep via-grey-deep/90 to-grey-deep/60" />
      <Rings className="-left-48 bottom-0 -z-10 h-[560px] w-[560px] text-white/[0.07]" />
      <Triangle className="bottom-0 right-0 -z-10 h-32 w-32 text-orange sm:h-48 sm:w-48" />
      <DotGrid className="right-10 top-12 -z-10 hidden w-40 text-white/25 lg:block" />

      <div className="mx-auto grid max-w-[1760px] gap-14 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-20 lg:px-12 xl:px-16">
        <Reveal>
          <Kicker dark>Contact / Demo</Kicker>
          <h1 className="max-w-xl text-balance font-heading text-4xl font-extrabold text-white sm:text-6xl">
            See BloomLTO on your own library.
          </h1>
          <p className="mt-6 max-w-md text-lg text-white/75">
            Tell us about your setup and we&apos;ll walk through archiving and
            restores with your tapes. We reply within one business day.
          </p>

          <ol className="mt-10 max-w-md border-b border-white/15">
            {nextSteps.map((step, i) => (
              <li key={step} className="flex items-baseline gap-5 border-t border-white/15 py-4">
                <span className="font-mono text-xs text-orange">0{i + 1}</span>
                <span className="font-heading text-lg font-bold text-white/85">{step}</span>
              </li>
            ))}
          </ol>

          <a
            href={`mailto:${site.email}`}
            className="group mt-10 inline-flex items-center gap-4 border-l-4 border-orange bg-white/[0.06] py-4 pl-5 pr-7 transition-colors hover:bg-white/[0.1]"
          >
            <span className="flex h-11 w-11 items-center justify-center bg-orange text-white">
              <MailIcon className="h-5 w-5" />
            </span>
            <span>
              <span className="block font-mono text-[10px] uppercase tracking-[0.16em] text-white/55">
                Prefer email?
              </span>
              <span className="block font-heading text-lg font-bold text-white group-hover:text-orange-soft">
                {site.email}
              </span>
            </span>
          </a>
        </Reveal>

        <Reveal delay={140} className="relative">
          <div aria-hidden="true" className="absolute -bottom-4 -right-4 h-2/3 w-2/3 bg-orange" />
          <div className="relative bg-white p-7 shadow-[0_40px_80px_-40px_rgba(0,0,0,0.8)] sm:p-10">
            <p className="mb-7 flex items-center gap-3 border-b border-grey/15 pb-5 font-mono text-[11px] uppercase tracking-[0.18em] text-grey/55">
              <span className="h-2 w-2 bg-orange" />
              Demo request
            </p>
            <DemoForm />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
