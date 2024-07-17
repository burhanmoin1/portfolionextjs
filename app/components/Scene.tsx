'use client';
// src/components/Scene.js
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";
import IcosahedronShape from "./IcosahedronShape";

const Scene = () => {
  return (
    <div style={{ height: "200vh" }}> {/* Ensure enough height for scrolling */}
      <Canvas
        shadows
        camera={{ position: [0, 0, 5], fov: 50 }}
        style={{ height: "100vh" }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight
          position={[10, 10, 5]}
          intensity={1.5}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        <Suspense fallback={null}>
          <IcosahedronShape position={[-2, 0, 0]} color="red" />
          <IcosahedronShape position={[2, 0, 0]} color="blue" />
          <OrbitControls minDistance={0} maxDistance={4} />
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Scene;

