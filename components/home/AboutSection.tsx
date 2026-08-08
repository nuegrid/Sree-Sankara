"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Typography from "@/components/ui/Typography";

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (contentRef.current && sectionRef.current) {
      gsap.fromTo(
        contentRef.current,
        {
          y: 100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
          },
        }
      );
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className="about-section relative z-20 w-full bg-[#FAF8F5] rounded-t-[40px] sm:rounded-t-[60px] md:rounded-t-[70px] pt-14 pb-16 sm:pt-20 sm:pb-24 px-6 sm:px-12 md:px-16 lg:px-24 -mt-16 sm:-mt-24 shadow-2xl"
    >
      <div
        ref={contentRef}
        className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center"
      >
        {/* Left Column - Text Content */}
        <div className="flex flex-col items-start gap-4 sm:gap-5">
          <Typography
            as="span"
            variant="sectionLabel"
            className="text-orange-600"
          >
            About Swami Anandavanam
          </Typography>

          <Typography
            as="h2"
            variant="sectionTitle"
            className="text-gray-950"
          >
            A Life Dedicated to
            <br className="hidden sm:block" /> Dharma &amp; Humanity
          </Typography>

          <Typography
            as="p"
            variant="bodyRelaxed"
            className="max-w-xl text-gray-600"
          >
            Swamiji is a revered spiritual leader, philosopher and guide
            dedicated to reviving the timeless wisdom of Sanatan Dharma and
            serving humanity selflessly.
          </Typography>

          <Link
            href="/about"
            className="mt-2 inline-flex items-center gap-2.5 px-5 py-3 rounded-xl border border-orange-300 text-orange-600 hover:bg-orange-50 hover:border-orange-400 transition-all group"
          >
            <Typography as="span" variant="linkTextMedium">
              Learn More About Swami Anandavanam
            </Typography>
            <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Right Column - Swami Image Card */}
        <div className="relative w-full rounded-3xl sm:rounded-[32px] overflow-hidden shadow-xl aspect-[4/3] lg:aspect-[16/11] group">
          <Image
            src="/images/hero/about_swami.png"
            alt="Swami Anandavanam"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
        </div>
      </div>
    </section>
  );
}
