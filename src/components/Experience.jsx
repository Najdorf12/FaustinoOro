import { useLayoutEffect, useRef } from "react";
import { Knight } from "./Knight";
import {
  OrbitControls,
  Environment,
  PerspectiveCamera,
} from "@react-three/drei";

const Experience = () => {
  return (
    <>
      <ambientLight intensity={2} />
      <spotLight position={[1.2, 20, 0]} angle={2} penumbra={1} intensity={6} />
      <Environment
        background={false}
        files="/potsdamer_platz_1k.hdr"
        onError={(error) => console.error("Failed to load HDR:", error)}
      />
      <PerspectiveCamera makeDefault position={[21, 3, 2]} />
      <OrbitControls enableZoom={false} enabled={false} />
      <group position={[16, -3, 2]} castShadow={true}>
        <Knight scale={2} />
      </group>
    </>
  );
};

export default Experience;
