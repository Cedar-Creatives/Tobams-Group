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
  {
    id: 1,
    name: "Aisha Yusuf",
    role: "Founder, CraftHub NG",
    quote:
      "Working with Tobams Group on our website was a breeze. They understood our vision and transformed it into a beautiful online space. Highly recommend their Website Design service!",
    avatar: "/images/testimonial-1.webp.png",
    avatarAlt: "Aisha Yusuf, Founder of CraftHub NG",
  },
  {
    id: 2,
    name: "John Davies",
    role: "Marketing Manager, E-Commerce Emporium",
    quote:
      "Tobams Group's Digital Marketing strategies gave our brand the boost it needed. Simple yet powerful techniques that delivered tangible results. A pleasure to collaborate with!",
    avatar: "/images/testimonial-2.webp.png",
    avatarAlt: "John Davies, Marketing Manager at E-Commerce Emporium",
  },
  {
    id: 3,
    name: "Chinonso Nwankwo",
    role: "HR Director, FutureTech Solutions",
    quote:
      "Tobams Group has been instrumental in our talent acquisition journey. Their Tech Talent Solution service consistently connects us with the right professionals. Reliable and straightforward.",
    avatar: "/images/testimonial-3.webp.png",
    avatarAlt: "Chinonso Nwankwo, HR Director at FutureTech Solutions",
  },
  {
    id: 4,
    name: "Sarah Johnson",
    role: "CEO of Tech Innovations Inc.",
    quote:
      "Tobams Group is a true partner in our journey to digital excellence. Their creativity and technical expertise have propelled our projects to new heights. Their work is top-notch, and the results speak for themselves. I can't recommend them enough!",
    avatar: "/images/testimonial-4.webp.jpg",
    avatarAlt: "Sarah Johnson, CEO of Tech Innovations Inc.",
  },
];

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <article
      className="bg-white border border-[#E8E0EC] rounded-[12px] p-6 border-l-4 border-l-[#E8415A] shadow-[0_2px_8px_rgba(0,0,0,0.06)] flex-shrink-0 w-[300px] lg:w-[320px]"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="relative w-11 h-11 rounded-full overflow-hidden flex-shrink-0">
          <Image
            src={testimonial.avatar}
            alt={testimonial.avatarAlt}
            fill
            className="object-cover"
            sizes="44px"
          />
        </div>
        <div>
          <p className="text-[#1A1A1A] text-[14px] font-semibold leading-tight">
            {testimonial.name}
          </p>
          <p className="text-[#777777] text-[12px] leading-tight">
            {testimonial.role}
          </p>
        </div>
      </div>
      {/* Mobile quote text is larger (15px) than desktop (13-14px) per Requirement 11.8 */}
      <p className="text-[#3A3A3A] text-[15px] md:text-[13px] lg:text-[14px] leading-[1.6]">
        {testimonial.quote}
      </p>
    </article>
  );
}

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () =>
    setCurrentIndex((i) => (i + 1) % testimonials.length);
  const handlePrev = () =>
    setCurrentIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  return (
    <section
      className="bg-white py-16 lg:py-20"
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-[1280px] mx-auto px-5 lg:px-20">
        <h2
          id="testimonials-heading"
          className="text-[#1A1A1A] font-bold text-[28px] lg:text-[38px] text-center mb-10"
        >
          Testimonials
        </h2>

        {/* Desktop carousel — 3 full cards + partial 4th peek visible */}
        <div className="hidden md:block overflow-hidden">
          {/*
           * CSS custom property approach — the only `style` usage in the codebase.
           * Used to drive carousel translateX animation without inline transforms.
           * The --carousel-offset variable is consumed by the .carousel-track rule in globals.css.
           * Card width (320px) + gap (24px) = 344px per step; using 336px matches the 300px card layout.
           */}
          <div
            className="carousel-track flex gap-6"
            style={
              {
                "--carousel-offset": `-${currentIndex * 336}px`,
              } as React.CSSProperties
            }
          >
            {testimonials.map((t) => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
          </div>
        </div>

        {/* Mobile — single card swap (no track) */}
        <div className="md:hidden">
          <TestimonialCard testimonial={testimonials[currentIndex]} />
        </div>

        {/* Navigation arrows — bottom-right aligned */}
        <div className="flex justify-end gap-2 mt-6">
          {/*
           * Responsive arrow styles:
           * Mobile  (base): rounded-[8px], tinted pink bg, no border
           * Desktop (md+):  rounded-full, white bg, coral border (circle)
           */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous testimonial"
            className="flex items-center justify-center
              rounded-[8px] bg-[rgba(232,65,90,0.10)] w-10 h-10 border-0
              md:rounded-full md:bg-white md:w-9 md:h-9 md:border md:border-[#E8415A]
              text-[#E8415A] hover:opacity-80 transition-opacity
              focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E8415A]"
          >
            <ChevronLeft size={18} aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next testimonial"
            className="flex items-center justify-center
              rounded-[8px] bg-[rgba(232,65,90,0.10)] w-10 h-10 border-0
              md:rounded-full md:bg-white md:w-9 md:h-9 md:border md:border-[#E8415A]
              text-[#E8415A] hover:opacity-80 transition-opacity
              focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E8415A]"
          >
            <ChevronRight size={18} aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}
