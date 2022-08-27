import { FC } from "react";
import { AiFillLinkedin, AiFillGithub, AiFillMail, AiFillMessage } from "react-icons/ai";
import PersonalIdentification from "./PersonalIdentification";

const Main: FC = () => {
    return (
        <div className="w-full h-screen text-center">
            <div className="max-w-[1240px] w-full h-full p-2 mx-auto flex justify-center items-center" style={ { justifyContent: "center" } }>
                <div>
                    <PersonalIdentification />
                    <div className="py-4 flex justify-between m-auto items-center max-w-[60%]">
                        <div className="rounded-full shadow-lg shadow-gray-400 cursor-pointer hover:scale-110 ease-in duration-300 sm:p-6 p-3 ">
                            <AiFillLinkedin size={ 25 } />
                        </div>
                        <div className="rounded-full shadow-lg shadow-gray-400 cursor-pointer hover:scale-110 ease-in duration-300 sm:p-6 p-3">
                            <AiFillGithub size={ 25 } />
                        </div>
                        <div className="rounded-full shadow-lg shadow-gray-400 cursor-pointer hover:scale-110 ease-in duration-300  sm:p-6 p-3 ">
                            <AiFillMail size={ 25 } />
                        </div>
                        <div className="rounded-full shadow-lg shadow-gray-400 cursor-pointer hover:scale-110 ease-in duration-300  sm:p-6 p-3 ">
                            <AiFillMessage size={ 25 } />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Main;