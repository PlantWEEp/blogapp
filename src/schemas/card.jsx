import React from 'react';

const Card = ({ cardData }) => {
  const { image, heading, author, date } = cardData;

  return (
    <div className="w-[379.38px] rounded-[14px] overflow-hidden shadow-lg m-4 ">
      <img src={image} alt="hii" className="w-full h-64 object-cover rounded-[14px]" />
      <div className="px-6 py-4">
        <div className="font-bold text-custom-h6 mb-2 text-white">{heading}</div>
        <p className=" text-custom-p text-white">{author}</p>
        <p className=" text-custom-p text-white">{date}</p>
      </div>
    </div>
  );
};

export default Card;