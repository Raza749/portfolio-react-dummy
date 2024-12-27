import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { BsDiscord } from "react-icons/bs";
import { HiBars3BottomRight } from "react-icons/hi2";
import SideInner from './SideInner';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const showMenu = ()=>{
    setToggle(true);
  }

  const hideMenu = ()=>{
    setToggle(false);
}

  return (
    <nav className="relative  w-full">
      {/* Side Bar start here */}

      <div onClick={hideMenu} className="blckOverlay z-10  fixed top-0 h-full w-full md:hidden " style={{
        visibility:toggle ? 'visible' : 'hidden',
        opacity:toggle ? 1 : 0
      }}>
        <div onClick={(e)=>{
          e.stopPropagation();
        }} className="w-[55%] h-full bg-slate-500 rounded-l shadow-lg shadow-blue-400 absolute duration-500 " style={{
          right:toggle ? "0%" : '-100%'
        }}>
          <SideInner/>
        </div>
      </div>

      {/* Side Bar end here */}

      <div className="max-w-[1250px] md:mx-auto flex px-8 md:p-2 items-center justify-between h-[60px] md:h-[75px] w-full ">
        <div className="logo">
          <h1 className="logo  hover:text-purple-400 text-zinc-300 text-xl font-bold">
            I.M.<span>portfolio</span>
          </h1>
        </div>
        <div className="links hidden md:block">
          <ul className="flex gap-16 text-lg text-zinc-300">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-purple-400 font-semibold "
                    : "text-zinc-300 font-normal"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  isActive
                    ? "text-purple-400 font-semibold "
                    : "text-zinc-300 font-normal"
                }
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-purple-400 font-semibold "
                    : "text-zinc-300 font-normal"
                }
                to="/techs"
              >
                Technologies
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-purple-400 font-semibold "
                    : "text-zinc-300 font-normal"
                }
                to="/about"
              >
                About
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="icons md:flex hidden gap-5 text-2xl ">
          <FaLinkedin className="text-zinc-300 cursor-pointer hover:text-purple-300" />
          <FaGithub className="text-zinc-300 cursor-pointer hover:text-purple-300" />
          <BsDiscord className="text-zinc-300 cursor-pointer hover:text-purple-300" />
        </div>
        <div className="hamburger md:hidden text-3xl text-zinc-300">
          <HiBars3BottomRight className="cursor-pointer"onClick={showMenu}/>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
