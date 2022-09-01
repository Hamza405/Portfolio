import { FC } from "react";
import Head from "next/head";
import About from "../../components/About/About";
import NavBar from "../../components/NavBar/NavBar";
import { PrismaClient, Skill } from "@prisma/client";

const prisma = new PrismaClient();
export async function getServerSideProps() {
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
