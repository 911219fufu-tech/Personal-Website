// app/technical-skills/page.tsx
export const metadata = {
  title: "Technical Skills - Joyce Fu",
  description: "My technical skills and expertise",
};

export default function TechnicalSkills() {
  const skillCategories = [
    {
      name: "Front-End Development",
      skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "Responsive Design", "Cross-Browser Compatibility"]
    },
    {
      name: "Software Engineering",
      skills: ["Node.js", "RESTful APIs", "MySQL", "Git", "GitHub", "Collaborative Development"]
    },
    {
      name: "Design Implementation",
      skills: ["Figma", "Pixel-Perfect Coding", "Wireframing", "Prototyping"]
    },
    {
      name: "Additional Experience",
      skills: ["Python", "Java", "C/C++", "Information Security (Kali Linux, Pen Testing)", "AI/ML (PyTorch, TensorFlow)"]
    }
  ];

  // Icon SVGs for each category
  const icons = [
    // Front-End Development
    <svg key="frontend" className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M8 2v4M16 2v4M3 10h18"/></svg>,
    // Software Engineering
    <svg key="software" className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 17v2a2 2 0 002 2h12a2 2 0 002-2v-2"/><rect x="7" y="9" width="10" height="8" rx="2"/><path d="M12 13v2"/></svg>,
    // Design Implementation
    <svg key="design" className="w-8 h-8 text-pink-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 3v4M8 3v4M2 13h20"/></svg>,
    // Additional Experience
    <svg key="other" className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M8 12h8M12 8v8"/></svg>
  ];

  return (
    <main className="w-full min-h-screen bg-gray-100 px-8 py-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold mb-8 text-gray-800" style={{ fontFamily: "'Arvo', serif", letterSpacing: '0.05em' }}>TECHNICAL SKILLS</h2>
        <div className="max-w-4xl ml-0 space-y-0 grid md:grid-cols-2 gap-12">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="relative p-4 rounded-xl shadow-xl bg-gray-50 border border-gray-200 overflow-hidden"
              style={{ minHeight: '240px' }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span>{icons[index]}</span>
                <h3 className="text-xl font-bold text-gray-800">
                  {category.name}
                </h3>
              </div>
              <div className="h-1 w-20 bg-gray-300 rounded-full mb-6" />
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 bg-white/80 hover:bg-yellow-200 transition text-gray-800 rounded-full text-sm font-semibold border border-yellow-200 shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white p-4 rounded-xl shadow-xl bg-gray-50 border border-gray-200 overflow-hidden max-w-4xl ml-0">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Career Focus</h3>
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-start">
              <span className="text-yellow-400 font-bold mr-4">•</span>
              <span><b>Front-End Developer</b> is my top priority—skilled in React, Next.js, HTML, CSS, JavaScript, TypeScript, Tailwind CSS, and Figma implementation.</span>
            </li>
            <li className="flex items-start">
              <span className="text-yellow-400 font-bold mr-4">•</span>
              <span>Experienced in building responsive, pixel-perfect, and cross-browser compatible websites from design specs.</span>
            </li>
            <li className="flex items-start">
              <span className="text-yellow-400 font-bold mr-4">•</span>
              <span><b>Software Engineer</b> is my secondary focus—proficient in backend, APIs, and collaborative development using Git, Node.js, and MySQL.</span>
            </li>
            <li className="flex items-start">
              <span className="text-yellow-400 font-bold mr-4">•</span>
              <span>Additional experience in security, data analysis, and full-stack projects.</span>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
