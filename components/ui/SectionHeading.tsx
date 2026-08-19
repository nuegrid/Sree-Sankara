import type { ElementType, ReactNode } from "react";
import Typography from "@/components/ui/Typography";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  children: ReactNode;
  className?: string;
  as?: ElementType;
};

/**
 * Reusable orange section label (Figma: Inter 23/400, -4% tracking, #FE3E02).
 */
export default function SectionHeading({
  children,
  className,
  as = "p",
}: SectionHeadingProps) {
  return (
    <Typography
      as={as}
      variant="sectionEyebrow"
      className={cn("text-[#FE3E02]", className)}
    >
      {children}
    </Typography>
  );
}
