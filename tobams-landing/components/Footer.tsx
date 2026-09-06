import Image from "next/image";
import { Mail, Phone } from "lucide-react";

const whatWeDo = [
  "Sustainability Services",
  "Strategy Planning and Implementation",
  "Tech Talent Solutions",
  "Training and Development",
  "IT Consulting Services",
  "Social Impact",
  "Talent Recruitment",
];

const company = [
  "About", "Jobs", "Projects", "Our Founder", "Business Model",
  "The Team", "Contact Us", "Blog", "FAQs", "Testimonials",
];

const solution = [
  "Tobams Group Academy", "Help a Tech Talent", "Campus Ambassadors Program",
  "Join Our Platform", "Pricing", "Book a Consultation", "Join Our Slack Community",
];

/* Column heading: Nunito 700 20px #FFFFFF */
function ColHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="font-[family-name:var(--font-nunito)] font-bold text-[20px] leading-[150%] text-white mb-4">
      {children}
    </h3>
  );
}

/* Link item: Nunito 400 16px letter-spacing 0.03em #FFFFFF */
function NavLink({ label }: { label: string }) {
  return (
    <li>
      <a
        href="#"
        className="font-[family-name:var(--font-nunito)] font-normal text-[16px] leading-[150%] tracking-[0.03em] text-white hover:text-[#EF4353] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      >
        {label}
      </a>
    </li>
  );
}

export default function Footer() {
  return (
    /* bg #11040E, padding 32px 64px, gap 20px */
    <footer className="w-full bg-[#11040E] py-8 px-5 lg:px-16" aria-label="Site footer">
      <div className="max-w-[1440px] mx-auto w-full flex flex-col gap-5">

        {/* ── Top grid: 4 columns ── */}
        <div className="flex flex-col lg:flex-row lg:justify-between gap-8 py-5 border-b border-[rgba(221,208,218,0.12)]">

          {/* Col 1: Logo + tagline + socials */}
          <div className="flex flex-col gap-6 lg:w-[356px]">
            <Image
              src="/images/logo.png"
              alt="Tobams Group"
              width={188}
              height={73}
              className="brightness-0 invert"
            />
            {/* Tagline: Nunito 400 16px letter-spacing 0.03em #F8F8F8 */}
            <p className="font-[family-name:var(--font-nunito)] font-normal text-[16px] leading-[150%] tracking-[0.03em] text-[#F8F8F8]">
              Tobams Group is an innovative consultancy firm reshaping the future of tech talent development in Africa, specializing in talent acquisition, internships, and skill development with a global perspective.
            </p>
            {/* Socials: 40x40 white circles, icon fill #151515 */}
            <div className="flex gap-5">
              {/* LinkedIn */}
              <a href="#" aria-label="Tobams Group on LinkedIn" className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:opacity-80 transition-opacity focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                <svg width="19" height="18" viewBox="0 0 24 24" fill="#151515" aria-hidden="true">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
              {/* Instagram */}
              <a href="#" aria-label="Tobams Group on Instagram" className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:opacity-80 transition-opacity focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#151515" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              {/* X (Twitter) */}
              <a href="#" aria-label="Tobams Group on X (Twitter)" className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:opacity-80 transition-opacity focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                <svg width="22" height="20" viewBox="0 0 24 24" fill="#151515" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.261 5.635 5.903-5.635Zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: What We Do */}
          <div className="lg:w-[295px]">
            <ColHeading>What We Do</ColHeading>
            <ul className="flex flex-col gap-3">
              {whatWeDo.map((l) => <NavLink key={l} label={l} />)}
            </ul>
          </div>

          {/* Col 3: Company */}
          <div className="lg:w-[120px]">
            <ColHeading>Company</ColHeading>
            <ul className="flex flex-col gap-3">
              {company.map((l) => <NavLink key={l} label={l} />)}
            </ul>
          </div>

          {/* Col 4: Solution */}
          <div className="lg:w-[240px]">
            <ColHeading>Solution</ColHeading>
            <ul className="flex flex-col gap-3">
              {solution.map((l) => <NavLink key={l} label={l} />)}
            </ul>
          </div>
        </div>

        {/* ── Offices + Contact card ── */}
        {/* bg rgba(255,255,255,0.06), border-radius 8px, padding 24px */}
        <div className="w-full bg-[rgba(255,255,255,0.06)] rounded-[8px] p-6 flex flex-col lg:flex-row gap-6 lg:gap-8">

          {/* Registered Offices */}
          <div className="flex-1 flex flex-col gap-2.5">
            <h3 className="font-[family-name:var(--font-nunito)] font-bold text-[20px] leading-[150%] text-white">
              Registered Offices
            </h3>
            <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
              {/* UK */}
              <div className="flex-1">
                <p className="font-[family-name:var(--font-nunito-sans)] font-semibold text-[16px] leading-[150%] text-[#EF4353]">
                  United Kingdom<br />
                  <span className="font-normal text-white">
                    07451196 (Registered by Company House)<br />
                    Vine Cottages, 215 North Street, Romford, Essex, United Kingdom, RM1 4QA
                  </span>
                </p>
              </div>
              {/* Divider */}
              <div className="hidden lg:block w-px bg-[#DDD0DA] opacity-12 self-stretch" />
              {/* Nigeria */}
              <div className="flex-1">
                <p className="font-[family-name:var(--font-nunito-sans)] font-semibold text-[16px] leading-[150%] text-[#EF4353]">
                  Nigeria<br />
                  <span className="font-normal text-white">
                    RC 1048722 (Registered by the Corporate Affairs Commission)<br />
                    4, Muaz Close, Angwar-Rimi
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="lg:w-[254px] flex flex-col gap-4">
            <h3 className="font-[family-name:var(--font-nunito)] font-bold text-[20px] leading-[150%] text-white">
              Contact Information
            </h3>
            <ul className="flex flex-col gap-3">
              <li className="flex items-center gap-4">
                <Mail size={24} className="text-[#EF4353] flex-shrink-0" aria-hidden="true" />
                <a href="mailto:theteam@tobamsgroup.com" className="font-[family-name:var(--font-nunito)] font-normal text-[16px] leading-[150%] tracking-[0.03em] text-white hover:text-[#EF4353] transition-colors">
                  theteam@tobamsgroup.com
                </a>
              </li>
              <li className="flex items-center gap-4">
                <Phone size={24} className="text-[#EF4353] flex-shrink-0" aria-hidden="true" />
                <a href="tel:+447886600748" className="font-[family-name:var(--font-nunito)] font-normal text-[16px] leading-[150%] tracking-[0.03em] text-white hover:text-[#EF4353] transition-colors">
                  +447886600748
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* ── Divider ── */}
        <div className="w-full h-px bg-[#DDD0DA] opacity-[0.12]" />

        {/* ── Copyright bar ── */}
        {/* Nunito 300 16px #FFFFFF, legal links underlined */}
        <div className="flex flex-col-reverse lg:flex-row lg:justify-between lg:items-center gap-3">
          <p className="font-[family-name:var(--font-nunito)] font-light text-[16px] leading-[150%] text-white">
            Copyright &copy; Tobams Group, 2024. All rights reserved.
          </p>
          <div className="flex gap-10">
            {["Terms and Conditions", "Privacy Policy", "Cookies Policy"].map((l) => (
              <a
                key={l}
                href="#"
                className="font-[family-name:var(--font-nunito)] font-light text-[16px] leading-[150%] text-white underline hover:text-[#EF4353] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                {l}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}