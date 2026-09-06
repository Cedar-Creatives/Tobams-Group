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

/* Bolt icon: desktop 28x28 / mobile 24x24, fill #DDD0DA, stroke #571244 */
function PillBoltIcon({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="flex-shrink-0">
      <path d="M16 3L5 16H13L12 25L23 12H15L16 3Z" fill="#DDD0DA" stroke="#571244" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function TransformationHub() {
  return (
    <section className="w-full" aria-labelledby="transformation-hub-heading-mobile transformation-hub-heading-desktop">

      {/* ── MOBILE: padding 24px, gap 40px, bg #FFFFFF ── */}
      <div className="lg:hidden bg-white flex flex-col gap-10 p-6">

        {/* Card: bg rgba(239,67,83,0.2), radius 12px, padding 24px 16px, gap 64px */}
        <div className="w-full bg-[rgba(239,67,83,0.2)] rounded-[12px] px-4 py-6 flex flex-col gap-16">

          {/* Top heading group */}
          <div className="flex flex-col gap-5">
            {/* Eyebrow: Nunito Sans 600 14px #1671D9 */}
            <p className="font-semibold text-[14px] leading-[150%] text-[#1671D9]">
              Learning With Our CEO:
            </p>
            {/* H2: Nunito italic 600 20px 130% #571244 */}
            <h2
              id="transformation-hub-heading-mobile"
              className="font-[family-name:var(--font-nunito)] italic font-semibold text-[20px] leading-[130%] text-[#571244]"
            >
              Transformation Hub With Jite Newton
            </h2>
          </div>

          {/* Inner content */}
          <div className="flex flex-col gap-5">
            {/* Body: Nunito Sans 400 14px #151515 */}
            <p className="font-normal text-[14px] leading-[150%] text-[#151515]">
              Transformation Hub with Jite Newton is a flagship webinar series curated by the CEO, Dr. Jite Newton. Designed to elevate career trajectories and leadership capabilities, this exclusive event offers invaluable insights and strategies for personal and professional growth. Whether you&apos;re seeking to advance your career or enhance your leadership skills, the Transformation Hub provides a transformative learning experience to unlock your full potential and drive success in your endeavours.
            </p>

            {/* Image: 295x232, radius 8px */}
            <div className="relative w-full overflow-hidden rounded-[8px] aspect-[295/232]">
              <Image
                src="/images/transformation-hub.jpg"
                alt="Dr. Jite Newton presenting at the Transformation Hub webinar series"
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>

            {/* Pill container: bg rgba(255,255,255,0.3), radius 8px, padding 20px, gap 24px */}
            <div className="w-full bg-[rgba(255,255,255,0.3)] rounded-[8px] p-5 flex flex-col gap-3">
              {/* Pills: 255x56, bg #FFFFFF, radius 12px, padding 16px */}
              {pills.map((pill) => (
                <div key={pill.id} className="flex flex-row items-center gap-2.5 bg-white rounded-[12px] px-4 h-14">
                  <PillBoltIcon size={24} />
                  <span className="font-normal text-[14px] leading-[150%] text-[#151515]">
                    {pill.label}
                  </span>
                </div>
              ))}

              {/* Learn More: 153x45px, #571244, Nunito Sans 600 14px */}
              <a
                href="#"
                className="inline-flex flex-row justify-center items-center gap-2 bg-[#571244] rounded-[4px] text-white font-semibold text-[14px] leading-[150%] w-[153px] h-[45px] px-6 hover:bg-[#3d0c30] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#571244]"
              >
                Learn More
                <ArrowUpRight size={20} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── DESKTOP: py-10 lg:py-16 px-16 ── */}
      <div className="hidden lg:block py-10 lg:py-16 px-5 lg:px-16">
        <div className="max-w-[1440px] mx-auto w-full">
          <div className="w-full bg-[rgba(239,67,83,0.2)] rounded-[16px] p-8 lg:p-10 flex flex-col gap-6 lg:gap-8">
            {/* Top */}
            <div className="flex flex-col gap-2">
              <p className="font-[family-name:var(--font-nunito)] italic font-semibold text-[16px] lg:text-[20px] leading-[130%] text-[#1671D9]">
                Learning With Our CEO:
              </p>
              <h2
                id="transformation-hub-heading-desktop"
                className="font-[family-name:var(--font-nunito)] italic font-semibold text-[22px] lg:text-[32px] leading-[130%] text-[#571244]"
              >
                Transformation Hub With Jite Newton
              </h2>
            </div>
            <p className="font-normal text-[15px] lg:text-[18px] leading-[150%] text-[#151515]">
              Transformation Hub with Jite Newton is a flagship webinar series curated by the CEO, Dr. Jite Newton. Designed to elevate career trajectories and leadership capabilities, this exclusive event offers invaluable insights and strategies for personal and professional growth. Whether you&apos;re seeking to advance your career or enhance your leadership skills, the Transformation Hub provides a transformative learning experience to unlock your full potential and drive success in your endeavours.
            </p>
            {/* Lower two-col */}
            <div className="flex flex-col lg:flex-row items-start gap-6 lg:gap-8">
              <div className="relative w-full lg:w-[560px] lg:h-[340px] flex-shrink-0 rounded-[8px] overflow-hidden aspect-[560/340]">
                <Image src="/images/transformation-hub.jpg" alt="Dr. Jite Newton presenting at the Transformation Hub webinar series" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 560px" />
              </div>
              <div className="flex-1 min-w-0 bg-[rgba(255,255,255,0.3)] rounded-[8px] p-5 lg:p-8 flex flex-col gap-6 justify-between">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-6">
                  {pills.map((pill) => (
                    <div key={pill.id} className="flex flex-row items-center gap-2.5 bg-white rounded-[12px] px-4 py-4 h-[60px]">
                      <PillBoltIcon size={28} />
                      <span className="font-normal text-[14px] lg:text-[18px] leading-[150%] text-[#151515]">{pill.label}</span>
                    </div>
                  ))}
                </div>
                <a href="#" className="inline-flex flex-row justify-center items-center w-[173px] h-[48px] px-6 gap-2 bg-[#571244] rounded-[4px] text-white font-semibold text-[18px] leading-[150%] hover:bg-[#3d0c30] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#571244]">
                  Learn More
                  <ArrowUpRight size={24} aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}