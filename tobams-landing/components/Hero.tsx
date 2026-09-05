import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="relative w-full h-[511px] flex items-center justify-center overflow-hidden"
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

      {/* Dark overlay — pure black at 70% opacity per Figma */}
      <div className="absolute inset-0 bg-black/70" aria-hidden="true" />

      {/* Content stack — padding: 112px top/bottom, 64px left/right, gap: 48px */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 lg:px-16 py-[112px] w-full max-w-[1440px] mx-auto gap-12">

        {/* Eyebrow pill */}
        <span className="inline-flex flex-row items-start justify-center w-[193px] h-[45px] px-12 py-3 gap-2.5 rounded-[100px] bg-[rgba(255,255,255,0.1)] text-[14px] font-semibold leading-[150%] tracking-normal text-white">
          WHAT WE DO
        </span>

        {/* H1 */}
        <h1 className="text-[36px] md:text-[48px] lg:text-[56px] font-bold text-white leading-[130%] tracking-normal max-w-[1205px] text-center font-[family-name:var(--font-nunito)]">
          Training and Development
        </h1>

        {/* Body text */}
        <p className="text-[18px] font-semibold leading-[150%] tracking-normal text-white text-center max-w-[1077px]">
          Our comprehensive range of programs and resources is designed to enhance skills,
          broaden knowledge, and propel careers forward in today&apos;s ever-evolving landscape.
        </p>

        {/* CTA button */}
        <button
          type="button"
          className="flex flex-row justify-center items-center w-[214px] h-[48px] px-6 py-3 gap-2.5 bg-[#571244] rounded-[4px] text-white text-[18px] font-semibold leading-[150%] tracking-normal hover:bg-[#3d0c30] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
          Book a Consultation
        </button>
      </div>
    </section>
  );
}