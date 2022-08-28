import { FC } from "react";
import Head from "next/head";
import About from "../../components/About/About";
import NavBar from "../../components/NavBar/NavBar";
import Skills from "../../components/About/Skills";

const AboutPage: FC = () => {
    return <div>
        <Head>
            <title>Hamza Al Sheikh, Front End Developer</title>
        </Head>
        <NavBar />
        <About />
    </div>;
};

export default AboutPage;