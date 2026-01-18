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

  return (
    <main className="w-full min-h-screen bg-gray-100 px-8 py-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold mb-8 text-gray-800" style={{ fontFamily: "'Arvo', serif", letterSpacing: '0.05em' }}>TECHNICAL SKILLS</h2>
        <div className="max-w-4xl ml-0 space-y-0 grid md:grid-cols-2 gap-12">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-6 pb-3 border-b-2 border-yellow-400">
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 bg-yellow-100 text-gray-800 rounded-full text-sm font-semibold"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white p-8 rounded-lg shadow-md">
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
