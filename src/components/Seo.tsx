import Head from "next/head";
import { FC } from "react";

const siteName = "Hamza Al Sheikh's website";
const description =
  "Hamza Al Sheikh's website | Front End Developer | Mobile Applications Developer";

const Seo: FC = () => {
  return (
    <Head>
      <title>{siteName}</title>
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="robots" content="follow, index" />
      <meta content={description} name="description" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:description" content={description} />
      <meta property="og:title" content={siteName} />
      <link rel="shortcut icon" href="/favicon.ico" />
      <meta property="og:url" content="https://hamzaalsheikh.vercel.app" />
    </Head>
  );
};

export default Seo;
