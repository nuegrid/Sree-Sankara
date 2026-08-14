import Typography from "@/components/ui/Typography";
import NewsCard from "./NewsCard";
import { supportingNews } from "./data";

export default function FeaturedNews() {
  return (
    <section aria-labelledby="featured-news-heading">
      <Typography
        as="h2"
        id="featured-news-heading"
        variant="aboutTitle"
        className="text-black"
      >
        Featured News
      </Typography>
      <Typography
        as="p"
        variant="aboutBody"
        className="mt-3 max-w-2xl text-[#777777] sm:mt-4"
      >
        Stay updated with the latest news, events, and moments from
        Swamiji&apos;s journey.
      </Typography>

      <div className="mt-8 grid grid-cols-1 gap-6 sm:mt-10 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
        {supportingNews.map((item) => (
          <NewsCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
}
