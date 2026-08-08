"use client";

import JourneyTimeline from "../JourneyTimeline";

type JourneyDrawerProps = {
  /**
   * When set (incl. 0), HorizontalGallery is parent-driven and frozen at first card until progress rises.
   * Omit on mobile so the gallery keeps its own ScrollTrigger.
   */
  galleryProgress?: number;
};

/**
 * Black drawer shell — container for Timeline / HorizontalGallery only.
 * Rise animation is owned by EventCarousel (desktop).
 */
export default function JourneyDrawer({ galleryProgress }: JourneyDrawerProps) {
  return (
    <div className="journey-drawer relative z-30 flex h-full min-h-screen w-full flex-col overflow-hidden rounded-t-[40px] bg-black shadow-2xl sm:rounded-t-[60px] md:rounded-t-[70px]">
      <div className="flex min-h-0 flex-1 flex-col">
        <JourneyTimeline galleryProgress={galleryProgress} />
      </div>
    </div>
  );
}
