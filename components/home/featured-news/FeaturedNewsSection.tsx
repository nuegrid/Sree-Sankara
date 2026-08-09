"use client";

import Image from "next/image";
import Link from "next/link";
import { CalendarDays, ArrowRight } from "lucide-react";
import Typography from "@/components/ui/Typography";
import SectionHeading from "@/components/ui/SectionHeading";
import ViewAllLink from "@/components/ui/ViewAllLink";
import { featuredArticle, newsItems } from "./data";

const STICKY_BG = "/images/Home_Background/bg_stickey.jpg";

/**
 * Featured News (+ About Juna panel) over a sticky cinematic background.
 *
 * Structure that enables the effect:
 * 1. Outer section grows with content height (sticky parent scroll range).
 * 2. Absolute inset-0 layer holds `position: sticky; top: 0; height: 100vh` image.
 * 3. Foreground panels (z-10) scroll normally; gaps / rounded corners reveal the sticky image.
 * 4. No overflow:hidden on ancestors — sticky is not broken.
 * 5. Not position:fixed — image leaves with the section when scroll ends.
 */
export default function FeaturedNewsSection() {
  return (
    <section className="relative z-20 w-full">
      {/* Sticky background — locked to viewport while this section scrolls */}
      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden>
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          <Image
            src={STICKY_BG}
            alt=""
            fill
            priority={false}
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
      </div>

      {/* Scrolling foreground */}
      <div className="relative z-10">
        {/* Featured News panel — rounded bottom reveals sticky image in the corners */}
        <div className="rounded-bl-[48px] rounded-br-[48px] bg-[#FAF8F5] px-6 py-16 sm:rounded-bl-[64px] sm:rounded-br-[64px] sm:px-8 sm:py-20 md:rounded-bl-[80px] md:rounded-br-[80px] md:px-[calc((100vw-1280px)/2+24px)] md:py-24 lg:rounded-bl-[100px] lg:rounded-br-[100px]">
          <div className="mx-auto w-full max-w-7xl">
            <SectionHeading className="mb-8 md:mb-10">
              Featured News
            </SectionHeading>

            <article className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-16">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-neutral-200 sm:rounded-[28px] lg:aspect-[5/4]">
                <Image
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority={false}
                />
              </div>

              <div className="flex flex-col items-start gap-5 md:gap-6">
                <div className="flex items-center gap-2 text-neutral-500">
                  <CalendarDays
                    className="h-4 w-4 shrink-0"
                    strokeWidth={1.75}
                  />
                  <Typography
                    as="span"
                    variant="bodyText2"
                    className="text-neutral-500"
                  >
                    {featuredArticle.date}
                  </Typography>
                </div>

                <Typography
                  as="h2"
                  variant="newsHeadline"
                  className="text-gray-950"
                >
                  {featuredArticle.titleLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </Typography>

                <Link
                  href={featuredArticle.href}
                  className="mt-1 inline-flex h-11 items-center gap-2 rounded-xl border border-orange-500 bg-white px-5 text-orange-600 transition-colors hover:bg-orange-50"
                >
                  <Typography
                    as="span"
                    variant="buttonSmall"
                    className="text-orange-600"
                  >
                    {featuredArticle.buttonText}
                  </Typography>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>

            <div className="mt-12 grid grid-cols-1 gap-8 sm:mt-14 sm:grid-cols-2 sm:gap-6 lg:mt-16 lg:grid-cols-3 lg:gap-8">
              {newsItems.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  className="group flex flex-col gap-4"
                >
                  <div className="relative aspect-[16/11] w-full overflow-hidden rounded-2xl bg-neutral-200 sm:rounded-3xl">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2 text-neutral-500">
                      <CalendarDays
                        className="h-3.5 w-3.5 shrink-0"
                        strokeWidth={1.75}
                      />
                      <Typography
                        as="span"
                        variant="bodyText2"
                        className="text-neutral-500"
                      >
                        {item.date}
                      </Typography>
                    </div>

                    <Typography
                      as="h3"
                      variant="headline3"
                      className="leading-snug text-gray-950 transition-colors group-hover:text-orange-700"
                    >
                      {item.title}
                    </Typography>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-10 flex justify-end sm:mt-12">
              <ViewAllLink href="/media">View All News</ViewAllLink>
            </div>
          </div>
        </div>

        {/* Transparent gap — sticky image stays visible while scrolling through here */}
        <div
          className="h-[42vh] min-h-[240px] w-full sm:h-[48vh] md:min-h-[320px]"
          aria-hidden
        />

        {/* Next cream panel — rounded top; sticky image shows in the corner cutouts */}
        <div className="rounded-tl-[48px] rounded-tr-[48px] bg-[#FAF8F5] px-6 py-16 sm:rounded-tl-[64px] sm:rounded-tr-[64px] sm:px-8 sm:py-20 md:rounded-tl-[80px] md:rounded-tr-[80px] md:px-[calc((100vw-1280px)/2+24px)] md:py-24 lg:rounded-tl-[100px] lg:rounded-tr-[100px]">
          <div className="mx-auto w-full max-w-7xl">
            <SectionHeading className="mb-8 md:mb-10">
              About Juna Akhada
            </SectionHeading>

            <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-3xl bg-neutral-200 sm:rounded-[28px]">
                <Image
                  src={STICKY_BG}
                  alt="Juna Akhada"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              <div className="flex flex-col items-start gap-5">
                <Typography
                  as="h2"
                  variant="sectionTitleTight"
                  className="text-gray-950"
                >
                  The ancient order of Sanatan Dharma
                </Typography>
                <Typography
                  as="p"
                  variant="bodyRelaxed"
                  className="max-w-xl text-neutral-600"
                >
                  Juna Akhada is one of the oldest and most revered monastic
                  orders in Sanatan Dharma — a living tradition of discipline,
                  devotion, and service.
                </Typography>
                <Link
                  href="/juna-akhada"
                  className="inline-flex h-11 items-center gap-2 rounded-xl border border-orange-500 bg-white px-5 text-orange-600 transition-colors hover:bg-orange-50"
                >
                  <Typography
                    as="span"
                    variant="buttonSmall"
                    className="text-orange-600"
                  >
                    Learn More
                  </Typography>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
