'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface Review {
  id: number;
  barName: string;
  barId: string;
  userName: string;
  userId: string;
  rating: number;
  title: string;
  content: string;
  date: string;
  likes: number;
  category: string;
  tags: string[];
  images: string[];
  verified: boolean;
}

export default function ReviewsPage() {
  const [sortBy, setSortBy] = useState<'newest' | 'oldest' | 'highest' | 'lowest' | 'popular'>('newest');
  const [filterBy, setFilterBy] = useState<'all' | 'verified' | 'with-photos'>('all');
  const [selectedTag, setSelectedTag] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // モックレビューデータ
  const reviews: Review[] = [
    {
      id: 1,
      barName: 'Matrix Lounge',
      barId: 'matrix-lounge',
      userName: 'Tokyo_Mixer',
      userId: 'tokyo-mixer',
      rating: 5,
      title: 'サイバーパンクの世界に没入できる最高の体験',
      content: 'まるで映画の世界に飛び込んだような感覚でした。ネオンライトの演出、電子音楽、そして何よりカクテルの味が絶品。特にNeo Martiniは一度は飲むべき逸品です。',
      date: '2024-12-08',
      likes: 42,
      category: 'テーマバー',
      tags: ['サイバーパンク', 'カクテル', 'デート', 'おしゃれ'],
      images: ['/tatemono_bar.png'],
      verified: true
    },
    {
      id: 2,
      barName: 'Cyber Bar TOKYO',
      barId: 'cyber-bar-tokyo',
      userName: 'Neon_Lover',
      userId: 'neon-lover',
      rating: 4,
      title: '未来的な雰囲気が素晴らしい',
      content: 'LEDライトとホログラムの演出が印象的。スタッフのコスチュームも世界観に合っていて、本当に2080年にタイムスリップしたような感覚です。',
      date: '2024-12-07',
      likes: 28,
      category: 'テーマバー',
      tags: ['未来', 'LED', 'ホログラム', 'コスプレ'],
      images: ['/tatemono_bar.png'],
      verified: false
    },
    {
      id: 3,
      barName: 'Quantum Drinks',
      barId: 'quantum-drinks',
      userName: 'Science_Bartender',
      userId: 'science-bartender',
      rating: 5,
      title: '科学実験のようなカクテル体験',
      content: '液体窒素を使ったカクテルや、色が変わるドリンクなど、まさに科学実験のような体験ができます。味も見た目も完璧！',
      date: '2024-12-06',
      likes: 67,
      category: '実験バー',
      tags: ['科学', '液体窒素', '変色', '実験'],
      images: ['/tatemono_bar.png'],
      verified: true
    },
    {
      id: 4,
      barName: 'Neon Heights',
      barId: 'neon-heights',
      userName: 'Sky_Drinker',
      userId: 'sky-drinker',
      rating: 4,
      title: '夜景とネオンの絶景バー',
      content: '40階からの夜景は圧巻。ネオンが光る街並みを見ながら飲むカクテルは格別です。記念日にぴったりの場所でした。',
      date: '2024-12-05',
      likes: 31,
      category: 'スカイバー',
      tags: ['夜景', '記念日', 'カップル', '高級'],
      images: ['/tatemono_bar.png'],
      verified: true
    },
    {
      id: 5,
      barName: 'Digital Underground',
      barId: 'digital-underground',
      userName: 'Underground_Fan',
      userId: 'underground-fan',
      rating: 3,
      title: '隠れ家的な雰囲気は良いが...',
      content: '地下にあるバーで、秘密基地のような雰囲気は最高。ただし、ドリンクの種類がもう少し豊富だと良いなと思いました。',
      date: '2024-12-04',
      likes: 15,
      category: 'アンダーグラウンド',
      tags: ['地下', '隠れ家', '秘密基地', 'クラブ'],
      images: [],
      verified: false
    }
  ];

  // 利用可能なタグ
  const availableTags = [
    'サイバーパンク', 'カクテル', 'デート', 'おしゃれ', '未来', 'LED', 
    'ホログラム', 'コスプレ', '科学', '液体窒素', '変色', '実験', 
    '夜景', '記念日', 'カップル', '高級', '地下', '隠れ家', '秘密基地', 'クラブ'
  ];

  // フィルタリングとソート
  const getFilteredAndSortedReviews = () => {
    const filtered = reviews.filter(review => {
      // 検索クエリフィルター
      if (searchQuery && !review.title.toLowerCase().includes(searchQuery.toLowerCase()) && 
          !review.content.toLowerCase().includes(searchQuery.toLowerCase()) &&
          !review.barName.toLowerCase().includes(searchQuery.toLowerCase())) {
        return false;
      }

      // カテゴリフィルター
      if (filterBy === 'verified' && !review.verified) return false;
      if (filterBy === 'with-photos' && review.images.length === 0) return false;

      // タグフィルター
      if (selectedTag !== 'all' && !review.tags.includes(selectedTag)) return false;

      return true;
    });

    // ソート
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'newest':
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        case 'oldest':
          return new Date(a.date).getTime() - new Date(b.date).getTime();
        case 'highest':
          return b.rating - a.rating;
        case 'lowest':
          return a.rating - b.rating;
        case 'popular':
          return b.likes - a.likes;
        default:
          return 0;
      }
    });

    return filtered;
  };

  const filteredAndSortedReviews = getFilteredAndSortedReviews();

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ja-JP', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  return (
    <div className="min-h-screen bg-cyber-black text-white pt-24 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* ページヘッダー */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-neon-cyan glow-neon-cyan">REVIEWS</span>
            <span className="text-neon-orange ml-4">ARCHIVE</span>
          </h1>
          <p className="text-gray-300 text-lg">
            サイバーシティのバー体験記録
          </p>
        </div>

        {/* 検索・フィルタリング */}
        <div className="bg-gray-900 border border-neon-blue rounded-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            {/* 検索 */}
            <div>
              <label className="block text-neon-cyan text-sm font-bold mb-2">
                検索
              </label>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="レビューを検索..."
                className="w-full bg-gray-800 border border-neon-cyan/30 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:border-neon-orange focus:outline-none transition-colors"
              />
            </div>

            {/* ソート */}
            <div>
              <label className="block text-neon-cyan text-sm font-bold mb-2">
                並び順
              </label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'newest' | 'oldest' | 'highest' | 'lowest' | 'popular')}
                className="w-full bg-gray-800 border border-neon-cyan/30 rounded-lg px-4 py-2 text-white focus:border-neon-orange focus:outline-none transition-colors"
              >
                <option value="newest">新しい順</option>
                <option value="oldest">古い順</option>
                <option value="highest">評価順（高）</option>
                <option value="lowest">評価順（低）</option>
                <option value="popular">人気順</option>
              </select>
            </div>

            {/* フィルター */}
            <div>
              <label className="block text-neon-cyan text-sm font-bold mb-2">
                フィルター
              </label>
              <select
                value={filterBy}
                onChange={(e) => setFilterBy(e.target.value as 'all' | 'verified' | 'with-photos')}
                className="w-full bg-gray-800 border border-neon-cyan/30 rounded-lg px-4 py-2 text-white focus:border-neon-orange focus:outline-none transition-colors"
              >
                <option value="all">すべて</option>
                <option value="verified">認証済み</option>
                <option value="with-photos">写真付き</option>
              </select>
            </div>

            {/* タグ */}
            <div>
              <label className="block text-neon-cyan text-sm font-bold mb-2">
                タグ
              </label>
              <select
                value={selectedTag}
                onChange={(e) => setSelectedTag(e.target.value)}
                className="w-full bg-gray-800 border border-neon-cyan/30 rounded-lg px-4 py-2 text-white focus:border-neon-orange focus:outline-none transition-colors"
              >
                <option value="all">すべてのタグ</option>
                {availableTags.map((tag: string) => (
                  <option key={tag} value={tag}>
                    {tag}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* タグクラウド */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedTag('all')}
              className={`px-3 py-1 rounded-full text-sm transition-colors ${
                selectedTag === 'all'
                  ? 'bg-neon-cyan text-black'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              すべて
            </button>
            {availableTags.map((tag: string) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-3 py-1 rounded-full text-sm transition-colors ${
                  selectedTag === tag
                    ? 'bg-neon-orange text-black'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* レビューリスト */}
        <div className="space-y-6">
          {filteredAndSortedReviews.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">条件に合うレビューが見つかりませんでした</p>
            </div>
          ) : (
            filteredAndSortedReviews.map(review => (
              <div
                key={review.id}
                className="bg-gray-900 border border-neon-blue rounded-lg p-6 hover:border-neon-cyan transition-colors"
              >
                <div className="flex flex-col lg:flex-row gap-6">
                  {/* レビュー画像 */}
                  {review.images.length > 0 && (
                    <div className="lg:w-1/3">
                      <Image
                        src={review.images[0]}
                        alt={review.barName}
                        width={400}
                        height={250}
                        className="w-full h-48 lg:h-full object-cover rounded-lg"
                      />
                    </div>
                  )}

                  {/* レビュー内容 */}
                  <div className={review.images.length > 0 ? 'lg:w-2/3' : 'w-full'}>
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <Link 
                            href={`/bars/${review.barId}`}
                            className="text-neon-cyan hover:text-neon-orange transition-colors font-bold text-lg"
                          >
                            {review.barName}
                          </Link>
                          {review.verified && (
                            <span className="bg-neon-green text-black px-2 py-1 rounded-full text-xs font-bold">
                              認証済み
                            </span>
                          )}
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">{review.title}</h3>
                        <div className="flex items-center gap-4 text-sm text-gray-400">
                          <Link 
                            href={`/users/${review.userId}`}
                            className="hover:text-neon-cyan transition-colors"
                          >
                            @{review.userName}
                          </Link>
                          <span>{formatDate(review.date)}</span>
                          <span className="text-neon-orange">{review.category}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <span
                              key={i}
                              className={`text-lg ${
                                i < review.rating ? 'text-neon-orange' : 'text-gray-600'
                              }`}
                            >
                              ★
                            </span>
                          ))}
                        </div>
                        <span className="text-neon-cyan font-bold">{review.rating}</span>
                      </div>
                    </div>

                    <p className="text-gray-300 mb-4 leading-relaxed">{review.content}</p>

                    {/* タグ */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {review.tags.map(tag => (
                        <span
                          key={tag}
                          className="bg-gray-800 text-neon-cyan px-2 py-1 rounded-full text-xs border border-neon-cyan/30"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    {/* アクション */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <button className="flex items-center gap-1 text-gray-400 hover:text-neon-orange transition-colors">
                          <span>♥</span>
                          <span>{review.likes}</span>
                        </button>
                        <button className="text-gray-400 hover:text-neon-cyan transition-colors">
                          シェア
                        </button>
                      </div>
                      <Link
                        href={`/bars/${review.barId}`}
                        className="bg-neon-cyan text-black px-4 py-2 rounded-lg font-bold hover:bg-neon-orange transition-colors"
                      >
                        バーを見る
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* レビュー投稿ボタン */}
        <div className="text-center mt-12">
          <Link
            href="/reviews/write"
            className="inline-block bg-neon-orange text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-neon-cyan transition-colors glow-neon-orange"
          >
            レビューを投稿する
          </Link>
        </div>
      </div>
    </div>
  );
}