import Image from 'next/image';
import Link from 'next/link';

interface CourseCardProps {
    imageUrl: string;
    title: string;
    active: boolean;
    courseUrl: string;
}

const CourseCard: React.FC<CourseCardProps> = ({ imageUrl, title, active, courseUrl }) => {
    return (
        <Link className={` font-bold text-center shadow-2xl w-60 mb-10 md:mx-6 rounded-md 
            ${!active ? 'opacity-50 hover:scale-100' : 'hover:scale-105'} 
            transition-transform transform `}
            href={courseUrl}
            >
            <Image 
                src={imageUrl} 
                alt={`${title} card image`} 
                width={400} 
                height={400}
                layout="responsive"
                className=''
            />
            <h1 className='p-1 m-1 text-sm md:text-xs lg:text-lg text-gradient'>{title}</h1>
        </Link>
    );
}

export default CourseCard;

