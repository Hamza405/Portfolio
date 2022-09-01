import { FC } from "react";
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
  return <Projects projects={projects} />;
};

export default ProjectsPage;
