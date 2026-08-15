"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";
import Typography from "@/components/ui/Typography";
import VolunteerCard from "@/components/cards/VolunteerCard";
import InitiativesGrid from "@/components/juna-akhada/InitiativesGrid";
import { PAGE_CONTAINER } from "@/lib/layout";
import { cn } from "@/lib/utils";

const HERO_IMAGE = "/images/Juna_Akhada/juna_akhanda.png.png";
const VOLUNTEER_IMAGE = "/images/home/volunteer_card/volunteercard.png";

/**
 * Juna Akhada page body — legacy story, initiatives, volunteer CTA.
 */
export default function JunaAkhadaContent() {
  const { t } = useTranslation();

  return (
    <main className="w-full bg-[#FAF8F5]">
      <div className={cn(PAGE_CONTAINER, "pb-10 pt-8 sm:pb-12 sm:pt-10 md:pb-14 md:pt-12")}>
        <Typography as="h1" variant="aboutTitle" className="max-w-[728px] text-black">
          {t("junaAkhada.pageTitle")}
        </Typography>

        <Typography
          as="p"
          variant="aboutBody"
          className="mt-6 max-w-[1369px] text-justify text-[#777777] sm:mt-8"
        >
          {t("junaAkhada.intro")}
        </Typography>

        <div className="relative mt-8 aspect-[2/1] w-full overflow-hidden rounded-2xl sm:mt-10 sm:rounded-3xl">
          <Image
            src={HERO_IMAGE}
            alt={t("junaAkhada.imageAlt")}
            fill
            priority
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, (max-width: 1400px) 90vw, 1280px"
          />
        </div>

        <section className="mt-10 sm:mt-12 md:mt-14">
          <Typography as="h2" variant="aboutTitle" className="text-black">
            {t("junaAkhada.legacyTitle")}
          </Typography>
          <Typography
            as="p"
            variant="aboutBody"
            className="mt-5 max-w-[1373px] text-[#777777] sm:mt-6"
          >
            {t("junaAkhada.legacyBody")}
          </Typography>
        </section>

        <section className="mt-10 sm:mt-12 md:mt-14">
          <Typography as="h2" variant="aboutTitle" className="text-black">
            {t("junaAkhada.kumbhTitle")}
          </Typography>
          <Typography
            as="p"
            variant="aboutBody"
            className="mt-5 max-w-[1373px] text-[#777777] sm:mt-6"
          >
            {t("junaAkhada.kumbhBody")}
          </Typography>
        </section>

        <section className="mt-10 sm:mt-12 md:mt-14">
          <Typography as="h2" variant="aboutTitle" className="text-black">
            {t("junaAkhada.swamijiTitle")}
          </Typography>
          <div className="mt-5 max-w-[1373px] space-y-4 sm:mt-6">
            <Typography as="p" variant="aboutBody" className="text-[#777777]">
              {t("junaAkhada.swamijiP1")}
            </Typography>
            <Typography as="p" variant="aboutBody" className="text-[#777777]">
              {t("junaAkhada.swamijiP2")}
            </Typography>
          </div>
        </section>

        <section className="mt-12 sm:mt-14 md:mt-16">
          <Typography as="h2" variant="aboutTitle" className="text-black">
            {t("junaAkhada.initiativesTitle")}
          </Typography>
          <InitiativesGrid />
        </section>
      </div>

      <section className="w-full bg-[#FAF8F5] px-4 pb-14 pt-6 sm:px-6 sm:pb-16 md:pb-20">
        <div className="mx-auto w-[90%] max-w-[1280px] min-w-0 sm:w-[88%] md:w-[85%]">
          <VolunteerCard
            image={VOLUNTEER_IMAGE}
            eyebrow={t("home.volunteerEyebrow")}
            title={t("home.volunteerTitle")}
            description={t("home.volunteerBody")}
            buttonText={t("home.volunteerCta")}
            href="/volunteer"
            imageAlt={t("home.volunteerImageAlt")}
          />
        </div>
      </section>
    </main>
  );
}
