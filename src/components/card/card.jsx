import React from "react";
import { CiCalendarDate } from "react-icons/ci";
const Card = ({ cardData }) => {
  const { image, heading, author, date,profileImage } = cardData;

  return (
    <>
    <div className="rounded-[14px] shadow-lg transition-all duration-900 p-4 hover:bg-skin-transparent hover:transition-all hover:duration-900">
      <img src={image} alt="" className="w-full  object-cover rounded-[8px]" />
      <div className="pt-4">
        <div className="font-bold text-custom-h6 mb-2 text-skin-textBase">
          {heading.slice(0, 50)}...
        </div>
        <div className="flex gap-[10px] items-center bg-skin-secondary p-[12px] rounded-[8px]">
          <img src={profileImage} alt="profileImage" className="w-[15%] rounded-md"/>
          <div>
          <p className=" text-custom-p relative pl-[25px] text-skin-textBase before:block before:content-[''] before:w-[7.16px] before:h-[7.16px] before:bg-skin-green before:rounded-full before:absolute before:left-[5px] before:top-[44%]">{author}</p>
          <div className="flex gap-2 items-center">
          <CiCalendarDate /> <p className="relative text-custom-p text-skin-grey "> 
            {date}
          </p>
          </div>
          </div>
        </div>
      </div>
    </div></>
  );
};

export default Card;
