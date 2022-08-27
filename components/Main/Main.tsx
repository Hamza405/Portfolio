import { FC } from "react";

const Main: FC = () => {
    return (
        <div className="w-full h-screen text-center">
            <div className="max-w-[1240px] w-full h-full p-2 mx-auto flex justify-center items-center" style={ { justifyContent: "center" } }>
                <div>
                    <h1 className="py-4 text-gray-800" >Hi, I'm <span className="text-indigo-600">Hamza</span></h1>
                    <h2 className="py-2 text-gray-800" >A Front-End Developer</h2>
                    <p
                        className="py-4 text-gray-600 text-md max-w-[60%] mx-auto"
                    >
                        I'm
                        Fresh graduate computer engineer, Front-End developer building responsive web and mobile application,while i learning back-end
                        technologies
                    </p>
                </div>
            </div>
        </div>
    );
};
export default Main;