import { FC, useState } from "react";
import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";
import SideBar from "./SideBar";

const NavBar: FC = () => {
    const [ sideBar, setSideBar ] = useState( false );
    const openSideBarHandler = () => {
        setSideBar( true );
    };
    const closeSideBarHandler = () => {
        setSideBar( false );
    };
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
                <div className="md:hidden" onClick={ openSideBarHandler }>
                    <AiOutlineMenu size={ 25 } />
                </div>
            </div>
            <SideBar isOpen={ sideBar } onClose={ closeSideBarHandler } />
        </div> );
};

export default NavBar;