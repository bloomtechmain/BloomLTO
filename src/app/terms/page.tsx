import type { Metadata } from "next";
import { LegalPage, type LegalSection } from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  alternates: { canonical: "/terms" },
};

const sections: LegalSection[] = [
  {
    id: "license",
    title: "License",
    body: (
      <p>
        A BloomLTO purchase grants a lifetime license to run the software on
        one server. Updates are included for three years from purchase;
        after that, the software keeps working without forced upgrades.
      </p>
    ),
  },
  {
    id: "trial",
    title: "Trial",
    body: (
      <p>
        The 30-day trial is full-featured and time-limited. When it ends,
        BloomLTO will ask for a license key to continue running.
      </p>
    ),
  },
  {
    id: "support",
    title: "Support",
    body: (
      <p>
        Every license includes ticket-based support. Optional yearly support
        plans are available separately.
      </p>
    ),
  },
  {
    id: "refunds",
    title: "Refunds",
    body: (
      <p>
        Because a full-featured trial is available before purchase, license
        sales are final except where required by law.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contact",
    body: (
      <p>
        Questions about these terms can be sent to{" "}
        <a href={`mailto:${site.email}`} className="font-semibold text-orange-deep underline">
          {site.email}
        </a>
        .
      </p>
    ),
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of service"
      updated="Draft — last updated September 2026."
      current="/terms"
      sections={sections}
    />
  );
}
