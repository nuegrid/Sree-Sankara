"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import { useTranslation } from "react-i18next";
import Typography from "@/components/ui/Typography";
import { PAGE_CONTAINER } from "@/lib/layout";
import { cn } from "@/lib/utils";
import ContactInfoItem from "./ContactInfoItem";
import ContactForm from "./ContactForm";

const MAP_IFRAME_SRC =
  "https://www.google.com/maps?q=Mahamagha%20Mahotsava%20Samiti%2C%20Sri%20Panch%20Dasnam%20Juna%20Akhada%2C%20Thirunnavaya&output=embed";

export default function ContactContent() {
  const { t } = useTranslation();

  return (
    <main className="w-full bg-[#FAF8F5]">
      <div className={cn(PAGE_CONTAINER, "pb-14 pt-10 sm:pb-20 sm:pt-12")}>
        <section className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="flex flex-col gap-6">
            <Typography
              as="h1"
              variant="sectionTitle"
              className="text-black [.lang-ml_&]:text-[1.65rem] sm:[.lang-ml_&]:text-3xl lg:[.lang-ml_&]:text-4xl"
            >
              {t("contact.title")}
            </Typography>

            <Typography
              as="p"
              variant="aboutBody"
              className="text-[#777777] [.lang-ml_&]:text-[15px] sm:[.lang-ml_&]:text-lg md:[.lang-ml_&]:text-[21px]"
            >
              {t("contact.body")}
            </Typography>

            <div className="flex flex-col gap-6">
              <ContactInfoItem
                icon={<MapPin className="h-5 w-5 text-[#FF3D0B]" strokeWidth={1.75} />}
              >
                <Typography as="p" variant="bodyText2" className="whitespace-pre-line text-[#777777]">
                  {t("contact.address")}
                </Typography>
              </ContactInfoItem>

              <ContactInfoItem
                href="tel:+918891458222"
                icon={<Phone className="h-5 w-5 text-[#FF3D0B]" strokeWidth={1.75} />}
              >
                <Typography as="p" variant="bodyText2" className="text-[#777777]">
                  {t("contact.phone")}
                </Typography>
              </ContactInfoItem>

              <ContactInfoItem
                href="mailto:mail@mahamagham.com"
                icon={<Mail className="h-5 w-5 text-[#FF3D0B]" strokeWidth={1.75} />}
              >
                <Typography as="p" variant="bodyText2" className="text-[#777777]">
                  {t("contact.email")}
                </Typography>
              </ContactInfoItem>
            </div>
          </div>

          <div>
            <ContactForm />
          </div>
        </section>

        {/* Map */}
        <div className="mt-10 sm:mt-12">
          <div className="overflow-hidden rounded-3xl">
            <iframe
              title={t("contact.mapTitle")}
              src={MAP_IFRAME_SRC}
              className="h-[300px] w-full sm:h-[340px] md:h-[380px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
