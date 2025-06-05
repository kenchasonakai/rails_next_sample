'use client';

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen bg-cyber-black flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="text-6xl mb-4">⚡</div>
        <h2 className="text-2xl font-bold text-neon-red mb-4">
          システムエラーが発生しました
        </h2>
        <p className="text-gray-300 mb-6">
          申し訳ございませんが、予期しないエラーが発生しました。
        </p>
        <button
          onClick={reset}
          className="bg-neon-orange text-cyber-black px-6 py-3 rounded-lg font-bold hover:bg-neon-cyan transition-colors"
        >
          再試行
        </button>
      </div>
    </div>
  );
}
