import { FC } from "react";
import Link from "next/link";
import { AiOutlineClose, AiFillLinkedin, AiFillGithub, AiFillMail } from "react-icons/ai";

const SideBar: FC<{ isOpen: boolean, onClose: () => void; }> = ( { isOpen, onClose } ) => {
    return (
        <div className={ isOpen ? "md:hidden fixed top-0 left-0 w-full h-screen bg-black/50" : '' }>
            <div className={ isOpen ? "fixed top-0 left-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500" : 'fixed top-0 p-10 left-[-100%] ease-in duration-500' }>
                <div className="flex w-full justify-between items-center">
                    <h2 className="text-green-800">Hamza</h2>
                    <div className="shadow-lg rounded-full p-2 shadow-gray-400 cursor-pointer" onClick={ onClose }>
                        <AiOutlineClose />
                    </div>
                </div>
                <div className="py-10 px-1 flex flex-col">
                    <ul className="uppercase">
                        <Link href="/">
                            <li className="py-4">Home</li>
                        </Link>
                        <Link href="/">
                            <li className="py-4">About</li>
                        </Link>
                        <Link href="/">
                            <li className="py-4">Skills</li>
                        </Link>
                        <Link href="/">
                            <li className="py-4">Projects</li>
                        </Link>
                        <Link href="/">
                            <li className="py-4">Contact</li>
                        </Link>
                    </ul>
                </div>
                <div className="pt-10 px-1">
                    <p className="uppercase">Let's connect</p>
                    <div className="py-6 flex justify-start items-center w-full md:w-[80%]">
                        <div className="rounded-full shadow-lg shadow-gray-400 cursor-pointer p-2 ">
                            <AiFillLinkedin size={ 25 } />
                        </div>
                        <div className="rounded-full shadow-lg shadow-gray-400 cursor-pointer p-2 mx-8">
                            <AiFillGithub size={ 25 } />
                        </div>
                        <div className="rounded-full shadow-lg shadow-gray-400 cursor-pointer p-2 ">
                            <AiFillMail size={ 25 } />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SideBar;