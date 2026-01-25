"use client";
// app/education/page.tsx

import React, { useState, useEffect } from "react";
import Image from "next/image";
 
export default function Education() {
  const [openNYUCourses, setOpenNYUCourses] = useState(false);
  const [openSFSUCourses, setOpenSFSUCourses] = useState(false);
  const [openSFSUDean, setOpenSFSUDean] = useState(false);
  const [openSFSUDeanList, setOpenSFSUDeanList] = useState(false); // new state for Dean's List & Scholarship
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
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold mb-8 text-gray-800" style={{ fontFamily: "'Arvo', serif", letterSpacing: '0.05em' }}>EDUCATION</h2>
        <div className="max-w-4xl ml-0 space-y-10">
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
                <div>Pursuing Master's in Computer Science</div>
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
                  <div className="space-y-1 grid grid-cols-2 gap-x-6">
                    <div className="flex items-center gap-2">
                      <span className="text-blue-500">
                        {/* Chart icon for InfoVis */}
                        <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M3 17h2v-7H3v7zm4 0h2v-4H7v4zm4 0h2V7h-2v10zm4 0h2v-2h-2v2zm4 2H3v2h18v-2z"/></svg>
                      </span>
                      Information Visualization
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-purple-500">
                        {/* User icon for HCI */}
                        <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
                      </span>
                      Human Computer Interaction
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-green-600">
                        {/* Outline lock icon for security */}
                        <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="5" y="11" width="14" height="8" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                      </span>
                      Application Security
                    </div>
                  </div>
                </div>
              )}
            <div className="flex flex-col items-center mt-6 gap-3">
              <a
                href="/transcript.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 rounded-full text-white font-medium cursor-pointer shadow-md transition transform hover:scale-105"
                style={{ backgroundColor: '#66018f' }} // 使用 NYU 紫色
                tabIndex={0}
              >
                View Full NYU Transcript
              </a>
            </div>
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
            <div className="grid md:grid-cols-2 gap-6 mb-4 items-start">
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
              <div className="bg-gray-50 rounded-xl p-4 border border-gray-200 md:mt-0 mt-2">
                <div className="font-semibold text-gray-700 mb-1 flex items-center gap-2">
                  <span className="inline-block text-yellow-400">
                    {/* GPA: Star */}
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                  </span>
                  GPA
                </div>
                <div>
                  3.9 / 4.0
                  <span className="ml-2 inline-block px-2 py-0.5 text-xs font-semibold bg-yellow-50 text-yellow-800 rounded align-middle border border-yellow-200">Summa Cum Laude</span>
                </div>
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
                {/* Graduation Distinctions */}
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-gray-700 mb-1 flex items-center gap-2">
                      <span className="inline-block text-yellow-400">
                        {/* Trophy icon for Graduation Distinctions */}
                        <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M17 3a1 1 0 0 1 1 1v2a5 5 0 0 1-4 4.9V13h3a1 1 0 1 1 0 2h-3v2h2a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2h2v-2H7a1 1 0 1 1 0-2h3V8.9A5 5 0 0 1 6 6V4a1 1 0 0 1 1-1h10zm-1 2H8v1a3 3 0 0 0 6 0V5z"/></svg>
                      </span>
                      Graduation Distinctions
                    </div>
                    {/* <div className="text-lg text-gray-800 mt-1 mb-1">2 distinctions</div> */}
                    <span>2 distinctions</span>
                  </div>
                  <button
                    className="ml-2 px-2 py-1 text-xs bg-yellow-100 text-yellow-800 rounded hover:bg-yellow-200 transition"
                    onClick={() => setOpenSFSUDean((v) => !v)}
                    aria-expanded={openSFSUDean}
                  >
                    {openSFSUDean ? "Hide" : "Details"}
                  </button>
                </div>
                {openSFSUDean && (
                  <ul className="list-disc list-inside text-gray-700 text-sm space-y-1 mb-2 mt-2">
                    <li>Summa Cum Laude, <span className="font-bold">SFSU</span>, Class of 2025</li>
                    <li>Academic Excellence Award (Top of the Department), <span className="font-bold">FCU</span>, Class of 2025 (114級)</li>
                  </ul>
                )}
              </div>
              <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                {/* Dean’s List & Scholarship */}
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-gray-700 mb-1 flex items-center gap-2">
                      <span className="inline-block text-yellow-400">
                        {/* Ribbon icon */}
                        <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2a5 5 0 0 1 5 5c0 2.76-2.24 5-5 5s-5-2.24-5-5a5 5 0 0 1 5-5zm0 12c-3.31 0-6 2.69-6 6v2h2v-2c0-2.21 1.79-4 4-4s4 1.79 4 4v2h2v-2c0-3.31-2.69-6-6-6z"/></svg>
                      </span>
                      Dean’s List & Scholarship
                    </div>
                    {/* <div className="text-xl text-gray-800 mt-1 mb-1">5 semesters</div> */}
                    <span>5 semesters</span>
                  </div>
                  <button
                    className="ml-2 px-2 py-1 text-xs bg-yellow-100 text-yellow-800 rounded hover:bg-yellow-200 transition"
                    onClick={() => setOpenSFSUDeanList((v) => !v)}
                    aria-expanded={openSFSUDeanList}
                  >
                    {openSFSUDeanList ? "Hide" : "Details"}
                  </button>
                </div>
                {openSFSUDeanList && (
                  <ul className="list-disc list-inside text-gray-700 text-sm space-y-1 mt-2">
                    <li>Dean’s List, <span className="font-bold">SFSU</span>, Fall 2023, Spring 2024, Fall 2025, Spring 2024</li>
                    <li>Dean’s List, <span className="font-bold">FCU</span>, Spring 2023</li>
                    <li>Scholarship, <span className="font-bold">FCU</span>, Spring 2023</li>
                  </ul>
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
                onClick={() => setOpenSFSUCourses((v) => !v)}
                aria-expanded={openSFSUCourses}
              >
                <span className="flex items-center gap-2">
                  <span className="inline-block text-yellow-400">
                    {/* Book icon yellow */}
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M6 4v16c0 .55.45 1 1 1h11v-2H8V5c0-.55-.45-1-1-1zm13-1H7c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H7V5h12v16z"/></svg>
                  </span>
                  Relevant Courses
                </span>
                <svg className={`transform transition-transform ${openSFSUCourses ? 'rotate-180' : ''}`} width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg>
              </button>
              {openSFSUCourses && (
                <div className="px-4 py-3 text-gray-700">
                  <div className="space-y-1 grid grid-cols-2 gap-x-6">
                    <div className="flex items-center gap-2">
                      <span className="text-blue-500">
                        {/* Web icon */}
                        <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M3 4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4zm2 1v14h14V5H5zm2 2h10v2H7V7zm0 4h10v2H7v-2zm0 4h6v2H7v-2z"/></svg>
                      </span>
                      Web Software Development
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-pink-500">
                        {/* User icon */}
                        <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
                      </span>
                      Human-Computer Interaction
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-green-500">
                        {/* Gear icon */}
                        <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M19.14,12.94a7.07,7.07,0,0,0,.06-1,7.07,7.07,0,0,0-.06-1l2.11-1.65a.5.5,0,0,0,.12-.64l-2-3.46a.5.5,0,0,0-.61-.22l-2.49,1a7.28,7.28,0,0,0-1.73-1l-.38-2.65A.5.5,0,0,0,13,2h-4a.5.5,0,0,0-.5.42l-.38,2.65a7.28,7.28,0,0,0-1.73,1l-2.49-1a.5.5,0,0,0-.61.22l-2,3.46a.5.5,0,0,0,.12.64l2.11,1.65a7.07,7.07,0,0,0-.06,1,7.07,7.07,0,0,0,.06,1L2.86,14.59a.5.5,0,0,0-.12.64l2,3.46a.5.5,0,0,0,.61.22l2.49-1a7.28,7.28,0,0,0,1.73,1l.38,2.65A.5.5,0,0,0,9,22h4a.5.5,0,0,0,.5-.42l.38-2.65a7.28,7.28,0,0,0,1.73-1l2.49,1a.5.5,0,0,0,.61-.22l2-3.46a.5.5,0,0,0-.12-.64ZM12,15.5A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
                      </span>
                      Software Engineering
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-purple-500">
                        {/* Function/algorithm icon */}
                        <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M17 3a5 5 0 0 1 0 10c-.34 0-.67-.03-1-.08V21l-4-2-4 2v-8.08A5.002 5.002 0 0 1 7 3h10zm-5 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/></svg>
                      </span>
                      Data Structures & Algorithms
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-cyan-500">
                        {/* Network icon */}
                        <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M16 11V7a4 4 0 0 0-8 0v4a4 4 0 0 0 2 3.46V17a2 2 0 0 0 4 0v-2.54A4 4 0 0 0 16 11z"/></svg>
                      </span>
                      Computer Networks
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-gray-500">
                        {/* Cloud icon */}
                        <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 8.36 4 5.33 6.59 4.65 10.04 2.34 10.36 0.5 12.36 0.5 14.75c0 2.39 1.84 4.39 4.15 4.71C6.59 21.41 9.13 23 12 23c2.87 0 5.41-1.59 7.35-3.54 2.31-.32 4.15-2.32 4.15-4.71 0-2.39-1.84-4.39-4.15-4.71z"/></svg>
                      </span>
                      Cloud Computing
                    </div>
                  </div>
                </div>
              )}
              <div className="flex flex-col items-center mt-6 gap-3">
                {/* FCU 按鈕 - 使用深藍色 */}
                <a
                  href="/transcript.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 rounded-full text-white font-medium cursor-pointer shadow-md transition transform hover:scale-105"
                  style={{ backgroundColor: '#231261' }} // 與左側 Icon 顏色一致
                  tabIndex={0}
                >
                  View Full FCU Transcript
                </a>
                
                {/* SFSU 按鈕 - 使用 SFSU 紫金組合中的深紫/藍 */}
                <a
                  href="/sfsu-transcript.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 rounded-full text-white font-medium cursor-pointer shadow-md transition transform hover:scale-105"
                  style={{ backgroundColor: '#231261' }} // 統一使用深色調，或可以微調為更亮的紫色
                  tabIndex={0}
                >
                  View Full SFSU Transcript
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
