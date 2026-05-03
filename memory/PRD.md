# AUKTAVE 2K26 - PRD

## Original Problem Statement
Build a complete, production-ready Next.js multi-page TechFest website for AUKTAVE 2K26, the first edition TechFest of Amity University Kolkata. Stranger Things inspired dark cinematic aesthetic with neon yellow accents and red glow. 48-hour duration, hackathon highlight, 7 events including IEEE Session.

## User-Stated Choices
- Strictly Next.js (App Router, latest stable - 14.2)
- No backend/database - Web3Forms for email + custom Google Forms style UI
- Background music: env-driven URL with royalty-free fallback
- Placeholder PDFs for sponsorship brochure / proposal / event rules
- Reasonable placeholder rules + coordinator info per event
- No em dashes anywhere - regular hyphens only

## Architecture
- **Frontend**: Next.js 14.2 App Router, JSX (no TS) at `/app/frontend`
  - Tailwind CSS, Framer Motion, GSAP-ready, Lenis smooth scroll, React Three Fiber, Leaflet (dynamic SSR-disabled)
  - Supervisor `yarn start` -> `next dev -p 3000 -H 0.0.0.0`
- **No backend in use**, FastAPI server retained but unused
- **Forms**: Web3Forms (`NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY`) - currently demo-mode placeholder, replace with real key
- **Audio**: `NEXT_PUBLIC_AUDIO_URL` env override + Pixabay fallback track
- **Analytics**: `NEXT_PUBLIC_GA_ID` placeholder

## Pages (all live)
- `/` Home: splash glitch, hero, ticker marquee, about teaser, hackathon spotlight, events grid (6), countdown, why participate, final CTA
- `/about` ASETK + IEEE roles, vision, who registers, Day 1/Day 2 schedule, Amity card
- `/events` Headline + 6 side games grid
- `/events/[slug]` Description, rules (numbered), vanity stats, coordinator block, register CTA, rules PDF
- `/sponsorship` Tiers (5), logo grid, brochure + proposal PDF download
- `/register` Web3Forms form with name/college/email/whatsapp/event/team/fee + payment proof + ID upload
- `/help` Web3Forms contact form, info cards, Leaflet dark map, FAQ accordion
- `/privacy`, `/terms` Legal pages
- `not-found.jsx` "Something went wrong in Hawkins" themed 404

## Components
Navbar (sticky + mobile), Footer, AnnouncementBanner, AudioController (sticky bottom-right with localStorage persistence + volume slider), SplashScreen (glitch + loading bar), GlitchText, Countdown, EventCard, UpsideDownBackground (R3F roots + particles, dynamic SSR-off), MapView (Leaflet), LenisProvider, StickyMobileCTA

## Design System
- BG `#050505`, neon yellow `#ffe600`, ember red `#ff1f3d`, bone `#f5f1e8`
- Display font: Big Shoulders Display 900 / Body: Manrope / Mono: JetBrains Mono
- Glitch text via dual `::before/::after` clip-paths
- Card: glassmorphism + faint red edge glow
- Effects: grain overlay, vignette, scanlines, fog drift, marquee ticker, flicker

## Implemented (Feb 2026)
- Full multi-page Next.js site, 10 routes
- 3D R3F background with red/yellow point lights, fog, particles
- Lenis smooth scroll, Framer Motion entrance + scroll reveals
- Sticky audio controller with play/mute/volume + localStorage persistence
- Announcement banner (dismissable)
- Mobile sticky CTA
- Web3Forms register + help (demo-mode notice when key missing)
- Leaflet dark map for help
- Placeholder PDFs in `/public/brochures/`
- Robots.txt, favicon, OG meta, GA hook

## Next Action Items / Backlog
- P0: User to add real `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY`, swap PDFs in `public/brochures/`, swap audio file
- P1: Real sponsor logo SVGs in `/public/sponsors/`, real coordinator photos
- P1: Add Gallery section + email confirmation copy when key is live
- P2: Add `/admin` view of submissions if Web3Forms is replaced with backend later
- P2: Convert R3F roots to actual organic vine SVG paths for added realism

## Mocked / Placeholder
- Web3Forms key (demo banner shown until replaced)
- Sponsor logo grid (LOGO_01-12 placeholders)
- Brochure / Proposal / Rules PDFs (minimal placeholder PDFs generated)
- Coordinator phone numbers (template +91 98300 0000X)
