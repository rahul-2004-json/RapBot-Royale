import React, { createContext, useState, useContext, ReactNode } from "react";
import { rappers, themes, Rapper, Theme } from "../data/rapBattleData";

interface RapBattleContextType {
  rapperA: Rapper | null;
  rapperB: Rapper | null;
  selectedTheme: Theme | null;
  setRapperA: (rapper: Rapper) => void;
  setRapperB: (rapper: Rapper) => void;
  setSelectedTheme: (theme: Theme) => void;
  winner: Rapper | null;
  setWinner: (rapper: Rapper | null) => void;
  winReason: string;
  setWinReason: (reason: string) => void;
  resetBattle: () => void;
}

const RapBattleContext = createContext<RapBattleContextType | undefined>(
  undefined
);

export const RapBattleProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [rapperA, setRapperA] = useState<Rapper | null>(null);
  const [rapperB, setRapperB] = useState<Rapper | null>(null);
  const [selectedTheme, setSelectedTheme] = useState<Theme | null>(null);
  const [winner, setWinner] = useState<Rapper | null>(null);
  const [winReason, setWinReason] = useState<string>("");

  const resetBattle = () => {
    setRapperA(null);
    setRapperB(null);
    setSelectedTheme(null);
    setWinner(null);
    setWinReason("");
  };

  return (
    <RapBattleContext.Provider
      value={{
        rapperA,
        rapperB,
        selectedTheme,
        setRapperA,
        setRapperB,
        setSelectedTheme,
        winner,
        setWinner,
        winReason,
        setWinReason,
        resetBattle,
      }}
    >
      {children}
    </RapBattleContext.Provider>
  );
};

export const useRapBattle = () => {
  const context = useContext(RapBattleContext);
  if (context === undefined) {
    throw new Error("useRapBattle must be used within a RapBattleProvider");
  }
  return context;
};
