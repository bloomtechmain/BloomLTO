import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <Section tone="grey">
      <div className="mx-auto max-w-2xl">
        <h1 className="font-heading text-4xl font-extrabold text-white">Terms of service</h1>
        <p className="mt-3 text-sm text-white/55">Draft — last updated September 2026.</p>

        <div className="mt-10 space-y-8 text-[0.98rem] leading-relaxed text-white/80">
          <div>
            <h2 className="font-heading text-xl font-bold text-white">License</h2>
            <p className="mt-2">
              A BloomLTO purchase grants a lifetime license to run the software on
              one server. Updates are included for three years from purchase;
              after that, the software keeps working without forced upgrades.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-white">Trial</h2>
            <p className="mt-2">
              The 30-day trial is full-featured and time-limited. When it ends,
              BloomLTO will ask for a license key to continue running.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-white">Support</h2>
            <p className="mt-2">
              Every license includes ticket-based support. Optional yearly support
              plans are available separately.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-white">Refunds</h2>
            <p className="mt-2">
              Because a full-featured trial is available before purchase, license
              sales are final except where required by law.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-white">Contact</h2>
            <p className="mt-2">
              Questions about these terms can be sent to{" "}
              <a href={`mailto:${site.email}`} className="text-orange-soft underline">
                {site.email}
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
