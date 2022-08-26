import { FC } from "react";
import { AiOutlineClose } from "react-icons/ai";

const SideBar: FC = () => {
    return <div className="fixed top-0 left-0 w-full h-screen bg-black/50">
        <div className="fixed top-0 left-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10">
            <div className="flex w-full justify-between items-center">
                <h2 className="text-green-800">Hamza</h2>
                <div className="shadow-lg rounded-full p-2 shadow-gray-400 cursor-pointer">
                    <AiOutlineClose />
                </div>
            </div>
        </div>
    </div>;
};

export default SideBar;