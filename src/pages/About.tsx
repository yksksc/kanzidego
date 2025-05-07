import React from 'react';
import { Info, Book, Target, Zap, HelpCircle } from 'lucide-react';

interface AboutProps {
  setRoute: (route: string) => void;
}

const About: React.FC<AboutProps> = ({ setRoute }) => {
  return (
    <div className="fade-in">
      <h2 className="text-3xl font-bold mb-6 text-center text-yellow-300">
        漢字でGO!について
      </h2>
      
      <div className="bg-purple-800 bg-opacity-50 p-6 rounded-xl shadow-lg max-w-3xl mx-auto">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Info size={24} className="text-yellow-300 flex-shrink-0" />
            <h3 className="text-xl font-bold text-yellow-200">ゲーム紹介</h3>
          </div>
          
          <p className="text-purple-100 mb-4">
            「漢字でGO!」は、次々と出題される漢字の読みを入力していき、全問正解を目指すことが目的のクイズゲームです。
          </p>
          
          <p className="text-purple-100">
            「メイン」「カジュアル」「ラッシュ」「エクストラ」の4種類のモードがあり、オプションでステージや残機、ジャンルの封印や入力猶予時間等を変えられます。
          </p>
        </div>
        
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Book size={24} className="text-yellow-300 flex-shrink-0" />
            <h3 className="text-xl font-bold text-yellow-200">漢字の難易度</h3>
          </div>
          
          <ul className="space-y-3 text-purple-100">
            <li>
              <span className="font-bold text-yellow-100">レベル1:</span> 漢検10～6級相当。小学校で習う漢字を中心に出題されます。
            </li>
            <li>
              <span className="font-bold text-yellow-100">レベル2:</span> 漢検5～3級相当。中学校で習う漢字が中心となります。
            </li>
            <li>
              <span className="font-bold text-yellow-100">レベル3:</span> 漢検3～2級相当。高校で習う漢字が中心となります。
            </li>
            <li>
              <span className="font-bold text-yellow-100">レベル4:</span> 漢検準1級相当。一般的にひらがなで書かれる物の漢字表記が多くを占めます。
            </li>
            <li>
              <span className="font-bold text-yellow-100">レベル5:</span> 漢検1級相当。難しい固有名詞や動詞等、ここから一気に難易度が跳ね上がります。
            </li>
            <li>
              <span className="font-bold text-yellow-100">レベル6:</span> 漢検配当外の漢字を中心に出題されます。古語や異体字等、日常生活においてまず見ることのない漢字が大部分を占めます。
            </li>
            <li>
              <span className="font-bold text-yellow-100">レベル7:</span> 漢検配当外漢字は勿論、想像を絶する国字や則天文字、チュノムや元素の漢字表記等、この世の物とは思えない漢字が出題されます。
            </li>
          </ul>
        </div>
        
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Target size={24} className="text-yellow-300 flex-shrink-0" />
            <h3 className="text-xl font-bold text-yellow-200">ゲームモード</h3>
          </div>
          
          <div className="space-y-5">
            <div>
              <h4 className="font-bold text-lg text-yellow-100 mb-2">メイン</h4>
              <p className="text-purple-100 mb-2">
                漢字でGO!の要となる、最大16問の漢字を解くモード。問題数は7、10、16問の中から選べます。
              </p>
              <p className="text-purple-100">
                難易度は「ノーマル」「ハード」「ゲキムズ」「ヘル」の４つから選択でき、難易度によって出題される漢字のレベルが変化します。
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-lg text-yellow-100 mb-2">カジュアル</h4>
              <p className="text-purple-100 mb-2">
                お題に沿ったテーマで最大16問の漢字を解くモード。様々なジャンルから選んでプレイできます。
              </p>
              <p className="text-purple-100">
                一部のジャンルではボーナス問題が挟まり、正解するとキャラクターが喜びます。
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-lg text-yellow-100 mb-2">ラッシュ</h4>
              <p className="text-purple-100 mb-2">
                全て同じレベルの漢字を最大16問連続で解くモード。1～6までのレベルから選択できます。
              </p>
              <p className="text-purple-100">
                ID確定機能で特定の漢字を練習することもできます。
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-lg text-yellow-100 mb-2">エクストラ</h4>
              <p className="text-purple-100 mb-2">
                漢字だけに囚われない問題を解くモード。
              </p>
              <p className="text-purple-100">
                「数字アタック」「鬼・数字アタック」「英語アタック」「元素記号」の4つから選べます。
              </p>
            </div>
          </div>
        </div>
        
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Zap size={24} className="text-yellow-300 flex-shrink-0" />
            <h3 className="text-xl font-bold text-yellow-200">GOパワー</h3>
          </div>
          
          <p className="text-purple-100 mb-2">
            ゲームをプレイし問題を解いていくとパワーが増え、高難度のモードほど溜まるパワーが増えます。
          </p>
          <p className="text-purple-100">
            溜まったパワーに応じて称号が変わっていきますが、特に報酬はありません。
          </p>
        </div>
        
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <HelpCircle size={24} className="text-yellow-300 flex-shrink-0" />
            <h3 className="text-xl font-bold text-yellow-200">ヒント</h3>
          </div>
          
          <ul className="space-y-2 text-purple-100">
            <li>「タイムワープ」ステージの解禁にはメインを3回クリアする必要があります。</li>
            <li>高いレベルの漢字には複数の読み方がある場合があります。</li>
            <li>答えがわからない場合は、その漢字のIDを覚えておいて後からラッシュモードで練習しましょう。</li>
            <li>難易度が高いほど獲得できるGOパワーも増えます。チャレンジしてみましょう！</li>
          </ul>
        </div>
        
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setRoute('home')}
            className="game-button bg-yellow-500 hover:bg-yellow-400 text-purple-900 font-bold py-3 px-6 rounded-lg shadow-md"
          >
            ホームへ戻る
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;