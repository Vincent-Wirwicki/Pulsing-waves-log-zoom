import { useFBO } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { MutableRefObject, useEffect, useRef } from "react";
import {
  Camera,
  FloatType,
  NearestFilter,
  RGBAFormat,
  Scene,
  ShaderMaterial,
} from "three";

// a hook that init and animate the fbo scene
const useInitAndAnimateFBO = (
  size: number,
  scene: Scene,
  cam: Camera,
  simMatRef: MutableRefObject<ShaderMaterial | null>,
  renderMatRef: MutableRefObject<ShaderMaterial | null>
) => {
  // create fbo texture
  const target = useFBO(size, size, {
    minFilter: NearestFilter,
    magFilter: NearestFilter,
    format: RGBAFormat,
    type: FloatType,
    // depth: true,
    // stencilBuffer: true,
  });
  const target1 = target.clone();

  const state = useThree();

  //init all the texture
  useEffect(() => {
    const { gl } = state;
    gl.setRenderTarget(target);
    gl.clear();
    gl.render(scene, cam);
    gl.setRenderTarget(target1);
    gl.clear();
    gl.render(scene, cam);
    gl.setRenderTarget(null);
    return () => {
      target.dispose();
      target1.dispose();
    };
  });

  const fboA = useRef(target);
  const fboB = useRef(target1);

  useFrame(state => {
    if (!simMatRef.current || !renderMatRef.current)
      throw new Error(
        "useInitAndAnimateFBO: simMatRef or renderMatRef not provided"
      );

    const { gl, clock } = state;
    simMatRef.current.uniforms.uTime.value = clock.elapsedTime;
    simMatRef.current.uniforms.uPositions.value = fboA.current.texture;
    renderMatRef.current.uniforms.uPositions.value = fboB.current.texture;

    gl.setRenderTarget(fboB.current);
    gl.clear();
    gl.render(scene, cam);
    gl.setRenderTarget(null);
    //swap texture
    [fboA.current, fboB.current] = [fboB.current, fboA.current];
  });
};

export default useInitAndAnimateFBO;
