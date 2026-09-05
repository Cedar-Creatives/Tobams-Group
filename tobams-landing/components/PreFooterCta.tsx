export default function PreFooterCta() {
  return (
    <section
      className="bg-[#1A0A22] py-8 lg:py-10 px-5 lg:px-20"
      aria-label="Work with us"
    >
      <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 border-b border-[rgba(255,255,255,0.12)] pb-8 lg:pb-10">
        {/* Text left */}
        <div>
          <p className="text-[13px] font-normal mb-1 text-[rgba(255,255,255,0.70)]">
            Ready to be a part of something extraordinary?
          </p>
          <p className="text-white font-bold text-[20px] lg:text-[26px] leading-[1.2]">
            Let&apos;s work together to create a difference
          </p>
        </div>
        {/* Button right — auto-width, NOT full-width on mobile */}
        <button
          type="button"
          className="self-start lg:self-auto bg-[#5A1F6B] text-white text-[14px] font-semibold px-6 py-3 rounded-[6px] hover:bg-[#4A1058] transition-colors flex-shrink-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7B2D8B]"
        >
          Get In Touch
        </button>
      </div>
    </section>
  );
}
