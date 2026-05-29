import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment, Points, PointMaterial, Edges } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function CardboardBox() {
  const ref = useRef<THREE.Group>(null!);
  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.35;
    ref.current.rotation.x += delta * 0.12;
  });

  return (
    <Float speed={1.1} rotationIntensity={0.5} floatIntensity={1.0}>
      <group ref={ref}>
        {/* Main box body */}
        <mesh>
          <boxGeometry args={[2, 1.7, 1.6]} />
          <meshStandardMaterial color="#c8895a" roughness={0.85} metalness={0.05} emissive="#8a4a1c" emissiveIntensity={0.08} />
          <Edges threshold={15} color="#5a2f12" />
        </mesh>

        {/* Top flaps with center seam */}
        <mesh position={[-0.5, 0.86, 0]} rotation={[0, 0, 0.02]}>
          <boxGeometry args={[0.98, 0.03, 1.58]} />
          <meshStandardMaterial color="#b87a4e" roughness={0.9} />
          <Edges threshold={15} color="#5a2f12" />
        </mesh>
        <mesh position={[0.5, 0.86, 0]} rotation={[0, 0, -0.02]}>
          <boxGeometry args={[0.98, 0.03, 1.58]} />
          <meshStandardMaterial color="#b87a4e" roughness={0.9} />
          <Edges threshold={15} color="#5a2f12" />
        </mesh>

        {/* Packing tape across the seam */}
        <mesh position={[0, 0.89, 0]}>
          <boxGeometry args={[2.02, 0.015, 0.38]} />
          <meshStandardMaterial color="#e8d9a8" roughness={0.3} metalness={0.15} transparent opacity={0.85} />
        </mesh>

        {/* Front shipping label */}
        <mesh position={[0, 0.05, 0.811]}>
          <planeGeometry args={[0.95, 0.6]} />
          <meshStandardMaterial color="#f5efe2" roughness={0.7} />
        </mesh>

        {/* Orange brand stripe */}
        <mesh position={[0, 0.28, 0.813]}>
          <planeGeometry args={[0.95, 0.12]} />
          <meshStandardMaterial color="#F97316" emissive="#F97316" emissiveIntensity={0.5} roughness={0.4} />
        </mesh>

        {/* Barcode bars */}
        {[-0.32, -0.24, -0.18, -0.08, 0.02, 0.12, 0.22, 0.3].map((x, i) => (
          <mesh key={i} position={[x, -0.1, 0.814]}>
            <planeGeometry args={[i % 2 === 0 ? 0.02 : 0.012, 0.22]} />
            <meshStandardMaterial color="#1a1a1a" />
          </mesh>
        ))}

        {/* Fragile stamp */}
        <mesh position={[0.55, -0.55, 0.811]} rotation={[0, 0, -0.15]}>
          <planeGeometry args={[0.5, 0.14]} />
          <meshStandardMaterial color="#F97316" emissive="#F97316" emissiveIntensity={0.3} transparent opacity={0.75} />
        </mesh>
      </group>
    </Float>
  );
}

function OrbitingRings() {
  const g = useRef<THREE.Group>(null!);
  useFrame((_, delta) => {
    if (g.current) {
      g.current.rotation.x += delta * 0.12;
      g.current.rotation.z += delta * 0.06;
    }
  });
  return (
    <group ref={g}>
      {[2.2, 2.7, 3.2].map((r, i) => (
        <mesh key={i} rotation={[Math.PI / 2 + i * 0.4, i * 0.3, 0]}>
          <torusGeometry args={[r, 0.012, 16, 128]} />
          <meshStandardMaterial
            color={i === 1 ? "#FB923C" : "#F97316"}
            emissive="#F97316"
            emissiveIntensity={0.8}
            transparent
            opacity={0.55}
          />
        </mesh>
      ))}
    </group>
  );
}

function Particles() {
  const positions = useMemo(() => {
    const arr = new Float32Array(1200 * 3);
    for (let i = 0; i < 1200; i++) {
      const r = 4 + Math.random() * 4;
      const t = Math.random() * Math.PI * 2;
      const p = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = r * Math.sin(p) * Math.cos(t);
      arr[i * 3 + 1] = r * Math.sin(p) * Math.sin(t);
      arr[i * 3 + 2] = r * Math.cos(p);
    }
    return arr;
  }, []);
  const ref = useRef<THREE.Points>(null!);
  useFrame((_, d) => {
    if (ref.current) ref.current.rotation.y += d * 0.03;
  });
  return (
    <Points ref={ref} positions={positions} stride={3}>
      <PointMaterial transparent color="#FB923C" size={0.018} sizeAttenuation depthWrite={false} />
    </Points>
  );
}

export function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 45 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} color="#FB923C" />
      <pointLight position={[-4, -2, -3]} intensity={2} color="#F97316" />
      <pointLight position={[3, 3, 2]} intensity={1} color="#ffffff" />
      <CardboardBox />
      <OrbitingRings />
      <Particles />
      <Environment preset="warehouse" />
    </Canvas>
  );
}
