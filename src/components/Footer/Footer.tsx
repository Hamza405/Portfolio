import React from "react";
import { AiFillPhone } from "react-icons/ai";
import { AiFillMail } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { IoLocationSharp } from "react-icons/io5";
const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-gradient text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8 justify-around py-4">
          <div className="flex-1">
            <h3 className="text-2xl font-bold mb-2">Hamza AlSheikh</h3>
            <p className="text-gray-300">
              Software Engineer with +5 years of experience specializing in
              front-end and mobile development, with full-stack capabilities.
              Experienced in building cross-platform mobile and web
              applications, optimizing performance, and mentoring development
              teams. Focused on delivering scalable, secure solutions through
              thoughtful architecture.
            </p>
          </div>
          <div className="flex-1 flex flex-col items-center">
            <div>
              <h3 className="text-2xl font-bold mb-2">Contact Me</h3>
              <ul className="text-gray-300">
                <li className="flex flex-row items-center">
                  <AiFillPhone />
                  <a
                    className="ml-2"
                    href="tel:+971506733899"
                    aria-label="Hamza Al Sheikh phone number"
                    target="_blank"
                  >
                    +971 50 673 3899
                  </a>
                </li>
                <li className="flex flex-row items-center">
                  <AiFillMail />
                  <a
                    className="ml-2"
                    href="mailto:hamzash863@gmail.com"
                    aria-label="Hamza Al Sheikh email"
                    target="_blank"
                  >
                    hamzash863@gmail.com
                  </a>
                </li>
                <li className="flex flex-row items-center">
                  <AiFillLinkedin />
                  <a
                    className="ml-2"
                    href="https://www.linkedin.com/in/hamza-al-sheikh"
                    aria-label="Hamza Al Sheikh email"
                    target="_blank"
                  >
                    LinkedIn
                  </a>
                </li>
                <li className="flex flex-row items-center">
                  <IoLocationSharp />
                  <span className="ml-2">Dubai, UAE</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
