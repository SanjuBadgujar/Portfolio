
import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Experience from './components/Experience';
import SkillExperience from './components/SkillExperience';

export default function App() {
  console.log("hi");
  return (
    <div className="bg-gray-900 text-white font-sans min-h-screen">
    
      <Navbar />
      <About />
      <SkillExperience />
      <Projects />
      <Footer />
    </div>
  );
}
