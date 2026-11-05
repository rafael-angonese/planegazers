import Link from "next/link";
import React from "react";
import { company } from "utils/company";

const Header: React.FC = () => {
  return (
    <>
      <header className="flex items-center pt-3 px-5">
        <Link
          href="/"
          className="font-extrabold text-transparent text-xl sm:text-2xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
        >
          {company.name}
        </Link>
      </header>
    </>
  );
};

export default Header;
