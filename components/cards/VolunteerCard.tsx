"use client";

import Image from "next/image";
import Link from "next/link";
import { FaHeart } from "react-icons/fa";
import Typography from "@/components/ui/Typography";
import { cn } from "@/lib/utils";

export type VolunteerCardProps = {
  image: string;
  eyebrow: string;
  title: string;
  description: string;
  buttonText: string;
  href: string;
  className?: string;
  imageAlt?: string;
};

/**
 * Reusable volunteer CTA card.
 * Mobile: single full-bleed image with text/button overlay.
 * Desktop: split image + copy panel.
 */
export default function VolunteerCard({
  image,
  eyebrow,
  title,
  description,
  buttonText,
  href,
  className,
  imageAlt = "",
}: VolunteerCardProps) {
  const titleNode = title.includes("Community") ? (
    <>
      {title.replace(/\s*Community\s*$/, "").trim()}
      <br />
      Community
    </>
  ) : (
    title
  );

  return (
    <article
      className={cn(
        "w-full max-w-full rounded-[24px] bg-black sm:rounded-[26px] md:overflow-hidden",
        className
      )}
    >
      {/* Mobile: overlay card */}
      <div className="relative isolate min-h-[540px] w-full max-w-full md:hidden">
        <Image
          src={image}
          alt={imageAlt || title}
          fill
          className="rounded-[24px] object-cover object-center"
          sizes="100vw"
          priority={false}
        />
        <div
          className="absolute inset-0 rounded-[24px] bg-gradient-to-b from-black/35 via-black/55 to-black/90"
          aria-hidden
        />

        <div className="relative z-10 box-border flex min-h-[540px] w-full max-w-full flex-col px-5 pb-8 pt-12 sm:px-6">
          <div className="mt-auto box-border flex w-full max-w-full flex-col items-center text-center">
            <Typography
              as="span"
              variant="sectionEyebrow"
              className="block text-[#FE3E02]"
            >
              {eyebrow}
            </Typography>

            <Typography
              as="h3"
              variant="displayTitleMedium"
              className="mt-2 block w-full max-w-full text-center text-[1.75rem] leading-[1.15] tracking-[-0.04em] text-white sm:text-[2rem]"
            >
              {titleNode}
            </Typography>

            <p className="mt-3 box-border w-full max-w-full whitespace-normal break-words text-center font-[var(--font-inter)] text-[15px] font-normal leading-[1.45] tracking-[-0.02em] text-white/90 sm:text-base">
              {description}
            </p>

            <Link
              href={href}
              className="mt-8 inline-flex h-11 max-w-full shrink-0 items-center justify-center gap-2 rounded-[8px] bg-[#FE3E02] px-5 py-2.5 text-white transition-colors hover:bg-[#e63702]"
            >
              <FaHeart className="h-3.5 w-3.5 shrink-0" aria-hidden />
              <Typography as="span" variant="ctaButtonSm" className="text-white">
                {buttonText}
              </Typography>
            </Link>
          </div>
        </div>
      </div>

      {/* Desktop / tablet: split layout */}
      <div className="hidden overflow-hidden rounded-[24px] md:grid md:min-h-[320px] md:grid-cols-2 md:rounded-[26px] lg:min-h-[360px]">
        <div className="relative min-h-[220px] md:min-h-0 md:h-full">
          <Image
            src={image}
            alt={imageAlt || title}
            fill
            className="object-cover"
            sizes="50vw"
            priority={false}
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/65 to-black"
            aria-hidden
          />
          <div className="absolute inset-0 flex flex-col justify-center px-10 py-8 sm:px-11 md:px-[42px]">
            <Typography
              as="span"
              variant="sectionEyebrow"
              className="text-[#FE3E02]"
            >
              {eyebrow}
            </Typography>
            <Typography
              as="h3"
              variant="displayTitleMedium"
              className="mt-3 max-w-[546px] text-white md:mt-4"
            >
              {titleNode}
            </Typography>
          </div>
        </div>

        <div className="flex flex-col items-start justify-center bg-black px-10 py-8 sm:px-11 md:px-[42px] md:py-10">
          <Typography
            as="p"
            variant="ctaBodyMuted"
            className="w-full max-w-[420px] text-[#A4A4A4] sm:max-w-[480px] md:max-w-[520px] lg:max-w-[540px]"
          >
            {description}
          </Typography>

          <Link
            href={href}
            className="mt-6 inline-flex h-11 w-fit shrink-0 items-center justify-center gap-2 self-start rounded-[8px] bg-[#FE3E02] px-5 py-2.5 text-white transition-colors hover:bg-[#e63702]"
          >
            <FaHeart className="h-3.5 w-3.5 shrink-0" aria-hidden />
            <Typography as="span" variant="ctaButtonSm" className="text-white">
              {buttonText}
            </Typography>
          </Link>
        </div>
      </div>
    </article>
  );
}
