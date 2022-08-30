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
        url: '/assets/skills/css.png',
        caption: 'Slide 1'
    },
    {
        url: '/assets/images/qlevar.png',
        caption: 'Slide 2'
    },
    {
        url: '/assets/images/qlevar.jpg',
        caption: 'Slide 3'
    },
];
// const ProjectItem: FC<Item> = ( props ) => {
const ProjectItem = () => {
    return (
        <div className="">


            <div className="shadow-xl shadow-gray-600
            rounded-x z-10 h-auto w-[325px] sm:w-[500px] md:w-[600px]">
                <div className="slide-container w-[100%] h-auto p-2" style={ {
                    backgroundRepeat: 'no-repeat',
                    minWidth: '100%', width: '100%',
                }
                }>
                    <Slide>
                        { fadeImages.map( ( fadeImage, index ) => (
                            <div className="each-slide h-auto w-full" key={ index }>
                                <div className="image-container flex justify-center items-center w-full h-auto">
                                    <img style={ { objectFit: 'contain', height: 'auto' } } className="rounded-md" src={ fadeImage.url } />
                                </div>
                            </div>
                        ) ) }
                    </Slide>

                    <h3 className="p-4">Qlevar</h3>
                    <p className="p-4 text-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque in ducimus nam molestiae consequatur voluptate sunt, perferendis vitae facilis expedita, ipsam magnam odio suscipit, illum dicta esse mollitia aliquid placeat.</p>
                </div>
            </div>
        </div >
    );
};

export default ProjectItem;