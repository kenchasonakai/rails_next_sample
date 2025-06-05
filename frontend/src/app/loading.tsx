// グローバルローディングコンポーネント
export default function Loading() {
  return (
    <div className="min-h-screen bg-cyber-black flex items-center justify-center">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-16 w-16 border-4 border-neon-blue border-t-transparent mb-4"></div>
        <p className="text-neon-cyan text-lg animate-pulse">Loading...</p>
      </div>
    </div>
  );
}
