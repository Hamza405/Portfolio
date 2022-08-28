import { FC } from "react";
import Image from 'next/image';
import Skills from "./Skills";

const About: FC = () => {
    return (
        <div className="flex w-full md:h-screen flex-wrap justify-between items-center py-18 p-4 mx-auto">
            <div className="py-4 max-w-[85%] m-auto md:grid grid-cols-3 gap-8">
                <div className="col-span-2">
                    <p className="text-5xl text-green-800">About me</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, aliquid voluptas, similique aliquam accusamus, ut quidem soluta animi tempore libero error porro earum sequi provident sunt. Ipsam obcaecati nisi aut!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, aliquid voluptas, similique aliquam accusamus, ut quidem soluta animi tempore libero error porro earum sequi provident sunt. Ipsam obcaecati nisi aut!</p>
                    <Skills />
                </div>
                <div className="col-span-1">
                    <div className="rounded-xl shadow-lg shadow-gray-400 p-2 bg-gray-500">
                        <Image
                            className="rounded-xl m-auto"
                            src="/images/cv_photo.jpg"
                            alt="Pictureof the author"
                            width={ 300 }
                            height={ 300 }
                            objectFit='contain'
                        />
                    </div>
                </div>
            </div>

        </div>
    );
};
export default About;