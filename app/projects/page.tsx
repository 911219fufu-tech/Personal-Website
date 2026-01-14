// app/projects/page.tsx
export const metadata = {
  title: "Projects - Joyce Fu",
  description: "My projects and work",
};

export default function Projects() {
  return (
    <main className="w-full min-h-screen bg-gray-100 px-8 py-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold mb-12 text-gray-800">PROJECTS</h2>
        
        <div className="project-grid">
          <article className="project-card">
            <h3 className="text-2xl font-semibold text-gray-800">UNLMED — AI-Powered Sports Injury Prevention App</h3>
            <p className="project-meta">Feb 2025 - Jun 2025</p>
            <ul className="list-disc list-inside mt-4 text-sm text-gray-700 space-y-2">
              <li>Designed user interface and experience using Figma for wearable-integrated sports app.</li>
              <li>Created interactive prototypes for athlete, trainer, and coach dashboards.</li>
              <li>Aligned UI/UX with AI-driven injury prevention and recovery features.</li>
              <li>Currently working towards a fully functional mobile application for real-world use.</li>
            </ul>
          </article>

          <article className="project-card">
            <h3 className="text-2xl font-semibold text-gray-800">Joystick Journal — Game Review Platform</h3>
            <p className="project-meta">Sep 2024 - Jan 2025</p>
            <ul className="list-disc list-inside mt-4 text-sm text-gray-700 space-y-2">
              <li>Implemented responsive UI with HTML, CSS, and JavaScript.</li>
              <li>Integrated with Node.js backend to fetch game data and manage user interactions.</li>
              <li>Developed search, rating system, and user comments to boost engagement.</li>
              <li>Features: real-time updates, user authentication, and review history.</li>
            </ul>
          </article>

          <article className="project-card">
            <h3 className="text-2xl font-semibold text-gray-800">Linux File System Implementation</h3>
            <p className="project-meta">Mar 2024 - May 2024</p>
            <ul className="list-disc list-inside mt-4 text-sm text-gray-700 space-y-2">
              <li>Implemented a block-based Linux file system with custom volume control and inode management.</li>
              <li>Built an interactive command-line interface for file operations.</li>
              <li>Optimized file operations using a buffer layer and bitmap-based space tracking.</li>
              <li>Comprehensive testing and documentation of all file system features.</li>
            </ul>
          </article>

          <article className="project-card">
            <h3 className="text-2xl font-semibold text-gray-800">U.S. Police Shooting Demographics Analysis</h3>
            <p className="project-meta">Sep 2023 - Dec 2023</p>
            <ul className="list-disc list-inside mt-4 text-sm text-gray-700 space-y-2">
              <li>Built a web app using JavaScript, HTML, CSS, and MySQL for demographic analysis.</li>
              <li>Created dynamic tables and visualizations for intuitive data interaction.</li>
              <li>Implemented user login authentication and search history logging.</li>
              <li>Analyzed and visualized patterns in age, gender, race, and location data.</li>
            </ul>
          </article>
        </div>
      </div>
    </main>
  );
}
