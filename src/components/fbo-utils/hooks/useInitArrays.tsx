import { useMemo } from "react";
// A hook that create and fill 32 FLOATarray
const useInitArrays = ({ size = 512 }: { size?: number }) => {
  // like vertices for the points
  const particles = useMemo(() => {
    const length = size * size;
    const particles = new Float32Array(length * 3);
    for (let i = 0; i < length; i++) {
      const i3 = i * 3;
      particles[i3 + 0] = (i % size) / size;
      particles[i3 + 1] = i / size / size;
    }
    return particles;
  }, [size]);
  // random 2d value for positions
  const random2D = useMemo(() => {
    const total = size * size * 4;
    const data = new Float32Array(total);
    const r1 = 3; // Outer radius
    const r2 = 1.5; // Inner radius

    for (let i = 0; i < size * size; i++) {
      const stride = i * 4;
      const theta = 2 * Math.PI * Math.random();
      const r = Math.sqrt(Math.random() * (r1 * r1 - r2 * r2)); // Ensures uniform distribution

      const x = r * Math.cos(theta);
      const y = r * Math.sin(theta);
      const z = 0;
      const w = 1;

      data[stride] = x;
      data[stride + 1] = y;
      data[stride + 2] = z;
      data[stride + 3] = w;
    }
    return data;
  }, [size]);

  return { particles, random2D };
};

export default useInitArrays;
