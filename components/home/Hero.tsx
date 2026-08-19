"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";
import Typography from "@/components/ui/Typography";

const HERO_IMAGE = "/images/home/hero/BG 1.jpeg";

export default function Hero() {
  const { t } = useTranslation();
  return (
    <section className="pointer-events-none sticky top-0 z-0 -mt-[3.75rem] flex h-screen w-full flex-col items-center overflow-hidden sm:-mt-16">
      <Image
        src={HERO_IMAGE}
        alt=""
        fill
        priority
        className="pointer-events-none absolute inset-0 z-0 object-cover object-center max-md:-translate-y-[18%] md:translate-y-0"
        sizes="100vw"
        aria-hidden
      />

      <div className="relative z-20 mx-auto flex max-w-5xl flex-col items-center px-4 pt-16 text-center sm:pt-20 md:pt-24">
        <Typography
          as="h4"
          variant="heroTitle"
          className="max-w-5xl text-gray-950 [.lang-ml_&]:text-base sm:[.lang-ml_&]:text-lg md:[.lang-ml_&]:text-xl lg:[.lang-ml_&]:text-[26px] xl:[.lang-ml_&]:text-[30px]"
        >
          <span className="block whitespace-nowrap">{t("home.heroLine1")}</span>
          <span className="block whitespace-nowrap">{t("home.heroLine2")}</span>
        </Typography>
      </div>
    </section>
  );
}
