import { Mail, Phone } from "lucide-react";
import Logo from "./Logo";

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
  "About",
  "Jobs",
  "Projects",
  "Our Founder",
  "Business Model",
  "The Team",
  "Contact Us",
  "Blog",
  "FAQs",
  "Testimonials",
];

const solution = [
  "Tobams Group Academy",
  "Help a Tech Talent",
  "Campus Ambassadors Program",
  "Join Our Platform",
  "Pricing",
  "Book a Consultation",
  "Join Our Slack Community",
];

function FooterNavColumn({
  heading,
  links,
}: {
  heading: string;
  links: string[];
}) {
  return (
    <nav aria-labelledby={`footer-nav-${heading.replace(/\s+/g, "-").toLowerCase()}`}>
      <h3
        id={`footer-nav-${heading.replace(/\s+/g, "-").toLowerCase()}`}
        className="text-white text-[14px] font-bold mb-4"
      >
        {heading}
      </h3>
      <ul className="flex flex-col gap-0">
        {links.map((link) => (
          <li key={link}>
            <a
              href="#"
              className="text-[13px] leading-[2.0] transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7B2D8B]"
              style={{ color: "rgba(255,255,255,0.75)" }}
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#1A0A22]" aria-label="Site footer">
      {/* Main footer grid */}
      <div className="max-w-[1280px] mx-auto px-5 lg:px-20 pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Logo + About */}
          <div>
            <Logo dark />
            <p
              className="text-[13px] leading-[1.6] mt-4 max-w-[220px]"
              style={{ color: "rgba(255,255,255,0.75)" }}
            >
              Tobams Group is an innovative consultancy firm reshaping the future of
              tech talent development in Africa, specializing in talent acquisition,
              internships, and skill development with a global perspective.
            </p>
            {/* Social icons */}
            <div className="flex gap-2 mt-5">
              <a
                href="#"
                aria-label="Tobams Group on LinkedIn"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-opacity hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                style={{ backgroundColor: "rgba(255,255,255,0.10)" }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-white" aria-hidden="true">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
              <a
                href="#"
                aria-label="Tobams Group on Instagram"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-opacity hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                style={{ backgroundColor: "rgba(255,255,255,0.10)" }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a
                href="#"
                aria-label="Tobams Group on X (formerly Twitter)"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-opacity hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                style={{ backgroundColor: "rgba(255,255,255,0.10)" }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-white"
                  aria-hidden="true"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.261 5.635 5.903-5.635Zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2 */}
          <FooterNavColumn heading="What We Do" links={whatWeDo} />

          {/* Column 3 */}
          <FooterNavColumn heading="Company" links={company} />

          {/* Column 4 */}
          <FooterNavColumn heading="Solution" links={solution} />
        </div>

        {/* Registered Offices card */}
        <div className="mt-10 bg-[#2A1232] border border-[rgba(255,255,255,0.10)] rounded-[10px] p-6 lg:p-7">
          {/* Mobile: Contact Info first, then Offices */}
          <div className="flex flex-col md:flex-row gap-6 lg:gap-10">
            {/* Contact Information — shown first on mobile */}
            <div className="md:hidden">
              <h3 className="text-white text-[14px] font-bold mb-3">
                Contact Information
              </h3>
              <ul className="flex flex-col gap-2">
                <li className="flex items-center gap-2.5">
                  <Mail
                    size={15}
                    className="text-[#E8415A] flex-shrink-0"
                    aria-hidden="true"
                  />
                  <a
                    href="mailto:theteam@tobamsgroup.com"
                    className="text-[13px] hover:text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    style={{ color: "rgba(255,255,255,0.75)" }}
                  >
                    theteam@tobamsgroup.com
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <Phone
                    size={15}
                    className="text-[#E8415A] flex-shrink-0"
                    aria-hidden="true"
                  />
                  <a
                    href="tel:+447886600748"
                    className="text-[13px] hover:text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    style={{ color: "rgba(255,255,255,0.75)" }}
                  >
                    +447886600748
                  </a>
                </li>
              </ul>
            </div>

            {/* Registered Offices */}
            <div className="flex-1">
              <h3 className="text-white text-[14px] font-bold mb-3">
                Registered Offices
              </h3>
              <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                <div>
                  <p className="text-[#E8415A] text-[13px] font-semibold mb-1">
                    United Kingdom
                  </p>
                  <p
                    className="text-[13px] leading-[1.6]"
                    style={{ color: "rgba(255,255,255,0.75)" }}
                  >
                    Suite 1, 4th Floor, 30 Churchill Place,
                    <br />
                    London, E14 5RE, United Kingdom
                  </p>
                </div>
                <div>
                  <p className="text-[#E8415A] text-[13px] font-semibold mb-1">
                    Nigeria
                  </p>
                  <p
                    className="text-[13px] leading-[1.6]"
                    style={{ color: "rgba(255,255,255,0.75)" }}
                  >
                    2nd Floor, 22 Idowu Martins Street,
                    <br />
                    Victoria Island, Lagos, Nigeria
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Information — desktop only (right col) */}
            <div className="hidden md:block md:w-[35%]">
              <h3 className="text-white text-[14px] font-bold mb-3">
                Contact Information
              </h3>
              <ul className="flex flex-col gap-2">
                <li className="flex items-center gap-2.5">
                  <Mail
                    size={15}
                    className="text-[#E8415A] flex-shrink-0"
                    aria-hidden="true"
                  />
                  <a
                    href="mailto:theteam@tobamsgroup.com"
                    className="text-[13px] hover:text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    style={{ color: "rgba(255,255,255,0.75)" }}
                  >
                    theteam@tobamsgroup.com
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <Phone
                    size={15}
                    className="text-[#E8415A] flex-shrink-0"
                    aria-hidden="true"
                  />
                  <a
                    href="tel:+447886600748"
                    className="text-[13px] hover:text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    style={{ color: "rgba(255,255,255,0.75)" }}
                  >
                    +447886600748
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-[rgba(255,255,255,0.10)]">
        <div className="max-w-[1280px] mx-auto px-5 lg:px-20 py-4">
          {/* Mobile: links top, copyright bottom */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1.5">
            <p
              className="text-[12px] md:order-1 order-2"
              style={{ color: "rgba(255,255,255,0.50)" }}
            >
              Copyright &copy; Tobams Group. 2024. All rights reserved.
            </p>
            <div className="flex gap-3 md:order-2 order-1">
              {["Terms and Conditions", "Privacy Policy", "Cookies Policy"].map(
                (link, i) => (
                  <a
                    key={link}
                    href="#"
                    className="text-[12px] hover:text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    style={{ color: "rgba(255,255,255,0.50)" }}
                  >
                    {link}
                  </a>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
