"use client";

import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import HorizontalGallery from "./HorizontalGallery";
import { Timeline } from "@/components/ui/timeline";
import Typography from "@/components/ui/Typography";

const JOURNEY_STEPS = [
  { id: "studentLeader", image: "/images/home/journey/b.png" },
  { id: "awakening", image: "/images/home/journey/a.png" },
  { id: "discipline", image: "/images/home/journey/c.png" },
  { id: "mahamandaleshwar", image: "/images/home/journey/d.png" },
] as const;

type JourneyTimelineProps = {
  /** Desktop gallery scroll progress from parent (0 = first card frozen) */
  galleryProgress?: number;
};

export default function JourneyTimeline({
  galleryProgress,
}: JourneyTimelineProps) {
  const { t } = useTranslation();
  const [isDesktop, setIsDesktop] = useState<boolean | null>(null);

  useEffect(() => {
    const checkSize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    checkSize();
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  if (isDesktop === null) {
    return <div className="min-h-[100svh] w-full bg-black" />;
  }

  const timelineData = JOURNEY_STEPS.map((step) => ({
    title: t(`home.journey.${step.id}.title`),
    content: (
      <div className="flex flex-col gap-3">
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-neutral-800 bg-[#171717]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={step.image}
            alt={t(`home.journey.${step.id}.title`)}
            className="h-full w-full object-cover"
          />
        </div>
        <Typography as="p" variant="cardDescription" className="text-[#a3a3a3]">
          {t(`home.journey.${step.id}.description`)}
        </Typography>
      </div>
    ),
  }));

  return isDesktop ? (
    <div className="h-full min-h-0 w-full">
      <HorizontalGallery progress={galleryProgress} />
    </div>
  ) : (
    <Timeline data={timelineData} />
  );
}
