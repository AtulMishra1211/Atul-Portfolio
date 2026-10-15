"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

function Knot() {
  const solid = useRef<THREE.Mesh>(null);
  const wire = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    const { x, y } = state.pointer;
    for (const m of [solid.current, wire.current]) {
      if (!m) continue;
      m.rotation.x += delta * 0.12;
      m.rotation.y = THREE.MathUtils.damp(m.rotation.y, x * 0.8 + state.clock.elapsedTime * 0.1, 2, delta);
      m.position.y = THREE.MathUtils.damp(m.position.y, y * 0.3, 2, delta);
    }
  });

  return (
    <>
      <mesh ref={solid}>
        <torusKnotGeometry args={[1.6, 0.42, 220, 32, 2, 3]} />
        <meshPhysicalMaterial
          color="#0b0e26"
          emissive="#a78bfa"
          emissiveIntensity={0.12}
          metalness={0.7}
          roughness={0.18}
          iridescence={1}
          clearcoat={1}
        />
      </mesh>
      <mesh ref={wire} scale={1.06}>
        <torusKnotGeometry args={[1.6, 0.42, 110, 12, 2, 3]} />
        <meshBasicMaterial color="#22d3ee" wireframe transparent opacity={0.18} />
      </mesh>
    </>
  );
}

export default function KnotScene() {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 7], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
      eventSource={typeof document !== "undefined" ? document.body : undefined}
      eventPrefix="client"
    >
      <ambientLight intensity={0.3} />
      <pointLight position={[4, 3, 4]} intensity={50} color="#22d3ee" />
      <pointLight position={[-4, -2, 3]} intensity={45} color="#f472b6" />
      <Knot />
    </Canvas>
  );
}
