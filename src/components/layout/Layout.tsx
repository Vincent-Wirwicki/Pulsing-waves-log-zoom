import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import GithubIcon from "./GithubIcon";

const Layout = ({
  paths,
}: {
  paths: {
    path: string;
    title: string;
  }[];
}) => {
  return (
    <main>
      <section className="relative z-20 w-full h-full grid grid-cols-8 grid-rows-6 ">
        <Nav paths={paths} />
        <div className="absolute w-full h-full col-span-8 row-span-6 z-10 main-border ">
          <Outlet />
        </div>
        <h1 className="title col-start-1 row-start-1 main-border">
          Void_ waVes{" "}
        </h1>
        <p className="relative z-30 col-start-3 col-span-2 row-start-6 w-fit bg-black self-end text-white p-4 font-mono main-border">
          Experiment with fractal zoom
        </p>
        <div className="relative z-30 col-start-8 row-start-6 w-fit bg-black self-end justify-self-end main-border p-2">
          <GithubIcon />
        </div>
      </section>
    </main>
  );
};

export default Layout;
