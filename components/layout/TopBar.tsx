"use client";

import { FiGlobe, FiChevronDown } from "react-icons/fi";
import Typography from "@/components/ui/Typography";
import { PAGE_CONTAINER } from "@/lib/layout";
import { cn } from "@/lib/utils";

export default function TopBar() {
  return (
    <header className="relative z-50 h-12 w-full bg-[#2A0707] sm:h-14">
      <div
        className={cn(
          PAGE_CONTAINER,
          "flex h-full items-center justify-between"
        )}
      >
        <Typography
          as="p"
          variant="topBarText"
          className="min-w-0 flex-1 truncate pr-6 text-left text-[#FFCB94]"
        >
          Upcoming events details here...
        </Typography>

        <button
          type="button"
          className="flex shrink-0 cursor-pointer items-center gap-1.5 text-white transition-colors hover:text-[#FFCB94]"
        >
          <FiGlobe className="h-3.5 w-3.5" strokeWidth={1.75} />
          <Typography as="span" variant="topBarAction" className="text-white">
            English
          </Typography>
          <FiChevronDown className="h-3.5 w-3.5 opacity-90" strokeWidth={1.75} />
        </button>
      </div>
    </header>
  );
}
