"use client";

import {
  useScroll,
  useTransform,
  motion,
} from "motion/react";
import React, { useEffect, useRef, useState } from "react";
import Typography from "@/components/ui/Typography";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

interface TimelineProps {
  data: TimelineEntry[];
  title?: string;
  subtitle?: string;
  description?: string;
}

export const Timeline = ({
  data,
  title = "A Life Dedicated to Dharma",
  subtitle = "Swami's Spiritual Journey",
  description,
}: TimelineProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (!ref.current) return;

    const handleResize = () => {
      if (ref.current) {
        setHeight(ref.current.getBoundingClientRect().height);
      }
    };

    handleResize();

    const resizeObserver = new ResizeObserver(() => {
      handleResize();
    });

    resizeObserver.observe(ref.current);

    const timer = setTimeout(handleResize, 500);

    return () => {
      resizeObserver.disconnect();
      clearTimeout(timer);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 20%", "end 80%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-black font-sans px-4 sm:px-6 md:px-10 py-16"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto py-10 px-4 md:px-8 lg:px-10">
        {subtitle && (
          <Typography
            as="span"
            variant="sectionLabel"
            className="mb-2 block text-orange-600"
          >
            {subtitle}
          </Typography>
        )}
        <Typography
          as="h2"
          variant="sectionTitleTight"
          className="max-w-4xl text-white"
        >
          {title}
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

      <div ref={ref} className="relative max-w-7xl mx-auto pb-10">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-28 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-black flex items-center justify-center border border-neutral-800">
                <div className="h-4 w-4 rounded-full bg-neutral-900 border border-neutral-700 p-2" />
              </div>
              <Typography
                as="h3"
                variant="timelineYear"
                className="hidden text-neutral-500 md:block md:pl-20"
              >
                {item.title}
              </Typography>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <Typography
                as="h3"
                variant="timelineYearMobile"
                className="mb-4 block text-left text-neutral-400 md:hidden"
              >
                {item.title}
              </Typography>
              <div className="text-neutral-300">{item.content}</div>
            </div>
          </div>
        ))}

        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-800 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-b from-orange-600 via-red-600 to-transparent from-[0%] via-[10%] rounded-full shadow-[0_0_8px_rgba(234,88,12,0.5)]"
          />
        </div>
      </div>
    </div>
  );
};
