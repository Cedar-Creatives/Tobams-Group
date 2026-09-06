export default function CtaBanner() {
  return (
    <section
      className="w-full flex justify-center items-center py-8 lg:py-10 px-5 lg:px-16"
      aria-label="Call to action"
    >
      {/* Card: bg #571244, border-radius 8px, padding 32px 64px, max-w 1134px */}
      <div className="w-full max-w-[1134px] bg-[#571244] rounded-[8px] flex flex-col items-center gap-8 px-6 py-8 lg:px-16 lg:py-8">

        {/* Desktop copy — hidden on mobile */}
        <p className="hidden md:block font-[family-name:var(--font-nunito)] font-semibold text-[18px] lg:text-[20px] leading-[150%] tracking-[0.03em] text-white text-center max-w-[1006px]">
          Want to accelerate professional growth and development at your organisation?
          See how we can help.
        </p>

        {/* Mobile copy — hidden on desktop */}
        <p className="md:hidden font-[family-name:var(--font-nunito)] font-semibold text-[16px] leading-[150%] tracking-[0.03em] text-white text-center">
          Don&apos;t just dream it—let&apos;s build it! Click now and start your project with Tobams Group. Your journey to digital excellence begins here.
        </p>

        {/* Button: 214x48px, bg #FFFFFF, border 1px solid #571244, radius 4px */}
        <button
          type="button"
          className="flex flex-row justify-center items-center w-[214px] h-[48px] px-6 py-3 gap-2.5 bg-white border border-[#571244] rounded-[4px] font-[family-name:var(--font-nunito)] font-semibold text-[18px] leading-[120%] text-center text-[#571244] hover:bg-[#f5f0f3] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#571244]"
        >
          Book a Consultation
        </button>

      </div>
    </section>
  );
}