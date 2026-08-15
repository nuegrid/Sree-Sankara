"use client";

import {
  Award,
  Flower2,
  GraduationCap,
  Home,
  MapPin,
  Newspaper,
  Sparkles,
  Users,
  type LucideIcon,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import Typography from "@/components/ui/Typography";
import { cn } from "@/lib/utils";
import { JOURNEY_STEP_IDS } from "./data";

const journeyIcons: LucideIcon[] = [
  Home,
  GraduationCap,
  Users,
  Newspaper,
  Sparkles,
  Flower2,
  Award,
  MapPin,
];

/**
 * Alternating vertical timeline for Swamiji's life stages.
 */
export default function AboutJourney() {
  const { t, i18n } = useTranslation();

  return (
    <section className="mt-16 border-t border-stone-200/80 pt-12 sm:mt-20 sm:pt-16">
      <Typography as="h2" variant="aboutTitle" className="text-black">
        {t("about.journeyTitle")}
      </Typography>

      <ol className="relative mt-10 sm:mt-12">
        <div
          className="absolute top-4 bottom-4 left-5 w-px bg-stone-200 md:left-1/2 md:-translate-x-1/2"
          aria-hidden
        />

        {JOURNEY_STEP_IDS.map((id, index) => {
          const Icon = journeyIcons[index];
          const isLeft = index % 2 === 0;
          const placeKey = `about.journey.${id}.place`;

          return (
            <li
              key={id}
              className="relative pb-8 pl-14 last:pb-0 md:grid md:grid-cols-2 md:gap-x-16 md:pb-12 md:pl-0"
            >
              <span className="absolute top-0 left-0 z-10 flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#FE3E02] bg-white text-[#FE3E02] md:left-1/2 md:-translate-x-1/2">
                <Icon className="h-4 w-4" strokeWidth={1.75} aria-hidden />
              </span>

              <article
                className={cn(
                  "rounded-2xl border border-stone-200/80 bg-white px-5 py-5 shadow-xs sm:px-6 sm:py-6",
                  isLeft ? "md:col-start-1" : "md:col-start-2"
                )}
              >
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <Typography
                    as="span"
                    variant="sectionLabelSm"
                    className="text-[#FE3E02]"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </Typography>
                  <Typography
                    as="h3"
                    variant="initiativeTitle"
                    className="text-black"
                  >
                    {t(`about.journey.${id}.title`)}
                  </Typography>
                </div>
                {i18n.exists(placeKey) ? (
                  <Typography
                    as="p"
                    variant="sectionLabelSm"
                    className="mt-2 text-[#FE3E02]"
                  >
                    {t(placeKey)}
                  </Typography>
                ) : null}
                <Typography
                  as="p"
                  variant="initiativeBody"
                  className="mt-2 text-[#777777]"
                >
                  {t(`about.journey.${id}.description`)}
                </Typography>
              </article>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
