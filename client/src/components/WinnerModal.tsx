import React from "react";
import { motion } from "framer-motion";
import { X, Twitter, Facebook, Instagram } from "lucide-react";
import { Rapper } from "../data/rapBattleData";
import { useRapBattle } from "../context/RapBattleContext";

interface WinnerModalProps {
  winner: Rapper;
  onClose: () => void;
}

const WinnerModal: React.FC<WinnerModalProps> = ({ winner, onClose }) => {
  const { winReason } = useRapBattle();

  const shareMessage = `${winner.name} just won a rap bot royale ${winReason}! Check out Rap Bot Royale!`;

  const shareTwitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        shareMessage
      )}`,
      "_blank"
    );
  };

  const shareFacebook = () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        window.location.href
      )}&quote=${encodeURIComponent(shareMessage)}`,
      "_blank"
    );
  };

  const shareInstagram = () => {
    navigator.clipboard
      .writeText(shareMessage)
      .then(() =>
        alert("Caption copied to clipboard! You can paste it on Instagram.")
      )
      .catch((err) => console.error("Could not copy text: ", err));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 z-50"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.8, y: 50 }}
        className="bg-battle-darker rounded-xl border-2 border-neon-purple p-6 max-w-md w-full relative neon-border"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-4 right-4 text-white hover:text-neon-pink"
          onClick={onClose}
        >
          <X size={24} />
        </button>

        <div className="text-center">
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 0.5 }}
            className="text-6xl mx-auto mb-4"
          >
            🏆
          </motion.div>

          <h2 className="text-2xl md:text-3xl font-battle text-neon-yellow mb-2">
            WINNER!
          </h2>

          <div className="w-20 h-20 mx-auto rounded-full overflow-hidden border-4 border-neon-yellow mb-4">
            <img
              src={winner.image}
              alt={winner.name}
              className="w-full h-full object-cover"
            />
          </div>

          <h3 className="text-xl font-battle text-white mb-3">{winner.name}</h3>

          <p className="text-neutral-300 mb-6">
            Won the rap battle {winReason}!
          </p>

          <div className="mb-6">
            <h4 className="text-sm text-neon-blue mb-2 uppercase font-bold">
              Share this epic victory
            </h4>
            <div className="flex justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-[#1DA1F2] p-2 rounded-full"
                onClick={shareTwitter}
              >
                <Twitter size={20} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-[#4267B2] p-2 rounded-full"
                onClick={shareFacebook}
              >
                <Facebook size={20} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-gradient-to-tr from-[#405DE6] via-[#C13584] to-[#FCAF45] p-2 rounded-full"
                onClick={shareInstagram}
              >
                <Instagram size={20} />
              </motion.button>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onClose}
            className="neon-button text-sm"
          >
            CLOSE
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default WinnerModal;
