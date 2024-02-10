import React from "react";
import { FaLongArrowAltUp } from "react-icons/fa";
import { FaRegCommentDots } from "react-icons/fa";

function TrendingList() {
  const blogPosts = [
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
    },
  ];

  return (
    <>
      <div className="text-skin-textwhite bg-skin-transparent p-[20px] rounded-[14px]">
        <div>
          {blogPosts.map((list, index) => {
            return (
              <div key={index} className="flex gap-[12px] items-center my-3 relative">
                <div  className=" w-[240px]">
                  <img src={list.image} className="w-[100%] rounded-[14px]" />
                </div>
                <div className="text-custom-h6 font-bold">{list.heading}</div>
                <div className="flex items-center gap-3 absolute right-[0] bottom-[11px]">
                  <div className="flex items-center gap-2">
                    <FaLongArrowAltUp />
                    {list.likes}
                  </div>
                  <div className="flex items-center gap-2">
                    <FaRegCommentDots /> comments
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default TrendingList;
