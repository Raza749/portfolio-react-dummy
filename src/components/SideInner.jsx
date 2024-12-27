import React from "react";
import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { GoProjectSymlink } from "react-icons/go";
import { SiAboutdotme } from "react-icons/si";
import { GrTechnology } from "react-icons/gr";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { BsDiscord } from "react-icons/bs";
import { FaWindowClose } from "react-icons/fa";

const SideInner = () => {
  return (
    <>
      <div className="flex relative items-start py-20 h-full justify-center">
        <ul className=" gap-7 text-lg flex flex-col">
          <li className="hover:bg-purple-400 duration-500 p-2 rounded-md">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-purple-900 font-semibold"
                  : "text-slate-200 font-normal"
              }
            >
              <span className="flex items-center gap-3">
                <FaHome />
                Home
              </span>
            </NavLink>
          </li>
          <li className="hover:bg-purple-400 duration-500 p-2 rounded-md">
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive
                  ? "text-purple-900 font-semibold "
                  : "text-slate-200 font-normal"
              }
            >
              <span className="flex items-center gap-3">
                <GoProjectSymlink />
                Projects
              </span>
            </NavLink>
          </li>
          <li className="hover:bg-purple-400 duration-500 p-2 rounded-md">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-purple-900 font-semibold "
                  : "text-slate-200 font-normal"
              }
              to="/techs"
            >
              <span className="flex items-center gap-3">
                <GrTechnology />
                Technologies
              </span>
            </NavLink>
          </li>
          <li className="hover:bg-purple-400 duration-500 p-2 rounded-md">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-purple-900 font-semibold "
                  :"text-slate-200 font-normal"
              }
              to="/about"
            >
              <span className="flex items-center gap-3">
                <SiAboutdotme />
                About
              </span>
            </NavLink>
          </li>

          <div className="icon flex gap-5">
            <FaLinkedin className="text-purple-300  rounded-full  p-1 mt-10 text-4xl cursor-pointer hover:text-zinc-100 duration-500 hover:bg-purple-600" />
            <FaGithub className="text-purple-300  rounded-full  p-1 mt-10 text-4xl cursor-pointer hover:text-zinc-100 duration-500 hover:bg-purple-600" />
            <BsDiscord className="text-purple-300  rounded-full  p-1 mt-10 text-4xl cursor-pointer hover:text-zinc-100 duration-500 hover:bg-purple-600" />
          </div>
        </ul>
      </div>
    </>
  );
};

export default SideInner;
