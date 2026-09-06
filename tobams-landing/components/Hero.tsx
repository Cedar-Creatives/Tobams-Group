import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="relative w-full h-[317px] lg:h-[511px] flex items-center justify-center overflow-hidden"
      aria-label="Hero"
    >
      {/* Background image */}
      <Image
        src="/images/hero-bg.jpg"
        alt="Professional working at multiple computer screens with data visualizations"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Dark overlay — black 70% */}
      <div className="absolute inset-0 bg-black/70" aria-hidden="true" />

      {/* Content stack */}
      <div className="relative z-10 flex flex-col items-center text-center w-full max-w-[1440px] mx-auto
        px-6 py-10 gap-6
        lg:px-16 lg:py-[112px] lg:gap-12">

        {/* Eyebrow pill
            Mobile:  150x38px, padding 10px 32px, radius 100px, bg rgba(255,255,255,0.1), Nunito 600 12px tracking 0.03em
            Desktop: 193x45px, padding 12px 48px */}
        <span className="
          inline-flex flex-row items-center justify-center
          px-8 py-2.5 lg:px-12 lg:py-3
          rounded-[100px] bg-[rgba(255,255,255,0.1)]
          font-[family-name:var(--font-nunito)] font-semibold
          text-[12px] lg:text-[14px]
          leading-[150%] tracking-[0.03em] text-white
        ">
          WHAT WE DO
        </span>

        {/* H1
            Mobile:  Nunito 700 24px 130% #FFFFFF — "Learning and Development"
            Desktop: Nunito 700 56px 130% */}
        <h1 className="
          font-[family-name:var(--font-nunito)] font-bold text-white text-center
          text-[24px] lg:text-[56px]
          leading-[130%] tracking-normal
          max-w-[327px] lg:max-w-[1205px]
        ">
          Training and Development
        </h1>

        {/* Body
            Mobile:  Nunito Sans 600 14px 150% #FFFFFF
            Desktop: Nunito Sans 600 18px 150% */}
        <p className="
          font-semibold text-white text-center
          text-[14px] lg:text-[18px]
          leading-[150%] tracking-normal
          max-w-[327px] lg:max-w-[1077px]
        ">
          Our comprehensive range of programs and resources is designed to enhance skills,
          broaden knowledge, and propel careers forward in today&apos;s ever-evolving landscape.
        </p>

        {/* CTA button
            Mobile:  173x40px, padding 11.5px 22px, Nunito Sans 600 14px
            Desktop: 214x48px, padding 12px 24px, 18px */}
        <button
          type="button"
          className="
            flex flex-row justify-center items-center
            bg-[#571244] rounded-[4px] text-white font-semibold
            w-[173px] h-[40px] px-[22px] py-[11.5px] text-[14px]
            lg:w-[214px] lg:h-[48px] lg:px-6 lg:py-3 lg:text-[18px]
            leading-[150%] hover:bg-[#3d0c30] transition-colors
            focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white
          "
        >
          Book a Consultation
        </button>

      </div>
    </section>
  );
}