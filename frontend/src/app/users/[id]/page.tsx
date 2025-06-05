"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";

// ユーザーデータ（サンプル）
const users = {
  'cyber-drinker': {
    id: 'cyber-drinker',
    username: 'CyberDrinker',
    displayName: 'サイバードリンカー',
    avatar: 'C',
    joinDate: '2024-01-15',
    bio: 'サイバーパンクバーの愛好家。ネオンライトとカクテルをこよなく愛する。特にホログラムを使ったドリンクに興味あり。',
    location: '東京',
    level: 'エリート',
    totalReviews: 24,
    totalLikes: 342,
    followersCount: 156,
    followingCount: 89,
    badges: ['ベテランレビュアー', 'サイバーパンクマスター', '写真家'],
    stats: {
      averageRating: 4.2,
      visitedBars: 18,
      favoriteCategory: 'カクテルバー',
      favoriteArea: '渋谷'
    }
  },
  'neon-ninja': {
    id: 'neon-ninja',
    username: 'NeonNinja',
    displayName: 'ネオンニンジャ',
    avatar: 'N',
    joinDate: '2024-02-20',
    bio: '夜の街を駆け抜けるネオンハンター。隠れた名店を見つけ出すのが得意。革新的なカクテルとテクノロジーの融合に魅力を感じる。',
    location: '大阪',
    level: 'マスター',
    totalReviews: 31,
    totalLikes: 478,
    followersCount: 203,
    followingCount: 134,
    badges: ['探検家', 'イノベーター', 'ナイトクローラー'],
    stats: {
      averageRating: 4.5,
      visitedBars: 25,
      favoriteCategory: 'テーマバー',
      favoriteArea: '新宿'
    }
  }
};

// ユーザーのレビューデータ（サンプル）
const userReviews = {
  'cyber-drinker': [
    {
      id: 1,
      barName: 'Matrix Bar',
      barId: 'matrix-bar',
      rating: 5,
      title: 'まるで映画の中にいるような雰囲気',
      content: 'まるで映画の中にいるような雰囲気。光るカクテルが幻想的で、BGMも完璧。',
      date: '2024-05-20',
      likes: 24,
      images: ['/tatemono_bar.png']
    },
    {
      id: 2,
      barName: 'Cyberpunk Lounge',
      barId: 'cyberpunk-lounge',
      rating: 4,
      title: 'ネオンが美しいラウンジ',
      content: 'ネオンライトが美しく、雰囲気は最高。ただし価格がやや高め。',
      date: '2024-05-15',
      likes: 18,
      images: []
    },
    {
      id: 3,
      barName: 'Electric Dreams',
      barId: 'electric-dreams',
      rating: 4,
      title: 'エレクトロミュージックが最高',
      content: 'DJの選曲が素晴らしく、ダンスフロアで思いっきり楽しめました。',
      date: '2024-05-10',
      likes: 32,
      images: ['/tatemono_bar.png', '/tatemono_bar.png']
    }
  ],
  'neon-ninja': [
    {
      id: 4,
      barName: 'Future Spirits',
      barId: 'future-spirits',
      rating: 4,
      title: '革新的なカクテルが多数',
      content: '革新的なカクテルが多数。特にホログラム効果のドリンクは必見。',
      date: '2024-05-25',
      likes: 18,
      images: []
    }
  ]
};

export default function UserProfilePage() {
  const params = useParams();
  const userId = params.id as string;
  const user = users[userId as keyof typeof users];
  const reviews = userReviews[userId as keyof typeof userReviews] || [];

  const [activeTab, setActiveTab] = useState<'reviews' | 'stats' | 'activity'>('reviews');
  const [isFollowing, setIsFollowing] = useState(false);

  if (!user) {
    return (
      <div className="min-h-screen bg-cyber-black text-white pt-24 pb-8">
        <div className="container mx-auto px-4 text-center">
          <div className="text-6xl mb-6">🤖</div>
          <h1 className="text-4xl font-bold text-neon-blue mb-4 neon-glow">
            ユーザーが見つかりません
          </h1>
          <p className="text-gray-400 mb-8">
            指定されたユーザーは存在しないか、削除された可能性があります。
          </p>
          <Link
            href="/reviews"
            className="inline-block bg-neon-orange text-cyber-black px-8 py-3 rounded-lg font-bold hover:bg-neon-cyan hover:text-white transition-all duration-300 neon-glow"
          >
            レビュー一覧に戻る
          </Link>
        </div>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ja-JP', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'マスター': return 'text-neon-orange';
      case 'エリート': return 'text-neon-cyan';
      default: return 'text-neon-blue';
    }
  };

  const getLevelBadgeColor = (level: string) => {
    switch (level) {
      case 'マスター': return 'bg-neon-orange';
      case 'エリート': return 'bg-neon-cyan';
      default: return 'bg-neon-blue';
    }
  };

  return (
    <div className="min-h-screen bg-cyber-black text-white pt-24 pb-8">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* プロフィールヘッダー */}
        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-8 border border-neon-blue/30 mb-8">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            {/* アバター */}
            <div className="relative">
              <div className="w-24 h-24 bg-gradient-to-br from-neon-blue to-neon-cyan rounded-full flex items-center justify-center text-4xl font-bold text-cyber-black">
                {user.avatar}
              </div>
              <div className={`absolute -bottom-2 -right-2 ${getLevelBadgeColor(user.level)} text-cyber-black px-3 py-1 rounded-full text-xs font-bold`}>
                {user.level}
              </div>
            </div>

            {/* ユーザー情報 */}
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-neon-blue mb-2 neon-glow">
                    {user.displayName}
                  </h1>
                  <p className="text-neon-cyan text-lg">@{user.username}</p>
                </div>

                {/* フォローボタン */}
                <div className="mt-4 md:mt-0">
                  <button
                    onClick={() => setIsFollowing(!isFollowing)}
                    className={`px-6 py-2 rounded-lg font-bold transition-all duration-300 ${
                      isFollowing
                        ? "bg-gray-600 text-white hover:bg-gray-700"
                        : "bg-neon-orange text-cyber-black hover:bg-neon-cyan neon-glow"
                    }`}
                  >
                    {isFollowing ? "フォロー中" : "フォローする"}
                  </button>
                </div>
              </div>

              <p className="text-gray-300 mb-4 leading-relaxed">
                {user.bio}
              </p>

              {/* 基本情報 */}
              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-neon-orange">📍</span>
                  <span className="text-gray-300">{user.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-neon-orange">📅</span>
                  <span className="text-gray-300">{formatDate(user.joinDate)}に参加</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-neon-orange">📊</span>
                  <span className="text-gray-300">{user.totalReviews}件のレビュー</span>
                </div>
              </div>
            </div>
          </div>

          {/* 統計情報 */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 pt-6 border-t border-gray-700">
            <div className="text-center">
              <div className="text-2xl font-bold text-neon-blue">{user.totalReviews}</div>
              <div className="text-gray-400 text-sm">レビュー</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-neon-orange">{user.totalLikes}</div>
              <div className="text-gray-400 text-sm">いいね</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-neon-cyan">{user.followersCount}</div>
              <div className="text-gray-400 text-sm">フォロワー</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-neon-pink">{user.followingCount}</div>
              <div className="text-gray-400 text-sm">フォロー中</div>
            </div>
          </div>
        </div>

        {/* バッジ */}
        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-6 border border-neon-orange/30 mb-8">
          <h3 className="text-xl font-bold text-neon-orange mb-4">獲得バッジ</h3>
          <div className="flex flex-wrap gap-3">
            {user.badges.map((badge, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-neon-blue/20 to-neon-cyan/20 border border-neon-blue/50 rounded-full px-4 py-2 text-sm font-medium text-neon-cyan"
              >
                🏆 {badge}
              </div>
            ))}
          </div>
        </div>

        {/* タブナビゲーション */}
        <div className="mb-8">
          <div className="flex border-b border-neon-orange/30">
            <button
              onClick={() => setActiveTab('reviews')}
              className={`px-6 py-3 font-medium transition-all duration-300 ${
                activeTab === 'reviews'
                  ? 'text-neon-orange border-b-2 border-neon-orange neon-glow'
                  : 'text-gray-400 hover:text-neon-cyan'
              }`}
            >
              レビュー ({reviews.length})
            </button>
            <button
              onClick={() => setActiveTab('stats')}
              className={`px-6 py-3 font-medium transition-all duration-300 ${
                activeTab === 'stats'
                  ? 'text-neon-orange border-b-2 border-neon-orange neon-glow'
                  : 'text-gray-400 hover:text-neon-cyan'
              }`}
            >
              統計情報
            </button>
            <button
              onClick={() => setActiveTab('activity')}
              className={`px-6 py-3 font-medium transition-all duration-300 ${
                activeTab === 'activity'
                  ? 'text-neon-orange border-b-2 border-neon-orange neon-glow'
                  : 'text-gray-400 hover:text-neon-cyan'
              }`}
            >
              アクティビティ
            </button>
          </div>
        </div>

        {/* レビュー一覧 */}
        {activeTab === 'reviews' && (
          <div className="space-y-6">
            {reviews.length === 0 ? (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">📝</div>
                <h3 className="text-2xl text-neon-cyan mb-2">
                  まだレビューがありません
                </h3>
                <p className="text-gray-400">
                  このユーザーはまだレビューを投稿していません。
                </p>
              </div>
            ) : (
              reviews.map((review) => (
                <div
                  key={review.id}
                  className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-xl p-6 border border-neon-blue/30 hover:border-neon-orange/50 transition-all duration-300"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <Link 
                        href={`/bars/${review.barId}`}
                        className="text-xl font-bold text-neon-blue hover:text-neon-cyan transition-colors mb-1"
                      >
                        {review.barName}
                      </Link>
                      <div className="flex items-center gap-3 mt-2">
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <span
                              key={i}
                              className={`text-lg ${
                                i < review.rating ? 'text-yellow-400' : 'text-gray-600'
                              }`}
                            >
                              ★
                            </span>
                          ))}
                        </div>
                        <span className="text-gray-400 text-sm">
                          {formatDate(review.date)}
                        </span>
                      </div>
                    </div>
                  </div>

                  <h4 className="text-lg font-bold text-neon-cyan mb-2">
                    {review.title}
                  </h4>

                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {review.content}
                  </p>

                  {/* 画像 */}
                  {review.images && review.images.length > 0 && (
                    <div className="flex gap-2 mb-4">
                      {review.images.map((image, index) => (
                        <Image
                          key={index}
                          src={image}
                          alt={`${review.barName} - ${index + 1}`}
                          width={80}
                          height={80}
                          className="w-20 h-20 object-cover rounded border border-neon-cyan/30"
                        />
                      ))}
                    </div>
                  )}

                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1 text-neon-orange">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                      </svg>
                      <span>{review.likes}</span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        )}

        {/* 統計情報 */}
        {activeTab === 'stats' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-neon-blue/20 to-neon-cyan/20 rounded-xl p-6 border border-neon-blue/30">
              <h3 className="text-lg font-bold text-neon-blue mb-4">レビュー統計</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-300">平均評価:</span>
                  <span className="text-neon-orange font-bold">{user.stats.averageRating}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">訪問したバー:</span>
                  <span className="text-neon-cyan font-bold">{user.stats.visitedBars}店舗</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">好きなカテゴリ:</span>
                  <span className="text-neon-pink font-bold">{user.stats.favoriteCategory}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">よく行くエリア:</span>
                  <span className="text-yellow-400 font-bold">{user.stats.favoriteArea}</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-neon-orange/20 to-neon-pink/20 rounded-xl p-6 border border-neon-orange/30">
              <h3 className="text-lg font-bold text-neon-orange mb-4">コミュニティ統計</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-300">総いいね数:</span>
                  <span className="text-neon-blue font-bold">{user.totalLikes}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">フォロワー:</span>
                  <span className="text-neon-cyan font-bold">{user.followersCount}人</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">フォロー中:</span>
                  <span className="text-neon-pink font-bold">{user.followingCount}人</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">レベル:</span>
                  <span className={`font-bold ${getLevelColor(user.level)}`}>{user.level}</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* アクティビティ */}
        {activeTab === 'activity' && (
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-6 border border-neon-cyan/30">
            <h3 className="text-lg font-bold text-neon-cyan mb-4">最近のアクティビティ</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-sm">
                <div className="w-8 h-8 bg-neon-blue/20 rounded-full flex items-center justify-center">
                  📝
                </div>
                <span className="text-gray-300">
                  <span className="text-neon-blue font-bold">Matrix Bar</span> にレビューを投稿しました
                </span>
                <span className="text-gray-400 ml-auto">3日前</span>
              </div>
              <div className="flex items-center gap-4 text-sm">
                <div className="w-8 h-8 bg-neon-orange/20 rounded-full flex items-center justify-center">
                  ❤️
                </div>
                <span className="text-gray-300">
                  <span className="text-neon-orange font-bold">TechGuru</span> さんをフォローしました
                </span>
                <span className="text-gray-400 ml-auto">1週間前</span>
              </div>
              <div className="flex items-center gap-4 text-sm">
                <div className="w-8 h-8 bg-neon-cyan/20 rounded-full flex items-center justify-center">
                  🏆
                </div>
                <span className="text-gray-300">
                  <span className="text-neon-cyan font-bold">ベテランレビュアー</span> バッジを獲得しました
                </span>
                <span className="text-gray-400 ml-auto">2週間前</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
