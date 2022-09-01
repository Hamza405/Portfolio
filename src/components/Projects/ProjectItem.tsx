import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { Project } from "@prisma/client";
import { FC } from "react";

const ProjectItem: FC<{ project: Project }> = ({ project }) => {
  const images: string[] = [];

  Object.entries(project).forEach(([key, value]) => {
    if (key.match("image") && value.toString().length > 0) {
      images.push(value.toString());
    }
  });

  return (
    <div className="">
      <div
        className="shadow-xl shadow-gray-600
            rounded-x z-10 h-auto w-[325px] sm:w-[500px] md:w-[600px]"
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

          <h3 className="p-4">{project.projectName}</h3>
          <p className="p-4 text-md">{project.projectDescription}.</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
