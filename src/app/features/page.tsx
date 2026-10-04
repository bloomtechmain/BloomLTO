import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/Button";
import { Kicker } from "@/components/Kicker";
import { AppWindow, type AppViewId } from "@/components/AppWindow";
import { Reveal } from "@/components/Reveal";
import { Rings, DotGrid, Stripes, QuarterCircle, Triangle } from "@/components/Shapes";
import {
  LibraryIcon,
  TapeReelIcon,
  FolderIcon,
  TicketIcon,
  PreviewIcon,
  ShieldCheckIcon,
  LayersIcon,
  BellIcon,
  UsersIcon,
  ChartIcon,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Scheduled archiving, file search, verification, duplication and recovery for your LTO library.",
  alternates: { canonical: "/features" },
};

const leadFeatures: {
  id: string;
  eyebrow: string;
  title: string;
  body: string;
  view: AppViewId;
  specs: string[];
}[] = [
  {
    id: "search",
    eyebrow: "Search and browse",
    title: "Find any file in seconds.",
    body: "Search by filename, path, size or tape barcode, or browse the archive by library, then select results to recover.",
    view: "search",
    specs: ["Filename", "Path", "Size", "Tape barcode"],
  },
  {
    id: "scheduling",
    eyebrow: "Scheduled archiving",
    title: "Set it and forget it.",
    body: "Pick days, a time, a library and sources. Archive runs start on their own, or run now when you need to.",
    view: "schedules",
    specs: ["Days", "Time", "Library", "Sources"],
  },
  {
    id: "recovery",
    eyebrow: "Recovery",
    title: "Restore to where you need it.",
    body: "Queue recoveries, pick a destination, and keep a permanent log of who requested what, how many files, and how large.",
    view: "recovery",
    specs: ["Destination", "Requester", "File count", "Total size"],
  },
];

const moreFeatures = [
  {
    icon: <TapeReelIcon className="h-6 w-6" />,
    title: "Tape inventory",
    headline: "Every tape, at a glance.",
    body: "See barcode, slot, LTO generation, status, purpose and used capacity for each tape. Format, mark full, verify, run an LTFS check or duplicate with one click.",
  },
  {
    icon: <LibraryIcon className="h-6 w-6" />,
    title: "Live library view",
    headline: "Know what is in the robot.",
    body: "Live drive and slot status for the whole library, with refresh. Add more libraries and test each connection from Settings.",
  },
  {
    icon: <FolderIcon className="h-6 w-6" />,
    title: "Sources",
    headline: "Point it at your storage.",
    body: "Choose folders or workspaces to sweep, set priorities, and watch scans with live throughput and time remaining.",
  },
  {
    icon: <TicketIcon className="h-6 w-6" />,
    title: "Manual archive tickets",
    headline: "Archive exactly what you choose.",
    body: "Bundle specific files into a named, reusable ticket, separate from whole-folder sweeps. Retry a failed ticket without rebuilding it.",
  },
  {
    icon: <PreviewIcon className="h-6 w-6" />,
    title: "Job preview",
    headline: "Check before you commit.",
    body: "Review the target tape, file list and projected fill percentage before starting a run.",
  },
  {
    icon: <ShieldCheckIcon className="h-6 w-6" />,
    title: "Verification",
    headline: "Prove your tapes still read.",
    body: "Re-hash a tape's contents against the catalog to confirm data is intact.",
  },
  {
    icon: <LayersIcon className="h-6 w-6" />,
    title: "Catalog backup and duplication",
    headline: "Protect the index and the tapes.",
    body: "The database catalog backs up weekly to a dedicated tape. Cold-spare duplicate tapes guard against media loss.",
  },
  {
    icon: <BellIcon className="h-6 w-6" />,
    title: "Alerts and email",
    headline: "Hear about problems first.",
    body: "One alerts page lists everything needing attention. Optional email for every archive, restore, format, backup or duplication start, fail or finish.",
  },
  {
    icon: <UsersIcon className="h-6 w-6" />,
    title: "Users, roles and audit log",
    headline: "Give people the right access.",
    body: "Admin (full access), Operator (day-to-day archiving and restoring) and Viewer (read-only). Recovery requests are logged permanently, so you can see who restored what.",
  },
  {
    icon: <ChartIcon className="h-6 w-6" />,
    title: "Reports",
    headline: "See how the archive is doing.",
    body: "Fleet utilization, 30-day archive throughput, and job outcomes for archive runs, restores and duplications.",
  },
];

export default function FeaturesPage() {
  return (
    <>
      {/* Page header */}
      <section className="relative isolate overflow-hidden bg-grey-deep">
        <Image
          src="/images/home/datacenter-aisle.jpg"
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

        <div className="mx-auto grid max-w-[1760px] gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:px-12 xl:px-16">
          <Reveal>
            <Kicker dark>Full capability tour</Kicker>
            <h1 className="max-w-3xl text-balance font-heading text-4xl font-extrabold text-white sm:text-6xl">
              Everything the archive can do.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/75">
              Thirteen feature areas, from the first scan to the last restore. Search,
              scheduling and recovery lead — they&apos;re what make a tape library usable.
            </p>
          </Reveal>

          <Reveal delay={140}>
            <nav aria-label="Lead features" className="border-b border-white/20 lg:mr-40">
              {leadFeatures.map((f, i) => (
                <a
                  key={f.id}
                  href={`#${f.id}`}
                  className="group flex items-baseline gap-4 border-t border-white/20 py-4 transition-colors hover:border-orange"
                >
                  <span className="font-mono text-xs text-orange">0{i + 1}</span>
                  <span className="font-heading text-xl font-bold text-white/80 transition-colors group-hover:text-white">
                    {f.eyebrow}
                  </span>
                  <span
                    aria-hidden="true"
                    className="ml-auto text-white/40 transition-all group-hover:translate-y-0.5 group-hover:text-orange"
                  >
                    ↓
                  </span>
                </a>
              ))}
            </nav>
          </Reveal>
        </div>
      </section>

      {/* Lead features */}
      {leadFeatures.map((feature, i) => {
        const dark = i % 2 === 1;
        return (
          <section
            key={feature.id}
            id={feature.id}
            className={`relative isolate scroll-mt-20 overflow-hidden ${dark ? "bg-grey" : "bg-[#efefed]"}`}
          >
            {dark ? (
              <>
                <Rings className="-left-48 top-10 -z-10 h-[560px] w-[560px] text-white/[0.07]" />
                <DotGrid className="right-10 top-12 -z-10 hidden w-40 text-white/20 lg:block" />
              </>
            ) : (
              <>
                <Image
                  src="/images/home/patch-panel.jpg"
                  alt=""
                  fill
                  sizes="100vw"
                  className="-z-10 object-cover opacity-25 grayscale"
                />
                <div className="absolute inset-0 -z-10 bg-[#efefed]/70" />
                <QuarterCircle
                  className={`top-0 h-28 w-28 text-grey/10 sm:h-40 sm:w-40 ${
                    i === 0 ? "left-0" : "right-0 -scale-x-100"
                  }`}
                />
                <Stripes className="-bottom-10 -right-10 h-48 w-48 text-grey/10" />
              </>
            )}

            <div
              className={`relative mx-auto grid max-w-[1760px] gap-14 px-5 py-20 sm:px-8 sm:py-28 lg:items-center lg:gap-20 lg:px-12 xl:px-16 ${
                dark ? "lg:grid-cols-[1.25fr_0.75fr]" : "lg:grid-cols-[0.75fr_1.25fr]"
              }`}
            >
              <Reveal className={dark ? "lg:order-2" : ""}>
                <p
                  aria-hidden="true"
                  className="font-heading text-7xl font-black leading-none text-transparent [-webkit-text-stroke:2px_var(--color-orange)] sm:text-8xl"
                >
                  0{i + 1}
                </p>
                <div className="mt-6">
                  <Kicker dark={dark}>{feature.eyebrow}</Kicker>
                </div>
                <h2
                  className={`font-heading text-3xl font-extrabold sm:text-5xl ${
                    dark ? "text-white" : "text-grey"
                  }`}
                >
                  {feature.title}
                </h2>
                <p className={`mt-5 max-w-md text-lg ${dark ? "text-white/70" : "text-ink/75"}`}>
                  {feature.body}
                </p>
                <ul className="mt-8 flex flex-wrap gap-2">
                  {feature.specs.map((spec) => (
                    <li
                      key={spec}
                      className={`border px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.12em] ${
                        dark ? "border-white/25 text-white/70" : "border-grey/25 text-grey/75"
                      }`}
                    >
                      {spec}
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal delay={140} className="relative">
                <div
                  aria-hidden="true"
                  className={`absolute -bottom-4 h-2/3 w-2/3 bg-orange ${dark ? "-left-4" : "-right-4"}`}
                />
                <AppWindow view={feature.view} bodyClassName="min-h-[330px]" />
              </Reveal>
            </div>
          </section>
        );
      })}

      {/* The remaining ten */}
      <section className="relative isolate overflow-hidden bg-grey-deep">
        <Rings className="-right-56 top-0 -z-10 h-[560px] w-[560px] text-orange/20" />
        <DotGrid className="bottom-10 left-8 -z-10 w-32 text-white/15" />

        <div className="mx-auto max-w-[1760px] px-5 py-20 sm:px-8 sm:py-28 lg:px-12 xl:px-16">
          <Reveal>
            <div className="max-w-2xl">
              <Kicker dark>And the rest</Kicker>
              <h2 className="font-heading text-3xl font-extrabold text-white sm:text-5xl">
                The details that keep an archive trustworthy.
              </h2>
            </div>
          </Reveal>

          <div className="mt-14 grid border-l border-t border-white/15 md:grid-cols-2">
            {moreFeatures.map((f, i) => (
              <Reveal key={f.title} delay={(i % 2) * 90} className="h-full">
                <div className="group relative flex h-full gap-5 border-b border-r border-white/15 p-6 transition-colors duration-300 hover:bg-white/[0.05] sm:gap-6 sm:p-8">
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-orange transition-transform duration-500 group-hover:scale-x-100"
                  />
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center bg-white/10 text-white transition-colors duration-300 group-hover:bg-orange">
                    {f.icon}
                  </span>
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-white/45">
                      <span className="text-orange">{String(i + 4).padStart(2, "0")}</span> ·{" "}
                      {f.title}
                    </p>
                    <h3 className="mt-2 font-heading text-xl font-bold text-white">{f.headline}</h3>
                    <p className="mt-2 text-[0.98rem] leading-relaxed text-white/65">{f.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.14em] text-white/35">
            App screens above are illustrations with sample data
          </p>
        </div>
      </section>

      {/* Closing call to action */}
      <section className="relative isolate overflow-hidden bg-grey">
        <Image
          src="/images/home/server-rack.jpg"
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
            Ready to see it on your own tapes?
          </h2>
          <div className="flex flex-wrap gap-4 lg:mr-[24%] lg:shrink-0 lg:flex-nowrap">
            <Button href="/contact" size="lg">
              Book a demo
            </Button>
            <Button
              href="/pricing"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-grey"
            >
              Start 30-day trial
            </Button>
          </div>
        </Reveal>
      </section>
    </>
  );
}
