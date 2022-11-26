import Kbd from "components/Kbd/Kbd";
import { useKBar } from "kbar";
import { useEffect, useState } from "react";

const ShortcutHome = () => {
  const { query } = useKBar();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <></>;
  }

  const isMac = /(Mac)/i.test(navigator.userAgent);
  const isMobile = /iPhone|iPad|Android/i.test(navigator.userAgent);

  return (
    <>
      {isMobile && (
        <button
          className="text-gray-200 font-semibold mt-8 text-lg p-2 rounded-xl hover:bg-zinc-800"
          onClick={query?.toggle}
        >
          Clique para iniciar →
        </button>
      )}

      {!isMobile && isMac && (
        <button
          className="text-gray-200 font-semibold mt-8 text-lg p-2 rounded-xl hover:bg-zinc-800"
          onClick={query?.toggle}
        >
          Pressione <Kbd>⌘</Kbd> <Kbd>K</Kbd> para iniciar →
        </button>
      )}

      {!isMobile && !isMac && (
        <button
          className="text-gray-200 font-semibold mt-8 text-lg p-2 rounded-xl hover:bg-zinc-800"
          onClick={query?.toggle}
        >
          Pressione <Kbd>ctrl</Kbd> <Kbd>K</Kbd> para iniciar →
        </button>
      )}
    </>
  );
};

export default ShortcutHome;
