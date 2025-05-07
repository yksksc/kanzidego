import { KanjiQuestion } from '../types/game';

type ExtraModeData = {
  [key: string]: KanjiQuestion[];
};

// Sample data for Extra mode categories
const extraData: ExtraModeData = {
  // Number Attack - math calculation problems
  'numberAttack': [
    {
      id: "NA1001",
      kanji: "12 + 15 = ?",
      reading: "27",
      level: 1
    },
    {
      id: "NA1002",
      kanji: "45 - 18 = ?",
      reading: "27",
      level: 1
    },
    {
      id: "NA1003",
      kanji: "7 × 6 = ?",
      reading: "42",
      level: 1
    },
    {
      id: "NA1004",
      kanji: "64 ÷ 8 = ?",
      reading: "8",
      level: 1
    },
    {
      id: "NA1005",
      kanji: "? + 15 = 42",
      reading: "27",
      level: 2
    },
    {
      id: "NA1006",
      kanji: "13 × 4 - 10 = ?",
      reading: "42",
      level: 2
    },
    {
      id: "NA1007",
      kanji: "(8 + 7) × 3 = ?",
      reading: "45",
      level: 2
    },
    {
      id: "NA1008",
      kanji: "√144 = ?",
      reading: "12",
      level: 3
    },
    {
      id: "NA1009",
      kanji: "7² + 11 = ?",
      reading: "60",
      level: 3
    },
    {
      id: "NA1010",
      kanji: "120 ÷ (6 + 4) = ?",
      reading: "12",
      level: 3
    },
    {
      id: "NA1011",
      kanji: "√225 + 3² = ?",
      reading: "24",
      level: 4
    },
    {
      id: "NA1012",
      kanji: "15² ÷ 45 = ?",
      reading: "5",
      level: 4
    },
    {
      id: "NA1013",
      kanji: "144 ÷ 12 + 7 × 11 - 25 = ?",
      reading: "65",
      level: 5
    },
    {
      id: "NA1014",
      kanji: "√(5² + 12²) = ?",
      reading: "13",
      level: 6
    },
    {
      id: "NA1015",
      kanji: "23 × 7 + 19 × 3 - 41 = ?",
      reading: "175",
      level: 6
    }
  ],
  
  // Extreme Number Attack - math calculations with non-standard number representations
  'extremeNumberAttack': [
    {
      id: "ENA1001",
      kanji: "十二 + 十五 = ?",
      reading: "27",
      level: 2
    },
    {
      id: "ENA1002",
      kanji: "四十五 - 十八 = ?",
      reading: "27",
      level: 2
    },
    {
      id: "ENA1003",
      kanji: "七 × 六 = ?",
      reading: "42",
      level: 2
    },
    {
      id: "ENA1004",
      kanji: "六十四 ÷ 八 = ?",
      reading: "8",
      level: 2
    },
    {
      id: "ENA1005",
      kanji: "? + じゅうご = よんじゅうに",
      reading: "27",
      level: 3
    },
    {
      id: "ENA1006",
      kanji: "XIII × IV - X = ?",
      reading: "42",
      level: 3
    },
    {
      id: "ENA1007",
      kanji: "(VIII + VII) × III = ?",
      reading: "45",
      level: 3
    },
    {
      id: "ENA1008",
      kanji: "un + deux + trois + quatre = ?",
      reading: "10",
      level: 4
    },
    {
      id: "ENA1009",
      kanji: "七² + 十一 = ?",
      reading: "60",
      level: 4
    },
    {
      id: "ENA1010",
      kanji: "百二十 ÷ (六 + 四) = ?",
      reading: "12",
      level: 4
    }
  ],
  
  // English Attack - translate Japanese words to English
  'englishAttack': [
    {
      id: "EA1001",
      kanji: "犬 (4文字)",
      reading: "dog",
      level: 1
    },
    {
      id: "EA1002",
      kanji: "猫 (3文字)",
      reading: "cat",
      level: 1
    },
    {
      id: "EA1003",
      kanji: "本 (4文字)",
      reading: "book",
      level: 1
    },
    {
      id: "EA1004",
      kanji: "水 (5文字)",
      reading: "water",
      level: 1
    },
    {
      id: "EA1005",
      kanji: "コンピューター (8文字)",
      reading: "computer",
      level: 2
    },
    {
      id: "EA1006",
      kanji: "自動車 (3文字)",
      reading: "car",
      level: 2
    },
    {
      id: "EA1007",
      kanji: "電話 (5文字)",
      reading: "phone",
      level: 2
    },
    {
      id: "EA1008",
      kanji: "図書館 (7文字)",
      reading: "library",
      level: 3
    },
    {
      id: "EA1009",
      kanji: "大学 (10文字)",
      reading: "university",
      level: 3
    },
    {
      id: "EA1010",
      kanji: "天気予報 (8文字)",
      reading: "forecast",
      level: 4
    }
  ],
  
  // Element Symbol - periodic table element symbols
  'elementSymbol': [
    {
      id: "ES1001",
      kanji: "水素 (Hydrogen)",
      reading: "H",
      level: 1
    },
    {
      id: "ES1002",
      kanji: "酸素 (Oxygen)",
      reading: "O",
      level: 1
    },
    {
      id: "ES1003",
      kanji: "炭素 (Carbon)",
      reading: "C",
      level: 1
    },
    {
      id: "ES1004",
      kanji: "窒素 (Nitrogen)",
      reading: "N",
      level: 1
    },
    {
      id: "ES1005",
      kanji: "ナトリウム (Sodium)",
      reading: "Na",
      level: 2
    },
    {
      id: "ES1006",
      kanji: "カリウム (Potassium)",
      reading: "K",
      level: 2
    },
    {
      id: "ES1007",
      kanji: "カルシウム (Calcium)",
      reading: "Ca",
      level: 2
    },
    {
      id: "ES1008",
      kanji: "マグネシウム (Magnesium)",
      reading: "Mg",
      level: 2
    },
    {
      id: "ES1009",
      kanji: "金 (Gold)",
      reading: "Au",
      level: 3
    },
    {
      id: "ES1010",
      kanji: "銀 (Silver)",
      reading: "Ag",
      level: 3
    },
    {
      id: "ES1011",
      kanji: "鉄 (Iron)",
      reading: "Fe",
      level: 3
    },
    {
      id: "ES1012",
      kanji: "銅 (Copper)",
      reading: "Cu",
      level: 3
    },
    {
      id: "ES1013",
      kanji: "水銀 (Mercury)",
      reading: "Hg",
      level: 4
    },
    {
      id: "ES1014",
      kanji: "鉛 (Lead)",
      reading: "Pb",
      level: 4
    },
    {
      id: "ES1015",
      kanji: "タングステン (Tungsten)",
      reading: "W",
      level: 5
    }
  ]
};

export default extraData;