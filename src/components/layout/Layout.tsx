import { Outlet } from "react-router-dom";
import MotionNav from "./AnimNav";

const Layout = ({
  paths,
}: {
  paths: {
    path: string;
    title: string;
  }[];
}) => {
  return (
    <main className="absolute top-0 left-0 w-screen h-screen flex justify-center items-center py-8 bg-black">
      <MotionNav paths={paths} />
      {/* CANVAS ------------------ */}
      <div className="fixed top-0 left-0 w-screen h-screen border">
        <Outlet />
      </div>
      {/* <div className="fixed z-10 top-0 left-0 col-start-2 w-screen h-screen border flex justify-center items-center text-neutral-200 pointer-events-none">
          A deep dive
        </div> */}
      {/* CANVAS------------------- */}
      {/* BOTTOM PART ------------- */}
      {/* <h1 className="fixed z-10 text-neutral-200 font-serif">
        When you stare into the abyss, the abyss stares back into you."
      </h1> */}
      {/* BOTTOM PART ------------- */}
    </main>
  );
};

export default Layout;
