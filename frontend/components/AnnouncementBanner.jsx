"use client";
import { useEffect, useState } from "react";
import { X } from "lucide-react";

export default function AnnouncementBanner() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const dismissed = typeof window !== "undefined" && localStorage.getItem("auktave-banner-dismissed");
    if (dismissed) setShow(false);
  }, []);
  if (!show) return null;
  return (
    <div className="relative z-10 bg-ember text-ink border-b border-ember-deep" data-testid="announcement-banner">
      <div className="max-w-7xl mx-auto px-5 lg:px-10 h-9 flex items-center justify-between gap-4">
        <div className="overflow-hidden flex-1">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] truncate">
            Early bird registrations close in 7 days. Lock your slot before the portal closes.
          </p>
        </div>
        <button
          onClick={() => { setShow(false); localStorage.setItem("auktave-banner-dismissed", "1"); }}
          aria-label="Dismiss banner"
          className="text-ink hover:text-bone"
          data-testid="banner-dismiss"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
}
