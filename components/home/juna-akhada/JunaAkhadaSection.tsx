"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Typography from "@/components/ui/Typography";
import SectionHeading from "@/components/ui/SectionHeading";

const LEGACY_IMAGE =
  "/images/home/Juna%20Akhada/The%20Legacy%20of%20Juna%20Akhada.png";

/**
 * About Juna Akhada — cream panel that scrolls over the sticky homepage background.
 */
export default function JunaAkhadaSection() {
  return (
    <section className="rounded-tl-[48px] rounded-tr-[48px] bg-[#FAF8F5] px-6 py-16 sm:rounded-tl-[64px] sm:rounded-tr-[64px] sm:px-8 sm:py-20 md:rounded-tl-[80px] md:rounded-tr-[80px] md:px-[calc((100vw-1280px)/2+24px)] md:py-24 lg:rounded-tl-[100px] lg:rounded-tr-[100px]">
      <div className="mx-auto w-full max-w-7xl">
        <SectionHeading className="mb-8 md:mb-10">
          About Juna Akhada
        </SectionHeading>

        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-neutral-200 sm:rounded-[28px] lg:aspect-[5/4]">
            <Image
              src={LEGACY_IMAGE}
              alt="The Legacy of Juna Akhada"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority={false}
            />
          </div>

          <div className="flex flex-col items-start gap-5 md:gap-6">
            <Typography
              as="h2"
              variant="sectionTitleTight"
              className="text-gray-950"
            >
              The Legacy of Juna Akhada
            </Typography>

            <Typography
              as="p"
              variant="bodyRelaxed"
              className="max-w-xl text-neutral-600"
            >
              One of India&apos;s oldest and largest monastic orders, preserving
              the wisdom of Sanatan Dharma through spiritual discipline,
              selfless service, and cultural heritage.
            </Typography>

            <Link
              href="/juna-akhada"
              className="mt-1 inline-flex h-11 items-center gap-2 rounded-xl border border-orange-500 bg-transparent px-5 text-orange-600 transition-colors hover:bg-orange-50"
            >
              <Typography
                as="span"
                variant="buttonSmall"
                className="text-orange-600"
              >
                Explore Juna Akhada
              </Typography>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
