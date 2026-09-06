export default function PreFooterCta() {
  return (
    <section className="w-full bg-[#1D0617] border-b border-[#C4C4C4]" aria-label="Work with us">

      {/* ── MOBILE: padding 24px, gap 24px, flex-col ── */}
      <div className="lg:hidden flex flex-col gap-6 p-6">
        <div className="flex flex-col gap-4">
          {/* Eyebrow: Nunito Sans 400 14px #FFFFFF */}
          <p className="font-normal text-[14px] leading-[150%] text-white">
            Ready to be a part of something extraordinary?
          </p>
          {/* Heading: Nunito 600 20px 130% #FFFFFF */}
          <p className="font-[family-name:var(--font-nunito)] font-semibold text-[20px] leading-[130%] text-white">
            Let&apos;s work together to create a difference
          </p>
        </div>
        {/* Button: 125x40px, #571244, radius 4px, padding 11.5px 22px, Nunito 600 14px */}
        <button
          type="button"
          className="flex flex-row justify-center items-center w-[125px] h-[40px] px-[22px] py-[11.5px] bg-[#571244] rounded-[4px] font-[family-name:var(--font-nunito)] font-semibold text-[14px] leading-[120%] text-center text-white hover:bg-[#3d0c30] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#571244]"
        >
          Get In Touch
        </button>
      </div>

      {/* ── DESKTOP: padding 40px 64px, flex-row space-between ── */}
      <div className="hidden lg:flex flex-row items-center justify-between py-10 px-5 lg:px-16 max-w-[1440px] mx-auto w-full gap-6">
        <div className="flex flex-col gap-2.5">
          <p className="font-normal text-[16px] lg:text-[18px] leading-[150%] text-white">
            Ready to be a part of something extraordinary?
          </p>
          <p className="font-[family-name:var(--font-nunito)] font-semibold text-[22px] lg:text-[32px] leading-[130%] text-white">
            Let&apos;s work together to create a difference
          </p>
        </div>
        <button
          type="button"
          className="flex-shrink-0 flex flex-row justify-center items-center w-[151px] h-[48px] px-6 py-3 bg-[#571244] rounded-[4px] font-[family-name:var(--font-nunito)] font-semibold text-[18px] leading-[120%] text-center text-white hover:bg-[#3d0c30] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#571244]"
        >
          Get In Touch
        </button>
      </div>

    </section>
  );
}