"use client";

import { FiGlobe, FiChevronDown } from "react-icons/fi";
import Typography from "@/components/ui/Typography";

export default function TopBar() {
  return (
    <header className="relative z-50 flex h-12 w-full items-center justify-between bg-[#2A0707] px-6 sm:h-14 sm:px-8 lg:px-12">
      {/* Left — slogan */}
      <Typography
        as="p"
        variant="topBarText"
        className="min-w-0 flex-1 truncate pr-6 text-left text-[#FFCB94]"
      >
        Dharma is not just a path, it is the way of living for the welfare of all
      </Typography>

      {/* Right — language */}
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
    </header>
  );
}
