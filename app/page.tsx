// app/page.tsx - Home Page
export default function Home() {
  return (
    <main className="w-full min-h-screen bg-gray-100 text-gray-800 flex items-center justify-center">
      <section className="hero-section px-8 py-12 max-w-7xl mx-auto w-full">
        <div className="flex items-center justify-between gap-16 md:gap-8">
          <div className="flex-1">
            <p className="hero-title text-yellow-500 mb-2">HI THERE!</p>
            <h1 className="hero-subtitle">I'M JOYCE</h1>
            <p className="hero-meta">CYBERSECURITY | DEVELOPER | UI/UX DESIGNER</p>
            <p className="text-lg leading-relaxed mt-4 text-gray-700 max-w-lg">
              Master's student in Cybersecurity at NYU Tandon with full-stack development experience, AI/ML background, and a track record of building impactful web applications and launching startups.
            </p>
            <a href="/about" className="btn-primary mt-6 inline-block">MORE ABOUT ME</a>
          </div>
          <div className="flex-shrink-0 hidden md:block">
            <img src="/avatar.png" alt="Joyce Fu" className="w-80 h-80 rounded-full object-cover" />
          </div>
        </div>
      </section>
    </main>
  );
}
