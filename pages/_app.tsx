import "styles/globals.css";
import type { AppProps } from "next/app";
import Header from "components/Header/Header";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-black flex flex-col h-full">
      <Header />
      <Component {...pageProps} />
    </div>
  );
}
