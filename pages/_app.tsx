import CommandBar from "components/CommandBar/CommbandBar";
import Header from "components/Header/Header";
import type { AppProps } from "next/app";
import "styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <CommandBar>
          <div className="flex flex-col space-between h-full">
            <Header />
            <div className="h-full">
              <Component {...pageProps} />
            </div>
          </div>
      </CommandBar>
    </>
  );
}
