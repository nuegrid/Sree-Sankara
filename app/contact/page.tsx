import type { Metadata } from "next";
import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactContent from "@/components/contact/ContactContent";

export const metadata: Metadata = {
  title: "Contact | Sree Sankara",
  description: "Get in touch with Sree Sankara for spiritual guidance and updates.",
};

export default function ContactPage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col bg-[#FAF8F5]">
      <TopBar />
      <Navbar variant="solid" />
      <ContactContent />
      <Footer overlap={false} />
    </div>
  );
}
