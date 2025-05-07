import React from 'react';
import { Dices, Target, Zap, Globe } from 'lucide-react';
import { useGame } from '../contexts/GameContext';
import { GameMode } from '../types/game';

interface ModeSelectProps {
  setRoute: (route: string) => void;
}

const ModeSelect: React.FC<ModeSelectProps> = ({ setRoute }) => {
  const { setGameMode, resetGame } = useGame();
  
  const handleModeSelect = (mode: GameMode) => {
    resetGame();
    setGameMode(mode);
    setRoute('gameOptions');
  };

  return (
    <div className="fade-in">
      <h2 className="text-3xl font-bold mb-6 text-center text-yellow-300">
        モード選択
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {/* Mode: MAIN */}
        <div 
          onClick={() => handleModeSelect('main')}
          className="mode-card bg-gradient-to-br from-purple-700 to-indigo-900 rounded-xl p-6 shadow-lg cursor-pointer border-2 border-transparent hover:border-yellow-400"
        >
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-2xl font-bold text-yellow-300">メイン</h3>
            <Target size={28} className="text-yellow-300" />
          </div>
          
          <p className="text-purple-100 mb-4">
            漢字でGO!の基本モード。最大16問の漢字問題に挑戦しよう！
          </p>
          
          <div className="bg-purple-900 bg-opacity-50 p-3 rounded-lg">
            <p className="text-sm text-purple-200 mb-1">難易度:</p>
            <div className="flex gap-2">
              <span className="bg-green-800 text-white text-xs px-2 py-1 rounded">ノーマル</span>
              <span className="bg-blue-800 text-white text-xs px-2 py-1 rounded">ハード</span>
              <span className="bg-red-800 text-white text-xs px-2 py-1 rounded">ゲキムズ</span>
              <span className="bg-black text-white text-xs px-2 py-1 rounded">ヘル</span>
            </div>
          </div>
        </div>
        
        {/* Mode: CASUAL */}
        <div 
          onClick={() => handleModeSelect('casual')}
          className="mode-card bg-gradient-to-br from-purple-700 to-blue-900 rounded-xl p-6 shadow-lg cursor-pointer border-2 border-transparent hover:border-yellow-400"
        >
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-2xl font-bold text-yellow-300">カジュアル</h3>
            <Dices size={28} className="text-yellow-300" />
          </div>
          
          <p className="text-purple-100 mb-4">
            様々なテーマに沿った漢字問題。ボーナス問題にも挑戦しよう！
          </p>
          
          <div className="bg-purple-900 bg-opacity-50 p-3 rounded-lg">
            <p className="text-sm text-purple-200 mb-1">ジャンル例:</p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-green-800 text-white text-xs px-2 py-1 rounded">ベーシック</span>
              <span className="bg-blue-800 text-white text-xs px-2 py-1 rounded">四字熟語</span>
              <span className="bg-amber-800 text-white text-xs px-2 py-1 rounded">動物名</span>
              <span className="bg-pink-800 text-white text-xs px-2 py-1 rounded">グルメ</span>
            </div>
          </div>
        </div>
        
        {/* Mode: RUSH */}
        <div 
          onClick={() => handleModeSelect('rush')}
          className="mode-card bg-gradient-to-br from-purple-700 to-pink-900 rounded-xl p-6 shadow-lg cursor-pointer border-2 border-transparent hover:border-yellow-400"
        >
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-2xl font-bold text-yellow-300">ラッシュ</h3>
            <Zap size={28} className="text-yellow-300" />
          </div>
          
          <p className="text-purple-100 mb-4">
            同じレベルの漢字を次々と解いていく連続モード。ID確定機能も！
          </p>
          
          <div className="bg-purple-900 bg-opacity-50 p-3 rounded-lg">
            <p className="text-sm text-purple-200 mb-1">レベル選択:</p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-green-800 text-white text-xs px-2 py-1 rounded">Lv.1</span>
              <span className="bg-blue-800 text-white text-xs px-2 py-1 rounded">Lv.2</span>
              <span className="bg-yellow-800 text-white text-xs px-2 py-1 rounded">Lv.3</span>
              <span className="bg-red-800 text-white text-xs px-2 py-1 rounded">Lv.4〜6</span>
            </div>
          </div>
        </div>
        
        {/* Mode: EXTRA */}
        <div 
          onClick={() => handleModeSelect('extra')}
          className="mode-card bg-gradient-to-br from-purple-700 to-green-900 rounded-xl p-6 shadow-lg cursor-pointer border-2 border-transparent hover:border-yellow-400"
        >
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-2xl font-bold text-yellow-300">エクストラ</h3>
            <Globe size={28} className="text-yellow-300" />
          </div>
          
          <p className="text-purple-100 mb-4">
            漢字以外の問題に挑戦！数字、英語、元素記号など様々なクイズ。
          </p>
          
          <div className="bg-purple-900 bg-opacity-50 p-3 rounded-lg">
            <p className="text-sm text-purple-200 mb-1">含まれるモード:</p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-blue-800 text-white text-xs px-2 py-1 rounded">数字アタック</span>
              <span className="bg-red-800 text-white text-xs px-2 py-1 rounded">鬼・数字</span>
              <span className="bg-green-800 text-white text-xs px-2 py-1 rounded">英語</span>
              <span className="bg-yellow-800 text-white text-xs px-2 py-1 rounded">元素記号</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex justify-center mt-8">
        <button
          onClick={() => setRoute('home')}
          className="game-button bg-purple-700 hover:bg-purple-600 text-white py-2 px-6 rounded-lg shadow-md"
        >
          戻る
        </button>
      </div>
    </div>
  );
};

export default ModeSelect;