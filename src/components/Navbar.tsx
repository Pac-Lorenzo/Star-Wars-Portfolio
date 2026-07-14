"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Skills", path: "/skills" },
  { name: "Experience", path: "/experience" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="pointer-events-none fixed top-4 z-50 w-full px-4 sm:top-6 sm:px-6">
      <div className="mx-auto flex max-w-5xl justify-center">
        <div className="theme-nav-shell pointer-events-auto hidden items-center gap-3 rounded-full px-4 py-3 sm:gap-6 sm:px-8 md:flex">
          {links.map((link) => {
            const active = pathname === link.path;

            return (
              <Link
                key={link.name}
                href={link.path}
                className={`transition-all duration-300 ${
                  active
                    ? "theme-accent font-semibold"
                    : "theme-nav-link"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        <div className="pointer-events-auto w-full max-w-sm md:hidden">
          <div className="theme-nav-shell flex items-center justify-between rounded-2xl px-4 py-3">
            <Link
              href="/"
              className="theme-accent text-sm font-semibold tracking-[0.24em] uppercase"
            >
              FL
            </Link>

            <button
              type="button"
              onClick={() => setIsOpen((open) => !open)}
              className="theme-nav-link inline-flex items-center gap-2 text-sm font-medium"
              aria-expanded={isOpen}
              aria-controls="mobile-nav-menu"
            >
              <span>{isOpen ? "Close" : "Menu"}</span>
              <span className="flex flex-col gap-1" aria-hidden="true">
                <span className="block h-0.5 w-4 bg-current" />
                <span className="block h-0.5 w-4 bg-current" />
              </span>
            </button>
          </div>

          {isOpen ? (
            <div
              id="mobile-nav-menu"
              className="theme-nav-shell mt-3 flex flex-col gap-1 rounded-2xl p-2"
            >
              {links.map((link) => {
                const active = pathname === link.path;

                return (
                  <Link
                    key={link.name}
                    href={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`rounded-xl px-3 py-2 transition-all duration-300 ${
                      active
                        ? "bg-[rgb(var(--accent)/0.12)] theme-accent font-semibold"
                        : "theme-nav-link"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
          ) : null}
        </div>
      </div>
    </nav>
  );
}
