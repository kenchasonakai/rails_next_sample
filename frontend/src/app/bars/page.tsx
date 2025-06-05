'use client';

import React from 'react';
import Link from 'next/link';

export default function BarsPage() {
  // モックデータ：実際のアプリでは API から取得
  const bars = [
    {
      id: 1,
      name: 'Cyber Bar TOKYO',
      description: '未来的な雰囲気の中で楽しめるカクテルバー。ネオンライトと先進的な音響システムが特徴。',
      rating: 4.8,
      reviewCount: 245,
      category: 'カクテルバー',
      area: '渋谷',
      priceRange: '￥￥￥',
      image: '/tatemono_bar.png',
      tags: ['ネオン', 'カクテル', 'モダン']
    },
    {
      id: 2,
      name: 'Electric Dreams',
      description: 'ネオンライトが美しいモダンバー。エレクトロミュージックと共に楽しむカクテル体験。',
      rating: 4.6,
      reviewCount: 189,
      category: 'ラウンジバー',
      area: '新宿',
      priceRange: '￥￥',
      image: '/tatemono_bar.png',
      tags: ['エレクトロ', 'ダンス', 'カジュアル']
    },
    {
      id: 3,
      name: 'Matrix Lounge',
      description: 'サイバーパンクテーマのラウンジバー。映画の世界に迷い込んだような非日常体験。',
      rating: 4.9,
      reviewCount: 312,
      category: 'テーマバー',
      area: '六本木',
      priceRange: '￥￥￥￥',
      image: '/tatemono_bar.png',
      tags: ['サイバーパンク', 'テーマ', 'プレミアム']
    },
    {
      id: 4,
      name: 'Neon Heights',
      description: '高層階からの夜景とネオンカクテルが自慢のスカイバー。',
      rating: 4.7,
      reviewCount: 156,
      category: 'スカイバー',
      area: '東京駅',
      priceRange: '￥￥￥￥',
      image: '/tatemono_bar.png',
      tags: ['夜景', '高級', 'ロマンチック']
    },
    {
      id: 5,
      name: 'Digital Underground',
      description: '地下に隠れたサイバーパンクの聖地。テクノ音楽とクリエイティブカクテル。',
      rating: 4.5,
      reviewCount: 98,
      category: 'アンダーグラウンド',
      area: '秋葉原',
      priceRange: '￥￥',
      image: '/tatemono_bar.png',
      tags: ['テクノ', 'アンダーグラウンド', 'クリエイティブ']
    },
    {
      id: 6,
      name: 'Hologram Bar',
      description: 'ホログラム技術を使った革新的なバー体験。AR cocktailメニューも話題。',
      rating: 4.4,
      reviewCount: 203,
      category: 'テクノロジーバー',
      area: 'お台場',
      priceRange: '￥￥￥',
      image: '/tatemono_bar.png',
      tags: ['ホログラム', 'AR', 'イノベーション']
    }
  ];

  const [selectedCategory, setSelectedCategory] = React.useState('すべて');
  const [selectedArea, setSelectedArea] = React.useState('すべて');
  const [searchTerm, setSearchTerm] = React.useState('');

  const categories = ['すべて', 'カクテルバー', 'ラウンジバー', 'テーマバー', 'スカイバー', 'アンダーグラウンド', 'テクノロジーバー'];
  const areas = ['すべて', '渋谷', '新宿', '六本木', '東京駅', '秋葉原', 'お台場'];

  const filteredBars = bars.filter(bar => {
    const categoryMatch = selectedCategory === 'すべて' || bar.category === selectedCategory;
    const areaMatch = selectedArea === 'すべて' || bar.area === selectedArea;
    const searchMatch = bar.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       bar.description.toLowerCase().includes(searchTerm.toLowerCase());
    return categoryMatch && areaMatch && searchMatch;
  });

  return (
    <div className="min-h-screen pt-24 pb-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-neon-cyan glow-neon-cyan">BAR</span>
            <span className="text-neon-pink ml-4">COLLECTION</span>
          </h1>
          <p className="text-gray-300 text-lg">
            サイバーシティの隠れた名店を発見しよう
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-gray-900 border border-neon-blue rounded-lg p-6 mb-8">
          {/* Search Bar */}
          <div className="mb-6">
            <input
              type="text"
              placeholder="バー名や説明で検索..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-cyber-black border border-neon-cyan rounded-lg px-4 py-3 text-neon-cyan placeholder-gray-500 focus:outline-none focus:border-neon-pink glow-neon-cyan"
            />
          </div>

          {/* Filters */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Category Filter */}
            <div>
              <label className="block text-neon-orange mb-2 font-bold">カテゴリー</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full bg-cyber-black border border-neon-orange rounded-lg px-4 py-3 text-neon-orange focus:outline-none focus:border-neon-pink"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            {/* Area Filter */}
            <div>
              <label className="block text-neon-pink mb-2 font-bold">エリア</label>
              <select
                value={selectedArea}
                onChange={(e) => setSelectedArea(e.target.value)}
                className="w-full bg-cyber-black border border-neon-pink rounded-lg px-4 py-3 text-neon-pink focus:outline-none focus:border-neon-cyan"
              >
                {areas.map(area => (
                  <option key={area} value={area}>{area}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-neon-cyan">
            <span className="font-bold text-neon-orange">{filteredBars.length}</span> 件のバーが見つかりました
          </p>
        </div>

        {/* Bars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBars.map(bar => (
            <div key={bar.id} className="bg-gray-900 border border-neon-blue rounded-lg overflow-hidden hover:glow-neon-blue transition-all group cursor-pointer">
              {/* Bar Image */}
              <div className="w-full h-48 bg-gray-800 relative overflow-hidden">
                <img 
                  src={bar.image} 
                  alt={bar.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-neon-pink text-cyber-black px-3 py-1 rounded-full text-sm font-bold">
                    {bar.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-neon-cyan text-cyber-black px-3 py-1 rounded-full text-sm font-bold">
                    {bar.area}
                  </span>
                </div>
              </div>

              {/* Bar Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-neon-pink mb-2 group-hover:text-neon-cyan transition-colors">
                  {bar.name}
                </h3>
                
                <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                  {bar.description}
                </p>

                {/* Rating and Reviews */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="flex text-neon-orange mr-2">
                      {'★'.repeat(Math.floor(bar.rating))}
                      {bar.rating % 1 !== 0 && '☆'}
                    </div>
                    <span className="text-neon-cyan font-bold">{bar.rating}</span>
                    <span className="text-gray-400 text-sm ml-2">({bar.reviewCount}件)</span>
                  </div>
                  <span className="text-neon-orange font-bold">{bar.priceRange}</span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {bar.tags.map(tag => (
                    <span key={tag} className="bg-gray-800 text-neon-cyan px-2 py-1 rounded-full text-xs border border-neon-cyan">
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Action Button */}
                <Link href={`/bars/${bar.id}`}>
                  <button className="w-full bg-neon-blue text-cyber-black py-2 rounded-lg font-bold hover:bg-neon-cyan transition-colors glow-neon-blue">
                    詳細を見る
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredBars.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-neon-orange mb-2">バーが見つかりませんでした</h3>
            <p className="text-gray-400">検索条件を変更してお試しください</p>
          </div>
        )}
      </div>
    </div>
  );
}
