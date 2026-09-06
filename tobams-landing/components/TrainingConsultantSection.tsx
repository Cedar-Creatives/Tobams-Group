import { ArrowUpRight, ChevronRight } from "lucide-react";

const featureItems = [
  { id: 1, heading: "Expert-Led Learning", body: "Gain insight from seasoned professionals in the field as they mentor you through the subtleties of business analysis." },
  { id: 2, heading: "Comprehensive Curriculum", body: "Access a robust curriculum that covers fundamental principles and advanced methodologies, ensuring a well-rounded understanding." },
  { id: 3, heading: "Interactive Workshops", body: "Engage in hands-on workshops designed to enhance your training capabilities and provide practical insights." },
  { id: 4, heading: "Global Recognition", body: "You will attain a globally recognized certification, opening doors to new career opportunities and industry recognition." },
];

export default function TrainingConsultantSection() {
  return (
    <section className="w-full" aria-labelledby="ttc-heading-mobile ttc-heading-desktop">

      {/* ── MOBILE: bg rgba(87,18,68,0.1), padding 24px ── */}
      <div className="lg:hidden bg-[rgba(87,18,68,0.1)] p-6 flex flex-col gap-8">

        {/* Heading group */}
        <div className="flex flex-col gap-3">
          {/* H2: Nunito 600 24px 130% #571244 */}
          <h2
            id="ttc-heading-mobile"
            className="font-[family-name:var(--font-nunito)] font-semibold text-[24px] leading-[130%] text-[#571244]"
          >
            Training The Consultant
          </h2>
          {/* Subtitle: Nunito Sans 600 16px #571244 */}
          <p className="font-semibold text-[16px] leading-[150%] text-[#571244]">
            Maximise Your Potential as a Certified Trainer:
          </p>
        </div>

        {/* Body: Nunito Sans 400 14px #151515 */}
        <p className="font-normal text-[14px] leading-[150%] text-[#151515]">
          With the help of our Training Consultants program, take a revolutionary step toward becoming a distinguished certified training consultant. Learn from professionals in the field, immerse yourself in a thorough curriculum, and hone your training methods through interactive workshops. Participating in our program will enable you to gain expertise in diverse courses while also developing the abilities to mentor and encourage others in their career advancement.
        </p>

        {/* Feature card: bg #571244, radius 8px, padding 24px, gap 20px — single column */}
        <div className="w-full bg-[#571244] rounded-[8px] p-6 flex flex-col gap-5">
          {featureItems.map((item) => (
            <div key={item.id} className="flex flex-col gap-3">
              {/* Heading: Nunito Sans 700 16px #FFFFFF */}
              <h3 className="font-bold text-[16px] leading-[150%] text-white">
                {item.heading}
              </h3>
              {/* Body: Nunito Sans 400 14px #FFFFFF */}
              <p className="font-normal text-[14px] leading-[150%] text-white">
                {item.body}
              </p>
            </div>
          ))}
        </div>

        {/* Learn More: 161x56px, #571244, radius 8px, Nunito Sans 600 14px, ChevronRight icon */}
        <a
          href="#"
          className="inline-flex flex-row justify-center items-center gap-2 bg-[#571244] rounded-[8px] text-white font-semibold text-[14px] leading-[150%] w-[161px] h-[56px] px-6 hover:bg-[#3d0c30] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#571244]"
        >
          Learn more
          <ChevronRight size={20} aria-hidden="true" />
        </a>
      </div>

      {/* ── DESKTOP: bg rgba(87,18,68,0.1), padding 48px 64px ── */}
      <div className="hidden lg:block bg-[rgba(87,18,68,0.1)] py-10 lg:py-12 px-5 lg:px-16">
        <div className="max-w-[1440px] mx-auto w-full flex flex-col gap-5 lg:gap-8">

          <div className="flex flex-col gap-3">
            <h2
              id="ttc-heading-desktop"
              className="font-[family-name:var(--font-nunito)] font-semibold text-[26px] lg:text-[40px] leading-[130%] text-[#571244]"
            >
              Training The Consultant
            </h2>
            <p className="font-semibold text-[15px] lg:text-[18px] leading-[150%] text-[#571244]">
              Maximise Your Potential as a Certified Trainer:
            </p>
          </div>

          <p className="font-normal text-[15px] lg:text-[18px] leading-[150%] text-[#151515]">
            With the help of our Training Consultants program, take a revolutionary step toward becoming a distinguished certified training consultant. Learn from professionals in the field, immerse yourself in a thorough curriculum, and hone your training methods through interactive workshops. Participating in our program will enable you to gain expertise in diverse courses while also developing the abilities to mentor and encourage others in their career advancement.
          </p>

          {/* Feature card desktop: 2-col grid */}
          <div className="w-full bg-[#571244] rounded-[8px] p-6 lg:p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-5">
              {featureItems.map((item) => (
                <div key={item.id} className="flex flex-col gap-3">
                  <h3 className="font-bold text-[15px] lg:text-[18px] leading-[150%] text-white">
                    {item.heading}
                  </h3>
                  <p className="font-normal text-[14px] lg:text-[18px] leading-[150%] text-white">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop Learn More: ArrowUpRight */}
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