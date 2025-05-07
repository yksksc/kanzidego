import { KanjiQuestion } from '../types/game';

// Sample kanji data set - would be expanded in a real implementation
const kanjiData: KanjiQuestion[] = [
  {
    id: "1001",
    kanji: "山",
    reading: "やま",
    meaning: "mountain",
    level: 1,
    category: ["basic", "singleCharacter"]
  },
  {
    id: "1002",
    kanji: "川",
    reading: "かわ",
    meaning: "river",
    level: 1,
    category: ["basic", "singleCharacter"]
  },
  {
    id: "1003",
    kanji: "火",
    reading: "ひ",
    meaning: "fire",
    level: 1,
    category: ["basic", "singleCharacter"]
  },
  {
    id: "1004",
    kanji: "木",
    reading: "き",
    meaning: "tree",
    level: 1,
    category: ["basic", "singleCharacter"]
  },
  {
    id: "1005",
    kanji: "水",
    reading: "みず",
    meaning: "water",
    level: 1,
    category: ["basic", "singleCharacter"]
  },
  {
    id: "1006",
    kanji: "日本",
    reading: "にほん",
    meaning: "Japan",
    level: 1,
    category: ["basic", "countryCity"]
  },
  {
    id: "1007",
    kanji: "学校",
    reading: "がっこう",
    meaning: "school",
    level: 1,
    category: ["basic"]
  },
  {
    id: "1008",
    kanji: "友達",
    reading: "ともだち",
    meaning: "friend",
    level: 1,
    category: ["basic"]
  },
  {
    id: "1009",
    kanji: "食べる",
    reading: "たべる",
    meaning: "to eat",
    level: 1,
    category: ["basic", "food"]
  },
  {
    id: "1010",
    kanji: "見る",
    reading: "みる",
    meaning: "to see",
    level: 1,
    category: ["basic"]
  },
  {
    id: "2001",
    kanji: "複雑",
    reading: "ふくざつ",
    meaning: "complicated",
    level: 2,
    category: ["variety"]
  },
  {
    id: "2002",
    kanji: "重要",
    reading: "じゅうよう",
    meaning: "important",
    level: 2,
    category: ["variety"]
  },
  {
    id: "2003",
    kanji: "問題",
    reading: "もんだい",
    meaning: "problem",
    level: 2,
    category: ["variety"]
  },
  {
    id: "2004",
    kanji: "蜂",
    reading: "はち",
    meaning: "bee",
    level: 2,
    category: ["insect"]
  },
  {
    id: "2005",
    kanji: "猫",
    reading: "ねこ",
    meaning: "cat",
    level: 2,
    category: ["mammal"]
  },
  {
    id: "2006",
    kanji: "鳥",
    reading: "とり",
    meaning: "bird",
    level: 2,
    category: ["bird"]
  },
  {
    id: "2007",
    kanji: "魚",
    reading: "さかな",
    meaning: "fish",
    level: 2,
    category: ["aquaticLife"]
  },
  {
    id: "2008",
    kanji: "桜",
    reading: "さくら",
    meaning: "cherry blossom",
    level: 2,
    category: ["plant"]
  },
  {
    id: "2009",
    kanji: "味噌",
    reading: "みそ",
    meaning: "miso",
    level: 2,
    category: ["food"]
  },
  {
    id: "2010",
    kanji: "自由自在",
    reading: "じゆうじざい",
    meaning: "freely",
    level: 2,
    category: ["fourCharacterIdiom"]
  },
  {
    id: "3001",
    kanji: "憂鬱",
    reading: "ゆううつ",
    meaning: "depression",
    level: 3,
    category: ["variety"]
  },
  {
    id: "3002",
    kanji: "発揮",
    reading: "はっき",
    meaning: "demonstration",
    level: 3,
    category: ["variety"]
  },
  {
    id: "3003",
    kanji: "蜘蛛",
    reading: "くも",
    meaning: "spider",
    level: 3,
    category: ["insect"]
  },
  {
    id: "3004",
    kanji: "狐",
    reading: "きつね",
    meaning: "fox",
    level: 3,
    category: ["mammal"]
  },
  {
    id: "3005",
    kanji: "鷹",
    reading: "たか",
    meaning: "hawk",
    level: 3,
    category: ["bird"]
  },
  {
    id: "3006",
    kanji: "全力疾走",
    reading: "ぜんりょくしっそう",
    meaning: "running with all one's might",
    level: 3,
    category: ["fourCharacterIdiom"]
  },
  {
    id: "3007",
    kanji: "一期一会",
    reading: "いちごいちえ",
    meaning: "once-in-a-lifetime encounter",
    level: 3,
    category: ["fourCharacterIdiom"]
  },
  {
    id: "3008",
    kanji: "東京",
    reading: "とうきょう",
    meaning: "Tokyo",
    level: 3,
    category: ["countryCity"]
  },
  {
    id: "3009",
    kanji: "韓国",
    reading: "かんこく",
    meaning: "South Korea",
    level: 3,
    category: ["countryCity"]
  },
  {
    id: "3010",
    kanji: "醤油",
    reading: "しょうゆ",
    meaning: "soy sauce",
    level: 3,
    category: ["food"]
  },
  {
    id: "4001",
    kanji: "臆病",
    reading: "おくびょう",
    meaning: "cowardice",
    level: 4,
    category: ["variety"]
  },
  {
    id: "4002",
    kanji: "薔薇",
    reading: "ばら",
    meaning: "rose",
    level: 4,
    category: ["plant"]
  },
  {
    id: "4003",
    kanji: "鰐",
    reading: "わに",
    meaning: "crocodile",
    level: 4,
    category: ["aquaticLife"]
  },
  {
    id: "4004",
    kanji: "朝令暮改",
    reading: "ちょうれいぼかい",
    meaning: "changing plans frequently",
    level: 4,
    category: ["fourCharacterIdiom"]
  },
  {
    id: "4005",
    kanji: "四面楚歌",
    reading: "しめんそか",
    meaning: "surrounded by enemies",
    level: 4,
    category: ["fourCharacterIdiom"]
  },
  {
    id: "4006",
    kanji: "旗開恒拝",
    reading: "きかいつねひら",
    meaning: "raising the flag in reverence",
    level: 4,
    category: ["extremeVariety"]
  },
  {
    id: "4007",
    kanji: "枯れ萎れる",
    reading: "かれしおれる",
    meaning: "to wither completely",
    level: 4,
    category: ["extremeVariety"]
  },
  {
    id: "4008",
    kanji: "軍鶏",
    reading: "しゃも",
    meaning: "fighting cock",
    level: 4,
    category: ["bird"]
  },
  {
    id: "4009",
    kanji: "泰西",
    reading: "たいせい",
    meaning: "Western world",
    level: 4,
    category: ["countryCity"]
  },
  {
    id: "4010",
    kanji: "山椒",
    reading: "さんしょう",
    meaning: "Japanese pepper",
    level: 4,
    category: ["food"]
  },
  {
    id: "5001",
    kanji: "躊躇",
    reading: "ちゅうちょ",
    meaning: "hesitation",
    level: 5,
    category: ["extremeVariety"]
  },
  {
    id: "5002",
    kanji: "贔屓",
    reading: "ひいき",
    meaning: "favoritism",
    level: 5,
    category: ["extremeVariety"]
  },
  {
    id: "5003",
    kanji: "鸚鵡",
    reading: "おうむ",
    meaning: "parrot",
    level: 5,
    category: ["bird"]
  },
  {
    id: "5004",
    kanji: "馘首",
    reading: "かくしゅ",
    meaning: "beheading",
    level: 5,
    category: ["extremeVariety"]
  },
  {
    id: "5005",
    kanji: "羹に懲りて膾を吹く",
    reading: "あつものにこりてなますをふく",
    meaning: "once bitten, twice shy",
    level: 5,
    category: ["extremeVariety"]
  },
  {
    id: "5006",
    kanji: "朦朧",
    reading: "もうろう",
    meaning: "hazy",
    level: 5,
    category: ["extremeVariety"]
  },
  {
    id: "5007",
    kanji: "蜻蛉",
    reading: "とんぼ",
    meaning: "dragonfly",
    level: 5,
    category: ["insect"]
  },
  {
    id: "5008",
    kanji: "駱駝",
    reading: "らくだ",
    meaning: "camel",
    level: 5,
    category: ["mammal"]
  },
  {
    id: "5009",
    kanji: "亜細亜",
    reading: "あじあ",
    meaning: "Asia",
    level: 5,
    category: ["countryCity"]
  },
  {
    id: "5010",
    kanji: "欧羅巴",
    reading: "よーろっぱ",
    meaning: "Europe",
    level: 5,
    category: ["countryCity"]
  },
  {
    id: "6001",
    kanji: "鼕鼕",
    reading: "どうどう",
    meaning: "drumming sound",
    level: 6,
    category: ["extremeVariety"]
  },
  {
    id: "6002",
    kanji: "鸚鵡返し",
    reading: "おうむがえし",
    meaning: "parroting",
    level: 6,
    category: ["extremeVariety"]
  },
  {
    id: "6003",
    kanji: "貉",
    reading: "むじな",
    meaning: "badger",
    level: 6,
    category: ["mammal"]
  },
  {
    id: "6004",
    kanji: "蠢く",
    reading: "うごめく",
    meaning: "to squirm",
    level: 6,
    category: ["extremeVariety"]
  },
  {
    id: "6005",
    kanji: "疥癬",
    reading: "かいせん",
    meaning: "scabies",
    level: 6,
    category: ["extremeVariety"]
  },
  {
    id: "6006",
    kanji: "鼈甲",
    reading: "べっこう",
    meaning: "tortoiseshell",
    level: 6,
    category: ["extremeVariety"]
  },
  {
    id: "6007",
    kanji: "梔子",
    reading: "くちなし",
    meaning: "gardenia",
    level: 6,
    category: ["plant"]
  },
  {
    id: "6008",
    kanji: "杢目",
    reading: "もくめ",
    meaning: "wood grain",
    level: 6,
    category: ["extremeVariety"]
  },
  {
    id: "6009",
    kanji: "蝙蝠",
    reading: "こうもり",
    meaning: "bat",
    level: 6,
    category: ["mammal"]
  },
  {
    id: "6010",
    kanji: "独逸",
    reading: "どいつ",
    meaning: "Germany",
    level: 6,
    category: ["countryCity"]
  },
  {
    id: "7001",
    kanji: "鶺鴒",
    reading: "せきれい",
    meaning: "wagtail",
    level: 7,
    category: ["bird"]
  },
  {
    id: "7002",
    kanji: "甑",
    reading: "こしき",
    meaning: "rice steamer",
    level: 7,
    category: ["food"]
  },
  {
    id: "7003",
    kanji: "囀る",
    reading: "さえずる",
    meaning: "to chirp",
    level: 7,
    category: ["extremeVariety"]
  },
  {
    id: "7004",
    kanji: "暲朓",
    reading: "ほうとう",
    meaning: "bright and clear",
    level: 7,
    category: ["extremeVariety"]
  },
  {
    id: "7005",
    kanji: "蠏",
    reading: "かに",
    meaning: "crab",
    level: 7,
    category: ["aquaticLife"]
  },
  {
    id: "7006",
    kanji: "饒速日命",
    reading: "にぎはやひのみこと",
    meaning: "Japanese deity",
    level: 7,
    category: ["extremeVariety"]
  },
  {
    id: "7007",
    kanji: "葭切",
    reading: "よしきり",
    meaning: "reed warbler",
    level: 7,
    category: ["bird"]
  },
  {
    id: "7008",
    kanji: "糴る",
    reading: "かう",
    meaning: "to buy rice",
    level: 7,
    category: ["extremeVariety"]
  },
  {
    id: "7009",
    kanji: "玉蜀黍",
    reading: "とうもろこし",
    meaning: "corn",
    level: 7,
    category: ["food"]
  },
  {
    id: "7010",
    kanji: "亜米利加",
    reading: "あめりか",
    meaning: "America",
    level: 7,
    category: ["countryCity"]
  }
];

export default kanjiData;