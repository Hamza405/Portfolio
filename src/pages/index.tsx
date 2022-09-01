import Head from "next/head";
import NavBar from "../components/NavBar/NavBar";
import Main from "../components/Main/Main";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hamza Al Sheikh, Front End Developer</title>
      </Head>
      <NavBar />
      <Main />
    </div>
  );
}
