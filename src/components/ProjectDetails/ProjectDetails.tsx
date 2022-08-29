import Image from "next/image";
import { FC } from "react";

const ProjectDetails: FC = () => {
    return (
        <div className="w-full">
            <div className="w-screen h-[40vh] lg:h-[50vh] relative">
                <div className="w-full h-[40vh] lg:h-[50vh] absolute top-0 left-0 bg-black/50 z-10" />
                <Image src="/assets/images/qlevar.png" alt="/" layout='fill' objectFit="cover" />
                <div className="absolute top-[70%] left[10%] w-full p-4">
                    <h2 className="text-white">Title</h2>
                </div>
            </div>
        </div>
    );
};
export default ProjectDetails;;