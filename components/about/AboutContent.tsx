import Image from "next/image";
import Typography from "@/components/ui/Typography";
import { PAGE_CONTAINER } from "@/lib/layout";
import { cn } from "@/lib/utils";
import { teachings } from "./data";
import AboutJourney from "./AboutJourney";
import AboutPrinciples from "./AboutPrinciples";

const ABOUT_IMAGE = "/images/about/img1.jpg";

/**
 * About page — editorial layout with clear section rhythm.
 */
export default function AboutContent() {
  return (
    <main className="w-full bg-[#FAF8F5]">
      <div
        className={cn(
          PAGE_CONTAINER,
          "pb-16 pt-8 sm:pb-20 sm:pt-10 md:pb-24 md:pt-12"
        )}
      >
        {/* Intro */}
        <header>
          <Typography
            as="span"
            variant="sectionLabel"
            className="text-[#FE3E02]"
          >
            About Swami Anandavanam Bharati
          </Typography>
          <Typography
            as="h1"
            variant="aboutTitle"
            className="mt-3 text-black sm:mt-4"
          >
            A Journey from Public Life to Spiritual Leadership
          </Typography>
          <div className="mt-6 space-y-4 sm:mt-8">
            <Typography as="p" variant="aboutBody" className="text-[#777777]">
              Mahamandaleshwar Swami Anandavanam Bharati Maharaj is a spiritual
              leader associated with the Sri Panch Dasanam Juna Akhada and a
              prominent figure in India&apos;s contemporary spiritual and
              cultural landscape.
            </Typography>
            <Typography as="p" variant="aboutBody" className="text-[#777777]">
              A native of Kerala, Swamiji&apos;s journey to spiritual
              leadership reflects an unusual transition from education and
              public life to the path of Sanatana Dharma and sannyasa.
            </Typography>
          </div>
        </header>

        <div className="relative mt-10 aspect-[2/1] w-full overflow-hidden rounded-2xl sm:mt-12 sm:rounded-3xl">
          <Image
            src={ABOUT_IMAGE}
            alt="Swami Anandavanam Bharati with devotees"
            fill
            priority
            className="object-cover object-[center_58%]"
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1152px"
          />
        </div>

        <div className="mt-10 space-y-4 sm:mt-12">
          <Typography as="p" variant="aboutBody" className="text-[#777777]">
            Born as Salil into the Menokki family of Chalakkudy in Thrissur
            district, Kerala, he pursued graduate and postgraduate studies in
            Political Science at Kerala Varma College, Thrissur. He was active
            in student politics before entering the media profession, where he
            worked with Mathrubhumi and was involved in media consultancy. His
            engagement with Malayalam literature also included writing, with his
            short story <em>Shikhamani</em> being adapted into a film.
          </Typography>
          <Typography as="p" variant="aboutBody" className="text-[#777777]">
            His spiritual journey eventually led him to renounce worldly life
            and enter the monastic tradition. He was initiated as Swami
            Anandavanam Bharati and subsequently rose to the position of
            Mahamandaleshwar in the Juna Akhada at Prayagraj Kumbhamela in
            January 2025.
          </Typography>
          <Typography as="p" variant="aboutBody" className="text-[#777777]">
            His public work has since focused on Sanatana Dharma, spiritual
            awakening, cultural continuity, social organisation, temple
            traditions and the role of spiritual institutions in contemporary
            society.
          </Typography>
        </div>

        {/* Transformation */}
        <section className="mt-16 border-t border-stone-200/80 pt-12 sm:mt-20 sm:pt-16">
          <Typography as="h2" variant="aboutTitle" className="text-black">
            A Journey of Transformation
          </Typography>
          <Typography
            as="p"
            variant="aboutPillarTitle"
            className="mt-4 text-black"
          >
            From Public Life to Spiritual Leadership
          </Typography>
          <div className="mt-5 space-y-4">
            <Typography as="p" variant="aboutBody" className="text-[#777777]">
              Swami Anandavanam Bharati&apos;s life represents a distinctive
              journey across different spheres of Indian public life—from
              education and student activism to journalism, literature, media
              and ultimately spiritual renunciation.
            </Typography>
            <Typography as="p" variant="aboutBody" className="text-[#777777]">
              His journey reflects a continuing search for meaning, identity and
              higher truth, culminating in his commitment to the Sanatana Dharma
              tradition.
            </Typography>
          </div>
        </section>

        <AboutJourney />

        <AboutPrinciples />

        {/* Teachings */}
        <section className="mt-16 border-t border-stone-200/80 pt-12 sm:mt-20 sm:pt-16">
          <Typography as="h2" variant="aboutTitle" className="text-black">
            Teachings &amp; Philosophy
          </Typography>
          <div className="mt-8 grid grid-cols-1 gap-8 sm:mt-10 sm:grid-cols-2 lg:gap-x-14 lg:gap-y-12">
            {teachings.map((item) => (
              <article
                key={item.title}
                className="border-l-2 border-[#FE3E02]/40 pl-5"
              >
                <Typography
                  as="h3"
                  variant="aboutPillarTitle"
                  className="text-black"
                >
                  {item.title}
                </Typography>
                <Typography
                  as="p"
                  variant="aboutBody"
                  className="mt-2 text-[#777777]"
                >
                  {item.description}
                </Typography>
              </article>
            ))}
          </div>
        </section>

        {/* Closing */}
        <section className="mt-16 border-t border-stone-200/80 pt-12 sm:mt-20 sm:pt-16">
          <div>
            <Typography as="h2" variant="aboutTitle" className="text-black">
              A Life of Dharma, Culture &amp; Service
            </Typography>
            <Typography
              as="p"
              variant="aboutBody"
              className="mt-5 text-[#777777] sm:mt-6"
            >
              Swami Anandavanam Bharati&apos;s work brings together spiritual
              awakening, cultural continuity, social organisation and service.
              His journey from public life to spiritual leadership reflects a
              continuing commitment to Sanatana Dharma and its relevance in
              contemporary society.
            </Typography>
          </div>
        </section>
      </div>
    </main>
  );
}
