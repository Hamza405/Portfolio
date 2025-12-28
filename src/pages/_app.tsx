import NavBar from "@/components/NavigationComponents/NavBar";
import Seo from "@/components/Seo";
import type { AppProps } from "next/app";
import { Fragment } from "react";
import "../styles/globals.css";
import Footer from "@/components/Footer/Footer";

export default function NextApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Seo />
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </Fragment>
  );
}
