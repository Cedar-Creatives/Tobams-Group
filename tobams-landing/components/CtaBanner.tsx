export default function CtaBanner() {
  return (
    <section aria-labelledby="cta-heading" className="bg-white py-8 px-5 lg:px-20">
      <div className="max-w-[1280px] mx-auto">
        {/* Desktop: full-width strip */}
        <div className="hidden md:block bg-[#4A1040] py-12 px-10 text-center">
          <p
            id="cta-heading"
            className="text-[18px] lg:text-[20px] font-normal text-white leading-[1.5] max-w-[640px] mx-auto mb-6"
          >
            Want to accelerate professional growth and development at your organisation?{" "}
            <span>See how we can help.</span>
          </p>
          <a
            href="#"
            className="inline-block bg-white text-[#4A1040] text-[14px] font-semibold px-7 py-3 rounded-[6px] border-2 border-white hover:bg-[#f5f5f5] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Book a Consultation
          </a>
        </div>

        {/* Mobile: rounded card with different copy */}
        <div className="md:hidden bg-[#4A1040] rounded-[16px] py-10 px-6 text-center">
          <p
            className="text-[18px] font-normal text-white leading-[1.5] mb-6"
          >
            Don&apos;t just dream it &mdash; let&apos;s build it! Click now and start your
            project with Tobams Group. Your journey to digital excellence begins here.
          </p>
          <a
            href="#"
            className="inline-block bg-white text-[#4A1040] text-[14px] font-semibold px-7 py-3.5 rounded-[6px] border-2 border-white hover:bg-[#f5f5f5] transition-colors w-[75%] text-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Book a Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
