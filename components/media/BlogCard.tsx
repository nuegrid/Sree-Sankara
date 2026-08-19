"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import Typography from "@/components/ui/Typography";
import type { BlogArticle } from "./data";

export default function BlogCard({
  id,
  image,
  href,
}: BlogArticle) {
  const { t } = useTranslation();
  const title = t(`media.posts.${id}.title`);
  const category = t(`media.posts.${id}.category`);
  const date = t(`media.posts.${id}.date`);
  const excerpt = t(`media.posts.${id}.excerpt`);

  return (
    <article className="h-full">
      <Link href={href} className="group flex h-full flex-col">
        <div className="relative aspect-[16/11] overflow-hidden rounded-2xl bg-neutral-200 sm:rounded-3xl">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          />
        </div>

        <div className="mt-4 flex flex-1 flex-col">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <Typography
              as="span"
              variant="sectionLabelSm"
              className="text-[#FE3E02]"
            >
              {category}
            </Typography>
            <Typography as="span" variant="bodyText2" className="text-neutral-400">
              {date}
            </Typography>
          </div>

          <Typography
            as="h3"
            variant="headline3"
            className="mt-2 leading-snug text-gray-950"
          >
            {title}
          </Typography>

          <Typography
            as="p"
            variant="bodyText2"
            className="mt-2 line-clamp-3 text-[#777777]"
          >
            {excerpt}
          </Typography>

          <span className="mt-4 inline-flex w-fit items-center gap-1.5 text-[#FE3E02] transition-colors group-hover:text-[#e03802]">
            <Typography as="span" variant="buttonSmall" className="text-inherit">
              {t("common.readArticle")}
            </Typography>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </span>
        </div>
      </Link>
    </article>
  );
}
