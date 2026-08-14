import { PAGE_CONTAINER } from "@/lib/layout";
import { cn } from "@/lib/utils";
import FeaturedNews from "./FeaturedNews";
import Blogs from "./Blogs";

export default function MediaContent() {
  return (
    <main className="w-full bg-[#FAF8F5]">
      <div
        className={cn(
          PAGE_CONTAINER,
          "pb-16 pt-10 sm:pb-20 sm:pt-12 md:pb-24 md:pt-14"
        )}
      >
        <FeaturedNews />

        <div className="mt-16 border-t border-stone-200/70 pt-16 sm:mt-20 sm:pt-20 md:mt-24 md:pt-24">
          <Blogs />
        </div>
      </div>
    </main>
  );
}
