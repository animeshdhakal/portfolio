import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Float } from '@react-three/drei';
import * as THREE from 'three';

// Add type definitions for React Three Fiber intrinsic elements
// Augmenting both global JSX and React.JSX to ensure compatibility across different TS/React configurations
declare global {
  namespace JSX {
    interface IntrinsicElements {
      group: any;
      mesh: any;
      icosahedronGeometry: any;
      meshStandardMaterial: any;
      ambientLight: any;
      directionalLight: any;
      points: any;
      pointMaterial: any;
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      group: any;
      mesh: any;
      icosahedronGeometry: any;
      meshStandardMaterial: any;
      ambientLight: any;
      directionalLight: any;
      points: any;
      pointMaterial: any;
    }
  }
}

const ParticleField = () => {
  const ref = useRef<THREE.Points>(null);
  
  const sphere = useMemo(() => {
    // Generate random points in a sphere-like distribution
    const count = 1500;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 15 + Math.random() * 10; // Radius between 15 and 25
      
      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);
      
      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
    }
    return positions;
  }, []);
  
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 30;
      ref.current.rotation.y -= delta / 40;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#3b82f6" 
          size={0.08}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.4}
        />
      </Points>
    </group>
  );
};

const GeometricShape = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.getElapsedTime();
    meshRef.current.rotation.x = time * 0.15;
    meshRef.current.rotation.y = time * 0.1;
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={meshRef} scale={[3, 3, 3]}>
        <icosahedronGeometry args={[1, 0]} />
        <meshStandardMaterial 
          color="#8b5cf6" 
          wireframe 
          transparent 
          opacity={0.08} 
          side={THREE.DoubleSide}
        />
      </mesh>
    </Float>
  );
};

const Background3D: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 8] }} gl={{ antialias: true, alpha: true }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <ParticleField />
        <GeometricShape />
      </Canvas>
      {/* Subtle overlay to blend particles with background color */}
      <div className="absolute inset-0 bg-darker/20 backdrop-blur-[0px]"></div>
    </div>
  );
};

export default Background3D;