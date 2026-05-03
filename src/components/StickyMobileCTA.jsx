"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function StickyMobileCTA() {
  const pathname = usePathname();
  if (pathname === "/register") return null;
  return (
    <div className="md:hidden fixed bottom-3 left-3 right-3 z-40" data-testid="sticky-mobile-cta">
      <Link href="/register" className="btn-signal w-full block text-center text-sm" data-testid="mobile-cta-register">
        Register Now
      </Link>
    </div>
  );
}
