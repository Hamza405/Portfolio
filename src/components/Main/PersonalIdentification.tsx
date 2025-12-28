import { FC } from "react";

const PersonalIdentification: FC = () => {
  return (
    <>
      <h1 className="py-4 text-gray-800">
        {/* <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500"> */}
        Hello, I'm <span className="text-gradient">Hamza</span>
      </h1>
      <h2 className="py-2 text-gray-800">Software Engineer</h2>
      {/* <p className="py-4 text-gray-600 text-md max-w-[70%] mx-auto">
        over four years of frontend and over two years of full-stack development
        experience
      </p> */}
    </>
  );
};
export default PersonalIdentification;
