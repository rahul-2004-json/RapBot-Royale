import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import RapperSelection from "./pages/RapperSelection";
import ThemeSelection from "./pages/ThemeSelection";
import RapBattle from "./pages/RapBattle";
import { RapBattleProvider } from "./context/RapBattleContext";

function App() {
  return (
    <RapBattleProvider>
      <Router>
        <div className="min-h-screen bg-battle-dark text-white font-body">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/select-rappers" element={<RapperSelection />} />
            <Route path="/select-theme" element={<ThemeSelection />} />
            <Route path="/battle" element={<RapBattle />} />
          </Routes>
        </div>
      </Router>
    </RapBattleProvider>
  );
}

export default App;
