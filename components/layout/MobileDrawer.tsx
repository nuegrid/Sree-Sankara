"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Image from "next/image";
import { FiChevronRight } from "react-icons/fi";
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
  { name: "Donation", href: "/donate" },
  { name: "Contact", href: "/contact" },
];

export default function MobileDrawer({
  isOpen,
  onClose,
  pathname,
}: MobileDrawerProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, onClose]);

  if (!mounted || !isOpen) return null;

  return createPortal(
    <div
      id="mobile-navigation"
      className="fixed inset-0 z-[300] flex justify-end lg:hidden"
      aria-hidden={false}
    >
      <button
        type="button"
        className="absolute inset-0 bg-stone-900/60 backdrop-blur-xs"
        aria-label="Close menu"
        onClick={onClose}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className="relative z-10 flex h-full w-full max-w-[320px] flex-col bg-[#FAF8F5] shadow-2xl sm:max-w-[360px]"
      >
        <div className="flex items-center justify-between border-b border-stone-200/50 px-6 py-5">
          <Link
            href="/"
            onClick={onClose}
            className="relative block h-10 w-[140px] shrink-0"
            aria-label="Sree Sankara home"
          >
            <Image
              src="/images/home/logo/Component%201.svg"
              alt="Sree Sankara"
              fill
              className="object-contain object-left"
              sizes="140px"
            />
          </Link>
        </div>

        <div className="flex flex-1 flex-col gap-1.5 overflow-y-auto px-4 py-6">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={onClose}
                className={`flex items-center justify-between rounded-xl px-4 py-3.5 transition-all ${
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
                  className={`h-4 w-4 opacity-70 ${
                    isActive ? "text-[#f0e9df]" : "text-stone-400"
                  }`}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </div>,
    document.body
  );
}
