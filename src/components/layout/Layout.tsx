import { Outlet } from "react-router-dom";
import Nav from "./Nav";
//import GithubIcon from "./GithubIcon";

const Layout = ({ paths }: { paths: string[] }) => {
  return (
    <main>
      <section className="  w-full h-full flex flex-col gap-4  ">
        <div className="w-full h-12 flex items-end justify-between bg-black font-bold text-neutral-200 border-b border-neutral-600 tracking-wide uppercase">
          <h1>Shader lab</h1>
          <h2>Until it fades</h2>
          <a
            href="https://github.com/Vincent-Wirwicki/Pulsing-waves-log-zoom"
            target="_blank"
          >
            Github
          </a>
        </div>
        <div className=" w-full h-full col-span-8 row-span-6 z-10 rounded-2xl overflow-hidden ">
          <Outlet />
        </div>
        <Nav paths={paths} />
      </section>
    </main>
  );
};

export default Layout;
