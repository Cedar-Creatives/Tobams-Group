"use client";

import { useState } from "react";
import { ChevronDown, User, Menu, X } from "lucide-react";
import Logo from "./Logo";

const navLinks = [
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
      {/* Top bar: Logo + Buttons */}
      <div className="border-b border-[#E8E0EC]">
        <div className="max-w-[1280px] mx-auto px-5 lg:px-10 flex items-center justify-between h-14">
          <Logo />

          {/* Desktop buttons */}
          <div className="hidden md:flex items-center gap-3">
            <button
              className="flex items-center gap-2 bg-[#4A1F6B] text-white text-sm font-semibold px-4 py-2 rounded-[6px] hover:bg-[#3a1858] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4A1F6B]"
              aria-label="Account"
            >
              <User size={15} aria-hidden="true" />
              Account
              <ChevronDown size={14} aria-hidden="true" />
            </button>
            <button
              className="bg-[#E8415A] text-white text-sm font-semibold px-5 py-2 rounded-[6px] hover:bg-[#C8303A] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E8415A]"
            >
              Take Assessment
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex items-center justify-center w-11 h-11 bg-[#1A1A1A] rounded-[8px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7B2D8B]"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
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

      {/* Links bar — desktop only */}
      <nav aria-label="Main navigation" className="hidden md:block border-b border-[#E8E0EC]">
        <div className="max-w-[1280px] mx-auto px-5 lg:px-10 flex items-center h-11 gap-6">
          {navLinks.map((link) => (
            <button
              key={link.label}
              className={`flex items-center gap-1 text-[14px] font-${activeItem === link.label ? "semibold" : "normal"} whitespace-nowrap transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7B2D8B] ${
                activeItem === link.label
                  ? "text-[#7B2D8B] border-b-2 border-[#7B2D8B] pb-[1px]"
                  : "text-[#1A1A1A] hover:text-[#7B2D8B]"
              }`}
            >
              {link.label}
              {link.hasDropdown && (
                <ChevronDown size={13} aria-hidden="true" />
              )}
            </button>
          ))}
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <nav
          id="mobile-menu"
          aria-label="Mobile navigation"
          className="md:hidden bg-white border-t border-[#E8E0EC]"
        >
          <ul className="flex flex-col py-2">
            {navLinks.map((link) => (
              <li key={link.label}>
                <button
                  className={`w-full flex items-center justify-between px-5 py-3 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7B2D8B] ${
                    activeItem === link.label
                      ? "text-[#7B2D8B] bg-[#F5EEF8]"
                      : "text-[#1A1A1A] hover:bg-[#F5EEF8]"
                  }`}
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
          <div className="flex flex-col gap-3 px-5 py-4 border-t border-[#E8E0EC]">
            <button
              className="flex items-center justify-center gap-2 bg-[#4A1F6B] text-white text-sm font-semibold px-4 py-2.5 rounded-[6px] hover:bg-[#3a1858] transition-colors"
              aria-label="Account"
            >
              <User size={15} aria-hidden="true" />
              Account
            </button>
            <button className="bg-[#E8415A] text-white text-sm font-semibold px-5 py-2.5 rounded-[6px] hover:bg-[#C8303A] transition-colors">
              Take Assessment
            </button>
          </div>
        </nav>
      )}
    </header>
  );
}
