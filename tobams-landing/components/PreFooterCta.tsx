export default function PreFooterCta() {
  return (
    /* bg #1D0617, padding 40px 64px, border-bottom 2px solid #C4C4C4 */
    <section
      className="w-full bg-[#1D0617] border-b-2 border-[#C4C4C4] py-10 px-5 lg:px-16"
      aria-label="Work with us"
    >
      <div className="max-w-[1440px] mx-auto w-full flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
        {/* Text */}
        <div className="flex flex-col gap-2.5">
          {/* Eyebrow: Nunito Sans 400 18px #FFFFFF */}
          <p className="font-normal text-[16px] lg:text-[18px] leading-[150%] text-white">
            Ready to be a part of something extraordinary?
          </p>
          {/* Heading: Nunito 600 32px 130% #FFFFFF */}
          <p className="font-[family-name:var(--font-nunito)] font-semibold text-[22px] lg:text-[32px] leading-[130%] text-white">
            Let&apos;s work together to create a difference
          </p>
        </div>

        {/* Button: 151x48px, #571244, radius 4px, Nunito 600 18px */}
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