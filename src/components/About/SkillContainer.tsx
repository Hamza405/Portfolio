import { FC } from "react";
import Image from 'next/image';

const SkillContainer: FC<{ image: string; }> = ( { image } ) => {
    return (
        <div className="rounded-xl shadow-lg shadow-gray-400 cursor-pointer hover:scale-110 ease-in duration-300 p-4 flex items-center">
            <Image src={ image } width={ 40 } height={ 40 } />
        </div>
    );
};
export default SkillContainer;