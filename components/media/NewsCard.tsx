"use client";

import Image from "next/image";
import Link from "next/link";
import { CalendarDays, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import Typography from "@/components/ui/Typography";
import type { NewsArticle } from "./data";

export default function NewsCard({
  id,
  image,
  href,
}: NewsArticle) {
  const { t } = useTranslation();
  const title = t(`media.news.${id}.title`);
  const date = t(`media.news.${id}.date`);
  const excerpt = t(`media.news.${id}.excerpt`);
  const isExternal = href.startsWith("http");
  const ctaClassName =
    "mt-5 inline-flex h-10 w-fit items-center justify-center gap-2 rounded-xl border border-[#FE3E02] bg-white px-4 text-[#FE3E02] transition-colors hover:bg-[#FE3E02]/5";
  const ctaLabel = (
    <>
      <Typography as="span" variant="buttonSmall" className="text-[#FE3E02]">
        {t("common.readMore")}
      </Typography>
      <ArrowRight className="h-4 w-4" aria-hidden />
    </>
  );

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-stone-200/80 bg-white transition-shadow hover:shadow-sm">
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        />
      </div>

      <div className="flex flex-1 flex-col px-5 py-5 sm:px-6 sm:py-6">
        <div className="flex items-center gap-2 text-neutral-500">
          <CalendarDays className="h-3.5 w-3.5 shrink-0" strokeWidth={1.75} />
          <Typography as="span" variant="bodyText2" className="text-neutral-500">
            {date}
          </Typography>
        </div>

        <Typography
          as="h3"
          variant="headline3"
          className="mt-3 leading-snug text-gray-950"
        >
          {title}
        </Typography>

        <Typography
          as="p"
          variant="bodyText2"
          className="mt-2 line-clamp-2 text-[#777777]"
        >
          {excerpt}
        </Typography>

        {isExternal ? (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={ctaClassName}
          >
            {ctaLabel}
          </a>
        ) : (
          <Link href={href} className={ctaClassName}>
            {ctaLabel}
          </Link>
        )}
      </div>
    </article>
  );
}
