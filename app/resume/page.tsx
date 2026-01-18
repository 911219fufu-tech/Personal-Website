// app/resume/page.tsx
export const metadata = {
  title: "Resume - Joyce Fu",
  description: "Resume and contact information for Joyce Fu",
};

export default function Resume() {
  return (
    <main className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-xl relative">
      {/* Download PDF button top-right */}
      <a
        href="/Joyce_Fu_Resume.pdf"
        download
        className="absolute right-8 top-8 flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg shadow hover:bg-gray-700 transition font-semibold text-sm"
        title="Download PDF Resume"
      >
        <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 5v14m0 0l-5-5m5 5l5-5"/></svg>
        Download PDF
      </a>
      <h1 className="text-4xl font-bold mb-2">JIA-YIN (JOYCE) FU</h1>
      <p className="resume-contact mb-6">Brooklyn, NY • 1(628)488-2511 • jf5456@nyu.edu • <a href="https://linkedin.com/in/jia-yin-fu" className="text-blue-600 underline">LinkedIn</a></p>

      <section className="mb-6 resume-section">
        <h2 className="text-2xl font-semibold mb-2">Summary</h2>
        <p>Master's student in Computer Science seeking UX/UI and Software Engineering roles. Full-stack development, information security, and data analysis expertise with hands-on experience in penetration testing and security tools (Kali Linux). Track record of launching e-commerce business and building high-impact applications.</p>
      </section>

      <section className="mb-6 resume-section">
        <h2 className="text-2xl font-semibold mb-2">Projects</h2>
        <div className="space-y-4">
          <div>
            <div className="flex flex-wrap justify-between items-center">
              <span className="font-bold">UNLMED — AI-Powered Sports Injury Prevention App</span>
              <span className="text-sm text-gray-500">Feb. 2025 - Jun. 2025</span>
            </div>
            <ul className="list-disc list-inside ml-5 text-sm">
              <li>Designed user interface and experience using Figma for wearable-integrated sports app.</li>
              <li>Created interactive prototypes for athlete, trainer, and coach dashboards.</li>
              <li>Collaborated with team to align UI/UX designs with AI-driven injury prevention and recovery features.</li>
              <li>Working towards a fully functional mobile application for real-world use.</li>
            </ul>
          </div>
          <div>
            <div className="flex flex-wrap justify-between items-center">
              <span className="font-bold">ReadyRecipe — Recipe Ingredient Delivery Platform</span>
              <span className="text-sm text-gray-500">Sep. 2024 - Jan. 2025</span>
            </div>
            <ul className="list-disc list-inside ml-5 text-sm">
              <li>Designed a smart cart to prioritize user control, allowing selective purchasing of missing ingredients.</li>
              <li>Created a real-time tracking UI to enhance system visibility and reduce user anxiety during delivery.</li>
              <li>Optimized responsive layouts to ensure visual consistency and seamless navigation across all devices.</li>
            </ul>
          </div>
          <div>
            <div className="flex flex-wrap justify-between items-center">
              <span className="font-bold">Joystick Journal — Game Review Platform</span>
              <span className="text-sm text-gray-500">Sep. 2024 - Jan. 2025</span>
            </div>
            <ul className="list-disc list-inside ml-5 text-sm">
              <li>Front-end developer: implemented responsive UI with HTML, CSS, and JavaScript.</li>
              <li>Integrated with Node.js backend to fetch game data, submit reviews, and manage user interactions.</li>
              <li>Developed interactive features including search, rating system, and user comments for better engagement.</li>
            </ul>
          </div>
          <div>
            <div className="flex flex-wrap justify-between items-center">
              <span className="font-bold">U.S. Police Shooting Demographics Analysis, Web Design</span>
              <span className="text-sm text-gray-500">Sep. 2023 - Dec. 2023</span>
            </div>
            <ul className="list-disc list-inside ml-5 text-sm">
              <li>Developed a web application using JavaScript, CSS, HTML, and MySQL to analyze U.S. police shooting demographics.</li>
              <li>Created dynamic tables to display demographic data (age, gender, race, etc.) and a user-friendly interface that enables intuitive and effective data interaction and visualization.</li>
              <li>Implemented user login authentication and recorded search history for user reference.</li>
            </ul>
          </div>
        </div>
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
        <div className="mb-2">
          <p className="text-sm font-bold">New York University, Tandon School of Engineering</p>
          <p className="text-sm">M.S. in Computer Science (Sep 2025 - May 2027 expected)</p>
          {/* Relevant Courses - Master */}
          <div className="mt-2">
            <span className="font-semibold text-gray-700">Relevant Courses:</span>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-1 text-sm mt-1 list-none pl-0">
              <li className="flex items-center gap-2"><span className="text-blue-500">&#9679;</span>Information Visualization</li>
              <li className="flex items-center gap-2"><span className="text-purple-500">&#9679;</span>Human Computer Interaction</li>
              <li className="flex items-center gap-2"><span className="text-green-600">&#9679;</span>Application Security</li>
            </ul>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-sm font-bold">San Francisco State University / Feng Chia University</p>
          <p className="text-sm">B.S. in Computer Science (Dual Degree) (Sep 2021 - May 2025)</p>
          {/* Relevant Courses - Bachelor */}
          <div className="mt-2">
            <span className="font-semibold text-gray-700">Relevant Courses:</span>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-1 text-sm mt-1 list-none pl-0">
              <li className="flex items-center gap-2"><span className="text-blue-500">&#9679;</span>Web Software Development</li>
              <li className="flex items-center gap-2"><span className="text-pink-500">&#9679;</span>Human-Computer Interaction</li>
              <li className="flex items-center gap-2"><span className="text-green-500">&#9679;</span>Software Engineering</li>
              <li className="flex items-center gap-2"><span className="text-purple-500">&#9679;</span>Data Structures & Algorithms</li>
              <li className="flex items-center gap-2"><span className="text-cyan-500">&#9679;</span>Computer Networks</li>
              <li className="flex items-center gap-2"><span className="text-gray-500">&#9679;</span>Cloud Computing</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-6 resume-section">
        <h2 className="text-2xl font-semibold mb-2">Technical Strengths</h2>
        <p className="text-sm">Languages: Python, Java, C, C++, C#, JavaScript, HTML, CSS, SQL, MATLAB</p>
        <p className="text-sm">Toolkits: Node.js, PyTorch, MySQL, Git, Figma, Kali Linux, Burp Suite</p>
        <p className="text-sm">Specialties: Web Development (Frontend/UI Design), Cybersecurity (Risk Assessment, Vulnerability Scanning, Penetration Testing)</p>
      </section>

      {/* Download button moved to top-right */}
    </main>
  );
}
