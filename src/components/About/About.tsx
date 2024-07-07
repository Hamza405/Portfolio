import { FC } from "react";
import Image from "next/image";
import Skills from "./Skills";
import { Skill } from "@prisma/client";

const About: FC<{ skills: Skill[] }> = ({ skills }) => {
  return (
    <div
      id="about"
      className="flex w-full flex-wrap justify-between items-center p-4 mx-auto my-8"
    >
      <div className="py-4 max-w-[85%] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-1 flex justify-center items-start pt-2 sm:pt-10 md:hidden">
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
          <p className="text-4xl text-blue-800 my-4">About me</p>
          <p>
            Hello! I'm Hamza Al Sheikh, a passionate Front-End Developer based
            in Dubai, UAE. I have a bachelor's degree in Computer Engineering
            from Tishreen University. I started coding at the age of 16, and it
            has since become a thriving career for me. Over the past three
            years, I've specialized in front-end development and have expanded
            my expertise to full-stack development for over a year.
            <br />
            I've had the opportunity to work with companies in the UK, Turkey,
            and Germany in remote roles. In these positions, I led projects and
            mentored junior developers. My experiences range from developing
            mobile apps with React-Native to optimizing web applications,
            reducing load times, and enhancing user interfaces.
            <br />I am proficient in a variety of technologies including HTML,
            CSS, JavaScript, TypeScript, React.js, Redux, and SQL. Additionally,
            I'm familiar with Next.js, Angular, Express.js, MongoDB, AWS, and
            mobile development for Android and iOS. My approach combines
            technical skills with a commitment to best practices and continuous
            learning.
            <br />
            I'm always eager to grow professionally and take on new challenges
            that push the boundaries of technology.
          </p>
          <Skills skills={skills} />
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
