"use client";

import { NavLink } from "react-router-dom";

const Nav = ({ paths }: { paths: string[] }) => {
  return (
    <nav className="w-full h-12 flex items-center justify-center gap-4 bg-black ">
      {paths.map((path, i) => (
        <MyLink key={`${path}--${i}`} path={path} />
      ))}
    </nav>
  );
};

const MyLink = ({ path }: { path: string }) => {
  return (
    <NavLink
      className={({ isActive }) =>
        `${
          isActive ? "bg-[#31f5ff]" : "bg-white"
        } w-[15px] h-[15px]  rounded-full`
      }
      to={path}
    >
      {/* <span className="block w-[20px] h-[20px] bg-white rounded-full"></span> */}
    </NavLink>
  );
};

export default Nav;
