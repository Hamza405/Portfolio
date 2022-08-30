import { FC } from "react";
import ProjectItem from "./ProjectItem";

const Projects: FC = () => {
    return (
        <div id='projects' className="w-full">
            <div className="max-w-[1244px] p-4 mx-auto my-8 sm:py-10">
                <p className="text-4xl text-green-800 my-5 pl-4 pb-4">What I Have Built</p>
                <div className="grid xl:grid-cols-2 gap-10">
                    <ProjectItem />
                    <ProjectItem />
                    <ProjectItem />
                </div>
            </div>
        </div>
    );
};
export default Projects;