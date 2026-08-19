import type { ReactNode } from "react";

type ContactInfoItemProps = {
  icon: ReactNode;
  children: ReactNode;
  href?: string;
};

export default function ContactInfoItem({
  icon,
  children,
  href,
}: ContactInfoItemProps) {
  const content = (
    <>
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#FFCB94]/25">
        {icon}
      </div>
      <div className="min-w-0 text-left leading-snug">{children}</div>
    </>
  );

  if (href) {
    const isExternal = href.startsWith("http");
    return (
      <a
        href={href}
        {...(isExternal
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
        className="flex items-center gap-5 transition-opacity hover:opacity-80"
      >
        {content}
      </a>
    );
  }

  return <div className="flex items-center gap-5">{content}</div>;
}
