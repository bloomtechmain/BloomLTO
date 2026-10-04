"use client";

import { useState } from "react";
import { Button } from "./Button";

export function BuyButton({ className }: { className?: string }) {
  const [status, setStatus] = useState<"idle" | "loading" | "unavailable">("idle");

  async function handleClick() {
    setStatus("loading");
    const res = await fetch("/api/checkout", { method: "POST" });
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
          Checkout isn&apos;t connected yet — email{" "}
          <a href="mailto:info@bloomlto.com" className="underline">
            info@bloomlto.com
          </a>{" "}
          to buy a license.
        </p>
      </div>
    );
  }

  return (
    <Button onClick={handleClick} size="lg" className={className} disabled={status === "loading"}>
      {status === "loading" ? "Loading…" : "Buy for $348.99"}
    </Button>
  );
}
