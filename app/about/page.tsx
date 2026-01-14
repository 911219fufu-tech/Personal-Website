// app/about/page.tsx
export const metadata = {
  title: "About - Joyce Fu",
  description: "About Joyce Fu",
};

export default function About() {
  return (
    <main className="w-full min-h-screen bg-gray-100 px-8 py-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold mb-8 text-gray-800">ABOUT ME</h2>
        
        <div className="grid md:grid-cols-3 gap-12">
          <div className="col-span-2">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              I'm a Master's student in Cybersecurity at NYU Tandon, driven by a passion for building secure, user-centric digital experiences. With a background in full-stack development, UI/UX design, and data analysis, I've launched my own e-commerce business and contributed to several high-impact projects spanning AI, security, and web development.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              My expertise spans cybersecurity risk assessment, vulnerability scanning, and penetration testing, complemented by skills in modern web frameworks and data visualization. I thrive at the intersection of security and user experience.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              I love hiking, photography, and documenting travel experiences through design and writing. Beyond tech, I'm passionate about mentoring others and building inclusive communities in tech.
            </p>
          </div>
          
          <div>
            <div className="space-y-6">
              <div className="bg-yellow-400 rounded-full w-32 h-32 flex items-center justify-center text-center shadow-lg">
                <div>
                  <p className="text-4xl font-bold text-gray-800">2</p>
                  <p className="text-sm font-semibold text-gray-800">Masters</p>
                </div>
              </div>
              <div className="bg-gray-800 rounded-full w-32 h-32 flex items-center justify-center text-center shadow-lg">
                <div>
                  <p className="text-4xl font-bold text-yellow-400">4+</p>
                  <p className="text-sm font-semibold text-white">Projects</p>
                </div>
              </div>
              <div className="bg-yellow-400 rounded-full w-32 h-32 flex items-center justify-center text-center shadow-lg">
                <div>
                  <p className="text-4xl font-bold text-gray-800">1</p>
                  <p className="text-sm font-semibold text-gray-800">Startup</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
