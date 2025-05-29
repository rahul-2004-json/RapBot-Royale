import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Mic, Music, Trophy, Users } from "lucide-react";

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-battle-dark battle-grid flex flex-col">
      {/* Hero Section */}
      <header className="w-full py-16 px-4 md:px-10 lg:px-20 flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display text-white mb-4 animate-neon-pulse">
            RAP BOT ROYALE
          </h1>
          <p className="text-xl md:text-2xl text-neon-blue max-w-2xl mb-8">
            Choose your rappers. Select a theme. Witness the ultimate showdown.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/select-rappers")}
            className="neon-button text-lg md:text-xl mt-4"
          >
            START BATTLE
          </motion.button>
        </motion.div>
      </header>

      {/* Feature Section */}
      <section className="w-full py-10 px-4 md:px-10 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-battle text-center text-neon-pink mb-12">
            HOW IT WORKS
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Users size={40} className="text-neon-blue" />,
                title: "Choose Rappers",
                description:
                  "Select two personalities to battle it out on the mic",
              },
              {
                icon: <Music size={40} className="text-neon-pink" />,
                title: "Pick a Theme",
                description: "Set the topic for your epic rap showdown",
              },
              {
                icon: <Mic size={40} className="text-neon-purple" />,
                title: "Watch the Battle",
                description: "Witness AI-powered lyrics and voice performances",
              },
              {
                icon: <Trophy size={40} className="text-neon-green" />,
                title: "Crown a Winner",
                description: "Vote or let fate decide who's the rap champion",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-battle-darker p-6 rounded-xl border border-neutral-800 hover:border-neon-purple transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-battle text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-neutral-300">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 px-4 md:px-10 lg:px-20 mt-auto">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h2 className="text-2xl md:text-4xl font-battle text-white mb-6">
              Ready to <span className="text-neon-pink">Drop Some Beats</span>?
            </h2>
            <p className="text-lg text-neutral-300 mb-8">
              Create the ultimate rap battle between iconic personalities and
              share the results with your friends.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/select-rappers")}
              className="neon-button text-lg"
            >
              BEGIN YOUR BATTLE
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-6 bg-battle-darker border-t border-neutral-800">
        <div className="text-center text-neutral-400 text-sm">
          <p>© 2025 Rap Bot Royale. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
