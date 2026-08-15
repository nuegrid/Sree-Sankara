import type { Metadata } from "next";
import Footer from "@/components/layout/Footer";
import EventsContent from "@/components/events/EventsContent";

export const metadata: Metadata = {
  title: "Events | Sree Sankara",
  description:
    "Join Swamiji for discourses, satsangs, and sacred events across the country.",
};

export default function EventsPage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col bg-[#FAF8F5]">
      <EventsContent />
      <Footer overlap={false} />
    </div>
  );
}
