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
    <nav className="nav nav-grid">
      {/* <h3 className="text-white">Variants</h3> */}
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
        `${isActive ? "text-[#30FF95]" : "text-neutral-200 "} `
      }
      to={path}
    >
      <span>{title}</span>
    </NavLink>
  );
};

export default Nav;
