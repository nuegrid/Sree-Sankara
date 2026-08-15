"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiX } from "react-icons/fi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslation } from "react-i18next";
import Typography from "@/components/ui/Typography";

const YOUTUBE_VIDEO_ID = "st-aq-ds8NM";
const YOUTUBE_EMBED_SRC = `https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&rel=0&modestbranding=1&playsinline=1`;

export default function AboutSection() {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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

  useEffect(() => {
    if (!isPlaying) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsPlaying(false);
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isPlaying]);

  const videoModal =
    mounted &&
    isPlaying &&
    createPortal(
      <div
        className="fixed inset-0 z-[500] flex items-center justify-center bg-black/55 p-5 sm:p-10"
        role="dialog"
        aria-modal="true"
        aria-label="Video player"
        onClick={() => setIsPlaying(false)}
      >
        <div
          className="relative aspect-[9/16] h-[min(78vh,calc((100vw-2.5rem)*16/9))] w-auto max-w-[calc(100vw-2.5rem)] overflow-hidden rounded-2xl bg-black shadow-2xl sm:aspect-video sm:h-auto sm:max-h-[72vh] sm:w-full sm:max-w-4xl"
          onClick={(event) => event.stopPropagation()}
        >
          <button
            type="button"
            onClick={() => setIsPlaying(false)}
            className="absolute top-3 right-3 z-10 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-black/55 text-white backdrop-blur-sm transition-colors hover:bg-black/75 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            aria-label={t("home.closeVideo")}
          >
            <FiX size={22} />
          </button>

          <iframe
            title="Swami Anandavanam — Malliyoor Temple visit"
            src={YOUTUBE_EMBED_SRC}
            className="absolute inset-0 h-full w-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
      </div>,
      document.body
    );

  return (
    <>
      <section
        ref={sectionRef}
        className="about-section relative z-10 w-full bg-[#FAF8F5] rounded-t-[40px] sm:rounded-t-[60px] md:rounded-t-[70px] pt-14 pb-16 sm:pt-20 sm:pb-24 px-6 sm:px-12 md:px-16 lg:px-24 -mt-[50vh] sm:-mt-24 md:-mt-28 shadow-2xl"
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
              {t("home.aboutLabel")}
            </Typography>

            <Typography
              as="h2"
              variant="sectionTitle"
              className="text-gray-950"
            >
              {t("home.aboutTitle")}
            </Typography>

            <div className="flex max-w-xl flex-col gap-3">
              <Typography as="p" variant="bodyRelaxed" className="text-gray-600">
                {t("home.aboutP1")}
              </Typography>
              <Typography as="p" variant="bodyRelaxed" className="text-gray-600">
                {t("home.aboutP2")}
              </Typography>
            </div>

            <Link
              href="/about"
              className="mt-2 inline-flex items-center gap-2.5 px-5 py-3 rounded-xl border border-orange-300 text-orange-600 hover:bg-orange-50 hover:border-orange-400 transition-all group"
            >
              <Typography as="span" variant="linkTextMedium">
                {t("home.discoverJourney")}
              </Typography>
              <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Right Column — video thumbnail opens popup */}
          <div className="relative w-full overflow-hidden rounded-3xl shadow-xl aspect-[4/3] sm:rounded-[32px] lg:aspect-[16/11]">
            <button
              type="button"
              onClick={() => setIsPlaying(true)}
              className="group absolute inset-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FE3E02]"
              aria-label={t("home.playVideo")}
            >
              <Image
                src="/images/home/hero/tumbline.jpg"
                alt="Swami Anandavanam"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              <span className="absolute inset-0 z-10 flex items-center justify-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-[#E8B84A] bg-white/95 shadow-lg transition-transform group-hover:scale-105 sm:h-[72px] sm:w-[72px]">
                  <span
                    className="ml-1 h-0 w-0 border-y-[10px] border-l-[16px] border-y-transparent border-l-[#1a1a1a] sm:border-y-[11px] sm:border-l-[18px]"
                    aria-hidden
                  />
                </span>
              </span>
            </button>
          </div>
        </div>
      </section>

      {videoModal}
    </>
  );
}
