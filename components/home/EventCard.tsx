"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import { CalendarDays, MapPin, ArrowRight } from "lucide-react";

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
        className={`absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 rounded-[24px] bg-[#121212]/80 backdrop-blur-md border border-white/10 px-5 py-4 sm:px-8 sm:py-5 text-white shadow-2xl ${
          active ? "visible" : "invisible pointer-events-none"
        }`}
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex-1 min-w-0">
            <h2 className="text-lg sm:text-2xl font-medium leading-snug tracking-tight truncate">
              {event.title}
            </h2>

            <div className="mt-2.5 flex flex-wrap gap-x-4 gap-y-1.5 text-xs sm:text-sm text-gray-300">
              <div className="flex items-center gap-1.5">
                <CalendarDays className="w-4 h-4 text-orange-500" />
                <span>{event.date}</span>
              </div>

              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-orange-500" />
                <span>{event.location}</span>
              </div>
            </div>
          </div>

          <button className="flex items-center justify-center gap-2 rounded-xl border border-orange-500 px-6 py-3 text-sm font-medium text-orange-500 transition-all hover:bg-orange-500 hover:text-white">
            Learn More
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}