"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FaHeart as HeartIcon } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";
import MobileDrawer from "./MobileDrawer";
import Typography from "@/components/ui/Typography";
import { PAGE_CONTAINER } from "@/lib/layout";
import { cn } from "@/lib/utils";

const LOGO_SRC = "/images/home/logo/Component%201.svg";

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

type NavbarProps = {
  /** `overlay` sits on hero video; `solid` for inner pages */
  variant?: "overlay" | "solid";
};

export default function Navbar({ variant = "overlay" }: NavbarProps) {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isSolid = variant === "solid";

  useEffect(() => {
    if (isSolid) return;
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isSolid]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <nav
        className={cn(
          "pointer-events-auto left-0 right-0 z-[400] w-full py-3 transition-all duration-300",
          isSolid
            ? "relative top-0 border-b border-stone-200/60 bg-white"
            : isScrolled
              ? "fixed top-0 border-b border-stone-200/50 bg-white/80 shadow-xs backdrop-blur-md"
              : "absolute top-12 border-none bg-transparent sm:top-14"
        )}
      >
        <div
          className={cn(
            PAGE_CONTAINER,
            "grid grid-cols-2 items-center lg:grid-cols-[1fr_auto_1fr]"
          )}
        >
          <div className="flex items-center justify-start">
            <Link
              href="/"
              className="relative block h-11 w-[148px] shrink-0 sm:h-12 sm:w-[168px]"
              aria-label="Sree Sankara home"
            >
              <Image
                src={LOGO_SRC}
                alt="Sree Sankara"
                fill
                priority
                className="object-contain object-left"
                sizes="168px"
              />
            </Link>
          </div>

          <div className="hidden items-center justify-center gap-7 lg:flex xl:gap-9">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className="transition-colors hover:text-[#3d342c]"
                >
                  <Typography
                    as="span"
                    variant={isActive ? "navTextActive" : "navText"}
                    className={isActive ? "text-[#2A0707]" : "text-[#615447]"}
                  >
                    {link.name}
                  </Typography>
                </Link>
              );
            })}
          </div>

          <div className="flex items-center justify-end gap-3">
            <Link
              href="/donate"
              className="group hidden items-center gap-2 rounded-full border-2 border-[#2A0707] bg-transparent px-5 py-1.5 text-[#2A0707] shadow-xs transition-all hover:bg-[#2A0707] hover:text-white lg:flex"
            >
              <Typography as="span" variant="buttonSmall">
                Donate
              </Typography>
              <HeartIcon className="h-3.5 w-3.5 text-[#2A0707] transition-colors group-hover:text-white" />
            </Link>

            <button
              type="button"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="relative z-[410] flex h-11 w-11 cursor-pointer items-center justify-center rounded-md text-gray-900 hover:text-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2A0707] lg:hidden"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
            >
              {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      <MobileDrawer
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        pathname={pathname}
      />
    </>
  );
}
