import Header from "components/Header/Header";
import type { AppProps } from "next/app";
import Head from "next/head";
import "styles/globals.css";
import { company } from "utils/company";

const description =
  "Fábrica de software que transforma ideias em produtos digitais: aplicações web, apps mobile, APIs e squads dedicados.";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>{`${company.name} — ${company.tagline}`}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={company.name} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
      </Head>

      <div className="flex flex-col h-screen">
        <Header />
        <div className="flex-1">
          <Component {...pageProps} />
        </div>
      </div>
    </>
  );
}
