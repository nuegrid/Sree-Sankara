import type { Metadata } from "next";
import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import NewsContent from "@/components/news/NewsContent";

export const metadata: Metadata = {
  title: "News | Sree Sankara",
  description: "Latest updates and news from Sree Sankara.",
};

export default function NewsPage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col bg-[#FAF8F5]">
      <TopBar />
      <Navbar variant="solid" />
      <NewsContent />
      <Footer overlap={false} />
    </div>
  );
}
