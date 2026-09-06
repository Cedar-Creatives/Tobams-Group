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

### Inline Styles — Documented Exceptions
Zero `style={{}}` policy with three documented exceptions:

1. **`Testimonials.tsx` — carousel animation**: `style={{ '--carousel-offset': '-Npx' }}` sets a CSS custom property. The `.carousel-track` class in `globals.css` reads it for `translateX`. Required for dynamic pixel offset without inline transforms.
2. **`ServicesSection.tsx` — asymmetric border-radius**: Each service block has a unique four-value radius per Figma (e.g. `56px 24px 23px 12px`). Tailwind cannot express four independent corner values in one class. Driven from the data array.
3. **`ManagementDevSection.tsx` / `TransformationHub.tsx` — image radius**: Same reason as above (`8px 8px 0px 8px`).

### CTA Banner — Dual Copy
- Desktop and mobile show different text copy per Figma design. Both `<p>` elements always present in DOM, toggled via `hidden md:block` / `md:hidden`. Not conditional rendering — ensures both are accessible.

### Netlify Deployment
- Deployed to Netlify using `@netlify/plugin-nextjs` for full Next.js App Router support.
- `netlify.toml` at project root sets base directory `tobams-landing/`, build command `npm run build`, publish `.next`.

## 📱 Responsive Verification

Verified at all three required breakpoints:

- **425px (mobile)**: Single-column stacked layouts, hamburger nav (`#F9F9F9` bg), horizontal-scroll testimonials, rounded CTA card with mobile-specific copy, 14px body / 20–24px headings
- **768px (tablet)**: Two-column layouts restored, desktop nav visible, carousel active
- **1280px (desktop)**: Full Figma-spec layout — two-row nav, all two-column sections, 3-card testimonial carousel, exact Figma typography and spacing

## ⚠️ Known Issues

None at time of submission.

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
│   ├── globals.css                    # Tailwind v4 @theme inline + all design tokens + carousel CSS
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
│   ├── Testimonials.tsx               # Carousel, CSS custom property animation
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