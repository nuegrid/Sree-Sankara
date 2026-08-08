"use client";

import JourneyTimeline from "../JourneyTimeline";
import JourneyQuoteSection from "./JourneyQuoteSection";

type JourneyDrawerProps = {
  /**
   * When set (incl. 0), HorizontalGallery is parent-driven and frozen at first card until progress rises.
   * Omit on mobile so the gallery keeps its own ScrollTrigger.
   */
  galleryProgress?: number;
};

/**
 * Black drawer shell — Timeline / HorizontalGallery, then quote section below.
 * Rise + content reveal after gallery are owned by EventCarousel (desktop).
 */
export default function JourneyDrawer({ galleryProgress }: JourneyDrawerProps) {
  return (
    <div className="journey-drawer relative z-30 h-full min-h-screen w-full overflow-hidden rounded-t-[40px] bg-black shadow-2xl sm:rounded-t-[60px] md:rounded-t-[70px]">
      {/* Tall stack: gallery viewport + quote — translated up after gallery finishes */}
      <div className="journey-drawer-content will-change-transform">
        <div className="flex h-screen min-h-screen w-full flex-col">
          <JourneyTimeline galleryProgress={galleryProgress} />
        </div>
        <JourneyQuoteSection />
      </div>
    </div>
  );
}
