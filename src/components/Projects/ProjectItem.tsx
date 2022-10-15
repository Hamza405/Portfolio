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
            rounded-md  hover:scale-105 ease-in duration-300 z-10 h-auto w-[325px] sm:w-[500px] md:w-[600px] bg-gray-300"
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
          {images.map((image, index) => (
            <div className="each-slide h-auto w-auto" key={index}>
              <div className="image-container flex justify-center items-center w-auto h-auto">
                {image ? (
                  <img
                    style={{ objectFit: "contain", height: "auto" }}
                    className="rounded-md"
                    src={image}
                    alt={`hamza ${project.id} project`}
                  />
                ) : (
                  <div className="py-32" role="status">
                    <svg
                      className="inline mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                      />
                    </svg>
                    <span className="sr-only">Loading...</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </Slide>
        <div className="flex justify-between items-center">
          {project.projectLink ? (
            <a
              href={project.projectLink}
              target="_blank"
              aria-label={project.projectName}
            >
              <div
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                className="flex items-center p-4 text-blue-600"
              >
                <h3>{project.projectName}</h3>
                {project.projectLink && (
                  <div className="pt-2 pl-2">
                    <MdOutlineNavigateNext
                      size={25}
                      className={hover ? "animate-ping" : ""}
                    />
                  </div>
                )}
              </div>
            </a>
          ) : (
            <div
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
              className="flex items-center p-4 text-blue-600"
            >
              <h3>{project.projectName}</h3>
              {project.projectLink && (
                <div className="pt-2 pl-2">
                  <MdOutlineNavigateNext
                    size={25}
                    className={hover ? "animate-ping" : ""}
                  />
                </div>
              )}
            </div>
          )}

          {project.projectCodeLink && (
            <a
              href={project.projectCodeLink}
              target="_blank"
              aria-label={`${project.projectName} repo`}
              className="px-2 py-1 text-sm mt-2 mr-4 sm:px-4 sm:py-2 shadow-xl shadow-gray-400 rounded-xl uppercase bg-gradient-to-r from-[#5651e5] to-[#709dff] text-white hover:scale-110 ease-in duration-300 cursor-pointer"
            >
              Code
            </a>
          )}
        </div>
        <p className="p-4 text-md">{project.projectDescription}.</p>
      </div>
    </div>
  );
};

export default ProjectItem;
