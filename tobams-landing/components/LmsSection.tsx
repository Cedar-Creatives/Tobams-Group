import Image from "next/image";
import { ArrowUpRight, Zap } from "lucide-react";

const courses = [
  "Project Management",
  "Data Analysis",
  "UI/UX Design",
  "Software Engineering",
  "Digital Marketing",
  "Cybersecurity",
  "Cloud Computing",
  "Business Analysis",
  "Product Management",
];

export default function LmsSection() {
  return (
    <section
      id="about"
      className="bg-[#F5EEF8] py-16 lg:py-20"
      aria-labelledby="lms-heading"
    >
      <div className="max-w-[1280px] mx-auto px-5 lg:px-20">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-16">
          {/* Image — on mobile appears between heading and content */}
          <div className="w-full md:w-[45%] flex justify-center order-2 md:order-1">
            <div className="relative w-[260px] h-[260px] md:w-[340px] md:h-[340px] lg:w-[420px] lg:h-[420px] rounded-full overflow-hidden flex-shrink-0">
              <Image
                src="/images/lms-team.jpg"
                alt="Tobams Group team members collaborating on learning solutions"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 260px, (max-width: 1280px) 340px, 420px"
              />
            </div>
          </div>

          {/* Content */}
          <div className="w-full md:w-[55%] order-1 md:order-2">
            <h2
              id="lms-heading"
              className="text-[24px] md:text-[32px] lg:text-[38px] font-bold text-[#5A1F6B] leading-[1.2] mb-5"
            >
              Learning Management System
            </h2>

            {/* Info card */}
            <div className="bg-[#EDE0F0] border border-[#D8C4E0] rounded-[10px] px-5 py-4 mb-5 text-[14px] text-[#3A3A3A] leading-[1.7]">
              Our Learning Management System (LMS) provides a comprehensive platform
              for accessing world-class training programs. Designed to empower
              professionals at every stage of their career journey with industry-relevant skills.
            </div>

            {/* Course list */}
            <p className="text-[14px] font-bold text-[#5A1F6B] mb-3">
              Some of our courses include:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-y-1.5 gap-x-4 mb-7">
              {courses.map((course) => (
                <li
                  key={course}
                  className="flex items-center gap-2 text-[14px] text-[#3A3A3A]"
                >
                  <span className="text-[#3A3A3A]" aria-hidden="true">•</span>
                  {course}
                </li>
              ))}
            </ul>

            {/* CTA */}
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-[#5A1F6B] text-white text-[14px] font-semibold px-6 py-3 rounded-[6px] hover:bg-[#4a1858] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5A1F6B]"
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
