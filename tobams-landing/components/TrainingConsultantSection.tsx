import { ArrowUpRight, ChevronRight } from "lucide-react";

const gridItems = [
  {
    heading: "Expert-Led Learning",
    body: "Gain insight from seasoned professionals with deep domain expertise and real-world experience.",
  },
  {
    heading: "Interactive Workshops",
    body: "Engage in hands-on workshops that reinforce learning through practical application and collaboration.",
  },
  {
    heading: "Comprehensive Curriculum",
    body: "Access a robust curriculum covering everything you need to excel as a certified consultant and trainer.",
  },
  {
    heading: "Global Recognition",
    body: "You will attain a globally recognized certification that opens doors to opportunities worldwide.",
  },
];

export default function TrainingConsultantSection() {
  return (
    <section
      className="bg-[#F0E8F5] py-16 lg:py-20"
      aria-labelledby="ttc-heading"
    >
      <div className="max-w-[1280px] mx-auto px-5 lg:px-20">
        <h2
          id="ttc-heading"
          className="text-[22px] md:text-[28px] lg:text-[34px] font-bold text-[#1A1A1A] mb-2 leading-[1.25]"
        >
          Training The Consultant
        </h2>
        <p className="text-[14px] font-semibold text-[#7B2D8B] mb-4">
          Maximise Your Potential as a Certified Trainer:
        </p>
        <p className="text-[14px] text-[#3A3A3A] leading-[1.7] mb-6 max-w-full">
          Our Training The Consultant program is specifically designed for professionals
          who want to become certified trainers and consultants. Gain the expertise,
          credentials, and confidence to deliver impactful training programs and drive
          meaningful change in organisations worldwide.
        </p>

        {/* Feature grid card */}
        <div className="bg-[#5A1F6B] rounded-[12px] p-7 lg:p-8 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-x-12 lg:gap-y-6">
            {gridItems.map((item) => (
              <div key={item.heading}>
                <h3 className="text-white text-[14px] font-bold mb-1.5">
                  {item.heading}
                </h3>
                <p
                  className="text-[13px] leading-[1.6]"
                  style={{ color: "rgba(255,255,255,0.80)" }}
                >
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA button */}
        <a
          href="#"
          className="inline-flex items-center gap-2 bg-[#5A1F6B] text-white text-[14px] font-semibold px-6 py-3 rounded-[6px] hover:bg-[#4a1858] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5A1F6B]"
        >
          Learn More
          {/* diagonal arrow on desktop, chevron on mobile */}
          <ArrowUpRight size={16} aria-hidden="true" className="hidden md:inline" />
          <ChevronRight size={16} aria-hidden="true" className="inline md:hidden" />
        </a>
      </div>
    </section>
  );
}
