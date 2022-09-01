import { FC } from "react";
import Head from "next/head";
import NavBar from "../../components/NavBar/NavBar";
import Projects from "../../components/Projects/Projects";
import { PrismaClient, Project } from "@prisma/client";

const prisma = new PrismaClient();

export async function getServerSideProps() {
  const projects = await prisma.project.findMany();
  return {
    props: {
      projects,
    },
  };
}
const ProjectsPage: FC<{ projects: Project[] }> = ({ projects }) => {
  return (
    <div>
      <Head>
        <title>Hamza Al Sheikh, Front End Developer</title>
      </Head>
      <NavBar />
      <Projects projects={projects} />
    </div>
  );
};

export default ProjectsPage;
