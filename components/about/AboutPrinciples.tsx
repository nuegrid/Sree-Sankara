"use client";

import { useState } from "react";
import { Compass, Eye, HeartHandshake, type LucideIcon } from "lucide-react";
import Typography from "@/components/ui/Typography";
import { missionItems } from "./data";
import { cn } from "@/lib/utils";

const icons: LucideIcon[] = [Compass, Eye, HeartHandshake];
const DEFAULT_ACTIVE = "Vision";

/**
 * Highlighted Mission / Vision / Purpose band.
 * Orange highlight follows the hovered card; Vision is the default.
 */
export default function AboutPrinciples() {
  const [activeTitle, setActiveTitle] = useState(DEFAULT_ACTIVE);

  return (
    <section className="mt-16 overflow-hidden rounded-[28px] bg-[#2A0707] px-6 py-12 sm:mt-20 sm:rounded-[36px] sm:px-10 sm:py-16 md:px-12">
      <div className="mx-auto max-w-xl text-center">
        <Typography as="span" variant="sectionLabel" className="text-[#FE3E02]">
          Guiding Light
        </Typography>
        <Typography
          as="h2"
          variant="aboutTitle"
          className="mt-3 text-white"
        >
          Mission, Vision &amp; Purpose
        </Typography>
      </div>

      <div
        className="mt-10 grid grid-cols-1 gap-5 md:mt-12 md:grid-cols-3 md:items-stretch md:gap-6"
        onMouseLeave={() => setActiveTitle(DEFAULT_ACTIVE)}
      >
        {missionItems.map((item, index) => {
          const Icon = icons[index];
          const isFeatured = activeTitle === item.title;

          return (
            <article
              key={item.title}
              onMouseEnter={() => setActiveTitle(item.title)}
              className={cn(
                "flex cursor-default flex-col rounded-2xl border px-6 py-8 transition-colors duration-300",
                isFeatured
                  ? "border-[#FE3E02] bg-[#FE3E02]"
                  : "border-white/15 bg-white/5"
              )}
            >
              <span
                className={cn(
                  "flex h-12 w-12 items-center justify-center rounded-full transition-colors duration-300",
                  isFeatured
                    ? "bg-white/15 text-white"
                    : "bg-[#FE3E02]/15 text-[#FE3E02]"
                )}
              >
                <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
              </span>
              <Typography
                as="h3"
                variant="initiativeTitle"
                className="mt-5 text-white"
              >
                {item.title}
              </Typography>
              <Typography
                as="p"
                variant="initiativeBody"
                className={cn(
                  "mt-3 transition-colors duration-300",
                  isFeatured ? "text-white/90" : "text-white/70"
                )}
              >
                {item.body}
              </Typography>
            </article>
          );
        })}
      </div>
    </section>
  );
}
