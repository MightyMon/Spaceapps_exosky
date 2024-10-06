"use client";

import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import Sidebar, { StarDetails } from "./sidebar";
import { TextureLoader } from "three";
import { useLoader } from "@react-three/fiber";

interface PlanetData {
  name: string;
  distanceFromStarAU: number;
  mass: string;
  radius: string;
  atmosphere: string;
  habitability: string;
  discoveryYear: number;
}

interface StarData {
  starPosition: [number, number, number];
  planetData: PlanetData[];
  name: string;
  distance: number;
  mass: string;
  radius: string;
  atmosphere: string;
  habitability: string;
  discoveryYear: number;
}

interface GalaxyVisualizationProps {
  starData: StarData[];
}

const Star = ({
  position,
  planetData,
  onClick,
}: {
  position: [number, number, number];
  planetData: PlanetData[];
  onClick: () => void;
}) => {
  // Load the texture for the planets
  const planetTexture = useLoader(TextureLoader, '/gliese_1061_c.png');

  const getPlanetPosition = (distanceFromStarAU: number, index: number): [number, number, number] => {
    const angle = (index / planetData.length) * 2 * Math.PI; // Spread planets in a circular orbit
    const distanceScale = 5; // Scale factor to fit the planet's orbit within the scene
    return [
      position[0] + Math.cos(angle) * distanceFromStarAU * distanceScale,
      position[1],
      position[2] + Math.sin(angle) * distanceFromStarAU * distanceScale,
    ] as [number, number, number]; // Ensure it is cast to a tuple
  };

  return (
    <>
      <mesh position={position} onClick={onClick}>
        <sphereGeometry args={[0.1, 24, 24]} />
        <meshBasicMaterial color="#FFD700" />
      </mesh>
      {planetData.map((planet, index) => (
        <mesh key={index} position={getPlanetPosition(planet.distanceFromStarAU, index)}>
          <sphereGeometry args={[0.05, 24, 24]} /> {/* Each planet */}
          <meshBasicMaterial map={planetTexture} /> {/* Use the loaded texture */}
        </mesh>
      ))}
    </>
  );
};

const GalaxyVisualization = ({ starData }: GalaxyVisualizationProps) => {
  const [selectedStar, setSelectedStar] = useState<StarDetails | null>(null);

  const handleStarClick = (star: StarDetails) => {
    setSelectedStar(star);
  };

  const handleCloseSidebar = () => {
    setSelectedStar(null);
  };

  return (
    <>
      <Canvas                                 
        camera={{ position: [0, 0, 20], fov: 75 }}
        style={{ background: "black" }}
      >
        <OrbitControls enableZoom={true} enableRotate={true} enablePan={true} />
        <Stars
          radius={300}
          depth={50}
          count={5000}
          factor={4}
          saturation={0}
          fade={true}
        />
        {starData.map((star, index) => (
          <Star
            key={index}
            position={star.starPosition}
            planetData={star.planetData} // Pass planetData to Star
            onClick={() =>
              handleStarClick({
                name: star.name,
                distance: star.distance,
                mass: star.mass,
                radius: star.radius,
                atmosphere: star.atmosphere,
                habitability: star.habitability,
                discoveryYear: star.discoveryYear,
              })
            }
          />
        ))}
        <ambientLight intensity={0.5} />
      </Canvas>
      {selectedStar && (
        <Sidebar starDetails={selectedStar} onClose={handleCloseSidebar} />
      )}
    </>
  );
};  

export default GalaxyVisualization;
