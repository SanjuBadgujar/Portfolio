import React from 'react';

export default function Navbar() {
  return (
    <nav className="p-4 bg-black text-white flex justify-between items-center">
      
      <div className="space-x-4">
        <a href="#about">About</a>
       <a href="#skill-experience">Skills & Experience</a>

        <a href="#projects">Projects</a>
        <a href="#footer">Contact</a>
      </div>
    </nav>
  );
}
