import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/Button";
import { Kicker } from "@/components/Kicker";
import { ArchiveRestoreDiagram } from "@/components/ArchiveRestoreDiagram";
import { Reveal } from "@/components/Reveal";
import { Rings, DotGrid, Stripes, QuarterCircle, Triangle } from "@/components/Shapes";
import {
  FolderIcon,
  SearchIcon,
  ShieldCheckIcon,
  RestoreIcon,
  TapeReelIcon,
  CheckIcon,
} from "@/components/icons";
import { requirements } from "@/lib/requirements";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "From storage to LTFS tape to a searchable catalog. See the archive and restore workflow, and what BloomLTO needs to run.",
  alternates: { canonical: "/how-it-works" },
};

const steps = [
  {
    icon: <FolderIcon className="h-6 w-6" />,
    title: "Connect your storage.",
    body: "Add the folders or workspaces BloomLTO should watch, and set a priority for each.",
  },
  {
    icon: <TapeReelIcon className="h-6 w-6" />,
    title: "Scan and index.",
    body: "BloomLTO detects new files and records name, path and size in its catalog.",
  },
  {
    icon: <ShieldCheckIcon className="h-6 w-6" />,
    title: "Archive to tape.",
    body: "On your schedule, or on demand, files are written to LTO in LTFS. Preview the tape and fill level first.",
  },
  {
    icon: <RestoreIcon className="h-6 w-6" />,
    title: "Verify and protect.",
    body: "Re-hash tapes to confirm they read, duplicate cold spares, and back up the catalog to its own tape.",
  },
  {
    icon: <SearchIcon className="h-6 w-6" />,
    title: "Find and restore.",
    body: "Search by name, path, size or tape. Pick files, choose a destination, and BloomLTO pulls them from tape.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      {/* Page header */}
      <section className="relative isolate overflow-hidden bg-grey-deep">
        <Image
          src="/images/home/server-rack.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="-z-10 object-cover grayscale"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-grey-deep via-grey-deep/85 to-grey-deep/45" />
        <Rings className="-right-40 -top-40 -z-10 h-[520px] w-[520px] text-white/10" />
        <Triangle className="bottom-0 right-0 -z-10 h-32 w-32 text-orange sm:h-48 sm:w-48" />
        <DotGrid className="bottom-10 right-40 -z-10 hidden w-36 text-white/30 lg:block" />

        <div className="mx-auto max-w-[1760px] px-5 py-20 sm:px-8 sm:py-28 lg:px-12 xl:px-16">
          <Reveal>
            <Kicker dark>How it works</Kicker>
            <h1 className="max-w-4xl text-balance font-heading text-4xl font-extrabold text-white sm:text-6xl">
              A restore starts with a search, not a hunt for the right tape.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/75">
              BloomLTO indexes files as it archives them, so every file you write to
              tape stays one search away.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Archive and restore diagram */}
      <section className="relative isolate overflow-hidden bg-grey">
        <Rings className="-left-48 top-24 -z-10 h-[640px] w-[640px] text-white/[0.07]" />
        <Rings className="-right-56 bottom-0 -z-10 h-[560px] w-[560px] text-orange/20" />
        <DotGrid className="right-10 top-12 -z-10 hidden w-40 text-white/20 lg:block" />

        <div className="mx-auto max-w-[1760px] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 xl:px-16">
          <Reveal>
            <ArchiveRestoreDiagram />
          </Reveal>
        </div>
      </section>

      {/* Step by step */}
      <section className="relative isolate overflow-hidden bg-[#efefed]">
        <Image
          src="/images/home/patch-panel.jpg"
          alt=""
          fill
          sizes="100vw"
          className="-z-10 object-cover opacity-25 grayscale"
        />
        <div className="absolute inset-0 -z-10 bg-[#efefed]/70" />
        <QuarterCircle className="left-0 top-0 h-28 w-28 text-grey/10 sm:h-40 sm:w-40" />
        <Stripes className="-bottom-10 -right-10 h-48 w-48 text-grey/10" />

        <div className="relative mx-auto grid max-w-[1760px] gap-14 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-12 xl:px-16">
          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <div className="relative mx-auto w-full max-w-md lg:mx-0">
              <div aria-hidden="true" className="absolute -bottom-5 -left-5 h-2/3 w-2/3 bg-orange" />
              <DotGrid className="-right-6 -top-8 w-40 text-grey/35" />
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="/images/home/warehouse-aisle.jpg"
                  alt="Long warehouse aisle lined with rows of boxed pallets"
                  fill
                  sizes="(min-width: 1024px) 34vw, 90vw"
                  className="object-cover grayscale"
                />
                <div className="absolute inset-0 bg-grey-deep/30" />
              </div>
              <div className="absolute left-6 top-6 bg-grey-deep px-4 py-3">
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/50">
                  Workflow
                </p>
                <p className="mt-1 font-heading text-sm font-bold text-white">
                  {steps.length} steps, storage to restore
                </p>
              </div>
            </div>
          </Reveal>

          <ol className="border-b border-grey/15">
            {steps.map((step, i) => (
              <Reveal
                key={step.title}
                as="li"
                delay={i * 70}
                className="group flex flex-wrap items-center gap-x-5 gap-y-4 border-t border-grey/15 py-8 sm:flex-nowrap sm:items-start sm:gap-8"
              >
                <span
                  aria-hidden="true"
                  className="w-16 shrink-0 font-heading text-5xl font-black leading-none text-transparent [-webkit-text-stroke:1.5px_var(--color-orange)] sm:w-24 sm:text-7xl"
                >
                  0{i + 1}
                </span>
                <span className="flex h-12 w-12 shrink-0 items-center justify-center bg-grey text-white transition-colors duration-300 group-hover:bg-orange">
                  {step.icon}
                </span>
                <div className="w-full sm:w-auto">
                  <h2 className="font-heading text-2xl font-bold text-grey">{step.title}</h2>
                  <p className="mt-2 max-w-xl text-ink/75">{step.body}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Call to action */}
      <section className="relative isolate overflow-hidden bg-grey">
        <Image
          src="/images/home/datacenter-aisle.jpg"
          alt=""
          fill
          sizes="100vw"
          className="-z-10 object-cover grayscale"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-grey-deep via-grey-deep/85 to-grey-deep/50" />
        <div
          aria-hidden="true"
          className="absolute inset-y-0 right-[18%] -z-10 hidden w-24 bg-orange [clip-path:polygon(78%_0,100%_0,22%_100%,0_100%)] lg:block"
        />

        <Reveal className="mx-auto flex max-w-[1760px] flex-col gap-8 px-5 py-20 sm:px-8 sm:py-24 lg:flex-row lg:items-center lg:justify-between lg:px-12 xl:px-16">
          <h2 className="max-w-2xl font-heading text-3xl font-extrabold text-white sm:text-5xl">
            See it in action on your own library.
          </h2>
          <div className="lg:mr-[26%] lg:shrink-0">
            <Button href="/contact" size="lg">
              See it in action
            </Button>
          </div>
        </Reveal>
      </section>

      {/* Requirements */}
      <section id="requirements" className="relative isolate scroll-mt-20 overflow-hidden bg-grey-deep">
        <Rings className="-left-56 bottom-0 -z-10 h-[560px] w-[560px] text-white/[0.06]" />
        <DotGrid className="right-10 top-12 -z-10 hidden w-40 text-white/20 lg:block" />

        <div className="mx-auto grid max-w-[1760px] gap-14 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20 lg:px-12 xl:px-16">
          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <Kicker dark>Requirements · Self-qualify in a minute</Kicker>
            <h2 className="font-heading text-3xl font-extrabold text-white sm:text-5xl">
              Does BloomLTO fit your setup?
            </h2>
            <p className="mt-5 max-w-md text-lg text-white/70">
              BloomLTO runs alongside your existing library and storage. Here&apos;s what
              it expects on the other end of the cable.
            </p>

            <div className="relative mt-10 max-w-md border-l-4 border-orange bg-white/[0.05] p-6 sm:p-7">
              <h3 className="font-heading text-xl font-bold text-white">
                Not sure if your library qualifies?
              </h3>
              <p className="mt-2 text-[0.98rem] text-white/70">
                Tell us your library make and model, and we&apos;ll confirm compatibility
                before you download the trial.
              </p>
              <Button href="/contact" className="mt-5">
                Check my setup
              </Button>
            </div>
          </Reveal>

          <div>
            <dl className="border-b border-white/15">
              {requirements.map((r, i) => (
                <Reveal
                  key={r.item}
                  delay={(i % 4) * 60}
                  className="group relative grid gap-x-6 gap-y-1 border-t border-white/15 py-6 transition-colors duration-300 hover:bg-white/[0.04] sm:grid-cols-[auto_200px_1fr] sm:px-4"
                >
                  <span
                    aria-hidden="true"
                    className="absolute inset-y-0 left-0 w-0.5 origin-top scale-y-0 bg-orange transition-transform duration-300 group-hover:scale-y-100"
                  />
                  <CheckIcon className="hidden h-5 w-5 text-orange sm:mt-1 sm:block" />
                  <dt className="font-heading text-lg font-bold text-white">{r.item}</dt>
                  <dd className="text-[0.98rem] leading-relaxed text-white/70">{r.value}</dd>
                </Reveal>
              ))}
            </dl>
            <p className="mt-6 max-w-2xl text-sm text-white/50">
              Specific model numbers and version support are confirmed during setup, since
              they vary by library and drive firmware.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
