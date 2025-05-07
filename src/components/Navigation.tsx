import React from 'react';
import { useGame } from '../contexts/GameContext';

interface NavigationProps {
  setRoute: (route: string) => void;
  currentRoute: string;
}

const Navigation: React.FC<NavigationProps> = ({ setRoute, currentRoute }) => {
  const { goPower, resetGame } = useGame();
  
  const handleNavClick = (route: string) => {
    resetGame();  // Reset game state when navigating
    setRoute(route);
  };
  
  // Calculate user rank based on GO Power
  const calculateRank = (power: number): string => {
    if (power >= 10000) return "漢字マスター";
    if (power >= 5000) return "漢字の達人";
    if (power >= 2000) return "漢字の師匠";
    if (power >= 1000) return "漢字の先生";
    if (power >= 500) return "漢字の学者";
    if (power >= 200) return "漢字の専門家";
    if (power >= 100) return "漢字の勇者";
    if (power >= 50) return "漢字の冒険者";
    if (power >= 20) return "漢字の学徒";
    if (power >= 10) return "漢字の初心者";
    return "漢字の見習い";
  };

  return (
    <header className="flex flex-col items-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-2 text-center text-yellow-300 fade-in">
        漢字でGO!
      </h1>
      <p className="text-lg mb-6 text-center text-yellow-100">
        あなたの漢字力を試そう！
      </p>
      
      {/* GO Power display */}
      <div className="mb-6 bg-purple-800 p-3 rounded-lg shadow-md text-center">
        <p className="text-sm text-purple-200">GOパワー</p>
        <p className="text-xl font-bold text-yellow-300">{goPower}</p>
        <p className="text-sm text-purple-200">ランク: {calculateRank(goPower)}</p>
      </div>
      
      {/* Navigation menu */}
      <nav className="flex flex-wrap justify-center gap-3 mb-4">
        <button 
          onClick={() => handleNavClick('home')}
          className={`game-button px-4 py-2 rounded-lg ${
            currentRoute === 'home' 
              ? 'bg-yellow-500 text-purple-900 font-bold' 
              : 'bg-purple-700 text-white hover:bg-purple-600'
          }`}
        >
          ホーム
        </button>
        <button 
          onClick={() => handleNavClick('modeSelect')}
          className={`game-button px-4 py-2 rounded-lg ${
            currentRoute === 'modeSelect' 
              ? 'bg-yellow-500 text-purple-900 font-bold' 
              : 'bg-purple-700 text-white hover:bg-purple-600'
          }`}
        >
          モード選択
        </button>
        <button 
          onClick={() => handleNavClick('about')}
          className={`game-button px-4 py-2 rounded-lg ${
            currentRoute === 'about' 
              ? 'bg-yellow-500 text-purple-900 font-bold' 
              : 'bg-purple-700 text-white hover:bg-purple-600'
          }`}
        >
          ゲーム紹介
        </button>
      </nav>
    </header>
  );
};

export default Navigation;