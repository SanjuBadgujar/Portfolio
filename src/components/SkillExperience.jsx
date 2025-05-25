import React from 'react';
import Skills from './Skills';
import Experience from './Experience';

export default function SkillExperience() {
  return (
    <section className="p-8 bg-gray-900" id="skill-experience">
      <h2 className="text-3xl font-bold mb-4 text-center text-white">Skills & Experience</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <Skills />
        <Experience />
      </div>
    </section>
  );
}
