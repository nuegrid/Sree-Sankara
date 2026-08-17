"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import Typography from "@/components/ui/Typography";

export default function LegalBackButton() {
  const router = useRouter();

  function handleBack() {
    const referrer = document.referrer;
    const fromThisSite =
      referrer.length > 0 && referrer.startsWith(window.location.origin);

    if (fromThisSite) {
      router.back();
      return;
    }

    router.push("/");
  }

  return (
    <button
      type="button"
      onClick={handleBack}
      className="inline-flex items-center gap-2 text-[#FE3E02] transition-colors hover:text-[#e03802]"
    >
      <ArrowLeft className="h-4 w-4" />
      <Typography as="span" variant="buttonSmall" className="text-inherit">
        Back
      </Typography>
    </button>
  );
}
