import { FC, useState, useEffect } from "react";
import Image from "next/image";
import Skills from "./Skills";
import { Skill } from "@prisma/client";

const About: FC<{ skills: Skill[] }> = ({ skills }) => {
  return (
    <div
      id="about"
      className="flex w-full flex-wrap justify-between items-center p-4 mx-auto my-12 sm:my-14"
    >
      <div className="py-4 max-w-[85%] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-1 flex justify-center items-start pt-2 sm:pt-10 md:hidden">
          <div className="rounded-xl shadow-lg shadow-gray-400 p-2 bg-gray-500 max-w-[350px]">
            <Image
              className="rounded-xl m-auto"
              src="/assets/images/cv_photo.jpg"
              alt="Hamza Al Sheikh"
              width={300}
              height={300}
            />
          </div>
        </div>
        <div className="col-span-2">
          <p className="text-4xl text-blue-800 my-4">About me</p>
          <p className="text-lg">
            I'm hamza al sheikh, Have a bachelor degree in computer engineering
            with more than one year exp in front end development.
            <br /> I started to code in college years, I learned many computer
            techniques and many programming languages ​​and dealing with
            databases.
            <br /> I work as freelance developer on{" "}
            <a
              className="text-blue-800 text-xl"
              href="https://mostaql.com/u/hamza_alsheikh"
              target="_blank"
            >
              Mostaql
            </a>{" "}
            and looking for opportunities to demonstrate my skills with an
            expert team of developers who will help advance my career
            progression to senior positions in the future.
          </p>
          <Skills skills={skills} />
        </div>

        <div className="col-span-1 md:flex justify-center items-start pt-2 hidden ">
          <div className="rounded-xl shadow-lg shadow-gray-400 p-2 bg-gray-500 max-w-[350px]">
            <Image
              className="rounded-xl m-auto"
              src="/assets/images/cv_photo.jpg"
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
