import React from "react";
import Header from "../schemas/header";
import Homecard from "../components/authfrom/Homecard";

const Homepage = () => {

    return(
        <>
<div className="bg-black">
        <div>
            <Header/>
            <div>
                <h2 className="text-custom-h2 w-[969px] mt-[89px] text-skin-textwhite ml-[105px]">Discovering Hidden Germs In Europe Lesser Known Beautiful Cities</h2>
                <button className=" bg-skin-primarycolor text-skin-textwhite text-custom-h6 rounded-[38px] pl-[18px] pr-[18px] ml-[105px] mt-[25px]">Get Started</button>
            </div>


            <div className="mt-[89px] ml-[105px]">
                <Homecard/>
            </div>
        </div>
</div>
        </>
    )

}

export default Homepage;