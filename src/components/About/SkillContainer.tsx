import { FC, useState } from "react";
import Image from "next/image";

const SkillContainer: FC<{ image: string; text: string }> = ({
  image,
  text,
}) => {
  const [show, setShow] = useState(false);
  return (
    <div className="relative flex flex-col">
      {show && (
        <div className="absolute bottom-16 left-0 opacity-75  bg-gray-600 text-white p-2 rounded-[4px] flex items-center justify-center uppercase text-sm animate-fade">
          {text}
          <span
            style={{
              borderColor: "rgba(75, 85, 99, 0.9) transparent transparent",
            }}
            className="absolute top-[99%] left-1 border-4 border-solid"
          />
        </div>
      )}

      <div
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        className=" rounded-xl shadow-lg shadow-gray-400  hover:scale-110 ease-in duration-300 p-4 flex items-center"
      >
        <Image src={image} alt={text} width={40} height={40} />
      </div>
    </div>
  );
};
export default SkillContainer;
