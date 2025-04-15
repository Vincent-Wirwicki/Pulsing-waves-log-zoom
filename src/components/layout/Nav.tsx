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
    <nav className="nav nav-grid main-border">
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
        `${isActive ? "text-[#30FF95]" : "text-white "} `
      }
      to={path}
    >
      <span>{title}</span>
    </NavLink>
  );
};

export default Nav;
