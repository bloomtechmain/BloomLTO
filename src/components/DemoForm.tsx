"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { Button } from "./Button";

export function DemoForm({ compact = false }: { compact?: boolean }) {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    if (data.company_website) {
      // honeypot field caught a bot; pretend success without sending
      router.push("/contact/thank-you");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      router.push("/contact/thank-you");
    } catch {
      setStatus("error");
    }
  }

  const inputCls =
    "w-full border border-grey/20 bg-white px-4 py-3 text-[0.95rem] text-ink placeholder:text-ink/35 outline-none transition-colors focus:border-orange-deep";
  const labelCls = "mb-1.5 block font-heading text-sm font-bold text-grey";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <input
        type="text"
        name="company_website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelCls} htmlFor="name">Name</label>
          <input id="name" name="name" required className={inputCls} placeholder="Jamie Rivera" />
        </div>
        <div>
          <label className={labelCls} htmlFor="email">Work email</label>
          <input id="email" name="email" type="email" required className={inputCls} placeholder="jamie@studio.com" />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelCls} htmlFor="company">Company</label>
          <input id="company" name="company" className={inputCls} placeholder="Studio or organization" />
        </div>
        <div>
          <label className={labelCls} htmlFor="library">Library make and model</label>
          <input id="library" name="library" className={inputCls} placeholder="e.g. Qualstar Q24" />
        </div>
      </div>

      <div>
        <label className={labelCls} htmlFor="dataSize">Approximate data to archive</label>
        <input id="dataSize" name="dataSize" className={inputCls} placeholder="e.g. 40 TB of camera originals" />
      </div>

      {!compact ? (
        <div>
          <label className={labelCls} htmlFor="message">Message</label>
          <textarea id="message" name="message" rows={4} className={inputCls} placeholder="What are you hoping to archive?" />
        </div>
      ) : null}

      <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Submit"}
      </Button>

      {status === "error" ? (
        <p className="text-sm font-semibold text-orange-deep">
          Something went wrong. Please email {" "}
          <a href="mailto:info@bloomlto.com" className="underline">info@bloomlto.com</a> instead.
        </p>
      ) : null}
    </form>
  );
}
