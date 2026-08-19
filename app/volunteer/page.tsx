import type { Metadata } from "next";
import Footer from "@/components/layout/Footer";
import VolunteerContent from "@/components/volunteer/VolunteerContent";

export const metadata: Metadata = {
  title: "Volunteer | Sree Sankara",
  description:
    "Serve with purpose — volunteer for spiritual programs, community welfare, and environmental seva with Sree Sankara.",
};

export default function VolunteerPage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col bg-[#FAF8F5]">
      <VolunteerContent />
      <Footer overlap={false} />
    </div>
  );
}
