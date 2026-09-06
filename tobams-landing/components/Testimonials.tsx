"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
  avatar: string;
  avatarAlt: string;
}

const testimonials: Testimonial[] = [
  { id: 1, name: "Aisha Yusuf", role: "Founder, CraftHub NG", quote: "Working with Tobams Group on our website was a breeze. They understood our vision and transformed it into a beautiful online space. Highly recommend their Website Design service!", avatar: "/images/testimonial-1.webp.png", avatarAlt: "Aisha Yusuf, Founder of CraftHub NG" },
  { id: 2, name: "John Davies", role: "Marketing Manager, E-Commerce Emporium", quote: "Tobams Group's Digital Marketing strategies gave our brand the boost it needed. Simple yet powerful techniques that delivered tangible results. A pleasure to collaborate with!", avatar: "/images/testimonial-2.webp.png", avatarAlt: "John Davies, Marketing Manager at E-Commerce Emporium" },
  { id: 3, name: "Chinonso Nwankwo", role: "HR Director, FutureTech Solutions", quote: "Tobams Group has been instrumental in our talent acquisition journey. Their Tech Talent Solution service consistently connects us with the right professionals. Reliable and straightforward.", avatar: "/images/testimonial-3.webp.png", avatarAlt: "Chinonso Nwankwo, HR Director at FutureTech Solutions" },
  { id: 4, name: "Sarah Johnson", role: "CEO of Tech Innovations Inc.", quote: "Tobams Group is a true partner in our journey to digital excellence. Their creativity and technical expertise have propelled our projects to new heights. Their work is top-notch, and the results speak for themselves. I can't recommend them enough!", avatar: "/images/testimonial-4.webp.jpg", avatarAlt: "Sarah Johnson, CEO of Tech Innovations Inc." },
];

// One literal class per slide index — avoids any style= attribute.
// 445px = card width (422px) + gap (23px).
const CAROUSEL_OFFSETS: string[] = [
  "translate-x-0",
  "-translate-x-[445px]",
  "-translate-x-[890px]",
  "-translate-x-[1335px]",
];

/* Shared card — different sizing per breakpoint */
function TestimonialCard({ testimonial, mobile = false }: { testimonial: Testimonial; mobile?: boolean }) {
  return (
    <article className={`flex flex-col bg-white border-l-2 border-l-[#EF4353] flex-shrink-0
      ${mobile
        ? "rounded-[8px] p-5 gap-4 w-[328px] h-[226px]"
        : "rounded-[16px] p-5 gap-6 w-[310px] lg:w-[422px] min-h-[244px]"
      }`}>
      {/* Title row */}
      <div className="flex items-center gap-5">
        <div className="relative w-11 h-11 rounded-full overflow-hidden flex-shrink-0">
          <Image src={testimonial.avatar} alt={testimonial.avatarAlt} fill className="object-cover" sizes="44px" />
        </div>
        <div className="flex flex-col">
          <p className={`font-semibold leading-[150%] text-[#151515] ${mobile ? "text-[14px]" : "text-[16px]"}`}>{testimonial.name}</p>
          <p className={`font-normal leading-[150%] text-[#696969] ${mobile ? "text-[12px]" : "text-[14px]"}`}>{testimonial.role}</p>
        </div>
      </div>
      {/* Quote */}
      <p className={`font-normal leading-[150%] text-[#151515] ${mobile ? "text-[14px]" : "text-[16px] lg:text-[18px]"}`}>
        {testimonial.quote}
      </p>
    </article>
  );
}

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleNext = () => setCurrentIndex((i) => (i + 1) % testimonials.length);
  const handlePrev = () => setCurrentIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="w-full border-b border-[rgba(196,196,196,0.3)]" aria-labelledby="testimonials-heading-mobile testimonials-heading-desktop">

      {/* ── MOBILE: padding 24px 0, horizontal scroll cards ── */}
      <div className="lg:hidden flex flex-col gap-6 px-6 py-6">

        {/* Heading: Nunito 700 20px 130% #151515 left-aligned */}
        <h2
          id="testimonials-heading-mobile"
          className="font-[family-name:var(--font-nunito)] font-bold text-[20px] leading-[130%] text-[#151515]"
        >
          Testimonials
        </h2>

        {/* Scrollable cards row: overflow-x scroll, gap 23px, 328x226 cards */}
        <div className="flex flex-row gap-[23px] overflow-x-auto pb-2 -mx-1 px-1">
          {testimonials.map((t) => (
            <TestimonialCard key={t.id} testimonial={t} mobile />
          ))}
        </div>

        {/* Arrows: 28x28, radius 4px, bg rgba(240,67,84,0.1), right-aligned */}
        <div className="flex justify-end gap-3">
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous testimonial"
            className="flex items-center justify-center w-7 h-7 rounded-[4px] bg-[rgba(240,67,84,0.1)] text-[#EF4353] hover:bg-[rgba(240,67,84,0.2)] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#EF4353]"
          >
            <ChevronLeft size={16} aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next testimonial"
            className="flex items-center justify-center w-7 h-7 rounded-[4px] bg-[rgba(240,67,84,0.1)] text-[#EF4353] hover:bg-[rgba(240,67,84,0.2)] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#EF4353]"
          >
            <ChevronRight size={16} aria-hidden="true" />
          </button>
        </div>
      </div>

      {/* ── DESKTOP: padding 0 64px, gap 40px ── */}
      <div className="hidden lg:flex flex-col gap-10 py-16 px-5 lg:px-16">
        <div className="max-w-[1440px] mx-auto w-full flex flex-col gap-10">

          {/* Heading: Nunito 700 40px 130% left-aligned */}
          <h2
            id="testimonials-heading-desktop"
            className="font-[family-name:var(--font-nunito)] font-bold text-[40px] leading-[130%] text-[#151515]"
          >
            Testimonials
          </h2>

          {/* Desktop carousel: 3 cards + partial 4th, gap 23px */}
          <div className="overflow-hidden">
            <div aria-live="polite" aria-atomic="true" className="sr-only">
              {testimonials[currentIndex].name}, {testimonials[currentIndex].role}
            </div>
            <div
              className={`flex gap-[23px] transition-transform duration-300 ease-in-out ${CAROUSEL_OFFSETS[currentIndex]}`}
            >
              {testimonials.map((t) => (
                <TestimonialCard key={t.id} testimonial={t} />
              ))}
            </div>
          </div>

          {/* Arrows desktop: 32x32, radius 8px */}
          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous testimonial"
              className="flex items-center justify-center w-8 h-8 rounded-[8px] bg-[rgba(240,67,84,0.1)] text-[#EF4353] hover:bg-[rgba(240,67,84,0.2)] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#EF4353]"
            >
              <ChevronLeft size={18} aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next testimonial"
              className="flex items-center justify-center w-8 h-8 rounded-[8px] bg-[rgba(240,67,84,0.1)] text-[#EF4353] hover:bg-[rgba(240,67,84,0.2)] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#EF4353]"
            >
              <ChevronRight size={18} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

    </section>
  );
}