import React from "react";
import Card from "./card.jsx";

const cardDataArray = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1706773183831-223a782307ec?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    heading:
      "Discovering Hidden Gems In Europe's Lesser Known Beautiful Cities",
    author: "Author 1",
    date: "January 1, 2024",
    likes: 25,
    comments: 12,
    profileImage:
      "https://images.unsplash.com/photo-1707402771668-1b7786f7c990?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1706773183831-223a782307ec?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    heading: "Exploring Hidden Treasures In Europe's Offbeat Cities",
    author: "Author 2",
    date: "January 2, 2024",
    likes: 30,
    comments: 8,
    profileImage:
      "https://images.unsplash.com/photo-1707402771668-1b7786f7c990?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1706773183831-223a782307ec?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    heading: "Unveiling the Charms of Europe's Hidden Cities",
    author: "Author 3",
    date: "January 3, 2024",
    likes: 15,
    comments: 20,
    profileImage:
      "https://images.unsplash.com/photo-1707402771668-1b7786f7c990?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const Homecard = () => {
  return (
    <>
      <div className=" mt-[120px] ">
        <h5 className="text-custom-h5">Trending on waves</h5>
        <div className="grid grid-cols-3 gap-[30px]">
          {cardDataArray.map((cardData, index) => (
            <Card key={index} cardData={cardData} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Homecard;
