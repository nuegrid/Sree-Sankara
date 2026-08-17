import type { Metadata } from "next";
import Footer from "@/components/layout/Footer";
import LegalContent from "@/components/legal/LegalContent";
import { privacyPolicy } from "@/lib/legal/privacy";

export const metadata: Metadata = {
  title: "Privacy Policy | Sree Sankara",
  description:
    "How SREE SANKARA SEVA PARISHAD collects, uses, stores and protects personal information on anandavan.org.",
};

export default function PrivacyPage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col bg-[#FAF8F5]">
      <LegalContent document={privacyPolicy} />
      <Footer overlap={false} />
    </div>
  );
}
