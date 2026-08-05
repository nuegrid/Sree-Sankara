"use client";

import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import EventCard from "./EventCard";
import { events } from "./data";

export default function EventCarousel() {
  const [activeId, setActiveId] = useState(events[0].id);
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const scrollTriggerRef = useRef<any>(null);
  
  const isProgrammaticScroll = useRef(false);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Register GSAP plugins
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const mm = gsap.matchMedia();

    // Desktop (>= 1024px): Pin the section and translate the track horizontally
    mm.add("(min-width: 1024px)", () => {
      if (!sectionRef.current || !trackRef.current || !containerRef.current) return;

      const track = trackRef.current;
      const container = containerRef.current;

      const getScrollDistance = () => {
        const computedStyle = window.getComputedStyle(container);
        const paddingLeft = parseFloat(computedStyle.paddingLeft) || 0;
        // Calculate max translation using actual track scrollWidth and container clientWidth
        // to ensure the right edge of the track aligns perfectly with the right edge of the container
        return Math.max(0, track.scrollWidth - container.clientWidth + paddingLeft);
      };

      const scrollAnim = gsap.to(track, {
        x: () => -getScrollDistance(),
        ease: "none",
        force3D: true, // GPU-accelerated translate3d transform
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          scrub: 1, // Smooth scrub tracking
          start: "top top",
          end: () => `+=${getScrollDistance() * 1.5}`, // Dynamic pin scroll duration
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            // Update active index based on scroll progress (balanced mapping)
            const activeIndex = Math.min(
              events.length - 1,
              Math.floor(self.progress * events.length)
            );
            if (activeIndex >= 0 && activeIndex < events.length) {
              setActiveId(events[activeIndex].id);
            }
          },
        },
      });

      scrollTriggerRef.current = scrollAnim.scrollTrigger;

      // Force GSAP ScrollTrigger to recalculate and settle layout sizing
      ScrollTrigger.refresh();

      return () => {
        if (scrollAnim.scrollTrigger) scrollAnim.scrollTrigger.kill();
        scrollAnim.kill();
      };
    });

    return () => {
      mm.revert();
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    };
  }, []);

  // Handle manual scroll (trackpad/mobile swipe/mouse-wheel on smaller viewports) to update active card
  const handleScroll = () => {
    if (!containerRef.current || isProgrammaticScroll.current) return;

    if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);

    scrollTimeoutRef.current = setTimeout(() => {
      if (!containerRef.current) return;
      const scrollPos = containerRef.current.scrollLeft;

      let inactiveWidth = 200;
      let gap = 28;
      
      if (window.innerWidth < 768) {
        inactiveWidth = 100;
        gap = 20;
      }

      const itemWidth = inactiveWidth + gap;
      const activeIndex = Math.round(scrollPos / itemWidth);

      if (activeIndex >= 0 && activeIndex < events.length) {
        const targetEvent = events[activeIndex];
        if (targetEvent.id !== activeId) {
          setActiveId(targetEvent.id);
        }
      }
    }, 150); // debounce to prevent layout jumps mid-scroll
  };

  const handleCardClick = (id: number) => {
    const index = events.findIndex((e) => e.id === id);
    if (index === -1) return;

    setActiveId(id);

    // Desktop: Scroll page to the matching ScrollTrigger scroll position
    if (window.innerWidth >= 1024 && scrollTriggerRef.current) {
      const st = scrollTriggerRef.current;
      const start = st.start;
      const end = st.end;
      const duration = end - start;
      const targetScroll = start + (index / (events.length - 1)) * duration;

      window.scrollTo({
        top: targetScroll,
        behavior: "smooth",
      });
    }
    // Mobile/Tablet: Scroll container horizontally to show the card
    else if (containerRef.current) {
      let inactiveWidth = 200;
      let gap = 28;
      
      if (window.innerWidth < 768) {
        inactiveWidth = 100;
        gap = 20;
      }
      
      const itemWidth = inactiveWidth + gap;
      const targetScrollLeft = index * itemWidth;
      
      containerRef.current.scrollTo({
        left: targetScrollLeft,
        behavior: "smooth",
      });
    }
  };

  const handleWheel = (e: React.WheelEvent) => {
    // Only translate vertical scroll wheel to horizontal scroll on mobile/tablet viewports
    // On desktop, ScrollTrigger vertical-to-horizontal pinning handles this natively
    if (window.innerWidth < 1024 && containerRef.current) {
      if (e.deltaY !== 0) {
        e.preventDefault();
        containerRef.current.scrollLeft += e.deltaY;
      }
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative z-20 w-full bg-[#FAF8F5] py-12 lg:py-0 lg:h-screen lg:flex lg:flex-col lg:justify-center overflow-hidden"
    >
      {/* Header */}
      <div className="mx-auto w-full max-w-7xl px-6 mb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div className="flex flex-col gap-4 max-w-4xl">
          <span className="text-sm font-semibold tracking-wide text-orange-600">
            Upcoming Programs
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-gray-950 leading-[1.18] tracking-tight">
            Join Swamiji for discourses, satsangs, and
            <br className="hidden sm:block" /> sacred events across the country.
          </h2>
        </div>
        <div className="shrink-0 md:pb-2">
          <a
            href="/events"
            className="text-orange-600 hover:text-orange-700 font-semibold text-sm sm:text-base underline underline-offset-4 transition-colors"
          >
            View All Programs
          </a>
        </div>
      </div>

      {/* Cards Container */}
      <div
        ref={containerRef}
        onScroll={handleScroll}
        onWheel={handleWheel}
        className="w-full overflow-x-auto lg:overflow-x-hidden no-scrollbar flex flex-row flex-nowrap py-4 px-6 md:px-[calc((100vw-1280px)/2+24px)]"
      >
        {/* Track wrapper for GSAP animation */}
        <div
          ref={trackRef}
          className="flex flex-row flex-nowrap gap-[20px] md:gap-[28px] flex-shrink-0 w-max"
        >
          {events.map((event) => (
            <EventCard
              key={event.id}
              event={event}
              active={activeId === event.id}
              onClick={() => handleCardClick(event.id)}
            />
          ))}
          {/* Spacer to allow padding at the end of the scroll */}
          <div className="w-[10px] md:w-[calc((100vw-1280px)/2+24px)] flex-shrink-0" />
        </div>
      </div>
    </section>
  );
}


