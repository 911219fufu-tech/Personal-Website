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
              I am a <b>Master’s student in Computer Science at NYU Tandon</b>, specializing in bridging the gap between sophisticated design and high-performance front-end engineering. My core expertise lies in translating complex Figma prototypes into pixel-perfect, interactive web applications using modern technologies like <b>React, Next.js, and TypeScript</b>. I thrive on the challenge of turning static wireframes into responsive, user-centric interfaces that function seamlessly across all devices.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Beyond writing clean, maintainable code, I bring strong leadership experience as a <b>Scrum Master</b>. Having led cross-functional teams of seven, I am highly proficient in managing Agile sprints and facilitating collaboration between designers and developers. My technical portfolio is diverse, ranging from architecting AI-powered health dashboards to engineering full-stack data visualizers that manage large-scale datasets (8,000+ entries) using MySQL and PHP.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Outside of the terminal, I am an avid photographer and traveler. These creative outlets sharpen my eye for detail and visual harmony, which I bring back to every project I build. I am currently seeking <b>Front-end Engineering opportunities</b> where I can combine my technical rigor with my passion for beautiful, functional design.
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
