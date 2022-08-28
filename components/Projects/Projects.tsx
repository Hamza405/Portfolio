import { FC } from "react";
import Image from "next/image";

const Projects: FC = () => {
    return (
        <div className="w-full">
            <div className="max-w-[1244px] p-4 mx-auto py-8 sm:py-12">
                <p className="text-4xl text-green-800 my-4 pb-4">What I Have Built</p>
                <div className="grid md:grid-cols-2 gap-8">
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
                    </div>
                    <div
                        className="relative
                        flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 
                        rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]"
                    >
                        <Image
                            className="rounded-xl m-auto"
                            src="/assets/images/cv_photo.jpg"
                            alt="Pictureof the author"
                            width={ 300 }
                            height={ 300 }
                        />
                    </div>
                    <div
                        className="relative
                        flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 
                        rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]"
                    >
                        <Image
                            className="rounded-xl m-auto"
                            src="/assets/images/cv_photo.jpg"
                            alt="Pictureof the author"
                            width={ 300 }
                            height={ 300 }
                        />
                    </div>
                    <div
                        className="relative
                        flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 
                        rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]"
                    >
                        <Image
                            className="rounded-xl m-auto"
                            src="/assets/images/cv_photo.jpg"
                            alt="Pictureof the author"
                            width={ 300 }
                            height={ 300 }
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Projects;