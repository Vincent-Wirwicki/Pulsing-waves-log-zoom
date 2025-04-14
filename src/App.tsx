import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import { lazy, Suspense } from "react";
import useInitArrays from "./components/fbo-utils/hooks/useInitArrays";
import Loading from "./components/layout/Loading";

const Labtwo = lazy(() => import("./pages/LabTwo"));
const LabThree = lazy(() => import("./pages/LabThree"));

const App = () => {
  const texSize = 1024;
  //init float 32 array particles data
  const { particles, random2D } = useInitArrays({ size: texSize });

  const paths = [
    { path: "/", title: "v_0_1" },
    { path: "/02", title: "v_0_2" },
    { path: "/03", title: "v_0_3" },
  ];

  return (
    <Routes>
      <Route path="/" element={<Layout paths={paths} />}>
        <Route
          index
          element={<Home size={texSize} particles={particles} pos={random2D} />}
        />
        <Route
          path="/02"
          element={
            <Suspense fallback={<Loading />}>
              <Labtwo size={texSize} particles={particles} pos={random2D} />
            </Suspense>
          }
        />
        <Route
          path="/03"
          element={
            <Suspense fallback={<Loading />}>
              <LabThree size={texSize} particles={particles} pos={random2D} />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
};

export default App;
