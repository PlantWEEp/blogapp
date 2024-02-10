import React from "react";

const Card = ({ cardData }) => {
  const { image, heading, author, date } = cardData;

  return (
    <div className="rounded-[14px] shadow-lg transition-all duration-900 p-4 mt-[120px] hover:bg-skin-transparent hover:transition-all hover:duration-900">
      <img src={image} alt="" className="w-full  object-cover rounded-[14px]" />
      <div className="pt-4">
        <div className="font-bold text-custom-h6 mb-2 text-skin-textwhite">
          {heading}
        </div>
        <div className="flex gap-[13px]">
          <p className=" text-custom-p text-skin-textwhite">{author}</p>
          <p className="relative text-custom-p text-skin-grey before:block before:content-[''] before:w-[3.16px] before:h-[3px] before:bg-skin-green before:rounded-full before:absolute before:left-[-7px] before:top-[47%]"> 
            {date}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
