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
      className="bg-[#F5EEF8] py-16 lg:py-20"
      aria-labelledby="lms-heading"
    >
      <div className="max-w-[1280px] mx-auto px-5 lg:px-20">
        <div className="flex flex-col lg:grid lg:grid-cols-[45%_55%] gap-12 xl:gap-16 items-center">

          {/* Left column — Circular image (order-2 on mobile so it appears below H2) */}
          <div className="relative w-[280px] h-[280px] lg:w-[420px] lg:h-[420px] rounded-full overflow-hidden mx-auto order-2 lg:order-none flex-shrink-0">
            <Image
              src="/images/lms-team.jpg"
              alt="Two Tobams Group professionals — a man in a suit and a woman smiling"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 280px, 420px"
            />
          </div>

          {/* Right column — Content (order-1 on mobile so H2 comes first) */}
          <div className="order-1 lg:order-none w-full">
            <h2
              id="lms-heading"
              className="text-[#5A1F6B] font-bold text-[24px] lg:text-[38px] leading-[1.2] mb-4"
            >
              Learning Management System
            </h2>

            {/* Info card */}
            <div className="bg-[#EDE0F0] border border-[#D8C4E0] rounded-[10px] p-5 mb-5 text-[14px] text-[#3A3A3A] leading-[1.7]">
              TG Academy is a hub of knowledge and skill-building resources designed
              to empower tech talents on their learning journey. From technical courses
              covering the latest programming languages and development frameworks to
              soft skills training in leadership, effective communication and project
              management, TG Academy offers a wide range of courses to cater to diverse
              learning needs. With accessible and interactive learning materials,
              individuals can enhance their skills and stay ahead in today&apos;s competitive
              tech landscape.
            </div>

            {/* Bold label */}
            <p className="text-[#5A1F6B] font-bold text-[14px] mb-3">
              Some of our courses include:
            </p>

            {/* Course list */}
            <ul className="grid grid-cols-1 lg:grid-cols-3 gap-y-1.5 gap-x-4 mb-6">
              {courseItems.map((course) => (
                <li
                  key={course}
                  className="flex items-center gap-1.5 text-[14px] text-[#3A3A3A]"
                >
                  <span aria-hidden="true">•</span>
                  {course}
                </li>
              ))}
            </ul>

            {/* Learn More CTA */}
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-[#5A1F6B] text-white text-[14px] font-semibold px-6 py-3 rounded-[6px] hover:bg-[#4A1058] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5A1F6B]"
            >
              Learn More
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
