# BloomLTO marketing site

Next.js 16 (App Router, TypeScript) implementation of the site described in
`BloomLTO_Website_Build_Brief.pdf`. Styling is hand-built Tailwind CSS v4 on
the brief's own design tokens (navy/orange/cream/sky/peach) — no UI kit, no
default shadcn/Tailwind starter look.

## Run locally

```
npm install
npm run dev      # http://localhost:3000
npm run build && npm run start   # production build
```

No environment variables are required to run the site as-is.

## What's implemented

- All 6 pages from the brief's site map: Home, Features, How it works,
  Requirements, Pricing, Contact/Demo — plus Privacy, Terms, a 404 page, and
  a `/contact/thank-you` page.
- Full design system: custom hand-drawn SVG icon set, logo mark, curved
  section dividers, organic blob shapes, pill buttons, and stylized
  "app mockup" illustrations in browser frames (standing in for real product
  screenshots — see below).
- SEO: per-page metadata, `sitemap.xml`, `robots.txt`, dynamic Open Graph
  image, `Organization` and `SoftwareApplication` JSON-LD.
- Accessible, responsive layout; mobile nav; keyboard-focusable controls.
- Demo request form (`/contact`) with a honeypot field, posting to
  `/api/contact`.

## What's intentionally stubbed (needs real credentials before launch)

Per the brief, payments go through Stripe Checkout and the contact form needs
a real email provider. Neither Vercel nor Stripe/email accounts are
connected in this environment, so:

- **`/api/checkout`** (Pricing → "Buy for $348.99") returns a `501` with an
  explanatory message. Replace with a real Stripe Checkout Session, and wire
  a `checkout.session.completed` webhook that emails the license key.
- **`/api/trial`** (Pricing → "Start 30-day trial") is stubbed the same way.
  Wire it to your trial-build delivery pipeline.
- **`/api/contact`** currently validates and `console.log`s the submission.
  Wire it to Resend, Postmark, or SES to email the team and send the
  auto-reply, per the brief's "Form handling" / "Email" rows.

The buttons degrade gracefully — they show an inline "not connected yet, use
info@bloomlto.com" message rather than failing silently.

## Screenshots

Real app screenshots aren't available in this environment, and the brief
explicitly says not to publish the current ones (they expose internal paths,
failed runs, etc. — see brief section 8). In their place, `AppMockup.tsx`
renders small stylized illustrations of the dashboard (inventory, search,
schedules, reports, recovery) inside `BrowserFrame.tsx`. Swap these for real,
recaptured screenshots once the brief's screenshot/asset plan (section 8) is
done — the components are designed to be drop-in replaceable with
`next/image`.

## Logo

`Logo.tsx` / `public/icon.svg` are a placeholder mark built to match the
brief's description (navy tape-reel glyph + orange magnifying glass), since
the real logo file wasn't available to extract as vector art from the PDF.
Replace with the actual brand SVG before launch (brief section 3, "Logo
usage").

## Open decisions from the brief (section 1)

These were resolved with reasonable defaults so the build could proceed;
confirm before launch:

- **CTA wording per page** — implemented as the brief's site-map table says
  (Home hero: "Start 30-day trial" / "Buy for $348.99"; Features/How it
  works/Requirements: "Book a demo" / "See it in action" / "Check my setup";
  Pricing: "Buy now" via the license card buttons).
- **Requirements page wording** — used the brief's suggested generic
  wording ("SAS host adapter", "supported 64-bit Linux server") rather than
  the specific internal hardware/OS versions, per the disclosure rule.
- **Footer / legal entity details** — mailing address omitted (LLC
  formation status was an open question); add if applicable.
- **Support plan copy** — Pricing page states the $1,200/yr plan is for
  "faster response commitments" without specifics, since the brief flagged
  this as unresolved.

## Deployment (AWS)

The app is framework-standard Next.js with no Vercel-specific APIs, so it
runs on any Node 20+ host — e.g. AWS Amplify Hosting (Next.js SSR support),
ECS/Fargate behind an ALB, or Elastic Beanstalk, using `npm run build` +
`npm run start` (or a `next start` process manager like PM2).
