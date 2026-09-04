import Image from "next/image";
import { Zap } from "lucide-react";

interface ServiceBlock {
  id: string;
  heading: string;
  body: string;
  list: string[];
  image: string;
  imageAlt: string;
  imageLeft: boolean;
}

const services: ServiceBlock[] = [
  {
    id: "corporate",
    heading: "Corporate Trainings",
    body: "Empower your team with customised Corporate Training programs designed to enhance skills, boost productivity, and drive business growth. Our expert-led sessions are tailored to meet your organisation's unique needs.",
    list: [
      "Leadership Training",
      "Strategic Planning and Implementation",
      "Project Management",
      "Sustainability Training",
      "Customised Training",
    ],
    image: "/images/corporate-trainings.jpg",
    imageAlt: "Corporate training session with professionals in a boardroom",
    imageLeft: false,
  },
  {
    id: "individual",
    heading: "Personalised Individual Training",
    body: "Begin a journey of lifelong learning with our Personalised Individual Training programs. Tailored to your specific goals and learning style, our programs provide the skills and knowledge you need to succeed.",
    list: [
      "Leadership Development",
      "Soft Skills Development",
      "Industry Specific Knowledge",
      "Technical Skills Enhancement",
      "Time Management and Productivity",
      "Career Development",
    ],
    image: "/images/individual-training.jpg",
    imageAlt: "Individual professional engaged in personalised learning session",
    imageLeft: true,
  },
  {
    id: "capacity",
    heading: "Capacity Development",
    body: "At Tobams Group, we empower individuals and organizations to reach their full potential through our comprehensive Capacity Development programs. Our expert-led training initiatives are designed to build skills, enhance performance, and drive sustainable growth.",
    list: [
      "Tailored Training Programs",
      "Expert-Led Workshops",
      "Personalized Mentorship",
      "Technical Skills Enhancement",
      "Collaborative Learning Environment",
      "Ongoing Support and Resources",
    ],
    image: "/images/capacity-development.jpg",
    imageAlt: "Capacity development workshop with group of professionals",
    imageLeft: false,
  },
];

function BoltListItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-2 text-[14px] text-[#3A3A3A]">
      <Zap
        size={15}
        className="text-[#5A1F6B] flex-shrink-0 mt-0.5"
        aria-hidden="true"
        fill="currentColor"
      />
      {text}
    </li>
  );
}

export default function ServicesSection() {
  return (
    <section id="services" className="bg-white py-16 lg:py-20" aria-labelledby="services-heading">
      <div className="max-w-[1280px] mx-auto px-5 lg:px-20">
        <h2 id="services-heading" className="sr-only">
          Our Services
        </h2>
        <div className="flex flex-col gap-16 lg:gap-20">
          {services.map((service) => (
            <div
              key={service.id}
              className={`flex flex-col ${
                service.imageLeft ? "md:flex-row-reverse" : "md:flex-row"
              } gap-8 lg:gap-12 items-center`}
            >
              {/* Text */}
              <div className="w-full md:w-1/2">
                <h3 className="text-[22px] md:text-[28px] lg:text-[30px] font-bold text-[#1A1A1A] mb-4 leading-[1.25]">
                  {service.heading}
                </h3>
                <p className="text-[14px] text-[#3A3A3A] leading-[1.7] mb-5 max-w-[420px]">
                  {service.body}
                </p>
                <ul className="flex flex-col gap-2">
                  {service.list.map((item) => (
                    <BoltListItem key={item} text={item} />
                  ))}
                </ul>
              </div>

              {/* Image */}
              <div className="w-full md:w-1/2">
                <div className="relative w-full aspect-[4/3] rounded-[12px] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
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
