"use client";

import { useState } from "react";
import { ChevronDown, User, Menu, X } from "lucide-react";
import Logo from "./Logo";

interface NavLink {
  label: string;
  hasDropdown: boolean;
}

const navLinks: NavLink[] = [
  { label: "About", hasDropdown: true },
  { label: "What We Do", hasDropdown: true },
  { label: "Jobs", hasDropdown: true },
  { label: "Projects", hasDropdown: false },
  { label: "TG Academy", hasDropdown: false },
  { label: "Strategic Partnership", hasDropdown: false },
  { label: "Pricing", hasDropdown: false },
  { label: "Book a Consultation", hasDropdown: false },
];

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeItem] = useState("About");

  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm">
      {/* ── Row 1: Top bar (Logo + Account + Take Assessment) ── */}
      <div className="border-b border-[#E8E0EC]">
        <div className="max-w-[1280px] mx-auto px-5 lg:px-10 flex items-center justify-between h-14">
          {/* Logo — always visible */}
          <Logo />

          {/* Desktop utility buttons — hidden below lg */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              type="button"
              className="flex items-center gap-2 bg-[#571244] text-white text-[14px] font-semibold px-4 rounded-[4px] h-12 hover:bg-[#3d0c30] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#571244]"
              aria-label="Account"
            >
              {/* Circular avatar — 32x32, light lavender bg, dark icon */}
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#E8D5E8] flex-shrink-0">
                <User size={16} className="text-[#571244]" aria-hidden="true" />
              </span>
              Account
              <ChevronDown size={14} aria-hidden="true" />
            </button>
            <button
              type="button"
              className="bg-[#EF4353] text-white text-[14px] font-semibold px-5 rounded-[4px] hover:bg-[#d63545] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#EF4353] h-12 flex items-center"
            >
              Take Assessment
            </button>
          </div>

          {/* Mobile hamburger — visible below lg */}
          <button
            type="button"
            className="lg:hidden flex items-center justify-center w-11 h-11 bg-[#1A1A1A] rounded-[8px] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#571244]"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            {mobileOpen ? (
              <X size={20} className="text-white" aria-hidden="true" />
            ) : (
              <Menu size={20} className="text-white" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* ── Row 2: Links bar — desktop only ── */}
      <nav
        aria-label="Main navigation"
        className="hidden lg:block border-b border-[#E8E0EC]"
      >
        <div className="max-w-[1280px] mx-auto px-5 lg:px-10 flex items-center justify-center h-14 gap-8">
          {navLinks.map((link) => (
            <button
              key={link.label}
              type="button"
              className={[
                "flex items-center gap-1.5 text-[18px] whitespace-nowrap transition-colors leading-[150%]",
                "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#571244]",
                activeItem === link.label
                  ? "text-[#571244] font-semibold border-b-[3px] border-[#571244] pb-[2px]"
                  : "text-[#151515] font-normal hover:text-[#571244]",
              ].join(" ")}
            >
              {link.label}
              {link.hasDropdown && (
                <ChevronDown size={15} aria-hidden="true" />
              )}
            </button>
          ))}
        </div>
      </nav>

      {/* ── Mobile menu overlay — revealed when mobileOpen ── */}
      {mobileOpen && (
        <nav
          id="mobile-menu"
          aria-label="Mobile navigation"
          className="lg:hidden bg-white border-t border-[#E8E0EC]"
        >
          <ul className="flex flex-col py-2" role="list">
            {navLinks.map((link) => (
              <li key={link.label}>
                <button
                  type="button"
                  className={[
                    "w-full flex items-center justify-between px-5 py-3 text-sm font-medium transition-colors",
                    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#571244]",
                    activeItem === link.label
                      ? "text-[#571244] bg-[#F5EEF8]"
                      : "text-[#151515] font-normal hover:bg-[#F5EEF8]",
                  ].join(" ")}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                  {link.hasDropdown && (
                    <ChevronDown size={14} aria-hidden="true" />
                  )}
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile utility buttons stacked below links */}
          <div className="flex flex-col gap-3 px-5 py-4 border-t border-[#E8E0EC]">
            <button
              type="button"
              className="flex items-center justify-center gap-2 bg-[#571244] text-white text-sm font-semibold px-3 py-2 rounded-[6px] hover:bg-[#3d0c30] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#571244]"
              aria-label="Account"
            >
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#E8D5E8] flex-shrink-0">
                <User size={16} className="text-[#571244]" aria-hidden="true" />
              </span>
              Account
            </button>
            <button
              type="button"
              className="bg-[#EF4353] text-white text-sm font-semibold px-5 py-3 rounded-[4px] hover:bg-[#d63545] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#EF4353]"
            >
              Take Assessment
            </button>
          </div>
        </nav>
      )}
    </header>
  );
}
