import Typography from "@/components/ui/Typography";
import NewsCard from "./NewsCard";
import { PAGE_CONTAINER } from "@/lib/layout";
import { cn } from "@/lib/utils";
import { newsItems } from "./data";

export default function NewsContent() {
  return (
    <main className="w-full bg-[#FAF8F5]">
      <div
        className={cn(PAGE_CONTAINER, "pb-14 pt-10 sm:pb-20 sm:pt-12 md:pt-14")}
      >
        {/* The reference screenshot shows only the grid (no section heading). */}
        <div className="grid grid-cols-1 gap-8 sm:gap-10 md:grid-cols-2 lg:grid-cols-3">
          {newsItems.map((item) => (
            <NewsCard
              key={item.id}
              image={item.image}
              date={item.date}
              title={item.title}
              href={item.href}
              alt={item.title}
            />
          ))}
        </div>

        {/* Small accessibility-only spacer to keep footer placement consistent */}
        <Typography as="span" className="sr-only">
          News list
        </Typography>
      </div>
    </main>
  );
}

