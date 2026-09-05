import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const pills = [
  { id: 1, label: "Strategic Career Guidance" },
  { id: 2, label: "Leadership Development" },
  { id: 3, label: "CV Development" },
  { id: 4, label: "Sustainability Leadership" },
  { id: 5, label: "Communication Skills" },
  { id: 6, label: "Business Model" },
];

/* Bolt icon: 28x28, fill #DDD0DA, border 2px solid #571244 */
function PillBoltIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="flex-shrink-0"
    >
      <path
        d="M16 3L5 16H13L12 25L23 12H15L16 3Z"
        fill="#DDD0DA"
        stroke="#571244"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function TransformationHub() {
  return (
    <section
      className="w-full py-10 lg:py-16 px-5 lg:px-16"
      aria-labelledby="transformation-hub-heading"
    >
      <div className="max-w-[1440px] mx-auto w-full">
        {/* Card: bg rgba(239,67,83,0.2), border-radius 16px, padding 40px, gap 64px */}
        <div className="w-full bg-[rgba(239,67,83,0.2)] rounded-[16px] p-6 lg:p-10 flex flex-col gap-6 lg:gap-8">

          {/* Top — full width heading section: gap 24px */}
          <div className="flex flex-col gap-2">

            {/* Eyebrow: Nunito italic 600 20px 130% #1671D9 (blue) */}
            <p className="font-[family-name:var(--font-nunito)] italic font-semibold text-[16px] lg:text-[20px] leading-[130%] text-[#1671D9]">
              Learning With Our CEO:
            </p>

            {/* H2: Nunito italic 600 32px 130% #571244 */}
            <h2
              id="transformation-hub-heading"
              className="font-[family-name:var(--font-nunito)] italic font-semibold text-[22px] lg:text-[32px] leading-[130%] text-[#571244]"
            >
              Transformation Hub With Jite Newton
            </h2>
          </div>

          {/* Body: Nunito Sans 400 18px 150% #151515 */}
          <p className="font-normal text-[15px] lg:text-[18px] leading-[150%] text-[#151515]">
            Transformation Hub with Jite Newton is a flagship webinar series curated by the CEO, Dr. Jite Newton. Designed to elevate career trajectories and leadership capabilities, this exclusive event offers invaluable insights and strategies for personal and professional growth. Whether you&apos;re seeking to advance your career or enhance your leadership skills, the Transformation Hub provides a transformative learning experience to unlock your full potential and drive success in your endeavours.
          </p>

          {/* Lower section: image left + pill grid right, gap 32px */}
          <div className="flex flex-col lg:flex-row items-start gap-6 lg:gap-8">

            {/* Image: 560x340, border-radius 8px */}
            <div className="relative w-full lg:w-[560px] lg:h-[340px] flex-shrink-0 rounded-[8px] overflow-hidden aspect-[560/340]">
              <Image
                src="/images/transformation-hub.jpg"
                alt="Dr. Jite Newton presenting at the Transformation Hub webinar series"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 560px"
              />
            </div>

            {/* Right: bg rgba(255,255,255,0.3), border-radius 8px, padding 32px 20px, gap 24px */}
            <div className="flex-1 min-w-0 bg-[rgba(255,255,255,0.3)] rounded-[8px] p-5 lg:p-8 flex flex-col gap-6 justify-between h-full">

              {/* Pill grid: 2 cols, gap-x 24px, gap-y 12px */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-6">
                {pills.map((pill) => (
                  <div
                    key={pill.id}
                    className="flex flex-row items-center gap-2.5 bg-white rounded-[12px] px-4 py-4 h-[60px]"
                  >
                    <PillBoltIcon />
                    <span className="font-normal text-[14px] lg:text-[18px] leading-[150%] text-[#151515]">
                      {pill.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Learn More: 173x48px, #571244, border-radius 4px */}
              <a
                href="#"
                className="inline-flex flex-row justify-center items-center w-[173px] h-[48px] px-6 gap-2 bg-[#571244] rounded-[4px] text-white font-semibold text-[18px] leading-[150%] hover:bg-[#3d0c30] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#571244]"
              >
                Learn More
                <ArrowUpRight size={24} aria-hidden="true" />
              </a>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}