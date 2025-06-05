'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';

interface Cocktail {
  name: string;
  price: string;
  description: string;
}

interface Bar {
  id: number;
  name: string;
  area: string;
  rating: number;
  image: string;
  images: string[];
  description: string;
  priceRange: string;
  category: string;
  reviewCount: number;
  features: string[];
  openingHours: {
    weekday: string;
    weekend: string;
    holiday: string;
  };
  openHours: {
    weekday: string;
    weekend: string;
    holiday: string;
  };
  address: string;
  phone: string;
  website: string;
  tags: string[];
  cocktails: Array<{
    name: string;
    price: string;
    description: string;
  }>;
  signature_cocktails: Array<{
    name: string;
    price: string;
    description: string;
  }>;
}

export default function BarDetailPage() {
  const params = useParams();
  const id = params.id as string;

  // ユーザー名からユーザーIDへのマッピング
  const userNameToId: Record<string, string> = {
    'Tokyo_Mixer': 'cyber-drinker',
    'Cyber_Explorer': 'neon-ninja',
    'Neon_Walker': 'cyber-drinker',
    'Future_Drinker': 'neon-ninja',
    'Digital_Nomad': 'cyber-drinker',
    'Music_Lover': 'neon-ninja'
  };

  // モックデータ：実際のアプリでは API から取得
  const barData: Record<string, Bar> = {
    '1': {
      id: 1,
      name: 'Cyber Bar TOKYO',
      description: '未来的な雰囲気の中で楽しめるカクテルバー。ネオンライトと先進的な音響システムが特徴。最新のARメニューシステムと3Dホログラム演出で、まるで映画の世界に入り込んだような体験ができます。',
      rating: 4.8,
      reviewCount: 245,
      category: 'カクテルバー',
      area: '渋谷',
      priceRange: '￥￥￥',
      address: '東京都渋谷区道玄坂2-10-12 サイバービル B1F',
      phone: '03-1234-5678',
      website: 'https://cyber-bar-tokyo.com',
      image: '/tatemono_bar.png',
      openingHours: {
        weekday: '18:00 - 02:00',
        weekend: '17:00 - 03:00',
        holiday: '定休日: 月曜日'
      },
      openHours: {
        weekday: '18:00 - 02:00',
        weekend: '17:00 - 03:00',
        holiday: '定休日: 月曜日'
      },
      images: [
        '/tatemono_bar.png',
        '/tatemono_bar.png',
        '/tatemono_bar.png',
        '/tatemono_bar.png'
      ],
      tags: ['ネオン', 'カクテル', 'モダン', 'AR体験', 'ホログラム'],
      features: [
        'AR カクテルメニュー',
        '3D ホログラム演出',
        'プライベートブース',
        'ライブDJ',
        'VIP ラウンジ'
      ],
      cocktails: [
        { name: 'Neon Genesis', price: '¥1,800', description: 'ブルーキュラソーとウォッカのネオンカクテル' },
        { name: 'Matrix Shot', price: '¥1,200', description: 'グリーンアブサンの特製ショット' },
        { name: 'Cyber Punch', price: '¥2,200', description: 'フルーツミックスの光るパンチ' }
      ],
      signature_cocktails: [
        { name: 'Neon Genesis', price: '¥1,800', description: 'ブルーキュラソーとウォッカのネオンカクテル' },
        { name: 'Matrix Shot', price: '¥1,200', description: 'グリーンアブサンの特製ショット' },
        { name: 'Cyber Punch', price: '¥2,200', description: 'フルーツミックスの光るパンチ' }
      ]
    },
    '2': {
      id: 2,
      name: 'Electric Dreams',
      description: 'ネオンライトが美しいモダンバー。エレクトロミュージックと共に楽しむカクテル体験。',
      rating: 4.6,
      reviewCount: 189,
      category: 'ラウンジバー',
      area: '新宿',
      priceRange: '￥￥',
      address: '東京都新宿区歌舞伎町1-15-3 エレクトリックビル 5F',
      phone: '03-2345-6789',
      website: 'https://electric-dreams.com',
      image: '/tatemono_bar.png',
      openingHours: {
        weekday: '19:00 - 01:00',
        weekend: '18:00 - 02:00',
        holiday: '定休日: 火曜日'
      },
      openHours: {
        weekday: '19:00 - 01:00',
        weekend: '18:00 - 02:00',
        holiday: '定休日: 火曜日'
      },
      images: ['/tatemono_bar.png', '/tatemono_bar.png', '/tatemono_bar.png'],
      tags: ['エレクトロ', 'ダンス', 'カジュアル', 'LED'],
      features: ['LED ライトショー', 'ダンスフロア', 'DJブース', 'テラス席'],
      cocktails: [
        { name: 'Electric Blue', price: '¥1,500', description: 'エレクトリックブルーのシグネチャーカクテル' },
        { name: 'Dream Fizz', price: '¥1,300', description: 'スパークリングの夢のカクテル' }
      ],
      signature_cocktails: [
        { name: 'Electric Blue', price: '¥1,500', description: 'エレクトリックブルーのシグネチャーカクテル' },
        { name: 'Dream Fizz', price: '¥1,300', description: 'スパークリングの夢のカクテル' }
      ]
    },
    '3': {
      id: 3,
      name: 'Matrix Lounge',
      description: 'サイバーパンクテーマのラウンジバー。映画の世界に迷い込んだような非日常体験。',
      rating: 4.9,
      reviewCount: 312,
      category: 'テーマバー',
      area: '六本木',
      priceRange: '￥￥￥￥',
      address: '東京都港区六本木3-8-15 マトリックスタワー 10F',
      phone: '03-3456-7890',
      website: 'https://matrix-lounge.com',
      image: '/tatemono_bar.png',
      openingHours: {
        weekday: '17:00 - 02:00',
        weekend: '16:00 - 03:00',
        holiday: '定休日: なし'
      },
      openHours: {
        weekday: '17:00 - 02:00',
        weekend: '16:00 - 03:00',
        holiday: '定休日: なし'
      },
      images: ['/tatemono_bar.png', '/tatemono_bar.png', '/tatemono_bar.png', '/tatemono_bar.png'],
      tags: ['サイバーパンク', 'テーマ', 'プレミアム', 'ホログラム'],
      features: ['ホログラム バーテンダー', 'VR体験コーナー', 'プレミアムラウンジ', '個室完備'],
      cocktails: [
        { name: 'Red Pill', price: '¥2,500', description: '真実を見せる赤いカクテル' },
        { name: 'Blue Pill', price: '¥2,500', description: '夢の世界へ誘う青いカクテル' },
        { name: 'Neo Martini', price: '¥3,000', description: '最高級のプレミアムマティーニ' }
      ],
      signature_cocktails: [
        { name: 'Red Pill', price: '¥2,500', description: '真実を見せる赤いカクテル' },
        { name: 'Blue Pill', price: '¥2,500', description: '夢の世界へ誘う青いカクテル' },
        { name: 'Neo Martini', price: '¥3,000', description: '最高級のプレミアムマティーニ' }
      ]
    }
  };

  const bar = barData[id];
  const [selectedImageIndex, setSelectedImageIndex] = React.useState(0);

  // バーが見つからない場合の処理
  if (!bar) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-neon-orange mb-4">404</h1>
          <p className="text-gray-300 mb-8">バーが見つかりませんでした</p>
          <Link href="/bars" className="bg-neon-blue text-cyber-black px-6 py-3 rounded-lg font-bold hover:bg-neon-cyan transition-colors">
            バー一覧に戻る
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <div className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-neon-cyan hover:text-neon-pink transition-colors">ホーム</Link>
            <span className="text-gray-500">/</span>
            <Link href="/bars" className="text-neon-cyan hover:text-neon-pink transition-colors">バー一覧</Link>
            <span className="text-gray-500">/</span>
            <span className="text-gray-300">{bar.name}</span>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Image Gallery */}
          <div>
            <div className="mb-4">
              <Image
                src={bar.images[selectedImageIndex]}
                alt={bar.name}
                width={800}
                height={384}
                className="w-full h-96 object-cover rounded-lg border-2 border-neon-blue glow-neon-blue"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {bar.images.map((image: string, index: number) => (
                <Image
                  key={index}
                  src={image}
                  alt={`${bar.name} - ${index + 1}`}
                  width={80}
                  height={80}
                  className={`w-full h-20 object-cover rounded cursor-pointer border-2 transition-all ${
                    selectedImageIndex === index 
                      ? 'border-neon-pink glow-neon-pink' 
                      : 'border-gray-600 hover:border-neon-cyan'
                  }`}
                  onClick={() => setSelectedImageIndex(index)}
                />
              ))}
            </div>
          </div>

          {/* Bar Info */}
          <div>
            <div className="mb-4">
              <span className="bg-neon-pink text-cyber-black px-3 py-1 rounded-full text-sm font-bold mr-3">
                {bar.category}
              </span>
              <span className="bg-neon-cyan text-cyber-black px-3 py-1 rounded-full text-sm font-bold">
                {bar.area}
              </span>
            </div>

            <h1 className="text-4xl font-bold text-neon-pink mb-4 glow-neon-pink">
              {bar.name}
            </h1>

            <div className="flex items-center mb-6">
              <div className="flex text-neon-orange text-2xl mr-3">
                {'★'.repeat(Math.floor(bar.rating))}
                {bar.rating % 1 !== 0 && '☆'}
              </div>
              <span className="text-neon-cyan font-bold text-xl mr-2">{bar.rating}</span>
              <span className="text-gray-400">({bar.reviewCount}件のレビュー)</span>
            </div>

            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              {bar.description}
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <span className="text-neon-orange font-bold w-20">価格帯:</span>
                <span className="text-neon-cyan font-bold text-xl">{bar.priceRange}</span>
              </div>
              <div className="flex items-center">
                <span className="text-neon-orange font-bold w-20">住所:</span>
                <span className="text-gray-300">{bar.address}</span>
              </div>
              <div className="flex items-center">
                <span className="text-neon-orange font-bold w-20">電話:</span>
                <span className="text-gray-300">{bar.phone}</span>
              </div>
              <div className="flex items-center">
                <span className="text-neon-orange font-bold w-20">Web:</span>
                <a href={bar.website} className="text-neon-cyan hover:text-neon-pink transition-colors">
                  {bar.website}
                </a>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {bar.tags.map((tag: string) => (
                <span key={tag} className="bg-gray-800 text-neon-cyan px-3 py-1 rounded-full text-sm border border-neon-cyan">
                  #{tag}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <button className="bg-neon-pink text-cyber-black px-6 py-3 rounded-lg font-bold hover:scale-105 transition-transform glow-neon-pink">
                お気に入りに追加
              </button>
              <Link href={`/reviews/write?bar=${id}`}>
                <button className="bg-transparent border-2 border-neon-cyan text-neon-cyan px-6 py-3 rounded-lg font-bold hover:bg-neon-cyan hover:text-cyber-black transition-all">
                  レビューを書く
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Details Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Operating Hours */}
          <div className="bg-gray-900 border border-neon-blue rounded-lg p-6">
            <h3 className="text-2xl font-bold text-neon-cyan mb-4 glow-neon-cyan">営業時間</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-300">平日:</span>
                <span className="text-neon-orange font-bold">{bar.openHours.weekday}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">週末:</span>
                <span className="text-neon-orange font-bold">{bar.openHours.weekend}</span>
              </div>
              <div className="text-center pt-3 border-t border-gray-700">
                <span className="text-neon-pink">{bar.openHours.holiday}</span>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="bg-gray-900 border border-neon-pink rounded-lg p-6">
            <h3 className="text-2xl font-bold text-neon-pink mb-4 glow-neon-pink">特徴・設備</h3>
            <ul className="space-y-2">
              {bar.features.map((feature: string, index: number) => (
                <li key={index} className="flex items-center">
                  <span className="text-neon-cyan mr-2">•</span>
                  <span className="text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Signature Cocktails */}
          <div className="bg-gray-900 border border-neon-orange rounded-lg p-6">
            <h3 className="text-2xl font-bold text-neon-orange mb-4 glow-neon-orange">シグネチャーカクテル</h3>
            <div className="space-y-4">
              {bar.signature_cocktails.map((cocktail: Cocktail, index: number) => (
                <div key={index} className="border-b border-gray-700 pb-3 last:border-b-0">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="text-neon-cyan font-bold">{cocktail.name}</h4>
                    <span className="text-neon-orange font-bold">{cocktail.price}</span>
                  </div>
                  <p className="text-gray-400 text-sm">{cocktail.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="mt-12">
          <h3 className="text-3xl font-bold text-neon-pink mb-8 text-center glow-neon-pink">
            レビュー
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Sample Reviews */}
            <div className="bg-gray-900 border border-neon-blue rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-neon-pink rounded-full flex items-center justify-center mr-4">
                  <span className="text-cyber-black font-bold text-lg">T</span>
                </div>
                <div>
                  <Link href={`/users/${userNameToId['Tokyo_Mixer']}`} className="text-neon-pink font-bold hover:text-neon-cyan transition-colors">
                    Tokyo_Mixer
                  </Link>
                  <div className="flex text-neon-orange text-sm">
                    {'★'.repeat(5)}
                  </div>
                </div>
              </div>
              <p className="text-gray-300 mb-3">
                雰囲気が最高！ARメニューが本当に未来的で、カクテルの味も素晴らしかったです。
                スタッフの方も親切で、また絶対に来たいと思います。
              </p>
              <span className="text-gray-500 text-sm">2日前</span>
            </div>

            <div className="bg-gray-900 border border-neon-cyan rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-neon-cyan rounded-full flex items-center justify-center mr-4">
                  <span className="text-cyber-black font-bold text-lg">C</span>
                </div>
                <div>
                  <Link href={`/users/${userNameToId['Cyber_Explorer']}`} className="text-neon-cyan font-bold hover:text-neon-pink transition-colors">
                    Cyber_Explorer
                  </Link>
                  <div className="flex text-neon-orange text-sm">
                    {'★'.repeat(4)}{'☆'.repeat(1)}
                  </div>
                </div>
              </div>
              <p className="text-gray-300 mb-3">
                サイバーパンクの世界観が素晴らしい！ちょっと価格は高めですが、
                体験としては価値があります。デートにもおすすめです。
              </p>
              <span className="text-gray-500 text-sm">1週間前</span>
            </div>
          </div>

          <div className="text-center mt-8">
            <button className="bg-neon-blue text-cyber-black px-8 py-3 rounded-lg font-bold hover:bg-neon-cyan transition-colors glow-neon-blue">
              すべてのレビューを見る
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
