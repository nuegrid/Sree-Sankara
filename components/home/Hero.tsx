import Image from "next/image";
import Typography from "@/components/ui/Typography";

const HERO_IMAGE = "/images/home/hero/BG 1.jpeg";

export default function Hero() {
  return (
    <section className="pointer-events-none sticky top-0 z-0 flex h-screen w-full flex-col items-center overflow-hidden">
      <Image
        src={HERO_IMAGE}
        alt=""
        fill
        priority
        className="pointer-events-none absolute inset-0 z-0 object-cover object-center max-md:-translate-y-[18%] md:translate-y-0"
        sizes="100vw"
        aria-hidden
      />

      <div className="relative z-20 mx-auto flex max-w-5xl flex-col items-center px-4 pt-[72px] text-center sm:pt-[88px] md:pt-[92px] lg:pt-[102px]">
        <Typography
          as="h4"
          variant="heroTitle"
          className="max-w-5xl text-gray-950"
        >
          <span className="block">Reviving Dharma , Inspiring Society ,</span>
          <span className="block">Serving Humanity</span>
        </Typography>
      </div>
    </section>
  );
}
