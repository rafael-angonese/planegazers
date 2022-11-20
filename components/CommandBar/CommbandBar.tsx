import {
  KBarAnimator,
  KBarPortal,
  KBarPositioner,
  KBarProvider,
  KBarResults,
  KBarSearch,
  useMatches,
} from "kbar";
import { useRouter } from "next/router";
import {
  Copy,
  Envelope,
  GithubLogo,
  House,
  LinkedinLogo,
  User,
} from "phosphor-react";
import React, { ReactNode } from "react";
import clsx from "utils/clsx";

interface CommandBarProps {
  children: ReactNode;
}

const CommandBar: React.FC<CommandBarProps> = ({ children }) => {
  const router = useRouter();
  const actions = [
    {
      id: "copy",
      name: "Copiar URL",
      shortcut: ["u"],
      keywords: "copy-url",
      section: "Geral",
      perform: () => navigator.clipboard.writeText(window.location.href),
      icon: <Copy size={22} />,
    },
    {
      id: "email",
      name: "Enviar E-mail",
      shortcut: ["e"],
      keywords: "send-email",
      section: "Geral",
      perform: () =>
        window.open("mailto:rafael_angonese09@gmail.com", "_blank"),
      icon: <Envelope size={22} />,
    },
    {
      id: "home",
      name: "Página inicial",
      shortcut: ["g", "h"],
      keywords: "home",
      section: "Ir para",
      perform: () => router.push("/"),
      icon: <House size={22} />,
    },
    {
      id: "about",
      name: "Sobre",
      shortcut: ["g", "a"],
      keywords: "about",
      section: "Ir para",
      perform: () => router.push("/about"),
      icon: <User size={22} />,
    },
    {
      id: "github",
      name: "Github",
      shortcut: ["s", "g"],
      keywords: "git github",
      section: "Social",
      perform: () =>
        window.open("https://github.com/rafael-angonese", "_blank"),
      icon: <GithubLogo size={22} />,
    },
    {
      id: "linked-in",
      name: "LinkedIn",
      shortcut: ["s", "l"],
      keywords: "LinkedIn",
      section: "Social",
      perform: () =>
        window.open("https://www.linkedin.com/in/rafael-angonese", "_blank"),
      icon: <LinkedinLogo size={22} />,
    },
  ];

  return (
    <>
      <KBarProvider actions={actions}>
        <KBarPortal>
          <KBarPositioner className="fixed flex items-start justify-center w-full inset-0 p-4 box-border bg-black/60">
            <KBarAnimator className="bg-zinc-800 max-w-2xl w-full text-gray-200 rounded overflow-hidden">
              <KBarSearch
                defaultPlaceholder="Digite um comando ou pesquise..."
                className="p-3 text-base w-full box-border outline-none border-none m-0 bg-zinc-800 text-gray-200"
              />
              <RenderResults />
            </KBarAnimator>
          </KBarPositioner>
        </KBarPortal>
        {children}
      </KBarProvider>
    </>
  );
};

function RenderResults() {
  const { results } = useMatches();

  return (
    <KBarResults
      items={results}
      onRender={({ item, active }) =>
        typeof item === "string" ? (
          <div className="p-4 flex items-center m-0 text-sm text-gray-200">
            {item}
          </div>
        ) : (
          <div
            className={clsx(
              "p-3 flex items-center justify-between m-0 cursor-pointer text-gray-200",
              { "bg-zinc-700": active }
            )}
          >
            <div className="flex gap-2">
              {item.icon}
              <span>{item.name}</span>
            </div>
            <div className="flex gap-1">
              {item.shortcut &&
                item.shortcut.map((shortcut) => (
                  <kbd
                    key={shortcut}
                    className="px-2.5 py-1.5 text-xs font-semibold text-gray-200 bg-zinc-600/70 rounded-lg"
                  >
                    {shortcut.toUpperCase()}
                  </kbd>
                ))}
            </div>
          </div>
        )
      }
    />
  );
}

export default CommandBar;
