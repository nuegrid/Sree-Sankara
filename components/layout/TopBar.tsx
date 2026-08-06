"use client";

import { FiGlobe, FiChevronDown } from "react-icons/fi";

export default function TopBar() {
  return (
    <header className="relative z-50 w-full h-10 sm:h-14 bg-[#2A0707] text-[#f0e9df] px-4 sm:px-8 lg:px-12 flex items-center justify-end sm:justify-between text-xs sm:text-sm">
      {/* Left text (Desktop only) */}
      <p className="hidden sm:block font-normal tracking-wide text-orange-300 text-xs md:text-sm leading-snug">
        Dharma is not just a path, it is the way of living for the welfare of all
      </p>

      {/* Right language selector */}
      <button className="flex items-center gap-1.5 hover:text-amber-200 transition-colors shrink-0 cursor-pointer">
        <FiGlobe className="w-3.5 h-3.5" />
        <span className="font-medium">English</span>
        <FiChevronDown className="w-3.5 h-3.5 opacity-80" />
      </button>
    </header>
  );
}
