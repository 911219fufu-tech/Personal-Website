// app/education/page.tsx
export const metadata = {
  title: "Education - Joyce Fu",
  description: "My education background",
};

export default function Education() {
  return (
    <main className="w-full min-h-screen bg-gray-100 px-8 py-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl font-bold mb-12 text-gray-800">EDUCATION</h2>
        
        <div className="space-y-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">New York University, Tandon School of Engineering</h3>
            <p className="text-lg text-gray-600 mb-4">M.S. in Computer Science</p>
            <p className="text-gray-600 mb-4">Sep 2025 - May 2027 (Expected)</p>
            <p className="text-gray-700 leading-relaxed">
              Pursuing a Master's degree in Computer Science with focus on software engineering and user experience design. 
              Coursework includes advanced algorithms, machine learning, human-computer interaction, and security fundamentals.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">San Francisco State University / Feng Chia University</h3>
            <p className="text-lg text-gray-600 mb-4">B.S. in Computer Science (Dual Degree)</p>
            <p className="text-gray-600 mb-4">Sep 2021 - May 2025</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Completed dual Bachelor's degree program between two institutions</li>
              <li>Focus areas: Full-stack development, data analysis, and AI/ML applications</li>
              <li>GPA: 3.9/4.0</li>
              <li>Relevant coursework: Data Structures, Algorithms, Database Systems, Web Development</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
