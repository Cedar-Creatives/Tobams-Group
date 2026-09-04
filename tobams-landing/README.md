# Tobams Group — Frontend Intern Assessment

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
| lucide-react | latest | Icons (Zap, ChevronDown, ArrowUpRight, Menu, X, Mail, Phone, User) |

## 📐 Design Decisions & Assumptions

### Typography
- **Font:** Inter (Google Fonts, loaded via `next/font/google`). The Figma file references Inter as primary — confirmed via Dev Mode inspect. No font licensing issues; Google Fonts free-to-use.

### Responsive Breakpoints
- Three breakpoints as specified: 425px base, 768px (`md:`), 1280px (`lg:`).
- All layouts use Tailwind responsive prefixes only — no custom `@media` queries.

### Logo
- The Figma logo uses overlapping petal/circle shapes in purple (#7B2D8B) and coral (#E8415A). Recreated as an inline SVG since the original is a vector layer in Figma. This ensures it renders crisply at all sizes without any raster image.

### Social Icons
- The installed version of `lucide-react` no longer ships `Linkedin`, `Instagram`, or `Twitter` (removed upstream). These have been replaced with equivalent inline SVGs matching the lucide icon style.
- All other icons (Zap, ChevronDown, ArrowUpRight, Menu, X, Mail, Phone, User) are sourced from lucide-react.

### Tailwind v4
- The project uses Tailwind CSS v4, which uses `@import "tailwindcss"` and `@theme inline` in `globals.css` rather than a `tailwind.config.js`. All design tokens (colors, spacing, typography) are defined in the `@theme inline` block.

### CTA Banner copy
- Desktop and mobile show different copy as specified in the design (design-system.md documents both variants). Implemented with `hidden md:block` / `md:hidden` wrappers.

### Testimonials carousel
- Desktop shows 3 cards simultaneously with CSS transform-based sliding. Mobile shows 1 card at a time. Navigation arrows styled as circles (desktop) / rounded squares with pink background (mobile), matching the Figma spec.

### Management Dev Program & Transformation Hub sections
- Both use a "large card" pattern (dark aubergine #3D1040 and pink #FDEEF0 respectively) sitting on a white page background, with internal padding — matching the Figma card layout.

### Images
- All images use `next/image` with `fill` + `sizes` attributes for responsive loading.
- Hero image uses `priority` flag for LCP optimisation.

## 📱 Responsive Verification

Tested and verified at:
- **425px** — Mobile: stacked layouts, hamburger nav, single-card testimonial carousel
- **768px** — Tablet: two-column layouts restored, desktop nav visible
- **1280px** — Desktop: full layout, multi-card carousel, two-row navigation

## ⚠️ Known Issues

None at time of submission.

## 🤖 AI Disclosure

This project was built with the assistance of **Kiro** (an AI-powered development environment by AWS). The AI generated component code, Tailwind utility class structures, and responsive layout logic based on the design system specification extracted from the Figma file. All code has been reviewed, verified to build successfully, and conforms to the assessment requirements.

## 📁 Project Structure

```
tobams-landing/
├── app/
│   ├── globals.css       # Tailwind v4 config + design tokens
│   ├── layout.tsx        # Root layout (Inter font, metadata)
│   └── page.tsx          # Page composition (imports all sections)
├── components/
│   ├── Logo.tsx           # Inline SVG logo
│   ├── Navigation.tsx     # Two-row desktop nav + hamburger mobile
│   ├── Hero.tsx           # Full-bleed hero with overlay
│   ├── LmsSection.tsx     # LMS/About two-col section
│   ├── ServicesSection.tsx # 3 alternating service blocks
│   ├── ManagementDevSection.tsx # Dark card with pill list
│   ├── TrainingConsultantSection.tsx # Lavender bg with feature grid
│   ├── TransformationHub.tsx # Pink card with pill grid
│   ├── CtaBanner.tsx      # Full-width dark CTA strip
│   ├── Testimonials.tsx   # Carousel with prev/next
│   ├── PreFooterCta.tsx   # Pre-footer CTA strip
│   └── Footer.tsx         # 4-col footer with offices card
└── public/
    └── images/            # All section images
```

## 📎 References

- **Figma Design:** https://www.figma.com/design/wuqCLkK1feTgB6xxSRRwZu/Frontend-Intern-Assessment
- **Assessment Brief:** Tobams Group Frontend Developer Intern Assessment (HR email, deadline 7 September 2026)
- **Submission Form:** https://forms.gle/B5MyQhLske86ACM57
