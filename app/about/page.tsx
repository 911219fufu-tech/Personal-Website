// app/about/page.tsx
import React from 'react';

export const metadata = {
  title: "About - Joyce Fu",
  description: "About Joyce Fu",
};

export default function About() {
  return (
    <main className="w-full min-h-screen bg-gray-100 px-8 py-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold mb-8 text-gray-800" style={{ fontFamily: "'Arvo', serif", letterSpacing: '0.05em' }}>ABOUT ME</h2>
        
        <div className="grid md:grid-cols-3 gap-12">
          <div className="col-span-2">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              I'm a Master's student in Computer Science at NYU Tandon, passionate about building beautiful and functional websites. My main focus is front-end web development—turning Figma designs or wireframes into real, interactive web pages using HTML, CSS, and JavaScript (and frameworks like React/Next.js).
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              I enjoy collaborating with designers and product teams to bring ideas to life on the web. My strengths are in translating design specs into pixel-perfect, responsive, and accessible websites. I love the process of coding up layouts, animations, and user interactions, and making sure everything works smoothly across devices.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Outside of coding, I enjoy hiking, photography, and documenting travel experiences. I'm also passionate about mentoring others and building inclusive communities in tech.
            </p>
          </div>
          
          <div>
            <div className="space-y-6">
              <div className="bg-yellow-400 rounded-full w-32 h-32 flex items-center justify-center text-center shadow-lg">
                <div>
                  <p className="text-4xl font-bold text-gray-800">2</p>
                  <p className="text-sm font-semibold text-gray-800">Bachelors</p>
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
