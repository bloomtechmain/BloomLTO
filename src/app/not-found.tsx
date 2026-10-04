import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import { TapeReelIcon } from "@/components/icons";

export default function NotFound() {
  return (
    <Section tone="grey" className="text-center">
      <div className="mx-auto max-w-md">
        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-peach text-orange-deep">
          <TapeReelIcon className="h-8 w-8" />
        </span>
        <h1 className="mt-6 font-heading text-4xl font-extrabold text-white">
          This tape isn&apos;t in the library.
        </h1>
        <p className="mt-4 text-lg text-white/70">
          The page you&apos;re looking for doesn&apos;t exist, or has moved.
        </p>
        <div className="mt-8">
          <Button href="/">Back to home</Button>
        </div>
      </div>
    </Section>
  );
}
