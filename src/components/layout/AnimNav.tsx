"use client";

import { NavLink } from "react-router-dom";

const MotionNav = ({
  paths,
}: {
  paths: {
    path: string;
    title: string;
  }[];
}) => {
  return (
    <nav className="fixed top-5 left-5 z-10  w-full ">
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
        `${isActive ? "text-neutral-200" : "text-neutral-500 "} `
      }
      to={path}
    >
      <span>{title}</span>
    </NavLink>
  );
};

export default MotionNav;
