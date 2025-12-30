import { FC, useEffect, useState } from "react";
import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";
import SideBar from "./SideBar";

const NavBar: FC = () => {
  const [sideBar, setSideBar] = useState(false);
  const [shadow, setShadow] = useState(false);

  const handleShadow = () => {
    if (window.scrollY > 90) {
      setShadow(true);
    } else {
      setShadow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleShadow);
  }, []);

  const openSideBarHandler = () => {
    setSideBar(true);
  };
  const closeSideBarHandler = () => {
    setSideBar(false);
  };
  return (
    <div
      className={
        shadow
          ? "sticky top-0 left-0 bg-white shadow-xl w-full h-20 z-[100]"
          : "sticky top-0 left-0 bg-[#ecf0f3] w-full h-20 z-[100]"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-8 sm:px-12 2xl:px-16">
        <a href="#">
          <img
            className="h-40 w-44 sm:h-50 sm:w-52 md:h-52 md:w-56"
            src="/assets/logo.svg"
            alt="Hamza Al Sheikh"
          />
        </a>
        <ul className="hidden md:flex">
          <Link href="/">
            <div className="cursor-pointer ml-10">
              <li className="m-auto text-md lg:text-xl uppercase hover:text-gradient">
                Home
              </li>
            </div>
          </Link>
          <Link href="/#about">
            <div className="cursor-pointer ml-10">
              <li className="m-auto text-md lg:text-xl uppercase hover:text-gradient">
                About
              </li>
            </div>
          </Link>
          <Link href="/#skills">
            <div className="cursor-pointer ml-10">
              <li className="m-auto text-md lg:text-xl uppercase hover:text-gradient">
                Skills
              </li>
            </div>
          </Link>
          <Link href="/#writing">
            <div className="cursor-pointer ml-10">
              <li className="m-auto text-md lg:text-xl uppercase hover:text-gradient">
                Writing
              </li>
            </div>
          </Link>
        </ul>
        <div className="md:hidden" onClick={openSideBarHandler}>
          <AiOutlineMenu size={25} />
        </div>
      </div>
      <SideBar isOpen={sideBar} onClose={closeSideBarHandler} />
    </div>
  );
};

export default NavBar;
