import Image from "next/image";

interface ServiceBlock {
  id: number;
  title: string;
  body: string;
  image: string;
  imageAlt: string;
  imagePosition: "left" | "right";
  imageRadius: string;
  items: string[];
}

const serviceBlocks: ServiceBlock[] = [
  {
    id: 1,
    title: "Corporate Trainings",
    body: "Empower your team with customised Corporate Training programs designed to address the unique needs and objectives of your organisation. Our expert facilitators work closely with your team to deliver tailored learning experiences that align with your company's goals and values.",
    image: "/images/corporate-trainings.jpg",
    imageAlt: "Corporate training session with a trainer presenting to a team in a boardroom",
    imagePosition: "right",
    imageRadius: "56px 24px 23px 12px",
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
    imageAlt: "Individual professional engaged in personalised learning and development",
    imagePosition: "left",
    imageRadius: "33px 8px 8px 8px",
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
    body: "At Tobams Group, we empower individuals and organizations through tailored training programs, expert-led workshops, and personalized mentorship. We are committed to your success and growth, providing a comprehensive suite of benefits designed to foster your development and success.",
    image: "/images/capacity-development.jpg",
    imageAlt: "Group capacity development workshop with professionals collaborating",
    imagePosition: "right",
    imageRadius: "40px 8px 8px 8px",
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

/* Custom bolt icon matching Figma vector: 12.44x16px, fill #1D0617, border #480F39 */
function BoltIcon() {
  return (
    <svg
      width="13"
      height="16"
      viewBox="0 0 13 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="flex-shrink-0 mt-[3px]"
    >
      <path
        d="M7.5 1L1 9H6.5L5.5 15L12 7H6.5L7.5 1Z"
        fill="#1D0617"
        stroke="#480F39"
        strokeWidth="1.52"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="bg-white py-10 lg:py-16 px-5 lg:px-16"
      aria-labelledby="services-heading"
    >
      <h2 id="services-heading" className="sr-only">Our Services</h2>

      <div className="w-full max-w-[1440px] mx-auto flex flex-col gap-16 lg:gap-[120px]">
        {serviceBlocks.map((block) => (
          <div
            key={block.id}
            className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-16"
          >
            {/* Text column — flex-1 so it shrinks with viewport */}
            <div
              className={`w-full lg:flex-1 lg:min-w-0 flex flex-col gap-5${
                block.imagePosition === "left" ? " lg:order-2" : ""
              }`}
            >
              <h2 className="font-[family-name:var(--font-nunito)] font-semibold text-[22px] lg:text-[clamp(22px,2.8vw,40px)] leading-[150%] tracking-[0.03em] text-[#151515]">
                {block.title}
              </h2>

              {/* Mobile image */}
              <div
                className="block lg:hidden relative w-full aspect-[602/346] overflow-hidden mb-2"
                style={{ borderRadius: block.imageRadius }}
              >
                <Image
                  src={block.image}
                  alt={block.imageAlt}
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
              </div>

              <p className="font-normal text-[15px] md:text-[16px] lg:text-[18px] leading-[150%] text-[#696969]">
                {block.body}
              </p>

              <ul
                className="flex flex-col gap-1.5 px-0 lg:px-[30px]"
                aria-label={`${block.title} features`}
              >
                {block.items.map((item) => (
                  <li key={item} className="flex items-center gap-3.5">
                    <BoltIcon />
                    <span className="font-normal text-[15px] md:text-[16px] lg:text-[18px] leading-[150%] text-[#696969]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Image column — flex-1 so it shrinks with viewport, aspect ratio preserves proportions */}
            <div
              className={`hidden lg:block lg:flex-1 lg:min-w-0 relative overflow-hidden${
                block.imagePosition === "left" ? " lg:order-1" : ""
              }`}
              style={{ borderRadius: block.imageRadius, aspectRatio: "602 / 346" }}
            >
              <Image
                src={block.image}
                alt={block.imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 1440px) 50vw, 602px"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}