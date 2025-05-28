import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { themes } from '../data/rapBattleData';
import { useRapBattle } from '../context/RapBattleContext';

const ThemeSelection: React.FC = () => {
  const navigate = useNavigate();
  const { rapperA, rapperB, setSelectedTheme } = useRapBattle();
  const [themeId, setThemeId] = useState<string | null>(null);

  // Redirect if rappers aren't selected
  React.useEffect(() => {
    if (!rapperA || !rapperB) {
      navigate('/select-rappers');
    }
  }, [rapperA, rapperB, navigate]);

  const handleContinue = () => {
    if (themeId) {
      const themeData = themes.find(t => t.id === themeId);
      if (themeData) {
        setSelectedTheme(themeData);
        navigate('/battle');
      }
    }
  };

  return (
    <div className="min-h-screen bg-battle-dark battle-grid flex flex-col px-4 md:px-10 py-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center mb-8"
      >
        <button 
          onClick={() => navigate('/select-rappers')} 
          className="flex items-center text-neon-blue hover:text-neon-purple transition-colors"
        >
          <ChevronLeft size={20} />
          <span>Back to Rapper Selection</span>
        </button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center mb-10"
      >
        <h1 className="text-3xl md:text-5xl font-battle text-white mb-4 animate-neon-pulse">
          Choose Battle Theme
        </h1>
        <p className="text-lg text-neon-green max-w-2xl mx-auto">
          What will {rapperA?.name} and {rapperB?.name} battle about?
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 max-w-5xl mx-auto"
      >
        {themes.map((theme, index) => (
          <motion.div
            key={theme.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            onClick={() => setThemeId(theme.id)}
            className={`theme-card ${themeId === theme.id ? 'selected' : ''}`}
          >
            <div className="flex flex-col items-center text-center p-4">
              <div className="text-5xl mb-4">{theme.icon}</div>
              <h3 className="text-xl font-battle text-white mb-2">{theme.name}</h3>
              <p className="text-neutral-300">{theme.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <div className="mt-auto flex justify-center">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleContinue}
          disabled={!themeId}
          className={`flex items-center neon-button ${!themeId ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          <span>Start Battle</span>
          <ChevronRight size={20} className="ml-2" />
        </motion.button>
      </div>
    </div>
  );
};

export default ThemeSelection;