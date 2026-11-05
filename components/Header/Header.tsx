import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { company } from "utils/company";

const links = [
  { href: "/", label: "Início" },
  { href: "/about", label: "Sobre" },
];

const Header: React.FC = () => {
  const { pathname } = useRouter();

  return (
    <header className="flex items-center justify-between gap-4 pt-3 px-5">
      <Link
        href="/"
        className="font-extrabold text-transparent text-xl sm:text-2xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
      >
        {company.name}
      </Link>

      <nav className="flex items-center gap-5">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`text-sm sm:text-base transition-colors ${
              pathname === link.href
                ? "text-white underline decoration-purple-500 decoration-2 underline-offset-8"
                : "text-gray-400 hover:text-purple-300"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
