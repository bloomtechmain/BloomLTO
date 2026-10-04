import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import { CheckIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Thanks for reaching out",
  robots: { index: false },
};

export default function ThankYouPage() {
  return (
    <Section tone="grey" className="text-center">
      <div className="mx-auto max-w-lg">
        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-peach text-orange-deep">
          <CheckIcon className="h-8 w-8" />
        </span>
        <h1 className="mt-6 font-heading text-3xl font-extrabold text-white sm:text-4xl">
          Thanks — we&apos;ll be in touch soon.
        </h1>
        <p className="mt-4 text-lg text-white/70">
          We reply to every request within one business day. In the meantime,
          check whether your library qualifies.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button href="/how-it-works#requirements">Check requirements</Button>
          <Button
            href="/"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-navy"
          >
            Back to home
          </Button>
        </div>
      </div>
    </Section>
  );
}
