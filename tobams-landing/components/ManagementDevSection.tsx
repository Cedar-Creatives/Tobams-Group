import Image from "next/image";

const featurePills = [
  { id: 1, label: "Enhanced Leadership Skills" },
  { id: 2, label: "Improved Employee Engagement" },
  { id: 3, label: "Stronger Organisational Culture" },
  { id: 4, label: "Sustainable Growth" },
];

function WhiteBoltIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="flex-shrink-0">
      <path d="M18 4L6 18H15L14 28L26 14H17L18 4Z" fill="#FFFFFF" />
    </svg>
  );
}

export default function ManagementDevSection() {
  return (
    <section className="w-full flex flex-col items-center py-8 lg:py-16 px-5 lg:px-16 gap-10" aria-labelledby="mdp-heading">
      <div className="max-w-[1440px] w-full">

        {/* ── MOBILE card: padding 16px 20px, radius 20px, bg #2C0922 ── */}
        <div className="lg:hidden w-full bg-[#2C0922] rounded-[20px] px-5 py-4">
          <div className="flex flex-col gap-5">

            {/* H2 mobile: Nunito 600 16px 0.03em #FFFFFF */}
            <h2
              id="mdp-heading"
              className="font-[family-name:var(--font-nunito)] font-semibold text-[16px] leading-[150%] tracking-[0.03em] text-white"
            >
              Management Development Program
            </h2>

            {/* Image mobile: 287x232, radius 8px 8px 0 8px */}
            <div
              className="relative w-full overflow-hidden flex-shrink-0"
              style={{ borderRadius: "8px 8px 0px 8px", aspectRatio: "287/232" }}
            >
              <Image
                src="/images/management-dev.jpg"
                alt="Three professionals collaborating on a management development session"
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>

            {/* Body mobile: Nunito Sans 400 14px #FFFFFF */}
            <p className="font-normal text-[14px] leading-[150%] text-white">
              Tobams Group offers a comprehensive Management Development Program designed to equip corporate organisations with the high-performing leaders they need to thrive. Our program includes workshops, seminars, coaching sessions, online courses, and experiential learning opportunities designed to improve leadership, strategic thinking, communication, and other essential managerial competencies for corporate organisations.
            </p>

            {/* Pills mobile: 287x40, #8F6182, gap 25px, text 14px */}
            <ul className="flex flex-col gap-[25px] py-2">
              {featurePills.map((pill) => (
                <li key={pill.id} className="flex flex-row items-center gap-2 bg-[#8F6182] rounded-[8px] px-2 py-1 w-full h-10">
                  <WhiteBoltIcon />
                  <span className="font-normal text-[14px] leading-[150%] text-white flex-1">
                    {pill.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── DESKTOP card: padding 40px, radius 20px, bg #2C0922 ── */}
        <div className="hidden lg:block w-full bg-[#2C0922] rounded-[20px] p-10">
          <div className="flex flex-row items-start gap-12">

            {/* Left — Image desktop: radius 8px 8px 0 8px */}
            <div
              className="relative flex-1 min-w-0 overflow-hidden flex-shrink-0"
              style={{ borderRadius: "8px 8px 0px 8px", aspectRatio: "592/639" }}
            >
              <Image
                src="/images/management-dev.jpg"
                alt="Three professionals collaborating on a management development session"
                fill
                className="object-cover"
                sizes="50vw"
              />
            </div>

            {/* Right — Content desktop */}
            <div className="flex-1 min-w-0 flex flex-col gap-8">
              <h2
                id="mdp-heading"
                className="font-[family-name:var(--font-nunito)] font-semibold text-[clamp(26px,2.8vw,40px)] leading-[150%] tracking-[0.03em] text-white"
              >
                Management Development Program
              </h2>
              <p className="font-normal text-[18px] leading-[150%] text-white">
                Tobams Group offers a comprehensive Management Development Program designed to equip corporate organisations with the high-performing leaders they need to thrive. Our program includes workshops, seminars, coaching sessions, online courses, and experiential learning opportunities designed to improve leadership, strategic thinking, communication, and other essential managerial competencies for corporate organisations.
              </p>
              <ul className="flex flex-col gap-[25px] px-4 py-2">
                {featurePills.map((pill) => (
                  <li key={pill.id} className="flex flex-row items-center gap-2 bg-[#8F6182] rounded-[8px] px-2 py-1 w-full h-10">
                    <WhiteBoltIcon />
                    <span className="font-semibold text-[18px] leading-[150%] text-white flex-1">
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