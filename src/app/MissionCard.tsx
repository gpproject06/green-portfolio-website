import React from 'react';
import Image from 'next/image';
interface InfoCardProps {
  title: string;
  description: string;
  linkHref: string;
  imageUrl:string;
  size: number;

}

const MissionCard: React.FC<InfoCardProps> = ({ title, description, linkHref, imageUrl,size }) => {
  return (    
  <div className="p-5 sm:rounded-2xl sm:shadow-2xl">
  <div>
        <Image 
        src={imageUrl} 
        alt="card image" 
        width={size} 
        height={0}/>
      </div>
      <div>
      <div >
        <div className="text-xl font-medium text-black pt-2">{title}</div>
        <p className="text-black py-2">{description}</p>
      </div>
      <a href={linkHref} className="">
        Learn more &rarr;
      </a>
      </div>
    </div>
  );
};

export default MissionCard;
