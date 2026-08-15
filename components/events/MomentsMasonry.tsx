"use client";

const columns = [
  {
    top: {
      src: "/images/events/Masonry_Grid/img2.jpg",
      alt: "Swamiji walking on a path",
      aspect: "aspect-[2/3]",
    },
    bottom: {
      src: "/images/events/Masonry_Grid/img1.jpg",
      alt: "Ceremonial gathering with microphones",
      aspect: "aspect-[4/5]",
    },
  },
  {
    top: {
      src: "/images/events/Masonry_Grid/img5.jpg",
      alt: "Close-up portrait of Swamiji",
      aspect: "aspect-square",
    },
    bottom: {
      src: "/images/events/Masonry_Grid/img4.jpg",
      alt: "Swamiji seated with devotees",
      aspect: "aspect-[4/5]",
    },
  },
  {
    top: {
      src: "/images/events/Masonry_Grid/img6.jpg",
      alt: "Devotees gathered in a living room",
      aspect: "aspect-[2/1]",
    },
    bottom: {
      src: "/images/events/Masonry_Grid/img3.jpg",
      alt: "Swamiji seated in a quiet doorway",
      aspect: "aspect-[4/5]",
    },
  },
] as const;

function Tile({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div className={`relative overflow-hidden rounded-xl bg-neutral-200 sm:rounded-2xl md:rounded-3xl ${className ?? ""}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        className="absolute inset-0 h-full w-full object-cover"
        draggable={false}
      />
    </div>
  );
}

export default function MomentsMasonry() {
  return (
    <div className="grid h-auto grid-cols-3 gap-2 sm:h-[min(110vw,680px)] sm:gap-4 md:h-[min(92vw,820px)] md:gap-5">
      {columns.map((column) => (
        <div key={column.top.src} className="flex min-h-0 flex-col gap-2 sm:gap-4 md:gap-5">
          <Tile
            src={column.top.src}
            alt={column.top.alt}
            className={`relative w-full shrink-0 ${column.top.aspect}`}
          />
          <Tile
            src={column.bottom.src}
            alt={column.bottom.alt}
            className={`relative w-full ${column.bottom.aspect} sm:aspect-auto sm:min-h-0 sm:flex-1`}
          />
        </div>
      ))}
    </div>
  );
}
