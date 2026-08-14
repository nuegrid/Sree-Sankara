import { Mail, MapPin, Phone } from "lucide-react";
import Typography from "@/components/ui/Typography";
import { PAGE_CONTAINER } from "@/lib/layout";
import { cn } from "@/lib/utils";
import ContactInfoItem from "./ContactInfoItem";
import ContactForm from "./ContactForm";

const MAP_IFRAME_SRC =
  "https://www.google.com/maps?q=Mahamagha%20Mahotsava%20Samiti%2C%20Sri%20Panch%20Dasnam%20Juna%20Akhada%2C%20Thirunnavaya&output=embed";

export default function ContactContent() {
  return (
    <main className="w-full bg-[#FAF8F5]">
      <div className={cn(PAGE_CONTAINER, "pb-14 pt-10 sm:pb-20 sm:pt-12")}>
        <section className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="flex flex-col gap-6">
            <Typography as="h1" variant="sectionTitle" className="text-black">
              Get in Touch
            </Typography>

            <Typography as="p" variant="aboutBody" className="text-[#777777]">
              Whether you&apos;re looking for spiritual guidance, information about upcoming programs,
              volunteering opportunities, or ways to support our initiatives, reach out to us.
            </Typography>

            <div className="flex flex-col gap-6">
              <ContactInfoItem
                icon={<MapPin className="h-5 w-5 text-[#FF3D0B]" strokeWidth={1.75} />}
              >
                <Typography as="p" variant="bodyText2" className="text-[#777777]">
                  Mahamagha Mahotsava Samiti
                  <br />
                  Sri Panch Dasnam Juna Akhada
                  <br />
                  Thirunnavaya, Malappuram, Keralam – 676301
                </Typography>
              </ContactInfoItem>

              <ContactInfoItem
                href="tel:+918891458222"
                icon={<Phone className="h-5 w-5 text-[#FF3D0B]" strokeWidth={1.75} />}
              >
                <Typography as="p" variant="bodyText2" className="text-[#777777]">
                  +91 88914 58222
                </Typography>
              </ContactInfoItem>

              <ContactInfoItem
                href="mailto:mail@mahamagham.com"
                icon={<Mail className="h-5 w-5 text-[#FF3D0B]" strokeWidth={1.75} />}
              >
                <Typography as="p" variant="bodyText2" className="text-[#777777]">
                  mail@mahamagham.com
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
              title="Mahamagha Mahotsava Samiti, Thirunnavaya map"
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
