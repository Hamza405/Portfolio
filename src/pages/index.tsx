import { FC } from "react";
import Main from "../components/Main/Main";
import About from "@/components/About/About";
import Projects from "@/components/Projects/Projects";
import { PrismaClient, Skill, Project } from "@prisma/client";
import Blog from "@/components/Blog/Blog";
import Info from "@/components/Info/Info";

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
    <div className="">
      <Main />
      <About skills={skills} />
      <Info />
      <Blog />
      {/* <Projects projects={projects} /> */}
    </div>
  );
};

export default Home;
