import NavBar from "@/components/NavBar/NavBar";
import Seo from "@/components/Seo";
import type { AppProps } from "next/app";
import { Fragment } from "react";
import "../styles/globals.css";

export default function NextApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Seo />
      <NavBar />
      <Component {...pageProps} />
    </Fragment>
  );
}
