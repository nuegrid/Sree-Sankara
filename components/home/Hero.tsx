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

      <div className="relative z-20 mx-auto flex max-w-5xl flex-col items-center px-4 pt-[72px] text-center sm:pt-[64px] md:pt-[68px] lg:pt-[78px]">
        <Typography
          as="h1"
          variant="heroTitle"
          className="max-w-4xl text-gray-950"
        >
          Guiding Souls
          <br />
          Inspiring Humanity.
        </Typography>
      </div>
    </section>
  );
}
