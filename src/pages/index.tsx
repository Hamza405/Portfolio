import { FC } from "react";
import Main from "../components/Main/Main";
import About from "@/components/About/About";
import Projects from "@/components/Projects/Projects";
import { PrismaClient, Skill, Project } from "@prisma/client";

type Props = {
  skills: Skill[];
  projects: Project[];
};

const prisma = new PrismaClient();
export async function getStaticProps() {
  const skills = await prisma.skill.findMany();
  const projects = await prisma.project.findMany();
  return {
    props: {
      skills,
      projects,
    },
  };
}

const Home: FC<Props> = ({ skills, projects }) => {
  return (
    <div className="container">
      <Main />
      <About skills={skills} />
      <Projects projects={projects} />
    </div>
  );
};

export default Home;
