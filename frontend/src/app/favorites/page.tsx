'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface FavoriteBar {
  id: string;
  name: string;
  category: string;
  rating: number;
  image: string;
  description: string;
  address: string;
  priceRange: string;
  tags: string[];
  addedDate: string;
}

export default function FavoritesPage() {
  const [sortBy, setSortBy] = useState<'newest' | 'oldest' | 'rating' | 'name'>('newest');
  const [filterBy, setFilterBy] = useState<'all' | 'theme' | 'cocktail' | 'sky' | 'underground'>('all');

  // モックお気に入りデータ
  const favoritesList: FavoriteBar[] = [
    {
      id: 'matrix-lounge',
      name: 'Matrix Lounge',
      category: 'テーマバー',
      rating: 4.8,
      image: '/tatemono_bar.png',
      description: 'サイバーパンクの世界観を完全再現した未来的なラウンジ',
      address: '渋谷区道玄坂2-10-7',
      priceRange: '¥3000-5000',
      tags: ['サイバーパンク', 'カクテル', 'デート'],
      addedDate: '2024-12-08'
    },
    {
      id: 'cyber-bar-tokyo',
      name: 'Cyber Bar TOKYO',
      category: 'テーマバー',
      rating: 4.5,
      image: '/tatemono_bar.png',
      description: 'LEDとホログラムで彩られた近未来空間',
      address: '新宿区歌舞伎町1-14-6',
      priceRange: '¥2500-4000',
      tags: ['未来', 'LED', 'ホログラム'],
      addedDate: '2024-12-07'
    },
    {
      id: 'quantum-drinks',
      name: 'Quantum Drinks',
      category: '実験バー',
      rating: 4.9,
      image: '/tatemono_bar.png',
      description: '科学実験のようなカクテル体験ができる革新的なバー',
      address: '港区六本木3-2-1',
      priceRange: '¥4000-6000',
      tags: ['科学', '実験', '液体窒素'],
      addedDate: '2024-12-06'
    },
    {
      id: 'neon-heights',
      name: 'Neon Heights',
      category: 'スカイバー',
      rating: 4.6,
      image: '/tatemono_bar.png',
      description: '40階からの絶景とネオンライトが織りなす幻想的な空間',
      address: '千代田区丸の内1-1-1',
      priceRange: '¥5000-8000',
      tags: ['夜景', '高級', 'カップル'],
      addedDate: '2024-12-05'
    },
    {
      id: 'digital-underground',
      name: 'Digital Underground',
      category: 'アンダーグラウンド',
      rating: 4.2,
      image: '/tatemono_bar.png',
      description: '地下に隠された秘密基地のような雰囲気のバー',
      address: '中野区中野5-52-15',
      priceRange: '¥2000-3500',
      tags: ['地下', '隠れ家', 'クラブ'],
      addedDate: '2024-12-04'
    }
  ];

  // フィルタリングとソート
  const getFilteredAndSortedFavorites = () => {
    const filtered = favoritesList.filter(bar => {
      if (filterBy === 'all') return true;
      
      switch (filterBy) {
        case 'theme':
          return bar.category === 'テーマバー';
        case 'cocktail':
          return bar.tags.includes('カクテル');
        case 'sky':
          return bar.category === 'スカイバー';
        case 'underground':
          return bar.category === 'アンダーグラウンド';
        default:
          return true;
      }
    });

    // ソート
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'newest':
          return new Date(b.addedDate).getTime() - new Date(a.addedDate).getTime();
        case 'oldest':
          return new Date(a.addedDate).getTime() - new Date(b.addedDate).getTime();
        case 'rating':
          return b.rating - a.rating;
        case 'name':
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });

    return filtered;
  };

  const filteredAndSortedFavorites = getFilteredAndSortedFavorites();

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ja-JP', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  const removeFavorite = (barId: string) => {
    // 実際の実装では、ここでAPIを呼び出してお気に入りから削除する
    console.log(`Remove ${barId} from favorites`);
  };

  return (
    <div className="min-h-screen bg-cyber-black text-white pt-24 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* ページヘッダー */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-neon-cyan glow-neon-cyan">MY</span>
            <span className="text-neon-orange ml-4">FAVORITES</span>
          </h1>
          <p className="text-gray-300 text-lg">
            あなたのお気に入りバーコレクション
          </p>
        </div>

        {/* 統計情報 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gray-900 border border-neon-blue rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-neon-cyan mb-2">{favoritesList.length}</div>
            <div className="text-gray-300">お気に入りバー</div>
          </div>
          <div className="bg-gray-900 border border-neon-blue rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-neon-orange mb-2">
              {(favoritesList.reduce((sum, bar) => sum + bar.rating, 0) / favoritesList.length).toFixed(1)}
            </div>
            <div className="text-gray-300">平均評価</div>
          </div>
          <div className="bg-gray-900 border border-neon-blue rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-neon-green mb-2">
              {new Set(favoritesList.map(bar => bar.category)).size}
            </div>
            <div className="text-gray-300">カテゴリ数</div>
          </div>
        </div>

        {/* フィルタリング・ソート */}
        <div className="bg-gray-900 border border-neon-blue rounded-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* ソート */}
            <div>
              <label className="block text-neon-cyan text-sm font-bold mb-2">
                並び順
              </label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'newest' | 'oldest' | 'rating' | 'name')}
                className="w-full bg-gray-800 border border-neon-cyan/30 rounded-lg px-4 py-2 text-white focus:border-neon-orange focus:outline-none transition-colors"
              >
                <option value="newest">追加日（新しい順）</option>
                <option value="oldest">追加日（古い順）</option>
                <option value="rating">評価順</option>
                <option value="name">名前順</option>
              </select>
            </div>

            {/* フィルター */}
            <div>
              <label className="block text-neon-cyan text-sm font-bold mb-2">
                カテゴリフィルター
              </label>
              <select
                value={filterBy}
                onChange={(e) => setFilterBy(e.target.value as 'all' | 'theme' | 'cocktail' | 'sky' | 'underground')}
                className="w-full bg-gray-800 border border-neon-cyan/30 rounded-lg px-4 py-2 text-white focus:border-neon-orange focus:outline-none transition-colors"
              >
                <option value="all">すべて</option>
                <option value="theme">テーマバー</option>
                <option value="cocktail">カクテルバー</option>
                <option value="sky">スカイバー</option>
                <option value="underground">アンダーグラウンド</option>
              </select>
            </div>
          </div>
        </div>

        {/* お気に入りリスト */}
        <div className="space-y-6">
          {filteredAndSortedFavorites.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">💔</div>
              <p className="text-gray-400 text-lg mb-4">
                {filterBy === 'all' 
                  ? 'まだお気に入りバーがありません'
                  : '条件に合うお気に入りバーが見つかりませんでした'
                }
              </p>
              <Link
                href="/bars"
                className="inline-block bg-neon-cyan text-black px-6 py-3 rounded-lg font-bold hover:bg-neon-orange transition-colors"
              >
                バーを探す
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredAndSortedFavorites.map(bar => (
                <div
                  key={bar.id}
                  className="bg-gray-900 border border-neon-blue rounded-lg p-6 hover:border-neon-cyan transition-colors group"
                >
                  <div className="flex gap-4">
                    {/* バー画像 */}
                    <div className="w-24 h-24 flex-shrink-0">
                      <Image
                        src={bar.image}
                        alt={bar.name}
                        width={96}
                        height={96}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>

                    {/* バー情報 */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <Link 
                            href={`/bars/${bar.id}`}
                            className="text-neon-cyan hover:text-neon-orange transition-colors font-bold text-lg"
                          >
                            {bar.name}
                          </Link>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-neon-orange text-sm">{bar.category}</span>
                            <div className="flex items-center gap-1">
                              <span className="text-neon-orange">★</span>
                              <span className="text-white font-bold">{bar.rating}</span>
                            </div>
                          </div>
                        </div>
                        <button
                          onClick={() => removeFavorite(bar.id)}
                          className="text-red-400 hover:text-red-300 transition-colors opacity-0 group-hover:opacity-100"
                          title="お気に入りから削除"
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </button>
                      </div>

                      <p className="text-gray-300 text-sm mb-3 line-clamp-2">{bar.description}</p>

                      <div className="flex flex-wrap gap-2 mb-3">
                        {bar.tags.map(tag => (
                          <span
                            key={tag}
                            className="bg-gray-800 text-neon-cyan px-2 py-1 rounded-full text-xs border border-neon-cyan/30"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between text-sm text-gray-400">
                        <span>{bar.priceRange}</span>
                        <span>追加: {formatDate(bar.addedDate)}</span>
                      </div>
                    </div>
                  </div>

                  {/* アクションボタン */}
                  <div className="flex gap-3 mt-4 pt-4 border-t border-gray-700">
                    <Link
                      href={`/bars/${bar.id}`}
                      className="flex-1 bg-neon-cyan text-black px-4 py-2 rounded-lg font-bold text-center hover:bg-neon-orange transition-colors"
                    >
                      詳細を見る
                    </Link>
                    <Link
                      href={`/reviews/write?barId=${bar.id}`}
                      className="flex-1 bg-gray-700 text-white px-4 py-2 rounded-lg font-bold text-center hover:bg-gray-600 transition-colors"
                    >
                      レビューを書く
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* バー探索の提案 */}
        {filteredAndSortedFavorites.length > 0 && (
          <div className="bg-gray-900 border border-neon-blue rounded-lg p-8 mt-12 text-center">
            <h3 className="text-2xl font-bold text-neon-cyan mb-4">新しいバーを発見しませんか？</h3>
            <p className="text-gray-300 mb-6">
              あなたの好みに合った新しいバーを見つけて、コレクションを充実させましょう
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/bars"
                className="bg-neon-orange text-black px-6 py-3 rounded-lg font-bold hover:bg-neon-cyan transition-colors"
              >
                バーを探す
              </Link>
              <Link
                href="/ranking"
                className="bg-gray-700 text-white px-6 py-3 rounded-lg font-bold hover:bg-gray-600 transition-colors"
              >
                ランキングを見る
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}