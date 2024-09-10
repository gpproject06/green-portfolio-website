import React from 'react';
import Image from 'next/image';
interface InfoCardProps {
    title: string;
    description: string;
    img: string;
  }

  const EcmCard: React.FC<InfoCardProps> = ({ title, description, img }) => {
    return (
        <div className="px-6 pt-3 pb-10 border-2	border-black-900 rounded-2xl shadow-2xl ">
          <div className= "flex justify-center">
          <Image className="w-96" src={img} alt="card image" />
      </div>

          <div>
            </div>
            <div className="font-bold text-2xl py-4 text-center ">{title}</div>
            <p className=" px-2  text-center text-base">
            {description}
            </p>
            
        </div>
        
    );
  };
  export default EcmCard;
