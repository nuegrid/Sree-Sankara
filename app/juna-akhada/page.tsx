import type { Metadata } from "next";
import Footer from "@/components/layout/Footer";
import JunaAkhadaContent from "@/components/juna-akhada/JunaAkhadaContent";

export const metadata: Metadata = {
  title: "Juna Akhada | Sree Sankara",
  description:
    "Discover the legacy of Juna Akhada — ancient monastic tradition, Kumbh Mela, and Swami Anandavanam Bharathi's leadership.",
};

export default function JunaAkhadaPage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col bg-[#FAF8F5]">
      <JunaAkhadaContent />
      <Footer overlap={false} />
    </div>
  );
}
