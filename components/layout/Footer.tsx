"use client";

import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import Typography from "@/components/ui/Typography";
import { PAGE_CONTAINER } from "@/lib/layout";
import { cn } from "@/lib/utils";

const quickLinksLeft = [
  { key: "home", href: "/" },
  { key: "about", href: "/about" },
  { key: "junaAkhada", href: "/juna-akhada" },
  { key: "events", href: "/events" },
];

const quickLinksRight = [
  { key: "media", href: "/media" },
  { key: "volunteer", href: "/volunteer" },
  { key: "donate", href: "/donate" },
  { key: "contact", href: "/contact" },
];

const FACEBOOK_URL = "https://www.facebook.com/SadhuAnandavanam";

/**
 * Site footer — black panel with large rounded top.
 * `overlap` pulls it up over the previous section (homepage donation).
 */
export default function Footer({ overlap = true }: { overlap?: boolean }) {
  const { t } = useTranslation();
  return (
    <footer
      className={cn(
        "pointer-events-auto relative z-[100] w-full overflow-hidden rounded-t-[40px] bg-black sm:rounded-t-[56px] md:rounded-t-[72px] lg:rounded-t-[90px]",
        overlap ? "-mt-12 sm:-mt-16 md:-mt-20" : "mt-0"
      )}
    >
      <div className={cn(PAGE_CONTAINER, "pb-6 pt-12 sm:pb-10 sm:pt-16 md:pt-20")}>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12 lg:grid-cols-3 lg:gap-16">
          <div className="flex flex-col gap-6">
            <Typography
              as="p"
              variant="footerTagline"
              className="max-w-[464px] text-white"
            >
              {t("footer.tagline")}
            </Typography>

            <div className="flex items-center gap-3">
              <a
                href={FACEBOOK_URL}
                aria-label="Open Sadhu Anandavanam on Facebook"
                className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FE3E02] text-white transition-colors hover:bg-[#e63702]"
              >
                <FaFacebookF className="h-4 w-4" aria-hidden />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FE3E02] text-white transition-colors hover:bg-[#e63702]"
              >
                <FaInstagram className="h-4 w-4" aria-hidden />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FE3E02] text-white transition-colors hover:bg-[#e63702]"
              >
                <FaTwitter className="h-4 w-4" aria-hidden />
              </a>
            </div>
          </div>

          <div>
            <Typography
              as="h3"
              variant="footerHeading"
              className="text-white"
            >
              {t("footer.quickLink")}
            </Typography>
            <div className="mt-5 grid grid-cols-2 gap-x-8 gap-y-2.5 sm:gap-x-12">
              <ul className="flex flex-col gap-2.5">
                {quickLinksLeft.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="transition-colors hover:text-white">
                      <Typography
                        as="span"
                        variant="footerLink"
                        className="text-[#BBBBBB]"
                      >
                        {t(`nav.${link.key}`)}
                      </Typography>
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="flex flex-col gap-2.5">
                {quickLinksRight.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="transition-colors hover:text-white">
                      <Typography
                        as="span"
                        variant="footerLink"
                        className="text-[#BBBBBB]"
                      >
                        {t(`nav.${link.key}`)}
                      </Typography>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <Typography
              as="h3"
              variant="footerHeading"
              className="text-white"
            >
              {t("footer.contact")}
            </Typography>
            <div className="mt-5 flex flex-col gap-2.5">
              <Typography as="p" variant="footerLink" className="text-[#BBBBBB]">
                Mahamagha Mahotsava Samiti
                <br />
                Sri Panch Dasnam Juna Akhada
                <br />
                Thirunnavaya, Malappuram, Keralam – 676301
              </Typography>
              <a
                href="tel:+918891458222"
                className="transition-colors hover:text-white"
              >
                <Typography
                  as="span"
                  variant="footerLink"
                  className="text-[#BBBBBB]"
                >
                  +91 88914 58222
                </Typography>
              </a>
              <a
                href="mailto:mail@mahamagham.com"
                className="transition-colors hover:text-white"
              >
                <Typography
                  as="span"
                  variant="footerLink"
                  className="text-[#BBBBBB]"
                >
                  mail@mahamagham.com
                </Typography>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 pb-4 sm:mt-16 sm:flex-row sm:items-center sm:justify-between sm:pt-10 sm:pb-6 md:mt-24 md:pt-14 md:pb-8">
          <Typography
            as="p"
            variant="footerMeta"
            className="text-[#BBBBBB]"
          >
            © Swami Anandavanam Bharathi.
          </Typography>
          <div className="flex flex-wrap items-center gap-6 sm:gap-8">
            <Link href="/privacy" className="transition-colors hover:text-white">
              <Typography as="span" variant="footerMeta" className="text-[#BBBBBB]">
                {t("footer.privacy")}
              </Typography>
            </Link>
            <Link href="/terms" className="transition-colors hover:text-white">
              <Typography as="span" variant="footerMeta" className="text-[#BBBBBB]">
                {t("footer.terms")}
              </Typography>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
