import { FC } from "react";
import ProjectItem from "./ProjectItem";
import { Project } from "@prisma/client";

const Projects: FC<{ projects: Project[] }> = ({ projects }) => {
  return (
    <div id="projects" className="max-w-[1244px] p-4 mx-auto py-10 sm:py-12">
      <p className="text-4xl text-blue-800 my-5 pl-4 pb-4">What I Have Built</p>
      <div className="flex flex-col justify-center items-center gap-10">
        {projects.map((project) => (
          <ProjectItem key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};
export default Projects;
