export default function PreFooterCta() {
  return (
    <section
      className="bg-[#1A0A22] py-8 lg:py-10 px-5 lg:px-20"
      aria-labelledby="pre-footer-cta-heading"
    >
      <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-5 border-b border-[rgba(255,255,255,0.12)] pb-8 lg:pb-10">
        {/* Text */}
        <div>
          <p
            className="text-[13px] mb-1.5"
            style={{ color: "rgba(255,255,255,0.70)" }}
          >
            Ready to be a part of something extraordinary?
          </p>
          <h2
            id="pre-footer-cta-heading"
            className="text-white text-[20px] md:text-[22px] lg:text-[26px] font-bold leading-[1.3]"
          >
            Let&apos;s work together to create a difference
          </h2>
        </div>

        {/* Button */}
        <a
          href="#"
          className="inline-flex items-center bg-[#5A1F6B] text-white text-[14px] font-semibold px-6 py-3 rounded-[6px] hover:bg-[#4a1858] transition-colors whitespace-nowrap self-start md:self-auto focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5A1F6B]"
        >
          Get In Touch
        </a>
      </div>
    </section>
  );
}
