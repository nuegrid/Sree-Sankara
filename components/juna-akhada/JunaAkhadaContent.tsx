import Image from "next/image";
import Typography from "@/components/ui/Typography";
import VolunteerCard from "@/components/cards/VolunteerCard";
import InitiativesGrid from "@/components/juna-akhada/InitiativesGrid";
import { PAGE_CONTAINER } from "@/lib/layout";
import { cn } from "@/lib/utils";

const HERO_IMAGE = "/images/Juna_Akhada/juna_akhanda.png.png";
const VOLUNTEER_IMAGE = "/images/home/volunteer_card/volunteercard.png";

/**
 * Juna Akhada page body — legacy story, initiatives, volunteer CTA.
 */
export default function JunaAkhadaContent() {
  return (
    <main className="w-full bg-[#FAF8F5]">
      <div className={cn(PAGE_CONTAINER, "pb-10 pt-8 sm:pb-12 sm:pt-10 md:pb-14 md:pt-12")}>
        <Typography as="h1" variant="aboutTitle" className="max-w-[728px] text-black">
          The Legacy of Juna Akhada
        </Typography>

        <Typography
          as="p"
          variant="aboutBody"
          className="mt-6 max-w-[1369px] text-justify text-[#777777] sm:mt-8"
        >
          Juna Akhada is one of the largest and most influential akharas within
          the Dashanami Sampradaya associated with Adi Shankaracharya. For
          centuries, it has played an important role in preserving spiritual
          traditions, monastic discipline, and the cultural heritage of Sanatan
          Dharma. Through its saints and sadhus, the akhada continues to guide
          seekers on the path of renunciation, wisdom, and selfless service.
        </Typography>

        <div className="relative mt-8 aspect-[2/1] w-full overflow-hidden rounded-2xl sm:mt-10 sm:rounded-3xl">
          <Image
            src={HERO_IMAGE}
            alt="Sadhus of Juna Akhada at a sacred temple complex"
            fill
            priority
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, (max-width: 1400px) 90vw, 1280px"
          />
        </div>

        <section className="mt-10 sm:mt-12 md:mt-14">
          <Typography as="h2" variant="aboutTitle" className="text-black">
            A Legacy Through the Ages
          </Typography>
          <Typography
            as="p"
            variant="aboutBody"
            className="mt-5 max-w-[1373px] text-[#777777] sm:mt-6"
          >
            From the banks of sacred rivers to the gathering grounds of the
            Kumbh, Juna Akhada has preserved the discipline of the akhada
            tradition — meditation, scripture, seva, and the fierce protection
            of Dharma. Its history is written not only in chronicles, but in
            the unbroken chain of Guru and disciple.
          </Typography>
        </section>

        <section className="mt-10 sm:mt-12 md:mt-14">
          <Typography as="h2" variant="aboutTitle" className="text-black">
            Kumbh Mela
          </Typography>
          <Typography
            as="p"
            variant="aboutBody"
            className="mt-5 max-w-[1373px] text-[#777777] sm:mt-6"
          >
            At the Kumbh Mela — the world&apos;s largest spiritual gathering —
            Juna Akhada holds a place of honor. Processions of sadhus, sacred
            baths, discourses, and collective worship renew the bond between
            humanity and the divine, affirming the akhada&apos;s role as a
            guardian of Sanatan Dharma.
          </Typography>
        </section>

        <section className="mt-10 sm:mt-12 md:mt-14">
          <Typography as="h2" variant="aboutTitle" className="text-black">
            Swamiji &amp; Juna Akhada
          </Typography>
          <div className="mt-5 max-w-[1373px] space-y-4 sm:mt-6">
            <Typography as="p" variant="aboutBody" className="text-[#777777]">
              As Mahamandaleshwar of Juna Akhada, Swami Anandavanam Bharathi
              carries forward this sacred lineage with wisdom, compassion, and
              tireless seva — guiding communities toward a life rooted in Dharma.
            </Typography>
            <Typography as="p" variant="aboutBody" className="text-[#777777]">
              Through spiritual leadership and community service, he bridges
              ancient monastic tradition with the needs of the modern world,
              inviting every seeker to walk the path of truth and selfless
              service.
            </Typography>
          </div>
        </section>

        <section className="mt-12 sm:mt-14 md:mt-16">
          <Typography as="h2" variant="aboutTitle" className="text-black">
            Our Initiatives
          </Typography>
          <InitiativesGrid />
        </section>
      </div>

      <section className="w-full bg-[#FAF8F5] px-4 pb-14 pt-6 sm:px-6 sm:pb-16 md:pb-20">
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
    </main>
  );
}
