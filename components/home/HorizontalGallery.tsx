"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Typography from "@/components/ui/Typography";

const cards = [
  {
    title: "Student Leader",
    description:
      "Born in Chalakudy, Kerala, Swami Anandavanam Bharathi (formerly P. Salil) pursued Political Science and became an active student leader, developing strong leadership skills and a commitment to public service.",
    image: "/images/journey/a.png",
  },
  {
    title: "A Spiritual Awakening",
    description:
      "In 2001, a life-changing visit to the Kumbh Mela sparked a profound transformation. Time spent on the banks of the Ganga inspired Sanatan Dharma and inner realization.",
    image: "/images/journey/b.png",
  },
  {
    title: "Path of Devotion",
    description:
      "Embracing a life of deep meditation and spiritual practice, dedicating every moment to the pursuit of higher consciousness and divine connection.",
    image: "/images/journey/c.png",
  },
  {
    title: "Guiding the Light",
    description:
      "Now traveling and sharing wisdom, helping seekers discover their inner potential and peace in the modern world.",
    image: "/images/journey/d.png",
  },
];

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type HorizontalGalleryProps = {
  /**
   * When provided (0–1), parent owns scroll sequencing — no local ScrollTrigger.
   * Gallery stays frozen at first card while progress is 0.
   */
  progress?: number;
};

export default function HorizontalGallery({
  progress,
}: HorizontalGalleryProps) {
  const container = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const bgLineRef = useRef<HTMLDivElement>(null);
  const progressLineRef = useRef<HTMLDivElement>(null);
  const controlled = progress !== undefined;

  /** Same scroll-distance math as Upcoming Programs EventCarousel */
  const getScrollDistance = () => {
    const wrapper = wrapperRef.current;
    const clip = wrapper?.parentElement;
    if (!wrapper || !clip) return 0;
    const paddingLeft =
      parseFloat(window.getComputedStyle(clip).paddingLeft) || 0;
    return Math.max(0, wrapper.scrollWidth - clip.clientWidth + paddingLeft);
  };

  const applyProgress = (p: number) => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const cardsElements = wrapper.querySelectorAll(".timeline-card");
    const dotsElements = wrapper.querySelectorAll(".timeline-dot");
    if (cardsElements.length === 0) return;

    const offsets = Array.from(cardsElements).map(
      (el) => (el as HTMLElement).offsetLeft
    );
    const firstOffset = offsets[0] || 0;
    const lastOffset = offsets[offsets.length - 1] || 0;
    const totalDistance = Math.max(0, lastOffset - firstOffset);
    const maxX = getScrollDistance();
    const clamped = Math.min(1, Math.max(0, p));

    gsap.set(wrapper, { x: -maxX * clamped, force3D: true });

    if (progressLineRef.current) {
      gsap.set(progressLineRef.current, {
        left: firstOffset,
        width: clamped * totalDistance,
      });
    }

    dotsElements.forEach((dot, index) => {
      if (index === 0) {
        gsap.set(dot, {
          borderColor: "#ea580c",
          backgroundColor: "#ea580c",
          scale: 1.25,
          boxShadow: "0 0 12px rgba(234, 88, 12, 0.8)",
        });
        return;
      }

      const dotOffset = offsets[index] - firstOffset;
      const fraction =
        totalDistance > 0 ? dotOffset / totalDistance : 1;

      if (clamped >= fraction * 0.98) {
        gsap.set(dot, {
          borderColor: "#ea580c",
          backgroundColor: "#ea580c",
          scale: 1.25,
          boxShadow: "0 0 12px rgba(234, 88, 12, 0.8)",
        });
      } else {
        gsap.set(dot, {
          borderColor: "#404040",
          backgroundColor: "#171717",
          scale: 1.0,
          boxShadow: "none",
        });
      }
    });
  };

  // Controlled mode — parent drives progress; no ScrollTrigger
  useEffect(() => {
    if (!controlled || !wrapperRef.current) return;

    const cardsElements = wrapperRef.current.querySelectorAll(".timeline-card");
    const offsets = Array.from(cardsElements).map(
      (el) => (el as HTMLElement).offsetLeft
    );
    const firstOffset = offsets[0] || 0;
    const lastOffset = offsets[offsets.length - 1] || 0;
    const totalWidth = lastOffset - firstOffset;

    gsap.set(bgLineRef.current, { left: firstOffset, width: totalWidth });
    applyProgress(progress ?? 0);
  }, [controlled, progress]);

  // Autonomous mode — original ScrollTrigger (when not controlled by parent)
  useGSAP(
    () => {
      if (controlled) return;
      if (!wrapperRef.current) return;

      const cardsElements = wrapperRef.current.querySelectorAll(".timeline-card");
      const dotsElements = wrapperRef.current.querySelectorAll(".timeline-dot");
      if (cardsElements.length === 0) return;

      const getOffsets = () =>
        Array.from(cardsElements).map((el) => (el as HTMLElement).offsetLeft);

      const setupTimeline = () => {
        const offsets = getOffsets();
        const firstOffset = offsets[0] || 0;
        const lastOffset = offsets[offsets.length - 1] || 0;
        const totalWidth = lastOffset - firstOffset;

        gsap.set(bgLineRef.current, {
          left: firstOffset,
          width: totalWidth,
        });

        gsap.set(progressLineRef.current, {
          left: firstOffset,
          width: 0,
        });
      };

      setupTimeline();

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          pin: true,
          scrub: 0.5,
          invalidateOnRefresh: true,
          end: () => "+=" + wrapperRef.current!.scrollWidth,
          onRefresh: () => {
            setupTimeline();
          },
          onUpdate: (self) => {
            const prog = self.progress;
            const offsets = getOffsets();
            const firstOffset = offsets[0] || 0;
            const lastOffset = offsets[offsets.length - 1] || 0;
            const totalDistance = lastOffset - firstOffset;

            if (totalDistance <= 0) return;

            gsap.to(progressLineRef.current, {
              width: prog * totalDistance,
              duration: 0.1,
              ease: "none",
              overwrite: "auto",
            });

            dotsElements.forEach((dot, index) => {
              if (index === 0) {
                gsap.to(dot, {
                  borderColor: "#ea580c",
                  backgroundColor: "#ea580c",
                  scale: 1.25,
                  boxShadow: "0 0 12px rgba(234, 88, 12, 0.8)",
                  duration: 0.1,
                  overwrite: "auto",
                });
                return;
              }

              const dotOffset = offsets[index] - firstOffset;
              const dotProgressFraction = dotOffset / totalDistance;

              if (prog >= dotProgressFraction * 0.98) {
                gsap.to(dot, {
                  borderColor: "#ea580c",
                  backgroundColor: "#ea580c",
                  scale: 1.25,
                  boxShadow: "0 0 12px rgba(234, 88, 12, 0.8)",
                  duration: 0.15,
                  overwrite: "auto",
                });
              } else {
                gsap.to(dot, {
                  borderColor: "#404040",
                  backgroundColor: "#171717",
                  scale: 1.0,
                  boxShadow: "none",
                  duration: 0.15,
                  overwrite: "auto",
                });
              }
            });
          },
        },
      });

      tl.to(
        wrapperRef.current,
        {
          x: () => -getScrollDistance(),
          ease: "none",
        },
        0
      );

      const timer = setTimeout(() => {
        ScrollTrigger.refresh();
      }, 100);

      return () => {
        clearTimeout(timer);
      };
    },
    { scope: container, dependencies: [controlled] }
  );

  return (
    <section
      ref={container}
      className="relative flex h-full min-h-screen flex-col justify-center overflow-hidden bg-black"
    >
      {/* Same page grid as Upcoming Programs (max-w-7xl / 1280px gutters) */}
      <div className="w-full translate-y-5 py-12 md:translate-y-7 md:py-14">
        <header className="relative z-20 mx-auto mb-8 w-full max-w-7xl shrink-0 px-6 md:mb-9">
          <Typography
            as="span"
            variant="sectionLabelSm"
            className="text-orange-600"
          >
            Swami&apos;s Spiritual Journey
          </Typography>
          <Typography
            as="h2"
            variant="galleryTitle"
            className="mt-1.5 max-w-sm text-white md:max-w-md"
          >
            A Life Dedicated to
            <br />
            Dharma
          </Typography>
        </header>

        {/* Same horizontal padding + end spacer as EventCarousel cards */}
        <div className="relative overflow-hidden px-6 md:px-[calc((100vw-1280px)/2+24px)]">
          <div
            ref={wrapperRef}
            className="relative flex w-max gap-6 md:gap-8 will-change-transform"
          >
            <div
              ref={bgLineRef}
              className="absolute top-2 h-[2px] rounded-full bg-neutral-800"
            />
            <div
              ref={progressLineRef}
              className="absolute top-2 h-[2px] origin-left rounded-full bg-gradient-to-r from-orange-600 to-red-600 shadow-[0_0_8px_rgba(234,88,12,0.5)]"
            />

            {cards.map((card, i) => (
              <div
                key={i}
                className="timeline-card relative flex w-[78vw] max-w-[300px] shrink-0 flex-col sm:max-w-[340px] md:w-[400px] md:max-w-none lg:w-[420px]"
              >
                {/* Timeline row — below heading, above card media */}
                <div className="relative mb-6 h-4 shrink-0 md:mb-7">
                  <div className="timeline-dot absolute top-1/2 left-0 z-10 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-neutral-700 bg-neutral-900 transition-colors duration-300" />
                </div>

                <div className="relative mb-4 aspect-[4/3] overflow-hidden rounded-3xl border border-neutral-800 bg-[#171717] md:mb-5 md:aspect-[16/10]">
                  {card.image && (
                    <img
                      src={card.image}
                      alt={card.title}
                      className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  )}
                </div>

                <Typography
                  as="h3"
                  variant="headline4"
                  className="mb-1.5 text-white md:mb-2"
                >
                  {card.title}
                </Typography>
                <Typography
                  as="p"
                  variant="cardDescription"
                  className="text-[#a3a3a3]"
                >
                  {card.description}
                </Typography>
              </div>
            ))}

            {/* Matches EventCarousel trailing gutter so last card ends with same right margin */}
            <div
              className="w-[10px] shrink-0 md:w-[calc((100vw-1280px)/2+24px)]"
              aria-hidden
            />
          </div>
        </div>
      </div>
    </section>
  );
}
