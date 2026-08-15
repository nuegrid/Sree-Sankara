"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useTranslation } from "react-i18next";
import Typography from "@/components/ui/Typography";
import { PAGE_CONTAINER } from "@/lib/layout";
import { cn } from "@/lib/utils";
import { getBlogBody, type BlogArticle } from "./data";

export default function BlogArticleContent({
  id,
  image,
  slug,
  body,
}: BlogArticle) {
  const { t, i18n } = useTranslation();
  const title = t(`media.posts.${id}.title`);
  const category = t(`media.posts.${id}.category`);
  const date = t(`media.posts.${id}.date`);
  const localizedBody = (slug ? getBlogBody(slug, i18n.language) : undefined) ?? body;

  return (
    <main className="w-full bg-[#FAF8F5]">
      <article
        className={cn(
          PAGE_CONTAINER,
          "pb-16 pt-8 sm:pb-20 sm:pt-10 md:pb-24 md:pt-12"
        )}
      >
        <Link
          href="/media"
          className="inline-flex items-center gap-2 text-[#FE3E02] transition-colors hover:text-[#e03802]"
        >
          <ArrowLeft className="h-4 w-4" />
          <Typography as="span" variant="buttonSmall" className="text-inherit">
            {t("media.backToMedia")}
          </Typography>
        </Link>

        <header className="mt-8 sm:mt-10">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <Typography
              as="span"
              variant="sectionLabel"
              className="text-[#FE3E02]"
            >
              {category}
            </Typography>
            <Typography as="span" variant="bodyText2" className="text-neutral-400">
              {date}
            </Typography>
          </div>
          <Typography
            as="h1"
            variant="aboutTitle"
            className="mt-3 text-black sm:mt-4"
          >
            {title}
          </Typography>
        </header>

        <div className="relative mt-8 aspect-[2/1] w-full overflow-hidden rounded-2xl sm:mt-10 sm:rounded-3xl">
          <Image
            src={image}
            alt={title}
            fill
            priority
            className="object-cover object-[center_58%]"
            sizes="(max-width: 768px) 100vw, (max-width: 1400px) 90vw, 1280px"
          />
        </div>

        <div className="mt-10 space-y-10 sm:mt-12">
          {localizedBody?.map((section) => (
            <section key={section.heading ?? section.paragraphs[0]} className="space-y-4">
              {section.heading ? (
                <Typography
                  as="h2"
                  variant="initiativeTitle"
                  className="text-gray-950"
                >
                  {section.heading}
                </Typography>
              ) : null}
              {section.paragraphs.map((paragraph) => (
                <Typography
                  key={paragraph.slice(0, 48)}
                  as="p"
                  variant="initiativeBody"
                  className="text-[#777777]"
                >
                  {paragraph}
                </Typography>
              ))}
            </section>
          ))}
        </div>
      </article>
    </main>
  );
}
