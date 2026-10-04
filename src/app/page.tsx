import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/Button";
import { CountUp } from "@/components/CountUp";
import { Rings, DotGrid, Stripes, QuarterCircle, Triangle, Cross } from "@/components/Shapes";
import { HowItWorksFlow } from "@/components/HowItWorksFlow";
import { FeatureHighlights } from "@/components/FeatureHighlights";
import { ProductShowcase } from "@/components/ProductShowcase";
import { DemoForm } from "@/components/DemoForm";
import { Reveal } from "@/components/Reveal";
import { HeroVideo } from "@/components/HeroVideo";
import { HeroSlideshow, type HeroSlide } from "@/components/HeroSlideshow";
import { HeroStage } from "@/components/HeroStage";
import { ProblemSection } from "@/components/ProblemSection";
import {
  SearchIcon,
  ScheduleIcon,
  LibraryIcon,
  ShieldCheckIcon,
  RestoreIcon,
  BellIcon,
  OpenLockIcon,
  TapeReelIcon,
  ArrowRightIcon,
} from "@/components/icons";
import { site } from "@/lib/site";

function Kicker({
  children,
  dark = false,
  center = false,
}: {
  children: React.ReactNode;
  dark?: boolean;
  center?: boolean;
}) {
  return (
    <p
      className={`mb-5 flex items-center gap-3 font-heading text-sm font-bold uppercase tracking-[0.16em] ${
        dark ? "text-orange-soft" : "text-orange-deep"
      } ${center ? "justify-center" : ""}`}
    >
      <span aria-hidden="true" className="h-0.5 w-10 bg-orange" />
      {children}
    </p>
  );
}

const trust = [
  { icon: <OpenLockIcon />, label: "LTFS · open format", note: "Readable without BloomLTO" },
  { icon: <TapeReelIcon />, label: "18 TB per tape", note: "Native LTO-9 capacity" },
  { icon: <ShieldCheckIcon />, label: "Verified & duplicated", note: "Re-hash and cold spares" },
  { icon: <RestoreIcon />, label: "Audit-logged restores", note: "Who restored what" },
];

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: site.name,
  applicationCategory: "BusinessApplication",
  operatingSystem: "Linux",
  description: site.description,
  offers: {
    "@type": "Offer",
    price: "348.99",
    priceCurrency: "USD",
  },
};

export const metadata: Metadata = {
  title: "Searchable LTO Tape Archive Software",
  description:
    "Archive files to LTO, index every one, and restore on request. BloomLTO makes your tape library searchable.",
  alternates: { canonical: "/" },
};

const heroSlides: HeroSlide[] = [
  {
    headline: "Your LTO library, finally searchable.",
    subhead:
      "BloomLTO archives files from your server to LTO tape, indexes every one in a database, and restores any file on request.",
  },
  {
    headline: "Find any file in seconds.",
    subhead:
      "Search by filename, path, size or tape barcode — no more guessing which tape holds what.",
  },
  {
    headline: "Archive on a schedule. Restore with confidence.",
    subhead:
      "Verification and duplication protect against silent tape failure, with a full audit trail on every restore.",
  },
];

const steps = [
  {
    n: "01",
    title: "Point BloomLTO at your storage folders.",
    body: "Add any mounted storage as a source, and set a priority for each.",
  },
  {
    n: "02",
    title: "Archive on a schedule, straight to LTO with LTFS.",
    body: "Runs start on their own. Preview the tape and fill level before anything writes.",
  },
  {
    n: "03",
    title: "Find and restore any file by name, path, size or tape.",
    body: "Search the catalog, queue a recovery, and pull files back to any destination.",
  },
];

const highlights = [
  {
    icon: <SearchIcon className="h-6 w-6" />,
    title: "Searchable catalog",
    body: "Every archived file is indexed by name, path, size and tape the moment it's written.",
  },
  {
    icon: <ScheduleIcon className="h-6 w-6" />,
    title: "Scheduled archiving",
    body: "Set days, a time, a library and sources. Runs start on their own, or run now on demand.",
  },
  {
    icon: <LibraryIcon className="h-6 w-6" />,
    title: "Live tape and slot view",
    body: "See drive and slot status for the whole library, and test each connection in Settings.",
  },
  {
    icon: <ShieldCheckIcon className="h-6 w-6" />,
    title: "Verification and duplication",
    body: "Re-hash tapes to confirm they read, and keep cold-spare duplicates against media loss.",
  },
  {
    icon: <RestoreIcon className="h-6 w-6" />,
    title: "Restore queue with history",
    body: "Queue recoveries to any destination, with a permanent log of who restored what.",
  },
  {
    icon: <BellIcon className="h-6 w-6" />,
    title: "Alerts and email notifications",
    body: "One page lists everything needing attention, with optional email for every job.",
  },
];

const stats = [
  { value: "18 TB", label: "Native capacity per LTO-9 tape" },
  { value: "LTO-5–9", label: "Supported for archive and restore" },
  { value: "3 yrs", label: "Updates included with your license" },
];

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      {/* 1. Hero */}
      <section className="relative isolate overflow-hidden bg-grey-deep">
        <HeroVideo className="-z-20 grayscale" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-grey-deep via-grey-deep/85 to-grey-deep/50" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-1/2 bg-gradient-to-t from-grey-deep to-transparent" />
        <div className="hero-grid absolute inset-0 -z-10" />
        <Rings className="-left-64 top-1/3 -z-10 h-[640px] w-[640px] text-white/[0.06]" />

        <div className="mx-auto grid max-w-[1760px] gap-14 px-5 pb-16 pt-14 sm:px-8 sm:pb-20 sm:pt-20 lg:min-h-[720px] lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16 lg:px-12 xl:px-16">
          <div>
            <Reveal>
              <Kicker dark>Archive · Index · Restore</Kicker>
            </Reveal>
            <Reveal delay={80}>
              <HeroSlideshow slides={heroSlides} />
            </Reveal>
            <Reveal delay={200}>
              <div className="mt-9 flex flex-wrap gap-4">
                <Button href="/pricing" size="lg">
                  Start 30-day trial
                  <ArrowRightIcon className="h-5 w-5" />
                </Button>
                <Button
                  href="/pricing"
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-grey"
                >
                  Buy for $348.99
                </Button>
              </div>
              <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.14em] text-white/50">
                Full-featured trial · No card required · Ships as a download
              </p>
            </Reveal>
          </div>

          <Reveal delay={260}>
            <HeroStage />
          </Reveal>
        </div>

        {/* Trust strip */}
        <div className="border-t border-white/15 bg-grey-deep/75 backdrop-blur-sm">
          <ul className="mx-auto grid max-w-[1760px] grid-cols-2 px-5 sm:px-8 lg:grid-cols-4 lg:px-12 xl:px-16">
            {trust.map((t, i) => (
              <li
                key={t.label}
                className={`flex items-center gap-3.5 py-5 pr-4 ${
                  i % 2 === 1 ? "border-l border-white/15 pl-5" : ""
                } ${i >= 2 ? "border-t border-white/15 lg:border-t-0" : ""} ${
                  i === 2 ? "lg:border-l lg:pl-5" : ""
                }`}
              >
                <span className="shrink-0 text-orange [&>svg]:h-7 [&>svg]:w-7">{t.icon}</span>
                <span>
                  <span className="block font-heading font-bold leading-tight text-white">
                    {t.label}
                  </span>
                  <span className="hidden font-mono text-[10px] uppercase tracking-[0.14em] text-white/45 sm:block">
                    {t.note}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 2. Problem section */}
      <ProblemSection />

      {/* 3. Three-step explainer */}
      <section className="relative isolate overflow-hidden bg-grey-deep">
        <Image
          src="/images/home/server-rack.jpg"
          alt=""
          fill
          sizes="100vw"
          className="-z-10 object-cover grayscale"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-grey-deep via-grey-deep/80 to-grey-deep/40" />
        <Rings className="-right-40 -top-40 -z-10 h-[520px] w-[520px] text-white/10" />
        <Triangle className="bottom-0 right-0 -z-10 h-40 w-40 text-orange sm:h-56 sm:w-56" />
        <DotGrid className="bottom-10 right-44 -z-10 hidden w-36 text-white/30 lg:block" />

        <div className="mx-auto max-w-[1760px] px-5 py-20 sm:px-8 sm:py-28 lg:px-12 xl:px-16">
          <Reveal>
            <div className="max-w-2xl">
              <Kicker dark>How it works</Kicker>
              <h2 className="font-heading text-3xl font-extrabold text-white sm:text-5xl">
                From storage folder to searchable tape.
              </h2>
            </div>
          </Reveal>

          <Reveal delay={120} className="mt-16">
            <HowItWorksFlow steps={steps} />
          </Reveal>

          <Reveal delay={200}>
            <Link
              href="/how-it-works"
              className="group mt-14 inline-flex items-center gap-2 border-b-2 border-orange pb-1 font-heading font-bold text-white transition-colors hover:text-orange-soft"
            >
              See the full walkthrough
              <ArrowRightIcon className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* 4. Feature highlights */}
      <section className="relative isolate overflow-hidden bg-[#efefed]">
        <Image
          src="/images/home/server-rack.jpg"
          alt=""
          fill
          sizes="100vw"
          className="-z-10 object-cover opacity-25 grayscale"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-l from-[#efefed]/90 via-[#efefed]/70 to-[#efefed]/40" />
        <QuarterCircle className="left-0 top-0 h-28 w-28 text-grey/10 sm:h-40 sm:w-40" />
        <Stripes className="-bottom-10 -right-10 h-48 w-48 text-grey/10" />

        <div className="relative mx-auto max-w-[1760px] px-5 py-20 sm:px-8 sm:py-28 lg:px-12 xl:px-16">
          <Reveal>
            <FeatureHighlights items={highlights} />
          </Reveal>
        </div>
      </section>

      {/* 5. Screenshot showcase */}
      <section className="relative isolate overflow-hidden bg-grey">
        <Rings className="-left-48 top-24 -z-10 h-[640px] w-[640px] text-white/[0.07]" />
        <Rings className="-right-56 bottom-0 -z-10 h-[560px] w-[560px] text-orange/25" />
        <Cross className="right-[14%] top-40 -z-10 hidden h-5 w-5 text-white/40 md:block" />
        <DotGrid className="right-10 top-12 -z-10 hidden w-40 text-white/20 lg:block" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-1/3 bg-grey-deep [clip-path:polygon(0_45%,100%_0,100%_100%,0_100%)]" />

        <div className="mx-auto max-w-[1760px] px-5 py-20 sm:px-8 sm:py-28 lg:px-12 xl:px-16">
          <Reveal>
            <ProductShowcase />
          </Reveal>
        </div>
      </section>

      {/* 6. Numbers band + open standards */}
      <section className="relative isolate overflow-hidden bg-grey-deep">
        <div className="absolute inset-y-0 right-0 -z-10 hidden w-[52%] [clip-path:polygon(22%_0,100%_0,100%_100%,0_100%)] lg:block">
          <Image
            src="/images/home/datacenter-aisle.jpg"
            alt="Engineer checking equipment in a data center aisle"
            fill
            sizes="52vw"
            className="object-cover grayscale"
          />
          <div className="absolute inset-0 bg-grey-deep/35" />
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-y-0 right-[49%] -z-10 hidden w-24 bg-orange [clip-path:polygon(78%_0,100%_0,22%_100%,0_100%)] lg:block"
        />
        <DotGrid className="bottom-8 left-8 -z-10 w-32 text-white/15" />

        <div className="mx-auto max-w-[1760px] px-5 py-20 sm:px-8 sm:py-28 lg:px-12 xl:px-16">
          <div className="lg:max-w-[44%]">
            <Reveal>
              <Kicker dark>By the numbers</Kicker>
              <h2 className="font-heading text-3xl font-extrabold text-white sm:text-5xl">
                Built for terabytes of data.
              </h2>
            </Reveal>

            <dl className="mt-12 grid gap-x-6 gap-y-8 sm:grid-cols-[auto_auto_auto] sm:justify-between">
              {stats.map((s, i) => (
                <Reveal key={s.label} delay={i * 100}>
                  <div className="border-l-4 border-orange pl-5">
                    <dd className="whitespace-nowrap font-heading text-3xl font-black text-white sm:text-4xl">
                      <CountUp value={s.value} />
                    </dd>
                    <dt className="mt-2 text-sm leading-snug text-white/70">{s.label}</dt>
                  </div>
                </Reveal>
              ))}
            </dl>

            <Reveal delay={200}>
              <div className="mt-14 flex flex-wrap items-center gap-x-6 gap-y-4 border-t border-white/15 pt-8">
                <p className="font-heading text-sm font-bold uppercase tracking-[0.14em] text-white/55">
                  Built on open standards
                </p>
                <div className="flex gap-3">
                  {["LTO-9", "LTFS"].map((b) => (
                    <span
                      key={b}
                      className="border border-white/40 px-3 py-1 font-heading text-sm font-bold text-white"
                    >
                      {b}
                    </span>
                  ))}
                </div>
                <p className="w-full text-lg font-semibold text-white/85">
                  Your tapes stay readable without BloomLTO.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 7. Final CTA */}
      <section className="relative overflow-hidden bg-cream">
        <Stripes className="-left-12 top-10 h-52 w-52 text-peach" />
        <Rings className="-bottom-40 -right-40 h-[480px] w-[480px] text-orange/25" />

        <div className="relative mx-auto max-w-[1760px] px-5 py-20 sm:px-8 sm:py-28 lg:px-12 xl:px-16">
          <Reveal>
            <div className="mx-auto grid max-w-6xl overflow-hidden bg-white shadow-[0_40px_80px_-40px_rgba(7,27,54,0.45)] lg:grid-cols-[0.9fr_1.1fr]">
              <div className="relative isolate flex min-h-[320px] flex-col justify-end overflow-hidden p-8 sm:p-10">
                <Image
                  src="/images/home/patch-panel.jpg"
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="-z-10 object-cover grayscale"
                />
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-grey-deep via-grey-deep/80 to-grey-deep/30" />
                <QuarterCircle className="left-0 top-0 -z-10 h-24 w-24 text-orange" />
                <Kicker dark>Book a demo</Kicker>
                <h2 className="font-heading text-3xl font-extrabold text-white sm:text-4xl">
                  See BloomLTO on your own library.
                </h2>
                <p className="mt-4 max-w-md text-white/80">
                  Tell us about your setup, and we&apos;ll show you exactly how archiving and
                  restores work with your tapes.
                </p>
              </div>
              <div className="p-7 sm:p-10">
                <DemoForm compact />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
