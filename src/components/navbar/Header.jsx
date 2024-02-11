import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
const Header = () => {
  const [userLogin, setUserLogin] = useState(false);
  const navMenu = [
    { id: 1, name: "Explore", to: "/explore" },
    { id: 2, name: "Write", to: "/write" },
    { id: 3, name: "Why choose as", to: "/" },
  ];

  return (
    <header className="relative bg-skin-transparent backdrop-blur-[243.7px] p-4 flex justify-between items-center h-[70px]">
      <div className=" w-[92%] mx-auto flex items-center justify-between">
        {/* Left side */}
        <div className="flex items-center">
          <Link to="/">
            <img
              src="../../assets/thewaves-logo.svg"
              alt="Logo"
              className="h-8 w-8 mr-2"
            />
          </Link>
          {/* Explore and Write Links */}
          <nav className="md:flex space-x-4 ml-[50px] text-skin-textBase">
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
              <Link to="/auth/register" className="btn">
                Get Started
              </Link>
              <Link to="/auth/login" className="btn-second">
                Login
              </Link>
            </>
          ) : (
            <>
              <Link to="/auth/register" className="btn flex items-center gap-2">
                 Profile
              </Link>
              <Link to="/auth/login" className="btn-second">
                Logout
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
