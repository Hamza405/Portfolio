import { FC, ReactNode } from "react";

const SocialContainer: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="rounded-full shadow-lg shadow-gray-400 cursor-pointer hover:scale-110 ease-in duration-300  sm:p-6 p-3 ">
      {children}
    </div>
  );
};

export default SocialContainer;
