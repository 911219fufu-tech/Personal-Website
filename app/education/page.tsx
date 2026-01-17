"use client";
// app/education/page.tsx

import React, { useState, useEffect } from "react";
import Image from "next/image";
 
export default function Education() {
  const [openNYUCourses, setOpenNYUCourses] = useState(false);
  const [openSFSUCourses, setOpenSFSUCourses] = useState(false);
  const [openSFSUDean, setOpenSFSUDean] = useState(false);
  const [openSFSUCertificate, setOpenSFSUCertificate] = useState(false);
  // GPA bar animation state (for both GPA bars)
  const [gpaBar1, setGpaBar1] = useState(0); // for NYU card
  const [gpaBar2, setGpaBar2] = useState(0); // for SFSU/FCU card
  useEffect(() => {
    // Animate both bars to their target width after mount
    const timeout1 = setTimeout(() => setGpaBar1(100), 200); // 4.0/4.0 = 100%
    const timeout2 = setTimeout(() => setGpaBar2(97), 200); // 3.9/4.0 = 97%
    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
    };
  }, []);
  return (
    <main className="w-full min-h-screen bg-gray-100 px-8 py-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl font-bold mb-12 text-gray-800" style={{ fontFamily: "'Arvo', serif", letterSpacing: '0.05em' }}>EDUCATION</h2>
        <div className="space-y-10">
          {/* NYU */}
          <div className="relative bg-white/90 p-8 rounded-2xl border border-gray-200 shadow-lg overflow-hidden">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-full shadow-lg flex items-center justify-center w-16 h-16 overflow-hidden" style={{ backgroundColor: '#66018f' }}>
                <Image
                  src="/nyu-icon.png"
                  alt="NYU Logo"
                  width={40}
                  height={40}
                  style={{ objectFit: "cover" }}
                  className="rounded-full"
                  priority
                />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800">New York University, Tandon School of Engineering</h2>
                <div className="flex flex-wrap gap-4 mt-2 text-gray-600 text-base">
                  {/* <span className="bg-gray-100 px-3 py-1 rounded-full">M.S. in Computer Science</span> */}
                  {/* <span className="bg-gray-100 px-3 py-1 rounded-full">Sep 2025 - May 2027 (Expected)</span> */}
                </div>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6 mb-4">
              <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                <div className="font-semibold text-gray-700 mb-1 flex items-center gap-2">
                  <span className="inline-block text-yellow-400">
                    {/* Degree: Graduation cap */}
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zm0 2.18L18.6 9 12 12.82 5.4 9 12 5.18zM4 10.09V17h2v-4.91L4 10.09z"/></svg>
                  </span>
                  Degree
                </div>
                <div>Bachelor's in Computer Science</div>
              </div>
              <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                <div className="font-semibold text-gray-700 mb-1 flex items-center gap-2">
                  <span className="inline-block text-yellow-400">
                    {/* GPA: Star */}
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                  </span>
                  GPA
                </div>
                <div>4.0 / 4.0</div>
                <div className="w-full h-2 bg-gray-200 rounded-full mt-2 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-purple-400 via-purple-600 to-purple-900 rounded-full transition-all duration-1000"
                    style={{ width: `${gpaBar1}%` }}
                  ></div>
                </div>
              </div>
              <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                <div className="font-semibold text-gray-700 mb-1 flex items-center gap-2">
                  <span className="inline-block text-yellow-400">
                    {/* Duration: Calendar */}
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11zm0-13H5V6h14v1z"/></svg>
                  </span>
                  Duration
                </div>
                <div>Sep 2025 - May 2027 (Expected)</div>
              </div>
              <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                <div className="font-semibold text-gray-700 mb-1 flex items-center gap-2">
                  <span className="inline-block text-yellow-400">
                    {/* Dean's List: Ribbon */}
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2a5 5 0 0 1 5 5c0 2.76-2.24 5-5 5s-5-2.24-5-5a5 5 0 0 1 5-5zm0 12c-3.31 0-6 2.69-6 6v2h2v-2c0-2.21 1.79-4 4-4s4 1.79 4 4v2h2v-2c0-3.31-2.69-6-6-6z"/></svg>
                  </span>
                  Dean's List
                </div>
                <div>8 times</div>
              </div>
            </div>
            {/* Accordion for Relevant Courses */}
            <div className="mt-4">
              <button
                className="w-full flex items-center justify-between bg-gray-50 rounded-xl p-4 border border-gray-200 font-semibold text-gray-800 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
                onClick={() => setOpenNYUCourses((v) => !v)}
                aria-expanded={openNYUCourses}
              >
                <span className="flex items-center gap-2">
                  <span className="inline-block text-yellow-400">
                    {/* Book icon yellow */}
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M6 4v16c0 .55.45 1 1 1h11v-2H8V5c0-.55-.45-1-1-1zm13-1H7c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H7V5h12v16z"/></svg>
                  </span>
                  Relevant Courses
                </span>
                <svg className={`transform transition-transform ${openNYUCourses ? 'rotate-180' : ''}`} width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg>
              </button>
              {openNYUCourses && (
                <div className="px-4 py-3 text-gray-700">
                  Information Visualization, Human Computer Interaction
                </div>
              )}
            </div>
          </div>
          {/* SFSU/FCU */}
       <div className="relative bg-white/90 p-8 rounded-2xl border border-gray-200 shadow-lg overflow-hidden">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-full shadow-lg flex items-center justify-center w-16 h-16 overflow-hidden" style={{ backgroundColor: '#231261' }}>
                <Image
                  src="/sfsu-icon.png"
                  alt="SFSU Logo"
                  width={100}
                  height={100}
                  style={{ objectFit: "cover" }}
                  className="rounded-full"
                  priority
                />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800">San Francisco State University / Feng Chia University</h2>
                <div className="flex flex-wrap gap-4 mt-2 text-gray-600 text-base">
                  {/* <span className="bg-gray-100 px-3 py-1 rounded-full">B.S. in Computer Science(dual degree)</span>
                  <span className="bg-gray-100 px-3 py-1 rounded-full">Aug 2021 - May 2025</span> */}
                </div>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6 mb-4">
              <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                <div className="font-semibold text-gray-700 mb-1 flex items-center gap-2">
                  <span className="inline-block text-yellow-400">
                    {/* Degree: Graduation cap */}
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zm0 2.18L18.6 9 12 12.82 5.4 9 12 5.18zM4 10.09V17h2v-4.91L4 10.09z"/></svg>
                  </span>
                  Degree
                </div>
                <div>Bachelor's in Computer Science(Dual Degree)</div>
              </div>
              <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                <div className="font-semibold text-gray-700 mb-1 flex items-center gap-2">
                  <span className="inline-block text-yellow-400">
                    {/* GPA: Star */}
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                  </span>
                  GPA
                </div>
                <div>3.9 / 4.0</div>
                <div className="w-full h-2 bg-gray-200 rounded-full mt-2 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-purple-400 via-purple-600 to-purple-900 rounded-full transition-all duration-1000"
                    style={{ width: `${gpaBar2}%` }}
                  ></div>
                </div>
              </div>
              <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                <div className="font-semibold text-gray-700 mb-1 flex items-center gap-2">
                  <span className="inline-block text-yellow-400">
                    {/* Duration: Calendar */}
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11zm0-13H5V6h14v1z"/></svg>
                  </span>
                  Duration
                </div>
                <div>Aug 2021 – May 2025</div>
              </div>
              <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                <div className="font-semibold text-gray-700 mb-1 flex items-center gap-2">
                  <span className="inline-block text-yellow-400">
                    {/* Dean's List & Scholarship: Ribbon */}
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2a5 5 0 0 1 5 5c0 2.76-2.24 5-5 5s-5-2.24-5-5a5 5 0 0 1 5-5zm0 12c-3.31 0-6 2.69-6 6v2h2v-2c0-2.21 1.79-4 4-4s4 1.79 4 4v2h2v-2c0-3.31-2.69-6-6-6z"/></svg>
                  </span>
                  Dean's List & Scholarship
                </div>
                <div className="flex items-center justify-between">
                  <span>5 semesters</span>
                  <button
                    className="ml-2 px-2 py-1 text-xs bg-yellow-100 text-yellow-800 rounded hover:bg-yellow-200 transition"
                    onClick={() => setOpenSFSUDean((v) => !v)}
                    aria-expanded={openSFSUDean}
                  >
                    {openSFSUDean ? "Hide" : "Details"}
                  </button>
                </div>
                {openSFSUDean && (
                  <div className="mt-2 text-gray-700 text-sm">
                    <div className="font-semibold mb-1">Dean's List</div>
                    <ul className="list-disc list-inside mb-2">
                      <li><span className="font-bold">FCU</span> — Spring 2023</li>
                      <li><span className="font-bold">SFSU</span> — Fall 2023, Spring 2024, Fall 2024, Spring 2025</li>
                    </ul>
                    <div className="font-semibold mb-1">Scholarship</div>
                    <ul className="list-disc list-inside">
                      <li><span className="font-bold">FCU</span> — Spring 2023</li>
                    </ul>
                  </div>
                )}
              </div>
              {/* Certificate Area */}
              <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                <div className="font-semibold text-gray-700 mb-1 flex items-center gap-2">
                  <span className="inline-block text-yellow-400">
                    {/* Certificate: Award icon */}
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M17 3a5 5 0 0 1 0 10c-.34 0-.67-.03-1-.08V21l-4-2-4 2v-8.08A5.002 5.002 0 0 1 7 3h10zm-5 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/></svg>
                  </span>
                  Certificate
                </div>
                <div className="flex items-center justify-between">
                  <span>4 certificates</span>
                  <button
                    className="ml-2 px-2 py-1 text-xs bg-yellow-100 text-yellow-800 rounded hover:bg-yellow-200 transition"
                    onClick={() => setOpenSFSUCertificate((v) => !v)}
                    aria-expanded={openSFSUCertificate}
                  >
                    {openSFSUCertificate ? "Hide" : "Details"}
                  </button>
                </div>
                {openSFSUCertificate && (
                  <ul className="list-disc list-inside text-gray-700 text-sm space-y-2 mt-2">
                    <li>
                      <span className="font-semibold">Innovation News Reading Certificate</span>
                      <div className="ml-4 text-gray-500 text-xs">FCU, Dec. 2021</div>
                    </li>
                    <li>
                      <span className="font-semibold">Programming Fundamentals Certificate</span>
                      <div className="ml-4 text-gray-500 text-xs">FCU, Jan. 2022</div>
                    </li>
                    <li>
                      <span className="font-semibold">AWS Academy Graduate - AWS Academy Cloud Foundations</span>
                      <div className="ml-4 text-gray-500 text-xs">Amazon Web Services (AWS), Dec. 2022</div>
                    </li>
                    <li>
                      <span className="font-semibold">Value Proposition and Customer Discovery</span>
                      <div className="ml-4 text-gray-500 text-xs">University of California, Irvine, May 2025</div>
                    </li>
                  </ul>
                )}
              </div>
            </div>
            {/* Accordion for Relevant Courses */}
            <div className="mt-4">
              <button
                className="w-full flex items-center justify-between bg-gray-50 rounded-xl p-4 border border-gray-200 font-semibold text-gray-800 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
                onClick={() => setOpenNYUCourses((v) => !v)}
                aria-expanded={openNYUCourses}
              >
                <span className="flex items-center gap-2">
                  <span className="inline-block text-yellow-400">
                    {/* Book icon yellow */}
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M6 4v16c0 .55.45 1 1 1h11v-2H8V5c0-.55-.45-1-1-1zm13-1H7c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H7V5h12v16z"/></svg>
                  </span>
                  Relevant Courses
                </span>
                <svg className={`transform transition-transform ${openNYUCourses ? 'rotate-180' : ''}`} width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg>
              </button>
              {openNYUCourses && (
                <div className="px-4 py-3 text-gray-700">
                  Information Visualization, Human Computer Interaction
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
