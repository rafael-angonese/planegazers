import React, { ReactNode } from "react";

interface KbdProps {
  children: ReactNode;
}

const Kbd: React.FC<KbdProps> = ({ children }) => {
  return (
    <kbd className="p-2 text-xs font-semibold text-gray-200 bg-zinc-600 rounded-lg">
      {children}
    </kbd>
  );
};

export default Kbd;
