import Image from "next/image";
import { Zap } from "lucide-react";

const pillItems = [
  "Enhanced Leadership Skills",
  "Improved Employee Engagement",
  "Stronger Organisational Culture",
  "Sustainable Growth",
];

export default function ManagementDevSection() {
  return (
    <section
      className="py-8 px-5 lg:px-20 bg-white"
      aria-labelledby="mdp-heading"
    >
      <div className="max-w-[1280px] mx-auto">
        {/* Dark card */}
        <div className="bg-[#3D1040] rounded-[16px] p-6 md:p-10 lg:p-12">
          <div className="flex flex-col md:flex-row gap-8 lg:gap-12 items-start">
            {/* Content — shown first on mobile */}
            <div className="w-full md:w-[55%] order-1">
              <h2
                id="mdp-heading"
                className="text-[20px] md:text-[28px] lg:text-[34px] font-bold text-white leading-[1.2] mb-5"
              >
                Management Development Program
              </h2>

              {/* Image — between heading and body on mobile */}
              <div className="relative w-full aspect-[4/3] rounded-[12px] overflow-hidden mb-5 md:hidden">
                <Image
                  src="/images/management-dev.jpg"
                  alt="Management development training with professionals in a meeting"
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
              </div>

              <p
                className="text-[14px] leading-[1.7] mb-3"
                style={{ color: "rgba(255,255,255,0.80)" }}
              >
                Our Management Development Program is designed to equip leaders with
                the skills, strategies, and insights needed to drive organisational
                excellence and inspire high-performance teams.
              </p>
              <p
                className="text-[14px] leading-[1.7] mb-6"
                style={{ color: "rgba(255,255,255,0.80)" }}
              >
                Through expert-led workshops, real-world case studies, and personalised
                coaching, participants will develop the competencies needed to navigate
                complex business challenges.
              </p>

              {/* Feature pill list */}
              <ul className="flex flex-col gap-2">
                {pillItems.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 bg-[#5A2060] rounded-[8px] px-4 py-3"
                  >
                    <Zap
                      size={15}
                      className="text-[#E8415A] flex-shrink-0"
                      aria-hidden="true"
                      fill="currentColor"
                    />
                    <span className="text-white text-[14px] font-semibold">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Image — desktop only (right column) */}
            <div className="hidden md:block w-full md:w-[45%] order-2">
              <div className="relative w-full aspect-[4/3] rounded-[12px] overflow-hidden">
                <Image
                  src="/images/management-dev.jpg"
                  alt="Management development training with professionals in a meeting"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1280px) 45vw, 576px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
