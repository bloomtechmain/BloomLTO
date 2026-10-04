import Link from "next/link";
import { Logo } from "./Logo";
import { Button } from "./Button";
import { Rings, DotGrid } from "./Shapes";
import { ArrowRightIcon, MailIcon } from "./icons";
import { footerNav, legalNav, site } from "@/lib/site";

const heading = "font-mono text-[11px] uppercase tracking-[0.18em] text-white/45";

export function Footer() {
  return (
    <footer className="relative isolate overflow-hidden border-t-4 border-orange bg-grey-deep">
      <Rings className="-bottom-56 -left-56 -z-10 h-[620px] w-[620px] text-white/[0.06]" />
      <DotGrid className="right-10 top-12 -z-10 hidden w-40 text-white/15 lg:block" />
      <p
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-[0.22em] right-0 -z-10 select-none whitespace-nowrap font-heading text-[26vw] font-black leading-none text-white/[0.035] lg:text-[17vw]"
      >
        BloomLTO
      </p>

      <div className="mx-auto max-w-[1760px] px-5 sm:px-8 lg:px-12 xl:px-16">
        {/* Statement and calls to action */}
        <div className="flex flex-col gap-10 border-b border-white/15 py-16 sm:py-20 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <Link href="/" aria-label="BloomLTO home" className="inline-block">
              <Logo light />
            </Link>
            <p className="mt-8 max-w-2xl font-heading text-3xl font-extrabold leading-tight text-white sm:text-5xl">
              Archive to LTO. Find anything.{" "}
              <span className="text-orange">Restore in clicks.</span>
            </p>
          </div>
          <div className="flex flex-wrap gap-4 lg:shrink-0">
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
        </div>

        {/* Link columns */}
        <div className="grid gap-12 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className={heading}>Get in touch</p>
            <a
              href={`mailto:${site.email}`}
              className="group mt-5 inline-flex items-center gap-4 border-l-4 border-orange bg-white/[0.05] py-3.5 pl-4 pr-6 transition-colors hover:bg-white/[0.09]"
            >
              <span className="flex h-10 w-10 items-center justify-center bg-orange text-white">
                <MailIcon className="h-5 w-5" />
              </span>
              <span className="font-heading text-lg font-bold text-white group-hover:text-orange-soft">
                {site.email}
              </span>
            </a>
          </div>

          <nav aria-label="Site">
            <p className={heading}>Site</p>
            <ul className="mt-4 border-b border-white/10">
              {footerNav.map((item) => (
                <li key={item.href} className="border-t border-white/10">
                  <Link
                    href={item.href}
                    className="group flex items-center justify-between py-2.5 font-heading font-bold text-white/75 transition-colors hover:text-white"
                  >
                    {item.label}
                    <ArrowRightIcon className="h-4 w-4 -translate-x-1 text-orange opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Legal">
            <p className={heading}>{site.legalName}</p>
            <ul className="mt-4 border-b border-white/10">
              {legalNav.map((item) => (
                <li key={item.href} className="border-t border-white/10">
                  <Link
                    href={item.href}
                    className="group flex items-center justify-between py-2.5 font-heading font-bold text-white/75 transition-colors hover:text-white"
                  >
                    {item.label}
                    <ArrowRightIcon className="h-4 w-4 -translate-x-1 text-orange opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/15 py-6 font-mono text-[11px] uppercase tracking-[0.12em] text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.legalName}. All rights reserved.
          </p>
          <p>Built for tape libraries that deserve a search bar.</p>
        </div>
      </div>
    </footer>
  );
}
