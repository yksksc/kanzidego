export type GameMode = 'main' | 'casual' | 'rush' | 'extra';

export type Difficulty = 'normal' | 'hard' | 'extreme' | 'hell';

export type Stage = 'original' | 'aqua' | 'sky' | 'timeWarp';

export type Category = 
  | 'all' 
  | 'basic' 
  | 'variety' 
  | 'extremeVariety' 
  | 'singleCharacter' 
  | 'fourCharacterIdiom'
  | 'countryCity'
  | 'insect'
  | 'mammal'
  | 'bird'
  | 'aquaticLife'
  | 'plant'
  | 'food';

export type ExtraMode = 'numberAttack' | 'extremeNumberAttack' | 'englishAttack' | 'elementSymbol';

export interface KanjiQuestion {
  id: string;
  kanji: string;
  reading: string | string[];  // Multiple readings might be acceptable
  meaning?: string;
  level: number;  // 1-7
  category?: string[];
}

export interface GameOptions {
  mode: GameMode;
  difficulty: Difficulty;
  questionCount: number;
  stage: Stage;
  lives: number;
  timeLimit: number;
  category: Category;
  extraMode?: ExtraMode;
  isTimeWarpUnlocked: boolean;
  mainCompletions: number;
}

export interface GameState {
  isActive: boolean;
  isComplete: boolean;
  currentStage: number;
  remainingLives: number;
  score: number;
}

export interface GameResults {
  correctCount: number;
  incorrectCount: number;
  timeElapsed: number;
  score: number;
}

export interface UserProgress {
  goPower: number;
  rank: string;
  unlockedStages: Stage[];
  completedGames: {
    [key in GameMode]: number;
  };
}