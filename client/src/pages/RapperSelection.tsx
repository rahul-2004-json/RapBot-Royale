import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { rappers } from "../data/rapBattleData";
import { useRapBattle } from "../context/RapBattleContext";

const RapperSelection: React.FC = () => {
  const navigate = useNavigate();
  const { setRapperA, setRapperB } = useRapBattle();
  const [selectedRapperA, setSelectedRapperA] = useState<string | null>(null);
  const [selectedRapperB, setSelectedRapperB] = useState<string | null>(null);

  useEffect(() => {
    const audio = new Audio("/landing_page.mp3");
    audio.loop = true;
    audio.volume = 0.4;

    const play = () => audio.play().catch(() => {});
    window.addEventListener("click", play, { once: true });

    return () => {
      audio.pause();
      audio.currentTime = 0;
      window.removeEventListener("click", play);
    };
  }, []);

  const handleRapperASelection = (rapperId: string) => {
    // Prevent selecting the same rapper for both positions
    if (rapperId === selectedRapperB) {
      setSelectedRapperB(null);
    }
    setSelectedRapperA(rapperId);
  };

  const handleRapperBSelection = (rapperId: string) => {
    // Prevent selecting the same rapper for both positions
    if (rapperId === selectedRapperA) {
      setSelectedRapperA(null);
    }
    setSelectedRapperB(rapperId);
  };

  const handleContinue = () => {
    if (selectedRapperA && selectedRapperB) {
      const rapperAData = rappers.find((r) => r.id === selectedRapperA);
      const rapperBData = rappers.find((r) => r.id === selectedRapperB);

      if (rapperAData && rapperBData) {
        setRapperA(rapperAData);
        setRapperB(rapperBData);
        navigate("/select-theme");
      }
    }
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-battle-dark battle-grid flex flex-col px-4 md:px-10 py-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center mb-8"
      >
        <button
          onClick={() => navigate("/")}
          className="flex items-center text-neon-blue hover:text-neon-purple transition-colors"
        >
          <ChevronLeft size={20} />
          <span>Back to Home</span>
        </button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center mb-10"
      >
        <h1 className="text-3xl md:text-5xl font-battle text-white mb-4 animate-neon-pulse">
          Choose Your Rappers
        </h1>
        <p className="text-lg text-neon-blue max-w-2xl mx-auto">
          Select two personalities to face off in an epic rap battle!
        </p>
      </motion.div>

      <div className="flex flex-col md:flex-row gap-8 mb-12">
        {/* Rapper A Selection */}
        <div className="flex-1">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-battle text-neon-pink mb-4 text-center md:text-left"
          >
            RAPPER A
          </motion.h2>
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {rappers.map((rapper) => (
              <motion.div
                key={rapper.id}
                variants={item}
                onClick={() => handleRapperASelection(rapper.id)}
                className={`rapper-card ${
                  selectedRapperA === rapper.id ? "selected" : ""
                }`}
              >
                <div className="flex flex-col items-center">
                  <div className="w-24 h-24 rounded-full overflow-hidden mb-3 border-2 border-neutral-700">
                    <img
                      src={rapper.image}
                      alt={rapper.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-battle text-white mb-1">
                    {rapper.name}
                  </h3>
                  <p className="text-sm text-neutral-400 text-center">
                    {rapper.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* VS Divider */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex items-center justify-center"
        >
          <div className="text-3xl md:text-5xl font-display text-neon-yellow animate-pulse">
            VS
          </div>
        </motion.div>

        {/* Rapper B Selection */}
        <div className="flex-1">
          <motion.h2
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-battle text-neon-blue mb-4 text-center md:text-right"
          >
            RAPPER B
          </motion.h2>
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {rappers.map((rapper) => (
              <motion.div
                key={rapper.id}
                variants={item}
                onClick={() => handleRapperBSelection(rapper.id)}
                className={`rapper-card ${
                  selectedRapperB === rapper.id ? "selected" : ""
                }`}
              >
                <div className="flex flex-col items-center">
                  <div className="w-24 h-24 rounded-full overflow-hidden mb-3 border-2 border-neutral-700">
                    <img
                      src={rapper.image}
                      alt={rapper.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-battle text-white mb-1">
                    {rapper.name}
                  </h3>
                  <p className="text-sm text-neutral-400 text-center">
                    {rapper.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="mt-auto flex justify-center">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleContinue}
          disabled={!selectedRapperA || !selectedRapperB}
          className={`flex items-center neon-button ${
            !selectedRapperA || !selectedRapperB
              ? "opacity-50 cursor-not-allowed"
              : ""
          }`}
        >
          <span>Continue</span>
          <ChevronRight size={20} className="ml-2" />
        </motion.button>
      </div>
    </div>
  );
};

export default RapperSelection;
