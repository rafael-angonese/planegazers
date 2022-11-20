import "styles/globals.css";
import type { AppProps } from "next/app";
import Header from "components/Header/Header";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className="flex flex-col space-between h-full">
        <Header />
        <div className="mx-6 h-full">
          <Component {...pageProps} />
        </div>
      </div>
    </>
  );
}
