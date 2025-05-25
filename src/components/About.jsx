import React from 'react';

export default function About() {
  return (
    <section id="about" className="p-8 flex flex-col md:flex-row items-center md:items-start text-left">
      {/* Left side image */}
      <div className="md:w-1/3 flex justify-center md:justify-start mb-6 md:mb-0">
        <img
          src="/profile.jpeg" // Ensure the image is in the public folder
          alt="Sanjana Dhanraj Badgujar"
          className="w-40 h-40 rounded-full object-cover border-4 border-gray-300"
        />
      </div>

      {/* Right side content */}
      <div className="md:w-2/3 md:pl-8 text-center md:text-left">
        <h2 className="text-4xl font-bold mb-2">Sanjana Dhanraj Badgujar</h2>
        <p className="text-xl mb-4">Full Stack Developer</p>
        <p className="max-w-2xl mb-4">
          Driven to craft scalable software solutions and explore emerging technologies. Passionate about coding, hackathons, and team collaboration.
        </p>
        <div className="space-x-4">
          <a href="/SANJANA DHANRAJ BADGUJAR COMP3.pdf" download className="px-4 py-2 border rounded">Download CV</a>
          <a href="#footer" className="px-4 py-2 border rounded">Contact</a>
        </div>
      </div>
    </section>
  );
}
