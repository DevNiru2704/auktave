"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";

function Roots() {
  const group = useRef();
  const lines = useMemo(() => {
    const arr = [];
    for (let i = 0; i < 28; i++) {
      const points = [];
      let x = (Math.random() - 0.5) * 14;
      let y = (Math.random() - 0.5) * 8;
      let z = (Math.random() - 0.5) * 6 - 2;
      for (let j = 0; j < 30; j++) {
        x += (Math.random() - 0.5) * 0.7;
        y += (Math.random() - 0.5) * 0.7;
        z += (Math.random() - 0.5) * 0.3;
        points.push(new THREE.Vector3(x, y, z));
      }
      const curve = new THREE.CatmullRomCurve3(points);
      const geom = new THREE.TubeGeometry(curve, 80, 0.025 + Math.random() * 0.02, 8, false);
      arr.push(geom);
    }
    return arr;
  }, []);

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.05) * 0.08;
      group.current.rotation.x = Math.cos(state.clock.elapsedTime * 0.04) * 0.04;
    }
  });

  return (
    <group ref={group}>
      {lines.map((g, i) => (
        <mesh key={i} geometry={g}>
          <meshStandardMaterial
            color={i % 5 === 0 ? "#ff1f3d" : "#1a0008"}
            roughness={0.25}
            metalness={0.6}
            emissive={i % 5 === 0 ? "#ff1f3d" : "#000000"}
            emissiveIntensity={i % 5 === 0 ? 0.5 : 0}
          />
        </mesh>
      ))}
    </group>
  );
}

function Particles() {
  const ref = useRef();
  const geom = useMemo(() => {
    const g = new THREE.BufferGeometry();
    const positions = new Float32Array(400 * 3);
    for (let i = 0; i < 400; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 12;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 8;
    }
    g.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return g;
  }, []);
  useFrame((state) => {
    if (ref.current) ref.current.rotation.y = state.clock.elapsedTime * 0.02;
  });
  return (
    <points ref={ref} geometry={geom}>
      <pointsMaterial size={0.03} color="#ff3355" transparent opacity={0.7} />
    </points>
  );
}

export default function UpsideDownBackground() {
  return (
    <div className="absolute inset-0 -z-10" data-testid="upside-down-bg">
      <div className="fog" />
      <Canvas
        camera={{ position: [0, 0, 6], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: "low-power" }}
      >
        <ambientLight intensity={0.2} />
        <pointLight position={[5, 5, 5]} intensity={2} color="#ff1f3d" />
        <pointLight position={[-5, -3, 2]} intensity={1.2} color="#ffe600" />
        <Roots />
        <Particles />
        <fog attach="fog" args={["#050505", 4, 14]} />
      </Canvas>
    </div>
  );
}
