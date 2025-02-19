import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const Planet = ({ size, color }) => {
  const planetRef = useRef();
  const cloudsRef = useRef();
  const miniPlanetRef = useRef();

  const miniPlanetOrbitRadius = size + 0.5;
  const miniPlanetSpeed = useMemo(() => Math.random() * 1.0 + 0.7, []); // Erhöhte zufällige Geschwindigkeit


  // Rotation des Planeten und der Wolken
  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    if (planetRef.current) {
      planetRef.current.rotation.y += 0.01;
    }
    if (cloudsRef.current) {
      cloudsRef.current.rotation.y += 0.005;
    }
    if (miniPlanetRef.current) {
      miniPlanetRef.current.position.x = miniPlanetOrbitRadius * Math.cos(elapsedTime * miniPlanetSpeed);
      miniPlanetRef.current.position.z = miniPlanetOrbitRadius * Math.sin(elapsedTime * miniPlanetSpeed);
    }
  });

  
  const cloudsGeometry = new THREE.SphereGeometry(size + 0.05, 32, 32);
  const cloudVertices = cloudsGeometry.attributes.position.array;
  for (let i = 0; i < cloudVertices.length; i += 3) {
    if (Math.random() > 0.7) { 
      cloudVertices[i] = 0;
      cloudVertices[i + 1] = 0;
      cloudVertices[i + 2] = 0;
    }
  }
  cloudsGeometry.attributes.position.needsUpdate = true;

  return (
    <>
      <mesh ref={planetRef}>
        <sphereGeometry args={[size, 32, 32]} />
        <meshStandardMaterial color={color} />
      </mesh>
      <mesh ref={cloudsRef} geometry={cloudsGeometry}>
        <meshStandardMaterial color="gray" transparent={true} opacity={0.5} />
      </mesh>
      <mesh ref={miniPlanetRef} position={[miniPlanetOrbitRadius, 0, 0]}>
        <sphereGeometry args={[size * 0.2, 32, 32]} />
        <meshStandardMaterial color="blue" />
      </mesh>
    </>
  );
};

const PlanetCanvas = ({ size, color }) => {
  return (
    <Canvas style={{ width: '150px', height: '150px' }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} />
      <Planet size={size} color={color} />
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default PlanetCanvas;