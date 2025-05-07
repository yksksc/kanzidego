import React, { useState, useEffect } from 'react';
import { useGame } from '../contexts/GameContext';
import { Category, Difficulty, ExtraMode, Stage } from '../types/game';

interface GameOptionsProps {
  setRoute: (route: string) => void;
}

const GameOptions: React.FC<GameOptionsProps> = ({ setRoute }) => {
  const { gameOptions, setGameOptions, startGame } = useGame();
  
  // Local state for options
  const [selectedQuestionCount, setSelectedQuestionCount] = useState<number>(gameOptions.questionCount);
  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty>(gameOptions.difficulty);
  const [selectedStage, setSelectedStage] = useState<Stage>(gameOptions.stage);
  const [selectedCategory, setSelectedCategory] = useState<Category>(gameOptions.category);
  const [selectedExtraMode, setSelectedExtraMode] = useState<ExtraMode | undefined>(gameOptions.extraMode);
  
  // Dynamic title based on game mode
  const getTitleByMode = () => {
    switch (gameOptions.mode) {
      case 'main': return 'メインモード設定';
      case 'casual': return 'カジュアルモード設定';
      case 'rush': return 'ラッシュモード設定';
      case 'extra': return 'エクストラモード設定';
      default: return 'ゲーム設定';
    }
  };
  
  // Apply settings and start game
  const handleStartGame = () => {
    setGameOptions({
      questionCount: selectedQuestionCount,
      difficulty: selectedDifficulty,
      stage: selectedStage,
      category: selectedCategory,
      extraMode: selectedExtraMode,
    });
    
    startGame();
    setRoute('mainGame');
  };

  return (
    <div className="fade-in">
      <h2 className="text-3xl font-bold mb-6 text-center text-yellow-300">
        {getTitleByMode()}
      </h2>
      
      <div className="bg-purple-800 bg-opacity-50 p-6 rounded-xl shadow-lg max-w-2xl mx-auto">
        {/* Question count selection */}
        <div className="mb-6">
          <h3 className="text-xl font-bold mb-3 text-yellow-200">問題数</h3>
          <div className="flex gap-4 justify-center">
            {[7, 10, 16].map(count => (
              <button
                key={count}
                onClick={() => setSelectedQuestionCount(count)}
                className={`py-2 px-4 rounded-lg game-button ${
                  selectedQuestionCount === count
                    ? 'bg-yellow-500 text-purple-900 font-bold'
                    : 'bg-purple-700 text-white hover:bg-purple-600'
                }`}
              >
                {count}問
              </button>
            ))}
          </div>
        </div>
        
        {/* Difficulty selection - not shown for RUSH mode */}
        {gameOptions.mode !== 'rush' && (
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-3 text-yellow-200">難易度</h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {(['normal', 'hard', 'extreme', 'hell'] as Difficulty[]).map(diff => (
                <button
                  key={diff}
                  onClick={() => setSelectedDifficulty(diff)}
                  className={`py-2 px-4 rounded-lg game-button ${
                    selectedDifficulty === diff
                      ? 'bg-yellow-500 text-purple-900 font-bold'
                      : getDifficultyButtonColor(diff)
                  }`}
                >
                  {getDifficultyLabel(diff)}
                </button>
              ))}
            </div>
          </div>
        )}
        
        {/* Stage selection */}
        <div className="mb-6">
          <h3 className="text-xl font-bold mb-3 text-yellow-200">ステージ</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <StageOption 
              name="original"
              label="オリジナル"
              selected={selectedStage === 'original'}
              onSelect={() => setSelectedStage('original')}
              imageClass="from-indigo-900 to-purple-900"
            />
            <StageOption 
              name="aqua"
              label="アクア"
              selected={selectedStage === 'aqua'}
              onSelect={() => setSelectedStage('aqua')}
              imageClass="from-blue-900 to-cyan-700"
            />
            <StageOption 
              name="sky" 
              label="スカイ"
              selected={selectedStage === 'sky'}
              onSelect={() => setSelectedStage('sky')}
              imageClass="from-blue-700 to-blue-400"
            />
            <StageOption 
              name="timeWarp"
              label="タイムワープ"
              selected={selectedStage === 'timeWarp'}
              onSelect={() => setSelectedStage('timeWarp')}
              imageClass="from-orange-900 to-red-700"
              disabled={!gameOptions.isTimeWarpUnlocked}
              lockedMessage="メインモードを3回クリアで解禁"
            />
          </div>
        </div>
        
        {/* Category selection for Casual mode */}
        {gameOptions.mode === 'casual' && (
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-3 text-yellow-200">ジャンル</h3>
            <div className="grid grid-cols-2 gap-2">
              <CategoryButton 
                category="basic" 
                label="ベーシック" 
                selected={selectedCategory === 'basic'}
                onSelect={() => setSelectedCategory('basic')}
              />
              <CategoryButton 
                category="variety" 
                label="バラエティ" 
                selected={selectedCategory === 'variety'}
                onSelect={() => setSelectedCategory('variety')}
              />
              <CategoryButton 
                category="extremeVariety" 
                label="鬼・バラエティ" 
                selected={selectedCategory === 'extremeVariety'}
                onSelect={() => setSelectedCategory('extremeVariety')}
              />
              <CategoryButton 
                category="singleCharacter" 
                label="一文字" 
                selected={selectedCategory === 'singleCharacter'}
                onSelect={() => setSelectedCategory('singleCharacter')}
              />
              <CategoryButton 
                category="fourCharacterIdiom" 
                label="四字熟語" 
                selected={selectedCategory === 'fourCharacterIdiom'}
                onSelect={() => setSelectedCategory('fourCharacterIdiom')}
              />
              <CategoryButton 
                category="countryCity" 
                label="国・都市の名前" 
                selected={selectedCategory === 'countryCity'}
                onSelect={() => setSelectedCategory('countryCity')}
              />
              <CategoryButton 
                category="insect" 
                label="虫の名前" 
                selected={selectedCategory === 'insect'}
                onSelect={() => setSelectedCategory('insect')}
              />
              <CategoryButton 
                category="mammal" 
                label="哺乳類の名前" 
                selected={selectedCategory === 'mammal'}
                onSelect={() => setSelectedCategory('mammal')}
              />
              <CategoryButton 
                category="bird" 
                label="鳥の名前" 
                selected={selectedCategory === 'bird'}
                onSelect={() => setSelectedCategory('bird')}
              />
              <CategoryButton 
                category="aquaticLife" 
                label="水生生物の名前" 
                selected={selectedCategory === 'aquaticLife'}
                onSelect={() => setSelectedCategory('aquaticLife')}
              />
              <CategoryButton 
                category="plant" 
                label="植物の名前" 
                selected={selectedCategory === 'plant'}
                onSelect={() => setSelectedCategory('plant')}
              />
              <CategoryButton 
                category="food" 
                label="グルメ・調味料" 
                selected={selectedCategory === 'food'}
                onSelect={() => setSelectedCategory('food')}
              />
            </div>
          </div>
        )}
        
        {/* Extra Mode selection */}
        {gameOptions.mode === 'extra' && (
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-3 text-yellow-200">エクストラジャンル</h3>
            <div className="grid grid-cols-2 gap-3">
              <ExtraModeButton 
                mode="numberAttack" 
                label="数字アタック" 
                selected={selectedExtraMode === 'numberAttack'}
                onSelect={() => setSelectedExtraMode('numberAttack')}
              />
              <ExtraModeButton 
                mode="extremeNumberAttack" 
                label="鬼・数字アタック" 
                selected={selectedExtraMode === 'extremeNumberAttack'}
                onSelect={() => setSelectedExtraMode('extremeNumberAttack')}
              />
              <ExtraModeButton 
                mode="englishAttack" 
                label="英語アタック" 
                selected={selectedExtraMode === 'englishAttack'}
                onSelect={() => setSelectedExtraMode('englishAttack')}
              />
              <ExtraModeButton 
                mode="elementSymbol" 
                label="元素記号" 
                selected={selectedExtraMode === 'elementSymbol'}
                onSelect={() => setSelectedExtraMode('elementSymbol')}
              />
            </div>
          </div>
        )}
        
        {/* Action buttons */}
        <div className="flex justify-between mt-8">
          <button
            onClick={() => setRoute('modeSelect')}
            className="game-button bg-purple-700 hover:bg-purple-600 text-white py-2 px-6 rounded-lg shadow-md"
          >
            戻る
          </button>
          
          <button
            onClick={handleStartGame}
            className="game-button bg-yellow-500 hover:bg-yellow-400 text-purple-900 font-bold py-2 px-6 rounded-lg shadow-md"
          >
            ゲーム開始
          </button>
        </div>
      </div>
    </div>
  );
};

// Helper component for stage selection
interface StageOptionProps {
  name: Stage;
  label: string;
  selected: boolean;
  onSelect: () => void;
  imageClass: string;
  disabled?: boolean;
  lockedMessage?: string;
}

const StageOption: React.FC<StageOptionProps> = ({ 
  name, label, selected, onSelect, imageClass, disabled, lockedMessage 
}) => {
  return (
    <div 
      className={`stage-option rounded-lg overflow-hidden ${selected ? 'selected' : ''} 
                 ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
      onClick={() => !disabled && onSelect()}
    >
      <div className={`bg-gradient-to-b ${imageClass} h-20 flex items-center justify-center p-3 border-2 
                      ${selected ? 'border-yellow-400' : 'border-transparent'}`}>
        <span className="text-white font-bold text-center">
          {disabled ? '🔒' : label}
        </span>
      </div>
      {disabled && lockedMessage && (
        <div className="text-xs text-center mt-1 text-yellow-300">{lockedMessage}</div>
      )}
    </div>
  );
};

// Helper component for category buttons
interface CategoryButtonProps {
  category: Category;
  label: string;
  selected: boolean;
  onSelect: () => void;
}

const CategoryButton: React.FC<CategoryButtonProps> = ({ 
  category, label, selected, onSelect 
}) => {
  return (
    <button
      onClick={onSelect}
      className={`py-2 px-3 rounded-lg text-sm game-button ${
        selected
          ? 'bg-yellow-500 text-purple-900 font-bold'
          : 'bg-purple-700 text-white hover:bg-purple-600'
      }`}
    >
      {label}
    </button>
  );
};

// Helper component for extra mode buttons
interface ExtraModeButtonProps {
  mode: ExtraMode;
  label: string;
  selected: boolean;
  onSelect: () => void;
}

const ExtraModeButton: React.FC<ExtraModeButtonProps> = ({ 
  mode, label, selected, onSelect 
}) => {
  return (
    <button
      onClick={onSelect}
      className={`py-3 px-4 rounded-lg game-button ${
        selected
          ? 'bg-yellow-500 text-purple-900 font-bold'
          : 'bg-purple-700 text-white hover:bg-purple-600'
      }`}
    >
      {label}
    </button>
  );
};

// Helper function to get difficulty label
const getDifficultyLabel = (difficulty: Difficulty): string => {
  switch (difficulty) {
    case 'normal': return 'ノーマル';
    case 'hard': return 'ハード';
    case 'extreme': return 'ゲキムズ';
    case 'hell': return 'ヘル';
    default: return '';
  }
};

// Helper function to get button color based on difficulty
const getDifficultyButtonColor = (difficulty: Difficulty): string => {
  switch (difficulty) {
    case 'normal': return 'bg-green-700 text-white hover:bg-green-600';
    case 'hard': return 'bg-blue-700 text-white hover:bg-blue-600';
    case 'extreme': return 'bg-red-700 text-white hover:bg-red-600';
    case 'hell': return 'bg-gray-900 text-white hover:bg-gray-800';
    default: return 'bg-purple-700 text-white hover:bg-purple-600';
  }
};

export default GameOptions;