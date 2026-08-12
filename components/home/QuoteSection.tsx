"use client";

import Image from "next/image";
import Typography from "@/components/ui/Typography";

/**
 * Standalone quote banner — left quote, right sw1.png flush to the black bottom edge.
 * Line breaks match design:
 *   1. The highest form of worship
 *   2. is [selfless service to]
 *   3. [humanity.]
 */
export default function QuoteSection() {
  return (
    <section className="relative z-20 w-full bg-[#FAF8F5] max-md:-mt-px">
      <div className="relative w-full overflow-hidden rounded-bl-[56px] rounded-br-[56px] bg-black">
        <div className="relative mx-auto flex w-full max-w-7xl flex-col md:flex-row md:items-end">
          {/* Left — quote mark left; text indented under it */}
          <div className="relative z-10 flex w-full min-w-0 flex-col justify-center px-8 py-12 sm:px-10 md:w-[58%] md:self-center md:py-10 md:pl-14 md:pr-6 lg:w-[60%] lg:pl-20 lg:pr-8 lg:py-12">
            <div className="relative mb-2 ml-3 h-12 w-14 sm:mb-3 sm:ml-4 sm:h-14 sm:w-16 md:ml-5 md:h-16 md:w-20 lg:ml-6 lg:h-[4.5rem] lg:w-24">
              <Image
                src="/images/home/journey/quote.png"
                alt=""
                fill
                sizes="96px"
                className="object-contain object-left"
                aria-hidden
              />
            </div>

            {/* Text sits slightly right of the quote mark, like the reference */}
            <div className="pl-3 sm:pl-4 md:pl-5 lg:pl-6">
              <Typography
                as="blockquote"
                variant="quote"
                className="flex flex-col gap-1 text-white sm:gap-1.5"
              >
                <span className="block md:whitespace-nowrap">
                  The highest form of worship
                </span>
                <span className="block md:whitespace-nowrap">
                  is{" "}
                  <span className="relative inline-block leading-none text-white">
                    <span
                      aria-hidden
                      className="pointer-events-none absolute inset-x-0 top-[0.06em] bottom-[-0.14em] bg-[#FE3E02]"
                    />
                    <span className="relative z-[1]">selfless service to</span>
                  </span>
                </span>
                <span className="mt-1.5 block sm:mt-2">
                  <span className="relative inline-block leading-none text-white">
                    <span
                      aria-hidden
                      className="pointer-events-none absolute inset-x-0 top-[0.06em] bottom-[-0.14em] bg-[#FE3E02]"
                    />
                    <span className="relative z-[1]">humanity.</span>
                  </span>
                </span>
              </Typography>

              <Typography
                as="p"
                variant="bodyText2"
                className="mt-5 text-white sm:mt-6"
              >
                Swami Anandavanam
              </Typography>
            </div>
          </div>

          {/* Right — portrait flush to drawer bottom */}
          <div className="relative z-0 mx-auto flex w-full shrink-0 items-end justify-center md:w-[42%] md:justify-end lg:w-[40%]">
            <Image
              src="/images/home/journey/sw1.png"
              alt="Swami Anandavanam"
              width={720}
              height={960}
              sizes="(max-width: 768px) 72vw, 40vw"
              className="block h-[380px] w-auto max-w-[min(100%,520px)] object-contain object-bottom sm:h-[440px] lg:h-[520px]"
              priority={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
