import React from 'react';

export default function Projects() {
  return (
    <section id="projects" className="p-8">
      <h2 className="text-3xl font-bold mb-4">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-gray-800 p-4 rounded">
          <h3 className="text-xl font-bold">Work Nest</h3>
<p>Dec 2024 - Jan 2025</p>
<ul className="list-disc list-inside ml-4">
  <li>Developed a healthcare HR management system using React and Java.</li>
  <li>Integrated Axios for real-time API communication and used RESTful APIs for payroll and employee modules.</li>
  <li>Collaborated in an Agile team to improve system performance.</li>
</ul>
<div className="mt-2 space-x-4">

            <a href="https://github.com/SanjuBadgujar/Hospital_management_System" className="text-blue-400">GitHub</a>
         
          </div>
        </div>
        <div className="bg-gray-800 p-4 rounded">
          <h3 className="text-xl font-bold">Medi-Connect
          
          </h3>
         <p>Dec 2023 - Aug 2024</p>
<ul className="list-disc list-inside ml-4">
  <li>Designed and implemented an appointment booking system with real-time doctor availability.</li>
  <li>Built reusable React components, connected backend (Java + MySQL), and tested using Postman.</li>
  <li>Seamless navigation achieved using React Router.</li>
</ul>

          <div className="mt-2 space-x-4">
            <a href="https://github.com/SanjuBadgujar/Employee-Management--System" className="text-blue-400">GitHub</a>
          
          </div>
        </div>
      </div>
    </section>
  );
}
