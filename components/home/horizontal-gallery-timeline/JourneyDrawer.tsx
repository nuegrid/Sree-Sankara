"use client";

import JourneyTimeline from "./JourneyTimeline";

type JourneyDrawerProps = {
  /**
   * When set (incl. 0), HorizontalGallery is parent-driven and frozen at first card until progress rises.
   * Omit on mobile so the vertical timeline scrolls naturally.
   */
  galleryProgress?: number;
};

/**
 * Black drawer shell —
 * Desktop: horizontal gallery (pinned)
 * Mobile: vertical timeline (natural height)
 */
export default function JourneyDrawer({ galleryProgress }: JourneyDrawerProps) {
  return (
    <div className="journey-drawer relative z-30 w-full overflow-visible rounded-t-[40px] rounded-b-none bg-black shadow-2xl max-lg:shadow-none sm:rounded-t-[60px] md:rounded-t-[70px] lg:h-full lg:min-h-screen lg:overflow-hidden lg:shadow-2xl">
      <div className="journey-drawer-content flex w-full flex-col lg:h-screen lg:min-h-screen lg:min-h-0">
        <JourneyTimeline galleryProgress={galleryProgress} />
      </div>
    </div>
  );
}
