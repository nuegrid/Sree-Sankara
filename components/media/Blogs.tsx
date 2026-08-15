"use client";

import { useTranslation } from "react-i18next";
import Typography from "@/components/ui/Typography";
import BlogCard from "./BlogCard";
import { blogs } from "./data";

export default function Blogs() {
  const { t } = useTranslation();

  return (
    <section aria-labelledby="blogs-heading">
      <Typography
        as="h2"
        id="blogs-heading"
        variant="aboutTitle"
        className="text-black"
      >
        {t("media.blogsTitle")}
      </Typography>
      <Typography
        as="p"
        variant="aboutBody"
        className="mt-3 max-w-2xl text-[#777777] sm:mt-4"
      >
        {t("media.blogsSubtitle")}
      </Typography>

      <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-10 sm:mt-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-y-12">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} {...blog} />
        ))}
      </div>
    </section>
  );
}
