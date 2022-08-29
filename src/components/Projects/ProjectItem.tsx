import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

type Item = {
    image: string,
    title: string,
    stack: string,
    projectId: number;
};

// const ProjectItem: FC<Item> = ( props ) => {
const ProjectItem = () => {
    return (
        <div
            className="relative
            flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 
            rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]"
        >
            <Image
                className="rounded-xl m-auto group-hover:opacity-10"
                src="/assets/images/cv_photo.jpg"
                alt="Pictureof the author"
                width={ 300 }
                height={ 300 }
            />
            <div className="hidden group-hover:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <h3 className="text-2xl tracking-wide text-white text-center">Projects Title</h3>
                <p className="pt-2 pb-4 text-center text-white">Technologies</p>
                <Link href="/projects">
                    <p className="text-center text-lg font-bold cursor-pointer bg-white rounded-xl py-3 text-gray-700">More Info</p>
                </Link>
            </div>
        </div>
    );
};

export default ProjectItem;