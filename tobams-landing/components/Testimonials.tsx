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
    quote: "Working with Tobams Group on our website was a breeze. They understood our vision and transformed it into a beautiful online space. Highly recommend their Website Design service!",
    avatar: "/images/testimonial-1.webp.png",
    avatarAlt: "Aisha Yusuf, Founder of CraftHub NG",
  },
  {
    id: 2,
    name: "John Davies",
    role: "Marketing Manager, E-Commerce Emporium",
    quote: "Tobams Group's Digital Marketing strategies gave our brand the boost it needed. Simple yet powerful techniques that delivered tangible results. A pleasure to collaborate with!",
    avatar: "/images/testimonial-2.webp.png",
    avatarAlt: "John Davies, Marketing Manager at E-Commerce Emporium",
  },
  {
    id: 3,
    name: "Chinonso Nwankwo",
    role: "HR Director, FutureTech Solutions",
    quote: "Tobams Group has been instrumental in our talent acquisition journey. Their Tech Talent Solution service consistently connects us with the right professionals. Reliable and straightforward.",
    avatar: "/images/testimonial-3.webp.png",
    avatarAlt: "Chinonso Nwankwo, HR Director at FutureTech Solutions",
  },
  {
    id: 4,
    name: "Sarah Johnson",
    role: "CEO of Tech Innovations Inc.",
    quote: "Tobams Group is a true partner in our journey to digital excellence. Their creativity and technical expertise have propelled our projects to new heights. Their work is top-notch, and the results speak for themselves. I can't recommend them enough!",
    avatar: "/images/testimonial-4.webp.jpg",
    avatarAlt: "Sarah Johnson, CEO of Tech Innovations Inc.",
  },
];

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    /* Card: 422x244px, bg #FFFFFF, border-left 2px solid #EF4353, border-radius 16px, padding 20px 24px, gap 24px */
    <article className="flex flex-col gap-6 bg-white border-l-2 border-l-[#EF4353] rounded-[16px] p-5 flex-shrink-0 w-[320px] lg:w-[422px] min-h-[244px]">
      {/* Title row: avatar + name/role, gap 21px */}
      <div className="flex items-center gap-5">
        {/* Avatar: 44x44 circle */}
        <div className="relative w-11 h-11 rounded-full overflow-hidden flex-shrink-0">
          <Image
            src={testimonial.avatar}
            alt={testimonial.avatarAlt}
            fill
            className="object-cover"
            sizes="44px"
          />
        </div>
        <div className="flex flex-col">
          {/* Name: Nunito Sans 600 16px #151515 */}
          <p className="font-semibold text-[16px] leading-[150%] text-[#151515]">
            {testimonial.name}
          </p>
          {/* Role: Nunito Sans 400 14px #696969 */}
          <p className="font-normal text-[14px] leading-[150%] text-[#696969]">
            {testimonial.role}
          </p>
        </div>
      </div>

      {/* Quote: Nunito Sans 400 18px #151515 */}
      <p className="font-normal text-[16px] lg:text-[18px] leading-[150%] text-[#151515]">
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
    /* Section: padding 64px 0, border-bottom 1px solid rgba(196,196,196,0.3) */
    <section
      className="w-full py-16 border-b border-[rgba(196,196,196,0.3)]"
      aria-labelledby="testimonials-heading"
    >
      {/* Inner: padding 0 64px, gap 40px */}
      <div className="max-w-[1440px] mx-auto px-5 lg:px-16 flex flex-col gap-10">

        {/* Heading: Nunito 700 40px 130% #151515 */}
        <h2
          id="testimonials-heading"
          className="font-[family-name:var(--font-nunito)] font-bold text-[28px] lg:text-[40px] leading-[130%] text-[#151515]"
        >
          Testimonials
        </h2>

        {/* Cards + arrows */}
        <div className="flex flex-col gap-6">

          {/* Desktop carousel: 3 visible + partial 4th, gap 23px */}
          <div className="hidden md:block overflow-hidden">
            <div
              className="carousel-track flex gap-[23px]"
              style={{ "--carousel-offset": `-${currentIndex * 445}px` } as React.CSSProperties}
            >
              {testimonials.map((t) => (
                <TestimonialCard key={t.id} testimonial={t} />
              ))}
            </div>
          </div>

          {/* Mobile: single card */}
          <div className="md:hidden">
            <TestimonialCard testimonial={testimonials[currentIndex]} />
          </div>

          {/* Arrows: both 32x32, bg rgba(240,67,84,0.1), border-radius 8px, icon #EF4353 — right aligned */}
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