import type { Metadata } from "next";
import Footer from "@/components/layout/Footer";
import LegalContent from "@/components/legal/LegalContent";
import { termsAndConditions } from "@/lib/legal/terms";

export const metadata: Metadata = {
  title: "Terms and Conditions | Sree Sankara",
  description:
    "Terms governing use of anandavan.org, donations, events and associated charitable initiatives.",
};

export default function TermsPage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col bg-[#FAF8F5]">
      <LegalContent document={termsAndConditions} />
      <Footer overlap={false} />
    </div>
  );
}
