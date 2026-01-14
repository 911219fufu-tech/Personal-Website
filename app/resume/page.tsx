// app/resume/page.tsx
export const metadata = {
  title: "Resume - Joyce Fu",
  description: "Resume and contact information for Joyce Fu",
};

export default function Resume() {
  return (
    <main className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-2">JIA-YIN (JOYCE) FU</h1>
      <p className="resume-contact mb-6">New York, NY • 1(628)488-2511 • 911219fufu@gmail.com • <a href="https://linkedin.com/in/jia-yin-fu" className="text-blue-600 underline">LinkedIn</a></p>

      <section className="mb-6 resume-section">
        <h2 className="text-2xl font-semibold mb-2">Summary</h2>
        <p>Master's student in Cybersecurity with full-stack and UI/UX experience, AI and data analysis background, and experience launching e-commerce and web projects.</p>
      </section>

      <section className="mb-6 resume-section">
        <h2 className="text-2xl font-semibold mb-2">Projects</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>UNLMED — AI-Powered Sports Injury Prevention App</strong> (Feb 2025 - Jun 2025)
            <p className="text-sm">Designed UI/UX with Figma for wearable-integrated sports app; created prototypes for athlete, trainer, and coach dashboards; aligned UI/UX with AI-driven injury prevention features.</p>
          </li>
          <li>
            <strong>Joystick Journal — Game Review Platform</strong> (Sep 2024 - Jan 2025)
            <p className="text-sm">Front-end development with responsive UI; Node.js integration; search, rating, and comments features.</p>
          </li>
          <li>
            <strong>Linux File System Implementation</strong> (Mar 2024 - May 2024)
            <p className="text-sm">Built a block-based file system with inode/volume management and CLI; optimized file operations with buffer layer and bitmap space tracking.</p>
          </li>
          <li>
            <strong>U.S. Police Shooting Demographics Analysis</strong> (Sep 2023 - Dec 2023)
            <p className="text-sm">Web app using JavaScript, HTML, CSS, and MySQL for demographic analysis, dynamic tables, visualizations, and authentication.</p>
          </li>
        </ul>
      </section>

      <section className="mb-6 resume-section">
        <h2 className="text-2xl font-semibold mb-2">Experience</h2>
        <h3 className="font-semibold">Founder — Joyce Dream Shop, Taiwan</h3>
        <p className="text-sm text-gray-500">Sep 2021 – Jun 2023</p>
        <ul className="list-disc list-inside mt-2 text-sm">
          <li>Established an e-store selling K-pop merchandise; averaged 200 shipments and US$7,000 revenue per month.</li>
          <li>Used Python and ML to analyze product data, identify popular combinations, and increase revenue.</li>
          <li>Summarized and visualized customers and sales using Excel.</li>
        </ul>
      </section>

      <section className="mb-6 resume-section">
        <h2 className="text-2xl font-semibold mb-2">Education</h2>
        <p className="text-sm"><strong>New York University, Tandon School of Engineering</strong> — M.S. in Cybersecurity (Sep 2025 - May 2027 expected)</p>
        <p className="text-sm mt-2"><strong>San Francisco State University / Feng Chia University</strong> — M.S. in Computer Science (Dual Degree) (Sep 2021 - May 2025)</p>
      </section>

      <section className="mb-6 resume-section">
        <h2 className="text-2xl font-semibold mb-2">Technical Strengths</h2>
        <p className="text-sm">Languages: Python, Java, C, C++, C#, JavaScript, HTML, CSS, SQL, MATLAB</p>
        <p className="text-sm">Toolkits: Node.js, PyTorch, MySQL, Git, Figma</p>
        <p className="text-sm">Specialties: Web Development (Frontend/UI Design), Cybersecurity (Risk Assessment, Vulnerability Scanning, Penetration Testing)</p>
      </section>

      <a href="/Joyce_Fu___Resume.pdf" download className="btn-primary">Download PDF</a>
    </main>
  );
}
