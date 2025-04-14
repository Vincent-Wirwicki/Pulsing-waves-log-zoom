import { Outlet } from "react-router-dom";
import MotionNav from "./Nav";

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
      <div className="fixed top-0 left-0 w-screen h-screen p-20 z-10">
        <Outlet />
      </div>
      <section className="relative z-20 w-full h-full flex items-end">
        <MotionNav paths={paths} />
        {/* <h1 className="text-8xl text-neutral-200 flex justify-between w-full px-20">
          <span>
            + diVe <br />+ into
          </span>
          <span>
            the_ +<br />
            Void +
          </span>
        </h1> */}
        <h1 className="text-8xl text-neutral-800 flex justify-between w-full px-10 ">
          <span>
            +wa<span className="text-[#31f5ff]">V</span>e
          </span>
          <span className="text-neutral-800">from</span>
          <span className="text-neutral-800">the_</span>
          <span>
            <span className="text-[#31f5ff]">V</span>oid
            <span className="text-[#31f5ff]">+</span>
          </span>
        </h1>
        {/* CANVAS ------------------ */}

        {/* <h1 className="text-8xl text-neutral-200 ">
          the_ +<br />
          Void +
        </h1> */}
        {/* <div className="fixed z-10 top-0 left-0 col-start-2 w-screen h-screen border flex justify-center items-center text-neutral-200 pointer-events-none">
          A deep dive
        </div> */}
        {/* CANVAS------------------- */}
        {/* BOTTOM PART ------------- */}
        {/* <h1 className="fixed z-10 text-neutral-200 font-serif">
        When you stare into the abyss, the abyss stares back into you."
      </h1> */}
        {/* BOTTOM PART ------------- */}
      </section>
    </main>
  );
};

export default Layout;
