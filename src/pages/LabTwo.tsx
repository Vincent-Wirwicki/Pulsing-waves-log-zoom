import MainCanvas from "../components/layout/MainCanvas";
import SceneFBO from "../components/lab/02/scene/SceneFBO";

const LabTwo = ({
  size,
  pos,
  particles,
}: {
  size: number;
  particles: Float32Array;
  pos: Float32Array;
}) => {
  return (
    <MainCanvas cam={[0, -4, 2.8]}>
      <SceneFBO size={size} particles={particles} pos={pos} />
    </MainCanvas>
  );
};

export default LabTwo;
