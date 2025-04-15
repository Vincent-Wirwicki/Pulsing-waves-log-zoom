import MainCanvas from "../components/layout/MainCanvas";
import SceneFBO from "../components/lab/01/scene/SceneFBO";

const Home = ({
  size,
  pos,
  particles,
}: {
  size: number;
  particles: Float32Array;
  pos: Float32Array;
}) => {
  return (
    <MainCanvas>
      <SceneFBO size={size} particles={particles} pos={pos} />
    </MainCanvas>
  );
};

export default Home;
