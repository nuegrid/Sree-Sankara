import type { Metadata } from "next";
import Footer from "@/components/layout/Footer";
import DonateContent from "@/components/donate/DonateContent";

export const metadata: Metadata = {
  title: "Donate | Sree Sankara",
  description:
    "Support Swami Anandavanam Bharathi's mission. Online donations coming soon — contact us to contribute.",
};

export default function DonatePage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col bg-[#FAF8F5]">
      <DonateContent />
      <Footer overlap={false} />
    </div>
  );
}
