"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/#proyectos", label: "Proyectos" },
  { href: "/cv", label: "CV" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[#1f1f1f] bg-[#0a0a0a]/80 backdrop-blur-sm">
      <nav className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link
          href="/"
          className="text-sm font-semibold tracking-tight hover:text-[#ef4444] transition-colors"
        >
          BE
        </Link>

        <ul className="flex items-center gap-6">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-sm transition-colors hover:text-[#ededed] ${
                  pathname === link.href
                    ? "text-[#ededed]"
                    : "text-[#717171]"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <a
          href="mailto:w4z.bryan@gmail.com"
          className="text-sm px-4 py-1.5 border border-[#1f1f1f] rounded-full hover:border-[#ef4444] hover:text-[#ef4444] transition-colors"
        >
          Contacto
        </a>
      </nav>
    </header>
  );
}
