import Image from "next/image";
import { Zap } from "lucide-react";

interface ServiceBlock {
  id: number;
  title: string;
  body: string;
  image: string;
  imageAlt: string;
  imagePosition: "left" | "right";
  items: string[];
}

const serviceBlocks: ServiceBlock[] = [
  {
    id: 1,
    title: "Corporate Trainings",
    body: "Empower your team with customised Corporate Training programs designed to address the unique needs and objectives of your organisation. Our expert facilitators work closely with your team to deliver tailored learning experiences that align with your company's goals and values.",
    image: "/images/corporate-trainings.jpg",
    imageAlt: "Corporate training session with professionals in a boardroom",
    imagePosition: "right",
    items: [
      "Leadership Training",
      "Strategic Planning and Implementation",
      "Project Management",
      "Sustainability Training",
      "Customised Training",
    ],
  },
  {
    id: 2,
    title: "Personalised Individual Training",
    body: "Begin a journey of lifelong learning and professional development with Tobams Group's diverse range of training programs for individuals. From technical skills mastery to soft skills enhancement, our courses cover a wide spectrum of topics to meet the evolving needs of today's professionals.",
    image: "/images/individual-training.jpg",
    imageAlt: "Individual professional engaged in personalised learning session",
    imagePosition: "left",
    items: [
      "Leadership Development",
      "Soft Skills Development",
      "Industry Specific Knowledge",
      "Technical Skills Enhancement",
      "Time Management and Productivity",
      "Career Development",
    ],
  },
  {
    id: 3,
    title: "Capacity Development",
    body: "At Tobams Group, we empower individuals and organizations through tailored training programs, expert-led workshops, and personalized mentorship. We are committed to your success and growth. We are dedicated to providing a comprehensive suite of benefits designed to foster your development and success:",
    image: "/images/capacity-development.jpg",
    imageAlt: "Group workshop session for capacity development and professional growth",
    imagePosition: "right",
    items: [
      "Tailored Training Programs",
      "Expert-Led Workshops",
      "Personalized Mentorship",
      "Technical Skills Enhancement",
      "Collaborative Learning Environment",
      "Ongoing Support and Resources",
    ],
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="bg-white py-16 lg:py-20"
      aria-labelledby="services-heading"
    >
      <h2 id="services-heading" className="sr-only">
        Our Services
      </h2>
      <div className="max-w-[1280px] mx-auto px-5 lg:px-20">
        <div className="flex flex-col gap-16 lg:gap-20">
          {serviceBlocks.map((block) => (
            <div
              key={block.id}
              className="flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-16"
            >
              {/* Text column — always first in DOM; on desktop pushed right when imagePosition === "left" */}
              <div
                className={`w-full lg:flex-1${
                  block.imagePosition === "left" ? " lg:order-2" : ""
                }`}
              >
                <h2 className="text-[#1A1A1A] font-bold text-[22px] lg:text-[30px] leading-[1.2] mb-4">
                  {block.title}
                </h2>

                {/* On mobile: image sits between heading and body — rendered here via order utility */}
                <div
                  className={`block lg:hidden relative w-full aspect-[4/3] rounded-[12px] overflow-hidden mb-5`}
                >
                  <Image
                    src={block.image}
                    alt={block.imageAlt}
                    fill
                    className="object-cover"
                    sizes="100vw"
                  />
                </div>

                <p className="text-[#3A3A3A] text-[14px] leading-[1.7] mb-5">
                  {block.body}
                </p>

                <ul className="flex flex-col gap-2" aria-label={`${block.title} features`}>
                  {block.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <Zap
                        size={16}
                        className="text-[#5A1F6B] flex-shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <span className="text-[14px] text-[#3A3A3A]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Image column — hidden on mobile (shown inline above); visible on desktop */}
              <div
                className={`hidden lg:block lg:flex-1${
                  block.imagePosition === "left" ? " lg:order-1" : ""
                }`}
              >
                <div className="relative w-full aspect-[4/3] rounded-[12px] overflow-hidden">
                  <Image
                    src={block.image}
                    alt={block.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
