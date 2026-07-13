# Rift Stories — Portfolio Site

## Overview
A single-page portfolio for Rift Stories, an AI content creator / visual
storyteller producing cinematic AI video, commercials, and UGC-style content
for TikTok, Reels, and YouTube. Built as a React + TypeScript + Vite frontend
(no backend). Styling is Tailwind + shadcn/ui, with GSAP/ScrollTrigger, Lenis
smooth scroll, and Framer Motion for animation.

## Design direction
The site was redesigned to a clean, light-only editorial look (cream paper
background, ink text, restrained cyan + red accents) inspired by a minimalist
"UI/UX & Brand Designer" reference layout, adapted to Rift Stories' actual
services and real project data rather than copied verbatim. Dark mode was
removed entirely — the site is light-only.

Section order in `src/App.tsx`: Hero → Stats/Metrics → Process → About
(bio + services) → Manifesto (editorial statement) → Portfolio grid → Packages
(qualitative service tiers, no invented prices) → FAQ (accordion) → Footer.

Two Three.js showcase sections (`GlassInterface`, `RealityCylinder`) were
removed along with the `three` / `@react-three/*` dependencies — their
sci-fi/dark aesthetic didn't fit the new editorial direction, and nothing else
in the app used Three.js.

The pricing/packages section intentionally does not invent dollar figures;
it describes tiers qualitatively (Single Story / Campaign Bundle / Brand
Partnership) since real pricing wasn't provided. The FAQ content is generic,
defensible copy about the AI content process rather than fabricated business
specifics — both are flagged as good follow-up items once real pricing/FAQ
content is available.

## Running the project
`npm run dev` (bound to port 5000, `allowedHosts: true` in `vite.config.ts`
for the Replit preview proxy). `npm run build` for a production build.

## User preferences
- Light-mode only; no dark mode toggle.
- Palette should be derived from the site's existing brand colors (cyan +
  red accents), not copied wholesale from external references.
- Sections should reflect the portfolio's actual content/domain rather than
  blindly mirroring a reference layout.
