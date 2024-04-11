import Head from "next/head";
import { FC } from "react";

const siteName = "Hamza Al Sheikh's website";
const description =
  "Welcome to Hamza Al SHeikh's Portfolio - Discover my journey as a Software Engineer, my skills, projects, and more.";
const keywords =
  "Hamza Al Sheikh, Hamza Alsheikh, Hamza Al-Sheikh, Full Stack Developer, Front End Developer, Web Development, Mobile Development, Front End Development, Software Engineer";

const Seo: FC = () => {
  return (
    <Head>
      <title>{siteName}</title>
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="robots" content="follow, index" />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:description" content={description} />
      <meta property="og:title" content={siteName} />
      <meta name="twitter:card" content="summary_large_image" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <meta property="og:url" content="https://hamzaalsheikh.vercel.app" />
    </Head>
  );
};

export default Seo;
