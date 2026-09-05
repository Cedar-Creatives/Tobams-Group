export default function CtaBanner() {
  return (
    <section
      className="bg-[#4A1040] py-12 lg:py-14 mx-4 rounded-[16px] lg:mx-0 lg:rounded-none"
      aria-label="Call to action"
    >
      <div className="max-w-[640px] mx-auto px-5 text-center flex flex-col items-center gap-6">

        {/* Desktop copy — hidden on mobile */}
        <p className="hidden md:block text-white text-[18px] lg:text-[20px] font-normal leading-[1.5]">
          Want to accelerate professional growth and development at your organisation? See how we can help.
        </p>

        {/* Mobile copy — hidden on desktop */}
        <p className="md:hidden text-white text-[18px] font-normal leading-[1.5]">
          Don&apos;t just dream it—let&apos;s build it! Click now and start your project with Tobams Group. Your journey to digital excellence begins here.
        </p>

        {/* CTA button — outline/ghost style */}
        <button
          type="button"
          className="bg-white text-[#4A1040] border-2 border-white text-[14px] font-semibold px-7 py-3 rounded-[6px] hover:bg-[#f0e8ec] transition-colors w-[75%] md:w-auto focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          Book a Consultation
        </button>
      </div>
    </section>
  );
}
