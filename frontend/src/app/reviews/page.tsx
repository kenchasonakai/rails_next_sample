'use client';

import React from 'react';
import Link from 'next/link';

export default function ReviewsPage() {
  // ユーザー名からユーザーIDへのマッピング
  const userNameToId: Record<string, string> = {
    'Tokyo_Mixer': 'cyber-drinker',
    'Cyber_Explorer': 'neon-ninja',
    'Neon_Walker': 'cyber-drinker',
    'Future_Drinker': 'neon-ninja',
    'Digital_Nomad': 'cyber-drinker',
    'Music_Lover': 'neon-ninja'
  };

  // モックレビューデータ：実際のアプリでは API から取得
  const reviews = [
    {
      id: 1,
      barId: 1,
      barName: 'Cyber Bar TOKYO',
      userName: 'Tokyo_Mixer',
      userAvatar: 'T',
      rating: 5,
      title: 'サイバーパンクの聖地！',
      content: '雰囲気が最高！ARメニューが本当に未来的で、カクテルの味も素晴らしかったです。特にNeon Genesisは絶品でした。スタッフの方も親切で、また絶対に来たいと思います。デートにもビジネスにもおすすめです。',
      date: '2025-06-03',
      likes: 45,
      category: 'カクテルバー',
      area: '渋谷',
      tags: ['雰囲気', 'AR体験', 'デート', 'カクテル'],
      images: ['/tatemono_bar.png']
    },
    {
      id: 2,
      barId: 3,
      barName: 'Matrix Lounge',
      userName: 'Cyber_Explorer',
      userAvatar: 'C',
      rating: 5,
      title: '映画の世界に迷い込んだみたい',
      content: '完璧なサイバーパンク体験！ホログラムバーテンダーが作るカクテルは芸術作品のようでした。Red PillとBlue Pillを両方試しましたが、どちらも素晴らしい味でした。価格は高めですが、体験価値は十分にあります。',
      date: '2025-06-02',
      likes: 67,
      category: 'テーマバー',
      area: '六本木',
      tags: ['サイバーパンク', 'ホログラム', 'プレミアム', '体験'],
      images: ['/tatemono_bar.png', '/tatemono_bar.png']
    },
    {
      id: 3,
      barId: 2,
      barName: 'Electric Dreams',
      userName: 'Neon_Walker',
      userAvatar: 'N',
      rating: 4,
      title: 'ライティングが美しい',
      content: 'LEDライトショーが圧巻でした！音楽も良くて踊りたくなる雰囲気。Electric Blueカクテルは見た目も味も最高。ただ、週末は少し混雑するので予約をおすすめします。カジュアルに楽しめるバーです。',
      date: '2025-06-01',
      likes: 32,
      category: 'ラウンジバー',
      area: '新宿',
      tags: ['LED', 'ダンス', 'カジュアル', '音楽'],
      images: ['/tatemono_bar.png']
    },
    {
      id: 4,
      barId: 1,
      barName: 'Cyber Bar TOKYO',
      userName: 'Future_Drinker',
      userAvatar: 'F',
      rating: 4,
      title: 'テクノロジーと味の融合',
      content: 'ARメニューシステムが革新的！カクテルの作り方をホログラムで見ることができて、エンターテイメント性も抜群です。Matrix Shotは少し強めですが、サイバーパンクの世界観にぴったりでした。',
      date: '2025-05-30',
      likes: 28,
      category: 'カクテルバー',
      area: '渋谷',
      tags: ['テクノロジー', 'AR', 'エンターテイメント'],
      images: ['/tatemono_bar.png']
    },
    {
      id: 5,
      barId: 3,
      barName: 'Matrix Lounge',
      userName: 'Digital_Nomad',
      userAvatar: 'D',
      rating: 5,
      title: '非日常の極み',
      content: 'VR体験コーナーが最高でした！バーチャル空間でカクテルを楽しむなんて想像もしていませんでした。Neo Martiniは価格相応の価値があります。接客も完璧で、特別な記念日にぴったりです。',
      date: '2025-05-28',
      likes: 51,
      category: 'テーマバー',
      area: '六本木',
      tags: ['VR', '記念日', '接客', '特別'],
      images: ['/tatemono_bar.png']
    },
    {
      id: 6,
      barId: 2,
      barName: 'Electric Dreams',
      userName: 'Music_Lover',
      userAvatar: 'M',
      rating: 4,
      title: 'エレクトロミュージックの聖地',
      content: 'DJの選曲が素晴らしく、ダンスフロアで思いっきり楽しめました。Dream Fizzは軽やかで踊った後にぴったり。テラス席からの夜景も美しくて、友達とのパーティーに最適です。',
      date: '2025-05-26',
      likes: 39,
      category: 'ラウンジバー',
      area: '新宿',
      tags: ['DJ', 'ダンス', '夜景', 'パーティー'],
      images: ['/tatemono_bar.png']
    }
  ];

  const [sortBy, setSortBy] = React.useState('newest');
  const [filterRating, setFilterRating] = React.useState('all');
  const [filterCategory, setFilterCategory] = React.useState('all');
  const [filterArea, setFilterArea] = React.useState('all');

  const categories = ['all', 'カクテルバー', 'ラウンジバー', 'テーマバー', 'スカイバー'];
  const areas = ['all', '渋谷', '新宿', '六本木', '東京駅'];

  // フィルターとソートを適用
  const filteredAndSortedReviews = React.useMemo(() => {
    let filtered = reviews.filter(review => {
      const ratingMatch = filterRating === 'all' || 
        (filterRating === '5' && review.rating === 5) ||
        (filterRating === '4+' && review.rating >= 4) ||
        (filterRating === '3+' && review.rating >= 3);
      
      const categoryMatch = filterCategory === 'all' || review.category === filterCategory;
      const areaMatch = filterArea === 'all' || review.area === filterArea;
      
      return ratingMatch && categoryMatch && areaMatch;
    });

    // ソート
    return filtered.sort((a, b) => {
      switch (sortBy) {
        case 'newest':
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        case 'oldest':
          return new Date(a.date).getTime() - new Date(b.date).getTime();
        case 'highest-rating':
          return b.rating - a.rating;
        case 'most-liked':
          return b.likes - a.likes;
        default:
          return 0;
      }
    });
  }, [reviews, sortBy, filterRating, filterCategory, filterArea]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) return '今日';
    if (diffDays === 1) return '昨日';
    if (diffDays < 7) return `${diffDays}日前`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)}週間前`;
    return `${Math.floor(diffDays / 30)}ヶ月前`;
  };

  return (
    <div className="min-h-screen pt-24 pb-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-neon-orange glow-neon-orange">REVIEW</span>
            <span className="text-neon-cyan ml-4">PLAZA</span>
          </h1>
          <p className="text-gray-300 text-lg mb-6">
            サイバーシティのバー体験を共有しよう
          </p>
          <Link 
            href="/reviews/write"
            className="inline-block bg-neon-orange text-cyber-black px-8 py-3 rounded-lg font-bold hover:bg-neon-cyan hover:text-white transition-all duration-300 neon-glow"
          >
            📝 レビューを投稿
          </Link>
        </div>

        {/* Filters and Sort */}
        <div className="bg-gray-900 border border-neon-blue rounded-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {/* Sort */}
            <div>
              <label className="block text-neon-cyan mb-2 font-bold text-sm">並び順</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full bg-cyber-black border border-neon-cyan rounded-lg px-3 py-2 text-neon-cyan text-sm focus:outline-none focus:border-neon-pink"
              >
                <option value="newest">新着順</option>
                <option value="oldest">古い順</option>
                <option value="highest-rating">評価順</option>
                <option value="most-liked">いいね順</option>
              </select>
            </div>

            {/* Rating Filter */}
            <div>
              <label className="block text-neon-orange mb-2 font-bold text-sm">評価</label>
              <select
                value={filterRating}
                onChange={(e) => setFilterRating(e.target.value)}
                className="w-full bg-cyber-black border border-neon-orange rounded-lg px-3 py-2 text-neon-orange text-sm focus:outline-none focus:border-neon-pink"
              >
                <option value="all">すべて</option>
                <option value="5">★★★★★</option>
                <option value="4+">★★★★ 以上</option>
                <option value="3+">★★★ 以上</option>
              </select>
            </div>

            {/* Category Filter */}
            <div>
              <label className="block text-neon-pink mb-2 font-bold text-sm">カテゴリー</label>
              <select
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
                className="w-full bg-cyber-black border border-neon-pink rounded-lg px-3 py-2 text-neon-pink text-sm focus:outline-none focus:border-neon-cyan"
              >
                <option value="all">すべて</option>
                {categories.slice(1).map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            {/* Area Filter */}
            <div>
              <label className="block text-neon-blue mb-2 font-bold text-sm">エリア</label>
              <select
                value={filterArea}
                onChange={(e) => setFilterArea(e.target.value)}
                className="w-full bg-cyber-black border border-neon-blue rounded-lg px-3 py-2 text-neon-blue text-sm focus:outline-none focus:border-neon-orange"
              >
                <option value="all">すべて</option>
                {areas.slice(1).map(area => (
                  <option key={area} value={area}>{area}</option>
                ))}
              </select>
            </div>

            {/* Write Review Button */}
            <div className="flex items-end">
              <button className="w-full bg-neon-pink text-cyber-black py-2 rounded-lg font-bold text-sm hover:scale-105 transition-transform glow-neon-pink">
                レビューを書く
              </button>
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-4 pt-4 border-t border-gray-700">
            <p className="text-neon-cyan text-sm">
              <span className="font-bold text-neon-orange">{filteredAndSortedReviews.length}</span> 件のレビューが見つかりました
            </p>
          </div>
        </div>

        {/* Reviews List */}
        <div className="space-y-6">
          {filteredAndSortedReviews.map(review => (
            <div key={review.id} className="bg-gray-900 border border-neon-blue rounded-lg p-6 hover:glow-neon-blue transition-all">
              {/* Review Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-neon-pink rounded-full flex items-center justify-center mr-4">
                    <span className="text-cyber-black font-bold text-lg">{review.userAvatar}</span>
                  </div>
                  <div>
                    <Link href={`/users/${userNameToId[review.userName] || 'cyber-drinker'}`} className="text-neon-pink font-bold hover:text-neon-cyan transition-colors">
                      {review.userName}
                    </Link>
                    <div className="flex items-center text-sm text-gray-400">
                      <Link href={`/bars/${review.barId}`} className="text-neon-cyan hover:text-neon-orange transition-colors mr-3">
                        {review.barName}
                      </Link>
                      <span className="bg-neon-cyan text-cyber-black px-2 py-1 rounded-full text-xs mr-2">
                        {review.category}
                      </span>
                      <span className="bg-neon-orange text-cyber-black px-2 py-1 rounded-full text-xs">
                        {review.area}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex text-neon-orange mb-1">
                    {'★'.repeat(review.rating)}
                    {'☆'.repeat(5 - review.rating)}
                  </div>
                  <span className="text-gray-400 text-sm">{formatDate(review.date)}</span>
                </div>
              </div>

              {/* Review Content */}
              <div className="mb-4">
                <h3 className="text-xl font-bold text-neon-cyan mb-2">{review.title}</h3>
                <p className="text-gray-300 leading-relaxed">{review.content}</p>
              </div>

              {/* Review Images */}
              {review.images && review.images.length > 0 && (
                <div className="flex gap-2 mb-4">
                  {review.images.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`Review image ${index + 1}`}
                      className="w-20 h-20 object-cover rounded border border-neon-cyan"
                    />
                  ))}
                </div>
              )}

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {review.tags.map((tag, index) => (
                  <span key={index} className="bg-gray-800 text-neon-cyan px-2 py-1 rounded-full text-xs border border-neon-cyan">
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Review Actions */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                <div className="flex items-center space-x-4">
                  <button className="flex items-center text-neon-pink hover:text-neon-cyan transition-colors">
                    <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                    </svg>
                    {review.likes}
                  </button>
                  <button className="text-gray-400 hover:text-neon-cyan transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </button>
                  <button className="text-gray-400 hover:text-neon-cyan transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                    </svg>
                  </button>
                </div>
                <Link href={`/bars/${review.barId}`} className="text-neon-blue hover:text-neon-pink transition-colors text-sm font-bold">
                  バーの詳細を見る →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredAndSortedReviews.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">📝</div>
            <h3 className="text-2xl font-bold text-neon-orange mb-2">レビューが見つかりませんでした</h3>
            <p className="text-gray-400 mb-8">フィルター条件を変更してお試しください</p>
            <button className="bg-neon-pink text-cyber-black px-6 py-3 rounded-lg font-bold hover:scale-105 transition-transform glow-neon-pink">
              最初のレビューを書く
            </button>
          </div>
        )}

        {/* Load More Button */}
        {filteredAndSortedReviews.length > 0 && (
          <div className="text-center mt-12">
            <button className="bg-neon-blue text-cyber-black px-8 py-3 rounded-lg font-bold hover:bg-neon-cyan transition-colors glow-neon-blue">
              もっと見る
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
