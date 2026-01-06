import { Outlet } from "react-router-dom";
import Nav from "./Nav";
//import GithubIcon from "./GithubIcon";

const Layout = ({ paths }: { paths: string[] }) => {
  return (
    <main>
      <section className="  w-full h-full flex flex-col  ">
        <div className="w-full h-12 flex items-center justify-center gap-4 bg-black  font-bold">
          Until it fades
        </div>
        <div className=" w-full h-full col-span-8 row-span-6 z-10 rounded-2xl overflow-hidden border-neutral-900">
          <Outlet />
        </div>
        <Nav paths={paths} />

        {/* <h1 className="title col-start-1 row-start-1 main-border">
          void waves
        </h1>
        <p className="relative z-30 row-span-3 row-start-6 col-start-1 lg:col-start-3 lg:col-span-2  w-fit bg-black self-end text-white p-4 font-mono main-border">
          Experiment with fractal zoom
        </p>
        <div className="relative z-30 col-start-8 row-start-6 w-fit bg-black self-end justify-self-end main-border p-2 text-xs md:text-base">
          <GithubIcon />
        </div> */}
      </section>
    </main>
  );
};

export default Layout;
