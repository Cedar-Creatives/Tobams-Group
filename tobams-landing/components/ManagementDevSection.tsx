import Image from "next/image";

const featurePills = [
  { id: 1, label: "Enhanced Leadership Skills" },
  { id: 2, label: "Improved Employee Engagement" },
  { id: 3, label: "Stronger Organisational Culture" },
  { id: 4, label: "Sustainable Growth" },
];

/* White bolt icon — 32x32px, white fill per Figma */
function WhiteBoltIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="flex-shrink-0"
    >
      <path
        d="M18 4L6 18H15L14 28L26 14H17L18 4Z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

export default function ManagementDevSection() {
  return (
    /* Section outer: padding 64px, gap 40px */
    <section
      className="w-full flex flex-col items-center py-10 lg:py-16 px-5 lg:px-16 gap-10"
      aria-labelledby="mdp-heading"
    >
      <div className="max-w-[1440px] w-full flex flex-col items-center gap-10">
        {/* Card: bg #2C0922, border-radius 20px, padding 40px */}
        <div className="w-full bg-[#2C0922] rounded-[20px] p-6 lg:p-10">

          {/* Inner row: gap 48px */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-12">

            {/* Left — Image: border-radius 8px 8px 0 8px */}
            <div
              className="relative w-full lg:flex-1 lg:min-w-0 overflow-hidden flex-shrink-0"
              style={{ borderRadius: "8px 8px 0px 8px", aspectRatio: "592/639" }}
            >
              <Image
                src="/images/management-dev.jpg"
                alt="Three professionals collaborating on a management development session"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 592px"
              />
            </div>

            {/* Right — Content: gap 32px */}
            <div className="w-full lg:flex-1 lg:min-w-0 flex flex-col gap-8">

              {/* H2: Nunito, 600, 40px, 150%, letter-spacing 0.03em, #FFFFFF */}
              <h2
                id="mdp-heading"
                className="font-[family-name:var(--font-nunito)] font-semibold text-[26px] lg:text-[clamp(26px,2.8vw,40px)] leading-[150%] tracking-[0.03em] text-white"
              >
                Management Development Program
              </h2>

              {/* Body: Nunito Sans, 400, 18px, #FFFFFF */}
              <p className="font-normal text-[15px] lg:text-[18px] leading-[150%] text-white">
                Tobams Group offers a comprehensive Management Development Program designed to equip corporate organisations with the high-performing leaders they need to thrive. Our program includes workshops, seminars, coaching sessions, online courses, and experiential learning opportunities designed to improve leadership, strategic thinking, communication, and other essential managerial competencies for corporate organisations.
              </p>

              {/* Pill list: padding 8px 16px, gap 25px */}
              <ul className="flex flex-col gap-[25px] px-4 py-2">
                {featurePills.map((pill) => (
                  <li
                    key={pill.id}
                    className="flex flex-row items-center gap-2 bg-[#8F6182] rounded-[8px] px-2 py-1 w-full h-10"
                  >
                    <WhiteBoltIcon />
                    <span className="font-semibold text-[15px] lg:text-[18px] leading-[150%] text-white flex-1">
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