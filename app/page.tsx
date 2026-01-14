// app/page.tsx
export default function Page() {
  return (
    <main className="max-w-full text-gray-800 dark:text-gray-100">

      {/* Projects Section */}
      <section id="projects" className="bg-white px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">✨ Projects</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <img src="/project1.jpg" alt="Project 1" className="mb-4 rounded" />
              <h3 className="text-xl font-semibold">AI-Powered Injury Prevention</h3>
              <p className="text-sm text-gray-500 mt-1">June 2024</p>
            </div>
            <div>
              <img src="/project2.jpg" alt="Project 2" className="mb-4 rounded" />
              <h3 className="text-xl font-semibold">Phishing Detection System</h3>
              <p className="text-sm text-gray-500 mt-1">May 2023</p>
            </div>
            <div>
              <img src="/project3.jpg" alt="Project 3" className="mb-4 rounded" />
              <h3 className="text-xl font-semibold">UX Redesign - Recipe App</h3>
              <p className="text-sm text-gray-500 mt-1">March 2023</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Me */}
      <section id="about" className="bg-gray-100 px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">🧍 About Me</h2>
          <p>
            I'm currently pursuing a Master’s in Cybersecurity at NYU Tandon. Previously interned at Yuanta Securities,
            conducted phishing detection research, and led full-stack projects that combined AI and security.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="bg-white px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">🛠️ Skills</h2>
          <ul className="space-y-2">
            <li>Languages: Python, JavaScript, TypeScript</li>
            <li>Frameworks: React, Next.js, Flask, TensorFlow</li>
            <li>Tools: Git, Docker, Tailwind CSS, Figma</li>
          </ul>
        </div>
      </section>

      {/* Life */}
      <section id="life" className="bg-gray-100 px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">📸 Life</h2>
          <p>
            I love hiking, photography, and documenting travel experiences through design and writing.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-white px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">📬 Contact</h2>
          <p className="mb-2">jf5456@nyu.edu</p>
          <a
            href="https://www.linkedin.com/in/joyce-fu-30a6b7288/"
            target="_blank"
            className="text-blue-500 underline"
          >
            LinkedIn Profile
          </a>
        </div>
      </section>
    </main>
  );
}
