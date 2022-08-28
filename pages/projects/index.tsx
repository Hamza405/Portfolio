import { FC } from "react";
import Head from "next/head";
import NavBar from "../../components/NavBar/NavBar";
import Projects from "@/components/Projects/Projects";

const ProjectsPage: FC = () => {
    return <div>
        <Head>
            <title>Hamza Al Sheikh, Front End Developer</title>
        </Head>
        <NavBar />
        <Projects />
    </div>;
};

export default ProjectsPage;