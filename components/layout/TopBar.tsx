"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { FiGlobe, FiChevronDown } from "react-icons/fi";
import Typography from "@/components/ui/Typography";
import { PAGE_CONTAINER } from "@/lib/layout";
import { cn } from "@/lib/utils";
import i18n, { LANG_STORAGE_KEY, LANGUAGES, type AppLanguage } from "@/lib/i18n";

export default function TopBar() {
  const { t, i18n: i18nInstance } = useTranslation();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const current = (i18nInstance.language?.startsWith("ml") ? "ml" : "en") as AppLanguage;

  useEffect(() => {
    const onPointerDown = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    window.addEventListener("mousedown", onPointerDown);
    return () => window.removeEventListener("mousedown", onPointerDown);
  }, []);

  const selectLanguage = (code: AppLanguage) => {
    void i18n.changeLanguage(code);
    window.localStorage.setItem(LANG_STORAGE_KEY, code);
    setOpen(false);
  };

  return (
    <header className="relative z-[420] h-12 w-full bg-[#2A0707] sm:h-14">
      <div
        className={cn(
          PAGE_CONTAINER,
          "flex h-full items-center justify-between"
        )}
      >
        <Typography
          as="p"
          variant="topBarText"
          className="min-w-0 flex-1 truncate pr-6 text-left text-[#FFCB94] [.lang-ml_&]:translate-y-[3px]"
        >
          {t("topBar.events")}
        </Typography>

        <div ref={rootRef} className="relative shrink-0">
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            className="flex cursor-pointer items-center gap-1.5 text-white transition-colors hover:text-[#FFCB94]"
            aria-haspopup="listbox"
            aria-expanded={open}
          >
            <FiGlobe className="h-3.5 w-3.5" strokeWidth={1.75} />
            <Typography as="span" variant="topBarAction" className="text-white">
              {t(`lang.${current}`)}
            </Typography>
            <FiChevronDown className="h-3.5 w-3.5 opacity-90" strokeWidth={1.75} />
          </button>

          {open ? (
            <ul
              role="listbox"
              className="absolute right-0 top-full z-[60] mt-2 min-w-[148px] overflow-hidden rounded-xl border border-white/10 bg-[#2A0707] py-1 shadow-lg"
            >
              {LANGUAGES.map((language) => (
                <li key={language.code}>
                  <button
                    type="button"
                    role="option"
                    aria-selected={current === language.code}
                    onClick={() => selectLanguage(language.code)}
                    className={cn(
                      "flex w-full cursor-pointer px-4 py-2 text-left text-sm text-white transition-colors hover:bg-white/10",
                      current === language.code && "text-[#FFCB94]"
                    )}
                  >
                    {t(language.labelKey)}
                  </button>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </header>
  );
}
