# Tobams Group — Frontend Developer Intern Assessment

Pixel-perfect, fully responsive Next.js landing page converted from the [Figma design](https://www.figma.com/design/wuqCLkK1feTgB6xxSRRwZu/Frontend-Intern-Assessment).

## 🔗 Live URL

> **[https://tobams-group.netlify.app](https://tobams-group.netlify.app)**

## 🚀 Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

**Build for production:**

```bash
npm run build
npm start
```

## 🛠 Tech Stack

| Tool | Version | Purpose |
|------|---------|---------|
| Next.js | 16.3.4 | Framework (App Router) |
| React | 19 | UI library |
| TypeScript | 5 | Type safety |
| Tailwind CSS | 4 | Utility-first styling |
| next/image | — | Optimised image delivery |
| next/font | — | Font loading (Nunito Sans + Nunito via Google Fonts) |
| lucide-react | ^1.41.0 | Icons (Zap, ChevronDown, ArrowUpRight, ChevronRight, ChevronLeft, Menu, X, Mail, Phone, User) |
| @netlify/plugin-nextjs | latest | Next.js App Router support on Netlify |

## 📐 Design Decisions & Deviations from Figma

### Typography
- **Primary font (UI/body):** `Nunito Sans` — confirmed directly from Figma Dev Mode inspect. Typography panel shows `Font: Nunito Sans`, `Weight: 600`, `Size: 14px`, `Line height: 150%`. Loaded via `next/font/google` with weights 300/400/600/700/800.
- **Heading font:** `Nunito` (distinct from Nunito Sans) — confirmed from Figma inspect on section headings. Loaded separately via `next/font/google`.
- Both fonts use CSS variables `--font-nunito-sans` and `--font-nunito`. No `<link>` tags or `@import` statements used.
- Base body styles in `globals.css`: `font-size: 14px`, `line-height: 1.5`, `font-weight: 600`.

### Design Token Extraction
- All design tokens (hex colors, spacing, font sizes, border-radii, padding) were extracted **directly from the Figma file** via the Figma Dev Mode CSS properties panel. Each section's CSS was taken verbatim from Figma inspect output and implemented precisely.
- All tokens are defined in `app/globals.css` under `@theme inline` and consumed as Tailwind utility classes.
- **No approximations** — values are exact from Figma (e.g. `#571244`, `rgba(87,18,68,0.1)`, `border-radius: 20px`, `gap: 48px`).

### Logo
- Uses `/public/images/logo.png` via `next/image`. `Logo.tsx` accepts a `dark` boolean prop — when `true`, applies `brightness-0 invert` Tailwind filter for use on dark backgrounds (Navigation top bar). The footer renders the full-color version without the filter.

### Social Icons
- LinkedIn, Instagram, and X (Twitter) icons are inline SVGs. These are not available in the installed version of `lucide-react` and were hand-coded based on the Figma design.

### Tailwind CSS v4
- Uses `@import 'tailwindcss'` and `@theme inline` in `globals.css` — no `tailwind.config.js`. All design tokens defined in `@theme inline` and referenced throughout components.
- RGBA values use Tailwind v4 arbitrary syntax: e.g. `bg-[rgba(87,18,68,0.1)]`, `text-[rgba(255,255,255,0.75)]`.

### Responsive Breakpoints
- Three breakpoints as specified: **425px** (base), **768px** (`md:`), **1280px** (`lg:`).
- All layouts use only Tailwind responsive prefixes — zero custom `@media` queries in any source file.
- Several sections use separate mobile/desktop JSX blocks (`lg:hidden` / `hidden lg:block`) instead of `order-` classes to avoid layout conflicts across breakpoints. Used in: LmsSection, ManagementDevSection, TransformationHub, TrainingConsultantSection, PreFooterCta, Footer, Testimonials.

### CTA Banner — Dual Copy
- Desktop and mobile show different text copy per Figma design. Both `<p>` elements always present in DOM, toggled via `hidden md:block` / `md:hidden`. Not conditional rendering — ensures both are accessible.

### Netlify Deployment
- Deployed to Netlify using `@netlify/plugin-nextjs` for full Next.js App Router support.
- `netlify.toml` at project root sets base directory `tobams-landing/`, build command `npm run build`, publish `.next`.

## ♿ Accessibility

- **Semantic HTML5 landmarks** — `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, and `<article>` elements are used throughout. Every `<section>` landmark carries an `aria-labelledby` attribute referencing its heading ID(s), giving assistive technologies a meaningful name for each region.
- **Meaningful alt text** — every `<Image>` component has a descriptive `alt` attribute. Decorative inline SVGs carry `aria-hidden="true"` so screen readers skip them.
- **Native interactive elements** — all interactive controls are `<button>` or `<a>` elements, keyboard-operable by default via Tab / Enter / Space with no custom ARIA role overrides needed.
- **Visible focus styles** — every interactive element has `focus-visible:outline` Tailwind classes so keyboard users always see a clear focus ring.
- **Hamburger / mobile nav** — the toggle button carries `aria-expanded` and `aria-controls="mobile-menu"`. Pressing Escape while the menu is open closes it and returns focus to the hamburger button. Opening the menu via keyboard moves focus to the first nav item automatically.
- **Testimonials carousel** — Prev / Next controls are `<button>` elements. An `aria-live="polite" aria-atomic="true"` region is present inside the carousel; its text updates to the current slide's author name and role on every slide change, so screen readers announce transitions.
- **No duplicate `id` attributes** — every section heading that appears in both a mobile and a desktop DOM block uses distinct IDs (`<id>-mobile` / `<id>-desktop`). Each parent `<section>`'s `aria-labelledby` references both IDs via a space-separated token list (e.g. `aria-labelledby="lms-heading-mobile lms-heading-desktop"`), which is valid per the ARIA specification.
- **Zero `style=` attributes** — all styling is expressed exclusively via Tailwind utility classes, including asymmetric border-radii (per-corner `rounded-{tl|tr|br|bl}-[Npx]` classes) and aspect ratios (`aspect-[w/h]`). No inline styles are present in the rendered HTML.

## 📱 Responsive Verification

Verified at all three required breakpoints:

- **425px (mobile)**: Single-column stacked layouts, hamburger nav (`#F9F9F9` bg), horizontal-scroll testimonials, rounded CTA card with mobile-specific copy, 14px body / 20–24px headings
- **768px (tablet)**: Two-column layouts restored, desktop nav visible, carousel active
- **1280px (desktop)**: Full Figma-spec layout — two-row nav, all two-column sections, 3-card testimonial carousel, exact Figma typography and spacing

## ⚠️ Known Issues

None 
## 🤖 AI Disclosure

This project was built with the assistance of **Kiro** (an AI-powered development environment by AWS). Kiro assisted with:
- Scaffolding the Next.js project structure and all component files
- Generating Tailwind CSS utility class implementations from Figma CSS property values
- Writing responsive layout logic for all 11 sections across mobile, tablet, and desktop
- Producing the `netlify.toml` deployment configuration

All generated code was reviewed against the Figma design specifications, verified to build successfully (`npm run build` exits 0, zero TypeScript errors, zero ESLint errors), and tested at all three required viewport widths. AI use is disclosed per the assessment brief requirement.

## 📁 Project Structure

```
tobams-landing/
├── app/
│   ├── globals.css                    # Tailwind v4 @theme inline + all design tokens
│   ├── layout.tsx                     # Root layout — Nunito Sans + Nunito via next/font/google
│   └── page.tsx                       # Page composition — all 11 sections in correct order
├── components/
│   ├── Logo.tsx                       # next/image logo.png with dark prop
│   ├── Navigation.tsx                 # Two-row sticky desktop nav + mobile hamburger
│   ├── Hero.tsx                       # Full-bleed hero, 317px mobile / 511px desktop
│   ├── LmsSection.tsx                 # Lavender bg, circular image, course list
│   ├── ServicesSection.tsx            # 3 alternating service blocks, custom bolt SVG
│   ├── ManagementDevSection.tsx       # Dark #2C0922 card, #8F6182 feature pills
│   ├── TransformationHub.tsx          # rgba(239,67,83,0.2) card, CEO webinar
│   ├── TrainingConsultantSection.tsx  # Lavender bg, #571244 feature grid card
│   ├── CtaBanner.tsx                  # #571244 card, dual desktop/mobile copy
│   ├── Testimonials.tsx               # Carousel with Tailwind translate animation, ARIA live region
│   ├── PreFooterCta.tsx               # #1D0617 dark strip
│   └── Footer.tsx                     # #11040E footer, 4-col desktop / stacked mobile
├── public/
│   └── images/                        # All section images + logo.png
└── netlify.toml                       # Netlify deployment config
```

## 📎 References

- **Figma Design:** https://www.figma.com/design/wuqCLkK1feTgB6xxSRRwZu/Frontend-Intern-Assessment
- **Submission Form:** https://forms.gle/B5MyQhLske86ACM57
- **Deadline:** Monday, 7 September 2026, 3:00pm WAT