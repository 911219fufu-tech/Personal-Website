// app/experience/page.tsx
export const metadata = {
  title: "Experience - Joyce Fu",
  description: "My work experience and education",
};

export default function Experience() {
  return (
    <main className="w-full min-h-screen bg-gray-100 px-8 py-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl font-bold mb-12 text-gray-800">EXPERIENCE & EDUCATION</h2>
        
        {/* Experience */}
        <section className="mb-16">
          <h3 className="text-3xl font-bold text-gray-800 mb-8 pb-4 border-b-2 border-yellow-400">EXPERIENCE</h3>
          
          <div className="bg-gray-50 p-8 rounded-lg border-l-4 border-yellow-400">
            <h4 className="text-2xl font-bold text-gray-800 mb-2">Founder — Joyce Dream Shop, Taiwan</h4>
            <p className="text-yellow-600 font-bold mb-4">Sep 2021 – Jun 2023</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Established an e-store selling K-pop merchandise, achieving 200+ shipments and US$7,000 revenue per month.</li>
              <li>Applied Python and machine learning to analyze product data and identify popular combinations to boost revenue growth.</li>
              <li>Used Excel to summarize and visualize customer and sales metrics.</li>
              <li>Achieved 10% year-over-year revenue growth through data-driven optimization.</li>
            </ul>
          </div>
        </section>

        {/* Education */}
        <section>
          <h3 className="text-3xl font-bold text-gray-800 mb-8 pb-4 border-b-2 border-yellow-400">EDUCATION</h3>
          
          <div className="space-y-6">
            <div className="bg-gray-50 p-8 rounded-lg border-l-4 border-yellow-400">
              <h4 className="text-2xl font-bold text-gray-800 mb-2">New York University, Tandon School of Engineering</h4>
              <p className="text-yellow-600 font-semibold mb-3">M.S. in Cybersecurity — Sep 2025 - May 2027 (expected)</p>
              <p className="text-gray-700">Related Courses: Penetration Testing and Vulnerability Analysis, Network Security, Cryptography</p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg border-l-4 border-yellow-400">
              <h4 className="text-2xl font-bold text-gray-800 mb-2">San Francisco State University / Feng Chia University (Dual Degree)</h4>
              <p className="text-yellow-600 font-semibold mb-3">M.S. in Computer Science — Sep 2021 - May 2025</p>
              <p className="text-gray-700 mb-3">Related Courses: Intro to Web Software Development, Human-Computer Interaction, Software Development, AI Entrepreneurship, Algorithms, Ethics, Communication & Software Dev.</p>
              <p className="text-sm text-gray-600">GPA: 3.8/4.0 | Dean's List</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
