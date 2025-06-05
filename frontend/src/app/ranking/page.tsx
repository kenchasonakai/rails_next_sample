'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function RankingPage() {
  // モックランキングデータ：実際のアプリでは API から取得
  const barRankings = [
    {
      rank: 1,
      id: 3,
      name: 'Matrix Lounge',
      rating: 4.9,
      reviewCount: 312,
      category: 'テーマバー',
      area: '六本木',
      change: 0, // 前回からの順位変動
      image: '/tatemono_bar.png',
      description: 'サイバーパンクテーマの最高峰',
      monthlyScore: 98.5
    },
    {
      rank: 2,
      id: 1,
      name: 'Cyber Bar TOKYO',
      rating: 4.8,
      reviewCount: 245,
      category: 'カクテルバー',
      area: '渋谷',
      change: 1, // 1つ順位アップ
      image: '/tatemono_bar.png',
      description: 'ARカクテル体験の先駆者',
      monthlyScore: 96.3
    },
    {
      rank: 3,
      id: 2,
      name: 'Electric Dreams',
      rating: 4.6,
      reviewCount: 189,
      category: 'ラウンジバー',
      area: '新宿',
      change: -1, // 1つ順位ダウン
      image: '/tatemono_bar.png',
      description: 'エレクトロミュージックの聖地',
      monthlyScore: 93.7
    },
    {
      rank: 4,
      id: 4,
      name: 'Neon Heights',
      rating: 4.7,
      reviewCount: 156,
      category: 'スカイバー',
      area: '東京駅',
      change: 2,
      image: '/tatemono_bar.png',
      description: '夜景とネオンの絶景バー',
      monthlyScore: 91.8
    },
    {
      rank: 5,
      id: 5,
      name: 'Digital Underground',
      rating: 4.5,
      reviewCount: 98,
      category: 'アンダーグラウンド',
      area: '秋葉原',
      change: 0,
      image: '/tatemono_bar.png',
      description: '隠れたサイバーパンクの聖地',
      monthlyScore: 89.2
    }
  ];

  const cocktailRankings = [
    {
      rank: 1,
      name: 'Neo Martini',
      barName: 'Matrix Lounge',
      barId: 3,
      price: '¥3,000',
      rating: 4.9,
      orderCount: 156,
      change: 0,
      description: '最高級のプレミアムマティーニ',
      image: '/tatemono_bar.png'
    },
    {
      rank: 2,
      name: 'Neon Genesis',
      barName: 'Cyber Bar TOKYO',
      barId: 1,
      price: '¥1,800',
      rating: 4.8,
      orderCount: 203,
      change: 1,
      description: 'ブルーキュラソーとウォッカのネオンカクテル',
      image: '/tatemono_bar.png'
    },
    {
      rank: 3,
      name: 'Electric Blue',
      barName: 'Electric Dreams',
      barId: 2,
      price: '¥1,500',
      rating: 4.7,
      orderCount: 187,
      change: -1,
      description: 'エレクトリックブルーのシグネチャーカクテル',
      image: '/tatemono_bar.png'
    },
    {
      rank: 4,
      name: 'Red Pill',
      barName: 'Matrix Lounge',
      barId: 3,
      price: '¥2,500',
      rating: 4.8,
      orderCount: 134,
      change: 0,
      description: '真実を見せる赤いカクテル',
      image: '/tatemono_bar.png'
    },
    {
      rank: 5,
      name: 'Cyber Punch',
      barName: 'Cyber Bar TOKYO',
      barId: 1,
      price: '¥2,200',
      rating: 4.6,
      orderCount: 98,
      change: 2,
      description: 'フルーツミックスの光るパンチ',
      image: '/tatemono_bar.png'
    }
  ];

  const reviewerRankings = [
    {
      rank: 1,
      username: 'Tokyo_Mixer',
      avatar: 'T',
      reviewCount: 45,
      totalLikes: 1203,
      avgRating: 4.3,
      change: 0,
      badgeColor: 'neon-pink',
      level: 'マスターレビュアー'
    },
    {
      rank: 2,
      username: 'Cyber_Explorer',
      avatar: 'C',
      reviewCount: 38,
      totalLikes: 987,
      avgRating: 4.5,
      change: 1,
      badgeColor: 'neon-cyan',
      level: 'エキスパート'
    },
    {
      rank: 3,
      username: 'Neon_Walker',
      avatar: 'N',
      reviewCount: 52,
      totalLikes: 856,
      avgRating: 4.1,
      change: -1,
      badgeColor: 'neon-orange',
      level: 'エキスパート'
    },
    {
      rank: 4,
      username: 'Digital_Nomad',
      avatar: 'D',
      reviewCount: 29,
      totalLikes: 743,
      avgRating: 4.6,
      change: 2,
      badgeColor: 'neon-blue',
      level: 'アドバンス'
    },
    {
      rank: 5,
      username: 'Future_Drinker',
      avatar: 'F',
      reviewCount: 33,
      totalLikes: 692,
      avgRating: 4.2,
      change: 0,
      badgeColor: 'neon-cyan',
      level: 'アドバンス'
    }
  ];

  const [activeTab, setActiveTab] = React.useState('bars');

  const getRankChangeIcon = (change: number) => {
    if (change > 0) {
      return <span className="text-neon-cyan">↑{change}</span>;
    } else if (change < 0) {
      return <span className="text-neon-orange">↓{Math.abs(change)}</span>;
    } else {
      return <span className="text-gray-500">-</span>;
    }
  };

  const getRankMedal = (rank: number) => {
    switch (rank) {
      case 1:
        return <span className="text-yellow-400 text-2xl">🥇</span>;
      case 2:
        return <span className="text-gray-300 text-2xl">🥈</span>;
      case 3:
        return <span className="text-yellow-600 text-2xl">🥉</span>;
      default:
        return <span className="text-neon-cyan font-bold text-xl">{rank}</span>;
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-neon-pink glow-neon-pink">RANKING</span>
            <span className="text-neon-orange ml-4">ARENA</span>
          </h1>
          <p className="text-gray-300 text-lg">
            サイバーシティの頂点を決める戦場
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-gray-900 border border-neon-blue rounded-lg p-2 flex">
            <button
              onClick={() => setActiveTab('bars')}
              className={`px-6 py-3 rounded-lg font-bold transition-all ${
                activeTab === 'bars'
                  ? 'bg-neon-blue text-cyber-black glow-neon-blue'
                  : 'text-neon-blue hover:bg-gray-800'
              }`}
            >
              バーランキング
            </button>
            <button
              onClick={() => setActiveTab('cocktails')}
              className={`px-6 py-3 rounded-lg font-bold transition-all ${
                activeTab === 'cocktails'
                  ? 'bg-neon-cyan text-cyber-black glow-neon-cyan'
                  : 'text-neon-cyan hover:bg-gray-800'
              }`}
            >
              カクテルランキング
            </button>
            <button
              onClick={() => setActiveTab('reviewers')}
              className={`px-6 py-3 rounded-lg font-bold transition-all ${
                activeTab === 'reviewers'
                  ? 'bg-neon-pink text-cyber-black glow-neon-pink'
                  : 'text-neon-pink hover:bg-gray-800'
              }`}
            >
              レビュアーランキング
            </button>
          </div>
        </div>

        {/* Bar Rankings */}
        {activeTab === 'bars' && (
          <div className="space-y-4">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-neon-blue mb-2">今月のバーランキング</h2>
              <p className="text-gray-400">評価、レビュー数、人気度を総合したスコア</p>
            </div>
            
            {barRankings.map((bar) => (
              <div key={bar.id} className="bg-gray-900 border border-neon-blue rounded-lg p-6 hover:glow-neon-blue transition-all">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex items-center justify-center w-16 h-16 mr-6">
                      {getRankMedal(bar.rank)}
                    </div>
                    
                    <div className="w-20 h-20 mr-6">
                      <Image
                        src={bar.image}
                        alt={bar.name}
                        width={80}
                        height={80}
                        className="w-full h-full object-cover rounded border border-neon-cyan"
                      />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <Link href={`/bars/${bar.id}`} className="text-xl font-bold text-neon-cyan hover:text-neon-pink transition-colors mr-4">
                          {bar.name}
                        </Link>
                        <span className="bg-neon-pink text-cyber-black px-2 py-1 rounded-full text-xs font-bold mr-2">
                          {bar.category}
                        </span>
                        <span className="bg-neon-orange text-cyber-black px-2 py-1 rounded-full text-xs font-bold">
                          {bar.area}
                        </span>
                      </div>
                      
                      <p className="text-gray-300 mb-2">{bar.description}</p>
                      
                      <div className="flex items-center">
                        <div className="flex text-neon-orange mr-3">
                          {'★'.repeat(Math.floor(bar.rating))}
                          {bar.rating % 1 !== 0 && '☆'}
                        </div>
                        <span className="text-neon-cyan font-bold mr-1">{bar.rating}</span>
                        <span className="text-gray-400 text-sm mr-4">({bar.reviewCount}件)</span>
                        <span className="text-neon-pink font-bold">スコア: {bar.monthlyScore}</span>
                      </div>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="text-sm text-gray-400 mb-1">前回から</div>
                    <div className="text-lg">{getRankChangeIcon(bar.change)}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Cocktail Rankings */}
        {activeTab === 'cocktails' && (
          <div className="space-y-4">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-neon-cyan mb-2">今月のカクテルランキング</h2>
              <p className="text-gray-400">注文数、評価、人気度を総合したランキング</p>
            </div>
            
            {cocktailRankings.map((cocktail) => (
              <div key={cocktail.rank} className="bg-gray-900 border border-neon-cyan rounded-lg p-6 hover:glow-neon-cyan transition-all">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex items-center justify-center w-16 h-16 mr-6">
                      {getRankMedal(cocktail.rank)}
                    </div>
                    
                    <div className="w-20 h-20 mr-6">
                      <Image
                        src={cocktail.image}
                        alt={cocktail.name}
                        width={80}
                        height={80}
                        className="w-full h-full object-cover rounded border border-neon-pink"
                      />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <h3 className="text-xl font-bold text-neon-pink mr-4">{cocktail.name}</h3>
                        <span className="text-neon-orange font-bold text-lg">{cocktail.price}</span>
                      </div>
                      
                      <div className="flex items-center mb-2">
                        <Link href={`/bars/${cocktail.barId}`} className="text-neon-cyan hover:text-neon-orange transition-colors mr-3">
                          {cocktail.barName}
                        </Link>
                        <div className="flex text-neon-orange text-sm mr-2">
                          {'★'.repeat(Math.floor(cocktail.rating))}
                        </div>
                        <span className="text-neon-cyan text-sm">{cocktail.rating}</span>
                      </div>
                      
                      <p className="text-gray-300 mb-2">{cocktail.description}</p>
                      <p className="text-sm text-gray-400">今月の注文数: <span className="text-neon-cyan font-bold">{cocktail.orderCount}回</span></p>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="text-sm text-gray-400 mb-1">前回から</div>
                    <div className="text-lg">{getRankChangeIcon(cocktail.change)}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Reviewer Rankings */}
        {activeTab === 'reviewers' && (
          <div className="space-y-4">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-neon-pink mb-2">今月のレビュアーランキング</h2>
              <p className="text-gray-400">レビュー数、いいね数、評価の質を総合</p>
            </div>
            
            {reviewerRankings.map((reviewer) => (
              <div key={reviewer.rank} className="bg-gray-900 border border-neon-pink rounded-lg p-6 hover:glow-neon-pink transition-all">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex items-center justify-center w-16 h-16 mr-6">
                      {getRankMedal(reviewer.rank)}
                    </div>
                    
                    <div className={`w-16 h-16 bg-${reviewer.badgeColor} rounded-full flex items-center justify-center mr-6`}>
                      <span className="text-cyber-black font-bold text-2xl">{reviewer.avatar}</span>
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <h3 className="text-xl font-bold text-neon-cyan mr-4">{reviewer.username}</h3>
                        <span className={`bg-${reviewer.badgeColor} text-cyber-black px-3 py-1 rounded-full text-sm font-bold`}>
                          {reviewer.level}
                        </span>
                      </div>
                      
                      <div className="grid grid-cols-3 gap-4 text-sm">
                        <div>
                          <span className="text-gray-400">レビュー数:</span>
                          <span className="text-neon-orange font-bold ml-1">{reviewer.reviewCount}</span>
                        </div>
                        <div>
                          <span className="text-gray-400">総いいね:</span>
                          <span className="text-neon-pink font-bold ml-1">{reviewer.totalLikes}</span>
                        </div>
                        <div>
                          <span className="text-gray-400">平均評価:</span>
                          <span className="text-neon-cyan font-bold ml-1">{reviewer.avgRating}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="text-sm text-gray-400 mb-1">前回から</div>
                    <div className="text-lg">{getRankChangeIcon(reviewer.change)}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Ranking Info */}
        <div className="mt-12 bg-gray-900 border border-neon-orange rounded-lg p-6">
          <h3 className="text-xl font-bold text-neon-orange mb-4">ランキングについて</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div>
              <h4 className="text-neon-blue font-bold mb-2">バーランキング</h4>
              <p className="text-gray-300">
                評価、レビュー数、訪問者数、SNSでの言及数などを総合的に算出したスコアでランキングを決定しています。
              </p>
            </div>
            <div>
              <h4 className="text-neon-cyan font-bold mb-2">カクテルランキング</h4>
              <p className="text-gray-300">
                月間注文数、評価、レビューでの言及頻度、SNSでのシェア数を基にランキングを算出しています。
              </p>
            </div>
            <div>
              <h4 className="text-neon-pink font-bold mb-2">レビュアーランキング</h4>
              <p className="text-gray-300">
                レビューの質、いいね数、コメント数、フォロワー数などを総合してランキングを決定しています。
              </p>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-gray-700 text-center">
            <p className="text-gray-400 text-xs">※ランキングは毎月1日に更新されます</p>
          </div>
        </div>
      </div>
    </div>
  );
}
