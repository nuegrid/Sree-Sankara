import type { Metadata } from "next";
import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MediaContent from "@/components/media/MediaContent";

export const metadata: Metadata = {
  title: "Media | Sree Sankara",
  description:
    "Latest news, events, and blog reflections from Swami Anandavanam Bharathi.",
};

export default function MediaPage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col bg-[#FAF8F5]">
      <TopBar />
      <Navbar variant="solid" />
      <MediaContent />
      <Footer overlap={false} />
    </div>
  );
}
