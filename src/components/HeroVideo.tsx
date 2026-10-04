"use client";

import { useEffect, useRef } from "react";

export function HeroVideo({ className }: { className?: string }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      video.pause();
      video.removeAttribute("loop");
    }
  }, []);

  return (
    <video
      ref={ref}
      className={`absolute inset-0 h-full w-full object-cover ${className ?? ""}`}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      aria-label="Robotic arm loading an LTO tape cartridge into a library drive"
    >
      <source src="/videos/hero-tape-loading.mp4" type="video/mp4" />
    </video>
  );
}
