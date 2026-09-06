import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const courseItems = [
  "Business Analysis",
  "Design Thinking",
  "Effective Communication",
  "Leadership Development",
  "Career Development",
  "Mentoring and Coaching Leadership",
];

export default function LmsSection() {
  return (
    <section
      id="about"
      className="w-full bg-[rgba(87,18,68,0.1)] pt-10"
      aria-labelledby="lms-heading-mobile lms-heading-desktop"
    >
      {/* ── MOBILE layout (flex-col, padding 24px, gap 24px) ── */}
      <div className="lg:hidden flex flex-col gap-6 p-6">
        {/* H2 mobile: Nunito 600 20px 0.03em #571244 */}
        <h2
          id="lms-heading-mobile"
          className="font-[family-name:var(--font-nunito)] font-semibold text-[20px] leading-[150%] tracking-[0.03em] text-[#571244]"
        >
          Learning Management System
        </h2>

        {/* Circular image mobile: 327x327 */}
        <div className="relative w-[327px] h-[327px] rounded-full overflow-hidden self-center flex-shrink-0">
          <Image
            src="/images/lms-team.jpg"
            alt="Two Tobams Group professionals — a man in a suit and a woman smiling"
            fill
            className="object-cover"
            sizes="327px"
          />
        </div>

        {/* Info card mobile */}
        <div className="w-full bg-[rgba(87,18,68,0.1)] rounded-[8px] p-6 flex flex-col gap-6">
          {/* Body: Nunito Sans 400 14px #151515 */}
          <p className="font-normal text-[14px] leading-[150%] text-[#151515]">
            TG Academy is a hub of knowledge and skill-building resources designed to empower tech talents on their learning journey. From technical courses covering the latest programming languages and development frameworks to soft skills training in leadership, effective communication and project management, TG Academy offers a wide range of courses to cater to diverse learning needs. With accessible and interactive learning materials, individuals can enhance their skills and stay ahead in today&apos;s competitive tech landscape.
          </p>
          {/* Courses */}
          <div className="flex flex-col gap-3">
            <p className="font-bold text-[16px] leading-[150%] text-[#571244]">
              Some of our courses include:
            </p>
            <ul className="flex flex-col gap-3">
              {courseItems.map((course) => (
                <li key={course} className="flex items-center gap-1.5 font-normal text-[14px] leading-[150%] text-[#151515]">
                  <span aria-hidden="true">•</span>
                  {course}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Learn More button mobile: 153x48px */}
        <a
          href="#"
          className="inline-flex flex-row justify-center items-center gap-2 bg-[#571244] rounded-[4px] text-white font-semibold text-[14px] leading-[150%] w-[153px] h-[48px] px-6 hover:bg-[#3d0c30] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#571244]"
        >
          Learn More
          <ArrowUpRight size={20} aria-hidden="true" />
        </a>
      </div>

      {/* ── DESKTOP layout (flex-row, padding 48px 64px, gap 80px) ── */}
      <div className="hidden lg:flex flex-row items-center gap-20 px-16 py-12 max-w-[1440px] mx-auto w-full">

        {/* Circular image desktop: 480x490 */}
        <div className="relative w-[480px] h-[490px] rounded-full overflow-hidden flex-shrink-0">
          <Image
            src="/images/lms-team.jpg"
            alt="Two Tobams Group professionals — a man in a suit and a woman smiling"
            fill
            className="object-cover"
            sizes="480px"
          />
        </div>

        {/* Right content */}
        <div className="flex flex-col gap-6 flex-1 min-w-0">
          {/* H2 desktop: Nunito 600 40px */}
          <h2
            id="lms-heading-desktop"
            className="font-[family-name:var(--font-nunito)] font-semibold text-[40px] leading-[150%] tracking-[0.03em] text-[#571244]"
          >
            Learning Management System
          </h2>

          {/* Info card */}
          <div className="w-full bg-[rgba(87,18,68,0.1)] rounded-[8px] p-6 flex flex-col gap-5">
            <p className="font-normal text-[18px] leading-[150%] text-[#151515]">
              TG Academy is a hub of knowledge and skill-building resources designed to empower tech talents on their learning journey. From technical courses covering the latest programming languages and development frameworks to soft skills training in leadership, effective communication and project management, TG Academy offers a wide range of courses to cater to diverse learning needs. With accessible and interactive learning materials, individuals can enhance their skills and stay ahead in today&apos;s competitive tech landscape.
            </p>
            <div className="flex flex-col gap-3">
              <p className="font-bold text-[18px] leading-[150%] text-[#571244]">
                Some of our courses include:
              </p>
              <ul className="grid grid-cols-3 gap-x-6 gap-y-2">
                {courseItems.map((course) => (
                  <li key={course} className="flex items-center gap-1.5 font-normal text-[16px] leading-[150%] text-[#151515]">
                    <span aria-hidden="true">•</span>
                    {course}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Learn More button desktop: 173x48px */}
          <a
            href="#"
            className="inline-flex flex-row justify-center items-center gap-2 bg-[#571244] rounded-[4px] text-white font-semibold text-[18px] leading-[150%] w-[173px] h-[48px] px-6 hover:bg-[#3d0c30] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#571244]"
          >
            Learn More
            <ArrowUpRight size={24} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}