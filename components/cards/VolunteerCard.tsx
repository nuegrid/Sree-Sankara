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
 * Reusable split volunteer CTA card — image + copy / button.
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
  return (
    <article
      className={cn(
        "grid w-full overflow-hidden rounded-[24px] bg-black sm:rounded-[26px] md:grid-cols-2 md:min-h-[320px] lg:min-h-[360px]",
        className
      )}
    >
      <div className="relative min-h-[220px] md:min-h-0 md:h-full">
        <Image
          src={image}
          alt={imageAlt || title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority={false}
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/70 to-black md:from-black/50 md:via-black/65 md:to-black"
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
            {title.includes("Community") ? (
              <>
                {title.replace(/\s*Community\s*$/, "").trim()}
                <br />
                Community
              </>
            ) : (
              title
            )}
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
    </article>
  );
}
