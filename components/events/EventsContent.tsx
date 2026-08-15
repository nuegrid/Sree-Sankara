import Typography from "@/components/ui/Typography";
import ViewAllLink from "@/components/ui/ViewAllLink";
import { PAGE_CONTAINER } from "@/lib/layout";
import { cn } from "@/lib/utils";
import { events } from "./data";
import EventsPageCard from "./EventsPageCard";
import MomentsMasonry from "./MomentsMasonry";

export default function EventsContent() {
  return (
    <main className="w-full bg-[#FAF8F5]">
      <div
        className={cn(
          PAGE_CONTAINER,
          "pb-16 pt-8 sm:pb-20 sm:pt-10 md:pb-24 md:pt-12"
        )}
      >
        <Typography
          as="h1"
          variant="aboutTitle"
          className="max-w-[987px] text-black"
        >
          Join Swamiji for discourses, satsangs, and sacred events across the
          country.
        </Typography>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:mt-10 md:grid-cols-2 md:gap-8 lg:gap-10">
          {events.map((event) => (
            <EventsPageCard key={event.id} {...event} />
          ))}
        </div>

        <section className="mt-14 sm:mt-16 md:mt-20 lg:mt-24">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <Typography as="h2" variant="aboutTitle" className="text-black">
              Moments From Our Journey
            </Typography>
            <div className="shrink-0 sm:pb-1">
              <ViewAllLink href="/media">View All</ViewAllLink>
            </div>
          </div>

          <div className="mt-8 sm:mt-10">
            <MomentsMasonry />
          </div>
        </section>
      </div>
    </main>
  );
}
