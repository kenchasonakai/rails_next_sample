import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center pt-24 pb-8">
      <h1 className="text-3xl font-bold">About ページ</h1>
      <p className="mt-4 text-lg">
        ここは新しく追加した About ページです。
      </p>
      <Link
        href="/"
        className="mt-6 inline-block px-5 py-2 rounded transition"
      >
        ホームに戻る
      </Link>
      <div className="join w-xl">
        <div className="neon-accordion border-neon-b">
          <input type="radio" name="neon-accordion" />
          <div className="neon-accordion-title font-bold">
            ACCESS THE GRID
          </div>
          <div className="neon-accordion-content">
            Connect your citizen ID to the central CityCore system of Neo
            Metro City to unlock encrypted infrastructure modules. Once access
            is granted, you’ll be able to infiltrate closed sectors and
            navigate hidden digital layers normally concealed from public
            view.
          </div>
        </div>

        <div className="neon-accordion border-neon-b">
          <input type="radio" name="neon-accordion" />
          <div className="neon-accordion-title text-neon-orange font-bold">
            INITIATE PROTOCOL
          </div>
          <div className="neon-accordion-content">
            Activate your neural link and calibrate your personal system
            environment. By syncing your cognitive waveform with the citywide
            MetroNet, your reaction speed and information throughput will
            significantly improve.
          </div>
        </div>

        <div className="neon-accordion text-neon-blue">
          <input type="radio" name="neon-accordion" />
          <div className="neon-accordion-title text-neon-pink font-bold">
            CONNECT TO SKYLINE
          </div>
          <div className="neon-accordion-content">
            The Skyline Archive stores the city’s lost history, hidden
            records, and encrypted memories. Connecting grants you access to
            deleted datasets and partially reconstructed visual logs.
          </div>
        </div>
      </div>
    </main>
  );
}
