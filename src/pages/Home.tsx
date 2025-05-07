import React from 'react';
import { Star, AlertTriangle, Zap, User, Award } from 'lucide-react';
import { useGame } from '../contexts/GameContext';

interface HomeProps {
  setRoute: (route: string) => void;
}

const Home: React.FC<HomeProps> = ({ setRoute }) => {
  const { gameOptions } = useGame();

  return (
    <div className="flex flex-col items-center animate-fadeIn fade-in">
      <div className="bg-purple-800 bg-opacity-50 p-6 rounded-xl shadow-lg max-w-3xl w-full mb-8">
        <h2 className="text-3xl font-bold mb-4 text-center text-yellow-300">
          ようこそ、漢字でGO!へ
        </h2>
        <p className="text-lg mb-6 text-center text-yellow-100">
          様々な漢字の読み方を答えて、あなたの漢字力を試してみませんか？
        </p>
        
        <div className="flex flex-col gap-4 mb-8">
          <div className="flex items-center gap-3">
            <Star className="text-yellow-300 flex-shrink-0" size={24} />
            <div>
              <h3 className="font-bold text-yellow-200">4つのゲームモード</h3>
              <p className="text-purple-100">メイン、カジュアル、ラッシュ、エクストラで様々な遊び方</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <AlertTriangle className="text-red-300 flex-shrink-0" size={24} />
            <div>
              <h3 className="font-bold text-yellow-200">難易度設定</h3>
              <p className="text-purple-100">漢検10級から1級、さらにその先まで！</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <Zap className="text-blue-300 flex-shrink-0" size={24} />
            <div>
              <h3 className="font-bold text-yellow-200">様々なステージとテーマ</h3>
              <p className="text-purple-100">
                {gameOptions.isTimeWarpUnlocked 
                  ? 'オリジナル、アクア、スカイ、そしてタイムワープ！' 
                  : 'オリジナル、アクア、スカイ、そして？（メインモードを3回クリアで解禁）'}
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <User className="text-green-300 flex-shrink-0" size={24} />
            <div>
              <h3 className="font-bold text-yellow-200">ランク制度</h3>
              <p className="text-purple-100">GOパワーを集めて漢字マスターを目指そう！</p>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center">
          <button
            onClick={() => setRoute('modeSelect')}
            className="game-button bg-yellow-500 hover:bg-yellow-400 text-purple-900 font-bold py-3 px-8 rounded-xl shadow-md pulse"
          >
            <Award className="inline-block mr-2" size={20} />
            ゲームを始める
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl">
        <div className="bg-purple-800 bg-opacity-50 p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-2 text-yellow-300">プレイ記録</h3>
          <p className="text-purple-100">メインモードクリア: {gameOptions.mainCompletions}回</p>
          <p className="text-purple-100">獲得GOパワー: {localStorage.getItem('goPower') || 0}</p>
          <p className="text-purple-100">
            解放ステージ: {gameOptions.isTimeWarpUnlocked ? '全ステージ' : '3/4ステージ'}
          </p>
        </div>
        
        <div className="bg-purple-800 bg-opacity-50 p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-2 text-yellow-300">ヒント</h3>
          <p className="text-purple-100">
            難易度が上がるほど、獲得できるGOパワーも増えます。チャレンジしてみよう！
          </p>
          <p className="text-purple-100 mt-2">
            {gameOptions.isTimeWarpUnlocked 
              ? 'おめでとう！すべてのステージが解放されました！' 
              : 'メインモードを3回クリアすると、隠しステージが解放されます！'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;