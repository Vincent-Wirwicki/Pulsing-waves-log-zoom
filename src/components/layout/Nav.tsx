"use client";

import { NavLink } from "react-router-dom";

const Nav = ({
  paths,
}: {
  paths: {
    path: string;
    title: string;
  }[];
}) => {
  return (
    <nav className="absolute z-30 col-start-2 row-span-1 bg-black flex gap-4 p-2">
      <h3 className="text-white">Variants</h3>
      {paths.map(({ path, title }, i) => (
        <MyLink key={`${path}-${title}-${i}`} path={path} title={title} />
      ))}
    </nav>
  );
};

const MyLink = ({ path, title }: { path: string; title: string }) => {
  return (
    <NavLink
      className={({ isActive }) =>
        `${isActive ? "text-[#31f5ff]" : "text-neutral-200 "} `
      }
      to={path}
    >
      <span>{title}</span>
    </NavLink>
  );
};

export default Nav;
