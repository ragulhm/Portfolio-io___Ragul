"use client";

import { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.15;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.2;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.4} floatIntensity={1.5}>
      <mesh ref={meshRef} scale={2.2}>
        <torusKnotGeometry args={[1, 0.35, 128, 32, 2, 3]} />
        <MeshDistortMaterial
          color="#7B2CBF"
          distort={0.25}
          speed={1.5}
          roughness={0.2}
          metalness={0.9}
          emissive="#4a1080"
          emissiveIntensity={0.3}
        />
      </mesh>
    </Float>
  );
}

function GlowOrb() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      const t = state.clock.getElapsedTime();
      meshRef.current.scale.setScalar(1 + Math.sin(t * 0.8) * 0.1);
    }
  });

  return (
    <mesh ref={meshRef} scale={3.5}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshBasicMaterial color="#7B2CBF" transparent opacity={0.04} />
    </mesh>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[10, 10, 5]} intensity={0.8} color="#ffffff" />
      <pointLight position={[-5, -5, -5]} intensity={0.4} color="#E0AAFF" />
      <pointLight position={[5, 5, 10]} intensity={0.3} color="#9D4EDD" />
      <AnimatedSphere />
      <GlowOrb />
    </>
  );
}

export default function Globe3D({ className }: { className?: string }) {
  return (
    <div className={`w-full h-full ${className ?? ""}`}>
      <Suspense fallback={<GlobeFallback />}>
        <Canvas
          camera={{ position: [0, 0, 6], fov: 60 }}
          dpr={[1, 1.5]}
          style={{ background: "transparent" }}
        >
          <Scene />
        </Canvas>
      </Suspense>
    </div>
  );
}

function GlobeFallback() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-48 h-48 rounded-full bg-purple-500/10 animate-glow-pulse blur-xl" />
    </div>
  );
}
