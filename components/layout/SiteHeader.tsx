"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";

/**
 * Top bar + nav stay pinned. On Home the nav is transparent until scroll.
 */
export default function SiteHeader() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  return (
    <div className="sticky top-0 z-[420] w-full">
      <TopBar />
      <Navbar transparent={isHome && !scrolled} />
    </div>
  );
}
