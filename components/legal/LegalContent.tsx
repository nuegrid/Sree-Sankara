import Link from "next/link";
import Typography from "@/components/ui/Typography";
import LegalBackButton from "@/components/legal/LegalBackButton";
import { PAGE_CONTAINER } from "@/lib/layout";
import type { LegalBlock, LegalDocument } from "@/lib/legal/types";
import { cn } from "@/lib/utils";

const TOKEN_RE =
  /(mail@mahamagham\.com|\+91\s?8891458222|Privacy Policy)/g;

const linkClass =
  "underline decoration-black/20 underline-offset-2 transition-colors hover:text-black hover:decoration-black/50";

function LinkedText({
  text,
  linkPrivacy,
}: {
  text: string;
  linkPrivacy: boolean;
}) {
  const parts = text.split(TOKEN_RE);

  return (
    <>
      {parts.map((part, i) => {
        if (!part) return null;
        if (part === "mail@mahamagham.com") {
          return (
            <a key={`${part}-${i}`} href={`mailto:${part}`} className={linkClass}>
              {part}
            </a>
          );
        }
        if (part === "+91 8891458222" || part === "+918891458222") {
          return (
            <a key={`${part}-${i}`} href="tel:+918891458222" className={linkClass}>
              {part}
            </a>
          );
        }
        if (linkPrivacy && part === "Privacy Policy") {
          return (
            <Link key={`${part}-${i}`} href="/privacy" className={linkClass}>
              {part}
            </Link>
          );
        }
        return <span key={`${part}-${i}`}>{part}</span>;
      })}
    </>
  );
}

function Blocks({
  blocks,
  linkPrivacy,
}: {
  blocks: LegalBlock[];
  linkPrivacy: boolean;
}) {
  return (
    <div className="flex flex-col gap-4">
      {blocks.map((block, i) => {
        if (block.type === "h") {
          return (
            <Typography
              key={i}
              as="h3"
              variant="aboutPillarTitle"
              className="mt-2 text-black"
            >
              {block.text}
            </Typography>
          );
        }

        if (block.type === "ul") {
          return (
            <ul
              key={i}
              className="ml-1 list-disc space-y-1.5 pl-5 font-[var(--font-inter)] text-[15px] font-normal leading-[1.55] tracking-[-0.02em] text-[#555555] sm:text-base md:text-[17px] md:leading-[1.5]"
            >
              {block.items.map((item) => (
                <li key={item}>
                  <LinkedText text={item} linkPrivacy={linkPrivacy} />
                </li>
              ))}
            </ul>
          );
        }

        return (
          <Typography
            key={i}
            as="p"
            variant="initiativeBody"
            className="text-[#555555]"
          >
            <LinkedText text={block.text} linkPrivacy={linkPrivacy} />
          </Typography>
        );
      })}
    </div>
  );
}

export default function LegalContent({ document }: { document: LegalDocument }) {
  const linkPrivacy = document.title === "Terms and Conditions";

  return (
    <main className="w-full bg-[#FAF8F5]" lang="en">
      <article className={cn(PAGE_CONTAINER, "pb-16 pt-10 sm:pb-24 sm:pt-12")}>
        <div>
          <LegalBackButton />
          <Typography as="h1" variant="aboutTitle" className="mt-8 text-black sm:mt-10">
            {document.title}
          </Typography>
          <p className="mt-3 font-[var(--font-inter)] text-sm font-normal tracking-[-0.02em] text-[#888888] sm:text-[15px]">
            Last Updated: {document.lastUpdated}
          </p>

          <div className="mt-8 sm:mt-10">
            <Blocks blocks={document.intro} linkPrivacy={linkPrivacy} />
          </div>

          <div className="mt-10 flex flex-col gap-10 sm:mt-12 sm:gap-12">
            {document.sections.map((section) => (
              <section key={section.heading}>
                <Typography
                  as="h2"
                  variant="aboutPillarTitle"
                  className="mb-4 text-black sm:mb-5"
                >
                  {section.heading}
                </Typography>
                <Blocks blocks={section.blocks} linkPrivacy={linkPrivacy} />
              </section>
            ))}
          </div>
        </div>
      </article>
    </main>
  );
}
