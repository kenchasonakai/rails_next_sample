"use client";

import { useState } from "react";
import Link from "next/link";

export default function FavoritesPage() {
  const [activeTab, setActiveTab] = useState<"bars" | "reviews">("bars");

  // ユーザー名からユーザーIDへのマッピング
  const userNameToId: Record<string, string> = {
    'CyberDrinker': 'cyber-drinker',
    'NeonNinja': 'neon-ninja',
    'TechGuru': 'cyber-drinker'
  };

  // お気に入りのサンプルデータ
  const favoriteBars = [
  {
    id: "cyberpunk-lounge",
    name: "Cyberpunk Lounge",
    area: "渋谷",
    rating: 4.5,
    image: "/tatemono_bar.png",
    description: "ネオンが輝くサイバーパンクテーマのラウンジ",
    priceRange: "¥¥¥",
    addedDate: "2024-01-15"
  },
  {
    id: "neon-bar",
    name: "NEON BAR",
    area: "新宿",
    rating: 4.8,
    image: "/tatemono_bar.png",
    description: "電子音楽と光る氷が楽しめるバー",
    priceRange: "¥¥¥¥",
    addedDate: "2024-01-10"
  },
  {
    id: "digital-mixology",
    name: "Digital Mixology",
    area: "六本木",
    rating: 4.3,
    image: "/tatemono_bar.png",
    description: "デジタルアートと革新的なカクテル",
    priceRange: "¥¥¥",
    addedDate: "2024-01-08"
  }
];

const favoriteReviews = [
  {
    id: 1,
    barName: "Matrix Bar",
    reviewer: "CyberDrinker",
    rating: 5,
    comment: "まるで映画の中にいるような雰囲気。光るカクテルが幻想的で、BGMも完璧。",
    addedDate: "2024-01-12",
    likes: 24
  },
  {
    id: 2,
    barName: "Future Spirits",
    reviewer: "NeonNinja",
    rating: 4,
    comment: "革新的なカクテルが多数。特にホログラム効果のドリンクは必見。",
    addedDate: "2024-01-09",
    likes: 18
  },
  {
    id: 3,
    barName: "Blade Runner Bar",
    reviewer: "TechGuru",
    rating: 5,
    comment: "スタッフの知識が深く、カクテルの説明も丁寧。雰囲気も最高。",
    addedDate: "2024-01-05",
    likes: 32
  }
];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ja-JP', {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-cyber-black text-white pt-24 pb-8">
      <div className="container mx-auto px-4">
        {/* ヘッダー */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-neon-blue mb-2 neon-glow">
            お気に入り
          </h1>
          <p className="text-neon-cyan text-lg">
            あなたがお気に入りに追加したバーとレビュー
          </p>
        </div>

        {/* タブナビゲーション */}
        <div className="mb-8">
          <div className="flex border-b border-neon-orange/30">
            <button
              onClick={() => setActiveTab("bars")}
              className={`px-6 py-3 font-medium transition-all duration-300 ${
                activeTab === "bars"
                  ? "text-neon-orange border-b-2 border-neon-orange neon-glow"
                  : "text-gray-400 hover:text-neon-cyan"
              }`}
            >
              バー ({favoriteBars.length})
            </button>
            <button
              onClick={() => setActiveTab("reviews")}
              className={`px-6 py-3 font-medium transition-all duration-300 ${
                activeTab === "reviews"
                  ? "text-neon-orange border-b-2 border-neon-orange neon-glow"
                  : "text-gray-400 hover:text-neon-cyan"
              }`}
            >
              レビュー ({favoriteReviews.length})
            </button>
          </div>
        </div>

        {/* お気に入りバー */}
        {activeTab === "bars" && (
          <div className="space-y-6">
            {favoriteBars.length === 0 ? (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">💔</div>
                <h3 className="text-2xl text-neon-cyan mb-2">
                  お気に入りのバーがありません
                </h3>
                <p className="text-gray-400 mb-8">
                  バーを探してお気に入りに追加してみましょう
                </p>
                <Link 
                  href="/bars"
                  className="inline-block bg-neon-orange text-cyber-black px-8 py-3 rounded-lg font-bold hover:bg-neon-cyan hover:text-white transition-all duration-300 neon-glow"
                >
                  バーを探す
                </Link>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {favoriteBars.map((bar) => (
                  <div
                    key={bar.id}
                    className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl overflow-hidden border border-neon-blue/30 hover:border-neon-orange/50 transition-all duration-300 group"
                  >
                    <div className="relative">
                      <img
                        src={bar.image}
                        alt={bar.name}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-2 right-2">
                        <button className="bg-red-500/80 text-white p-2 rounded-full hover:bg-red-600 transition-colors">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                          </svg>
                        </button>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-bold text-neon-blue">
                          {bar.name}
                        </h3>
                        <span className="text-neon-orange font-bold">
                          {bar.priceRange}
                        </span>
                      </div>

                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-neon-cyan">{bar.area}</span>
                        <div className="flex items-center gap-1">
                          <span className="text-yellow-400">★</span>
                          <span className="text-white font-medium">{bar.rating}</span>
                        </div>
                      </div>

                      <p className="text-gray-300 text-sm mb-4">
                        {bar.description}
                      </p>

                      <div className="flex justify-between items-center">
                        <span className="text-xs text-gray-400">
                          追加日: {formatDate(bar.addedDate)}
                        </span>
                        <Link
                          href={`/bars/${bar.id}`}
                          className="bg-neon-blue text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-neon-cyan transition-colors neon-glow"
                        >
                          詳細を見る
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* お気に入りレビュー */}
        {activeTab === "reviews" && (
          <div className="space-y-6">
            {favoriteReviews.length === 0 ? (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">📝</div>
                <h3 className="text-2xl text-neon-cyan mb-2">
                  お気に入りのレビューがありません
                </h3>
                <p className="text-gray-400 mb-8">
                  気になるレビューをお気に入りに追加してみましょう
                </p>
                <Link 
                  href="/reviews"
                  className="inline-block bg-neon-orange text-cyber-black px-8 py-3 rounded-lg font-bold hover:bg-neon-cyan hover:text-white transition-all duration-300 neon-glow"
                >
                  レビューを見る
                </Link>
              </div>
            ) : (
              <div className="space-y-4">
                {favoriteReviews.map((review) => (
                  <div
                    key={review.id}
                    className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-xl p-6 border border-neon-blue/30 hover:border-neon-orange/50 transition-all duration-300"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-neon-blue mb-1">
                          {review.barName}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="text-neon-cyan">
                            by <Link href={`/users/${userNameToId[review.reviewer] || 'cyber-drinker'}`} className="text-neon-cyan hover:text-neon-pink transition-colors font-bold">
                              {review.reviewer}
                            </Link>
                          </span>
                          <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                              <span
                                key={i}
                                className={`text-lg ${
                                  i < review.rating ? "text-yellow-400" : "text-gray-600"
                                }`}
                              >
                                ★
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      <button className="bg-red-500/80 text-white p-2 rounded-full hover:bg-red-600 transition-colors">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </div>

                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {review.comment}
                    </p>

                    <div className="flex justify-between items-center text-sm">
                      <div className="flex items-center gap-4">
                        <span className="text-gray-400">
                          追加日: {formatDate(review.addedDate)}
                        </span>
                        <div className="flex items-center gap-1 text-neon-orange">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                          </svg>
                          <span>{review.likes}</span>
                        </div>
                      </div>
                      <Link
                        href="/reviews"
                        className="text-neon-cyan hover:text-neon-blue transition-colors"
                      >
                        レビューページで見る →
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* 統計情報 */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-neon-blue/20 to-neon-cyan/20 rounded-xl p-6 border border-neon-blue/30">
            <h3 className="text-lg font-bold text-neon-blue mb-2">
              お気に入りバー
            </h3>
            <p className="text-3xl font-bold text-white">
              {favoriteBars.length}
            </p>
            <p className="text-gray-400 text-sm">個所保存済み</p>
          </div>

          <div className="bg-gradient-to-br from-neon-orange/20 to-neon-cyan/20 rounded-xl p-6 border border-neon-orange/30">
            <h3 className="text-lg font-bold text-neon-orange mb-2">
              お気に入りレビュー
            </h3>
            <p className="text-3xl font-bold text-white">
              {favoriteReviews.length}
            </p>
            <p className="text-gray-400 text-sm">件保存済み</p>
          </div>

          <div className="bg-gradient-to-br from-neon-cyan/20 to-neon-blue/20 rounded-xl p-6 border border-neon-cyan/30">
            <h3 className="text-lg font-bold text-neon-cyan mb-2">
              平均評価
            </h3>
            <p className="text-3xl font-bold text-white">
              {favoriteBars.length > 0 
                ? (favoriteBars.reduce((sum, bar) => sum + bar.rating, 0) / favoriteBars.length).toFixed(1)
                : "0.0"
              }
            </p>
            <p className="text-gray-400 text-sm">お気に入りバーの平均</p>
          </div>
        </div>
      </div>
    </div>
  );
}
