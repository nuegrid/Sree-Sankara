import Image from "next/image";
import Typography from "@/components/ui/Typography";
import { PAGE_CONTAINER } from "@/lib/layout";
import { cn } from "@/lib/utils";

const ABOUT_IMAGE = "/images/about/img.jpg";

const missionPillars = [
  {
    title: "Spiritual Guidance",
    description:
      "Sharing the timeless wisdom of Sanatan Dharma through discourses, satsangs, and personal counsel.",
  },
  {
    title: "Seva & Community Welfare",
    description:
      "Serving communities through selfless action, compassion, and practical support for those in need.",
  },
  {
    title: "Youth Empowerment",
    description:
      "Inspiring the next generation with values, leadership, and a living connection to Dharma.",
  },
  {
    title: "Cultural Preservation",
    description:
      "Protecting and celebrating sacred traditions, rituals, and the cultural heritage of Bharat.",
  },
  {
    title: "Environmental Responsibility",
    description:
      "Honoring nature as sacred — encouraging care for the earth as an expression of Dharma.",
  },
];

/**
 * About page body — all copy via Typography variants.
 */
export default function AboutContent() {
  return (
    <main className="w-full bg-[#FAF8F5]">
      <div className={cn(PAGE_CONTAINER, "pb-14 pt-8 sm:pb-16 sm:pt-10 md:pb-20 md:pt-12")}>
        <Typography
          as="h1"
          variant="aboutTitle"
          className="max-w-[987px] text-black"
        >
          A Life Dedicated to Dharma, Wisdom &amp; Selfless Service
        </Typography>

        <div className="mt-6 max-w-[1369px] space-y-4 sm:mt-8">
          <Typography as="p" variant="aboutBody" className="text-[#777777]">
            Swami Anandavanam Bharathi is a revered spiritual leader and
            Mahamandaleshwar of Juna Akhada, one of India&apos;s oldest and
            largest monastic orders. His journey from student leadership to
            spiritual enlightenment reflects a life dedicated to truth, service,
            and the timeless wisdom of Sanatan Dharma.
          </Typography>
          <Typography as="p" variant="aboutBody" className="text-[#777777]">
            Rooted in sacred tradition yet alive to the needs of the present,
            his teachings invite every seeker to walk the path of Dharma with
            courage, humility, and compassion.
          </Typography>
        </div>

        <div className="relative mt-8 aspect-[2/1] w-full overflow-hidden rounded-2xl sm:mt-10 sm:rounded-3xl">
          <Image
            src={ABOUT_IMAGE}
            alt="Swami Anandavanam Bharathi with devotees"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1152px"
          />
        </div>

        <section className="mt-10 sm:mt-12 md:mt-14">
          <Typography as="h2" variant="aboutTitle" className="text-black">
            Our Mission
          </Typography>
          <div className="mt-5 max-w-[1373px] space-y-4 sm:mt-6">
            <Typography as="p" variant="aboutBody" className="text-[#777777]">
              To preserve and promote Sanatan Dharma through spiritual guidance,
              selfless service, education, cultural preservation, and community
              welfare. We aim to make spiritual wisdom accessible to people while
              creating meaningful opportunities for seva, youth development,
              environmental care, and cultural continuity.
            </Typography>
          </div>

          <Typography
            as="p"
            variant="aboutPillarTitle"
            className="mt-8 text-black sm:mt-10"
          >
            Mission Pillars
          </Typography>

          <ul className="mt-4 list-disc space-y-3 pl-6 marker:text-black sm:mt-5 sm:space-y-4 sm:pl-8">
            {missionPillars.map((pillar) => (
              <li key={pillar.title} className="pl-1">
                <Typography as="p" variant="aboutBody" className="text-[#777777]">
                  <Typography
                    as="span"
                    variant="aboutPillarTitle"
                    className="text-black"
                  >
                    {pillar.title}
                  </Typography>
                  {" — "}
                  {pillar.description}
                </Typography>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-10 sm:mt-12 md:mt-14">
          <Typography as="h2" variant="aboutTitle" className="text-black">
            Our Vision
          </Typography>
          <div className="mt-5 max-w-[1373px] space-y-4 sm:mt-6">
            <Typography as="p" variant="aboutBody" className="text-[#777777]">
              To build a spiritually awakened, compassionate, and empowered
              society rooted in the timeless values of Sanatan Dharma. We envision
              a future where spiritual wisdom, selfless service, education,
              cultural heritage, and environmental responsibility come together to
              uplift humanity.
            </Typography>
          </div>
        </section>

        <section className="mt-10 sm:mt-12 md:mt-14">
          <Typography as="h2" variant="aboutTitle" className="text-black">
            Spiritual Journey
          </Typography>
          <Typography
            as="p"
            variant="aboutBody"
            className="mt-5 max-w-[1373px] text-[#777777] sm:mt-6"
          >
            His journey from student leadership and journalism to spiritual life
            reflects a profound transformation rooted in discipline,
            self-realization, and service.
          </Typography>
        </section>
      </div>
    </main>
  );
}
