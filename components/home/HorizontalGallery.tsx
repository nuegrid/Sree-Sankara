"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

const cards = [
  {
    title: "Student Leader",
    description: "Born in Chalakudy, Kerala, Swami Anandavanam Bharathi (formerly P. Salil) pursued Political Science and became an active student leader, developing strong leadership skills and a commitment to public service.",
    image: "/images/journey/a.png"
  },
  {
    title: "A Spiritual Awakening",
    description: "In 2001, a life-changing visit to the Kumbh Mela sparked a profound transformation. Time spent on the banks of the Ganga inspired Sanatan Dharma and inner realization.",
    image: "/images/journey/b.png"
  },
  {
    title: "Path of Devotion",
    description: "Embracing a life of deep meditation and spiritual practice, dedicating every moment to the pursuit of higher consciousness and divine connection.",
    image: "/images/journey/c.png"
  },
  {
    title: "Guiding the Light",
    description: "Now traveling and sharing wisdom, helping seekers discover their inner potential and peace in the modern world.",
    image: "/images/journey/d.png"
  }
];

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function HorizontalGallery() {
  const container = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const bgLineRef = useRef<HTMLDivElement>(null);
  const progressLineRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!wrapperRef.current) return;

    const cardsElements = wrapperRef.current.querySelectorAll(".timeline-card");
    const dotsElements = wrapperRef.current.querySelectorAll(".timeline-dot");

    if (cardsElements.length === 0) return;

    const getOffsets = () => Array.from(cardsElements).map(el => (el as HTMLElement).offsetLeft);

    const setupTimeline = () => {
      const offsets = getOffsets();
      const firstOffset = offsets[0] || 0;
      const lastOffset = offsets[offsets.length - 1] || 0;
      const totalWidth = lastOffset - firstOffset;

      gsap.set(bgLineRef.current, {
        left: firstOffset,
        width: totalWidth,
      });

      gsap.set(progressLineRef.current, {
        left: firstOffset,
        width: 0,
      });
    };

    // Run initial setup
    setupTimeline();

    // Create main ScrollTrigger timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        pin: true,
        scrub: 0.5,
        invalidateOnRefresh: true,
        end: () => "+=" + wrapperRef.current!.scrollWidth,
        onRefresh: () => {
          setupTimeline();
        },
        onUpdate: (self) => {
          const progress = self.progress;
          const offsets = getOffsets();
          const firstOffset = offsets[0] || 0;
          const lastOffset = offsets[offsets.length - 1] || 0;
          const totalDistance = lastOffset - firstOffset;

          if (totalDistance <= 0) return;

          // 1. Animate the progress line width smoothly
          gsap.to(progressLineRef.current, {
            width: progress * totalDistance,
            duration: 0.1,
            ease: "none",
            overwrite: "auto",
          });

          // 2. Animate each dot state based on whether scroll has reached it
          dotsElements.forEach((dot, index) => {
            if (index === 0) {
              // First dot is always active
              gsap.to(dot, {
                borderColor: "#ea580c",
                backgroundColor: "#ea580c",
                scale: 1.25,
                boxShadow: "0 0 12px rgba(234, 88, 12, 0.8)",
                duration: 0.1,
                overwrite: "auto",
              });
              return;
            }

            const dotOffset = offsets[index] - firstOffset;
            const dotProgressFraction = dotOffset / totalDistance;

            // Trigger activation when progress matches or exceeds dot position fraction
            if (progress >= dotProgressFraction * 0.98) {
              gsap.to(dot, {
                borderColor: "#ea580c",
                backgroundColor: "#ea580c",
                scale: 1.25,
                boxShadow: "0 0 12px rgba(234, 88, 12, 0.8)",
                duration: 0.15,
                overwrite: "auto",
              });
            } else {
              gsap.to(dot, {
                borderColor: "#404040", // neutral-700
                backgroundColor: "#171717", // neutral-900
                scale: 1.0,
                boxShadow: "none",
                duration: 0.15,
                overwrite: "auto",
              });
            }
          });
        }
      },
    });

    // Scroll the cards wrapper container horizontally
    tl.to(wrapperRef.current, {
      x: () => -(wrapperRef.current!.scrollWidth - window.innerWidth),
      ease: "none",
    }, 0);

    // Refresh ScrollTrigger to recalculate everything after layout
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    return () => {
      clearTimeout(timer);
    };

  }, { scope: container });

  return (
    <section ref={container} className="overflow-hidden bg-black h-screen flex flex-col justify-center relative">
      
      {/* Header Titles (Aligned with screenshot styling) */}
      <div className="absolute top-12 left-8 md:left-20 z-20 flex flex-col gap-2">
        <span className="text-sm font-semibold tracking-wide text-orange-600">
          Swami's Spiritual Journey
        </span>
        <h2 className="text-3xl md:text-5xl font-normal text-white leading-tight">
          A Life Dedicated to Dharma
        </h2>
      </div>

      <div ref={wrapperRef} className="flex gap-8 md:gap-12 px-8 md:px-20 w-max relative pt-32 pb-8">
        
        {/* Horizontal Timeline Line background & progress */}
        <div 
          ref={bgLineRef} 
          className="absolute top-16 h-[3px] bg-neutral-800 rounded-full" 
        />
        <div 
          ref={progressLineRef} 
          className="absolute top-16 h-[3px] bg-gradient-to-r from-orange-600 to-red-600 rounded-full origin-left shadow-[0_0_8px_rgba(234,88,12,0.5)]" 
        />

        {cards.map((card, i) => (
          <div key={i} className="flex flex-col w-[85vw] md:w-[600px] shrink-0 relative timeline-card">
            
            {/* Dot indicator aligned with horizontal line */}
            <div 
              className="absolute -top-16 left-0 w-4 h-4 rounded-full border-2 border-neutral-700 bg-neutral-900 -translate-x-1/2 -translate-y-1/2 z-10 transition-colors duration-300 timeline-dot"
            />

            {/* The Image (replacing Grey Box) */}
            <div className="w-full aspect-[4/3] md:aspect-video bg-[#171717] border border-neutral-800 rounded-3xl mb-6 overflow-hidden relative">
              {card.image && (
                <img 
                  src={card.image} 
                  alt={card.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
                />
              )}
            </div>
            
            {/* Text Content */}
            <h3 className="text-white text-xl md:text-2xl font-medium mb-3">{card.title}</h3>
            <p className="text-[#a3a3a3] text-sm md:text-base leading-relaxed tracking-wide">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
