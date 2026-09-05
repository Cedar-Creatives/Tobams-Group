import Image from "next/image";
import { Zap } from "lucide-react";

interface FeaturePill {
  id: number;
  label: string;
}

const featurePills: FeaturePill[] = [
  { id: 1, label: "Enhanced Leadership Skills" },
  { id: 2, label: "Improved Employee Engagement" },
  { id: 3, label: "Stronger Organisational Culture" },
  { id: 4, label: "Sustainable Growth" },
];

export default function ManagementDevSection() {
  return (
    <section
      className="py-8 lg:py-12 px-5 lg:px-20"
      aria-labelledby="mdp-heading"
    >
      <div className="max-w-[1280px] mx-auto">
        {/* Dark aubergine card */}
        <div className="bg-[#3D1040] rounded-[16px] p-8 lg:p-12">
          <div className="flex flex-col lg:grid lg:grid-cols-[45%_55%] gap-8 lg:gap-12 items-start">

            {/* H2 — mobile only (decorative, screen readers get the real one below) */}
            <h2
              className="lg:hidden text-white font-bold text-[20px] leading-[1.2]"
              aria-hidden="true"
            >
              Management Development Program
            </h2>

            {/* Left column — Image (second on mobile via DOM order, left col on desktop) */}
            <div className="relative w-full aspect-[4/3] rounded-[12px] overflow-hidden flex-shrink-0">
              <Image
                src="/images/management-dev.jpg"
                alt="Three business professionals in a management development discussion"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
            </div>

            {/* Right column — Content (third on mobile, right col on desktop) */}
            <div className="w-full">
              {/* H2 — real heading: visible on desktop, also present (hidden) for screen readers on mobile */}
              <h2
                id="mdp-heading"
                className="hidden lg:block text-white font-bold text-[32px] leading-[1.2] mb-4"
              >
                Management Development Program
              </h2>

              <p className="text-[14px] leading-[1.7] mb-3 text-[rgba(255,255,255,0.80)]">
                Tobams Group&apos;s Management Development Program (MDP) is a
                transformative initiative meticulously crafted to nurture and
                elevate the skills of current and aspiring managers within your
                organisation.
              </p>
              <p className="text-[14px] leading-[1.7] mb-6 text-[rgba(255,255,255,0.80)]">
                Our MDP is not just a training program; it&apos;s a strategic
                investment in your organisation&apos;s future. By empowering your
                managers with the latest management techniques, leadership
                strategies, and decision-making tools, you&apos;ll position your
                company for sustainable growth and success.
              </p>

              {/* Feature pill list */}
              <ul className="flex flex-col gap-2">
                {featurePills.map((pill) => (
                  <li
                    key={pill.id}
                    className="flex items-center gap-2 bg-[#5A2060] rounded-[8px] px-4 py-3 w-full"
                  >
                    <Zap
                      size={16}
                      className="text-[#E8415A] flex-shrink-0"
                      aria-hidden="true"
                      fill="currentColor"
                    />
                    <span className="text-white text-[14px] font-semibold">
                      {pill.label}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
