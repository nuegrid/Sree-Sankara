"use client";

import VolunteerCard from "@/components/cards/VolunteerCard";

const VOLUNTEER_IMAGE = "/images/home/volunteer_card/volunteercard.png";

/**
 * Homepage volunteer CTA section — compact centered card (~80–82vw).
 */
export default function VolunteerSection() {
  return (
    <section className="relative z-20 w-full bg-[#FAF8F5] px-4 py-10 sm:px-6 sm:py-12 md:py-14">
      <div className="mx-auto w-[90%] max-w-[1280px] min-w-0 sm:w-[88%] md:w-[85%]">
        <VolunteerCard
          image={VOLUNTEER_IMAGE}
          eyebrow="Be a Dharma Sevak"
          title="Join Our Volunteer Community"
          description="Your time, skills, and dedication can help us spread spiritual wisdom, support sacred traditions, uplift communities, and protect our environment. Together, let's build a better and more compassionate world rooted in Dharma."
          buttonText="Become a Volunteer"
          href="/volunteer"
          imageAlt="Hands joined in community service"
        />
      </div>
    </section>
  );
}
