import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="relative w-full min-h-[480px] lg:min-h-[520px] flex items-center justify-center overflow-hidden"
      aria-label="Hero"
    >
      {/* Background image */}
      <Image
        src="/images/hero-bg.jpg"
        alt=""
        fill
        className="object-cover object-center"
        priority
        sizes="100vw"
      />
      {/* Dark overlay */}
      <div
        className="absolute inset-0 bg-[#1A1A2E] opacity-70"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-5 py-10 lg:py-0 max-w-[700px] mx-auto">
        {/* Eyebrow pill */}
        <span
          className="inline-block mb-6 px-4 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-[0.12em] text-white border border-white/30"
          style={{ backgroundColor: "rgba(255,255,255,0.15)" }}
        >
          WHAT WE DO
        </span>

        {/* H1 */}
        <h1 className="text-[32px] md:text-[44px] lg:text-[54px] font-bold text-white leading-[1.15] mb-5">
          Empowering Africa&apos;s Tech Talent for a Global Future
        </h1>

        {/* Body */}
        <p
          className="text-[14px] md:text-[16px] lg:text-[17px] leading-[1.6] mb-8 max-w-[580px]"
          style={{ color: "rgba(255,255,255,0.85)" }}
        >
          Tobams Group connects ambitious professionals with world-class training,
          talent solutions, and strategic partnerships to accelerate growth across Africa
          and beyond.
        </p>

        {/* CTA */}
        <a
          href="#services"
          className="inline-block bg-[#7B2D8B] text-white text-[14px] font-semibold px-7 py-3 rounded-[6px] hover:bg-[#5A1F6B] transition-colors w-[80%] md:w-auto text-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          Explore Our Services
        </a>
      </div>
    </section>
  );
}
