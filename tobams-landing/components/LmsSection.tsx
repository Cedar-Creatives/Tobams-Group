import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const courseItems = [
  "Business Analysis",
  "Design Thinking",
  "Effective Communication",
  "Entrepreneurship",
  "Career Development",
  "Business Model",
];

export default function LmsSection() {
  return (
    <section
      id="about"
      className="w-full py-10"
      aria-labelledby="lms-heading"
    >
      {/* Inner frame: padding 48px 64px, gap 80px, bg rgba(87,18,68,0.1) */}
      <div className="w-full bg-[rgba(87,18,68,0.1)] flex flex-col lg:flex-row items-center px-5 xl:px-16 py-12 gap-10 lg:gap-12 xl:gap-20">

        {/* Left — Circular image: ~557x568, border-radius ~358px */}
        <div
          className="relative w-[240px] h-[240px] md:w-[360px] md:h-[360px] lg:w-[480px] lg:h-[490px] overflow-hidden flex-shrink-0"
          style={{ borderRadius: "357.566px" }}
        >
          <Image
            src="/images/lms-team.jpg"
            alt="Two Tobams Group professionals — a man in a suit and a woman smiling"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 280px, 557px"
          />
        </div>

        {/* Right — Content: gap 56px between heading and card */}
        <div className="flex flex-col items-start gap-14 flex-1 w-full">

          {/* H2: Nunito, 600, 40px, 150%, letter-spacing 0.03em, #571244 */}
          <h2
            id="lms-heading"
            className="font-[family-name:var(--font-nunito)] font-semibold text-[28px] lg:text-[40px] leading-[150%] tracking-[0.03em] text-[#571244]"
          >
            Learning Management System
          </h2>

          {/* Card: bg rgba(87,18,68,0.1), border-radius 8px, padding 24px, gap 20px */}
          <div className="w-full bg-[rgba(87,18,68,0.1)] rounded-[8px] p-6 flex flex-col gap-5">

            {/* Body text: Nunito Sans, 400, 18px, 150%, #151515 */}
            <p className="font-normal text-[16px] lg:text-[18px] leading-[150%] text-[#151515]">
              TG Academy is a hub of knowledge and skill-building resources designed to empower tech talents on their learning journey. From technical courses covering the latest programming languages and development frameworks to soft skills training in leadership, effective communication and project management, TG Academy offers a wide range of courses to cater to diverse learning needs. With accessible and interactive learning materials, individuals can enhance their skills and stay ahead in today&apos;s competitive tech landscape.
            </p>

            {/* Courses section: gap 12px */}
            <div className="flex flex-col gap-3">

              {/* Label: Nunito Sans, 700, 18px, #571244 */}
              <p className="font-bold text-[16px] lg:text-[18px] leading-[150%] text-[#571244]">
                Some of our courses include:
              </p>

              {/* Course list: flex-wrap, gap 12px, 16px/400/#151515 */}
              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-2">
                {courseItems.map((course) => (
                  <li
                    key={course}
                    className="flex items-center gap-1.5 text-[14px] lg:text-[16px] font-normal leading-[150%] text-[#151515]"
                  >
                    <span aria-hidden="true" className="text-[#151515]">•</span>
                    {course}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Learn More button: 173x48px, padding 10.5px 24px, bg #571244, radius 4px */}
          <a
            href="#"
            className="inline-flex flex-row justify-center items-center w-[173px] h-[48px] px-6 gap-2 bg-[#571244] rounded-[4px] text-white font-semibold text-[18px] leading-[150%] hover:bg-[#3d0c30] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#571244]"
          >
            Learn More
            <ArrowUpRight size={24} aria-hidden="true" />
          </a>

        </div>
      </div>
    </section>
  );
}