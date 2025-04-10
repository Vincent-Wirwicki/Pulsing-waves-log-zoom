import { FC, useMemo, useRef } from "react";
import {
  ShaderMaterial,
  Scene,
  OrthographicCamera,
  RGBAFormat,
  FloatType,
  DataTexture,
} from "three";
import { extend, Object3DNode } from "@react-three/fiber";
import PortalMesh from "../../../fbo-utils/PortalMesh";
import Particles from "../../../fbo-utils/Particles";
import LabTwo from "../shader/SimMat";
import useInitAndAnimateFBO from "../../../fbo-utils/hooks/useInitAndAnimateFBO";
import { FBOType } from "../../../../types/FboType";
import { useWindowResizeReload } from "../../../fbo-utils/hooks/useOnResizeReload";

extend({
  LabTwo,
});

declare module "@react-three/fiber" {
  interface ThreeElements {
    labTwo: Object3DNode<LabTwo, typeof LabTwo>;
  }
}
const SceneFBO: FC<FBOType> = ({ size, particles, pos }) => {
  // FBO SCENE -----------------------------
  const scene = useMemo(() => new Scene(), []);
  const cam = useMemo(() => new OrthographicCamera(-1, 1, 1, -1, -1, 1), []);

  //SHADER REF-------------------------------
  const simRef = useRef<ShaderMaterial>(null!);
  const renderRef = useRef<ShaderMaterial>(null!);

  // DATA POINT TEXTURE --------------
  const dataTex = useMemo(
    () => new DataTexture(pos, size, size, RGBAFormat, FloatType),
    [size, pos]
  );
  dataTex.needsUpdate = true;

  useInitAndAnimateFBO(size, scene, cam, simRef, renderRef);
  useWindowResizeReload();

  return (
    <>
      <PortalMesh scene={scene}>
        <labTwo ref={simRef} args={[dataTex]} />
      </PortalMesh>
      <Particles renderMatRef={renderRef} particles={particles} />
    </>
  );
};

export default SceneFBO;
