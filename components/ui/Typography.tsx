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
      newsHeadline:
        "text-[1.65rem] sm:text-[2rem] lg:text-[2.35rem] font-medium leading-[1.2] tracking-tight max-w-[654px]",
      bodyText: "text-base md:text-lg",
      bodyText2: "text-xs md:text-sm",
      bodyText3: "text-sm md:text-base",
      bodyBase: "text-base",
      buttonText: "text-base md:text-lg font-medium",
      modalHeadline1: "text-xl md:text-2xl font-semibold",

      // Semantic extensions (exact existing styles)
      heroTitle:
        "text-3xl sm:text-4xl md:text-5xl lg:text-[56px] xl:text-[60px] font-normal tracking-tight leading-[1.05]",
      sectionTitle:
        "text-3xl sm:text-4xl lg:text-5xl font-normal leading-[1.18] tracking-tight",
      sectionTitleTight: "text-3xl md:text-5xl font-normal leading-tight",
      sectionLabel: "text-sm font-semibold tracking-wide",
      sectionLabelSm: "text-xs md:text-sm font-semibold tracking-wide",
      sectionEyebrow:
        "font-[var(--font-inter)] text-[23px] font-normal leading-none tracking-[-0.04em]",
      viewAllLink:
        "font-[var(--font-inter)] text-[18px] font-normal leading-none tracking-[-0.04em]",
      galleryTitle:
        "text-2xl font-normal leading-[1.2] tracking-tight md:text-[1.85rem] lg:text-3xl",
      cardTitle:
        "text-xl font-semibold leading-snug tracking-tight sm:text-[1.75rem] sm:leading-tight",
      cardMeta: "text-[15px] sm:text-lg",
      cardDescription: "text-sm leading-snug tracking-wide",
      quote:
        "font-[var(--font-inter)] text-[1.5rem] font-medium leading-none tracking-[-0.04em] sm:text-[1.85rem] md:text-[2.15rem] lg:text-[2.5rem] xl:text-[57px]",
      buttonSmall: "text-sm font-medium",
      linkText: "text-sm sm:text-base font-semibold",
      linkTextMedium: "text-sm sm:text-base font-medium",
      brandText: "text-lg font-bold tracking-tight font-serif",
      brandSubtitle: "text-[10px] uppercase tracking-wider font-semibold",
      navText:
        "font-[var(--font-inter)] text-[17px] font-normal leading-none tracking-[-0.04em] sm:text-[17px]",
      navTextActive:
        "font-[var(--font-inter)] text-[17px] font-normal leading-none tracking-[-0.04em] sm:text-[17px]",
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

      // Homepage CTAs / footer (Inter + Figma tracking)
      displayTitle:
        "font-[var(--font-inter)] text-[2rem] font-normal leading-none tracking-[-0.04em] sm:text-[2.5rem] md:text-[48px] lg:text-[57px]",
      displayTitleMedium:
        "font-[var(--font-inter)] text-[2rem] font-medium leading-none tracking-[-0.04em] sm:text-[2.5rem] md:text-[48px] lg:text-[57px]",
      ctaBody:
        "font-[var(--font-inter)] text-[18px] font-light leading-none tracking-[-0.04em] sm:text-[22px] md:text-[28px]",
      ctaBodyMuted:
        "font-[var(--font-inter)] text-[16px] font-normal leading-[1.2] tracking-[-0.04em] sm:text-[18px] md:text-[22px] md:leading-[1.15] lg:text-[24px]",
      ctaButton:
        "font-[var(--font-inter)] text-[18px] font-normal leading-none tracking-[-0.04em] sm:text-[20px] md:text-[23px]",
      ctaButtonSm:
        "font-[var(--font-inter)] text-[15px] font-normal leading-none tracking-[-0.04em] sm:text-[16px] md:text-[18px]",
      footerTagline:
        "font-[var(--font-inter)] text-[16px] font-normal leading-none tracking-[-0.04em] sm:text-[18px] md:text-[20px]",
      footerBody:
        "font-[var(--font-inter)] text-[15px] font-light leading-relaxed tracking-[-0.02em] sm:text-base",
      footerHeading:
        "font-[var(--font-inter)] text-base font-medium tracking-[-0.02em] sm:text-lg",
      footerLink:
        "font-[var(--font-inter)] text-sm font-light tracking-[-0.02em] sm:text-[15px]",
      footerMeta:
        "font-[var(--font-inter)] text-xs font-light tracking-[-0.02em] sm:text-sm",
      aboutTitle:
        "font-[var(--font-inter)] text-[1.85rem] font-medium leading-none tracking-[-0.04em] sm:text-[2.25rem] md:text-[42px] lg:text-[48px]",
      aboutBody:
        "font-[var(--font-inter)] text-[16px] font-normal leading-[1.45] tracking-[-0.04em] text-left sm:text-[20px] md:text-[24px] md:leading-[1.4]",
      aboutPillarTitle:
        "font-[var(--font-inter)] text-[16px] font-medium leading-[1.4] tracking-[-0.04em] sm:text-[18px] md:text-[22px] md:leading-[1.35]",
      initiativeTitle:
        "font-[var(--font-inter)] text-[18px] font-medium leading-none tracking-[-0.04em] sm:text-[22px] md:text-[24px]",
      initiativeBody:
        "font-[var(--font-inter)] text-[15px] font-normal leading-[1.4] tracking-[-0.04em] text-left sm:text-[17px] md:text-[20px] md:leading-[1.35]",
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
