import { Outlet } from "react-router-dom";
import Nav from "./Nav";

const Layout = ({
  paths,
}: {
  paths: {
    path: string;
    title: string;
  }[];
}) => {
  return (
    <main className="absolute top-0 left-0 w-screen h-screen flex justify-center items-center p-20 bg-black">
      <section className="relative z-20 w-full h-full grid grid-cols-2 grid-rows-2 p-10">
        <Nav paths={paths} />
        <div className="absolute w-full h-full col-span-2 row-span-2 z-10  border-[#31f5ff]">
          <Outlet />
        </div>
        <p className="absolute z-30 col-start-1 row-start-2 bg-black self-end text-white justify-self-start ">
          exploring fractal zoom technique
        </p>
        <h1 className="absolute z-20 text-6xl md:text-xl p-4 bg-black text-[#31f5ff] ">
          + Void +
        </h1>
        <h2 className="absolute p-4 bg-black z-20 text-6xl md:text-xl text-[#31f5ff] col-start-2 row-start-2 self-end justify-self-end   ">
          + waVe +
        </h2>
      </section>
    </main>
  );
};

export default Layout;
