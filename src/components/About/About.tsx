import { FC } from "react";
import Image from "next/image";
import Skills from "./Skills";
import { Skill } from "@prisma/client";

const About: FC<{ skills: Skill[] }> = ({ skills }) => {
  return (
    <div
      id="about"
      className="flex w-full flex-wrap justify-between items-center p-4 mx-auto my-8 bg-white"
    >
      <div className="py-8 m-auto md:grid grid-cols-3 gap-8 max-w-[85%]">
        <div className="col-span-1 flex justify-center items-start pt-2 sm:pt-10 md:hidden mb-8">
          <div className="rounded-xl shadow-lg shadow-gray-400 p-2 bg-gray-500 max-w-[350px]">
            <Image
              className="rounded-xl m-auto"
              src="/assets/images/cv_photo.jpeg"
              alt="Hamza Al Sheikh"
              width={300}
              height={300}
            />
          </div>
        </div>
        <div className="col-span-2">
          <h2 className="text-gradient inline-block mb-2">About Me</h2>
          <p>
            Hello! I'm Hamza Al Sheikh, a Software Engineer based in Dubai, UAE,
            with a bachelor's degree in Computer Engineering from Tishreen
            University. My journey into software development began at age 16,
            and what started as a passion has evolved into a fulfilling career
            building solutions that make a real impact.
            <br />
            Over the past +5 years, I've specialized in mobile development with
            a strong focus on React Native and cross-platform applications. For
            the last 3 years, I've expanded into full-stack development, working
            remotely with international companies across the UK, Turkey, and
            Germany. This global experience has shaped my ability to collaborate
            across time zones, cultures, and diverse technical environments.
            <br />
            Throughout my career, I've led challenging projects including
            building offline-first architectures, implementing AES-256 cipher
            encryption and key generation, developing custom native modules for
            iOS and Android, and architecting serverless backends. Beyond
            writing code, I'm passionate about helping others grow. I've
            mentored junior developers through code reviews and task
            assignments, helping them progress to mid-level roles. I believe
            great software is built by great teams, and I enjoy contributing to
            that growth.
            <br />
            My technical toolkit includes JavaScript, TypeScript, React Native,
            Redux, Node.js, Express.js, SQL, SQLite, Flutter, Dart, and AWS
            services. I also work with Next.js, Angular, MongoDB, and have
            experience with native iOS and Android development. But beyond the
            technologies themselves, I focus on thoughtful architecture, writing
            clean and maintainable code, optimizing performance, and building
            secure, scalable solutions. What drives me is solving complex
            problems and creating applications that people rely on.
            <br />
            I'm always open to new opportunities and conversations about
            technology or interesting projects. Whether it's a potential
            collaboration, technical discussion, or just exchanging ideas, feel
            free to reach out!
          </p>
        </div>

        <div className="col-span-1 md:flex justify-center items-start pt-12 hidden ">
          <div className="rounded-xl shadow-lg shadow-gray-400 p-2 bg-gray-500 max-w-[350px]">
            <Image
              className="rounded-xl m-auto"
              src="/assets/images/cv_photo.jpeg"
              alt="Hamza Al Sheikh"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
