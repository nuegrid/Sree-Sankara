"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiX, FiChevronRight } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import Typography from "@/components/ui/Typography";

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  pathname: string;
}

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Juna Akhada", href: "/juna-akhada" },
  { name: "Events", href: "/events" },
  { name: "Media", href: "/media" },
  { name: "Volunteer", href: "/volunteer" },
  { name: "Contact", href: "/contact" },
];

export default function MobileDrawer({
  isOpen,
  onClose,
  pathname,
}: MobileDrawerProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <div
      className={`fixed inset-0 z-50 lg:hidden flex justify-end transition-all duration-300 ${
        isOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className={`fixed inset-0 bg-stone-900/60 backdrop-blur-xs transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      />

      <div
        className={`relative w-full max-w-[320px] sm:max-w-[360px] h-full bg-[#FAF8F5] shadow-2xl flex flex-col z-50 transition-transform duration-300 ease-out transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-stone-200/50">
          <Link
            href="/"
            onClick={onClose}
            className="relative block h-10 w-[140px] shrink-0"
            aria-label="Sree Sankara home"
          >
            <Image
              src="/images/home/logo/logo-section.png"
              alt="Sree Sankara"
              fill
              className="object-contain object-left"
              sizes="140px"
            />
          </Link>
          <button
            onClick={onClose}
            className="p-2 -mr-2 rounded-full text-stone-600 hover:bg-stone-200/60 active:scale-95 transition-all cursor-pointer focus:outline-none"
            aria-label="Close menu"
          >
            <FiX size={22} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-4 py-6 flex flex-col gap-1.5">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={onClose}
                className={`flex items-center justify-between px-4 py-3.5 rounded-xl transition-all ${
                  isActive
                    ? "bg-[#2A0707] text-[#f0e9df] shadow-sm"
                    : "text-stone-800 hover:bg-stone-200/40 hover:text-black"
                }`}
              >
                <Typography
                  as="span"
                  variant="bodyBase"
                  className={isActive ? "font-semibold" : "font-medium"}
                >
                  {link.name}
                </Typography>
                <FiChevronRight
                  className={`w-4 h-4 opacity-70 ${
                    isActive ? "text-[#f0e9df]" : "text-stone-400"
                  }`}
                />
              </Link>
            );
          })}
        </div>

        <div className="p-6 border-t border-stone-200/50 bg-stone-100/30 flex flex-col gap-4">
          <Link
            href="/donate"
            onClick={onClose}
            className="group flex items-center justify-center gap-2.5 w-full py-4 rounded-xl bg-[#2A0707] text-[#f0e9df] hover:bg-stone-900 transition-colors active:scale-[0.98] shadow-md shadow-stone-900/10 cursor-pointer"
          >
            <Typography as="span" variant="bodyBase" className="font-semibold">
              Support / Donate
            </Typography>
            <FaHeart className="w-3.5 h-3.5 text-orange-400 group-hover:scale-110 transition-transform" />
          </Link>
          <Typography
            as="p"
            variant="italicCaption"
            className="mx-auto max-w-[240px] text-center text-stone-500"
          >
            &ldquo;Dharma is not just a path, it is the way of living for the
            welfare of all&rdquo;
          </Typography>
        </div>
      </div>
    </div>
  );
}
