import Head from "next/head";
import { FC } from "react";

const siteName = "Hamza Al Sheikh's website";
const description =
  "Hamza Al Sheikh's website | Front End Developer | Mobile Applications Developer";

const Seo: FC = () => {
  return (
    <Head>
      <title>{siteName}</title>
      <meta name="robots" content="follow, index" />
      <meta content={description} name="description" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:description" content={description} />
      <meta property="og:title" content={siteName} />
    </Head>
  );
};

export default Seo;
