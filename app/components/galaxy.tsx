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
  texture: string; // Add texture field for each planet
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
  texture: string; // Add texture field for the star
}

interface GalaxyVisualizationProps {
  starData: StarData[];
}

const Star = ({
  position,
  planetData,
  texture,
  onClick,
  onPlanetClick,
}: {
  position: [number, number, number];
  planetData: PlanetData[];
  texture: string; // Pass texture for the star
  onClick: () => void;
  onPlanetClick: (planet: PlanetData) => void;
}) => {
  // Load texture for the star
  const starTexture = useLoader(TextureLoader, texture);

  // Function to determine planet's position based on its distance from the star
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
      {/* Render the star with texture */}
      <mesh position={position} onClick={onClick}>
        <sphereGeometry args={[0.1, 24, 24]} />
        <meshBasicMaterial map={starTexture} /> {/* Apply the loaded texture */}
      </mesh>

      {/* Render the planets around the star */}
      {planetData.map((planet, index) => {
        const planetTexture = useLoader(TextureLoader, planet.texture); // Load texture dynamically for each planet

        return (
          <mesh
            key={index}
            position={getPlanetPosition(planet.distanceFromStarAU, index)}
            onClick={() => onPlanetClick(planet)}
          >
            <sphereGeometry args={[0.05, 24, 24]} />
            <meshBasicMaterial map={planetTexture} /> {/* Apply the loaded texture */}
          </mesh>
        );
      })}
    </>
  );
};

const GalaxyVisualization = ({ starData }: GalaxyVisualizationProps) => {
  const [selectedStar, setSelectedStar] = useState<StarDetails | null>(null);
  const [selectedPlanet, setSelectedPlanet] = useState<PlanetData | null>(null);

  const handleStarClick = (star: StarDetails) => {
    setSelectedStar(star);
    setSelectedPlanet(null); // Clear planet selection
  };

  const handlePlanetClick = (planet: PlanetData) => {
    setSelectedPlanet(planet);
    setSelectedStar(null); // Clear star selection
  };

  const handleCloseSidebar = () => {
    setSelectedStar(null);
    setSelectedPlanet(null);
  };

  return (
    <>
      <Canvas camera={{ position: [0, 0, 20], fov: 75 }} style={{ background: "black" }}>
        <OrbitControls enableZoom={true} enableRotate={true} enablePan={true} />
        <Stars radius={300} depth={50} count={5000} factor={4} saturation={0} fade={true} />
        
        {/* Render all stars with their planets */}
        {starData.map((star, index) => (
          <Star
            key={index}
            position={star.starPosition}
            planetData={star.planetData}
            texture={star.texture} // Pass the star texture
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
            onPlanetClick={handlePlanetClick}
          />
        ))}
        
        <ambientLight intensity={0.5} />
      </Canvas>

      {/* Display sidebar for the selected star */}
      {selectedStar && <Sidebar starDetails={selectedStar} onClose={handleCloseSidebar} />}
      
      {/* Display sidebar for the selected planet */}
      {selectedPlanet && (
        <Sidebar
          starDetails={{
            name: selectedPlanet.name,
            distance: selectedPlanet.distanceFromStarAU,
            mass: selectedPlanet.mass,
            radius: selectedPlanet.radius,
            atmosphere: selectedPlanet.atmosphere,
            habitability: selectedPlanet.habitability,
            discoveryYear: selectedPlanet.discoveryYear,
          }}
          onClose={handleCloseSidebar}
        />
      )}
    </>
  );
};

export default GalaxyVisualization;
