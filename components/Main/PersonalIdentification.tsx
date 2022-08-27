import { FC } from "react";

const PersonalIdentification: FC = () => {
    return (
        <>
            <h1 className="py-4 text-gray-800" >Hi, I'm <span className="text-indigo-600">Hamza</span></h1>
            <h2 className="py-2 text-gray-800" >A Front-End Developer</h2>
            <p
                className="py-4 text-gray-600 text-md max-w-[70%] mx-auto"
            >
                I'm
                Fresh graduate computer engineer, Front-End developer building responsive web and mobile application,while i learning back-end
                technologies
            </p>
        </>
    );
};
export default PersonalIdentification;