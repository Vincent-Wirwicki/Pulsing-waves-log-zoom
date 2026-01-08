import { NavLink } from "react-router-dom";

const Nav = ({ paths }: { paths: string[] }) => {
  return (
    <nav className="relative w-full h-12 flex items-center justify-center  gap-4 ">
      {/* <p>Fractal zoom</p> */}
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
          isActive ? "border border-[#31f5ff] " : "border border-neutral-500"
        } w-[20px] h-[20px]  rounded-full border-4`
      }
      to={path}
    ></NavLink>
  );
};

export default Nav;
