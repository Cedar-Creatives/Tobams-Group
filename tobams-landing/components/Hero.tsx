import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="relative w-full min-h-[420px] lg:min-h-[500px] flex items-center justify-center overflow-hidden"
      aria-label="Hero"
    >
      {/* Background image — next/image with priority for LCP */}
      <Image
        src="/images/hero-bg.jpg"
        alt="Professional working at multiple computer screens with data visualizations"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Dark overlay — using Tailwind opacity modifier, no inline style */}
      <div className="absolute inset-0 bg-[#1A1A2E]/75" aria-hidden="true" />

      {/* Centered content stack */}
      <div className="relative z-10 flex flex-col items-center text-center px-5 py-12 lg:py-0 max-w-[700px] mx-auto w-full">

        {/* Eyebrow pill */}
        <span className="inline-block mb-5 px-4 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-[0.12em] text-white bg-[rgba(255,255,255,0.15)] border border-[rgba(255,255,255,0.3)]">
          WHAT WE DO
        </span>

        {/* H1 */}
        <h1 className="text-[32px] md:text-[52px] lg:text-[56px] font-bold text-white leading-[1.15] mb-4">
          Training and Development
        </h1>

        {/* Body text */}
        <p className="text-[14px] md:text-[16px] lg:text-[18px] leading-[1.6] mb-8 max-w-[600px] text-[rgba(255,255,255,0.85)]">
          Our comprehensive range of programs and resources is designed to enhance skills,
          broaden knowledge, and propel careers forward in today&apos;s ever-evolving landscape.
        </p>

        {/* CTA button */}
        <button
          type="button"
          className="bg-[#7B2D8B] text-white text-[14px] font-semibold px-7 py-3 rounded-[6px] hover:bg-[#5A1F6B] transition-colors w-[80%] md:w-auto focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          Book a Consultation
        </button>
      </div>
    </section>
  );
}
