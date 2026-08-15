"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FaHeart as HeartIcon } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import MobileDrawer from "./MobileDrawer";
import Typography from "@/components/ui/Typography";
import { PAGE_CONTAINER } from "@/lib/layout";
import { navLinks } from "@/lib/nav";
import { cn } from "@/lib/utils";

const LOGO_SRC = "/images/home/logo/Component%201.svg";

type NavbarProps = {
  transparent?: boolean;
};

export default function Navbar({ transparent = false }: NavbarProps) {
  const { t } = useTranslation();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <nav
        className={cn(
          "pointer-events-auto flex h-[3.75rem] w-full items-center py-2 transition-colors duration-300 sm:h-16",
          transparent
            ? "border-b border-transparent bg-transparent"
            : "border-b border-stone-200/60 bg-white"
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
              className="relative block h-9 w-[132px] shrink-0 sm:h-10 sm:w-[152px]"
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
                  key={link.href}
                  href={link.href}
                  className="transition-colors hover:text-[#3d342c]"
                >
                  <Typography
                    as="span"
                    variant={isActive ? "navTextActive" : "navText"}
                    className={isActive ? "text-[#2A0707]" : "text-[#615447]"}
                  >
                    {t(`nav.${link.key}`)}
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
                {t("nav.donate")}
              </Typography>
              <HeartIcon className="h-3.5 w-3.5 text-[#2A0707] transition-colors group-hover:text-white" />
            </Link>

            <button
              type="button"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="relative z-[410] flex h-11 w-11 cursor-pointer items-center justify-center rounded-md text-gray-900 hover:text-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2A0707] lg:hidden"
              aria-label={isMenuOpen ? t("nav.closeMenu") : t("nav.openMenu")}
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
