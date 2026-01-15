// app/technical-skills/page.tsx
export const metadata = {
  title: "Technical Skills - Joyce Fu",
  description: "My technical skills and expertise",
};

export default function TechnicalSkills() {
  const skillCategories = [
    {
      name: "Programming Languages",
      skills: ["Python", "Java", "C", "C++", "C#", "JavaScript", "HTML", "CSS", "SQL", "MATLAB"]
    },
    {
      name: "Web Development",
      skills: ["React", "Node.js", "Next.js", "TypeScript", "Tailwind CSS", "RESTful APIs", "MySQL", "MongoDB"]
    },
    {
      name: "Design & UI/UX",
      skills: ["Figma", "UI/UX Design", "Wireframing", "Prototyping", "User Research", "Design Systems"]
    },
    {
      name: "Information Security",
      skills: ["Kali Linux", "Burp Suite", "Penetration Testing", "Network Security", "Vulnerability Assessment", "Ethical Hacking"]
    },
    {
      name: "AI/ML & Data Analysis",
      skills: ["PyTorch", "Machine Learning", "Data Analysis", "Data Visualization", "Statistical Analysis", "TensorFlow"]
    },
    {
      name: "Tools & Platforms",
      skills: ["Git", "GitHub", "Docker", "AWS", "Firebase", "Visual Studio Code", "Jira"]
    }
  ];

  return (
    <main className="w-full min-h-screen bg-gray-100 px-8 py-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl font-bold mb-12 text-gray-800" style={{ fontFamily: "'Arvo', serif", letterSpacing: '0.05em' }}>TECHNICAL SKILLS</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
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
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Certifications & Achievements</h3>
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-start">
              <span className="text-yellow-400 font-bold mr-4">•</span>
              <span>Full-Stack Development Proficiency - Demonstrated through multiple production applications</span>
            </li>
            <li className="flex items-start">
              <span className="text-yellow-400 font-bold mr-4">•</span>
              <span>UI/UX Design Excellence - Created user interfaces for 4+ major projects with high usability standards</span>
            </li>
            <li className="flex items-start">
              <span className="text-yellow-400 font-bold mr-4">•</span>
              <span>Information Security Knowledge - Hands-on experience with penetration testing and vulnerability assessment</span>
            </li>
            <li className="flex items-start">
              <span className="text-yellow-400 font-bold mr-4">•</span>
              <span>Entrepreneurship - Founded and successfully operated e-commerce business with strong technical backend</span>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
