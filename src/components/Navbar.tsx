"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

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

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <div className="theme-nav-shell flex items-center gap-3 rounded-full px-4 py-3 sm:gap-6 sm:px-8">
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
    </nav>
  );
}
