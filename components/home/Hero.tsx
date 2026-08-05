"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((err) => {
        console.log("Autoplay issue handled:", err);
      });
    }
  }, []);

  return (
    <section className="sticky top-0 w-full h-screen z-0 overflow-hidden flex flex-col items-center">
      {/* Background Video */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/hero_video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Subtle warm gradient overlay to enhance text readability without darkening the video */}
      <div className="absolute inset-0 bg-gradient-to-b from-amber-50/75 via-amber-50/25 to-transparent z-10 pointer-events-none" />

      {/* Main Content */}
      <div className="relative z-20 mx-auto max-w-5xl px-4 pt-[175px] sm:pt-[195px] md:pt-[215px] lg:pt-[225px] text-center flex flex-col items-center">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[80px] xl:text-[84px] font-normal text-gray-950 tracking-tight leading-[1.05] max-w-4xl">
          Guiding Souls
          <br />
          Inspiring Humanity.
        </h1>
      </div>
    </section>
  );
}
