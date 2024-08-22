import React from 'react';
import Image from 'next/image';
interface InfoCardProps {
    title: string;
    description: string;
    imageUrl: string;
  }

  const EcmCard: React.FC<InfoCardProps> = ({ title, description, imageUrl }) => {
    return (
        <div className="px-6 py-4  border-gray-900 rounded-2xl shadow-2xl ">
          <div className= "flex justify-center">
          <Image 
        src={imageUrl} 
        alt="card image" 
        width={400} 
        height={400}
         layout="responsive"
         
      />
      </div>

          <div>
            </div>
            <div className="font-bold text-2xl py-5 text-center ">{title}</div>
            <p className=" px-2 text-center text-lg">
            {description}
            </p>
            
        </div>
        
    );
  };
  export default EcmCard;
