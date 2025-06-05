"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

// バーの一覧（選択用）
const bars = [
  { id: "cyberpunk-lounge", name: "Cyberpunk Lounge", area: "渋谷" },
  { id: "neon-bar", name: "NEON BAR", area: "新宿" },
  { id: "digital-mixology", name: "Digital Mixology", area: "六本木" },
  { id: "matrix-bar", name: "Matrix Bar", area: "原宿" },
  { id: "blade-runner-bar", name: "Blade Runner Bar", area: "恵比寿" },
  { id: "future-spirits", name: "Future Spirits", area: "池袋" }
];

export default function WriteReviewPage() {
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState({
    barId: "",
    rating: 0,
    title: "",
    content: "",
    visitDate: "",
    atmosphere: 0,
    service: 0,
    drinks: 0,
    price: 0,
    recommend: true,
    tags: [] as string[],
    photos: [] as File[]
  });

  // URLパラメータからバーIDを取得
  useEffect(() => {
    const barId = searchParams.get('bar');
    if (barId && bars.find(bar => bar.id === barId)) {
      setFormData(prev => ({ ...prev, barId }));
    }
  }, [searchParams]);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const availableTags = [
    "デート", "友達と", "一人で", "カップル", "記念日", "おしゃれ", 
    "カクテル", "ウイスキー", "ワイン", "ビール", "静か", "賑やか",
    "高級", "カジュアル", "夜景", "音楽", "DJ", "ダンス"
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'number' ? Number(value) : value
    }));
  };

  const handleRatingClick = (category: string, rating: number) => {
    setFormData(prev => ({
      ...prev,
      [category]: rating
    }));
  };

  const handleTagToggle = (tag: string) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags.includes(tag) 
        ? prev.tags.filter(t => t !== tag)
        : [...prev.tags, tag]
    }));
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setFormData(prev => ({
      ...prev,
      photos: [...prev.photos, ...files].slice(0, 5) // 最大5枚
    }));
  };

  const removePhoto = (index: number) => {
    setFormData(prev => ({
      ...prev,
      photos: prev.photos.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // シミュレート：実際のAPI呼び出し
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
    }, 2000);
  };

  const renderStarRating = (category: string, value: number) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((rating) => (
          <button
            key={rating}
            type="button"
            onClick={() => handleRatingClick(category, rating)}
            className={`text-2xl transition-colors ${
              rating <= value ? "text-yellow-400" : "text-gray-600"
            } hover:text-yellow-300`}
          >
            ★
          </button>
        ))}
      </div>
    );
  };

  if (showSuccess) {
    return (
      <div className="min-h-screen bg-cyber-black text-white pt-24 pb-8">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="text-center py-16">
            <div className="text-6xl mb-6 animate-pulse">🎉</div>
            <h1 className="text-4xl font-bold text-neon-blue mb-4 neon-glow">
              レビューを投稿しました！
            </h1>
            <p className="text-neon-cyan text-lg mb-8">
              あなたのレビューが正常に投稿されました。<br/>
              他のユーザーがあなたの体験を参考にできます。
            </p>
            <div className="space-x-4">
              <Link
                href="/reviews"
                className="inline-block bg-neon-orange text-cyber-black px-8 py-3 rounded-lg font-bold hover:bg-neon-cyan hover:text-white transition-all duration-300 neon-glow"
              >
                レビュー一覧を見る
              </Link>
              <Link
                href={`/bars/${formData.barId}`}
                className="inline-block bg-neon-blue text-white px-8 py-3 rounded-lg font-bold hover:bg-neon-cyan transition-all duration-300 neon-glow"
              >
                バーの詳細を見る
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cyber-black text-white pt-24 pb-8">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* ヘッダー */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-neon-blue mb-2 neon-glow">
            レビューを投稿
          </h1>
          <p className="text-neon-cyan text-lg">
            あなたのバー体験をシェアしてください
          </p>
        </div>

        {/* フォーム */}
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* バー選択 */}
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-6 border border-neon-blue/30">
            <label className="block text-neon-orange font-bold mb-4">
              バーを選択 *
            </label>
            <select
              name="barId"
              value={formData.barId}
              onChange={handleInputChange}
              required
              className="w-full bg-gray-800/50 border border-neon-cyan/30 rounded-lg px-4 py-3 text-white focus:border-neon-orange focus:outline-none transition-colors"
            >
              <option value="">バーを選択してください</option>
              {bars.map(bar => (
                <option key={bar.id} value={bar.id}>
                  {bar.name} ({bar.area})
                </option>
              ))}
            </select>
          </div>

          {/* 総合評価 */}
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-6 border border-neon-blue/30">
            <label className="block text-neon-orange font-bold mb-4">
              総合評価 *
            </label>
            {renderStarRating("rating", formData.rating)}
            <p className="text-gray-400 text-sm mt-2">
              星をクリックして評価してください
            </p>
          </div>

          {/* 詳細評価 */}
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-6 border border-neon-blue/30">
            <h3 className="text-neon-orange font-bold mb-4">詳細評価</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-neon-cyan mb-2">雰囲気</label>
                {renderStarRating("atmosphere", formData.atmosphere)}
              </div>
              <div>
                <label className="block text-neon-cyan mb-2">サービス</label>
                {renderStarRating("service", formData.service)}
              </div>
              <div>
                <label className="block text-neon-cyan mb-2">ドリンク</label>
                {renderStarRating("drinks", formData.drinks)}
              </div>
              <div>
                <label className="block text-neon-cyan mb-2">価格</label>
                {renderStarRating("price", formData.price)}
              </div>
            </div>
          </div>

          {/* レビュータイトル */}
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-6 border border-neon-blue/30">
            <label className="block text-neon-orange font-bold mb-4">
              レビュータイトル *
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              required
              placeholder="例：最高のサイバーパンク体験！"
              className="w-full bg-gray-800/50 border border-neon-cyan/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-neon-orange focus:outline-none transition-colors"
            />
          </div>

          {/* レビュー内容 */}
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-6 border border-neon-blue/30">
            <label className="block text-neon-orange font-bold mb-4">
              レビュー内容 *
            </label>
            <textarea
              name="content"
              value={formData.content}
              onChange={handleInputChange}
              required
              rows={6}
              maxLength={1000}
              placeholder="バーの雰囲気、ドリンク、サービスなど、詳しく教えてください..."
              className="w-full bg-gray-800/50 border border-neon-cyan/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-neon-orange focus:outline-none transition-colors resize-none"
            />
            <div className="flex justify-between items-center mt-2">
              <p className="text-gray-400 text-sm">
                {formData.content.length}/1000文字
              </p>
              {formData.content.length > 900 && (
                <p className="text-neon-orange text-sm font-bold">
                  残り{1000 - formData.content.length}文字
                </p>
              )}
            </div>
          </div>

          {/* 訪問日 */}
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-6 border border-neon-blue/30">
            <label className="block text-neon-orange font-bold mb-4">
              訪問日
            </label>
            <input
              type="date"
              name="visitDate"
              value={formData.visitDate}
              onChange={handleInputChange}
              className="bg-gray-800/50 border border-neon-cyan/30 rounded-lg px-4 py-3 text-white focus:border-neon-orange focus:outline-none transition-colors"
            />
          </div>

          {/* タグ選択 */}
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-6 border border-neon-blue/30">
            <label className="block text-neon-orange font-bold mb-4">
              タグ選択
            </label>
            <div className="flex flex-wrap gap-3">
              {availableTags.map(tag => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => handleTagToggle(tag)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    formData.tags.includes(tag)
                      ? "bg-neon-orange text-cyber-black neon-glow"
                      : "bg-gray-700/50 text-gray-300 border border-gray-600 hover:border-neon-cyan"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
            <p className="text-gray-400 text-sm mt-2">
              選択中: {formData.tags.length}個
            </p>
          </div>

          {/* 写真アップロード */}
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-6 border border-neon-blue/30">
            <label className="block text-neon-orange font-bold mb-4">
              写真をアップロード (最大5枚)
            </label>
            <div className="space-y-4">
              <label className="block">
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handlePhotoUpload}
                  className="hidden"
                />
                <div className="border-2 border-dashed border-neon-cyan/30 rounded-lg p-6 text-center cursor-pointer hover:border-neon-orange/50 transition-colors">
                  <svg className="mx-auto h-12 w-12 text-gray-400 mb-4" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                    <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <p className="text-neon-cyan">
                    クリックして写真を選択
                  </p>
                  <p className="text-gray-400 text-sm">
                    PNG, JPG, GIF (最大10MB)
                  </p>
                </div>
              </label>

              {/* アップロード済み写真プレビュー */}
              {formData.photos.length > 0 && (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {formData.photos.map((photo, index) => (
                    <div key={index} className="relative">
                      <img
                        src={URL.createObjectURL(photo)}
                        alt={`アップロード ${index + 1}`}
                        className="w-full h-24 object-cover rounded-lg"
                      />
                      <button
                        type="button"
                        onClick={() => removePhoto(index)}
                        className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm hover:bg-red-600 transition-colors"
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* おすすめ度 */}
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-6 border border-neon-blue/30">
            <label className="block text-neon-orange font-bold mb-4">
              このバーをおすすめしますか？
            </label>
            <div className="flex gap-4">
              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="recommend"
                  value="true"
                  checked={formData.recommend === true}
                  onChange={(e) => setFormData(prev => ({ ...prev, recommend: true }))}
                  className="hidden"
                />
                <div className={`w-6 h-6 rounded-full border-2 mr-3 flex items-center justify-center ${
                  formData.recommend === true ? "border-neon-orange bg-neon-orange" : "border-gray-400"
                }`}>
                  {formData.recommend === true && (
                    <div className="w-3 h-3 bg-cyber-black rounded-full"></div>
                  )}
                </div>
                <span className="text-neon-cyan">はい、おすすめします</span>
              </label>
              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="recommend"
                  value="false"
                  checked={formData.recommend === false}
                  onChange={(e) => setFormData(prev => ({ ...prev, recommend: false }))}
                  className="hidden"
                />
                <div className={`w-6 h-6 rounded-full border-2 mr-3 flex items-center justify-center ${
                  formData.recommend === false ? "border-neon-orange bg-neon-orange" : "border-gray-400"
                }`}>
                  {formData.recommend === false && (
                    <div className="w-3 h-3 bg-cyber-black rounded-full"></div>
                  )}
                </div>
                <span className="text-neon-cyan">おすすめしません</span>
              </label>
            </div>
          </div>

          {/* 送信ボタン */}
          <div className="flex gap-4 justify-center">
            <Link
              href="/reviews"
              className="bg-gray-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-gray-700 transition-colors"
            >
              キャンセル
            </Link>
            <button
              type="submit"
              disabled={isSubmitting || !formData.barId || !formData.rating || !formData.title || !formData.content}
              className="bg-neon-orange text-cyber-black px-8 py-3 rounded-lg font-bold hover:bg-neon-cyan hover:text-white transition-all duration-300 neon-glow disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-neon-orange"
            >
              {isSubmitting ? (
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 border-2 border-cyber-black border-t-transparent rounded-full animate-spin"></div>
                  <div className="flex gap-1">
                    <span className="animate-pulse">投</span>
                    <span className="animate-pulse" style={{ animationDelay: '0.1s' }}>稿</span>
                    <span className="animate-pulse" style={{ animationDelay: '0.2s' }}>中</span>
                    <span className="animate-pulse" style={{ animationDelay: '0.3s' }}>.</span>
                    <span className="animate-pulse" style={{ animationDelay: '0.4s' }}>.</span>
                    <span className="animate-pulse" style={{ animationDelay: '0.5s' }}>.</span>
                  </div>
                </div>
              ) : (
                "📝 レビューを投稿"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
