// src/components/Projects.jsx
import React from 'react';
import { motion } from 'framer-motion';
import projectsData from '../data/projects'; // Import your projects data

// Animation variants for the section (from the left)
const sectionVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

// Animation variants for the individual project cards (fade in up)
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function Projects() {
  return (
    <motion.section
      id="projects"
      className="projects-section"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }} // Trigger when 30% of the section is in view
    >
      <div className="container">
        <motion.h2
          className="section-title"
          variants={cardVariants} // Apply animation to the title as well
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }} // Trigger when 50% of the title is in view
        >
          My Projects
        </motion.h2>

        <div className="projects-grid">
          {/* Map over your projectsData to render each ProjectCard */}
          {projectsData.map(project => (
            <motion.div
              className="project-card"
              key={project.id} // Unique key is crucial for React list rendering performance and stability
              variants={cardVariants} // Apply animation to each card
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }} // Trigger when 30% of the card is in view
            >
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-techs">
                  { (project.techs ?? []).map((tech, index) => (
                    <span key={index} className="tech-badge">{tech}</span>
                     ))}
                </div>
                {/* Project Links Section */}
                <div className="project-links">
                  {project.liveLink && ( // Only render Live Demo button if liveLink exists
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-btn primary-btn">
                      Live Demo
                    </a>
                  )}
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-btn secondary-btn">
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default Projects;