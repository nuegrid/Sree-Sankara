import Image from "next/image";
import { Sparkles, HeartHandshake, Sprout, type LucideIcon } from "lucide-react";
import Typography from "@/components/ui/Typography";
import { PAGE_CONTAINER } from "@/lib/layout";
import { cn } from "@/lib/utils";
import VolunteerForm from "./VolunteerForm";

const VOLUNTEER_IMAGE = "/images/Volunteer/img.png";

const sevaAreas: {
  title: string;
  description: string;
  Icon: LucideIcon;
}[] = [
  {
    title: "Spiritual Programs",
    description:
      "Support satsangs, Dharma gatherings, spiritual events, and pilgrimage initiatives.",
    Icon: Sparkles,
  },
  {
    title: "Community Welfare",
    description:
      "Help provide food, healthcare, humanitarian assistance, and support to communities in need.",
    Icon: HeartHandshake,
  },
  {
    title: "Environmental Seva",
    description:
      "Contribute to tree planting, conservation, and initiatives that protect our natural environment.",
    Icon: Sprout,
  },
];

/**
 * Volunteer page — hero, seva areas, and application form.
 */
export default function VolunteerContent() {
  return (
    <main className="w-full bg-[#FAF8F5]">
      <div className={cn(PAGE_CONTAINER, "pb-16 pt-10 sm:pb-20 sm:pt-12 md:pb-24")}>
        {/* Hero */}
        <section className="flex w-full flex-col items-start text-left">
          <Typography as="h1" variant="aboutTitle" className="text-black">
            Serve With Purpose.
          </Typography>
          <Typography
            as="p"
            variant="aboutBody"
            className="mt-5 w-full text-left text-[#777777] sm:mt-6"
          >
            Offer your time, skills, and dedication to support spiritual
            programs, community welfare, environmental initiatives, and
            educational activities. Join a community committed to serving
            humanity with compassion, discipline, and purpose.
          </Typography>
        </section>

        <div className="relative mt-8 aspect-[21/9] w-full overflow-hidden rounded-2xl sm:mt-10 sm:aspect-[2.4/1] sm:rounded-3xl md:aspect-[2.6/1]">
          <Image
            src={VOLUNTEER_IMAGE}
            alt="Volunteers serving at a community welfare drive"
            fill
            priority
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, (max-width: 1400px) 90vw, 1280px"
          />
        </div>

        {/* Seva areas */}
        <section className="mt-12 sm:mt-14 md:mt-16">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-0">
            {sevaAreas.map(({ title, description, Icon }, index) => (
              <article
                key={title}
                className={cn(
                  "flex flex-col md:px-8 lg:px-10",
                  index > 0 && "md:border-l md:border-black/15",
                  index === 0 && "md:pl-0",
                  index === sevaAreas.length - 1 && "md:pr-0"
                )}
              >
                <Icon
                  className="h-8 w-8 text-[#FE3E02] sm:h-9 sm:w-9"
                  strokeWidth={1.5}
                  aria-hidden
                />
                <Typography
                  as="h2"
                  variant="initiativeTitle"
                  className="mt-5 text-black sm:mt-6"
                >
                  {title}
                </Typography>
                <Typography
                  as="p"
                  variant="initiativeBody"
                  className="mt-2.5 max-w-[360px] text-[#A4A4A4] sm:mt-3"
                >
                  {description}
                </Typography>
              </article>
            ))}
          </div>
        </section>

        {/* Join the Seva */}
        <section className="mt-14 grid grid-cols-1 gap-10 sm:mt-16 lg:mt-20 lg:grid-cols-2 lg:gap-14 lg:items-start">
          <div className="flex flex-col gap-4 sm:gap-5">
            <Typography as="h2" variant="aboutTitle" className="text-black">
              Join the Seva
            </Typography>
            <Typography
              as="p"
              variant="aboutBody"
              className="max-w-md text-[#777777]"
            >
              Join us in creating meaningful change through service,
              compassion, and Dharma.
            </Typography>
          </div>
          <VolunteerForm />
        </section>
      </div>
    </main>
  );
}
