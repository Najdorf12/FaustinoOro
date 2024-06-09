import { useLayoutEffect, useRef } from "react";
import { Knight } from "./Knight";
import {
  OrbitControls,
  Environment,
  PerspectiveCamera,
  Float,
} from "@react-three/drei";
import { GUI } from "dat.gui";

const Experience = () => {
  return (
    <>
      <ambientLight intensity={2} />
      <spotLight
        position={[1.2, 20, 0]}
        angle={2}
        penumbra={1}
        castShadow
        intensity={10}
      />
      <Environment background={false} preset={"warehouse"} />
      <PerspectiveCamera makeDefault position={[21, 3, 2]} />
      <OrbitControls enableZoom={false} enabled={false} />
      <group position={[16, -3, 2]} castShadow={true}>
        <Knight scale={2} />
      </group>
    </>
  );
};

export default Experience;
