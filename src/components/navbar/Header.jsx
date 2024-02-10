import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [userLogin, setUserLogin] = useState(true);
  const navMenu = [
    { id: 1, name: "Explore", to: "/explore" },
    { id: 2, name: "Write", to: "/write" },
  ];

  return (
    <header className="relative bg-skin-transparent backdrop-blur-[243.7px] p-4 flex justify-between items-center h-[70px]">
      <div className=" w-[92%] mx-auto flex items-center justify-between">
        {/* Left side */}
        <div className="flex items-center">
          <img
            src="../../assets/thewaves-logo.svg"
            alt="Logo"
            className="h-8 w-8 mr-2"
          />
          {/* Explore and Write Links */}
          <nav className="md:flex space-x-4 ml-[50px] text-skin-textwhite">
            {navMenu.map((menu) => (
              <Link key={menu.id} to={menu.to}>
                {menu.name}
              </Link>
            ))}
          </nav>
        </div>
        {/* Right side */}
        <div className="flex items-center gap-5">
          {userLogin ? (
            <>
              <button className="bg-skin-primarycolor text-skin-textwhite py-2 px-2 rounded-[22px] custom-p">
                Get Started
              </button>
              <button className="bg-skin-transparentcolor border-white border-[1px] text-skin-textwhite py-[7px] px-[20px] rounded-full text-custom-p">
                Login
              </button>
            </>
          ) : (
            <>
              <button className="bg-skin-primarycolor text-skin-textwhite py-2 px-2 rounded-[22px] custom-p">
                Profile
              </button>
              <button className="bg-skin-transparentcolor border-white border-[1px] text-skin-textwhite py-[7px] px-[20px] rounded-full text-custom-p">
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
