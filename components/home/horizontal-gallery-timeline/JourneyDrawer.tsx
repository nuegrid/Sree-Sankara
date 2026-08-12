"use client";

import JourneyTimeline from "./JourneyTimeline";

type JourneyDrawerProps = {
  /**
   * When set (incl. 0), HorizontalGallery is parent-driven and frozen at first card until progress rises.
   * Omit on mobile so the gallery keeps its own ScrollTrigger.
   */
  galleryProgress?: number;
};

/**
 * Black drawer shell — Timeline / HorizontalGallery only.
 * Quote lives in its own homepage section (`QuoteSection`).
 */
export default function JourneyDrawer({ galleryProgress }: JourneyDrawerProps) {
  return (
    <div className="journey-drawer relative z-30 h-full min-h-screen w-full overflow-hidden rounded-t-[40px] rounded-b-none bg-black shadow-2xl sm:rounded-t-[60px] md:rounded-t-[70px]">
      <div className="journey-drawer-content flex h-screen min-h-screen w-full flex-col">
        <JourneyTimeline galleryProgress={galleryProgress} />
      </div>
    </div>
  );
}
