import React from 'react';

export default function Skills() {
  const skillCategories = {
    "Languages & Frameworks": ["Java", "Spring Boot", "JSP", "JDBC", "React.js", "HTML5", "CSS"],
    "Database & APIs": ["MySQL", "RESTful Web Services"],
    "Tools & Platforms": ["IntelliJ IDEA", "Eclipse", "VS Code", "Git", "GitHub", "Postman", "Maven"]
  };

  return (
    <div className="bg-gray-800 p-4 rounded text-white">
      <h3 className="text-xl font-bold mb-4">Skills</h3>
      <div className="space-y-4">
        {Object.entries(skillCategories).map(([category, skills]) => (
          <div key={category}>
            <h4 className="text-lg font-semibold mb-2">{category}</h4>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, idx) => (
                <span key={idx} className="bg-gray-700 px-3 py-1 rounded">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
