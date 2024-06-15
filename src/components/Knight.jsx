import React, { useRef, useLayoutEffect } from "react";
import { useGLTF } from "@react-three/drei";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GUI } from "dat.gui";
import { Float} from "@react-three/drei";


gsap.registerPlugin(ScrollTrigger);

export const Knight = (props) => {
  const { nodes, materials } = useGLTF("/scene.gltf");
  const knight = useRef();
  const tl = gsap.timeline();

  /* DEBUG MODEL3D */
  /* useLayoutEffect(() => {
    const gui = new GUI({ width: 400 });

    const debugRotation = {
      rotation: {
        x: 0,
        y: 0,
        z: 0,
      },
    };
    const debugPosition = {
      position: {
        x: 0,
        y: 0,
        z: 0,
      },
    };

    //Rotation
    gui
      .add(debugRotation.rotation, "x")
      .min(-30)
      .max(30)
      .step(0.005)
      .onChange(() => {
        knight.current.rotation.x = debugRotation.rotation.x;
      })
      .name("Rotation X");
    gui
      .add(debugRotation.rotation, "y")
      .min(-30)
      .max(30)
      .step(0.005)
      .onChange(() => {
        knight.current.rotation.y = debugRotation.rotation.y;
      })
      .name("Rotation Y");
    gui
      .add(debugRotation.rotation, "z")
      .min(-30)
      .max(30)
      .step(0.005)
      .onChange(() => {
        knight.current.rotation.z = debugRotation.rotation.z;
      })
      .name("Rotation Z");
    // Position
    gui
      .add(debugPosition.position, "x")
      .min(-30)
      .max(30)
      .step(0.005)
      .onChange(() => {
        knight.current.position.x = debugPosition.position.x;
      })
      .name("Posit X");
    gui
      .add(debugPosition.position, "y")
      .min(-30)
      .max(30)
      .step(0.05)
      .onChange(() => {
        knight.current.position.y = debugPosition.position.y;
      })
      .name("Posit Y");
    gui
      .add(debugPosition.position, "z")
      .min(-40)
      .max(40)
      .step(0.05)
      .onChange(() => {
        knight.current.position.z = debugPosition.position.z;
      })
      .name("Posit Z");

    return () => {
      gui.destroy();
    };
  }, []); */

  /* ANIMATIONS */
  useLayoutEffect(() => {
    new ScrollTrigger({});
    tl.to(knight.current?.position, {
      x: 1,
      y: 1.57,
      z: -9.85,
      ease: "power1.out",
      scrollTrigger: {
        trigger: "#second_section",
        start: "top bottom",
        end: "top top",
        scrub: true,
        immediateRender: false,
      },
    })
      .to(knight.current?.rotation, {
        y: 0.51,
        ease: "power1.out",
        scrollTrigger: {
          trigger: "#second_section",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
        },
      })
      .to(knight.current?.position, {
        x: -5.155,
        y: 2,
        z: 10.2,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: "#third_section",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
        },
      })
      .to(knight.current?.rotation, {
        y: -1.1,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: "#third_section",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
        },
      })

      .to(knight.current?.position, {
        x: -11.155,
        y: 0.3,
        z: 16.2,
        ease: "back.out",
        scrollTrigger: {
          trigger: "#four_section",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
        },
      })
      .to(knight.current?.rotation, {
        y: -1.665,
        ease: "back.out",
        scrollTrigger: {
          trigger: "#four_section",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
        },
      })
      .to(knight.current?.position, {
        x: 4.565,
        y: 0.4,
        z: -3,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: "#five_section",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
        },
      })
      .to(knight.current?.rotation, {
        y: -0.005,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: "#five_section",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
        },
      })
      .to(knight.current?.position, {
        x: -13.67,
        y: -0.7,
        z: 22.9,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: "#six_section",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
        },
      })
      .to(knight.current?.rotation, {
        y: -1.175,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: "#six_section",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
        },
      })
      .to(knight.current?.position, {
        x: 28.505,
        y: -1.15,
        z: -5.2,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: "#contact_section",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
        },
      })
      .to(knight.current?.rotation, {
        y: -0.005,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: "#contact_section",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
        },
      })
      .to(knight.current?.position, {
        x: 27.,
        y: -1.5,
        z: -4.95,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: "#contact2_section",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
        },
      })
      .to(knight.current?.rotation, {
        y: 0.005,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: "#contact2_section",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
        },
      });
  }, []);

  return (
    <group ref={knight} {...props} dispose={null}>
      <group
        position={[-13.761, -0.538, 1.292]}
        rotation={[0, 1.272, 0]}
        scale={3}
      >
        <Float speed={1.75} rotationIntensity={0.4} floatIntensity={1}>
          <mesh
            geometry={nodes.pasted__knight_blinn1_0.geometry}
            material={materials.blinn1}
          >
            <meshStandardMaterial color={"#57534e"} wireframe />
          </mesh>
        </Float>
      </group>
    </group>
  );
};

useGLTF.preload("/scene.gltf");
