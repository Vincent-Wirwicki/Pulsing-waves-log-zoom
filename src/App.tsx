import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import { lazy, ReactNode, Suspense } from "react";
import useInitArrays from "./components/fbo-utils/hooks/useInitArrays";
import Loading from "./components/layout/Loading";

const LabOne = lazy(() => import("./pages/LabOne"));
const Labtwo = lazy(() => import("./pages/LabTwo"));
const LabThree = lazy(() => import("./pages/LabThree"));

const WithSupsense = ({ children }: { children: ReactNode }) => {
  return <Suspense fallback={<Loading />}>{children}</Suspense>;
};

const App = () => {
  const texSize = 1024;
  //init float 32 array particles data
  const { particles, random2D } = useInitArrays({ size: texSize });

  const paths = ["/", "/02", "/03"];

  return (
    <Routes>
      <Route path="/" element={<Layout paths={paths} />}>
        <Route
          index
          element={
            <LabOne size={texSize} particles={particles} pos={random2D} />
          }
        />
        <Route
          path="/02"
          element={
            <WithSupsense>
              <Labtwo size={texSize} particles={particles} pos={random2D} />
            </WithSupsense>
          }
        />
        <Route
          path="/03"
          element={
            <WithSupsense>
              <LabThree size={texSize} particles={particles} pos={random2D} />
            </WithSupsense>
          }
        />
      </Route>
    </Routes>
  );
};

export default App;
