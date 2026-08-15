import Image from "next/image";
import Link from "next/link";
import Typography from "@/components/ui/Typography";
import { PAGE_CONTAINER } from "@/lib/layout";
import { cn } from "@/lib/utils";

const DONATION_ILLUSTRATION = "/images/Donation/Donation%201.png";

/**
 * Donate coming-soon page — centered message with contact CTA.
 */
export default function DonateContent() {
  return (
    <main className="flex w-full flex-1 flex-col bg-[#FAF8F5]">
      <div
        className={cn(
          PAGE_CONTAINER,
          "flex flex-1 flex-col items-center justify-center py-16 text-center sm:py-24 md:py-28 lg:py-32"
        )}
      >
        <div className="relative mb-8 h-[180px] w-[280px] sm:mb-10 sm:h-[220px] sm:w-[340px] md:h-[260px] md:w-[400px]">
          <Image
            src={DONATION_ILLUSTRATION}
            alt=""
            fill
            priority
            className="object-contain"
            sizes="(max-width: 640px) 280px, (max-width: 768px) 340px, 400px"
          />
        </div>

        <Typography
          as="h1"
          variant="aboutTitle"
          className="max-w-[900px] text-black"
        >
          Your Support Can Make a Difference
        </Typography>

        <Typography
          as="p"
          variant="aboutBody"
          className="mt-5 max-w-[720px] text-center text-[#777777] sm:mt-6"
        >
          We are currently preparing our donation facilities to make your
          contribution simple, secure, and transparent.
        </Typography>

        <Typography
          as="p"
          variant="bodyRelaxed"
          className="mt-8 text-[#777777] sm:mt-10"
        >
          Online Donations Coming Soon
        </Typography>

        <Link
          href="/contact"
          className="mt-4 inline-block text-[#FE3E02] underline decoration-2 underline-offset-[6px] transition-colors hover:text-[#e03802] sm:mt-5"
        >
          <Typography as="span" variant="viewAllLink" className="text-[#FE3E02]">
            Contact Us
          </Typography>
        </Link>
      </div>
    </main>
  );
}
