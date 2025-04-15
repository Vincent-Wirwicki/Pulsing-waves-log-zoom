import { Canvas } from "@react-three/fiber";
import { ReactNode } from "react";

const MainCanvas = ({
  children,
  cam = [0.25, -5, 3.4],
  dpr = 1,
}: {
  children: ReactNode;
  cam?: [number, number, number];
  dpr?: number;
}) => {
  return (
    <Canvas camera={{ position: cam }} dpr={dpr}>
      <color attach={"background"} args={["black"]} />
      {children}
    </Canvas>
  );
};
export default MainCanvas;
