// app/contact/page.tsx
export const metadata = {
  title: "Contact - Joyce Fu",
  description: "Get in touch with Joyce Fu",
};

export default function Contact() {
  return (
    <main className="w-full min-h-screen bg-gray-100 px-8 py-16 flex items-center justify-center">
      <div className="max-w-2xl mx-auto w-full">
        <h2 className="text-5xl font-bold mb-4 text-gray-800 text-center">CONTACT</h2>
        <p className="text-xl text-gray-600 text-center mb-12">Let's Connect!</p>
        
        <div className="bg-gray-50 p-12 rounded-lg shadow-lg">
          <p className="text-lg text-gray-700 mb-8 text-center">
            Feel free to reach out via email, connect on LinkedIn, or download my resume to learn more about my experience.
          </p>

          <div className="space-y-6">
            {/* Email */}
            <div className="flex items-center gap-6 p-6 bg-white rounded-lg hover:shadow-md transition">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-8 h-8 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-600">Email</p>
                <a href="mailto:jf5456@nyu.edu" className="text-lg font-bold text-gray-800 hover:text-yellow-500">
                  jf5456@nyu.edu
                </a>
              </div>
            </div>

            {/* LinkedIn */}
            <div className="flex items-center gap-6 p-6 bg-white rounded-lg hover:shadow-md transition">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-8 h-8 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-600">LinkedIn</p>
                <a href="https://www.linkedin.com/in/joyce-fu-30a6b7288/" target="_blank" className="text-lg font-bold text-gray-800 hover:text-yellow-500">
                  joyce-fu-30a6b7288
                </a>
              </div>
            </div>

            {/* Resume */}
            <div className="flex items-center gap-6 p-6 bg-white rounded-lg hover:shadow-md transition">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-8 h-8 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-8-6z"/>
                  <polyline points="14 2 14 8 20 8"/>
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-600">Resume</p>
                <a href="/Joyce_Fu___Resume.pdf" download className="text-lg font-bold text-gray-800 hover:text-yellow-500">
                  Download PDF
                </a>
              </div>
            </div>
          </div>

          <p className="text-center text-gray-600 mt-12">
            I typically respond within 24 hours. Looking forward to hearing from you!
          </p>
        </div>
      </div>
    </main>
  );
}
