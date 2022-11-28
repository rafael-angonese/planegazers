import CommandBar from "components/CommandBar/CommbandBar";
import Header from "components/Header/Header";
import type { AppProps } from "next/app";
import "styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <CommandBar>
        <div className="flex flex-col h-screen overflow-hidden">
          <Header />
          <div className="flex-1">
            <Component {...pageProps} />
          </div>
          <Header />
        </div>
      </CommandBar>
    </>
  );
}
