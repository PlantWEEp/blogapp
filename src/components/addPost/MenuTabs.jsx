import React, { useState } from "react";
import Addpage from "./Ratings";
import Overview from "./Overview";

function MenuTabs() {
  const menu = ["Ratings", "Overview", "Gallery", "Stay"];
  const [activeTab, setActiveTab] = useState(0); 
  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const panels = [<Addpage />, <Overview />];

  return (
    <>
      <div className="text-skin-textwhite container">
        <div className="flex justify-between items-center py-4">
          <div className="">
            <h4 className="font-[700] text-custom-h4">Add Post</h4>
          </div>
        </div>
        <div className="flex items-center">
          <div className="flex flex-col  max-w-[64%] mx-auto items-center justify-center">
            <div className="flex gap-[15px] justify-center py-4 px-4 rounded-[14px] text-custom-links-p bg-skin-transparent relative mt-10 mb-3">
              {menu.map((tab, index) => (
                <div
                  key={index}
                  className={`cursor-pointer px-6 pb-2 relative before:block before:content-[''] before:absolute before:w-full ${
                    activeTab === index
                      ? "font-bold before:border-solid before:border-b before:bottom-[-13px] before:left-0 before:border-white"
                      : ""
                  }`}
                  onClick={() => handleTabClick(index)}
                >
                  {tab}
                </div>
              ))}
            </div>

            <div className="flex gap-3 justify-end w-full  mx-2">
              <div>
                <button className="btn-second">Discard</button>
              </div>
              <div>
                <button className="btn">Upload</button>
              </div>
            </div>
        {/* Render the active panel */}
        <div className="w-full text-skin-textwhite">
          {panels[activeTab]}
        </div> 
          </div>
        </div>
      </div>
    </>
  );
}

export default MenuTabs;
