import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import AboutSection from "@/components/home/AboutSection";
import EventCarousel from "@/components/home/upcomming_event/EventCarousel";
import QuoteSection from "@/components/home/QuoteSection";
import FeaturedNewsSection from "@/components/home/featured-news/FeaturedNewsSection";
import VolunteerSection from "@/components/home/volunteer/VolunteerSection";
import DonationSection from "@/components/home/donation/DonationSection";

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
      <VolunteerSection />
      <DonationSection />
      <Footer />
    </div>
  );
}
