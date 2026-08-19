import React from "react";
import { cn } from "@/lib/utils";
import Typography from "@/components/ui/Typography";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

export default function Button({
  children,
  className,
  variant = "primary",
  size = "md",
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-amber-500/50 disabled:pointer-events-none disabled:opacity-50 hover-lift";

  const variants = {
    primary:
      "bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-md hover:from-orange-600 hover:to-amber-600 hover:shadow-lg",
    secondary:
      "bg-stone-100 text-stone-900 hover:bg-stone-250 dark:bg-stone-800 dark:text-stone-100 dark:hover:bg-stone-700",
    outline:
      "border border-stone-300 bg-transparent text-stone-700 hover:bg-stone-50 dark:border-stone-700 dark:text-stone-300 dark:hover:bg-stone-900",
    ghost:
      "bg-transparent text-stone-600 hover:bg-stone-50 dark:text-stone-400 dark:hover:bg-stone-900",
  };

  const sizes = {
    sm: "px-4 py-1.5",
    md: "px-6 py-2.5",
    lg: "px-8 py-3.5",
  };

  const textVariant =
    size === "sm" ? "buttonXs" : size === "lg" ? "bodyText" : "buttonSmall";

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {typeof children === "string" || typeof children === "number" ? (
        <Typography as="span" variant={textVariant}>
          {children}
        </Typography>
      ) : (
        children
      )}
    </button>
  );
}
