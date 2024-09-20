import Image from 'next/image';

interface CourseCardProps {
    imageUrl: string;
    title: string;
    active: boolean;
}

const CourseCard: React.FC<CourseCardProps> = ({ imageUrl, title, active }) => {
    return (
        <div className={` font-bold text-center shadow-2xl w-60 mb-10 md:mx-6 rounded-md 
            ${!active ? 'opacity-50' : ''} 
            transition-transform transform hover:scale-105`}>
            <Image 
                src={imageUrl} 
                alt={`${title} card image`} 
                width={400} 
                height={400}
                layout="responsive"
                className=''
            />
            <h1 className='p-1 m-1 text-sm md:text-xs lg:text-lg text-gradient'>{title}</h1>
        </div>
    );
}

export default CourseCard;

