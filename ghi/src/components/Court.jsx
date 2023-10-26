/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.14 public/court.glb 
*/

import React, { Suspense, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "./CanvasLoader";

export function Court(props) {
  const { nodes, materials } = useGLTF("/court.glb");
  const group = useRef();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        group.current.scale.set(0.5, 0.5, 0.5);
      } else {
        group.current.scale.set(1, 1, 1);
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
          <mesh>
            <hemisphereLight intensity={0.6} groundColor="black" />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
            {/* <pointLight intensity={1} /> */}
            <spotLight
              position={[0, 50, 0]} // change position to [0, 50, 0], [-20, 50, 10]
              angle={0.12}
              penumbra={1}
              intensity={1}
              castShadow
              shadow-mapSize={1024}
            />
            <mesh
              geometry={nodes.Plane.geometry}
              material={materials["Court Painted Final.002"]}
              position={[0, -0.006, 0.048]}
              scale={[2.248, 1.046, 1.046]}
            />
            <mesh
              geometry={nodes.Plane002.geometry}
              material={materials["Court Painted Final"]}
              position={[0, -0.006, 1.107]}
              scale={[0.919, 0.417, 0.417]}
            />
            <mesh
              geometry={nodes.Plane001.geometry}
              material={materials["Court Painted Final.004"]}
              position={[0, -0.007, 0.048]}
              scale={[3.195, 1.487, 1.795]}
            />
            <mesh
              geometry={nodes.Plane003.geometry}
              material={materials["Court Painted Final"]}
              position={[0, -0.006, 1.107]}
              scale={[0.919, 0.417, 0.417]}
            />
            <mesh
              geometry={nodes.Plane011.geometry}
              material={materials["Material.001"]}
              position={[0.129, -0.017, -0.168]}
              scale={12.926}
            />
            <mesh
              geometry={nodes.Cylinder.geometry}
              material={materials.Pole}
              position={[0, 0.226, 1.319]}
              scale={[0.035, 0.255, 0.035]}
            />
            <mesh
              geometry={nodes.Plane004.geometry}
              material={materials["Material.004"]}
              position={[0, 0.44, 0.057]}
              rotation={[0, 0, -Math.PI / 2]}
              scale={0.011}
            />
            <mesh
              geometry={nodes.Plane005.geometry}
              material={materials["Material.002"]}
              position={[0.007, 0.452, 0.95]}
              rotation={[0, 0, -Math.PI / 2]}
              scale={[0.015, 0.613, 0.26]}
            />
            <mesh
              geometry={nodes.Plane006.geometry}
              material={materials["Material.006"]}
              position={[0.002, 0.054, -1.133]}
              rotation={[Math.PI / 2, 0, -Math.PI / 2]}
              scale={[0.015, 0.26, 0.047]}
            />
            <mesh
              geometry={nodes.Plane007.geometry}
              material={materials["Material.006"]}
              position={[0.005, 0.023, -0.809]}
              rotation={[-Math.PI, 0, -Math.PI / 2]}
              scale={[0.015, 0.512, 0.242]}
            />
            <mesh
              geometry={nodes.NurbsPath.geometry}
              material={materials["Material.005"]}
              position={[-0.001, 0.395, 1.271]}
              rotation={[-Math.PI / 2, -0.216, -Math.PI / 2]}
              scale={-0.007}
            />
            <mesh
              geometry={nodes.NurbsPath001.geometry}
              material={materials["Material.005"]}
              position={[-0.001, 0.015, 1.271]}
              rotation={[-Math.PI / 2, -0.065, -Math.PI / 2]}
              scale={-0.007}
            />
            <mesh
              geometry={nodes.NurbsPath002.geometry}
              material={materials["Material.004"]}
              position={[0, 0.272, 1.256]}
              rotation={[0, 0, -Math.PI / 2]}
              scale={0.065}
            />
            <mesh
              geometry={nodes.Cylinder001.geometry}
              material={materials["Material.007"]}
              position={[0, 0.458, 0.048]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[0.005, 1.272, 0.005]}
            />
            <mesh
              geometry={nodes.NurbsPath003.geometry}
              material={materials["Material.004"]}
              position={[-0.001, 0.015, 1.271]}
              rotation={[Math.PI / 2, Math.PI / 2, 0]}
              scale={0.102}
            />
          </mesh>
        </group>
      </Suspense>
      <Preload all />
    </Canvas>
  );
}

export default Court;

useGLTF.preload("/court.glb");
