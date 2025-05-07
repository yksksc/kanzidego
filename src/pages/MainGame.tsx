import React, { useState, useEffect, useRef } from 'react';
import { useGame } from '../contexts/GameContext';
import { Heart, Clock, BarChart } from 'lucide-react';

interface MainGameProps {
  setRoute: (route: string) => void;
}

const MainGame: React.FC<MainGameProps> = ({ setRoute }) => {
  const { 
    gameState, 
    gameOptions, 
    questions, 
    currentQuestionIndex, 
    submitAnswer, 
    timeLeft 
  } = useGame();
  
  const [userAnswer, setUserAnswer] = useState('');
  const [showFeedback, setShowFeedback] = useState<'correct' | 'incorrect' | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  
  const currentQuestion = questions[currentQuestionIndex];
  
  // Set body background based on selected stage
  useEffect(() => {
    document.body.className = `theme-${gameOptions.stage}`;
    
    return () => {
      document.body.className = '';
    };
  }, [gameOptions.stage]);
  
  // Focus input on mount and when question changes
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
    setUserAnswer('');
    setShowFeedback(null);
  }, [currentQuestionIndex]);
  
  // Redirect to results when game is complete
  useEffect(() => {
    if (gameState.isComplete) {
      setTimeout(() => {
        setRoute('results');
      }, 1000);
    }
  }, [gameState.isComplete, setRoute]);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!userAnswer.trim()) return;
    
    const correctReading = Array.isArray(currentQuestion?.reading) 
      ? currentQuestion.reading 
      : [currentQuestion?.reading];
    
    const isCorrect = correctReading.includes(userAnswer.trim());
    
    setShowFeedback(isCorrect ? 'correct' : 'incorrect');
    
    setTimeout(() => {
      submitAnswer(userAnswer.trim());
      setUserAnswer('');
      setShowFeedback(null);
    }, 500);
  };
  
  // Get appropriate background for the mode
  const getModeBg = () => {
    switch (gameOptions.mode) {
      case 'main': return 'bg-purple-900';
      case 'casual': return 'bg-blue-900';
      case 'rush': return 'bg-pink-900';
      case 'extra': return 'bg-green-900';
      default: return 'bg-purple-900';
    }
  };
  
  // Calculate progress percentage
  const progressPercentage = (currentQuestionIndex / questions.length) * 100;
  
  // Format Game Mode for display
  const getDisplayMode = () => {
    if (gameOptions.mode === 'extra' && gameOptions.extraMode) {
      switch (gameOptions.extraMode) {
        case 'numberAttack': return '数字アタック';
        case 'extremeNumberAttack': return '鬼・数字アタック';
        case 'englishAttack': return '英語アタック';
        case 'elementSymbol': return '元素記号';
        default: return 'エクストラ';
      }
    }
    
    switch (gameOptions.mode) {
      case 'main': return 'メイン';
      case 'casual': return 'カジュアル';
      case 'rush': return 'ラッシュ';
      case 'extra': return 'エクストラ';
      default: return '';
    }
  };
  
  if (!currentQuestion) {
    return (
      <div className="flex items-center justify-center h-64">
        <p className="text-xl">問題を読み込み中...</p>
      </div>
    );
  }

  return (
    <div className={`fade-in min-h-[70vh] flex flex-col`}>
      {/* Game information header */}
      <div className={`${getModeBg()} bg-opacity-70 p-4 rounded-t-xl shadow-md`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-sm bg-purple-700 text-white px-2 py-1 rounded mr-2">
              {getDisplayMode()}
            </span>
            <span className="text-sm text-yellow-300">
              問題 {currentQuestionIndex + 1}/{questions.length}
            </span>
          </div>
          
          <div className="flex items-center space-x-4">
            {/* Lives remaining */}
            <div className="flex items-center">
              {Array.from({ length: gameState.remainingLives }).map((_, index) => (
                <Heart key={index} size={16} className="text-red-400 fill-red-400 mr-1" />
              ))}
              {Array.from({ length: gameOptions.lives - gameState.remainingLives }).map((_, index) => (
                <Heart key={index} size={16} className="text-gray-400 mr-1" />
              ))}
            </div>
            
            {/* Timer */}
            <div className="flex items-center">
              <Clock size={16} className="text-yellow-300 mr-1" />
              <span className={`text-sm ${timeLeft <= 5 ? 'text-red-400 font-bold' : 'text-yellow-300'}`}>
                {timeLeft}
              </span>
            </div>
            
            {/* Score */}
            <div className="flex items-center">
              <BarChart size={16} className="text-yellow-300 mr-1" />
              <span className="text-sm text-yellow-300">{gameState.score}</span>
            </div>
          </div>
        </div>
        
        {/* Progress bar */}
        <div className="w-full bg-gray-800 h-2 rounded-full mt-3 overflow-hidden">
          <div 
            className="bg-yellow-500 h-full rounded-full progress-bar" 
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
      </div>
      
      {/* Main question area */}
      <div className="flex-1 flex flex-col items-center justify-center p-8 bg-purple-900 bg-opacity-40 rounded-b-xl">
        {/* Question ID (small in corner) */}
        <div className="self-start">
          <span className="text-xs text-gray-400 opacity-50">ID: {currentQuestion.id}</span>
        </div>
        
        {/* Kanji display */}
        <div className={`kanji-display mb-8 text-center ${showFeedback === 'correct' ? 'text-green-300' : showFeedback === 'incorrect' ? 'text-red-400' : 'text-white'}`}>
          {currentQuestion.kanji}
        </div>
        
        {/* Input form */}
        <form onSubmit={handleSubmit} className="w-full max-w-md">
          <div className="relative">
            <input
              ref={inputRef}
              type="text"
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              className={`answer-input w-full px-4 py-3 rounded-lg text-xl text-center focus:outline-none ${
                showFeedback === 'correct' 
                  ? 'bg-green-700 border-green-500' 
                  : showFeedback === 'incorrect' 
                    ? 'bg-red-700 border-red-500' 
                    : ''
              }`}
              placeholder="読みを入力..."
              autoComplete="off"
              disabled={gameState.isComplete}
            />
            
            <button
              type="submit"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-yellow-500 hover:bg-yellow-400 text-purple-900 font-bold py-1 px-4 rounded-md"
            >
              回答
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MainGame;