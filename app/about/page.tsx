import type { Metadata } from "next";
import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AboutContent from "@/components/about/AboutContent";

export const metadata: Metadata = {
  title: "About | Sree Sankara",
  description:
    "Mahamandaleshwar Swami Anandavanam Bharati Maharaj — a journey from public life to spiritual leadership in the Juna Akhada.",
};

export default function AboutPage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col bg-[#FAF8F5]">
      <TopBar />
      <Navbar variant="solid" />
      <AboutContent />
      <Footer overlap={false} />
    </div>
  );
}
