import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <Section tone="grey">
      <div className="mx-auto max-w-2xl">
        <h1 className="font-heading text-4xl font-extrabold text-white">Privacy policy</h1>
        <p className="mt-3 text-sm text-white/55">Draft — last updated September 2026.</p>

        <div className="mt-10 space-y-8 text-[0.98rem] leading-relaxed text-white/80">
          <p>
            {site.legalName} (&quot;BloomLTO&quot;, &quot;we&quot;, &quot;us&quot;) respects your privacy. This
            page describes what we collect through {site.domain} and how we use it.
          </p>

          <div>
            <h2 className="font-heading text-xl font-bold text-white">What we collect</h2>
            <p className="mt-2">
              When you submit the demo request form, we collect your name, work
              email, company, library details, and anything you write in the
              message field. When you purchase a license, our payment processor
              collects billing information needed to complete the transaction and
              email your license key.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-white">How we use it</h2>
            <p className="mt-2">
              We use this information to respond to demo requests, deliver license
              keys, and provide support. We do not sell your information.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-white">Analytics</h2>
            <p className="mt-2">
              We may use privacy-friendly, cookie-free analytics to understand
              which pages are useful. This does not track you across other sites.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-white">Contact</h2>
            <p className="mt-2">
              Questions about this policy can be sent to{" "}
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
