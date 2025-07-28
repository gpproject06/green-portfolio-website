import React from "react";
import Image from "next/image";
import * as motion from "framer-motion/client";

interface InfoCardProps {
  title: string;
  description: string;
  img: string;
}

const EcmCard: React.FC<InfoCardProps> = ({ title, description, img }) => {
  return (
    <motion.div
      className=""
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.1, ease: "linear", duration: 2.5, type: "spring" }}
      viewport={{ once: true }}
    >
      <div className="px-10 p-3 border-2 border-black-900 rounded-2xl shadow-xl ">
        <div className="py-6">
          <div className="flex justify-center">
            <Image className="w-48" src={img} alt="card image" />
          </div>

          <div></div>
          <div className="font-bold text-2xl py-4 text-center text-gradient ">
            {title}
          </div>
          <p className="text-center text-base">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};
export default EcmCard;
