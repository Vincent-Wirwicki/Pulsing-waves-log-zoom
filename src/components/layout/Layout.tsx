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
    <main>
      <section className="relative z-20 w-full h-full grid grid-cols-8 grid-rows-6 ">
        <Nav paths={paths} />
        <div className="absolute w-full h-full col-span-8 row-span-6 z-10 main-border ">
          <Outlet />
        </div>
        {/* <p className="relative z-30 col-start-1 row-start-6 bg-black self-end text-white p-4  ">
          exploring fractal zoom technique
        </p> */}
        <h1 className="title col-start-1 row-start-1 main-border">
          Void_ waVes{" "}
        </h1>
      </section>
    </main>
  );
};

export default Layout;
