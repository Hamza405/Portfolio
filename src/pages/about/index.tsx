import { FC } from "react";
import About from "../../components/About/About";
import { PrismaClient, Skill } from "@prisma/client";

const prisma = new PrismaClient();
export async function getStaticProps() {
  const skills = await prisma.skill.findMany();
  return {
    props: {
      skills,
    },
  };
}

const AboutPage: FC<{ skills: Skill[] }> = ({ skills }) => {
  return <About skills={skills} />;
};

export default AboutPage;
