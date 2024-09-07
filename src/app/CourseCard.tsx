import Image from 'next/image'
interface courseCardProp {
    imageUrl: string;
    title: string;

}

const CourseCard: React.FC<courseCardProp> = ({imageUrl,title}) =>  {

    return (
<div className='font-bold text-center shadow-xl m-10'>
<Image 
        src={imageUrl} 
        alt="card image" 
        width={400} 
        height={400}
         layout="responsive"
         
      />
<h1 className='p-3'>{title}</h1>
</div>
    );
}
export default CourseCard;