import { CalendarDays, MapPin, ArrowRight } from "lucide-react";
import Typography from "@/components/ui/Typography";
import type { EventsPageItem } from "./data";

type Props = EventsPageItem;

export default function EventsPageCard({
  image,
  status,
  title,
  date,
  location,
}: Props) {
  const isLive = status === "Live Now";

  return (
    <article className="relative overflow-hidden rounded-[34px] shadow-sm">
      {/* Full-bleed background image */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={image}
        alt={title}
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
              {status}
            </Typography>
          </span>
        </div>

        {/* Bottom info panel */}
        <div className="rounded-[22px] bg-[#4a210a]/95 px-5 py-5 text-white sm:rounded-[26px] sm:px-6 sm:py-5">
          <div className="grid grid-cols-[1fr_auto] items-start gap-x-4 gap-y-3">
            <Typography
              as="h2"
              variant="cardTitle"
              className="min-w-0 text-white"
            >
              {title}
            </Typography>

            <div className="col-start-1 flex min-w-0 flex-col gap-1.5 text-[#d4a88a]">
              <div className="flex items-center gap-2">
                <CalendarDays className="h-[18px] w-[18px] shrink-0 text-[#d4a88a] sm:h-5 sm:w-5" />
                <Typography as="span" variant="cardMeta" className="truncate text-[#d4a88a]">
                  {date}
                </Typography>
              </div>

              <div className="flex items-center gap-2">
                <MapPin className="h-[18px] w-[18px] shrink-0 text-[#d4a88a] sm:h-5 sm:w-5" />
                <Typography as="span" variant="cardMeta" className="truncate text-[#d4a88a]">
                  {location}
                </Typography>
              </div>
            </div>

            <button
              type="button"
              className="col-start-2 row-start-2 flex h-[42px] w-[116px] shrink-0 items-center justify-center gap-1.5 self-center rounded-lg border border-[#f4510b] bg-transparent text-[#f4510b] transition-colors hover:bg-[#f4510b]/10"
            >
              <Typography as="span" variant="buttonSmall" className="text-[#f4510b]">
                Learn More
              </Typography>
              <ArrowRight className="h-4 w-4 text-[#f4510b]" />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
