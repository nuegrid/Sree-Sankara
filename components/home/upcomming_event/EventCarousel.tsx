"use client";

import { useState, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import EventCard from "@/components/cards/EventCard";
import JourneyDrawer from "../horizontal-gallery-timeline/JourneyDrawer";
import { events } from "./data";
import Typography from "@/components/ui/Typography";
import ViewAllLink from "@/components/ui/ViewAllLink";

gsap.registerPlugin(ScrollTrigger);

/** Master timeline phase weights — no overlap between phases */
const DRAWER_DUR = 1;
const HOLD_DUR = 0.25;
const GALLERY_DUR = 2;

export default function EventCarousel() {
  const [activeId, setActiveId] = useState(events[0].id);
  const [galleryProgress, setGalleryProgress] = useState(0);
  const rootRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);
  const scrollTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const activeIdRef = useRef(events[0].id);
  const galleryProgressRef = useRef(0);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        const pin = pinRef.current;
        const track = trackRef.current;
        const container = containerRef.current;
        const drawer = drawerRef.current;
        if (!pin || !track || !container || !drawer) return;

        gsap.set(track, { x: 0 });
        gsap.set(drawer, {
          yPercent: 100,
          autoAlpha: 1,
          pointerEvents: "none",
          force3D: true,
        });

        const drawerContent = drawer.querySelector(
          ".journey-drawer-content"
        ) as HTMLElement | null;
        if (drawerContent) {
          gsap.set(drawerContent, { y: 0, force3D: true });
        }

        galleryProgressRef.current = 0;
        setGalleryProgress(0);

        const setGallery = (p: number) => {
          const clamped = Math.min(1, Math.max(0, p));
          if (Math.abs(clamped - galleryProgressRef.current) < 0.001) return;
          galleryProgressRef.current = clamped;
          setGalleryProgress(clamped);
        };

        const galleryProxy = { p: 0 };

        const tl = gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            id: "programs-carousel",
            trigger: pin,
            pin: true,
            pinSpacing: true,
            scrub: 1,
            start: "top top",
            end: () => {
              const drawerScroll = Math.max(window.innerHeight * 1.2, 700);
              const holdScroll = window.innerHeight * 0.2;
              const galleryScroll = Math.max(window.innerWidth * 2.5, 1200);
              return `+=${drawerScroll + holdScroll + galleryScroll}`;
            },
            invalidateOnRefresh: true,
            anticipatePin: 1,
            onUpdate: () => {
              const kids = tl.getChildren(false, true, false);
              const drawerTween = kids[0];
              const drawerProg = drawerTween
                ? Math.min(1, Math.max(0, drawerTween.progress()))
                : 0;
              drawer.style.pointerEvents =
                drawerProg > 0.02 ? "auto" : "none";
            },
          },
        });

        tl.fromTo(
          drawer,
          { yPercent: 100 },
          {
            yPercent: 0,
            duration: DRAWER_DUR,
            force3D: true,
            immediateRender: false,
            onUpdate: () => {
              setGallery(0);
            },
          },
          0
        );

        tl.to(
          {},
          {
            duration: HOLD_DUR,
            onUpdate: () => setGallery(0),
          },
          DRAWER_DUR
        );

        tl.fromTo(
          galleryProxy,
          { p: 0 },
          {
            p: 1,
            duration: GALLERY_DUR,
            onUpdate: () => setGallery(galleryProxy.p),
          },
          DRAWER_DUR + HOLD_DUR
        );

        const refresh = () => ScrollTrigger.refresh();
        requestAnimationFrame(refresh);
        const t1 = window.setTimeout(refresh, 200);
        const t2 = window.setTimeout(refresh, 800);

        return () => {
          clearTimeout(t1);
          clearTimeout(t2);
          tl.scrollTrigger?.kill(true);
          tl.kill();
          gsap.set(track, { clearProps: "transform" });
          gsap.set(drawer, { clearProps: "transform,pointerEvents" });
          if (drawerContent) {
            gsap.set(drawerContent, { clearProps: "transform" });
          }
        };
      });

      mm.add("(max-width: 1023px)", () => {
        gsap.set(drawerRef.current, { clearProps: "transform,pointerEvents" });
        gsap.set(trackRef.current, { clearProps: "transform" });
      });

      return () => {
        mm.revert();
        if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
      };
    },
    { scope: rootRef }
  );

  const handleScroll = () => {
    if (window.innerWidth >= 1024) return;
    if (!containerRef.current) return;
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

      const activeIndex = Math.round(scrollPos / (inactiveWidth + gap));
      if (activeIndex >= 0 && activeIndex < events.length) {
        const nextId = events[activeIndex].id;
        if (nextId !== activeIdRef.current) {
          activeIdRef.current = nextId;
          setActiveId(nextId);
        }
      }
    }, 150);
  };

  const handleCardClick = (id: number) => {
    const index = events.findIndex((e) => e.id === id);
    if (index === -1) return;
    activeIdRef.current = id;
    setActiveId(id);

    const card = trackRef.current?.children[index] as HTMLElement | undefined;
    card?.scrollIntoView({
      behavior: "smooth",
      inline: "nearest",
      block: "nearest",
    });
  };

  return (
    <div ref={rootRef} className="relative z-20 w-full">
      <div
        ref={pinRef}
        className="relative w-full bg-[#FAF8F5] py-12 lg:h-screen lg:overflow-hidden lg:py-0"
      >
        <div className="relative z-10 flex h-full w-full flex-col justify-center">
          <div className="mx-auto mb-10 flex w-full max-w-7xl flex-col gap-6 px-6 md:flex-row md:items-end md:justify-between">
            <div className="flex max-w-4xl flex-col gap-4">
              <Typography
                as="span"
                variant="sectionLabel"
                className="text-orange-600"
              >
                Upcoming Programs
              </Typography>
              <Typography
                as="h2"
                variant="sectionTitle"
                className="text-gray-950"
              >
                Join Swamiji for discourses, satsangs, and
                <br className="hidden sm:block" /> sacred events across the
                country.
              </Typography>
            </div>
            <div className="shrink-0 md:pb-2">
              <ViewAllLink href="/events">View All Programs</ViewAllLink>
            </div>
          </div>

          <div
            ref={containerRef}
            onScroll={handleScroll}
            data-lenis-prevent
            className="no-scrollbar relative flex w-full flex-row flex-nowrap overflow-x-auto px-6 py-4 md:px-[calc((100vw-1280px)/2+24px)]"
          >
            <div
              ref={trackRef}
              className="flex w-max flex-shrink-0 flex-row flex-nowrap gap-[20px] md:gap-[28px]"
            >
              {events.map((event) => (
                <EventCard
                  key={event.id}
                  event={event}
                  active={activeId === event.id}
                  onClick={() => handleCardClick(event.id)}
                />
              ))}
              <div className="w-[10px] flex-shrink-0 md:w-[calc((100vw-1280px)/2+24px)]" />
            </div>
          </div>
        </div>

        <div
          ref={drawerRef}
          className="absolute right-0 bottom-0 left-0 z-30 hidden h-full w-full bg-transparent will-change-transform lg:block"
        >
          <JourneyDrawer galleryProgress={galleryProgress} />
        </div>
      </div>

      {/* Mobile / tablet journey (no pin / drawer stages) */}
      <div className="overflow-visible bg-black lg:hidden">
        <JourneyDrawer />
      </div>
    </div>
  );
}
