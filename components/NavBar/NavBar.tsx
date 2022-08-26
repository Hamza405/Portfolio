import { FC } from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import SideBar from "./SideBar";

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
            <SideBar />
        </div> );
};

export default NavBar;