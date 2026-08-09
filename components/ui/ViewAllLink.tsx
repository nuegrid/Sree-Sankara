import Link from "next/link";
import Typography from "@/components/ui/Typography";
import { cn } from "@/lib/utils";

type ViewAllLinkProps = {
  href: string;
  children: string;
  className?: string;
};

/**
 * Continuous orange underline; skips ink only at letter descenders (e.g. "g").
 */
export default function ViewAllLink({
  href,
  children,
  className,
}: ViewAllLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-block text-[#FE3E02] transition-colors hover:text-[#e03802]",
        className
      )}
    >
      <Typography
        as="span"
        variant="viewAllLink"
        className="text-[#FE3E02] underline decoration-2 underline-offset-[6px] [text-decoration-skip-ink:auto]"
      >
        {children}
      </Typography>
    </Link>
  );
}
