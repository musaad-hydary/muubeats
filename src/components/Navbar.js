import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed position-relative z-1 w-full h-[80px] flex justify-between items-center px-4 bg-[#f2f2f2] text-[#303030]">
        
      <div>
        <img src={Logo} alt="Logo" style={{ width: "50px" }} />
      </div>

      {/* Main Menu */}

      <ul className="hidden md:flex">
        <li className="hover:text-[#121212] transition linear duration-150 border-b-2 border-transparent hover:border-[#303030]">
          <Link to="/">
            HOME
          </Link>
        </li>
        <li className="hover:text-[#121212] transition linear duration-150 border-b-2 border-transparent hover:border-[#303030]">
          {" "}
          <Link to="/about">
            ABOUT
          </Link>
        </li>
        <li className="hover:text-[#121212] transition linear duration-150 border-b-2 border-transparent hover:border-[#303030]">
          {" "}
          <Link to="/radio" spy={true} smooth={true} duration={500}>
            RADIO
          </Link>
        </li>
        <li className="hover:text-[#121212] transition linear duration-150 border-b-2 border-transparent hover:border-[#303030]">
          {" "}
          <Link to="/beats" spy={true} smooth={true} duration={500}>
            BEATS
          </Link>
        </li>
        <li className="hover:text-[#121212] transition linear duration-150 border-b-2 border-transparent hover:border-[#303030]">
          {" "}
          <Link to="/albums" spy={true} smooth={true} duration={500}>
            ALBUMS
          </Link>
        </li>
        <li className="hover:text-[#121212] transition linear duration-150 border-b-2 border-transparent hover:border-[#303030]">
          {" "}
          <Link to="/contact" spy={true} smooth={true} duration={500}>
            CONTACT
          </Link>
        </li>
      </ul>

      {/* Stacked Menu */}
      <div onClick={handleClick} className="z-1 md:hidden">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#f2f2f2] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-1xl hover:text-[#121212] transition ease-out">
          {" "}
          <Link
            onClick={handleClick}
            to="/"

          >
            HOME
          </Link>
        </li>
        <li className="py-6 text-1xl hover:text-[#121212] transition ease-out">
          {" "}
          <Link
            onClick={handleClick}
            to="/about"
          >
            ABOUT
          </Link>
        </li>
        <li className="py-6 text-1xl hover:text-[#121212] transition ease-out">
          {" "}
          <Link
            onClick={handleClick}
            to="/radio"
          >
            RADIO
          </Link>
        </li>
        <li className="py-6 text-1xl hover:text-[#121212] transition ease-out">
          {" "}
          <Link
            onClick={handleClick}
            to="/beats"

          >
            BEATS
          </Link>
        </li>
        <li className="py-6 text-1xl hover:text-[#121212] transition ease-out">
          <Link
            onClick={handleClick}
            to="/albums"
          >
            ALBUMS
          </Link>
        </li>
        <li className="py-6 text-1xl hover:color-[#121212] transition ease-out">
          <Link
            onClick={handleClick}
            to="/contact"

          >
            CONTACT
          </Link>
        </li>
      </ul>
      
    </div>
  );
};

export default NavBar;
