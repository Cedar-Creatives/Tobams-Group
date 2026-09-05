import { ArrowUpRight, ChevronRight } from "lucide-react";

interface FeatureGridItem {
  id: number;
  heading: string;
  body: string;
}

const featureGridItems: FeatureGridItem[] = [
  {
    id: 1,
    heading: "Expert-Led Learning",
    body: "Gain insight from seasoned professionals and industry experts who bring real-world experience to every session.",
  },
  {
    id: 2,
    heading: "Interactive Workshops",
    body: "Engage in hands-on workshops that reinforce theoretical knowledge with practical application.",
  },
  {
    id: 3,
    heading: "Comprehensive Curriculum",
    body: "Access a robust curriculum carefully designed to cover all aspects of effective consulting and training.",
  },
  {
    id: 4,
    heading: "Global Recognition",
    body: "You will attain a globally recognized certification that validates your expertise and opens new career opportunities.",
  },
];

export default function TrainingConsultantSection() {
  return (
    <section
      className="bg-[#F0E8F5] py-16 lg:py-20"
      aria-labelledby="ttc-heading"
    >
      <div className="max-w-[1280px] mx-auto px-5 lg:px-20">
        {/* H2 heading */}
        <h2
          id="ttc-heading"
          className="text-[#1A1A1A] font-bold text-[22px] lg:text-[32px] leading-[1.2] mb-2"
        >
          Training The Consultant
        </h2>

        {/* Accent subheading */}
        <p className="text-[#7B2D8B] font-semibold text-[14px] mb-4">
          Maximise Your Potential as a Certified Trainer:
        </p>

        {/* Body paragraph */}
        <p className="text-[#3A3A3A] text-[14px] leading-[1.7] mb-6">
          Tobams Group&apos;s Training The Consultant program is designed to empower
          individuals to become highly effective trainers and consultants. With a
          comprehensive curriculum and expert-led training, you&apos;ll gain the skills
          and knowledge to excel in the dynamic world of consulting and training.
          Our program is your gateway to a successful consulting career.
        </p>

        {/* Feature grid card */}
        <div className="bg-[#5A1F6B] rounded-[12px] p-6 lg:p-8 mb-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-8">
            {featureGridItems.map((item) => (
              <div key={item.id}>
                <h3 className="text-white font-bold text-[14px] mb-1.5">
                  {item.heading}
                </h3>
                <p className="text-[rgba(255,255,255,0.80)] text-[13px] leading-[1.6]">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop button — hidden on mobile */}
        <button
          type="button"
          className="hidden lg:inline-flex items-center gap-2 bg-[#5A1F6B] text-white text-[14px] font-semibold px-6 py-3 rounded-[6px] hover:bg-[#4A1058] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5A1F6B]"
        >
          Learn More
          <ArrowUpRight size={16} aria-hidden="true" />
        </button>

        {/* Mobile button — hidden on desktop */}
        <button
          type="button"
          className="inline-flex lg:hidden items-center gap-2 bg-[#5A1F6B] text-white text-[14px] font-semibold px-6 py-3 rounded-[6px] hover:bg-[#4A1058] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5A1F6B]"
        >
          Learn More
          <ChevronRight size={16} aria-hidden="true" />
        </button>
      </div>
    </section>
  );
}
