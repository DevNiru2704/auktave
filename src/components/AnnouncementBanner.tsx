"use client";
import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";

export default function AnnouncementBanner() {
  const tickerRef = useRef<HTMLDivElement | null>(null);
  const [show, setShow] = useState(true);
  const message = "Early bird registrations close in 7 days. Lock your slot before the portal closes.";

  const tickerRepeats = 6;

  useEffect(() => {
    const dismissed = typeof window !== "undefined" && sessionStorage.getItem("auktave-banner-dismissed");
    if (dismissed) setShow(false);
  }, []);

  useEffect(() => {
    const track = tickerRef.current;
    if (!track) return;

    let distance = Math.max(track.scrollWidth / tickerRepeats, 1);
    const updateDistance = () => {
      distance = Math.max(track.scrollWidth / tickerRepeats, 1);
    };

    const observer = typeof ResizeObserver !== "undefined"
      ? new ResizeObserver(updateDistance)
      : null;

    observer?.observe(track);
    updateDistance();

    let frameId = 0;
    const speed = 36;

    const animate = (time: number) => {
      const offset = distance > 0 ? (time * speed / 1000) % distance : 0;
      track.style.transform = `matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,${-offset},0,0,1)`;
      frameId = requestAnimationFrame(animate);
    };

    frameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(frameId);
      observer?.disconnect();
      track.style.transform = "";
    };
  }, []);

  if (!show) return null;

  return (
    <div className="relative z-10 bg-ember text-ink border-b border-ember-deep overflow-hidden" data-testid="announcement-banner">
      <div className="flex items-center justify-between gap-4 px-5 lg:px-10">
        <div className="overflow-hidden flex-1">
          <div ref={tickerRef} className="ticker-track gap-8">
            {Array.from({ length: tickerRepeats }).flatMap((_, repeatIndex) => [
              <p key={`banner-${repeatIndex}-a`} className="font-mono text-[11px] uppercase tracking-[0.18em]">{message}</p>,
              <p key={`banner-${repeatIndex}-b`} className="font-mono text-[11px] uppercase tracking-[0.18em]">{message}</p>
            ])}
          </div>
        </div>
        <button
          onClick={() => { setShow(false); sessionStorage.setItem("auktave-banner-dismissed", "1"); }}
          aria-label="Dismiss banner"
          className="text-ink hover:text-bone shrink-0"
          data-testid="banner-dismiss"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
}
