// app/page.tsx
export default function Page() {
  return (
    <main className="max-w-full text-gray-800 dark:text-gray-100">

      {/* Projects Section */}
      <section id="projects" className="bg-white px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">✨ Projects</h2>
          <div className="project-grid">
            <article className="project-card">
              <h3 className="text-2xl font-semibold">UNLMED — AI-Powered Sports Injury Prevention App</h3>
              <p className="project-meta">Feb 2025 - Jun 2025</p>
              <ul className="list-disc list-inside mt-3 text-sm">
                <li>Designed user interface and experience using Figma for wearable-integrated sports app.</li>
                <li>Created interactive prototypes for athlete, trainer, and coach dashboards.</li>
                <li>Aligned UI/UX with AI-driven injury prevention and recovery features.</li>
                <li>Working towards a fully functional mobile application for real-world use.</li>
              </ul>
            </article>

            <article className="project-card">
              <h3 className="text-2xl font-semibold">Joystick Journal — Game Review Platform</h3>
              <p className="project-meta">Sep 2024 - Jan 2025</p>
              <ul className="list-disc list-inside mt-3 text-sm">
                <li>Implemented responsive UI with HTML, CSS, and JavaScript.</li>
                <li>Integrated with Node.js backend to fetch game data and manage user interactions.</li>
                <li>Developed search, rating system, and user comments to boost engagement.</li>
              </ul>
            </article>

            <article className="project-card">
              <h3 className="text-2xl font-semibold">Linux File System Implementation (OS)</h3>
              <p className="project-meta">Mar 2024 - May 2024</p>
              <ul className="list-disc list-inside mt-3 text-sm">
                <li>Implemented a block-based Linux file system with custom volume control, inode management, and CLI.</li>
                <li>Optimized file operations using a buffer layer and bitmap-based space tracking.</li>
              </ul>
            </article>

            <article className="project-card">
              <h3 className="text-2xl font-semibold">U.S. Police Shooting Demographics Analysis (Web)</h3>
              <p className="project-meta">Sep 2023 - Dec 2023</p>
              <ul className="list-disc list-inside mt-3 text-sm">
                <li>Built a web app using JavaScript, HTML, CSS, and MySQL to analyze police shooting demographics.</li>
                <li>Created dynamic tables and visualizations for intuitive data interaction.</li>
                <li>Implemented login authentication and search history logging.</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="bg-gray-100 px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">💼 Experience</h2>
          <div className="prose mx-auto text-left">
            <h3>Founder – Joyce Dream Shop, Taiwan</h3>
            <p className="text-sm text-gray-500">Sep 2021 – Jun 2023</p>
            <ul className="list-disc list-inside">
              <li>Established an e-store selling K-pop merchandise, averaging 200 shipments and US$7,000 revenue per month.</li>
              <li>Applied Python and ML to analyze product data and identify popular combinations to boost sales.</li>
              <li>Used Excel to summarize and visualize customers and sales metrics.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="bg-white px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">🎓 Education</h2>
          <div className="text-left mx-auto max-w-2xl">
            <h3>New York University, Tandon School of Engineering</h3>
            <p className="text-sm text-gray-500">M.S. in Cybersecurity — Sep 2025 - May 2027 (expected)</p>

            <h3 className="mt-4">San Francisco State University / Feng Chia University</h3>
            <p className="text-sm text-gray-500">M.S. in Computer Science (Dual Degree) — Sep 2021 - May 2025</p>
            <p className="text-sm text-gray-500">Related courses: Intro to Web Software Development, HCI, Software Development, AI Entrepreneurship, Algorithms, Ethics, Communication & Software Dev.</p>
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
