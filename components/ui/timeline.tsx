"use client";

import {
  useScroll,
  useTransform,
  useMotionValueEvent,
  motion,
} from "motion/react";
import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import Typography from "@/components/ui/Typography";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

interface TimelineProps {
  data: TimelineEntry[];
  description?: string;
}

/**
 * Vertical timeline for mobile/tablet — same visual language as the
 * horizontal journey gallery (grey track, orange progress, glowing dots).
 * Each point fills orange when the progress line reaches it.
 */
export const Timeline = ({
  data,
  description,
}: TimelineProps) => {
  const { t } = useTranslation();
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [lineHeight, setLineHeight] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!ref.current) return;

    const measureLine = () => {
      const items = itemRefs.current.filter(Boolean) as HTMLDivElement[];
      if (items.length === 0) return;

      const last = items[items.length - 1];
      // Stop the track at the center of the final dot (do not extend under last card)
      const lastDotCenter = last.offsetTop + 14;
      setLineHeight(lastDotCenter);
    };

    measureLine();
    const resizeObserver = new ResizeObserver(measureLine);
    resizeObserver.observe(ref.current);
    const timer = setTimeout(measureLine, 400);

    return () => {
      resizeObserver.disconnect();
      clearTimeout(timer);
    };
  }, [data]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 30%", "end 70%"],
  });

  const heightTransform = useTransform(
    scrollYProgress,
    [0, 1],
    [0, lineHeight]
  );
  const opacityTransform = useTransform(scrollYProgress, [0, 0.05], [0, 1]);

  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    if (!ref.current || lineHeight <= 0) return;

    const progressPx = progress * lineHeight;
    let nextActive = -1;

    itemRefs.current.forEach((item, index) => {
      if (!item) return;
      const dotCenter = item.offsetTop + 14;
      if (progressPx >= dotCenter) {
        nextActive = index;
      }
    });

    if (progress > 0.02 && nextActive < 0) nextActive = 0;

    setActiveIndex(nextActive);
  });

  return (
    <div
      className="w-full bg-black px-5 py-14 pt-24 font-sans sm:px-8 sm:pt-28"
      ref={containerRef}
    >
      <div className="mx-auto max-w-7xl pb-8">
        <Typography
          as="span"
          variant="sectionEyebrow"
          className="mb-2 block text-[#FE3E02]"
        >
          {t("home.journeyLabel")}
        </Typography>
        <Typography
          as="h2"
          variant="galleryTitle"
          className="max-w-sm text-white"
        >
          {t("home.journeyTitleLine1")}
          <br />
          {t("home.journeyTitleLine2")}
        </Typography>
        {description && (
          <Typography
            as="p"
            variant="bodyText3"
            className="mt-4 max-w-md leading-relaxed text-neutral-400"
          >
            {description}
          </Typography>
        )}
      </div>

      <div ref={ref} className="relative mx-auto max-w-7xl pb-2">
        {/* Grey base track — ends at last point */}
        <div
          style={{ height: lineHeight ? `${lineHeight}px` : 0 }}
          className="absolute top-0 left-[15px] w-[2px] bg-neutral-800"
        />
        {/* Orange progress fill — ends at last point */}
        <div
          style={{ height: lineHeight ? `${lineHeight}px` : 0 }}
          className="absolute top-0 left-[15px] w-[2px] overflow-hidden"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] rounded-full bg-gradient-to-b from-[#FE3E02] to-[#ea580c] shadow-[0_0_10px_rgba(254,62,2,0.65)]"
          />
        </div>

        {data.map((item, index) => {
          const isComplete = index <= activeIndex;
          const isLast = index === data.length - 1;

          return (
            <div
              key={index}
              ref={(el) => {
                itemRefs.current[index] = el;
              }}
              className={`relative flex gap-5 ${isLast ? "pb-0" : "pb-12"}`}
            >
              {/* Dot on the vertical line */}
              <div className="relative z-10 flex w-8 shrink-0 justify-center pt-1">
                <div
                  className={`h-3.5 w-3.5 rounded-full border-2 transition-all duration-300 ${
                    isComplete
                      ? "scale-110 border-[#FE3E02] bg-[#FE3E02] shadow-[0_0_12px_rgba(254,62,2,0.85)]"
                      : "border-neutral-600 bg-black"
                  }`}
                />
              </div>

              {/* Card content */}
              <div className="min-w-0 flex-1">
                <Typography
                  as="h3"
                  variant="headline4"
                  className="mb-3 text-white"
                >
                  {item.title}
                </Typography>
                <div>{item.content}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
