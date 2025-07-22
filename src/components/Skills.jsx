// src/components/Skills.jsx
import React from 'react';
import { motion } from 'framer-motion'; // Import motion

// Reuse or define new variants
const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        }
    }
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
};


function Skills() {
  return (
    <motion.section
      id="skills"
      className="skills-section"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="container">
        <motion.h2 variants={sectionVariants} className="section-title">My Skills</motion.h2> {/* Animate title too */}
        <div className="skills-grid">
          {/* Frontend Card */}
          <motion.div variants={cardVariants} className="skill-card">
            <h3>Frontend</h3>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Responsive Design</li>
              <li>Tailwind CSS</li>
            </ul>
          </motion.div>

          {/* Backend Card */}
          <motion.div variants={cardVariants} className="skill-card">
            <h3>Backend</h3>
            <ul>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>RESTful APIs</li>
            </ul>
          </motion.div>

          {/* Databases Card */}
          <motion.div variants={cardVariants} className="skill-card">
            <h3>Databases</h3>
            <ul>
              <li>MongoDB</li>
              <li>Mongoose (for Node.js)</li>
            </ul>
          </motion.div>

          {/* Tools Card */}
          <motion.div variants={cardVariants} className="skill-card">
            <h3>Tools</h3>
            <ul>
              <li>Git</li>
              <li>GitHub</li>
              <li>VS Code</li>
              <li>npm/Yarn</li>
            </ul>
          </motion.div>

          {/* Concepts Card */}
          <motion.div variants={cardVariants} className="skill-card">
            <h3>Concepts</h3>
            <ul>
              <li>Full-Stack Development</li>
              <li>UI/UX Principles</li>
              <li>Problem Solving</li>
              <li>Version Control</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default Skills;