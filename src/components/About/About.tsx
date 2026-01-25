import { FC } from "react";
import Image from "next/image";

const About: FC = () => {
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
            with a degree in Computer Engineering. What began as a passion for
            coding at age 16 has evolved into a fulfilling career building
            impactful solutions.
            <br />
            Over the past 5+ years, I've specialized in mobile development with
            a strong focus on React Native and cross-platform applications. For
            the last 3 years, I've expanded into full-stack development, working
            remotely with international companies across the UK, Turkey, and
            Germany.
            <br />
            Working across international teams has strengthened my ability to
            collaborate across time zones and cultures. I've led challenging
            projects from offline-first architectures and AES-256 encryption to
            custom native modules and serverless backends. Beyond coding, I'm
            passionate about mentoring developers and believe great software is
            built by great teams.
            <br />
            My toolkit spans JavaScript, TypeScript, React, React Native,
            Node.js, Express.js, SQL, and AWS, but I focus on thoughtful
            architecture, clean code, and building secure, scalable solutions.
            What drives me is solving complex problems and creating applications
            that people truly rely on.
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
