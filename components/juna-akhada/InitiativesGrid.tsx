"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {
  Sparkles,
  HeartHandshake,
  GraduationCap,
  Sprout,
  HeartPulse,
  BookOpen,
  type LucideIcon,
} from "lucide-react";
import Typography from "@/components/ui/Typography";

gsap.registerPlugin(ScrollTrigger);

const initiatives: {
  title: string;
  description: string;
  Icon: LucideIcon;
}[] = [
  {
    title: "Spiritual Activities",
    description:
      "Facilitating pilgrimages, Kumbh Mela journeys, sacred yatras, spiritual gatherings, and knowledge forums such as Sharada Sabha.",
    Icon: Sparkles,
  },
  {
    title: "Social Service & Empowerment",
    description:
      "Supporting communities through education guidance, healthcare assistance, legal support, government service assistance, and humanitarian initiatives.",
    Icon: HeartHandshake,
  },
  {
    title: "Youth Empowerment",
    description:
      "Creating opportunities through higher education guidance, sports, arts, Kalarippayattu, yoga, meditation, leadership development, and spiritual training.",
    Icon: GraduationCap,
  },
  {
    title: "Environmental Seva",
    description:
      "Working towards tree plantation, conservation of sacred water bodies, waste management, afforestation, and greater environmental awareness.",
    Icon: Sprout,
  },
  {
    title: "Ayurveda & Healthcare",
    description:
      "Supporting initiatives focused on healthcare for sadhus and sanyasis and developing research-oriented approaches that bring traditional Ayurvedic knowledge together with modern practices.",
    Icon: HeartPulse,
  },
  {
    title: "Preserving Ancient Knowledge",
    description:
      "Working toward the preservation and digitisation of ancient Indian manuscripts and supporting the revival of Gurukula-based education.",
    Icon: BookOpen,
  },
];

/**
 * Editorial 3×2 initiatives grid — left rail borders, no cards.
 */
export default function InitiativesGrid() {
  const gridRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const items = gridRef.current?.querySelectorAll("[data-initiative-item]");
      if (!items?.length) return;

      gsap.fromTo(
        items,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 85%",
            once: true,
          },
        }
      );
    },
    { scope: gridRef }
  );

  return (
    <div
      ref={gridRef}
      className="mt-10 grid grid-cols-1 gap-x-10 gap-y-14 sm:mt-12 sm:grid-cols-2 sm:gap-x-12 sm:gap-y-16 lg:mt-14 lg:grid-cols-3 lg:gap-x-14 lg:gap-y-[72px]"
    >
      {initiatives.map(({ title, description, Icon }) => (
        <article
          key={title}
          data-initiative-item
          className="relative min-h-0 border-l-2 border-black/15 py-4 pl-5 sm:py-5 sm:pl-6 lg:min-h-[220px] lg:py-6 lg:pl-7"
        >
          <Icon
            className="h-8 w-8 text-[#FE3E02] sm:h-9 sm:w-9"
            strokeWidth={1.5}
            aria-hidden
          />
          <Typography
            as="h3"
            variant="initiativeTitle"
            className="mt-6 max-w-[320px] text-black sm:mt-7"
          >
            {title}
          </Typography>
          <Typography
            as="p"
            variant="initiativeBody"
            className="mt-2.5 max-w-[400px] text-[#A4A4A4] sm:mt-3"
          >
            {description}
          </Typography>
        </article>
      ))}
    </div>
  );
}
