import { FC } from "react";
import { useRouter } from "next/router";
import {
  AiOutlineClose,
  AiFillMail,
  AiFillMessage,
  AiOutlineWhatsApp,
} from "react-icons/ai";

const SideBar: FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose,
}) => {
  const router = useRouter();
  const menu = [
    {
      name: "home",
      onClick: () => {
        onClose();
        router.push("/#");
      },
    },
    {
      name: "about",
      onClick: () => {
        onClose();
        router.push("/#about");
      },
    },
    {
      name: "projects",
      onClick: () => {
        onClose();
        router.push("/#projects");
      },
    },
  ];
  return (
    <div
      className={
        isOpen ? "md:hidden fixed top-0 left-0 w-full h-screen bg-black/50" : ""
      }
    >
      <div
        className={
          isOpen
            ? "fixed top-0 left-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
            : "fixed top-0 p-10 left-[-100%] ease-in duration-500"
        }
      >
        <div className="flex w-full justify-between items-center">
          <h2 className="text-green-800">Hamza</h2>
          <div
            className="shadow-lg rounded-full p-2 shadow-gray-400 cursor-pointer"
            onClick={onClose}
          >
            <AiOutlineClose />
          </div>
        </div>
        <div className="py-10 px-1 flex flex-col">
          <ul className="uppercase">
            {menu.map((item) => (
              <li key={item.name} onClick={item.onClick} className="py-4">
                {item.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="pt-10 px-1">
          <p className="uppercase">Let's connect</p>
          <div className="py-4 flex justify-around m-auto items-center md:w-[80%]">
            <div className="rounded-full shadow-lg shadow-gray-400 cursor-pointer hover:scale-110 ease-in duration-300 p-2 ">
              <a href="mailto: hamzash863@gmail.com" target="_blank">
                <AiFillMail size={25} />
              </a>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 cursor-pointer hover:scale-110 ease-in duration-300 p-2 ">
              <a href="https://telegram.me/Hamza_Al_Sheikh" target="_blank">
                <AiFillMessage size={25} />
              </a>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 cursor-pointer hover:scale-110 ease-in duration-300 p-2 ">
              <a href="https://wa.me/+963932012299" target="_blank">
                <AiOutlineWhatsApp size={25} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;