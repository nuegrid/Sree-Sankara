import Image from "next/image";
import Link from "next/link";
import { CalendarDays, ArrowRight } from "lucide-react";
import Typography from "@/components/ui/Typography";

export type NewsCardProps = {
  image: string;
  date: string;
  title: string;
  href: string;
  alt?: string;
};

export default function NewsCard({
  image,
  date,
  title,
  href,
  alt,
}: NewsCardProps) {
  return (
    <article className="flex h-full flex-col gap-3">
      <div className="relative w-full overflow-hidden rounded-2xl bg-neutral-200 aspect-[16/11] sm:rounded-3xl">
        <Image
          src={image}
          alt={alt ?? title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover"
          priority={false}
        />
      </div>

      <div className="flex flex-1 flex-col gap-2">
        <div className="flex items-center gap-2 text-neutral-500">
          <CalendarDays className="h-3.5 w-3.5 shrink-0" strokeWidth={1.75} />
          <Typography
            as="span"
            variant="bodyText2"
            className="text-neutral-500"
          >
            {date}
          </Typography>
        </div>

        <Typography
          as="h3"
          variant="headline3"
          className="leading-snug text-gray-950"
        >
          {title}
        </Typography>
      </div>

      <Link
        href={href}
        className="mt-auto inline-flex w-fit self-start h-10 items-center justify-center gap-2 rounded-xl border border-[#FE3E02] bg-[#FAF8F5] px-5 text-[#FE3E02] transition-colors hover:bg-[#FE3E02]/5"
      >
        <Typography as="span" variant="buttonSmall" className="text-[#FE3E02]">
          Read More
        </Typography>
        <ArrowRight className="h-4 w-4 text-[#FE3E02]" />
      </Link>
    </article>
  );
}

