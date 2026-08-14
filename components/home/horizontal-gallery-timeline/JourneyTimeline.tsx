"use client";

import { useEffect, useState } from "react";
import HorizontalGallery from "./HorizontalGallery";
import { Timeline } from "@/components/ui/timeline";
import Typography from "@/components/ui/Typography";

const timelineData = [
  {
    title: "Student Leader",
    content: (
      <div className="flex flex-col gap-3">
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-neutral-800 bg-[#171717]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/home/journey/b.png"
            alt="Student Leader"
            className="h-full w-full object-cover"
          />
        </div>
        <Typography as="p" variant="cardDescription" className="text-[#a3a3a3]">
          Born in Chalakudy, Kerala, Swami Anandavanam Bharathi (formerly P.
          Salil) pursued Political Science and became an active student leader,
          developing strong leadership skills and a commitment to public
          service.
        </Typography>
      </div>
    ),
  },
  {
    title: "A Spiritual Awakening",
    content: (
      <div className="flex flex-col gap-3">
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-neutral-800 bg-[#171717]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/home/journey/a.png"
            alt="A Spiritual Awakening"
            className="h-full w-full object-cover"
          />
        </div>
        <Typography as="p" variant="cardDescription" className="text-[#a3a3a3]">
          In 2001, a life-changing visit to the Kumbh Mela sparked a profound
          spiritual transformation. Time spent on the banks of the Ganga inspired
          a lifelong pursuit of Sanatan Dharma and inner realization.
        </Typography>
      </div>
    ),
  },
  {
    title: "Years of Discipline",
    content: (
      <div className="flex flex-col gap-3">
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-neutral-800 bg-[#171717]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/home/journey/c.png"
            alt="Years of Discipline"
            className="h-full w-full object-cover"
          />
        </div>
        <Typography as="p" variant="cardDescription" className="text-[#a3a3a3]">
          Over the following years, he undertook pilgrimages across Haridwar,
          Rishikesh, Varanasi, and the Himalayas. Under the guidance of revered
          saints, he embraced rigorous spiritual practices and eventually
          entered Juna Akhara.
        </Typography>
      </div>
    ),
  },
  {
    title: "Mahamandaleshwar",
    content: (
      <div className="flex flex-col gap-3">
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-neutral-800 bg-[#171717]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/home/journey/d.png"
            alt="Mahamandaleshwar"
            className="h-full w-full object-cover"
          />
        </div>
        <Typography as="p" variant="cardDescription" className="text-[#a3a3a3]">
          On 26 January 2024, he was anointed Mahamandaleshwar of Juna Akhara,
          becoming the first Keralite in the order to receive this distinguished
          spiritual title in modern times.
        </Typography>
      </div>
    ),
  },
];

type JourneyTimelineProps = {
  /** Desktop gallery scroll progress from parent (0 = first card frozen) */
  galleryProgress?: number;
};

export default function JourneyTimeline({
  galleryProgress,
}: JourneyTimelineProps) {
  const [isDesktop, setIsDesktop] = useState<boolean | null>(null);

  useEffect(() => {
    const checkSize = () => {
      // Match lg breakpoint used by EventCarousel drawer split
      setIsDesktop(window.innerWidth >= 1024);
    };

    checkSize();
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  if (isDesktop === null) {
    return <div className="min-h-[100svh] w-full bg-black" />;
  }

  // Desktop: horizontal gallery. Mobile/tablet: vertical timeline.
  return isDesktop ? (
    <div className="h-full min-h-0 w-full">
      <HorizontalGallery progress={galleryProgress} />
    </div>
  ) : (
    <Timeline data={timelineData} />
  );
}
