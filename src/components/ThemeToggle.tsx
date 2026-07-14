"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type ThemeName = "dark-side" | "light-side";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<ThemeName>(() => {
    if (typeof window === "undefined") {
      return "dark-side";
    }

    try {
      const savedTheme = localStorage.getItem("theme");
      return savedTheme === "light-side" ? "light-side" : "dark-side";
    } catch {
      return "dark-side";
    }
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;

    try {
      localStorage.setItem("theme", theme);
    } catch {}
  }, [theme]);

  const nextTheme = theme === "dark-side" ? "light-side" : "dark-side";

  return (
    <button
      type="button"
      onClick={() => setTheme(nextTheme)}
      className="group fixed top-6 right-6 z-[60] grid h-14 w-14 place-items-center rounded-full border border-[rgb(var(--accent)/0.24)] bg-[rgb(var(--panel-strong)/0.82)] shadow-[0_16px_42px_rgb(var(--shadow)/0.16)] backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:border-[rgb(var(--accent)/0.45)] hover:shadow-[0_0_22px_rgb(var(--accent)/0.16),0_16px_42px_rgb(var(--shadow)/0.2)]"
      aria-label={`Switch to ${nextTheme === "light-side" ? "Light Side" : "Dark Side"} theme`}
      aria-pressed={theme === "light-side"}
    >
      <span className="sr-only">
        {theme === "light-side" ? "Light Side active" : "Dark Side active"}
      </span>

      <span className="pointer-events-none transition-opacity duration-200 group-hover:opacity-0" aria-hidden="true">
        {theme === "light-side" ? (
          <Image
            src="/jedi.svg"
            alt=""
            width={34}
            height={34}
            className="theme-toggle-icon-light h-[34px] w-[34px] object-contain"
          />
        ) : (
          <Image
            src="/sith.svg"
            alt=""
            width={34}
            height={34}
            className="theme-toggle-icon-dark h-[34px] w-[34px] scale-[1.45] object-contain"
          />
        )}
      </span>

      <span className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100" aria-hidden="true">
        <span className="absolute inset-0 grid place-items-center [clip-path:inset(0_50%_0_0)]">
          <Image
            src="/jedi.svg"
            alt=""
            width={34}
            height={34}
            className="theme-toggle-icon-light h-[34px] w-[34px] object-contain"
          />
        </span>

        <span className="absolute inset-0 grid place-items-center [clip-path:inset(0_0_0_50%)]">
          <Image
            src="/sith.svg"
            alt=""
            width={34}
            height={34}
            className="theme-toggle-icon-dark h-[34px] w-[34px] scale-[1.45] object-contain"
          />
        </span>
      </span>
    </button>
  );
}
