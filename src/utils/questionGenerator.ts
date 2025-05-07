import { KanjiQuestion, GameOptions, Category, ExtraMode } from '../types/game';
import kanjiData from '../data/kanjiData';
import extraData from '../data/extraData';

// Get questions based on game options
export const getQuestions = (options: GameOptions): KanjiQuestion[] => {
  let questions: KanjiQuestion[] = [];
  
  if (options.mode === 'extra') {
    questions = getExtraQuestions(options);
  } else {
    questions = getKanjiQuestions(options);
  }
  
  // Limit to requested question count
  return questions.slice(0, options.questionCount);
};

// Get kanji questions for main, casual, and rush modes
const getKanjiQuestions = (options: GameOptions): KanjiQuestion[] => {
  const { mode, difficulty, category } = options;
  
  // Define level ranges based on difficulty
  const levelRanges = {
    'normal': [1, 4],
    'hard': [2, 5],
    'extreme': [3, 6], 
    'hell': [4, 7]
  };
  
  // Get min and max levels based on difficulty
  const [minLevel, maxLevel] = levelRanges[difficulty] || [1, 4];
  
  // Filter kanji by level
  let filteredKanji = kanjiData.filter(
    kanji => kanji.level >= minLevel && kanji.level <= maxLevel
  );
  
  // Apply additional filtering for casual mode categories
  if (mode === 'casual' && category !== 'all') {
    filteredKanji = filteredKanji.filter(kanji => 
      kanji.category && kanji.category.includes(getCategoryString(category))
    );
  } 
  
  // For rush mode, filter by exact level
  if (mode === 'rush') {
    // Rush mode uses a specific level, defaults to the lower end of the range
    const rushLevel = minLevel;
    filteredKanji = kanjiData.filter(kanji => kanji.level === rushLevel);
  }
  
  // Randomize questions
  return shuffleArray(filteredKanji);
};

// Get questions for extra mode
const getExtraQuestions = (options: GameOptions): KanjiQuestion[] => {
  const { extraMode } = options;
  
  if (!extraMode) {
    return [];
  }
  
  return shuffleArray(extraData[extraMode]);
};

// Helper to convert category enum to string for filtering
const getCategoryString = (category: Category): string => {
  const categoryMap: Record<Category, string> = {
    'all': '',
    'basic': 'basic',
    'variety': 'variety',
    'extremeVariety': 'extremeVariety',
    'singleCharacter': 'singleCharacter',
    'fourCharacterIdiom': 'fourCharacterIdiom',
    'countryCity': 'countryCity',
    'insect': 'insect',
    'mammal': 'mammal',
    'bird': 'bird',
    'aquaticLife': 'aquaticLife',
    'plant': 'plant',
    'food': 'food'
  };
  
  return categoryMap[category] || '';
};

// Fisher-Yates shuffle algorithm
const shuffleArray = <T>(array: T[]): T[] => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};