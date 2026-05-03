"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import AnnouncementBanner from "./AnnouncementBanner";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/events", label: "Events" },
  { href: "/sponsorship", label: "Sponsorship" },
  { href: "/help", label: "Help" }
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      data-testid="main-navbar"
    >
      <AnnouncementBanner />
      <div className={`transition-all duration-300 ${scrolled ? "bg-ink/55 backdrop-blur-md border-b border-ember/20" : "bg-linear-to-b from-ink/40 to-transparent"
        }`}>
        <nav className="max-w-7xl mx-auto px-5 lg:px-10 h-16 lg:h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3" data-testid="navbar-logo">
            <Image
              src="/images/auktave_logo.png"
              alt="AUKTAVE"
              width={143}
              height={35}
              priority
              className="h-7 lg:h-9 w-auto"
            />
          </Link>

          <ul className="hidden lg:flex items-center gap-8">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  data-testid={`nav-link-${l.label.toLowerCase()}`}
                  className={`uppercase font-mono text-xs tracking-[0.2em] transition-colors ${pathname === l.href ? "text-signal" : "text-bone/70 hover:text-ember"
                    }`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <Link href="/register" className="hidden md:inline-block btn-signal text-xs lg:text-sm" data-testid="nav-register-btn">
              Register Now
            </Link>
            <button
              aria-label="Toggle menu"
              onClick={() => setOpen((s) => !s)}
              className="lg:hidden p-2 text-bone"
              data-testid="mobile-menu-toggle"
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {open && (
          <div className="lg:hidden bg-ink/95 border-t border-ember/20" data-testid="mobile-menu">
            <ul className="px-5 py-6 flex flex-col gap-4">
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    data-testid={`mobile-nav-${l.label.toLowerCase()}`}
                    className="block uppercase font-mono text-sm tracking-[0.2em] text-bone/80 py-2 border-b border-ember/10"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/register" className="block btn-signal mt-2 text-center" data-testid="mobile-register-btn">
                  Register Now
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
