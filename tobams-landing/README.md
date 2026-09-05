# Tobams Group — Frontend Developer Intern Assessment

Pixel-perfect, fully responsive Next.js landing page converted from the [Figma design](https://www.figma.com/design/wuqCLkK1feTgB6xxSRRwZu/Frontend-Intern-Assessment).

## 🔗 Live URL

> **[https://tobams-landing.vercel.app](https://tobams-landing.vercel.app)**
> *(Update this link after deploying to Vercel)*

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
| next/font | — | Font loading (Inter via Google Fonts) |
| lucide-react | ^1.41.0 | Icons (Zap, ChevronDown, ArrowUpRight, ChevronRight, ChevronLeft, Menu, X, Mail, Phone, User) |

## 📐 Design Decisions & Deviations from Figma

### Typography
- **Font:** Inter (Google Fonts via `next/font/google`). The Figma design uses Inter as the primary typeface — confirmed visually from the full-page exports. Loaded with `variable: "--font-inter"` for CSS variable access.

### Design Token Extraction
- All color values, spacing, and typography were extracted from the Figma file using 2x PNG section exports analyzed section by section, then documented in `.kiro/steering/design-system.md`. Values are approximations derived from visual inspection rather than Figma Dev Mode (which requires edit access).
- **Potential deviations**: Hex values may differ by ±5% from the exact Figma values. Colors documented with reasoning in design-system.md.

### Responsive Breakpoints
- Three breakpoints as specified: 425px (base), 768px (`md:`), 1280px (`lg:`).
- All layouts use Tailwind responsive prefixes only — no custom `@media` queries.
- Custom breakpoints registered in `globals.css` under `@theme inline` (`--breakpoint-xs: 425px`, `--breakpoint-md: 768px`, `--breakpoint-lg: 1280px`).

### Logo
- Recreated as an inline SVG (overlapping petal/circle shapes in `#7B2D8B` and `#E8415A`) — the original is a vector layer in Figma. Inline SVG ensures crisp rendering at all sizes without a raster dependency.

### Social Icons
- LinkedIn, Instagram, and X (Twitter) icons are rendered as inline SVGs matching the lucide icon style. These icons are not available in the installed version of `lucide-react` and were recreated manually.

### Tailwind CSS v4
- Uses `@import "tailwindcss"` and `@theme inline` in `globals.css` (no `tailwind.config.js`). All design tokens are defined in the `@theme inline` block.
- RGBA values use Tailwind v4 arbitrary value syntax: `text-[rgba(255,255,255,0.75)]`.

### CTA Banner — Dual Copy
- Desktop and mobile show different copy as documented in the Figma design exports. Implemented with both `<p>` elements always in the DOM, toggled via `hidden md:block` / `md:hidden` (not conditional rendering — both always present for accessibility).

### Testimonials Carousel — CSS Custom Property
- The carousel `translateX` animation requires setting a dynamic pixel offset. This uses `style={{ '--carousel-offset': '...' }}` as a CSS custom property on the track wrapper — the single documented `style={{}}` usage in the codebase. The `.carousel-track` CSS class in `globals.css` consumes this variable. Fully documented in a code comment.

### Inline Styles Policy
- Zero `style={{}}` attributes in all components **except** the single CSS custom property in `Testimonials.tsx` for carousel animation (documented above).

## 📱 Responsive Verification

Verified at:
- **425px (mobile)**: Stacked single-column layouts, hamburger navigation, single-card testimonial carousel, rounded CTA card, mobile-specific copy
- **768px (tablet)**: Two-column layouts restored, desktop navigation visible, carousel fully functional
- **1280px (desktop)**: Full layout, multi-card carousel (3 visible + partial 4th), two-row navigation, all sections match Figma spec

## ⚠️ Known Issues

None at time of submission.

## 🤖 AI Disclosure

This project was built with the assistance of **Kiro** (an AI-powered development environment by AWS). The AI generated component code, Tailwind utility class structures, and responsive layout logic based on a design system specification derived from the Figma file. All code has been reviewed, verified to build successfully (`npm run build` exit code 0), and conforms to the assessment requirements. AI use is disclosed per the assessment brief.

## 📁 Project Structure

```
tobams-landing/
├── app/
│   ├── globals.css          # Tailwind v4 config + all design tokens
│   ├── layout.tsx           # Root layout (Inter font, metadata)
│   └── page.tsx             # Page composition (all 11 sections)
├── components/
│   ├── Logo.tsx             # Inline SVG logo (dark prop for light/dark bg)
│   ├── Navigation.tsx       # Two-row sticky header + hamburger mobile ("use client")
│   ├── Hero.tsx             # Full-bleed hero section
│   ├── LmsSection.tsx       # Learning Management System section
│   ├── ServicesSection.tsx  # 3 alternating training service blocks
│   ├── ManagementDevSection.tsx  # Dark card with feature pills
│   ├── TrainingConsultantSection.tsx  # Training The Consultant section
│   ├── TransformationHub.tsx  # Pink card with CEO webinar section
│   ├── CtaBanner.tsx        # Full-width CTA banner (dual copy)
│   ├── Testimonials.tsx     # Testimonial carousel ("use client")
│   ├── PreFooterCta.tsx     # Pre-footer CTA strip
│   └── Footer.tsx           # 4-column footer with offices card
└── public/
    └── images/              # All section images (WebP/JPG)
```

## 📎 References

- **Figma Design:** https://www.figma.com/design/wuqCLkK1feTgB6xxSRRwZu/Frontend-Intern-Assessment
- **Submission Form:** https://forms.gle/B5MyQhLske86ACM57
- **Deadline:** Monday, 7 September 2026, 3:00pm WAT
