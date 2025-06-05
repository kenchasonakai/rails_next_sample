'use client';

import React, { memo, useMemo, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// バーの型定義
interface Bar {
  id: number;
  name: string;
  description: string;
  rating: number;
  reviewCount: number;
  category: string;
  area: string;
  priceRange: string;
  image: string;
  tags: string[];
}

// バーカードコンポーネントをメモ化
const BarCard = memo(({ bar }: { bar: Bar }) => {
  return (
    <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl overflow-hidden border border-neon-blue/30 hover:border-neon-orange/50 transition-all duration-300 group">
      <div className="relative">
        <Image
          src={bar.image}
          alt={bar.name}
          width={300}
          height={200}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          priority={false}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
        />
        <div className="absolute top-2 right-2 bg-black/50 rounded-lg px-2 py-1">
          <span className="text-neon-cyan text-sm font-medium">{bar.area}</span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-neon-blue group-hover:text-neon-cyan transition-colors">
            {bar.name}
          </h3>
          <span className="text-neon-orange font-bold">{bar.priceRange}</span>
        </div>
        
        <p className="text-gray-300 text-sm mb-3 line-clamp-2">
          {bar.description}
        </p>
        
        <div className="flex items-center gap-4 mb-3">
          <div className="flex items-center gap-1">
            <span className="text-yellow-400">★</span>
            <span className="text-white font-medium">{bar.rating}</span>
            <span className="text-gray-400 text-sm">({bar.reviewCount})</span>
          </div>
          <span className="text-neon-pink text-sm">{bar.category}</span>
        </div>
        
        <div className="flex flex-wrap gap-1 mb-4">
          {bar.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-neon-blue/20 text-neon-cyan text-xs px-2 py-1 rounded-full border border-neon-blue/30"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <Link
          href={`/bars/${bar.id}`}
          className="inline-block w-full bg-gradient-to-r from-neon-blue to-neon-cyan text-white text-center py-2 rounded-lg font-medium hover:from-neon-cyan hover:to-neon-blue transition-all duration-300 neon-glow"
        >
          詳細を見る
        </Link>
      </div>
    </div>
  );
});

BarCard.displayName = 'BarCard';

export default function BarsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('すべて');
  const [selectedArea, setSelectedArea] = useState('すべて');

  // フィルタリングされたバーをメモ化
  const filteredBars = useMemo(() => {
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

    return bars.filter(bar => {
      const categoryMatch = selectedCategory === 'すべて' || bar.category === selectedCategory;
      const areaMatch = selectedArea === 'すべて' || bar.area === selectedArea;
      const searchMatch = bar.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         bar.description.toLowerCase().includes(searchTerm.toLowerCase());
      return categoryMatch && areaMatch && searchMatch;
    });
  }, [selectedCategory, selectedArea, searchTerm]);

  const categories = ['すべて', 'カクテルバー', 'ラウンジバー', 'テーマバー', 'スカイバー', 'アンダーグラウンド', 'テクノロジーバー'];
  const areas = ['すべて', '渋谷', '新宿', '六本木', '東京駅', '秋葉原', 'お台場'];

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
            <BarCard key={bar.id} bar={bar} />
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
