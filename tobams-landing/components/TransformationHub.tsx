import Image from "next/image";
import { ArrowUpRight, Zap } from "lucide-react";

interface TransformationPill {
  id: number;
  label: string;
}

const transformationPills: TransformationPill[] = [
  { id: 1, label: "Strategic Career Guidance" },
  { id: 2, label: "Leadership Development" },
  { id: 3, label: "CV Development" },
  { id: 4, label: "Sustainability Leadership" },
  { id: 5, label: "Communication Skills" },
  { id: 6, label: "Business Model" },
];

export default function TransformationHub() {
  return (
    <section
      className="py-8 lg:py-12 px-5 lg:px-20 bg-white"
      aria-labelledby="transformation-hub-heading"
    >
      <div className="max-w-[1280px] mx-auto">
        {/* Pink card */}
        <div className="bg-[#FDEEF0] rounded-[16px] p-8 lg:p-12">

          {/* Top section — full width */}
          <p className="text-[#7B2D8B] italic font-semibold text-[13px] mb-1">
            Learning With Our CEO:
          </p>
          <h2
            id="transformation-hub-heading"
            className="text-[#1A1A1A] italic font-bold text-[22px] lg:text-[28px] leading-[1.2] mb-4"
          >
            Transformation Hub With Jite Newton
          </h2>
          <p className="text-[#3A3A3A] text-[14px] leading-[1.7] mb-6 lg:mb-8">
            Transformation Hub with Jite Newton is a flagship webinar series curated by the CEO,
            Dr. Jite Newton. Designed to elevate career trajectories and leadership capabilities,
            this exclusive event offers invaluable insights and strategies for personal and
            professional growth. Whether you&apos;re seeking to advance your career or enhance your
            leadership skills, the Transformation Hub provides a transformative learning experience
            to unlock your full potential and drive success in your endeavours.
          </p>

          {/* Lower section — two-col desktop, stacked mobile */}
          <div className="flex flex-col lg:grid lg:grid-cols-[45%_55%] gap-8 lg:gap-10 items-start">

            {/* Left — Image */}
            <div className="relative w-full aspect-[4/3] rounded-[12px] overflow-hidden">
              <Image
                src="/images/transformation-hub.jpg"
                alt="Dr. Jite Newton, CEO of Tobams Group, presenting at the Transformation Hub webinar series"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
            </div>

            {/* Right — Pill grid + CTA */}
            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-3">
                {transformationPills.map((pill) => (
                  <div
                    key={pill.id}
                    className="flex items-center gap-2 bg-white border border-[#E8E0EC] rounded-[8px] px-4 py-3"
                  >
                    <Zap
                      size={15}
                      className="text-[#7B2D8B] flex-shrink-0"
                      aria-hidden="true"
                    />
                    <span className="text-[#1A1A1A] font-medium text-[13px]">
                      {pill.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Learn More CTA */}
              <a
                href="#"
                className="inline-flex items-center gap-2 bg-[#5A1F6B] text-white text-[14px] font-semibold px-6 py-3 rounded-[6px] hover:bg-[#4A1058] transition-colors mt-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5A1F6B]"
              >
                Learn More
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
