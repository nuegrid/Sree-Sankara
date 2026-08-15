"use client";

import { useTranslation } from "react-i18next";
import Typography from "@/components/ui/Typography";
import NewsCard from "./NewsCard";
import { supportingNews } from "./data";

export default function FeaturedNews() {
  const { t } = useTranslation();

  return (
    <section aria-labelledby="featured-news-heading">
      <Typography
        as="h2"
        id="featured-news-heading"
        variant="aboutTitle"
        className="text-black"
      >
        {t("media.featuredTitle")}
      </Typography>
      <Typography
        as="p"
        variant="aboutBody"
        className="mt-3 max-w-2xl text-[#777777] sm:mt-4"
      >
        {t("media.featuredSubtitle")}
      </Typography>

      <div className="mt-8 grid grid-cols-1 gap-6 sm:mt-10 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
        {supportingNews.map((item) => (
          <NewsCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
}
