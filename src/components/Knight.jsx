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
  /*    useLayoutEffect(() => {
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
 */
  /* ANIMATIONS */

  useLayoutEffect(() => {
    const screen = window.screen.width;
    new ScrollTrigger({});
    tl.to(knight.current?.position, {
      x: screen > 1000 ? 5 : -27,
      y: screen > 1000 ? 1.6 : -7,
      z: screen > 1000 ? -2.7 : 18.9,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#second_section",
        start: "top bottom",
        end: "top top",
        scrub: true,
        immediateRender: false,
      },
    })
      .to(knight.current?.rotation, {
        y: screen > 1000 ? 0.24 : -1.46,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: "#second_section",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
        },
      })
      .to(knight.current?.position, {
        x: screen > 1000 ? -1 : -6,
        y: screen > 1000 ? 0.5 : .5,
        z: screen > 1000 ? 12 : 14,
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
        y: screen > 1000 ? -1.2 : -1.05,
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
        x: screen > 1000 ? -10.155 : -10,
        y: screen > 1000 ? 0.3 : 0,
        z: screen > 1000 ? 17.2 : 17.2,
        ease: "power1.in",
        scrollTrigger: {
          trigger: "#four_section",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
        },
      })
      .to(knight.current?.rotation, {
        y: screen > 1000 ? -1.665 : -1.7,
        ease: "power1.in",
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
        x: screen > 1000 ? -13.67 : -13.67,
        y: screen > 1000 ? -0.7 : -0.7,
        z: screen > 1000 ? 22.9 : 19.5,
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
        y: screen > 1000 ? -1.175 : -1.175,
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
        x: screen > 1000 ? 4.955 : 3.565,
        y: screen > 1000 ? 1 : -6.5,
        z: screen > 1000 ? 12 : 3.6,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: "#games_section",
          start: "top bottom",
          end: screen > 1000 ? "top top" : "top top",
          scrub: true,
          immediateRender: false,
        },
      })
      .to(knight.current?.rotation, {
        y: screen > 1000 ? -1.03 : -0.1,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: "#games_section",
          start: "top bottom",
          end: screen > 1000 ? "top top" : "top top",
          scrub: true,
          immediateRender: false,
        },
      })
      .to(knight.current?.position, {
        x: screen > 1000 ? -1.3 : -5,
        y: screen > 1000 ? -0.3 : -2,
        z: screen > 1000 ? 23 : 14,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: "#contact_section",
          start: screen > 1000 ? "top bottom" : "100px bottom",
          end: screen > 1000 ? "top top" : "400px top",
          scrub: true,
          immediateRender: false,
        },
      })
      .to(knight.current?.rotation, {
        y: screen > 1000 ? -1.77 : -1,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: "#contact_section",
          start: screen > 1000 ? "top bottom" : "100px bottom",
          end: screen > 1000 ? "top top" : "400px top",
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
