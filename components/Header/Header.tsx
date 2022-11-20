import { useKBar } from "kbar";
import Link from "next/link";
import React from "react";

import { Command } from "phosphor-react";

const Header: React.FC = () => {
  const { query } = useKBar();

  return (
    <>
      <header className="flex items-center justify-between pt-3 px-5">
        <div className="text-white">
          <Link href="/">Logo</Link>
        </div>

        <div className="text-white flex gap-2">
          <Link
            href="/about"
            className="text-white hover:bg-gradient-to-bl from-purple-600 to-blue-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Sobre
          </Link>
          <Link
            href="/about"
            className="text-white hover:bg-gradient-to-bl from-purple-500 to-pink-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Projetos
          </Link>
        </div>
        <button onClick={query.toggle} className="text-white p-2 rounded hover:bg-zinc-800">
          <Command size={22} />
        </button>
      </header>
    </>
  );
};

export default Header;
