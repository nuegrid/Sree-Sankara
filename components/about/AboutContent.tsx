"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";
import Typography from "@/components/ui/Typography";
import { PAGE_CONTAINER } from "@/lib/layout";
import { cn } from "@/lib/utils";
import { TEACHING_IDS } from "./data";
import AboutJourney from "./AboutJourney";
import AboutPrinciples from "./AboutPrinciples";

const ABOUT_IMAGE = "/images/about/img1.jpg";

/**
 * About page — editorial layout with clear section rhythm.
 */
export default function AboutContent() {
  const { t } = useTranslation();
  return (
    <main className="w-full bg-[#FAF8F5]">
      <div
        className={cn(
          PAGE_CONTAINER,
          "pb-16 pt-8 sm:pb-20 sm:pt-10 md:pb-24 md:pt-12"
        )}
      >
        {/* Intro */}
        <header>
          <Typography
            as="span"
            variant="sectionLabel"
            className="text-[#FE3E02]"
          >
            {t("about.label")}
          </Typography>
          <Typography
            as="h1"
            variant="aboutTitle"
            className="mt-3 text-black sm:mt-4"
          >
            {t("about.pageTitle")}
          </Typography>
          <div className="mt-6 space-y-4 sm:mt-8">
            <Typography as="p" variant="aboutBody" className="text-[#777777]">
              {t("about.intro1")}
            </Typography>
            <Typography as="p" variant="aboutBody" className="text-[#777777]">
              {t("about.intro2")}
            </Typography>
          </div>
        </header>

        <div className="relative mt-10 aspect-[2/1] w-full overflow-hidden rounded-2xl sm:mt-12 sm:rounded-3xl">
          <Image
            src={ABOUT_IMAGE}
            alt={t("about.imageAlt")}
            fill
            priority
            className="object-cover object-[center_58%]"
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1152px"
          />
        </div>

        <div className="mt-10 space-y-4 sm:mt-12">
          <Typography as="p" variant="aboutBody" className="text-[#777777]">
            {t("about.bio1")}
          </Typography>
          <Typography as="p" variant="aboutBody" className="text-[#777777]">
            {t("about.bio2")}
          </Typography>
          <Typography as="p" variant="aboutBody" className="text-[#777777]">
            {t("about.bio3")}
          </Typography>
        </div>

        {/* Transformation */}
        <section className="mt-16 border-t border-stone-200/80 pt-12 sm:mt-20 sm:pt-16">
          <Typography as="h2" variant="aboutTitle" className="text-black">
            {t("about.transformationTitle")}
          </Typography>
          <Typography
            as="p"
            variant="aboutPillarTitle"
            className="mt-4 text-black"
          >
            {t("about.transformationSubtitle")}
          </Typography>
          <div className="mt-5 space-y-4">
            <Typography as="p" variant="aboutBody" className="text-[#777777]">
              {t("about.transformationP1")}
            </Typography>
            <Typography as="p" variant="aboutBody" className="text-[#777777]">
              {t("about.transformationP2")}
            </Typography>
          </div>
        </section>

        <AboutJourney />

        <AboutPrinciples />

        {/* Teachings */}
        <section className="mt-16 border-t border-stone-200/80 pt-12 sm:mt-20 sm:pt-16">
          <Typography as="h2" variant="aboutTitle" className="text-black">
            {t("about.teachingsTitle")}
          </Typography>
          <div className="mt-8 grid grid-cols-1 gap-8 sm:mt-10 sm:grid-cols-2 lg:gap-x-14 lg:gap-y-12">
            {TEACHING_IDS.map((id) => (
              <article
                key={id}
                className="border-l-2 border-[#FE3E02]/40 pl-5"
              >
                <Typography
                  as="h3"
                  variant="aboutPillarTitle"
                  className="text-black"
                >
                  {t(`about.teachings.${id}.title`)}
                </Typography>
                <Typography
                  as="p"
                  variant="aboutBody"
                  className="mt-2 text-[#777777]"
                >
                  {t(`about.teachings.${id}.description`)}
                </Typography>
              </article>
            ))}
          </div>
        </section>

        {/* Closing */}
        <section className="mt-16 border-t border-stone-200/80 pt-12 sm:mt-20 sm:pt-16">
          <div>
            <Typography as="h2" variant="aboutTitle" className="text-black">
              {t("about.closingTitle")}
            </Typography>
            <Typography
              as="p"
              variant="aboutBody"
              className="mt-5 text-[#777777] sm:mt-6"
            >
              {t("about.closingBody")}
            </Typography>
          </div>
        </section>
      </div>
    </main>
  );
}
