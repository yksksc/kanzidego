import React, { createContext, useContext, useState, useEffect } from 'react';
import { KanjiQuestion, GameMode, GameState, GameOptions, GameResults } from '../types/game';
import { getQuestions } from '../utils/questionGenerator';

interface GameContextType {
  gameState: GameState;
  gameOptions: GameOptions;
  questions: KanjiQuestion[];
  currentQuestionIndex: number;
  results: GameResults;
  goPower: number;
  timeLeft: number;
  setGameMode: (mode: GameMode) => void;
  setGameOptions: (options: Partial<GameOptions>) => void;
  startGame: () => void;
  submitAnswer: (answer: string) => void;
  nextQuestion: () => void;
  resetGame: () => void;
  unlockTimeWarp: () => void;
}

const defaultGameOptions: GameOptions = {
  mode: 'main',
  difficulty: 'normal',
  questionCount: 10,
  stage: 'original',
  lives: 3,
  timeLimit: 30,
  category: 'all',
  isTimeWarpUnlocked: false,
  mainCompletions: 0,
};

const defaultGameState: GameState = {
  isActive: false,
  isComplete: false,
  currentStage: 1,
  remainingLives: 3,
  score: 0,
};

const defaultResults: GameResults = {
  correctCount: 0,
  incorrectCount: 0,
  timeElapsed: 0,
  score: 0,
};

const GameContext = createContext<GameContextType | undefined>(undefined);

export const GameProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [gameState, setGameState] = useState<GameState>(defaultGameState);
  const [gameOptions, setGameOptions] = useState<GameOptions>(defaultGameOptions);
  const [questions, setQuestions] = useState<KanjiQuestion[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [results, setResults] = useState<GameResults>(defaultResults);
  const [goPower, setGoPower] = useState<number>(0);
  const [timeLeft, setTimeLeft] = useState<number>(defaultGameOptions.timeLimit);
  
  // Load saved data from localStorage
  useEffect(() => {
    const savedGoPower = localStorage.getItem('goPower');
    const savedTimeWarpUnlocked = localStorage.getItem('timeWarpUnlocked');
    const savedMainCompletions = localStorage.getItem('mainCompletions');
    
    if (savedGoPower) {
      setGoPower(parseInt(savedGoPower, 10));
    }
    
    if (savedTimeWarpUnlocked === 'true') {
      setGameOptions(prev => ({ ...prev, isTimeWarpUnlocked: true }));
    }
    
    if (savedMainCompletions) {
      setGameOptions(prev => ({ ...prev, mainCompletions: parseInt(savedMainCompletions, 10) }));
    }
  }, []);
  
  // Timer effect
  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;
    
    if (gameState.isActive && !gameState.isComplete && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            clearInterval(timer as NodeJS.Timeout);
            // Auto-submit wrong answer on timeout
            handleIncorrectAnswer();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [gameState.isActive, gameState.isComplete, timeLeft]);

  const setGameMode = (mode: GameMode) => {
    setGameOptions(prev => ({ ...prev, mode }));
  };

  const updateGameOptions = (options: Partial<GameOptions>) => {
    setGameOptions(prev => ({ ...prev, ...options }));
  };

  const startGame = () => {
    // Generate questions based on options
    const newQuestions = getQuestions(gameOptions);
    setQuestions(newQuestions);
    setCurrentQuestionIndex(0);
    setTimeLeft(gameOptions.timeLimit);
    
    setGameState({
      isActive: true,
      isComplete: false,
      currentStage: 1,
      remainingLives: gameOptions.lives,
      score: 0,
    });
    
    setResults({
      correctCount: 0,
      incorrectCount: 0,
      timeElapsed: 0,
      score: 0,
    });
  };

  const handleCorrectAnswer = () => {
    // Calculate score based on time left and difficulty
    const difficultyMultiplier = {
      'normal': 1,
      'hard': 1.5,
      'extreme': 2,
      'hell': 3,
    }[gameOptions.difficulty] || 1;
    
    const timeBonus = Math.floor(timeLeft * 0.5);
    const questionScore = 100 + timeBonus;
    const totalScore = Math.floor(questionScore * difficultyMultiplier);
    
    // Update results
    setResults(prev => ({
      ...prev,
      correctCount: prev.correctCount + 1,
      score: prev.score + totalScore,
    }));
    
    // Update game state
    setGameState(prev => ({
      ...prev,
      score: prev.score + totalScore,
    }));
    
    // Increase GO Power based on difficulty and mode
    const powerIncrease = calculatePowerIncrease();
    setGoPower(prev => {
      const newPower = prev + powerIncrease;
      localStorage.setItem('goPower', newPower.toString());
      return newPower;
    });
  };

  const handleIncorrectAnswer = () => {
    setResults(prev => ({
      ...prev,
      incorrectCount: prev.incorrectCount + 1,
    }));
    
    setGameState(prev => {
      const newLives = prev.remainingLives - 1;
      const isGameOver = newLives <= 0;
      
      return {
        ...prev,
        remainingLives: newLives,
        isComplete: isGameOver,
      };
    });
  };

  const submitAnswer = (answer: string) => {
    if (!gameState.isActive || gameState.isComplete) return;
    
    const currentQuestion = questions[currentQuestionIndex];
    const isCorrect = Array.isArray(currentQuestion.reading) 
      ? currentQuestion.reading.includes(answer)
      : currentQuestion.reading === answer;
    
    if (isCorrect) {
      handleCorrectAnswer();
    } else {
      handleIncorrectAnswer();
    }
    
    // Move to next question automatically
    if (gameState.remainingLives > 1 || isCorrect) {
      nextQuestion();
    }
  };

  const nextQuestion = () => {
    if (currentQuestionIndex >= questions.length - 1) {
      // Complete the game if this was the last question
      setGameState(prev => ({ ...prev, isComplete: true }));
      
      // If it's main mode and player completed all questions, increment completion counter
      if (gameOptions.mode === 'main' && results.incorrectCount === 0) {
        const newCompletions = gameOptions.mainCompletions + 1;
        setGameOptions(prev => ({ ...prev, mainCompletions: newCompletions }));
        localStorage.setItem('mainCompletions', newCompletions.toString());
        
        // Check if Time Warp should be unlocked
        if (newCompletions >= 3 && !gameOptions.isTimeWarpUnlocked) {
          unlockTimeWarp();
        }
      }
    } else {
      setCurrentQuestionIndex(prev => prev + 1);
      setTimeLeft(gameOptions.timeLimit);
    }
  };

  const resetGame = () => {
    setGameState(defaultGameState);
    setCurrentQuestionIndex(0);
    setResults(defaultResults);
    setTimeLeft(gameOptions.timeLimit);
  };

  const unlockTimeWarp = () => {
    setGameOptions(prev => ({ ...prev, isTimeWarpUnlocked: true }));
    localStorage.setItem('timeWarpUnlocked', 'true');
  };

  const calculatePowerIncrease = () => {
    const baseIncrease = 10;
    const difficultyMultiplier = {
      'normal': 1,
      'hard': 1.5,
      'extreme': 2.5,
      'hell': 4,
    }[gameOptions.difficulty] || 1;
    
    const modeMultiplier = {
      'main': 1.2,
      'casual': 1,
      'rush': 0.8,
      'extra': 1.1,
    }[gameOptions.mode] || 1;
    
    return Math.floor(baseIncrease * difficultyMultiplier * modeMultiplier);
  };

  return (
    <GameContext.Provider
      value={{
        gameState,
        gameOptions,
        questions,
        currentQuestionIndex,
        results,
        goPower,
        timeLeft,
        setGameMode,
        setGameOptions: updateGameOptions,
        startGame,
        submitAnswer,
        nextQuestion,
        resetGame,
        unlockTimeWarp,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => {
  const context = useContext(GameContext);
  if (context === undefined) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
};