// app/projects/page.tsx
export const metadata = {
  title: "Projects - Joyce Fu",
  description: "My projects and work",
};

export default function Projects() {
  return (
    <main className="w-full min-h-screen bg-gray-100 px-8 py-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold mb-8 text-gray-800" style={{ fontFamily: "'Arvo', serif", letterSpacing: '0.05em' }}>PROJECTS</h2>
        <div className="max-w-4xl ml-0 grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Project Card 1 */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:scale-[1.025] hover:shadow-2xl transition-all duration-300 flex flex-col">
            <div className="h-64 w-full bg-gray-100 flex items-center justify-center">
              <img src="/UNLMED.png" alt="UNLMED App" className="object-cover h-full w-full" style={{maxHeight:'16rem'}}/>
            </div>
            <div className="p-8 flex-1 flex flex-col">
              <div className="flex items-center gap-2 mb-1">
                <span className="inline-block bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-semibold">Mobile App</span>
                <span className="inline-block bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs font-semibold">AI</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-1">UNLMED — AI-Powered Sports Injury Prevention</h3>
              <p className="text-xs text-gray-500 mb-1">Feb 2025 - Jun 2025</p>
              <ul className="list-disc list-inside text-gray-700 text-xs space-y-1 mb-2">
                <li>UI/UX with Figma for wearable sports app</li>
                <li>Interactive prototypes for athlete/trainer/coach</li>
                <li>AI-driven injury prevention & recovery</li>
                <li>Mobile app in development</li>
              </ul>
              <div className="mt-auto flex gap-2">
                <a href="#" className="text-blue-500 hover:underline text-sm font-medium">Demo</a>
                <a href="#" className="text-gray-500 hover:text-gray-800 text-sm font-medium">GitHub</a>
              </div>
            </div>
          </div>

          {/* Project Card 2 */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:scale-[1.025] hover:shadow-2xl transition-all duration-300 flex flex-col">
            <div className="h-64 w-full bg-gray-100 flex items-center justify-center">
              <img src="/project2.png" alt="Joystick Journal" className="object-cover h-full w-full" style={{maxHeight:'16rem'}}/>
            </div>
            <div className="p-8 flex-1 flex flex-col">
              <div className="flex items-center gap-2 mb-1">
                <span className="inline-block bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-xs font-semibold">Web</span>
                <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">Node.js</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-1">Joystick Journal — Game Review Platform</h3>
              <p className="text-xs text-gray-500 mb-1">Sep 2024 - Jan 2025</p>
              <ul className="list-disc list-inside text-gray-700 text-xs space-y-1 mb-2">
                <li>Responsive UI with HTML, CSS, JS</li>
                <li>Node.js backend, game data API</li>
                <li>Search, rating, user comments</li>
                <li>Real-time updates, auth, review history</li>
              </ul>
              <div className="mt-auto flex gap-2">
                <a href="#" className="text-blue-500 hover:underline text-sm font-medium">Demo</a>
                <a href="#" className="text-gray-500 hover:text-gray-800 text-sm font-medium">GitHub</a>
              </div>
            </div>
          </div>

          {/* Project Card 3 */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:scale-[1.025] hover:shadow-2xl transition-all duration-300 flex flex-col">
            <div className="h-64 w-full bg-gray-100 flex items-center justify-center">
              <img src="/project3.png" alt="Linux File System" className="object-cover h-full w-full" style={{maxHeight:'16rem'}}/>
            </div>
            <div className="p-8 flex-1 flex flex-col">
              <div className="flex items-center gap-2 mb-1">
                <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">System</span>
                <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-semibold">C/C++</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-1">Linux File System Implementation</h3>
              <p className="text-xs text-gray-500 mb-1">Mar 2024 - May 2024</p>
              <ul className="list-disc list-inside text-gray-700 text-xs space-y-1 mb-2">
                <li>Block-based file system, custom volume/inode</li>
                <li>Command-line interface for file ops</li>
                <li>Buffer layer, bitmap space tracking</li>
                <li>Full test & documentation</li>
              </ul>
              <div className="mt-auto flex gap-2">
                <a href="#" className="text-blue-500 hover:underline text-sm font-medium">Demo</a>
                <a href="#" className="text-gray-500 hover:text-gray-800 text-sm font-medium">GitHub</a>
              </div>
            </div>
          </div>

          {/* Project Card 4 */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:scale-[1.025] hover:shadow-2xl transition-all duration-300 flex flex-col">
            <div className="h-64 w-full bg-gray-100 flex items-center justify-center">
              <img src="/project4.png" alt="Police Demographics" className="object-cover h-full w-full" style={{maxHeight:'16rem'}}/>
            </div>
            <div className="p-8 flex-1 flex flex-col">
              <div className="flex items-center gap-2 mb-1">
                <span className="inline-block bg-cyan-100 text-cyan-700 px-3 py-1 rounded-full text-xs font-semibold">Data</span>
                <span className="inline-block bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs font-semibold">MySQL</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-1">U.S. Police Shooting Demographics Analysis</h3>
              <p className="text-xs text-gray-500 mb-1">Sep 2023 - Dec 2023</p>
              <ul className="list-disc list-inside text-gray-700 text-xs space-y-1 mb-2">
                <li>Web app with JS, HTML, CSS, MySQL</li>
                <li>Dynamic tables & visualizations</li>
                <li>User login, search history</li>
                <li>Pattern analysis: age, gender, race, location</li>
              </ul>
              <div className="mt-auto flex gap-2">
                <a href="#" className="text-blue-500 hover:underline text-sm font-medium">Demo</a>
                <a href="#" className="text-gray-500 hover:text-gray-800 text-sm font-medium">GitHub</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
