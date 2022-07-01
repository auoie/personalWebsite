import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import ThemeSwitch from "../components/ThemeSwitch";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider disableTransitionOnChange attribute="class">
      <Head>
        <title>Dalai Chadraa</title>
      </Head>
      <div className="absolute top-0 left-0 right-0 flex justify-end items-center">
        <ThemeSwitch />
      </div>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
