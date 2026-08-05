"use client";

import { useEffect } from "react";
import Link from "next/link";
import { FiX, FiChevronRight } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";

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

export default function MobileDrawer({ isOpen, onClose, pathname }: MobileDrawerProps) {
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
        isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Backdrop overlay */}
      <div
        className={`fixed inset-0 bg-stone-900/60 backdrop-blur-xs transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      />

      {/* Drawer content panel */}
      <div
        className={`relative w-full max-w-[320px] sm:max-w-[360px] h-full bg-[#FAF8F5] shadow-2xl flex flex-col z-50 transition-transform duration-300 ease-out transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header section with branding/close */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-stone-200/50">
          <div className="flex flex-col">
            <span className="text-lg font-bold font-serif text-[#2A0707] tracking-tight">Sree Sankara</span>
            <span className="text-[10px] uppercase tracking-wider text-stone-500 font-semibold mt-0.5">Spiritual Mission</span>
          </div>
          <button
            onClick={onClose}
            className="p-2 -mr-2 rounded-full text-stone-600 hover:bg-stone-200/60 active:scale-95 transition-all cursor-pointer focus:outline-none"
            aria-label="Close menu"
          >
            <FiX size={22} />
          </button>
        </div>

        {/* Links listing */}
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
                    ? "bg-[#2A0707] text-[#f0e9df] font-semibold shadow-sm"
                    : "text-stone-800 hover:bg-stone-200/40 hover:text-black font-medium"
                }`}
              >
                <span className="text-base">{link.name}</span>
                <FiChevronRight className={`w-4 h-4 opacity-70 ${isActive ? "text-[#f0e9df]" : "text-stone-400"}`} />
              </Link>
            );
          })}
        </div>

        {/* Premium footer with CTA */}
        <div className="p-6 border-t border-stone-200/50 bg-stone-100/30 flex flex-col gap-4">
          <Link
            href="/donate"
            onClick={onClose}
            className="group flex items-center justify-center gap-2.5 w-full py-4 rounded-xl bg-[#2A0707] text-[#f0e9df] text-base font-semibold hover:bg-stone-900 transition-colors active:scale-[0.98] shadow-md shadow-stone-900/10 cursor-pointer"
          >
            <span>Support / Donate</span>
            <FaHeart className="w-3.5 h-3.5 text-orange-400 group-hover:scale-110 transition-transform" />
          </Link>
          <p className="text-xs text-center text-stone-500 font-serif italic max-w-[240px] mx-auto leading-relaxed">
            &ldquo;Dharma is not just a path, it is the way of living for the welfare of all&rdquo;
          </p>
        </div>
      </div>
    </div>
  );
}
