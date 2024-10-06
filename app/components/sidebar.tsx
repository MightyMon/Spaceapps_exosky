  import React from "react";
  import { motion } from "framer-motion";
  import { FaTimes } from "react-icons/fa";

  export interface StarDetails {
    name: string;
    distance: number;
    mass: string;
    radius: string;
    atmosphere: string;
    habitability: string;
    discoveryYear: number;
  }

  interface Sidebar {
    starDetails: StarDetails | null;
    onClose: () => void;
  }

  const Sidebar = ({ starDetails, onClose }: Sidebar) => {
    return (  
      <motion.div
        className="fixed top-0 right-0 h-full bg-gray-800 text-white shadow-lg p-4 overflow-auto"
        initial={{ opacity: 0, x: 300 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 300 }}
      >
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold">Star Details</h2>
          <motion.button
            onClick={onClose}
            className="text-2xl p-2"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaTimes />
          </motion.button>
        </div>
        {starDetails ? (
          <div className="mt-4">
            <p>
              <strong>Name:</strong> {starDetails.name}
            </p>
            <p>
              <strong>Distance from Earth:</strong> {starDetails.distance} ly
            </p>
            <p>
              <strong>Mass:</strong> {starDetails.mass}
            </p>
            <p>
              <strong>Radius:</strong> {starDetails.radius}
            </p>
            <p>
              <strong>Atmosphere:</strong> {starDetails.atmosphere}
            </p>
            <p>
              <strong>Habitability:</strong> {starDetails.habitability}
            </p>
            <p>
              <strong>Discovery Year:</strong> {starDetails.discoveryYear}
            </p>
          </div>
        ) : (
          <p>Select a star to see details.</p>
        )}
      </motion.div>
    );
  };

  export default Sidebar;
