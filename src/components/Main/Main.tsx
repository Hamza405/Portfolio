import { FC } from "react";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillMail,
  AiFillMessage,
  AiOutlineWhatsApp,
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
          <div className="py-4 flex justify-around m-auto items-center max-w-[70%] sm:max-w-[60%]">
            <div className="rounded-full shadow-lg shadow-gray-400 cursor-pointer hover:scale-110 ease-in duration-300 sm:p-6 p-3 ">
              <a
                href="https://www.linkedin.com/in/hamza-al-sheikh"
                target="_blank"
              >
                <AiFillLinkedin size={25} />
              </a>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 cursor-pointer hover:scale-110 ease-in duration-300 sm:p-6 p-3">
              <a href="https://github.com/Hamza405" target="_blank">
                <AiFillGithub size={25} />
              </a>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 cursor-pointer hover:scale-110 ease-in duration-300  sm:p-6 p-3 ">
              <a href="mailto: hamzash863@gmail.com" target="_blank">
                <AiFillMail size={25} />
              </a>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 cursor-pointer hover:scale-110 ease-in duration-300  sm:p-6 p-3 ">
              <a href="https://telegram.me/Hamza_Al_Sheikh" target="_blank">
                <AiFillMessage size={25} />
              </a>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 cursor-pointer hover:scale-110 ease-in duration-300  sm:p-6 p-3 ">
              <a href="https://wa.me/+963932012299" target="_blank">
                <AiOutlineWhatsApp size={25} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Main;
