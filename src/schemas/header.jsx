import React from 'react';

const Header = () => {
    return (
        <header className="bg-gray-800 p-4 flex justify-between items-center h-[70px]">
            {/* Left side */}
            <div className="flex items-cente ">
                {/* Logo */}
                <img src="/path-to-your-logo.png" alt="Logo" className="h-8 w-8 mr-2 ml-[102px] mt-[10px]" />

                {/* Explore and Write Links */}
                <nav className="md:flex space-x-4 ml-[50px] mt-[10px]">
                    <a href="#" className="text-skin-textwhite custom-p">Explore</a>
                    <a href="#" className="text-skin-textwhite custom-p">Write</a>
                </nav>
            </div>

            {/* Right side */}
            <div className="flex items-center mr-[100px] gap-8 mt-[10px]">
                {/* Get Started Button */}
                <button className="bg-skin-primarycolor  text-skin-textwhite py-2 px-2 rounded-[22px] custom-p">
                    Get Started
                </button>

                {/* Login Button */}
                <button className="bg-skin-transparentcolor  border-white border-[1px] text-skin-textwhite  py-2 px-4 rounded-[22px] text-custom-p w-[82px]">
                    Login
                </button>
            </div>
        </header>
    );
};

export default Header;