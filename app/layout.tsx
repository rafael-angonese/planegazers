import Header from "components/Header/Header";
import type { Metadata, Viewport } from "next";
import React from "react";
import "styles/globals.css";
import { company } from "utils/company";

const description =
  "Fábrica de software que transforma ideias em produtos digitais: aplicações web, apps mobile, APIs e squads dedicados.";

export const metadata: Metadata = {
  title: `${company.name} — ${company.tagline}`,
  description,
  icons: { icon: "/favicon.ico" },
  openGraph: {
    title: company.name,
    description,
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="h-full bg-black">
      <body className="h-full">
        <div className="flex flex-col h-screen">
          <Header />
          <div className="flex-1">{children}</div>
        </div>
      </body>
    </html>
  );
}
