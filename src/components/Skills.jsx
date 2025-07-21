import React from 'react';

// You can extend this list with more skills
const skills = {
  frontend: ['HTML', 'CSS', 'JavaScript', 'React', 'Responsive Design', 'Tailwind CSS'],
  backend: ['Node.js', 'Express.js', 'RESTful APIs'],
  databases: ['MongoDB', 'Mongoose (for Node.js)'],
  tools: ['Git', 'GitHub', 'VS Code', 'npm/Yarn'],
  concepts: ['Full-Stack Development', 'UI/UX Principles', 'Problem Solving', 'Version Control']
};

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">My Skills</h2>
        <div className="skills-grid">
          {Object.entries(skills).map(([category, skillList]) => (
            <div className="skill-category" key={category}>
              <h3 className="category-title">{category.replace(/\b\w/g, char => char.toUpperCase())}</h3> {/* Capitalize first letter */}
              <ul className="skill-list">
                {skillList.map((skill, index) => (
                  <li key={index} className="skill-item">{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;