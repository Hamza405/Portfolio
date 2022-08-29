import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

type Item = {
    image: string,
    title: string,
    stack: string,
    projectId: number;
};
const fadeImages = [
    {
        url: '/assets/images/cv_photo.jpg',
        caption: 'Slide 1'
    },
    {
        url: '/assets/images/cv_photo.jpg',
        caption: 'Slide 2'
    },
    {
        url: '/assets/images/cv_photo.jpg',
        caption: 'Slide 3'
    },
];
// const ProjectItem: FC<Item> = ( props ) => {
const ProjectItem = () => {
    return (
        <div className="h-auto w-[500px]">


            <div className="shadow-xl shadow-gray-600
            rounded-xl">
                <div className="slide-container w-full mx-auto">
                    <Slide>
                        { fadeImages.map( ( fadeImage, index ) => (
                            <div className="each-fade" key={ index }>
                                <div className="image-container">
                                    <img className="rounded-md" src={ fadeImage.url } />
                                </div>
                            </div>
                        ) ) }
                    </Slide>
                    <h3 className="p-4">Qlevar</h3>
                    <p className="p-4 text-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque in ducimus nam molestiae consequatur voluptate sunt, perferendis vitae facilis expedita, ipsam magnam odio suscipit, illum dicta esse mollitia aliquid placeat.</p>
                </div>
            </div>
        </div>
    );
};

export default ProjectItem;