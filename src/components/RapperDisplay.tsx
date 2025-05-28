import React from 'react';
import { motion } from 'framer-motion';
import { Rapper } from '../data/rapBattleData';

interface RapperDisplayProps {
  rapper: Rapper;
  isActive: boolean;
  side: 'left' | 'right';
}

const RapperDisplay: React.FC<RapperDisplayProps> = ({ rapper, isActive, side }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: side === 'left' ? -50 : 50 }}
      animate={{ 
        opacity: 1, 
        x: 0,
        scale: isActive ? 1.05 : 1,
      }}
      transition={{ 
        duration: 0.5,
        scale: { duration: 0.3 }
      }}
      className={`w-full max-w-xs flex flex-col items-center ${isActive ? 'z-10' : 'z-0 opacity-80'}`}
    >
      {/* Name banner */}
      <motion.div
        animate={{
          boxShadow: isActive 
            ? [
                '0 0 5px rgba(138, 43, 226, 0.5)',
                '0 0 15px rgba(138, 43, 226, 0.8)',
                '0 0 5px rgba(138, 43, 226, 0.5)'
              ]
            : '0 0 0px rgba(138, 43, 226, 0)'
        }}
        transition={{ 
          duration: 1.5, 
          repeat: isActive ? Infinity : 0,
          repeatType: 'reverse'
        }}
        className={`bg-battle-darker border-2 ${isActive ? (side === 'left' ? 'border-neon-pink' : 'border-neon-blue') : 'border-neutral-700'} rounded-t-lg py-2 px-6 mb-0 w-full text-center`}
      >
        <h2 className={`font-battle text-xl ${isActive ? (side === 'left' ? 'text-neon-pink' : 'text-neon-blue') : 'text-white'}`}>
          {rapper.name}
        </h2>
      </motion.div>
      
      {/* Rapper image */}
      <div className={`w-full h-64 border-x-2 border-b-2 rounded-b-lg overflow-hidden ${isActive ? (side === 'left' ? 'border-neon-pink' : 'border-neon-blue') : 'border-neutral-700'}`}>
        <motion.div 
          className="w-full h-full bg-battle-darker relative"
          animate={isActive ? {
            y: [0, -10, 0]
          } : {}}
          transition={isActive ? {
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse"
          } : {}}
        >
          <img 
            src={rapper.image} 
            alt={rapper.name} 
            className="w-full h-full object-cover opacity-80"
          />
          
          {/* Neon overlay effect when active */}
          {isActive && (
            <motion.div 
              className={`absolute inset-0 ${side === 'left' ? 'bg-neon-pink' : 'bg-neon-blue'} mix-blend-overlay opacity-30`}
              animate={{ opacity: [0.1, 0.3, 0.1] }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default RapperDisplay;