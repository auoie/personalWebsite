import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import ThemeSwitch from "../components/ThemeSwitch";
import Head from "next/head";
import favicon from "../assets/favicon.ico";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider disableTransitionOnChange attribute="class">
      <Head>
        <title>Dalai Chadraa</title>
        <link rel="icon" href={favicon} type="image/x-icon" />
      </Head>
      <div className="absolute top-0 left-0 right-0 flex justify-end items-center m-2">
        <ThemeSwitch className="w-[93.5156px]" />
      </div>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
