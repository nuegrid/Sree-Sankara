"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { CalendarDays, MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";
import Typography from "@/components/ui/Typography";

type Props = {
  event: {
    id: number;
    title: string;
    image: string;
    location: string;
    date: string;
  };
  active: boolean;
  onActivate: () => void;
};

export default function EventCard({ event, active, onActivate }: Props) {
  const { t } = useTranslation();
  const title = t(`events.items.${event.id}.title`);
  const date = t(`events.items.${event.id}.date`);
  const location = t(`events.items.${event.id}.location`);
  const cardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      gsap.to(cardRef.current, {
        width: active ? 640 : 200,
        height: 420,
        duration: 0.6,
        ease: "power3.inOut",
      });
    });

    mm.add("(min-width: 768px) and (max-width: 1023px)", () => {
      gsap.to(cardRef.current, {
        width: active ? "65%" : 180,
        height: 420,
        duration: 0.6,
        ease: "power3.inOut",
      });
    });

    mm.add("(max-width: 767px)", () => {
      gsap.to(cardRef.current, {
        width: active ? "calc(100vw - 80px)" : 100,
        height: 380,
        duration: 0.6,
        ease: "power3.inOut",
      });
    });

    gsap.to(imageRef.current, {
      scale: active ? 1.08 : 1,
      duration: 0.6,
      ease: "power3.out",
    });

    if (active && contentRef.current) {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 15 },
        {
          opacity: 1,
          y: 0,
          duration: 0.45,
          delay: 0.1,
          ease: "power2.out",
        }
      );
    }

    return () => mm.revert();
  }, [active]);

  return (
    <div
      ref={cardRef}
      onClick={onActivate}
      onMouseEnter={onActivate}
      className={`relative flex-shrink-0 snap-start cursor-pointer overflow-hidden rounded-[28px] bg-neutral-200 ${
        active
          ? "h-[380px] w-[calc(100vw-80px)] md:h-[420px] md:w-[65%] lg:w-[640px]"
          : "h-[380px] w-[100px] md:h-[420px] md:w-[180px] lg:w-[200px]"
      }`}
      style={{ willChange: "width, transform" }}
    >
      <div ref={imageRef} className="absolute inset-0 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={event.image}
          alt={title}
          className="h-full w-full object-cover"
          draggable={false}
        />
      </div>

      <div
        ref={contentRef}
        className={`absolute bottom-3 left-3 right-3 rounded-[22px] bg-[#691E00] px-5 py-5 text-white shadow-xl sm:bottom-4 sm:left-4 sm:right-4 sm:rounded-[24px] sm:px-6 sm:py-5 ${
          active ? "visible" : "invisible pointer-events-none"
        }`}
      >
        <div className="flex flex-col gap-3">
          <Typography
            as="h2"
            variant="cardTitle"
            className="min-w-0 truncate text-white"
          >
            {title}
          </Typography>

          <div className="flex min-w-0 flex-col gap-1.5 text-[#b0b0b0]">
            <div className="flex items-center gap-2">
              <CalendarDays className="h-[18px] w-[18px] shrink-0 text-[#b0b0b0] sm:h-5 sm:w-5" />
              <Typography as="span" variant="cardMeta" className="truncate">
                {date}
              </Typography>
            </div>

            <div className="flex items-center gap-2">
              <MapPin className="h-[18px] w-[18px] shrink-0 text-[#b0b0b0] sm:h-5 sm:w-5" />
              <Typography as="span" variant="cardMeta" className="truncate">
                {location}
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
