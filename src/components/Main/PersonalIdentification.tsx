import { FC } from "react";

const PersonalIdentification: FC = () => {
  return (
    <>
      <h1 className="py-4 text-gray-800">
        Hello, I'm <span className="text-indigo-600">Hamza</span>
      </h1>
      <h2 className="py-2 text-gray-800">Software Engineer</h2>
      <p className="py-4 text-gray-600 text-md max-w-[70%] mx-auto">
        over three years of frontend and one year of full-stack development
        experience
      </p>
    </>
  );
};
export default PersonalIdentification;
