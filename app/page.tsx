import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import AboutSection from "@/components/home/AboutSection";
import EventCarousel from "@/components/home/EventCarousel";
import QuoteSection from "@/components/home/QuoteSection";
import FeaturedNewsSection from "@/components/home/featured-news/FeaturedNewsSection";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full bg-white flex flex-col">
      <TopBar />
      <Navbar />
      <Hero />
      <AboutSection />
      <EventCarousel />
      <QuoteSection />
      <FeaturedNewsSection />
    </div>
  );
}
