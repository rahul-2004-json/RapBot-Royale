import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  Trophy,
  Share2,
  Twitter,
  Facebook,
  Instagram,
} from "lucide-react";
import { useRapBattle } from "../context/RapBattleContext";
import { generateMockLyrics } from "../data/rapBattleData";
import { generateLyrics } from "../utility/generateLyrics";
import Confetti from "react-confetti";
import VoiceVisualizer from "../components/VoiceVisualizer";
import RapperDisplay from "../components/RapperDisplay";
import WinnerModal from "../components/WinnerModal";
import { useTTS } from "../hooks/useTTS";

const RapBattle: React.FC = () => {
  const navigate = useNavigate();
  const { speak, stop, speaking } = useTTS();
  const { rapperA, rapperB, selectedTheme, setWinner, winner, setWinReason } =
    useRapBattle();

  const [currentRapper, setCurrentRapper] = useState<"A" | "B" | null>(null);
  const [lyricsA, setLyricsA] = useState<any[]>([]);
  const [lyricsB, setLyricsB] = useState<any[]>([]);
  const [currentLyricIndex, setCurrentLyricIndex] = useState(0);
  const [battleComplete, setBattleComplete] = useState(false);
  const [showWinnerModal, setShowWinnerModal] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    const audio = new Audio("/battle_sound.mp3");
    audio.loop = true;
    audio.volume = 0.25;

    const play = () => audio.play().catch(() => {});
    window.addEventListener("click", play, { once: true });

    return () => {
      audio.pause();
      audio.currentTime = 0;
      window.removeEventListener("click", play);
    };
  }, []);

  useEffect(() => {
    const fetchLyrics = async () => {
      if (!rapperA || !rapperB || !selectedTheme) {
        navigate("/");
        return;
      }

      try {
        const lyricsAData = await generateLyrics(
          rapperA.name,
          selectedTheme.name
        );
        const lyricsBData = await generateLyrics(
          rapperB.name,
          selectedTheme.name
        );
        console.log(lyricsAData);
        console.log(lyricsBData);
        setLyricsA(lyricsAData);
        setLyricsB(lyricsBData);
      } catch (error) {
        console.error("Error generating lyrics:", error);
        // Fallback to mock lyrics if needed
        setLyricsA(generateMockLyrics(rapperA.id, selectedTheme.id));
        setLyricsB(generateMockLyrics(rapperB.id, selectedTheme.id));
      }
    };

    fetchLyrics();
  }, [rapperA, rapperB, selectedTheme, navigate]);

  useEffect(() => {
    // Start with rapper A
    if (rapperA && rapperB && selectedTheme && !currentRapper) {
      setTimeout(() => {
        setCurrentRapper("A");
      }, 1500); // Give time for the page to load and animate
    }
  }, [rapperA, rapperB, selectedTheme, currentRapper]);

  // Handle rap battle progression
  // useEffect(() => {
  //   if (
  //     !currentRapper ||
  //     !lyricsA.length ||
  //     !lyricsB.length ||
  //     !rapperA ||
  //     !rapperB
  //   )
  //     return;

  //   const currentLyrics = currentRapper === "A" ? lyricsA : lyricsB;
  //   const currentRapperData = currentRapper === "A" ? rapperA : rapperB;

  //   if (currentLyricIndex < currentLyrics.length) {
  //     // Stop any ongoing speech
  //     stop();

  //     // Speak the current lyric with rapper's voice settings
  //     // speak(currentLyrics[currentLyricIndex].text, {
  //     //   ...currentRapperData.voiceSettings,
  //     // });

  //     // speak(currentLyrics[currentLyricIndex].text, {
  //     //   voiceId: currentRapperData.voiceSettings.voiceId,
  //     // });

  //     // const timeoutId = setTimeout(() => {
  //     //   setCurrentLyricIndex(currentLyricIndex + 1);
  //     // }, currentLyrics[currentLyricIndex].duration);

  //     (async () => {
  //       try {
  //         await speak(currentLyrics[currentLyricIndex].text, {
  //           voiceId: currentRapperData.voiceSettings.voiceId,
  //         });

  //         setCurrentLyricIndex((prev) => prev + 1);
  //       } catch (err) {
  //         console.error("Error during speak():", err);
  //       }
  //     })();

  //     // return () => {
  //     //   clearTimeout(timeoutId);
  //     //   stop();
  //     // };
  //   } else {
  //     // Switch rappers or end battle
  //     setCurrentLyricIndex(0);

  //     if (currentRapper === "A") {
  //       setTimeout(() => {
  //         setCurrentRapper("B");
  //       }, 1000);
  //     } else {
  //       // Battle complete
  //       setBattleComplete(true);
  //     }
  //   }
  // }, [
  //   currentRapper,
  //   currentLyricIndex,
  //   lyricsA,
  //   lyricsB,
  //   rapperA,
  //   rapperB,
  //   speak,
  //   stop,
  // ]);

  useEffect(() => {
    if (
      !currentRapper ||
      !lyricsA.length ||
      !lyricsB.length ||
      !rapperA ||
      !rapperB
    )
      return;

    const currentLyrics = currentRapper === "A" ? lyricsA : lyricsB;
    const currentRapperData = currentRapper === "A" ? rapperA : rapperB;

    const performLyric = async () => {
      if (currentLyricIndex < currentLyrics.length) {
        try {
          await speak(currentLyrics[currentLyricIndex].text, {
            voiceId: currentRapperData.voiceSettings.voiceId,
          });

          setCurrentLyricIndex((prev) => prev + 1);
        } catch (err) {
          console.error("Error during speak():", err);
        }
      } else {
        // Finished current rapper
        if (currentRapper === "A") {
          setCurrentLyricIndex(0);
          setCurrentRapper("B");
        } else {
          setBattleComplete(true);
        }
      }
    };

    performLyric();

    return () => stop();
  }, [currentRapper, currentLyricIndex, lyricsA, lyricsB]);

  const handleRandomWinner = () => {
    const randomWinner = Math.random() > 0.5 ? rapperA : rapperB;
    const reasons = [
      "for their incredible flow and wordplay",
      "with those unforgettable punchlines",
      "delivering the most creative verses",
      "bringing unmatched energy to the battle",
      "with superior delivery and stage presence",
    ];
    const randomReason = reasons[Math.floor(Math.random() * reasons.length)];

    setWinner(randomWinner);
    setWinReason(randomReason);
    setShowWinnerModal(true);
    setShowConfetti(true);
  };

  const handleChooseWinner = (winner: "A" | "B") => {
    setWinner(winner === "A" ? rapperA : rapperB);
    setWinReason("for an amazing performance that won the crowd over");
    setShowWinnerModal(true);
    setShowConfetti(true);
  };

  if (!rapperA || !rapperB || !selectedTheme) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-battle-dark battle-grid flex flex-col px-4 md:px-10 py-8">
      {/* Background grid overlay */}
      <div className="absolute inset-0 battle-grid opacity-30"></div>

      {/* Header and navigation */}
      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center p-4"
        >
          <button
            onClick={() => navigate("/select-theme")}
            className="flex items-center text-neon-blue hover:text-neon-purple transition-colors"
          >
            <ChevronLeft size={20} />
            <span>Back to Theme Selection</span>
          </button>

          <div className="ml-auto flex space-x-2">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-battle-dark px-4 py-2 rounded-full flex items-center"
            >
              <span className="text-neon-green mr-2">{selectedTheme.icon}</span>
              <span className="text-neon-blue font-battle">
                {selectedTheme.name}
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Battle area */}
      <div className="flex flex-col md:flex-row h-[calc(100vh-10rem)] p-4 relative z-10">
        {/* Rapper A */}
        <div className="flex-1 flex flex-col items-center justify-center p-2 md:p-6 relative">
          <RapperDisplay
            rapper={rapperA}
            isActive={currentRapper === "A"}
            side="left"
          />

          {currentRapper === "A" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4"
            >
              <VoiceVisualizer isActive={speaking} />

              {lyricsA.length > 0 && currentLyricIndex < lyricsA.length && (
                <motion.div
                  key={currentLyricIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="bg-battle-dark border border-neon-pink px-4 py-3 rounded-lg mt-4 max-w-sm mx-auto text-center"
                >
                  <p className="text-white">
                    {lyricsA[currentLyricIndex].text}
                  </p>
                </motion.div>
              )}
            </motion.div>
          )}
        </div>

        {/* Center VS */}
        <div className="flex items-center justify-center py-4 md:py-0">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="text-4xl md:text-6xl font-display text-neon-yellow"
          >
            VS
          </motion.div>
        </div>

        {/* Rapper B */}
        <div className="flex-1 flex flex-col items-center justify-center p-2 md:p-6 relative">
          <RapperDisplay
            rapper={rapperB}
            isActive={currentRapper === "B"}
            side="right"
          />

          {currentRapper === "B" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4"
            >
              <VoiceVisualizer isActive={speaking} />

              {lyricsB.length > 0 && currentLyricIndex < lyricsB.length && (
                <motion.div
                  key={currentLyricIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="bg-battle-dark border border-neon-blue px-4 py-3 rounded-lg mt-4 max-w-sm mx-auto text-center"
                >
                  <p className="text-white">
                    {lyricsB[currentLyricIndex].text}
                  </p>
                </motion.div>
              )}
            </motion.div>
          )}
        </div>
      </div>

      {/* Battle controls */}
      <div className="p-6 flex justify-center items-center relative z-10">
        <AnimatePresence>
          {battleComplete && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <button
                onClick={() => handleChooseWinner("A")}
                className="neon-button border-neon-pink"
              >
                {rapperA.name} Wins
              </button>

              <button
                onClick={handleRandomWinner}
                className="neon-button border-neon-yellow flex items-center"
              >
                <Trophy size={18} className="mr-2" />
                Random Winner
              </button>

              <button
                onClick={() => handleChooseWinner("B")}
                className="neon-button border-neon-blue"
              >
                {rapperB.name} Wins
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Confetti effect when winner is declared */}
      {showConfetti && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          recycle={false}
          numberOfPieces={500}
          gravity={0.3}
          colors={["#FF00FF", "#00FFFF", "#8A2BE2", "#FFFF00", "#39FF14"]}
          onConfettiComplete={() => setShowConfetti(false)}
        />
      )}

      {/* Winner Modal */}
      <AnimatePresence>
        {showWinnerModal && winner && (
          <WinnerModal
            winner={winner}
            onClose={() => setShowWinnerModal(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default RapBattle;
