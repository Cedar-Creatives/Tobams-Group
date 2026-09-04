import Image from "next/image";
import { ArrowUpRight, Zap } from "lucide-react";

const pills = [
  "Strategic Career Guidance",
  "Leadership Development",
  "CV Development",
  "Sustainability Leadership",
  "Communication Skills",
  "Business Model",
];

export default function TransformationHub() {
  return (
    <section
      className="py-8 px-5 lg:px-20 bg-white"
      aria-labelledby="hub-heading"
    >
      <div className="max-w-[1280px] mx-auto">
        {/* Pink card */}
        <div className="bg-[#FDEEF0] rounded-[16px] p-6 md:p-10 lg:p-12">
          {/* Top: eyebrow + heading + body */}
          <p className="text-[#7B2D8B] text-[13px] font-semibold italic mb-1">
            Learning With Our CEO:
          </p>
          <h2
            id="hub-heading"
            className="text-[22px] md:text-[26px] lg:text-[30px] font-bold text-[#1A1A1A] italic leading-[1.25] mb-4"
          >
            Transformation Hub With Jite Newton
          </h2>
          <p className="text-[14px] text-[#3A3A3A] leading-[1.7] mb-6 max-w-full">
            The Transformation Hub is a unique learning experience led by our CEO,
            Jite Newton. This exclusive program provides personalised guidance and
            strategic insights to help you navigate your career transformation and
            achieve your professional goals.
          </p>

          {/* Two-column: Image left, Pill grid right */}
          <div className="flex flex-col md:flex-row gap-6 lg:gap-10 items-start">
            {/* Image */}
            <div className="w-full md:w-[45%]">
              <div className="relative w-full aspect-[4/3] rounded-[12px] overflow-hidden">
                <Image
                  src="/images/transformation-hub.jpg"
                  alt="Jite Newton, CEO of Tobams Group, leading a transformation workshop"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 45vw"
                />
              </div>
            </div>

            {/* Pill grid */}
            <div className="w-full md:w-[55%]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                {pills.map((pill) => (
                  <div
                    key={pill}
                    className="flex items-center gap-2.5 bg-white border border-[#E8E0EC] rounded-[8px] px-4 py-3"
                  >
                    <Zap
                      size={14}
                      className="text-[#7B2D8B] flex-shrink-0"
                      aria-hidden="true"
                      fill="currentColor"
                    />
                    <span className="text-[#1A1A1A] text-[13px] font-medium">
                      {pill}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <a
                href="#"
                className="inline-flex items-center gap-2 bg-[#5A1F6B] text-white text-[14px] font-semibold px-6 py-3 rounded-[6px] hover:bg-[#4a1858] transition-colors mt-5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5A1F6B]"
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
