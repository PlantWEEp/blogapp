import React from "react"; 
import Homecard from "../components/card/Homecard";
import Category from "../components/card/Category";
import TrendingList from "../components/card/TrendingList";

const Homepage = () => {
  return (
    <> 
      <div className="bg-[url('./assets/bloghome.png')] bg-auto bg-no-repeat bg-right relative"></div>
      <div className="container">
        <h2 className="text-custom-h2 text-skin-textwhite pt-[90px]">
          Discovering Hidden Germs In Europe Lesser Known Beautiful Cities
        </h2>
        <button className="bg-skin-green text-skin-textwhite text-custom-h6 rounded-[38px] px-[40px] py-[12px] mt-[40px] animate-[wiggle_1s_ease-in-out_infinite]">
          Get Started
        </button>
        <Homecard />
        <div className="grid grid-cols-[70%,30%] gap-[14px] mt-[120px]">
          <TrendingList />
          <Category />
        </div>
      </div>
    </>
  );
};

export default Homepage;
