import React from 'react';
import Link from 'next/link';

export default function HomePage() {
  // ユーザー名からユーザーIDへのマッピング
  const userNameToId: Record<string, string> = {
    'Tokyo_Mixer': 'cyber-drinker',
    'Cyber_Explorer': 'neon-ninja',
    'Neon_Walker': 'cyber-drinker',
    'Future_Drinker': 'neon-ninja',
    'Digital_Nomad': 'cyber-drinker',
    'Music_Lover': 'neon-ninja',
    'Cyber_Drinker': 'cyber-drinker'
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold mb-8">
            <span className="text-neon-pink glow-neon-pink animate-pulse">NEON</span>
            <span className="text-neon-blue ml-4">SPIRITS</span>
          </h1>
          <p className="text-neon-cyan text-xl md:text-2xl mb-12 font-light">
            サイバーパンクな夜の街でバーを発見し、レビューを共有しよう
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/bars">
              <button className="bg-neon-pink text-cyber-black px-8 py-4 rounded-lg font-bold text-lg glow-neon-pink hover:scale-105 transition-transform">
                バーを探す
              </button>
            </Link>
            <Link href="/reviews">
              <button className="bg-transparent border-2 border-neon-cyan text-neon-cyan px-8 py-4 rounded-lg font-bold text-lg glow-neon-cyan hover:bg-neon-cyan hover:text-cyber-black transition-all">
                レビューを投稿
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Bars Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-neon-cyan mb-12 text-center glow-neon-cyan">
            フィーチャードバー
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Bar Card 1 */}
            <div className="bg-gray-900 border border-neon-blue rounded-lg p-6 hover:glow-neon-blue transition-all">
              <div className="w-full h-48 bg-gray-800 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-neon-blue">Cyber Bar TOKYO</span>
              </div>
              <h3 className="text-xl font-bold text-neon-pink mb-2">Cyber Bar TOKYO</h3>
              <p className="text-gray-300 mb-4">未来的な雰囲気の中で楽しめるカクテルバー</p>
              <div className="flex items-center justify-between">
                <div className="flex text-neon-orange">
                  {'★'.repeat(5)}
                </div>
                <span className="text-neon-cyan">4.8/5</span>
              </div>
            </div>

            {/* Bar Card 2 */}
            <div className="bg-gray-900 border border-neon-pink rounded-lg p-6 hover:glow-neon-pink transition-all">
              <div className="w-full h-48 bg-gray-800 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-neon-pink">Electric Dreams</span>
              </div>
              <h3 className="text-xl font-bold text-neon-cyan mb-2">Electric Dreams</h3>
              <p className="text-gray-300 mb-4">ネオンライトが美しいモダンバー</p>
              <div className="flex items-center justify-between">
                <div className="flex text-neon-orange">
                  {'★'.repeat(4)}{'☆'.repeat(1)}
                </div>
                <span className="text-neon-cyan">4.6/5</span>
              </div>
            </div>

            {/* Bar Card 3 */}
            <div className="bg-gray-900 border border-neon-cyan rounded-lg p-6 hover:glow-neon-cyan transition-all">
              <div className="w-full h-48 bg-gray-800 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-neon-cyan">Matrix Lounge</span>
              </div>
              <h3 className="text-xl font-bold text-neon-orange mb-2">Matrix Lounge</h3>
              <p className="text-gray-300 mb-4">サイバーパンクテーマのラウンジバー</p>
              <div className="flex items-center justify-between">
                <div className="flex text-neon-orange">
                  {'★'.repeat(5)}
                </div>
                <span className="text-neon-cyan">4.9/5</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Reviews Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-neon-orange mb-12 text-center glow-neon-orange">
            新着レビュー
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Review Card 1 */}
            <div className="bg-gray-900 border border-neon-blue rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-neon-pink rounded-full flex items-center justify-center mr-3">
                  <span className="text-cyber-black font-bold">T</span>
                </div>
                <div>
                  <Link href={`/users/${userNameToId['Tokyo_Mixer']}`} className="text-neon-pink font-bold hover:text-neon-cyan transition-colors">
                    Tokyo_Mixer
                  </Link>
                  <p className="text-gray-400 text-sm">Cyber Bar TOKYO</p>
                </div>
              </div>
              <div className="flex text-neon-orange mb-2">
                {'★'.repeat(5)}
              </div>
              <p className="text-gray-300">
                雰囲気が最高！カクテルもとても美味しくて、また来たいです。
              </p>
            </div>

            {/* Review Card 2 */}
            <div className="bg-gray-900 border border-neon-cyan rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-neon-cyan rounded-full flex items-center justify-center mr-3">
                  <span className="text-cyber-black font-bold">N</span>
                </div>
                <div>
                  <Link href={`/users/${userNameToId['Neon_Walker']}`} className="text-neon-cyan font-bold hover:text-neon-pink transition-colors">
                    Neon_Walker
                  </Link>
                  <p className="text-gray-400 text-sm">Electric Dreams</p>
                </div>
              </div>
              <div className="flex text-neon-orange mb-2">
                {'★'.repeat(4)}{'☆'.repeat(1)}
              </div>
              <p className="text-gray-300">
                ライティングが素晴らしく、写真映えするバーです。
              </p>
            </div>

            {/* Review Card 3 */}
            <div className="bg-gray-900 border border-neon-pink rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-neon-orange rounded-full flex items-center justify-center mr-3">
                  <span className="text-cyber-black font-bold">C</span>
                </div>
                <div>
                  <Link href={`/users/${userNameToId['Cyber_Drinker']}`} className="text-neon-orange font-bold hover:text-neon-cyan transition-colors">
                    Cyber_Drinker
                  </Link>
                  <p className="text-gray-400 text-sm">Matrix Lounge</p>
                </div>
              </div>
              <div className="flex text-neon-orange mb-2">
                {'★'.repeat(5)}
              </div>
              <p className="text-gray-300">
                完璧なサイバーパンク体験！スタッフも親切で大満足です。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Rankings Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-neon-pink mb-12 text-center glow-neon-pink">
            人気ランキング
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Bar Rankings */}
            <div>
              <h3 className="text-2xl font-bold text-neon-cyan mb-6 glow-neon-cyan">バーランキング</h3>
              <div className="space-y-4">
                <div className="flex items-center p-4 bg-gray-900 border border-neon-blue rounded-lg">
                  <span className="text-3xl font-bold text-neon-orange mr-4">1</span>
                  <div className="flex-1">
                    <h4 className="text-neon-pink font-bold">Matrix Lounge</h4>
                    <div className="flex text-neon-orange text-sm">
                      {'★'.repeat(5)} <span className="ml-2 text-neon-cyan">4.9/5</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-gray-900 border border-neon-pink rounded-lg">
                  <span className="text-3xl font-bold text-neon-orange mr-4">2</span>
                  <div className="flex-1">
                    <h4 className="text-neon-cyan font-bold">Cyber Bar TOKYO</h4>
                    <div className="flex text-neon-orange text-sm">
                      {'★'.repeat(5)} <span className="ml-2 text-neon-cyan">4.8/5</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-gray-900 border border-neon-cyan rounded-lg">
                  <span className="text-3xl font-bold text-neon-orange mr-4">3</span>
                  <div className="flex-1">
                    <h4 className="text-neon-orange font-bold">Electric Dreams</h4>
                    <div className="flex text-neon-orange text-sm">
                      {'★'.repeat(4)}{'☆'.repeat(1)} <span className="ml-2 text-neon-cyan">4.6/5</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Cocktail Rankings */}
            <div>
              <h3 className="text-2xl font-bold text-neon-orange mb-6 glow-neon-orange">カクテルランキング</h3>
              <div className="space-y-4">
                <div className="flex items-center p-4 bg-gray-900 border border-neon-blue rounded-lg">
                  <span className="text-3xl font-bold text-neon-pink mr-4">1</span>
                  <div className="flex-1">
                    <h4 className="text-neon-cyan font-bold">Neon Martini</h4>
                    <p className="text-gray-400 text-sm">Matrix Lounge</p>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-gray-900 border border-neon-pink rounded-lg">
                  <span className="text-3xl font-bold text-neon-pink mr-4">2</span>
                  <div className="flex-1">
                    <h4 className="text-neon-orange font-bold">Cyber Punch</h4>
                    <p className="text-gray-400 text-sm">Cyber Bar TOKYO</p>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-gray-900 border border-neon-cyan rounded-lg">
                  <span className="text-3xl font-bold text-neon-pink mr-4">3</span>
                  <div className="flex-1">
                    <h4 className="text-neon-pink font-bold">Electric Blue</h4>
                    <p className="text-gray-400 text-sm">Electric Dreams</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

