export default function CtaBanner() {
  return (
    <section className="w-full" aria-label="Call to action">

      {/* ── MOBILE: padding 0 24px ── */}
      <div className="lg:hidden px-6 py-4">
        {/* Card: 327x240, bg #571244, radius 8px, padding 32px 24px, gap 32px */}
        <div className="w-full bg-[#571244] rounded-[8px] flex flex-col items-center gap-8 px-6 py-8">
          {/* Text: Nunito 600 16px 0.03em #FFFFFF centered — mobile copy */}
          <p className="font-[family-name:var(--font-nunito)] font-semibold text-[16px] leading-[150%] tracking-[0.03em] text-white text-center">
            Don&apos;t just dream it—let&apos;s build it! Click now and start your project with Tobams Group. Your journey to digital excellence begins here.
          </p>
          {/* Button: 185x48, bg #FFFFFF, radius 4px, Nunito 600 14px 0.03em #571244 */}
          <button
            type="button"
            className="flex flex-row justify-center items-center w-[185px] h-[48px] px-6 py-3 gap-2.5 bg-white border border-[#571244] rounded-[4px] font-[family-name:var(--font-nunito)] font-semibold text-[14px] leading-[150%] tracking-[0.03em] text-center text-[#571244] hover:bg-[#f5f0f3] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#571244]"
          >
            Book a Consultation
          </button>
        </div>
      </div>

      {/* ── DESKTOP: centered card, max-w 1134px ── */}
      <div className="hidden lg:flex justify-center items-center py-8 lg:py-10 px-5 lg:px-16">
        <div className="w-full max-w-[1134px] bg-[#571244] rounded-[8px] flex flex-col items-center gap-8 px-6 py-8 lg:px-16 lg:py-8">
          {/* Desktop copy */}
          <p className="font-[family-name:var(--font-nunito)] font-semibold text-[18px] lg:text-[20px] leading-[150%] tracking-[0.03em] text-white text-center max-w-[1006px]">
            Want to accelerate professional growth and development at your organisation?
            See how we can help.
          </p>
          {/* Button: 214x48, bg #FFFFFF, border #571244, radius 4px */}
          <button
            type="button"
            className="flex flex-row justify-center items-center w-[214px] h-[48px] px-6 py-3 gap-2.5 bg-white border border-[#571244] rounded-[4px] font-[family-name:var(--font-nunito)] font-semibold text-[18px] leading-[120%] text-center text-[#571244] hover:bg-[#f5f0f3] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#571244]"
          >
            Book a Consultation
          </button>
        </div>
      </div>

    </section>
  );
}