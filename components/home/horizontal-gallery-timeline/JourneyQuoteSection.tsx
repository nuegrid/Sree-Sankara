"use client";

import Image from "next/image";
import Typography from "@/components/ui/Typography";

/**
 * Quote + portrait below HorizontalGallery inside the black drawer.
 * Layout matches the journey quote reference (left quote, right cutout).
 */
export default function JourneyQuoteSection() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-black md:min-h-screen">
      <div className="relative mx-auto flex min-h-[90vh] w-full max-w-7xl -translate-y-23 flex-col md:min-h-screen md:flex-row">
        {/* Left — quote block */}
        <div className="relative z-10 flex w-full flex-col justify-center px-6 py-16 md:w-1/2 md:py-20 lg:px-6">
          <div className="relative mb-2 h-14 w-16 md:mb-3 md:h-[4.5rem] md:w-20 lg:h-20 lg:w-24">
            <Image
              src="/images/journey/quote.png"
              alt=""
              fill
              sizes="96px"
              className="object-contain object-left"
              aria-hidden
            />
          </div>

          <Typography
            as="blockquote"
            variant="quote"
            className="max-w-xl text-white"
          >
            <span className="block">The highest form of worship</span>
            <span className="mt-1.5 block">
              is{" "}
              <span className="bg-[#ea580c] px-1.5 py-[2px] text-white">
                selfless service to
              </span>
            </span>
            <span className="mt-1.5 block">
              <span className="bg-[#ea580c] px-1.5 py-[2px] text-white">
                humanity.
              </span>
            </span>
          </Typography>

          <Typography
            as="p"
            variant="bodyText"
            className="mt-3 font-normal text-white md:mt-4"
          >
            Swami Anandavanam
          </Typography>
        </div>

        {/* Right — large cutout anchored to bottom / right */}
        <div className="relative mt-4 h-[45vh] w-full shrink-0 md:absolute md:inset-y-0 md:right-0 md:mt-0 md:h-auto md:w-[42%] lg:w-[44%]">
          <Image
            src="/images/journey/sw1.png"
            alt="Swami Anandavanam"
            fill
            sizes="(max-width: 768px) 90vw, 44vw"
            className="object-contain object-bottom object-center scale-90 translate-y-6 md:origin-bottom-right md:object-right md:scale-[0.88] md:translate-y-8"
            priority={false}
          />
        </div>
      </div>
    </section>
  );
}
