import type { Metadata } from "next";
import Footer from "@/components/layout/Footer";
import ContactContent from "@/components/contact/ContactContent";

export const metadata: Metadata = {
  title: "Contact | Sree Sankara",
  description: "Get in touch with Sree Sankara for spiritual guidance and updates.",
};

export default function ContactPage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col bg-[#FAF8F5]">
      <ContactContent />
      <Footer overlap={false} />
    </div>
  );
}
