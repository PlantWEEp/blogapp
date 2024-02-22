import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import useLogout from "../../hooks/Uselogout";
import { useSelector } from 'react-redux';

const Header = () => {
  const userLogin = useSelector((state) => state.auth.user);
  console.log(userLogin);

  const navMenu = [
    { id: 1, name: "Explore", to: "/explore" },
    { id: 2, name: "Write", to: "/write" },
    { id: 3, name: "Events", to: "/" },
  ];

  const{handleLogout, loading, error}=useLogout()

  const location = useLocation();
  const headerClass = location.pathname === '/' ? 'bg-skin-green' : 'bg-skin-transparent';
  const headerText = location.pathname === '/' ? 'text-skin-white' : 'text-skin-textBase';
  
  
  return (
    <header className={`relative ${headerClass} backdrop-blur-[243.7px] p-4 flex justify-between items-center h-[70px]`}>
      <div className=" w-[92%] mx-auto flex items-center justify-between"> 
        <div className="flex items-center">
          <Link to="/">
            <img
              src="../../assets/thewaves-logo.svg"
              alt="Logo"
              className="h-8 w-8 mr-2"
            />
          </Link> 
          <nav className={`md:flex ${headerText} space-x-4 ml-[50px]`}>
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
            <Link to="/auth/register" className="btn flex items-center gap-2">
               Profile
            </Link>
            <button onClick={handleLogout} className="btn-second">
              Logout
            </button>
          </>
          ) : (
            <>
              <Link to="/auth/register" className="btn">
                Get Started
              </Link>
              <Link to="/auth/login" className="btn-second">
                Login
              </Link>
            </>
            
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
