'use client';
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Float } from "@react-three/drei";
import { Vector3 } from "three"; // Import Vector3 from Three.js

gsap.registerPlugin(ScrollTrigger);

interface IcosahedronShapeProps {
  position: [number, number, number]; // Adjust type to match [x, y, z]
  color: string;
}

const IcosahedronShape = (props: IcosahedronShapeProps) => {
  const meshRef = useRef<Mesh>(null);

  useEffect(() => {
    if (meshRef.current) {
      gsap.to(meshRef.current.position, {
        y: 2, // Example animation property (change as needed)
        duration: 1,
        ease: "power2.inOut",
      });
    }
  }, []);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} castShadow receiveShadow position={new Vector3(...props.position)}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial color={props.color} flatShading />
      </mesh>
    </Float>
  );
};

export default IcosahedronShape;




