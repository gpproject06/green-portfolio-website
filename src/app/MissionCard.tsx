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
    
    <div className="flex flex-col w-96 md:w-full">
        <Image className="w-7" src={img} alt="card image"/>
        <div className="text-xl font-bold text-black pt-2">{title} </div>
      <p className="text-black py-2">{description}</p>
      <a href={linkHref} className=" flex flex-row gap-2">
        Learn more <Image className="" src={rightArrow} alt="Right Arrow SVG" />
      </a>
    </div>
  );
};

export default MissionCard;
