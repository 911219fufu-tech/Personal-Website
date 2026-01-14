// app/contact/page.tsx
//verified
export const metadata = {
  title: "Contact - Joyce Fu",
  description: "Get in touch with Joyce Fu",
};

export default function Contact() {
  return (
    <main className="w-full min-h-screen bg-gray-100 px-8 py-16 flex items-center justify-center">
      <div className="max-w-5xl mx-auto w-full">
        {/* Title with line */}
        <div className="flex items-center gap-0 mb-4">
          <div className="h-1 w-16 bg-gray-800"></div>
          <div className="w-3 h-3 rounded-full bg-gray-800"></div>
          <h2 className="text-6xl font-bold text-gray-800 ml-6" style={{ fontFamily: "'Arvo', serif" }}>CONTACT</h2>
        </div>

        {/* Subtitle */}
        <p className="text-2xl text-gray-600 mb-6">Feel free to contact me!</p>

        {/* Description */}
        <p className="text-gray-600 mb-12 max-w-2xl leading-relaxed">
          I'd love to hear from you! Whether you have a question, project idea, or just want to connect, feel free to reach out. I'll get back to you as soon as possible.
        </p>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Email */}
          <div className="text-center">
            <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2" style={{ fontFamily: "'Arvo', serif" }}>EMAIL</h3>
            <a href="mailto:jf5456@nyu.edu" className="text-gray-600 hover:text-yellow-500 transition">
              jf5456@nyu.edu
            </a>
          </div>

          {/* Phone */}
          <div className="text-center">
            <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.2 2.2z"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2" style={{ fontFamily: "'Arvo', serif" }}>PHONE</h3>
            <a href="tel:+16284882511" className="text-gray-600 hover:text-yellow-500 transition">
              +1 (628) 488-2511
            </a>
          </div>

          {/* LinkedIn */}
          <div className="text-center">
            <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6">
              <div className="bg-gray-800 rounded-md flex items-center justify-center" style={{ width: '40px', height: '40px' }}>
                <svg className="w-7 h-7" viewBox="0 0 448 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="448" height="512" rx="80" fill="#2c2c2c"/>
                  <path d="M100.28 448H7.4V148.9h92.88z" fill="#FFC107"/>
                  <circle cx="53.6" cy="53.6" r="53.6" fill="#FFC107"/>
                  <path d="M447.8 448h-92.4V302.4c0-34.7-12.4-58.4-43.3-58.4-23.6 0-37.6 15.9-43.7 31.3-2.3 5.6-2.8 13.4-2.8 21.2V448h-92.4s1.2-242.4 0-267.1h92.4v37.9c12.3-19 34.3-46.1 83.5-46.1 60.9 0 106.7 39.8 106.7 125.4V448z" fill="#FFC107"/>
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2" style={{ fontFamily: "'Arvo', serif" }}>LINKEDIN</h3>
            <a href="https://linkedin.com/in/jia-yin-fu" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-yellow-500 transition">
              jia-yin-fu
            </a>
          </div>
        </div>

        {/* Thank you message */}
        <div className="text-center">
          <p className="text-2xl font-bold text-gray-800" style={{ fontFamily: "'Arvo', serif", letterSpacing: '0.05em' }}>
            THANKS FOR PATIENCE!
          </p>
        </div>
      </div>
    </main>
  );
}
