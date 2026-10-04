"use client";

import { useState } from "react";
import { Button } from "./Button";

export function TrialButton({
  variant = "solid",
  className,
}: {
  variant?: "solid" | "outline";
  className?: string;
}) {
  const [status, setStatus] = useState<"idle" | "loading" | "unavailable">("idle");

  async function handleClick() {
    setStatus("loading");
    const res = await fetch("/api/trial", { method: "POST" });
    if (res.ok) {
      const { url } = await res.json();
      window.location.href = url;
      return;
    }
    setStatus("unavailable");
  }

  if (status === "unavailable") {
    return (
      <div className={className}>
        <p className="text-sm font-semibold text-orange-deep">
          Trial download isn&apos;t connected yet — email{" "}
          <a href="mailto:info@bloomlto.com" className="underline">
            info@bloomlto.com
          </a>{" "}
          to request one.
        </p>
      </div>
    );
  }

  return (
    <Button variant={variant} onClick={handleClick} size="lg" className={className} disabled={status === "loading"}>
      {status === "loading" ? "Loading…" : "Start 30-day trial"}
    </Button>
  );
}
