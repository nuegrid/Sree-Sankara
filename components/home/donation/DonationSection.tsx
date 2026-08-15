"use client";

import Image from "next/image";
import Link from "next/link";
import { FaHeart } from "react-icons/fa";
import Typography from "@/components/ui/Typography";

const DONATION_IMAGE = "/images/home/Donation/donation_bg_1.png";

/**
 * Full-bleed donation CTA — cinematic background with centered copy + button.
 */
export default function DonationSection() {
  return (
    <section className="pointer-events-none relative z-20 flex min-h-[560px] w-full items-center justify-center overflow-hidden sm:min-h-[520px] md:min-h-0 md:aspect-[1402/747]">
      <Image
        src={DONATION_IMAGE}
        alt=""
        fill
        className="object-cover object-[center_10%]"
        sizes="100vw"
        priority={false}
        aria-hidden
      />

      {/* Vertical black → Dharma orange (top dark, bottom orange; image visible through) */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0, 0, 0, 0.78) 0%, rgba(20, 10, 5, 0.62) 35%, rgba(120, 35, 5, 0.58) 65%, rgba(255, 65, 0, 0.72) 100%)",
        }}
        aria-hidden
      />
      {/* Black layer above gradient */}
      <div className="absolute inset-0 bg-black/30" aria-hidden />

      <div className="relative z-10 mx-auto flex w-full max-w-[933px] flex-col items-center px-6 py-16 text-center sm:translate-y-4 sm:px-8 sm:py-20 md:translate-y-10 md:py-24 lg:translate-y-12">
        <Typography
          as="h2"
          variant="displayTitle"
          className="max-w-[711px] text-white"
        >
          Join the Journey of Dharma
        </Typography>

        <Typography
          as="p"
          variant="ctaBody"
          className="mt-4 max-w-[933px] text-white sm:mt-5"
        >
          Your support helps preserve Sanatan Dharma, empower communities, and
          continue Swamiji&apos;s mission of spiritual guidance and selfless
          service.
        </Typography>

        <Link
          href="/donate"
          className="pointer-events-auto mt-8 inline-flex h-[52px] w-fit items-center justify-center gap-[10px] rounded-[54px] bg-[#FE3E02] px-[30px] py-3 text-white transition-colors hover:bg-[#e63702] sm:mt-10"
        >
          <Typography as="span" variant="ctaButton" className="text-white">
            Make a Donation
          </Typography>
          <FaHeart className="h-4 w-4 shrink-0" aria-hidden />
        </Link>
      </div>
    </section>
  );
}
