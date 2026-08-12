# Sree Sankara — Project Documentation

Website for **Swami Anandavanam / Sree Sankara** — a Dharma-focused public site highlighting Kaalika Peetam, Juna Akhada, events, media, volunteer work, and donations.

This document explains the stack, folder layout, homepage flow, design system, assets, and how to run and extend the project.

---

## Tech stack

| Layer | Choice |
| --- | --- |
| Framework | [Next.js](https://nextjs.org/) **16.3** (App Router) |
| UI | React **19**, TypeScript **5** |
| Styling | Tailwind CSS **v4** (`@import "tailwindcss"` in `app/globals.css`) |
| Animation | GSAP + `@gsap/react` + ScrollTrigger; also `motion` |
| Icons | `lucide-react`, `react-icons` |
| Class utilities | `class-variance-authority` (CVA), `clsx`, `tailwind-merge` (`cn` in `lib/utils.ts`) |
| Fonts | Geist / Geist Mono (layout defaults); **Inter** via `--font-inter` for Figma-matched UI copy |
| HTTP (ready) | `axios` (not heavily used yet) |

> **Note:** This Next.js version may differ from older docs. Prefer guides under `node_modules/next/dist/docs/` and the notes in `AGENTS.md` / `CLAUDE.md` before changing framework APIs.

---

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
npm run start
npm run lint
```

---

## Repository structure

```
Sree-Sankara/
├── app/                      # Next.js App Router (pages + root layout)
│   ├── layout.tsx            # Fonts, metadata, global shell
│   ├── globals.css           # Tailwind + CSS variables
│   ├── page.tsx              # Homepage (composed sections)
│   ├── about/page.tsx        # Stub pages (placeholders)
│   ├── events/page.tsx
│   ├── media/page.tsx
│   ├── volunteer/page.tsx
│   ├── donate/page.tsx
│   └── contact/page.tsx
├── components/
│   ├── layout/               # TopBar, Navbar, MobileDrawer, Footer
│   ├── ui/                   # Typography, Button, SectionHeading, timeline, etc.
│   ├── cards/                # Reusable cards (EventCard, VolunteerCard)
│   └── home/                 # Homepage sections + section data
├── lib/utils.ts              # cn() helper
├── public/
│   ├── images/               # Section imagery (see Assets)
│   └── videos/               # Hero video
├── context/, hooks/, services/, types/, styles/  # Reserved / mostly empty
├── PROJECT.md                # This file
├── README.md
├── AGENTS.md / CLAUDE.md     # Agent guidance for Next.js in this repo
└── package.json
```

Path alias: `@/` → project root (e.g. `@/components/ui/Typography`).

---

## Routes

| Path | Status | Notes |
| --- | --- | --- |
| `/` | **Built** | Full marketing homepage |
| `/about`, `/events`, `/media`, `/volunteer`, `/donate`, `/contact` | Stub | Minimal Typography placeholders |
| `/juna-akhada` | Linked in nav | Page not present yet — nav target for future work |

Nav links live in `components/layout/Navbar.tsx` and `Footer.tsx`.

---

## Homepage composition (`app/page.tsx`)

Top → bottom order:

1. **TopBar** — slim utility strip (contact / actions)
2. **Navbar** — logo, links, Donate CTA, mobile drawer; becomes fixed + blurred on scroll
3. **Hero** — full-viewport sticky video (`/videos/hero_video.mp4`) + title
4. **AboutSection** — intro / about copy
5. **EventCarousel** (`upcomming_event/`) — horizontal programs + GSAP-pinned journey drawer/gallery
6. **QuoteSection** — black quote panel with portrait (`sw1.png`)
7. **FeaturedNewsSection** — cream news panel over **sticky** background image, then reveal gap
8. **JunaAkhadaSection** — nested after the sticky gap inside Featured News
9. **VolunteerSection** — volunteer CTA card
10. **DonationSection** — full-bleed donation image + overlay CTA
11. **Footer** — black rounded-top panel overlapping donation

Cream brand surface used widely: `#FAF8F5`. Accent orange: `#FE3E02`.

---

## Section details

### Layout chrome

- **`TopBar`** — sits above the transparent navbar on the hero.
- **`Navbar`** — desktop links + Donate (heart icon); **`MobileDrawer`** for small screens.
- **`Footer`** — tagline (`footerTagline`), social icons, Quick Links (2 columns), Contact, copyright / Privacy / Terms. Large top radius (`rounded-t-[…]`) and negative margin so it sits over the donation section.

### Hero

- Client component; autoplay muted looping video.
- Warm amber gradient for readability.
- Title via `Typography` `heroTitle`.

### About

- Static about content for the homepage (separate from stub `/about` route).

### Upcoming programs + journey (`EventCarousel`)

- Data: `components/home/upcomming_event/data.ts`.
- Cards: `components/cards/EventCard.tsx`.
- On large screens, **GSAP ScrollTrigger** pins the section and sequences:
  - card carousel progress
  - journey **drawer** rise
  - horizontal **gallery** / timeline (`horizontal-gallery-timeline/`)
- Related files:
  - `JourneyDrawer.tsx`
  - `HorizontalGallery.tsx`
  - `JourneyTimeline.tsx`
  - shared `components/ui/timeline.tsx`

Folder name spelling: `upcomming_event` (as in the repo).

### Quote

- Standalone black section (not inside the drawer).
- Inter quote type (`quote` variant); orange highlight bars on key phrases.
- Portrait flush to the bottom edge of the panel.

### Featured News + sticky background

- Data: `components/home/featured-news/data.ts`.
- Sticky full-viewport image: `/images/Home_Background/bg_stickey.jpg`.
- Cream panel with rounded bottom corners scrolls away to **reveal** the sticky photo in a gap, then **Juna Akhada** panel.

### Juna Akhada

- Legacy CTA + image under `public/images/Juna Akhada/`.
- Rendered from Featured News after the reveal gap (not a separate entry in `page.tsx`).

### Volunteer

- Wrapper: `volunteer/VolunteerSection.tsx`.
- Card: `cards/VolunteerCard.tsx` + `/images/volunteer_card/`.

### Donation

- Full-width image `/images/Donation/donation.jpg`.
- Vertical gradient overlay (black → Dharma orange) + dim layer.
- Heading / body / button use Typography CTA variants.

---

## Design system — Typography

**Source of truth:** `components/ui/Typography.tsx`.

- Variants define **size / weight / leading / tracking** only.
- **Colors** (and layout spacing) stay in `className`.
- Prefer adding or reusing a variant over raw `text-*` / `font-*` on section copy.

### Variant groups (summary)

| Group | Examples | Use |
| --- | --- | --- |
| Core | `headline1`–`headline4`, `bodyText*`, `buttonText` | General UI |
| Hero / sections | `heroTitle`, `sectionTitle`, `sectionLabel`, `sectionEyebrow` | Homepage headers |
| Cards / news | `cardTitle`, `cardMeta`, `newsHeadline` | Cards & featured article |
| Quote | `quote` | QuoteSection |
| Nav / chrome | `navText`, `topBarText`, `buttonSmall` | Navbar, TopBar |
| CTAs | `displayTitle`, `displayTitleMedium`, `ctaBody`, `ctaBodyMuted`, `ctaButton`, `ctaButtonSm` | Volunteer / Donation |
| Footer | `footerTagline`, `footerBody`, `footerHeading`, `footerLink`, `footerMeta` | Footer |

Related UI helpers:

- **`SectionHeading`** — consistent section titles
- **`ViewAllLink`** — “View all” style links
- **`Button`** — shared button styles

---

## Assets (`public/`)

| Folder / file | Used by |
| --- | --- |
| `videos/hero_video.mp4` | Hero |
| `images/Home_Background/bg_stickey.jpg` | Featured News sticky reveal |
| `images/featured news/` | News imagery |
| `images/Upcoming Programs/` | Event cards |
| `images/journey/` | Gallery + quote portrait (`sw1.png`) |
| `images/Juna Akhada/` | Juna section |
| `images/volunteer_card/` | Volunteer card |
| `images/Donation/` | Donation section |
| `images/hero/` | Hero-related stills (if any) |

Some path segments contain spaces; URLs are often encoded (e.g. `Juna%20Akhada`).

---

## Conventions

1. **Homepage sections** live under `components/home/<feature>/` with local `data.ts` when needed.
2. **Reusable cards** live under `components/cards/`.
3. **Layout** (nav/footer) under `components/layout/`.
4. **Text styling** goes through `Typography` variants.
5. Prefer **client components** only where needed (GSAP, scroll listeners, video, drawers).
6. Brand palette: cream `#FAF8F5`, black panels, orange `#FE3E02`, muted greys for secondary footer text.
7. Large rounded corners and overlapping sections (sticky bg, footer over donation) are intentional.

---

## Dependencies worth knowing

- **GSAP ScrollTrigger** — EventCarousel pin / drawer / gallery timeline (desktop breakpoint).
- **Inter (`--font-inter`)** — Figma-aligned tracking (`tracking-[-0.04em]`) on nav, CTAs, quote, footer.
- **CVA** — `typographyVariants` and button variants.

Empty folders (`hooks`, `services`, `context`, `types`) are reserved for future shared logic, API clients, and types.

---

## What is not finished yet

- Inner pages (`/about`, `/events`, etc.) are placeholders.
- `/juna-akhada` is linked but has no `app/juna-akhada` route yet.
- Root `metadata` in `layout.tsx` still uses default Create Next App title/description.
- CMS / API wiring is minimal; most content is static TS data + images.
- Some older files may remain under `components/home/` (legacy duplicates of carousel/gallery) — prefer the paths imported by `app/page.tsx`.

---

## Quick mental model

```
Chrome (TopBar + Navbar)
  → Sticky video hero
  → Cream content stack (About → Programs/Journey → Quote)
  → Sticky photo tunnel (Featured News → gap → Juna)
  → Volunteer + Donation CTAs
  → Black Footer overlapping donation
```

All of that is assembled in **`app/page.tsx`**. Extend the site by adding route folders under `app/` and shared pieces under `components/`, keeping text on **`Typography`**.
