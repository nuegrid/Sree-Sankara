"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {
  Sparkles,
  HeartHandshake,
  GraduationCap,
  Sprout,
  HeartPulse,
  BookOpen,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import Typography from "@/components/ui/Typography";

gsap.registerPlugin(ScrollTrigger);

const INITIATIVE_IDS = [
  { id: "spiritual", Icon: Sparkles },
  { id: "social", Icon: HeartHandshake },
  { id: "youth", Icon: GraduationCap },
  { id: "environment", Icon: Sprout },
  { id: "ayurveda", Icon: HeartPulse },
  { id: "knowledge", Icon: BookOpen },
] as const;

/**
 * Editorial 3×2 initiatives grid — left rail borders, no cards.
 */
export default function InitiativesGrid() {
  const { t } = useTranslation();
  const gridRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const items = gridRef.current?.querySelectorAll("[data-initiative-item]");
      if (!items?.length) return;

      gsap.fromTo(
        items,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 85%",
            once: true,
          },
        }
      );
    },
    { scope: gridRef }
  );

  return (
    <div
      ref={gridRef}
      className="mt-10 grid grid-cols-1 gap-x-10 gap-y-14 sm:mt-12 sm:grid-cols-2 sm:gap-x-12 sm:gap-y-16 lg:mt-14 lg:grid-cols-3 lg:gap-x-14 lg:gap-y-[72px]"
    >
      {INITIATIVE_IDS.map(({ id, Icon }) => (
        <article
          key={id}
          data-initiative-item
          className="relative min-h-0 border-l-2 border-black/15 py-4 pl-5 sm:py-5 sm:pl-6 lg:min-h-[220px] lg:py-6 lg:pl-7"
        >
          <Icon
            className="h-8 w-8 text-[#FE3E02] sm:h-9 sm:w-9"
            strokeWidth={1.5}
            aria-hidden
          />
          <Typography
            as="h3"
            variant="initiativeTitle"
            className="mt-6 max-w-[320px] text-black sm:mt-7"
          >
            {t(`junaAkhada.initiatives.${id}.title`)}
          </Typography>
          <Typography
            as="p"
            variant="initiativeBody"
            className="mt-2.5 max-w-[400px] text-[#A4A4A4] sm:mt-3"
          >
            {t(`junaAkhada.initiatives.${id}.description`)}
          </Typography>
        </article>
      ))}
    </div>
  );
}
