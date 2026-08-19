"use client";

import { CalendarDays, MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";
import Typography from "@/components/ui/Typography";
import type { EventsPageItem } from "./data";

type Props = EventsPageItem;

export default function EventsPageCard({
  id,
  image,
  status,
}: Props) {
  const { t } = useTranslation();
  const isLive = status === "Live Now";
  const displayTitle = t(`events.items.${id}.title`);
  const displayDate = t(`events.items.${id}.date`);
  const displayLocation = t(`events.items.${id}.location`);

  return (
    <article className="relative overflow-hidden rounded-[34px] shadow-sm">
      {/* Full-bleed background image */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={image}
        alt={displayTitle}
        className="absolute inset-0 h-full w-full object-cover"
        draggable={false}
      />

      {/* Content overlay */}
      <div className="relative flex aspect-[5/4] flex-col justify-between p-5 sm:aspect-[4/3] sm:p-6">
        {/* Status badge */}
        <div className="flex justify-end">
          <span
            className={`rounded-full px-5 py-2 ${
              isLive
                ? "bg-black text-white"
                : "bg-black text-white"
            }`}
          >
            <Typography
              as="span"
              variant="buttonSmall"
              className="text-white"
            >
              {t(isLive ? "events.liveNow" : "events.upcoming")}
            </Typography>
          </span>
        </div>

        {/* Bottom info panel */}
        <div className="rounded-[22px] bg-[#4a210a]/95 px-5 py-5 text-white sm:rounded-[26px] sm:px-6 sm:py-5">
          <div className="flex flex-col gap-3">
            <Typography
              as="h2"
              variant="cardTitle"
              className="min-w-0 text-white"
            >
              {displayTitle}
            </Typography>

            <div className="flex min-w-0 flex-col gap-1.5 text-[#d4a88a]">
              <div className="flex items-center gap-2">
                <CalendarDays className="h-[18px] w-[18px] shrink-0 text-[#d4a88a] sm:h-5 sm:w-5" />
                <Typography as="span" variant="cardMeta" className="truncate text-[#d4a88a]">
                  {displayDate}
                </Typography>
              </div>

              <div className="flex items-center gap-2">
                <MapPin className="h-[18px] w-[18px] shrink-0 text-[#d4a88a] sm:h-5 sm:w-5" />
                <Typography as="span" variant="cardMeta" className="truncate text-[#d4a88a]">
                  {displayLocation}
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
