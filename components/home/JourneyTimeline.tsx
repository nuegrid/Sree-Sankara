"use client";

import { useEffect, useState } from "react";
import HorizontalGallery from "./HorizontalGallery";
import { Timeline } from "../ui/timeline";

const timelineData = [
  {
    title: "Student Leader",
    content: (
      <div className="flex flex-col gap-4">
        <div className="w-full aspect-[4/3] bg-[#171717] border border-neutral-800 rounded-3xl overflow-hidden relative">
          <img 
            src="/images/journey/a.png" 
            alt="Student Leader" 
            className="w-full h-full object-cover" 
          />
        </div>
        <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
          Born in Chalakudy, Kerala, Swami Anandavanam Bharathi (formerly P. Salil) pursued Political Science and became an active student leader, developing strong leadership skills and a commitment to public service.
        </p>
      </div>
    )
  },
  {
    title: "A Spiritual Awakening",
    content: (
      <div className="flex flex-col gap-4">
        <div className="w-full aspect-[4/3] bg-[#171717] border border-neutral-800 rounded-3xl overflow-hidden relative">
          <img 
            src="/images/journey/b.png" 
            alt="A Spiritual Awakening" 
            className="w-full h-full object-cover" 
          />
        </div>
        <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
          In 2001, a life-changing visit to the Kumbh Mela sparked a profound transformation. Time spent on the banks of the Ganga inspired Sanatan Dharma and inner realization.
        </p>
      </div>
    )
  },
  {
    title: "Path of Devotion",
    content: (
      <div className="flex flex-col gap-4">
        <div className="w-full aspect-[4/3] bg-[#171717] border border-neutral-800 rounded-3xl overflow-hidden relative">
          <img 
            src="/images/journey/c.png" 
            alt="Path of Devotion" 
            className="w-full h-full object-cover" 
          />
        </div>
        <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
          Embracing a life of deep meditation and spiritual practice, dedicating every moment to the pursuit of higher consciousness and divine connection.
        </p>
      </div>
    )
  },
  {
    title: "Guiding the Light",
    content: (
      <div className="flex flex-col gap-4">
        <div className="w-full aspect-[4/3] bg-[#171717] border border-neutral-800 rounded-3xl overflow-hidden relative">
          <img 
            src="/images/journey/d.png" 
            alt="Guiding the Light" 
            className="w-full h-full object-cover" 
          />
        </div>
        <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
          Now traveling and sharing wisdom, helping seekers discover their inner potential and peace in the modern world.
        </p>
      </div>
    )
  }
];

export default function JourneyTimeline() {
  const [isDesktop, setIsDesktop] = useState<boolean | null>(null);

  useEffect(() => {
    const checkSize = () => {
      // 768px matches the Tailwind 'md' breakpoint
      setIsDesktop(window.innerWidth >= 768);
    };

    checkSize();
    window.addEventListener("resize", checkSize);
    
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  if (isDesktop === null) {
    // Return a themed loading placeholder matching the section background
    return <div className="w-full min-h-screen bg-black" />;
  }

  return isDesktop ? (
    <HorizontalGallery />
  ) : (
    <Timeline data={timelineData} />
  );
}
