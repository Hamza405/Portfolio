import { FC } from "react";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillMail,
  AiFillMessage,
} from "react-icons/ai";
import PersonalIdentification from "./PersonalIdentification";

const Main: FC = () => {
  return (
    <div id="main" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full p-2 mx-auto flex my-8 sm:justify-center items-center">
        <div>
          <PersonalIdentification />
          <button className="py-4 px-8 my-4 hover:scale-105 ease-in duration-300">
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              My Resume
            </a>
          </button>
          <div className="py-4 flex justify-between m-auto items-center max-w-[70%] sm:max-w-[60%]">
            <div className="rounded-full shadow-lg shadow-gray-400 cursor-pointer hover:scale-110 ease-in duration-300 sm:p-6 p-3 ">
              <AiFillLinkedin size={25} />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 cursor-pointer hover:scale-110 ease-in duration-300 sm:p-6 p-3">
              <AiFillGithub size={25} />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 cursor-pointer hover:scale-110 ease-in duration-300  sm:p-6 p-3 ">
              <AiFillMail size={25} />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 cursor-pointer hover:scale-110 ease-in duration-300  sm:p-6 p-3 ">
              <AiFillMessage size={25} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Main;
