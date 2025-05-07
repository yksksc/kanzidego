import React, { useEffect } from 'react';
import { Star, Award, BarChart3, Clock, ThumbsUp, Trophy } from 'lucide-react';
import { useGame } from '../contexts/GameContext';

interface ResultsProps {
  setRoute: (route: string) => void;
}

const Results: React.FC<ResultsProps> = ({ setRoute }) => {
  const { gameState, gameOptions, results, goPower, resetGame, timeLeft } = useGame();
  
  // Calculate percentage of correct answers
  const correctPercentage = Math.round((results.correctCount / (results.correctCount + results.incorrectCount)) * 100);
  
  // Determine result message based on performance
  const getResultMessage = () => {
    if (correctPercentage === 100) {
      return gameOptions.difficulty === 'hell' 
        ? '伝説の漢字マスター！素晴らしい完全制覇！' 
        : '完璧！全問正解おめでとう！';
    } else if (correctPercentage >= 80) {
      return '素晴らしい！ほとんど正解！';
    } else if (correctPercentage >= 60) {
      return 'よくがんばりました！';
    } else if (correctPercentage >= 40) {
      return 'まあまあの結果です。次はもっと頑張りましょう！';
    } else {
      return '難しかったですね。練習を続けましょう！';
    }
  };

  // Play again with same settings
  const handlePlayAgain = () => {
    resetGame();
    setRoute('gameOptions');
  };
  
  // Go to home screen
  const handleGoHome = () => {
    resetGame();
    setRoute('home');
  };
  
  // Calculate rank based on performance and difficulty
  const calculateRank = () => {
    if (correctPercentage === 100) {
      switch (gameOptions.difficulty) {
        case 'hell': return 'S+';
        case 'extreme': return 'S';
        case 'hard': return 'A+';
        default: return 'A';
      }
    } else if (correctPercentage >= 80) {
      return 'B';
    } else if (correctPercentage >= 60) {
      return 'C';
    } else if (correctPercentage >= 40) {
      return 'D';
    } else {
      return 'E';
    }
  };

  return (
    <div className="fade-in">
      <h2 className="text-3xl font-bold mb-6 text-center text-yellow-300">
        結果発表
      </h2>
      
      <div className="bg-purple-800 bg-opacity-50 p-6 rounded-xl shadow-lg max-w-2xl mx-auto">
        {/* Results summary */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-white mb-2">{getResultMessage()}</h3>
          <div className="flex justify-center items-center gap-2 mt-4">
            <Award size={24} className="text-yellow-400" />
            <span className="text-xl font-bold text-yellow-400">ランク: {calculateRank()}</span>
          </div>
        </div>
        
        {/* Stats grid */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="bg-purple-900 bg-opacity-50 p-4 rounded-lg text-center">
            <BarChart3 size={24} className="text-yellow-300 mx-auto mb-2" />
            <h4 className="text-sm text-purple-200 mb-1">スコア</h4>
            <p className="text-2xl font-bold text-yellow-300">{results.score}</p>
          </div>
          
          <div className="bg-purple-900 bg-opacity-50 p-4 rounded-lg text-center">
            <Clock size={24} className="text-yellow-300 mx-auto mb-2" />
            <h4 className="text-sm text-purple-200 mb-1">平均解答時間</h4>
            <p className="text-2xl font-bold text-yellow-300">
              {results.correctCount ? `${Math.round((gameOptions.timeLimit - (timeLeft / results.correctCount)) * 10) / 10}秒` : '-'}
            </p>
          </div>
          
          <div className="bg-purple-900 bg-opacity-50 p-4 rounded-lg text-center">
            <ThumbsUp size={24} className="text-green-400 mx-auto mb-2" />
            <h4 className="text-sm text-purple-200 mb-1">正解数</h4>
            <p className="text-2xl font-bold text-green-400">
              {results.correctCount}/{results.correctCount + results.incorrectCount}
            </p>
          </div>
          
          <div className="bg-purple-900 bg-opacity-50 p-4 rounded-lg text-center">
            <Trophy size={24} className="text-yellow-300 mx-auto mb-2" />
            <h4 className="text-sm text-purple-200 mb-1">GOパワー</h4>
            <p className="text-2xl font-bold text-yellow-300">+{goPower - (parseInt(localStorage.getItem('goPower') || '0', 10) - goPower)}</p>
          </div>
        </div>
        
        {/* Special reward message for Hell mode clear */}
        {gameOptions.difficulty === 'hell' && correctPercentage === 100 && (
          <div className="mb-8 p-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg text-center">
            <Star size={32} className="text-yellow-300 mx-auto mb-2" />
            <h4 className="text-xl font-bold text-white mb-2">特別達成解除！</h4>
            <p className="text-yellow-200">
              伝説の漢字マスターとしての地位を確立しました！今後は漢字の神として崇められることでしょう！
            </p>
          </div>
        )}
        
        {/* Unlock notice for Time Warp stage */}
        {gameOptions.mode === 'main' && 
         correctPercentage === 100 && 
         gameOptions.mainCompletions === 3 && 
         !localStorage.getItem('timeWarpUnlocked') && (
          <div className="mb-8 p-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg text-center">
            <Star size={32} className="text-yellow-300 mx-auto mb-2" />
            <h4 className="text-xl font-bold text-white mb-2">新ステージ解放！</h4>
            <p className="text-yellow-200">
              メインモードを3回クリアしたため、「タイムワープ」ステージが解放されました！
            </p>
          </div>
        )}
        
        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
          <button
            onClick={handlePlayAgain}
            className="game-button bg-yellow-500 hover:bg-yellow-400 text-purple-900 font-bold py-3 px-6 rounded-lg shadow-md"
          >
            もう一度プレイ
          </button>
          
          <button
            onClick={() => setRoute('modeSelect')}
            className="game-button bg-purple-600 hover:bg-purple-500 text-white py-3 px-6 rounded-lg shadow-md"
          >
            他のモードを選ぶ
          </button>
          
          <button
            onClick={handleGoHome}
            className="game-button bg-purple-700 hover:bg-purple-600 text-white py-3 px-6 rounded-lg shadow-md"
          >
            ホームへ戻る
          </button>
        </div>
      </div>
    </div>
  );
};

export default Results;