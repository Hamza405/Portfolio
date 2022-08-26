import { FC } from "react";
import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";

const NavBar: FC = () => {
    return (
        <div className="fixed shadow-xl w-full h-20 z-[100]" >
            <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
                <h2 className="text-green-800">Hamza</h2>
                <ul className="hidden md:flex">
                    <Link href='/'>
                        <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
                    </Link>
                    <Link href='/'>
                        <li className="ml-10 text-sm uppercase hover:border-b">ABout</li>
                    </Link>
                    <Link href='/'>
                        <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
                    </Link>
                    <Link href='/'>
                        <li className="ml-10 text-sm uppercase hover:border-b">projects</li>
                    </Link>
                    <Link href='/'>
                        <li className="ml-10 text-sm uppercase hover:border-b">contact</li>
                    </Link>
                </ul>
                <div className="md:hidden">
                    <AiOutlineMenu size={ 25 } />
                </div>
            </div>
            <div className="fixed top-0 left-0 w-full h-screen bg-black/50">
                <div className="fixed top-0 left-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10"></div>
            </div>
        </div> );
};

export default NavBar;