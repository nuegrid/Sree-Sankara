import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * Project typography system.
 * Variants map size / weight / leading / tracking only — keep colors in className.
 */
export const typographyVariants = cva("", {
  variants: {
    variant: {
      // Core variants (design system)
      headline1: "text-2xl md:text-3xl font-semibold",
      headline2: "text-2xl md:text-3xl font-medium",
      headline3: "text-base md:text-lg font-medium",
      headline4: "text-lg md:text-xl font-medium",
      bodyText: "text-base md:text-lg",
      bodyText2: "text-xs md:text-sm",
      bodyText3: "text-sm md:text-base",
      bodyBase: "text-base",
      buttonText: "text-base md:text-lg font-medium",
      modalHeadline1: "text-xl md:text-2xl font-semibold",

      // Semantic extensions (exact existing styles)
      heroTitle:
        "text-5xl sm:text-6xl md:text-7xl lg:text-[80px] xl:text-[84px] font-normal tracking-tight leading-[1.05]",
      sectionTitle:
        "text-3xl sm:text-4xl lg:text-5xl font-normal leading-[1.18] tracking-tight",
      sectionTitleTight: "text-3xl md:text-5xl font-normal leading-tight",
      sectionLabel: "text-sm font-semibold tracking-wide",
      sectionLabelSm: "text-xs md:text-sm font-semibold tracking-wide",
      galleryTitle:
        "text-2xl font-normal leading-[1.2] tracking-tight md:text-[1.85rem] lg:text-3xl",
      cardTitle:
        "text-xl font-semibold leading-snug tracking-tight sm:text-[1.75rem] sm:leading-tight",
      cardMeta: "text-[15px] sm:text-lg",
      cardDescription: "text-sm leading-relaxed tracking-wide",
      quote:
        "text-[1.65rem] font-medium leading-[1.35] tracking-wide sm:text-[1.85rem] md:text-[2.1rem] lg:text-[2.35rem]",
      buttonSmall: "text-sm font-medium",
      linkText: "text-sm sm:text-base font-semibold",
      linkTextMedium: "text-sm sm:text-base font-medium",
      brandText: "text-lg font-bold tracking-tight font-serif",
      brandSubtitle: "text-[10px] uppercase tracking-wider font-semibold",
      navText:
        "font-[var(--font-inter)] text-[23px] font-normal leading-none tracking-[-0.04em]",
      navTextActive:
        "font-[var(--font-inter)] text-[23px] font-normal leading-none tracking-[-0.04em]",
      topBarText:
        "font-[var(--font-inter)] text-xs font-normal leading-none tracking-[-0.04em] sm:text-sm",
      topBarAction:
        "font-[var(--font-inter)] text-sm font-normal leading-none tracking-[-0.04em] sm:text-[15px]",
      timelineYear: "text-xl md:text-4xl font-semibold",
      timelineYearMobile: "text-xl font-semibold",
      bodyRelaxed: "text-base sm:text-lg leading-relaxed font-normal",
      bodyRelaxedSm: "text-sm leading-relaxed sm:text-base",
      caption: "text-xs",
      italicCaption: "text-xs font-serif italic leading-relaxed",
      buttonXs: "text-xs font-medium",
    },
  },
  defaultVariants: {
    variant: "bodyText",
  },
});

export type TypographyProps = React.HTMLAttributes<HTMLElement> &
  VariantProps<typeof typographyVariants> & {
    as?: React.ElementType;
  };

const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  (
    { className, variant, as: Tag = "p", children, ...props },
    ref
  ) => {
    return (
      <Tag
        ref={ref}
        className={cn(typographyVariants({ variant }), className)}
        {...props}
      >
        {children}
      </Tag>
    );
  }
);

Typography.displayName = "Typography";

export default Typography;
