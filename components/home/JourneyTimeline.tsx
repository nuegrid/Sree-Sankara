"use client";

import { useEffect, useState } from "react";
import HorizontalGallery from "./HorizontalGallery";
import { Timeline } from "../ui/timeline";
import Typography from "@/components/ui/Typography";

const timelineData = [
  {
    title: "Student Leader",
    content: (
      <div className="flex flex-col gap-4">
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-neutral-800 bg-[#171717]">
          <img
            src="/images/journey/a.png"
            alt="Student Leader"
            className="h-full w-full object-cover"
          />
        </div>
        <Typography
          as="p"
          variant="bodyRelaxedSm"
          className="text-neutral-400"
        >
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
      <div className="flex flex-col gap-4">
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-neutral-800 bg-[#171717]">
          <img
            src="/images/journey/b.png"
            alt="A Spiritual Awakening"
            className="h-full w-full object-cover"
          />
        </div>
        <Typography
          as="p"
          variant="bodyRelaxedSm"
          className="text-neutral-400"
        >
          In 2001, a life-changing visit to the Kumbh Mela sparked a profound
          transformation. Time spent on the banks of the Ganga inspired Sanatan
          Dharma and inner realization.
        </Typography>
      </div>
    ),
  },
  {
    title: "Path of Devotion",
    content: (
      <div className="flex flex-col gap-4">
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-neutral-800 bg-[#171717]">
          <img
            src="/images/journey/c.png"
            alt="Path of Devotion"
            className="h-full w-full object-cover"
          />
        </div>
        <Typography
          as="p"
          variant="bodyRelaxedSm"
          className="text-neutral-400"
        >
          Embracing a life of deep meditation and spiritual practice,
          dedicating every moment to the pursuit of higher consciousness and
          divine connection.
        </Typography>
      </div>
    ),
  },
  {
    title: "Guiding the Light",
    content: (
      <div className="flex flex-col gap-4">
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-neutral-800 bg-[#171717]">
          <img
            src="/images/journey/d.png"
            alt="Guiding the Light"
            className="h-full w-full object-cover"
          />
        </div>
        <Typography
          as="p"
          variant="bodyRelaxedSm"
          className="text-neutral-400"
        >
          Now traveling and sharing wisdom, helping seekers discover their
          inner potential and peace in the modern world.
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
      setIsDesktop(window.innerWidth >= 768);
    };

    checkSize();
    window.addEventListener("resize", checkSize);

    return () => window.removeEventListener("resize", checkSize);
  }, []);

  if (isDesktop === null) {
    return <div className="h-full min-h-screen w-full bg-black" />;
  }

  return isDesktop ? (
    <div className="h-full min-h-0 w-full">
      <HorizontalGallery progress={galleryProgress} />
    </div>
  ) : (
    <Timeline data={timelineData} />
  );
}
