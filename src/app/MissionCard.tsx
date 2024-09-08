import React from 'react';
import Image from 'next/image';


import rightArrow from '/public/rightArrow.svg'
interface InfoCardProps {
  title: string;
  description: string;
  linkHref: string;
  img:string;
}


const MissionCard: React.FC<InfoCardProps> = ({ title, description, linkHref, img }) => {
  return (  
    
    <div className="w-72 xs:w-80 sm:w-72 md:w-80 xl:w-72 px-7 xxs:px-0">
        <Image className="w-6" src={img} alt="card image"/>
        <div className="text-xl font-bold pt-1">{title} </div>
      <p className="py-2 text-lg">{description}</p>
      <a href={linkHref} className=" flex gap-2">
        Learn more <Image className="w-5" src={rightArrow} alt="Right Arrow SVG" />
      </a>
    </div>
  );
};

export default MissionCard;
