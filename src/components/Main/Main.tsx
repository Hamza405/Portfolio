import { FC } from "react";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillMail,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import PersonalIdentification from "./PersonalIdentification";
import SocialContainer from "./SocialContainer";

const Main: FC = () => {
  return (
    <main id="main" className="w-full my-14 md:my-20 lg:my-24 text-center">
      <div className="max-w-[1240px] w-full h-full p-2 mx-auto flex sm:justify-center items-center flex-col">
        <PersonalIdentification />
        {/* Resume Button */}
        {/* <div className="m-auto w-48 cursor-pointer hover:scale-105 md:hover:animate-bounce ease-in duration-300">
          <a
            href="/assets/Hamza_Al_Sheikh_Resume.pdf"
            target="_blank"
            aria-label="Hamza Al Sheikh Resume"
            rel="noopener noreferrer"
          >
            <button className="py-4 px-8 my-4 ">My Resume</button>
          </a>
        </div> */}
        <div className="py-4 w-full flex justify-around m-auto items-center max-w-[80%] sm:max-w-[60%]">
          <SocialContainer>
            <a
              href="https://www.linkedin.com/in/hamza-al-sheikh"
              aria-label="Hamza Al Sheikh linkedin account"
              target="_blank"
            >
              <AiFillLinkedin size={25} />
            </a>
          </SocialContainer>
          <SocialContainer>
            <a
              href="https://github.com/Hamza405"
              aria-label="Hamza Al Sheikh github account"
              target="_blank"
            >
              <AiFillGithub size={25} />
            </a>
          </SocialContainer>
          <SocialContainer>
            <a
              href="mailto: hamzash863@gmail.com"
              aria-label="Hamza Al Sheikh email"
              target="_blank"
            >
              <AiFillMail size={25} />
            </a>
          </SocialContainer>
          {/* <SocialContainer>
            <a
              href="https://telegram.me/Hamza_Al_Sheikh"
              aria-label="Hamza Al Sheikh telegram"
              target="_blank"
            >
              <AiFillMessage size={25} />
            </a>
          </SocialContainer> */}
          <SocialContainer>
            <a
              href="https://wa.me/+971506733899"
              aria-label="Hamza Al Sheikh whatsapp"
              target="_blank"
            >
              <AiOutlineWhatsApp size={25} />
            </a>
          </SocialContainer>
        </div>
      </div>
    </main>
  );
};
export default Main;
