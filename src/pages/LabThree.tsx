import MainCanvas from "../components/layout/MainCanvas";
import SceneFBO from "../components/lab/03/scene/SceneFBO";

const LabThree = ({
  size,
  pos,
  particles,
}: {
  size: number;
  particles: Float32Array;
  pos: Float32Array;
}) => {
  return (
    <MainCanvas cam={[0, -2.15, 1.2]}>
      <SceneFBO size={size} particles={particles} pos={pos} />
    </MainCanvas>
  );
};

export default LabThree;
