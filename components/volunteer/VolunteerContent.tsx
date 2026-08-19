"use client";

import Image from "next/image";
import { Sparkles, HeartHandshake, Sprout, type LucideIcon } from "lucide-react";
import { useTranslation } from "react-i18next";
import Typography from "@/components/ui/Typography";
import { PAGE_CONTAINER } from "@/lib/layout";
import { cn } from "@/lib/utils";
import VolunteerForm from "./VolunteerForm";

const VOLUNTEER_IMAGE = "/images/Volunteer/img.png";

const SEVA_AREAS: { id: "spiritual" | "community" | "environment"; Icon: LucideIcon }[] = [
  { id: "spiritual", Icon: Sparkles },
  { id: "community", Icon: HeartHandshake },
  { id: "environment", Icon: Sprout },
];

/**
 * Volunteer page — hero, seva areas, and application form.
 */
export default function VolunteerContent() {
  const { t } = useTranslation();

  return (
    <main className="w-full bg-[#FAF8F5]">
      <div className={cn(PAGE_CONTAINER, "pb-16 pt-10 sm:pb-20 sm:pt-12 md:pb-24")}>
        <section className="flex w-full flex-col items-start text-left">
          <Typography as="h1" variant="aboutTitle" className="text-black">
            {t("volunteer.pageTitle")}
          </Typography>
          <Typography
            as="p"
            variant="aboutBody"
            className="mt-5 w-full text-left text-[#777777] sm:mt-6"
          >
            {t("volunteer.intro")}
          </Typography>
        </section>

        <div className="relative mt-8 aspect-[21/9] w-full overflow-hidden rounded-2xl sm:mt-10 sm:aspect-[2.4/1] sm:rounded-3xl md:aspect-[2.6/1]">
          <Image
            src={VOLUNTEER_IMAGE}
            alt={t("volunteer.imageAlt")}
            fill
            priority
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, (max-width: 1400px) 90vw, 1280px"
          />
        </div>

        <section className="mt-12 sm:mt-14 md:mt-16">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-0">
            {SEVA_AREAS.map(({ id, Icon }, index) => (
              <article
                key={id}
                className={cn(
                  "flex flex-col md:px-8 lg:px-10",
                  index > 0 && "md:border-l md:border-black/15",
                  index === 0 && "md:pl-0",
                  index === SEVA_AREAS.length - 1 && "md:pr-0"
                )}
              >
                <Icon
                  className="h-8 w-8 text-[#FE3E02] sm:h-9 sm:w-9"
                  strokeWidth={1.5}
                  aria-hidden
                />
                <Typography
                  as="h2"
                  variant="initiativeTitle"
                  className="mt-5 text-black sm:mt-6"
                >
                  {t(`volunteer.areas.${id}.title`)}
                </Typography>
                <Typography
                  as="p"
                  variant="initiativeBody"
                  className="mt-2.5 max-w-[360px] text-[#A4A4A4] sm:mt-3"
                >
                  {t(`volunteer.areas.${id}.description`)}
                </Typography>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-14 grid grid-cols-1 gap-10 sm:mt-16 lg:mt-20 lg:grid-cols-2 lg:gap-14 lg:items-start">
          <div className="flex flex-col gap-4 sm:gap-5">
            <Typography as="h2" variant="aboutTitle" className="text-black">
              {t("volunteer.joinTitle")}
            </Typography>
            <Typography
              as="p"
              variant="aboutBody"
              className="max-w-md text-[#777777]"
            >
              {t("volunteer.joinBody")}
            </Typography>
          </div>
          <VolunteerForm />
        </section>
      </div>
    </main>
  );
}
