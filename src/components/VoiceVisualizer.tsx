import React from 'react';
import { motion } from 'framer-motion';

interface VoiceVisualizerProps {
  isActive: boolean;
}

const VoiceVisualizer: React.FC<VoiceVisualizerProps> = ({ isActive }) => {
  // Generate random heights for the bars
  const getRandomHeight = () => Math.random() * 0.7 + 0.3; // between 0.3 and 1.0
  
  // Create an array of random heights
  const barHeights = Array.from({ length: 12 }, () => getRandomHeight());

  return (
    <div className="flex justify-center items-end h-12">
      {isActive ? (
        barHeights.map((height, index) => (
          <motion.div
            key={index}
            className="voice-bar"
            animate={{
              scaleY: [0.2, height, 0.2],
            }}
            transition={{
              duration: 0.5 + (index % 3) * 0.2, // Stagger the animations slightly
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))
      ) : (
        // Static small bars when inactive
        Array.from({ length: 12 }).map((_, index) => (
          <div
            key={index}
            className="voice-bar"
            style={{ transform: 'scaleY(0.2)' }}
          />
        ))
      )}
    </div>
  );
};

export default VoiceVisualizer;