import Link from "next/link";
import Typography from "@/components/ui/Typography";
import { PAGE_CONTAINER } from "@/lib/layout";
import { cn } from "@/lib/utils";

/**
 * Donate coming-soon page — centered message with contact CTA.
 */
export default function DonateContent() {
  return (
    <main className="flex w-full flex-1 flex-col bg-[#FAF8F5]">
      <div
        className={cn(
          PAGE_CONTAINER,
          "flex flex-1 flex-col items-center justify-center py-20 text-center sm:py-28 md:py-32 lg:py-40"
        )}
      >
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
