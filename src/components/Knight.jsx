import React, { useRef, useLayoutEffect } from "react";
import { useGLTF } from "@react-three/drei";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GUI } from "dat.gui";
import { Float } from "@react-three/drei";

gsap.registerPlugin(ScrollTrigger);

export const Knight = (props) => {
  const { nodes, materials } = useGLTF("/scene.gltf");
  const knight = useRef();
  const tl = gsap.timeline();

  /* DEBUG MODEL3D */
  /*   useLayoutEffect(() => {
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
  }, []);  

  /* ANIMATIONS */
  useLayoutEffect(() => {
    const screen = window.screen.width;
    new ScrollTrigger({});
    tl.to(knight.current?.position, {
      x: screen > 1000 ? 4.5 : -27,
      y: screen > 1000 ? 1.6 : -7,
      z: screen > 1000 ? -2.7 : 18.9,
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
        y: screen > 1000 ? 0.21 : -1.46,
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
        x: screen > 1000 ? -5.155 : -10,
        y: screen > 1000 ? 2 : -0.6,
        z: screen > 1000 ? 10.2 : 10,
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
        y: screen > 1000 ? -1.1 : -0.9,
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
        x: 1.565,
        y: -1.4,
        z: -2.5,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: "#seven_section",
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
          trigger: "#seven_section",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
        },
      })
      .to(knight.current?.position, {
        x: -1.3,
        y: -0.7,
        z: 23,
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
        y: -1.74,
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
        x: -1.5,
        y: -0.7,
        z: 23,
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
        y: -1.74,
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
/* x: 4.565,
y: 0.4,
z: -4, */
