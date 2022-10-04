import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { Project } from "@prisma/client";
import { FC, useState } from "react";
import { MdOutlineNavigateNext } from "react-icons/md";

const ProjectItem: FC<{ project: Project }> = ({ project }) => {
  const [hover, setHover] = useState(false);
  const images: string[] = [];

  Object.entries(project).forEach(([key, value]) => {
    if (key.match("image") && value.toString().length > 0) {
      images.push(value.toString());
    }
  });

  return (
    <div
      className="shadow-xl shadow-gray-600
            rounded-md  hover:scale-105 ease-in duration-300 z-10 h-auto w-[325px] sm:w-[500px] md:w-[600px]"
    >
      <div
        className="slide-container w-[100%] h-auto p-2"
        style={{
          backgroundRepeat: "no-repeat",
          minWidth: "100%",
          width: "100%",
        }}
      >
        <Slide key={project.id}>
          {images.map((fadeImage, index) => (
            <div className="each-slide h-auto w-full" key={index}>
              <div className="image-container flex justify-center items-center w-full h-auto">
                <img
                  style={{ objectFit: "contain", height: "auto" }}
                  className="rounded-md"
                  src={fadeImage}
                />
              </div>
            </div>
          ))}
        </Slide>
        <div className="flex justify-between items-center">
          <div
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className="flex items-center p-4 text-blue-600 cursor-pointer"
          >
            <h3>{project.projectName}</h3>
            <div className="pt-2 pl-2">
              <MdOutlineNavigateNext
                size={25}
                className={hover ? "animate-ping" : ""}
              />
            </div>
          </div>
          <button className="px-2 py-1 text-sm mt-2 mr-4 sm:px-4 sm:py-2 shadow-xl shadow-gray-400 rounded-xl uppercase bg-gradient-to-r from-[#5651e5] to-[#709dff] text-white hover:scale-110 ease-in duration-300">
            View Code
          </button>
        </div>
        <p className="p-4 text-md">{project.projectDescription}.</p>
      </div>
    </div>
  );
};

export default ProjectItem;
