import { FC } from "react";
import ProjectItem from "./ProjectItem";

const Projects: FC = () => {
    return (
        <div id='projects' className="w-full">
            <div className="max-w-[1244px] p-4 mx-auto my-12 sm:py-14">
                <p className="text-4xl text-green-800 my-4 pb-4">What I Have Built</p>
                <div className="grid md:grid-cols-2 gap-8">
                    <ProjectItem />
                    <ProjectItem />
                    <ProjectItem />
                    <ProjectItem />
                    <ProjectItem />
                </div>
            </div>
        </div>
    );
};
export default Projects;