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
    avatarAlt: "Portrait of Aisha Yusuf",
  },
  {
    id: 2,
    name: "John Davies",
    role: "Marketing Manager, E-Commerce Emporium",
    quote:
      "Tobams Group's Digital Marketing strategies gave our brand the boost it needed. Simple yet powerful techniques that delivered tangible results. A pleasure to collaborate with!",
    avatar: "/images/testimonial-2.webp.png",
    avatarAlt: "Portrait of John Davies",
  },
  {
    id: 3,
    name: "Chinonso Nwankwo",
    role: "HR Director, FutureTech Solutions",
    quote:
      "Tobams Group has been instrumental in our talent acquisition journey. Their Tech Talent Solution service consistently connects us with the right professionals. Reliable and straightforward.",
    avatar: "/images/testimonial-3.webp.png",
    avatarAlt: "Portrait of Chinonso Nwankwo",
  },
  {
    id: 4,
    name: "Sarah Johnson",
    role: "CEO of Tech Innovations Inc.",
    quote:
      "Tobams Group is a true partner in our journey to digital excellence. Their creativity and technical expertise have propelled our projects to new heights. Their work is top-notch, and the results speak for themselves. I can't recommend them enough!",
    avatar: "/images/testimonial-4.webp.jpg",
    avatarAlt: "Portrait of Sarah Johnson",
  },
];

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <article
      className="bg-white border border-[#E8E0EC] rounded-[12px] p-6 border-l-[4px] border-l-[#E8415A] shadow-[0_2px_8px_rgba(0,0,0,0.06)] flex-shrink-0"
      style={{ width: "clamp(260px, 300px, 320px)" }}
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
          <p className="text-[14px] font-semibold text-[#1A1A1A] leading-tight">
            {testimonial.name}
          </p>
          <p className="text-[12px] text-[#777777]">{testimonial.role}</p>
        </div>
      </div>
      <p className="text-[13px] text-[#3A3A3A] leading-[1.6]">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
    </article>
  );
}

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  };

  const next = () => {
    setCurrentIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1));
  };

  return (
    <section
      className="bg-white py-16 lg:py-20"
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-[1280px] mx-auto px-5 lg:px-20">
        <h2
          id="testimonials-heading"
          className="text-[28px] md:text-[32px] lg:text-[38px] font-bold text-[#1A1A1A] text-center mb-10"
        >
          Testimonials
        </h2>

        {/* Desktop carousel — 3+ cards visible */}
        <div className="hidden md:block overflow-hidden">
          <div
            className="flex gap-6 transition-transform duration-300"
            style={{
              transform: `translateX(calc(-${currentIndex * (300 + 24)}px))`,
            }}
          >
            {testimonials.map((t) => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
          </div>
        </div>

        {/* Mobile — 1 card visible */}
        <div className="md:hidden">
          <TestimonialCard testimonial={testimonials[currentIndex]} />
        </div>

        {/* Navigation arrows */}
        <div className="flex justify-end gap-2 mt-6">
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="
              md:w-9 md:h-9 md:rounded-full md:border md:border-[#E8415A] md:bg-white
              w-10 h-10 rounded-[8px] bg-[rgba(232,65,90,0.10)]
              flex items-center justify-center transition-opacity hover:opacity-80
              focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E8415A]
            "
          >
            <ChevronLeft size={16} className="text-[#E8415A]" aria-hidden="true" />
          </button>
          <button
            onClick={next}
            aria-label="Next testimonial"
            className="
              md:w-9 md:h-9 md:rounded-full md:border md:border-[#E8415A] md:bg-white
              w-10 h-10 rounded-[8px] bg-[rgba(232,65,90,0.10)]
              flex items-center justify-center transition-opacity hover:opacity-80
              focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E8415A]
            "
          >
            <ChevronRight size={16} className="text-[#E8415A]" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}
