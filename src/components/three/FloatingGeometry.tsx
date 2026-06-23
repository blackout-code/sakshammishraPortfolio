"use client";
import { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function GeodesicGlobe({ mouse }: { mouse: React.MutableRefObject<{ x: number; y: number }> }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);

  useEffect(() => {
    if (!meshRef.current) return;
    meshRef.current.userData.rotX = Math.random() * Math.PI * 2;
    meshRef.current.userData.rotY = Math.random() * Math.PI * 2;
  }, []);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    const t = clock.getElapsedTime();
    const rx = meshRef.current.userData.rotX || 0;
    const ry = meshRef.current.userData.rotY || 0;
    meshRef.current.rotation.x = rx + t * 0.06 + mouse.current.y * 0.05;
    meshRef.current.rotation.y = ry + t * 0.1 + mouse.current.x * 0.08;
    meshRef.current.position.y = Math.sin(t * 0.3) * 0.2;

    if (glowRef.current) {
      glowRef.current.rotation.copy(meshRef.current.rotation);
      glowRef.current.position.y = meshRef.current.position.y;
    }
  });

  return (
    <group>
      <mesh ref={glowRef} scale={1.65}>
        <icosahedronGeometry args={[1, 1]} />
        <meshBasicMaterial color="#6366f1" transparent opacity={0.04} />
      </mesh>
      <mesh ref={meshRef} scale={1.2}>
        <icosahedronGeometry args={[1, 1]} />
        <meshBasicMaterial color="#6366f1" wireframe transparent opacity={0.5} />
      </mesh>
    </group>
  );
}

function OrbitingRings() {
  const outerRingRef = useRef<THREE.Mesh>(null);
  const innerRingRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (outerRingRef.current) {
      outerRingRef.current.rotation.x = Math.sin(t * 0.2) * 0.4;
      outerRingRef.current.rotation.z += 0.002;
    }
    if (innerRingRef.current) {
      innerRingRef.current.rotation.x = Math.sin(t * 0.25 + 1) * 0.35;
      innerRingRef.current.rotation.z -= 0.003;
    }
  });

  return (
    <group>
      <mesh ref={outerRingRef} rotation={[Math.PI / 3, 0, 0]}>
        <ringGeometry args={[1.9, 2.3, 32]} />
        <meshBasicMaterial color="#6366f1" transparent opacity={0.06} side={THREE.DoubleSide} />
      </mesh>
      <mesh ref={innerRingRef} rotation={[Math.PI / 4, Math.PI / 3, 0]}>
        <ringGeometry args={[1.5, 1.7, 24]} />
        <meshBasicMaterial color="#06b6d4" transparent opacity={0.04} side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
}

function LightRays() {
  const ref = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (ref.current) ref.current.rotation.z = clock.getElapsedTime() * 0.015;
  });

  const rays = Array.from({ length: 8 }, (_, i) => {
    const angle = (i / 8) * Math.PI * 2;
    return {
      x: Math.cos(angle) * 2.8,
      y: Math.sin(angle) * 2.8,
      angle,
    };
  });

  return (
    <group ref={ref}>
      {rays.map((r, i) => (
        <mesh key={i} position={[r.x, r.y, 0]} rotation={[0, 0, r.angle]}>
          <planeGeometry args={[0.01, 3.2]} />
          <meshBasicMaterial color="#6366f1" transparent opacity={0.025} depthWrite={false} />
        </mesh>
      ))}
    </group>
  );
}

export function HeroScene() {
  const mouseRef = useRef({ x: 0, y: 0 });
  const frameRef = useRef(0);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const handleMouseMove = (e: MouseEvent) => {
      frameRef.current++;
      if (frameRef.current % 2 !== 0) return;
      mouseRef.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseRef.current.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }} dpr={[1, 1.5]} gl={{ antialias: false }}>
        <directionalLight position={[5, 5, 5]} intensity={0.8} />
        <directionalLight position={[-5, -5, -5]} intensity={0.3} color="#6366f1" />
        <GeodesicGlobe mouse={mouseRef} />
        <OrbitingRings />
        <LightRays />
      </Canvas>
    </div>
  );
}

export function SceneSkeleton({ children, className = "" }: { children?: React.ReactNode; className?: string }) {
  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`} style={{ zIndex: 0 }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }} dpr={[1, 1.5]} gl={{ antialias: false }}>
        <directionalLight position={[5, 5, 5]} intensity={0.6} />
        <directionalLight position={[-5, -5, -5]} intensity={0.2} color="#6366f1" />
        {children}
      </Canvas>
    </div>
  );
}