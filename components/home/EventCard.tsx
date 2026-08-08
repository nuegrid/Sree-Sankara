"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import { CalendarDays, MapPin, ArrowRight } from "lucide-react";
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
  onClick: () => void;
};

export default function EventCard({
  event,
  active,
  onClick,
}: Props) {
  const cardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    // Desktop
    mm.add("(min-width: 1024px)", () => {
      gsap.to(cardRef.current, {
        width: active ? 640 : 200,
        height: 420,
        duration: 0.6,
        ease: "power3.inOut",
      });
    });

    // Tablet
    mm.add("(min-width: 768px) and (max-width: 1023px)", () => {
      gsap.to(cardRef.current, {
        width: active ? "65%" : 180,
        height: 420,
        duration: 0.6,
        ease: "power3.inOut",
      });
    });

    // Mobile
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
        {
          opacity: 0,
          y: 15,
        },
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
      onClick={onClick}
      className={`relative flex-shrink-0 snap-start cursor-pointer overflow-hidden rounded-[28px] ${
        active
          ? "w-[calc(100vw-80px)] md:w-[65%] lg:w-[640px] h-[380px] md:h-[420px]"
          : "w-[100px] md:w-[180px] lg:w-[200px] h-[380px] md:h-[420px]"
      }`}
      style={{
        willChange: "width, transform",
      }}
    >
      {/* Image */}
      <div
        ref={imageRef}
        className="absolute inset-0"
      >
        <Image
          src={event.image}
          alt={event.title}
          fill
          className="object-cover"
          priority={active}
        />
      </div>

      {/* Content — keep mounted to avoid DOM removeChild conflicts during GSAP pin */}
      <div
        ref={contentRef}
        className={`absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 rounded-[22px] bg-[#242424] px-5 py-5 sm:rounded-[24px] sm:px-6 sm:py-5 text-white shadow-xl ${
          active ? "visible" : "invisible pointer-events-none"
        }`}
      >
        <div className="grid grid-cols-[1fr_auto] items-start gap-x-4 gap-y-3">
          <Typography
            as="h2"
            variant="cardTitle"
            className="min-w-0 truncate text-white"
          >
            {event.title}
          </Typography>

          <div className="col-start-1 flex min-w-0 flex-col gap-1.5 text-[#b0b0b0]">
            <div className="flex items-center gap-2">
              <CalendarDays className="h-[18px] w-[18px] shrink-0 text-[#b0b0b0] sm:h-5 sm:w-5" />
              <Typography as="span" variant="cardMeta" className="truncate">
                {event.date}
              </Typography>
            </div>

            <div className="flex items-center gap-2">
              <MapPin className="h-[18px] w-[18px] shrink-0 text-[#b0b0b0] sm:h-5 sm:w-5" />
              <Typography as="span" variant="cardMeta" className="truncate">
                {event.location}
              </Typography>
            </div>
          </div>

          <button
            type="button"
            className="col-start-2 row-start-2 flex h-[42px] w-[116px] shrink-0 items-center justify-center gap-1.5 self-center rounded-lg border border-[#f4510b] bg-transparent text-[#f4510b] transition-colors hover:bg-[#f4510b]/10"
          >
            <Typography as="span" variant="buttonSmall">
              Learn More
            </Typography>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}