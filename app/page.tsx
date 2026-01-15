// app/page.tsx - Home Page
export default function Home() {
  return (
    <main className="w-full min-h-screen bg-gray-100 text-gray-800 flex items-center justify-center pr-32">
      {/* Left yellow bar */}
      <div className="fixed left-0 top-1/2 transform -translate-y-1/2 w-8 h-80 bg-yellow-400 z-40"></div>
      
      {/* Right yellow bar */}
      <div className="fixed right-0 top-1/2 transform -translate-y-1/2 w-8 h-80 bg-yellow-400 z-40"></div>

      <section className="hero-section px-8 py-12 max-w-7xl mx-auto w-full">
        <div className="flex items-center justify-between gap-16 md:gap-8">
          <div className="flex-1 pl-12">
            <div>
              <p 
                className="hero-title text-yellow-500 mb-2 text-3xl font-bold"
                style={{
                  fontFamily: "'Arvo', serif",
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase'
                }}
              >HI THERE!</p>
              <div className="w-32 h-1 bg-yellow-500 mb-4"></div>
            </div>
            <h1 className="hero-subtitle font-serif text-6xl font-bold mb-2" style={{
              fontFamily: "'Arvo', serif",
              letterSpacing: '0.05em',
              textTransform: 'uppercase'
            }}>I'M JOYCE</h1>
            <p className="hero-meta bg-black text-yellow-400 px-3 py-2 inline-block text-sm font-bold mb-6" style={{ fontFamily: 'Gill Sans, sans-serif' }}>FRONT-END DEVELOPER | SOFTWARE ENGINEER</p>
            <p className="text-lg leading-relaxed mt-6 text-gray-700 max-w-lg">
              I'm a Master's student in <b>Computer Science</b> at NYU Tandon, actively looking for <b>Front-End Developer</b> and <b>Software Engineer</b> positions. I love turning Figma designs and wireframes into beautiful, responsive, and interactive websites using HTML, CSS, JavaScript, and React/Next.js.
            </p>
            <a href="/about" className="btn-primary mt-6 inline-block" style={{ fontFamily: 'Gill Sans, sans-serif' }}>MORE ABOUT ME</a>
          </div>
          <div className="flex-shrink-0 hidden md:block">
            <img src="/avatar.png" alt="Joyce Fu" className="w-80 h-80 rounded-full object-cover" />
          </div>
        </div>
      </section>
    </main>
  );
}
