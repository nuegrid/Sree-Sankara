"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaHeart as HeartIcon } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import MobileDrawer from "./MobileDrawer";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Juna Akhada", href: "/juna-akhada" },
  { name: "Events", href: "/events" },
  { name: "Media", href: "/media" },
  { name: "Volunteer", href: "/volunteer" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`left-0 right-0 z-40 w-full px-4 sm:px-8 lg:px-12 py-3 transition-all duration-300 ${
          isScrolled
            ? "fixed top-0 bg-white/80 backdrop-blur-md border-b border-stone-200/50 shadow-xs"
            : "absolute top-10 sm:top-16 bg-transparent border-none"
        }`}
      >
        <div className="mx-auto max-w-[1280px] grid grid-cols-2 lg:grid-cols-[1fr_auto_1fr] items-center">
          {/* Logo (Left) */}
          <div className="flex items-center justify-start">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative flex items-center justify-center w-11 h-11 rounded-full bg-amber-500/10 border border-amber-600/20 group-hover:scale-105 transition-transform shrink-0">
                <svg
                  viewBox="0 0 100 100"
                  className="w-8 h-8 text-amber-900 fill-current"
                >
                  {/* Artistic monk silhouette */}
                  <circle cx="50" cy="50" r="46" fill="#FDE68A" opacity="0.4" />
                  <path
                    d="M50 15 C38 15 30 25 30 38 C30 46 34 52 40 56 C32 62 25 72 25 85 L75 85 C75 72 68 62 60 56 C66 52 70 46 70 38 C70 25 62 15 50 15 Z M50 22 C58 22 64 29 64 38 C64 47 58 53 50 53 C42 53 36 47 36 38 C36 29 42 22 50 22 Z"
                    fill="#78350F"
                  />
                  <circle cx="50" cy="32" r="3" fill="#D97706" />
                </svg>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-lg font-bold tracking-tight text-gray-900 font-serif">
                  Sree
                </span>
                <span className="text-lg font-bold tracking-tight text-gray-900 font-serif">
                  Sankara
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Links (Center) */}
          <div className="hidden lg:flex items-center justify-center gap-6 xl:gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm transition-colors ${
                    isActive
                      ? "text-[#2A0707] font-bold"
                      : "text-[#2A0707] font-medium hover:opacity-75"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Right CTA (Desktop) / Mobile Toggle */}
          <div className="flex items-center justify-end gap-3">
            <Link
              href="/donate"
              className="group flex items-center gap-2 rounded-full border-2 border-[#2A0707] bg-transparent px-5 py-1.5 text-sm font-medium text-[#2A0707] transition-all hover:bg-[#2A0707] hover:text-white shadow-xs"
            >
              <span>Donate</span>
              <HeartIcon className="w-3.5 h-3.5 text-[#2A0707] group-hover:text-white transition-colors" />
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2 text-gray-900 hover:text-black focus:outline-none cursor-pointer"
              aria-label="Open menu"
            >
              <FiMenu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer (Always sits at z-50 overlaying everything) */}
      <MobileDrawer
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        pathname={pathname}
      />
    </>
  );
}
