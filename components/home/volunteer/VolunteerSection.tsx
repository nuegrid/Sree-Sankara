"use client";

import { useTranslation } from "react-i18next";
import VolunteerCard from "@/components/cards/VolunteerCard";

const VOLUNTEER_IMAGE = "/images/home/volunteer_card/volunteercard.png";

/**
 * Homepage volunteer CTA section — compact centered card (~80–82vw).
 */
export default function VolunteerSection() {
  const { t } = useTranslation();
  return (
    <section className="relative z-20 w-full bg-[#FAF8F5] px-4 py-10 sm:px-6 sm:py-12 md:py-14">
      <div className="mx-auto w-full min-w-0 max-w-[1280px] px-0 sm:w-[88%] md:w-[85%]">
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
  );
}
