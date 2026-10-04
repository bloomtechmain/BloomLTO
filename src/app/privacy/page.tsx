import type { Metadata } from "next";
import { LegalPage, type LegalSection } from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  alternates: { canonical: "/privacy" },
};

const sections: LegalSection[] = [
  {
    id: "what-we-collect",
    title: "What we collect",
    body: (
      <p>
        When you submit the demo request form, we collect your name, work
        email, company, library details, and anything you write in the
        message field. When you purchase a license, our payment processor
        collects billing information needed to complete the transaction and
        email your license key.
      </p>
    ),
  },
  {
    id: "how-we-use-it",
    title: "How we use it",
    body: (
      <p>
        We use this information to respond to demo requests, deliver license
        keys, and provide support. We do not sell your information.
      </p>
    ),
  },
  {
    id: "analytics",
    title: "Analytics",
    body: (
      <p>
        We may use privacy-friendly, cookie-free analytics to understand
        which pages are useful. This does not track you across other sites.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contact",
    body: (
      <p>
        Questions about this policy can be sent to{" "}
        <a href={`mailto:${site.email}`} className="font-semibold text-orange-deep underline">
          {site.email}
        </a>
        .
      </p>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy policy"
      updated="Draft — last updated September 2026."
      current="/privacy"
      intro={
        <>
          {site.legalName} (&quot;BloomLTO&quot;, &quot;we&quot;, &quot;us&quot;) respects your privacy. This
          page describes what we collect through {site.domain} and how we use it.
        </>
      }
      sections={sections}
    />
  );
}
