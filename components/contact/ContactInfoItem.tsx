import type { ReactNode } from "react";

type ContactInfoItemProps = {
  icon: ReactNode;
  children: ReactNode;
};

export default function ContactInfoItem({
  icon,
  children,
}: ContactInfoItemProps) {
  return (
    <div className="flex items-center gap-5">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#FFCB94]/25">
        {icon}
      </div>
      <div className="min-w-0 text-left leading-snug">{children}</div>
    </div>
  );
}

