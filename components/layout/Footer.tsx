"use client";

import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import Typography from "@/components/ui/Typography";
import { PAGE_CONTAINER } from "@/lib/layout";
import { cn } from "@/lib/utils";

const quickLinksLeft = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Juna Akhada", href: "/juna-akhada" },
  { name: "Events", href: "/events" },
];

const quickLinksRight = [
  { name: "Media", href: "/media" },
  { name: "Volunteer", href: "/volunteer" },
  { name: "Donate", href: "/donate" },
  { name: "Contact", href: "/contact" },
];

const FACEBOOK_URL = "https://www.facebook.com/SadhuAnandavanam";

/**
 * Site footer — black panel with large rounded top.
 * `overlap` pulls it up over the previous section (homepage donation).
 */
export default function Footer({ overlap = true }: { overlap?: boolean }) {
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
              Guiding humanity through the timeless wisdom Of Sanatan Dharma
              compassion, and selfless service.
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
              Quick Link
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
                        {link.name}
                      </Typography>
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="flex flex-col gap-2.5">
                {quickLinksRight.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="transition-colors hover:text-white">
                      <Typography
                        as="span"
                        variant="footerLink"
                        className="text-[#BBBBBB]"
                      >
                        {link.name}
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
              Contact
            </Typography>
            <div className="mt-5 flex flex-col gap-2.5">
              <Typography as="p" variant="footerLink" className="text-[#BBBBBB]">
                Kaalika Peetam, Juna Akhada
                <br />
                Kerala, India
              </Typography>
              <a
                href="tel:+911234567890"
                className="transition-colors hover:text-white"
              >
                <Typography
                  as="span"
                  variant="footerLink"
                  className="text-[#BBBBBB]"
                >
                  +91 12345 67890
                </Typography>
              </a>
              <a
                href="mailto:info@swamianandavanam.org"
                className="transition-colors hover:text-white"
              >
                <Typography
                  as="span"
                  variant="footerLink"
                  className="text-[#BBBBBB]"
                >
                  info@swamianandavanam.org
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
                Privacy Policy
              </Typography>
            </Link>
            <Link href="/terms" className="transition-colors hover:text-white">
              <Typography as="span" variant="footerMeta" className="text-[#BBBBBB]">
                Terms &amp; Conditions
              </Typography>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
