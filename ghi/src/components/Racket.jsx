/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.14 public/racket.glb
*/

import React, { Suspense, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "./CanvasLoader";

export function Racket(props) {
  const { nodes, materials } = useGLTF(
    `${process.env.REACT_APP_API_HOST}/static/racket.glb`
  );
  const group = useRef();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        if (group.current) {
          group.current.scale.set(0.5, 0.5, 0.5);
        }
      } else {
        if (group.current) {
          group.current.scale.set(1, 1, 1);
        }
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [group]);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <ambientLight intensity={0.5} />

        <group {...props} dispose={null}>
          <group
            position={[0.5, -1.9, 0]}
            rotation={[Math.PI / 2, 0.2, 1.6]}
            scale={0.008}
          >
            <mesh>
              <hemisphereLight intensity={0.6} groundColor="black" />
              <pointLight intensity={1} />
              <spotLight
                position={[-20, 50, 10]}
                angle={0.12}
                penumbra={1}
                intensity={1}
                castShadow
                shadow-mapSize={1024}
              />
              <mesh
                geometry={nodes.handle.geometry}
                material={materials.handle}
                position={[-0.075, 14.68, 0]}
              />
              <mesh
                geometry={nodes.tape.geometry}
                material={materials["handle twist rubban"]}
                position={[-89.756, 9.414, -149.925]}
              />
              <mesh
                geometry={nodes.Twist_rubban.geometry}
                material={materials["handle twist rubban_1"]}
                position={[-0.078, -0.258, 36.719]}
              />
              <mesh
                geometry={nodes.wood_racket.geometry}
                material={materials.racket}
                position={[-74.444, 9.414, -440.851]}
              />
            </mesh>
          </group>
        </group>
      </Suspense>
      <Preload all />
    </Canvas>
  );
}

export default Racket;

useGLTF.preload(`${process.env.REACT_APP_API_HOST}/static/racket.glb`);
