import Image from "next/image";
import { Mail, Phone } from "lucide-react";

const whatWeDo = ["Sustainability Services","Strategy Planning and Implementation","Tech Talent Solutions","Training and Development","IT Consulting Services","Social Impact","Talent Recruitment"];
const company = ["About","Jobs","Projects","Our Founder","Business Model","The Team","Contact Us","Blog","FAQs","Testimonials"];
const solution = ["Tobams Group Academy","Help a Tech Talent","Campus Ambassadors Program","Join Our Platform","Pricing","Book a Consultation","Join Our Slack Community"];

function NavCol({ heading, links, mobile = false }: { heading: string; links: string[]; mobile?: boolean }) {
  const headingId = `footer-col-${heading.toLowerCase().replace(/\s+/g, "-")}`;
  return (
    <nav aria-labelledby={headingId}>
      {/* Heading: Nunito Sans 700 18px mobile / 20px desktop */}
      <h3 id={headingId} className={`font-bold text-white mb-4 ${mobile ? "text-[18px] leading-[150%]" : "font-[family-name:var(--font-nunito)] text-[20px]"}`}>
        {heading}
      </h3>
      <ul className="flex flex-col gap-3">
        {links.map((l) => (
          <li key={l}>
            <a href="#" className={`font-normal leading-[150%] text-white hover:text-[#EF4353] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${mobile ? "text-[14px]" : "text-[16px] tracking-[0.03em]"}`}>
              {l}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default function Footer() {
  return (
    <footer className="w-full bg-[#11040E]" aria-label="Site footer">

      {/* ── MOBILE: padding 24px, gap 20px, flex-col ── */}
      <div className="lg:hidden flex flex-col gap-5 p-6">

        {/* Logo */}
        <Image src="/images/logo.png" alt="Tobams Group" width={188} height={73} />

        {/* Tagline: Nunito Sans 400 14px #F8F8F8 */}
        <p className="font-normal text-[14px] leading-[150%] text-[#F8F8F8]">
          Tobams Group is an innovative consultancy firm reshaping the future of tech talent development in Africa, specializing in talent acquisition, internships, and skill development with a global perspective.
        </p>

        {/* Social icons: 40x40 white circles */}
        <div className="flex gap-5">
          <a href="#" aria-label="Tobams Group on LinkedIn" className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:opacity-80 transition-opacity">
            <svg width="19" height="18" viewBox="0 0 24 24" fill="#151515" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
          </a>
          <a href="#" aria-label="Tobams Group on Instagram" className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:opacity-80 transition-opacity">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#151515" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
          </a>
          <a href="#" aria-label="Tobams Group on X" className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:opacity-80 transition-opacity">
            <svg width="22" height="20" viewBox="0 0 24 24" fill="#151515" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.261 5.635 5.903-5.635Zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          </a>
        </div>

        {/* Nav columns: Nunito Sans 700 18px headings, 14px links */}
        <NavCol heading="What We Do" links={whatWeDo} mobile />
        <NavCol heading="Company" links={company} mobile />
        <NavCol heading="Solution" links={solution} mobile />

        {/* Divider */}
        <div className="w-full h-px bg-[#DDD0DA] opacity-[0.12]" />

        {/* Offices + Contact card: bg rgba(255,255,255,0.06), radius 8px, padding 16px */}
        <div className="w-full bg-[rgba(255,255,255,0.06)] rounded-[8px] p-4 flex flex-col gap-6">

          {/* Contact Info: Nunito Sans 700 18px heading, 14px text */}
          <div className="flex flex-col gap-2.5">
            <h3 className="font-bold text-[18px] leading-[150%] text-white">Contact Information</h3>
            <ul className="flex flex-col gap-2.5">
              <li className="flex items-center gap-4">
                <Mail size={24} className="text-[#EF4353] flex-shrink-0" aria-hidden="true" />
                <a href="mailto:theteam@tobamsgroup.com" className="font-normal text-[14px] leading-[150%] text-white hover:text-[#EF4353] transition-colors">theteam@tobamsgroup.com</a>
              </li>
              <li className="flex items-center gap-4">
                <Phone size={24} className="text-[#EF4353] flex-shrink-0" aria-hidden="true" />
                <a href="tel:+447886600748" className="font-normal text-[14px] leading-[150%] text-white hover:text-[#EF4353] transition-colors">+447886600748</a>
              </li>
            </ul>
          </div>

          {/* Registered Offices: Nunito Sans 700 18px heading, 14px 600 #EF4353 text */}
          <div className="flex flex-col gap-2.5">
            <h3 className="font-bold text-[18px] leading-[150%] text-white">Registered Offices</h3>
            <div className="flex flex-col gap-4">
              <p className="font-semibold text-[14px] leading-[150%] text-[#EF4353]">
                United Kingdom<br />
                <span className="font-normal text-white">07451196 (Registered by Company House)<br />Vine Cottages, 215 North Street, Romford, Essex, United Kingdom, RM1 4QA</span>
              </p>
              <p className="font-semibold text-[14px] leading-[150%] text-[#EF4353]">
                Nigeria<br />
                <span className="font-normal text-white">RC 1048722 (Registered by the Corporate Affairs Commission)<br />4, Muaz Close, Angwar-Rimi</span>
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-[#DDD0DA] opacity-[0.12]" />

        {/* Legal links: flex-wrap centered, Nunito 300 14px underlined */}
        <div className="flex flex-row flex-wrap justify-center gap-x-6 gap-y-2">
          {["Privacy Policy","Cookies Policy","Terms and Conditions"].map((l) => (
            <a key={l} href="#" className="font-[family-name:var(--font-nunito)] font-light text-[14px] text-white underline hover:text-[#EF4353] transition-colors">{l}</a>
          ))}
        </div>

        {/* Copyright: Nunito 300 14px center */}
        <p className="font-[family-name:var(--font-nunito)] font-light text-[14px] leading-[150%] text-white text-center">
          Copyright &copy; Tobams Group, 2024. All rights reserved.
        </p>
      </div>

      {/* ── DESKTOP ── */}
      <div className="hidden lg:flex flex-col gap-5 py-8 px-5 lg:px-16">
        <div className="max-w-[1440px] mx-auto w-full flex flex-col gap-5">
          <div className="flex flex-col lg:flex-row lg:justify-between gap-8 py-5 border-b border-[rgba(221,208,218,0.12)]">
            <div className="flex flex-col gap-6 lg:w-[356px]">
              <Image src="/images/logo.png" alt="Tobams Group" width={188} height={73} />
              <p className="font-[family-name:var(--font-nunito)] font-normal text-[16px] leading-[150%] tracking-[0.03em] text-[#F8F8F8]">
                Tobams Group is an innovative consultancy firm reshaping the future of tech talent development in Africa, specializing in talent acquisition, internships, and skill development with a global perspective.
              </p>
              <div className="flex gap-5">
                <a href="#" aria-label="LinkedIn" className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:opacity-80 transition-opacity focus-visible:outline focus-visible:outline-2 focus-visible:outline-white">
                  <svg width="19" height="18" viewBox="0 0 24 24" fill="#151515" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                </a>
                <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:opacity-80 transition-opacity focus-visible:outline focus-visible:outline-2 focus-visible:outline-white">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#151515" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                </a>
                <a href="#" aria-label="X (Twitter)" className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:opacity-80 transition-opacity focus-visible:outline focus-visible:outline-2 focus-visible:outline-white">
                  <svg width="22" height="20" viewBox="0 0 24 24" fill="#151515" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.261 5.635 5.903-5.635Zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
              </div>
            </div>
            <NavCol heading="What We Do" links={whatWeDo} />
            <NavCol heading="Company" links={company} />
            <NavCol heading="Solution" links={solution} />
          </div>
          <div className="w-full bg-[rgba(255,255,255,0.06)] rounded-[8px] p-6 flex flex-col lg:flex-row gap-6 lg:gap-8">
            <div className="flex-1 flex flex-col gap-2.5">
              <h3 className="font-[family-name:var(--font-nunito)] font-bold text-[20px] leading-[150%] text-white">Registered Offices</h3>
              <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
                <div className="flex-1">
                  <p className="font-semibold text-[16px] leading-[150%] text-[#EF4353]">United Kingdom<br /><span className="font-normal text-white">07451196 (Registered by Company House)<br />Vine Cottages, 215 North Street, Romford, Essex, United Kingdom, RM1 4QA</span></p>
                </div>
                <div className="hidden lg:block w-px bg-[#DDD0DA] opacity-[0.12] self-stretch" />
                <div className="flex-1">
                  <p className="font-semibold text-[16px] leading-[150%] text-[#EF4353]">Nigeria<br /><span className="font-normal text-white">RC 1048722 (Registered by the Corporate Affairs Commission)<br />4, Muaz Close, Angwar-Rimi</span></p>
                </div>
              </div>
            </div>
            <div className="lg:w-[254px] flex flex-col gap-4">
              <h3 className="font-[family-name:var(--font-nunito)] font-bold text-[20px] leading-[150%] text-white">Contact Information</h3>
              <ul className="flex flex-col gap-3">
                <li className="flex items-center gap-4"><Mail size={24} className="text-[#EF4353] flex-shrink-0" aria-hidden="true" /><a href="mailto:theteam@tobamsgroup.com" className="font-[family-name:var(--font-nunito)] font-normal text-[16px] leading-[150%] tracking-[0.03em] text-white hover:text-[#EF4353] transition-colors">theteam@tobamsgroup.com</a></li>
                <li className="flex items-center gap-4"><Phone size={24} className="text-[#EF4353] flex-shrink-0" aria-hidden="true" /><a href="tel:+447886600748" className="font-[family-name:var(--font-nunito)] font-normal text-[16px] leading-[150%] tracking-[0.03em] text-white hover:text-[#EF4353] transition-colors">+447886600748</a></li>
              </ul>
            </div>
          </div>
          <div className="w-full h-px bg-[#DDD0DA] opacity-[0.12]" />
          <div className="flex flex-col-reverse lg:flex-row lg:justify-between lg:items-center gap-3">
            <p className="font-[family-name:var(--font-nunito)] font-light text-[16px] leading-[150%] text-white">Copyright &copy; Tobams Group, 2024. All rights reserved.</p>
            <div className="flex gap-10">
              {["Terms and Conditions","Privacy Policy","Cookies Policy"].map((l) => (
                <a key={l} href="#" className="font-[family-name:var(--font-nunito)] font-light text-[16px] leading-[150%] text-white underline hover:text-[#EF4353] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">{l}</a>
              ))}
            </div>
          </div>
        </div>
      </div>

    </footer>
  );
}